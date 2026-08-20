import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';

export const dynamic = 'force-dynamic';

export async function GET() {
  let pages: any[] = [];
  try {
    const filePath = path.join(process.cwd(), 'data', 'geocore-pages.json');
    const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
    pages = Object.values(data).filter((p: any) => p.status === 'active');
  } catch {}

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p: any) => `  <url>
    <loc>https://metalic-estrutura.com.br${p.path}</loc>
    <lastmod>${new Date(p.updatedAt || Date.now()).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=60',
    },
  });
}
