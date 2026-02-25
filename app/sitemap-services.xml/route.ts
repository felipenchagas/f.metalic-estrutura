import { NextResponse } from 'next/server'
import { services } from '@/lib/services'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metalic-estrutura.com.br'
    const currentDate = new Date().toISOString()

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    // Add Services
    services.forEach((srv) => {
        xml += `  <url>
    <loc>${baseUrl}/servicos/${srv.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`
    })

    xml += '</urlset>'

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    })
}
