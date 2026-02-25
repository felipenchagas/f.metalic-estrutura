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
        const nbLength = citySeo?.neighborhoods?.length || 0
        const lastMod = citySeo?.lastUpdated || currentDate

        // Calcula a prioridade da cidade com base no número de bairros
        let priority = '0.6'
        if (city.slug === 'curitiba') {
            priority = '1.0'
        } else if (nbLength > 10) {
            priority = '0.9'
        } else if (nbLength > 4) {
            priority = '0.8'
        }

        // Adiciona TODAS as cidades ao sitemap do Paraná, sem exceção e sem bairros
        xml += `  <url>
    <loc>${baseUrl}/pr/${city.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>\n`
    }

    xml += '</urlset>'

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    })
}
