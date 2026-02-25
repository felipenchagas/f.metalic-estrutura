import { NextResponse } from 'next/server'
import { getCitySeo } from '@/lib/seo-cities-store'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metalic-estrutura.com.br'
    const currentDate = new Date().toISOString()
    const { citiesPR } = await import('@/lib/cities')
    const { getSeoCities } = await import('@/lib/seo-cities-store')

    const seoData = await getSeoCities()

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    for (const city of citiesPR) {
        const citySeo = seoData[city.slug]
        const hasNeighborhoods = citySeo && citySeo.neighborhoods && citySeo.neighborhoods.length > 0

        // Cidades sem bairros entram no mapa consolidado geral do PR
        if (!hasNeighborhoods) {
            const lastMod = citySeo?.lastUpdated || currentDate

            xml += `  <url>
    <loc>${baseUrl}/pr/${city.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>\n`
        }
    }

    xml += '</urlset>'

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    })
}
