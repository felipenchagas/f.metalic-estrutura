import { NextRequest, NextResponse } from "next/server";
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const backupRoot = path.resolve(process.cwd(), "data", "backups");
const dataRoot = path.resolve(process.cwd(), "data");
const validName = (name: string | null) => Boolean(name && /^metalic-\d{8}-\d{6}\.json$/.test(name));
const authorized = (request: NextRequest) => request.cookies.get("admin_auth")?.value === (process.env.ADMIN_PASSWORD || "");

async function dataSnapshot() {
  const names = await readdir(dataRoot, { withFileTypes: true });
  const files = names.filter(entry => entry.isFile() && entry.name.endsWith(".json")).map(entry => entry.name);
  const entries = await Promise.all(files.map(async name => [name, JSON.parse(await readFile(path.join(dataRoot, name), "utf8"))] as const));
  return Object.fromEntries(entries);
}

export async function POST(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  try {
    await mkdir(backupRoot, { recursive: true });
    const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "").replace("T", "-");
    const name = `metalic-${stamp}.json`; const filePath = path.join(backupRoot, name);
    if (!filePath.startsWith(`${backupRoot}${path.sep}`)) throw new Error("Destino de backup inválido.");
    await writeFile(filePath, JSON.stringify({ createdAt: new Date().toISOString(), data: await dataSnapshot() }, null, 2), "utf8");
    const info = await stat(filePath); return NextResponse.json({ name, size: info.size });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Não foi possível gerar o backup." }, { status: 500 }); }
}

export async function GET(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  const name = request.nextUrl.searchParams.get("file"); if (!validName(name)) return NextResponse.json({ error: "Arquivo inválido." }, { status: 400 });
  const filePath = path.join(backupRoot, name!); if (!filePath.startsWith(`${backupRoot}${path.sep}`)) return NextResponse.json({ error: "Arquivo inválido." }, { status: 400 });
  try { const [content, info] = await Promise.all([readFile(filePath), stat(filePath)]); return new NextResponse(content, { headers: { "Content-Type": "application/json", "Content-Length": String(info.size), "Content-Disposition": `attachment; filename=\"${name}\"` } }); }
  catch { return NextResponse.json({ error: "Backup não encontrado." }, { status: 404 }); }
}
