import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metalic-estrutura.com.br'
  const currentDate = new Date().toISOString()

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  // Main Sitemap (Home, Contato, Sobre)
  xml += `  <sitemap>
    <loc>${baseUrl}/sitemap-main.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>\n`

  // Services Sitemap
  xml += `  <sitemap>
    <loc>${baseUrl}/sitemap-services.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>\n`

  // SEO Pages Sitemap (Obras, Guias, Notícias)
  xml += `  <sitemap>
    <loc>${baseUrl}/sitemap-seo-pages.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>\n`

  // State Sitemap (Aggregates all cities)
  xml += `  <sitemap>
    <loc>${baseUrl}/sitemap-parana.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>\n`

  xml += '</sitemapindex>'

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
