import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'node:crypto';
import { updateCitySeo } from '@/lib/seo-cities-store';

function isAuthorized(request: Request) {
  const received = request.headers.get('x-geocore-secret') || '';
  if (!received) return false;

  const validSecrets = [
    process.env.METALIC_GEOCORE_PUBLISH_SECRET,
    process.env.GEOCORE_PUBLISH_SECRET
  ].filter(Boolean) as string[];

  return validSecrets.some((configured) => {
    const expected = Buffer.from(configured);
    const supplied = Buffer.from(received);
    return expected.length === supplied.length && timingSafeEqual(expected, supplied);
  });
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Publicação não autorizada.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { path, citySlug, publishable, publicationId } = body;

    if (!citySlug || !publishable || !publicationId) {
      return NextResponse.json({ error: 'Pacote de publicação incompleto.' }, { status: 400 });
    }

    // Atualiza o store SEO da cidade
    await updateCitySeo(citySlug, {
      customH1: publishable.h1 || '',
      customMetaTitle: publishable.title || '',
      customMetaDesc: publishable.meta_description || '',
      customHeroText: publishable.introduction || '',
      customText1: publishable.city_context || '',
      customText2: publishable.service_connection || '',
      isManual: true,
      geoCorePublicationId: String(publicationId),
      geoCorePublishedAt: new Date().toISOString()
    });

    return NextResponse.json({
      ok: true,
      published: true,
      path: path || `/pr/${citySlug}`,
      publicationId: String(publicationId),
      updatedAt: new Date().toISOString()
    });
  } catch (err: any) {
    console.error('Erro na rota de publicação GeoCore (Metalic):', err);
    return NextResponse.json({ error: err?.message || 'Falha ao processar publicação.' }, { status: 500 });
  }
}
