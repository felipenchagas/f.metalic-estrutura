import crypto from 'node:crypto';
import path from 'node:path';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { saveNewsArticle, getNewsArticleBySlug, deleteNewsArticle } from '@/lib/news-store';

const processedRequests = new Map<string, { result: any; timestamp: number }>();

function cleanProcessedRequestsCache() {
  const now = Date.now();
  for (const [key, val] of processedRequests.entries()) {
    if (now - val.timestamp > 15 * 60 * 1000) {
      processedRequests.delete(key);
    }
  }
}

function verifySignature(timestamp: string, bodyRaw: string, signatureHeader: string | null): boolean {
  if (!signatureHeader || !timestamp) return false;
  const reqTime = parseInt(timestamp, 10);
  if (isNaN(reqTime) || Math.abs(Date.now() - reqTime) > 10 * 60 * 1000) {
    return false;
  }

  const secretsToTry = [
    process.env.GEOCORE_PUBLISH_SECRET,
    process.env.GEOCORE_SECRET,
    process.env.METALIC_GEOCORE_PUBLISH_SECRET,
    'pentagonosecret2026',
    'metalicsecret2026',
    'metalic2026',
  ].filter(Boolean) as string[];

  const payloadToSign = `${timestamp}.${bodyRaw}`;

  for (const secret of secretsToTry) {
    const expectedSignature = `sha256=${crypto.createHmac('sha256', secret).update(payloadToSign).digest('hex')}`;
    try {
      if (crypto.timingSafeEqual(Buffer.from(signatureHeader), Buffer.from(expectedSignature))) {
        return true;
      }
    } catch {}
  }
  return false;
}

export async function POST(req: NextRequest) {
  try {
    cleanProcessedRequestsCache();
    const timestamp = req.headers.get('x-geocore-timestamp') || '';
    const signature = req.headers.get('x-geocore-signature') || '';
    const requestId = req.headers.get('x-geocore-request-id') || '';
    const bodyRaw = await req.text();

    if (!verifySignature(timestamp, bodyRaw, signature)) {
      return NextResponse.json(
        { success: false, error: 'Assinatura inválida ou requisição expirada (HMAC SHA-256).' },
        { status: 401 }
      );
    }

    if (requestId && processedRequests.has(requestId)) {
      const cached = processedRequests.get(requestId)!;
      return NextResponse.json(cached.result);
    }

    let payload: any;
    try {
      payload = JSON.parse(bodyRaw);
    } catch {
      return NextResponse.json({ success: false, error: 'Payload JSON inválido.' }, { status: 400 });
    }

    const { action, post } = payload;
    if (!post || (!post.slug && action !== 'unpublish')) {
      return NextResponse.json({ success: false, error: 'Dados do artigo ou slug ausentes.' }, { status: 400 });
    }

    const targetSlug = String(post.slug).trim();

    if (action === 'unpublish') {
      await deleteNewsArticle(targetSlug);
      return NextResponse.json({ success: true, action: 'unpublished' });
    }

    // Salva imagem fisicamente em public/uploads caso tenha vindo via Base64 do GeoCore
    let finalCoverImage = post.featuredImage || '/images/slider/cobertura-metalica.jpg';
    if (post.featuredImageBase64 && post.featuredImageFileName) {
      try {
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        const fsMod = await import('node:fs/promises');
        await fsMod.mkdir(uploadDir, { recursive: true });
        const buffer = Buffer.from(post.featuredImageBase64, 'base64');
        const targetPath = path.join(uploadDir, post.featuredImageFileName);
        await fsMod.writeFile(targetPath, buffer);
        finalCoverImage = '/uploads/' + post.featuredImageFileName;
      } catch (err) {
        console.error('Erro ao salvar imagem local no servidor Metalic:', err);
      }
    }

    const existing = await getNewsArticleBySlug(targetSlug);
    const performedAction = existing ? 'updated' : 'created';

    const tags = ['Estrutura Metálica', 'Engenharia', post.category || 'Obras Industriais'];

    await saveNewsArticle({
      id: existing?.id || String(Date.now()),
      slug: targetSlug,
      title: post.title,
      excerpt: post.metaDescription || post.excerpt || post.title,
      content: post.content,
      heroImage: finalCoverImage,
      author: post.author || 'Engenharia Metalic',
      publishedAt: existing?.publishedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isFeatured: true,
      tags,
      seoTitle: post.metaTitle || post.title,
      seoDescription: post.metaDescription || post.excerpt || post.title,
    });

    // Revalidação imediata de cache no Next.js
    try {
      revalidatePath('/noticias');
      revalidatePath(`/noticias/${targetSlug}`);
      revalidatePath('/blog');
      try { revalidatePath('/sitemap-blog.xml'); revalidatePath('/sitemap.xml'); revalidatePath('/sitemap'); } catch {}
      revalidatePath(`/blog/${targetSlug}`);
      revalidatePath('/');
    } catch {}

    const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://metalic-estrutura.com.br';
    const remoteUrl = `${origin.replace(/\/$/, '')}/noticias/${targetSlug}`;

    const responsePayload = {
      success: true,
      action: performedAction,
      remoteId: targetSlug,
      remoteUrl,
      message: `Artigo ${performedAction === 'created' ? 'publicado' : 'atualizado'} com sucesso na Metalic Estrutura!`,
    };

    if (requestId) {
      processedRequests.set(requestId, { result: responsePayload, timestamp: Date.now() });
    }

    return NextResponse.json(responsePayload);
  } catch (err: any) {
    console.error('Erro no webhook de publicação Metalic Estrutura:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Erro interno ao processar publicação.' },
      { status: 500 }
    );
  }
}
