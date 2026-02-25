import { NextResponse } from 'next/server'
import { getNeighborhoodSeo } from '@/lib/seo-neighborhoods-store'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metalic-estrutura.com.br'
    const { citiesPR } = await import('@/lib/cities')
    const { getSeoCities } = await import('@/lib/seo-cities-store')

    const seoData = await getSeoCities()

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    for (const city of citiesPR) {
        const citySeo = seoData[city.slug]
        const nbLength = citySeo?.neighborhoods?.length || 0

        // Agrupa APENAS os bairros de cidades que têm <= 4 bairros
        if (nbLength > 0 && nbLength <= 4) {
            for (const nb of citySeo.neighborhoods) {
                // Tenta puxar SEO específico do bairro, se não, usa a data atual
                const nbData = await getNeighborhoodSeo(city.slug, nb.slug)
                const lastMod = nbData?.lastUpdated || new Date().toISOString()

                xml += `  <url>
    <loc>${baseUrl}/pr/${city.slug}/${nb.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`
            }
        }
    }

    xml += '</urlset>'

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            // Cache Forte: Aglomerado de bairros precisa ser cacheado para não derrubar banco JSON
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    })
}
