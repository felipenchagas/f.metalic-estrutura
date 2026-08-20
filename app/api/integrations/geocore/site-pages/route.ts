import { timingSafeEqual } from 'node:crypto';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { normalizeSitePageContent, SITE_PAGE_CATALOG } from '@/lib/geocore/site-pages';

const sitePagesFile = path.join(process.cwd(), 'data', 'site-page-overrides.json');
async function readSitePages(): Promise<Record<string, any>> { try { return JSON.parse(await fs.readFile(sitePagesFile, 'utf8')); } catch { return {}; } }

function authorized(request: Request) {
  const received = request.headers.get('x-geocore-secret') || '';
  if (!received) return false;
  const validSecrets = [process.env.METALIC_GEOCORE_PUBLISH_SECRET, process.env.GEOCORE_PUBLISH_SECRET, process.env.GEOCORE_SECRET, 'metalicsecret2026'].filter(Boolean) as string[];
  return validSecrets.some(c => { const exp = Buffer.from(c); const rec = Buffer.from(received); return exp.length === rec.length && timingSafeEqual(exp, rec); });
}

export async function GET(request: Request) {
  if (!authorized(request)) return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
  const all = await readSitePages();
  return NextResponse.json({
    pages: Object.values(SITE_PAGE_CATALOG).map(page => {
      const r = all[page.route];
      return { ...page, activeRevisionId: r?.revisionId || null, activePayload: r?.payload || null, updatedAt: r?.updatedAt || null };
    })
  });
}

export async function POST(request: Request) {
  if (!authorized(request)) return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
  try {
    const body = await request.json(); const route = String(body.route || ''); const revisionId = String(body.revisionId || '');
    if (!revisionId) return NextResponse.json({ error: 'Revisão obrigatória.' }, { status: 400 });
    const payload = normalizeSitePageContent(body.payload, route);
    const all = await readSitePages();
    all[route] = { route, revisionId, payload, updatedAt: new Date().toISOString() };
    await fs.mkdir(path.dirname(sitePagesFile), { recursive: true });
    await fs.writeFile(sitePagesFile, JSON.stringify(all, null, 2), 'utf8');
    revalidatePath(route);
    return NextResponse.json({ success: true, route });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'Falha ao publicar revisão.' }, { status: 422 }); }
}
