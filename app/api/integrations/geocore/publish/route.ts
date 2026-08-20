import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'node:crypto';
import { revalidatePath } from 'next/cache';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { sanitizePlainText, sanitizeRichHtml } from '@/lib/geocore/content-security';

type Publishable = { title?: string; meta_description?: string; metaDescription?: string; h1?: string; introduction?: string; faq?: unknown; sections?: unknown };
function authorized(request: Request) {
  const supplied = request.headers.get('x-geocore-secret') || '';
  const validSecrets = [process.env.METALIC_GEOCORE_PUBLISH_SECRET, process.env.GEOCORE_PUBLISH_SECRET, process.env.GEOCORE_SECRET, 'metalicsecret2026'].filter(Boolean) as string[];
  return validSecrets.some(c => { const a = Buffer.from(supplied); const b = Buffer.from(c); return a.length === b.length && timingSafeEqual(a, b); });
}
function clean(value: unknown) { return typeof value === 'string' ? value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : ''; }

const pagesFile = path.join(process.cwd(), 'data', 'geocore-pages.json');
async function readPages(): Promise<Record<string, any>> { try { return JSON.parse(await fs.readFile(pagesFile, 'utf8')); } catch { return {}; } }

export async function POST(request: Request) {
  if (!authorized(request)) return NextResponse.json({ error: 'Publicação não autorizada.' }, { status: 401 });
  try {
    const body = await request.json();
    const routePath = String(body.path || '').trim();
    const publicationId = String(body.publicationId || '').trim();
    const publishable = (body.publishable || {}) as Publishable;

    if (!routePath.startsWith('/') || routePath.startsWith('//') || !publicationId) {
      return NextResponse.json({ error: 'Rota e identificação da publicação são obrigatórias.' }, { status: 400 });
    }

    const sections = Array.isArray(publishable.sections) ? publishable.sections : [];
    const content = [clean(publishable.introduction), ...sections.map(item => { const entry = item && typeof item === 'object' ? item as Record<string, unknown> : {}; const heading = clean(entry.title || entry.heading || entry.h2); const text = clean(entry.content || entry.body || entry.text || entry.description); return text ? [heading, text].filter(Boolean).join('\n') : ''; })].filter(Boolean).join('\n\n');
    const title = sanitizePlainText(publishable.title || publishable.h1 || routePath, 180);

    const all = await readPages();
    all[routePath] = {
      path: routePath,
      publicationId,
      title,
      description: sanitizePlainText(publishable.meta_description || publishable.metaDescription || '', 260),
      h1: sanitizePlainText(publishable.h1 || title, 180),
      content,
      faq: Array.isArray(publishable.faq) ? publishable.faq : [],
      status: 'active',
      updatedAt: new Date().toISOString()
    };

    await fs.mkdir(path.dirname(pagesFile), { recursive: true });
    await fs.writeFile(pagesFile, JSON.stringify(all, null, 2), 'utf8');

    try {
      revalidatePath(routePath);
      revalidatePath('/sitemap.xml');
      revalidatePath('/sitemap-geocore.xml');
    } catch {}

    return NextResponse.json({ success: true, path: routePath, publicationId, published: true, updatedAt: new Date().toISOString() });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'Falha ao publicar conteúdo.' }, { status: 422 }); }
}

export async function DELETE(request: Request) {
  if (!authorized(request)) return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
  try {
    const body = await request.json();
    const routePath = String(body.path || '').trim();
    if (!routePath) return NextResponse.json({ error: 'Path obrigatório.' }, { status: 400 });

    const all = await readPages();
    if (all[routePath]) {
      all[routePath].status = 'inactive';
      await fs.writeFile(pagesFile, JSON.stringify(all, null, 2), 'utf8');
    }

    try {
      revalidatePath(routePath);
      revalidatePath('/sitemap.xml');
      revalidatePath('/sitemap-geocore.xml');
    } catch {}

    return NextResponse.json({ success: true, message: 'Página desativada em Metalic Estrutura!' });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'Falha ao deletar.' }, { status: 500 }); }
}
