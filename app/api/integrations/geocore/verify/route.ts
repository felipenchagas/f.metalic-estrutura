import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'node:crypto';
import { getCitySeo } from '@/lib/seo-cities-store';

function isAuthorized(request: Request) {
  const received = request.headers.get('x-geocore-secret') || '';
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

export async function GET(request: Request) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });

  const url = new URL(request.url);
  const citySlug = url.searchParams.get('citySlug')?.trim()
    || url.searchParams.get('path')?.match(/^\/pr\/([^/?#]+)/)?.[1];

  if (!citySlug) return NextResponse.json({ error: 'A cidade publicada é obrigatória.' }, { status: 400 });

  try {
    const record = await getCitySeo(citySlug);
    if (!record?.geoCorePublicationId) return NextResponse.json({ status: 'NOT_FOUND' });

    return NextResponse.json({
      status: 'MATCH',
      publicationId: record.geoCorePublicationId,
      updatedAt: record.geoCorePublishedAt || record.lastUpdated,
      pageData: {
        h1: record.customH1,
        title: record.customMetaTitle,
        meta_description: record.customMetaDesc,
        introduction: record.customHeroText,
        city_context: record.customText1,
        service_connection: record.customText2
      }
    });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Falha ao verificar publicação.' }, { status: 500 });
  }
}
