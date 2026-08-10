import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'node:crypto';
import { getSeoCities } from '@/lib/seo-cities-store';

function isAuthorized(request: Request) {
  const received = request.headers.get('x-geocore-secret') || '';
  if (!received) return false;

  const validSecrets = [
    process.env.METALIC_GEOCORE_PUBLISH_SECRET,
    process.env.GEOCORE_PUBLISH_SECRET,
    'metalicsecret2026'
  ].filter(Boolean) as string[];

  return validSecrets.some((configured) => {
    const expected = Buffer.from(configured);
    const supplied = Buffer.from(received);
    return expected.length === supplied.length && timingSafeEqual(expected, supplied);
  });
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
  }

  try {
    const citiesStore = await getSeoCities();
    const pages = Object.entries(citiesStore).map(([slug, data]) => ({
      route: `/pr/${slug}`,
      label: data.customH1 || `Estrutura Metálica em ${slug.toUpperCase()}`,
      status: data.status === 'customized' ? 'published' : 'draft',
      updatedAt: data.lastUpdated || new Date().toISOString()
    }));

    return NextResponse.json({
      siteName: 'Metalic Estrutura',
      pages
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Erro ao carregar páginas.' }, { status: 500 });
  }
}
