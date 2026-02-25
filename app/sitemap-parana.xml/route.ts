import { NextResponse } from 'next/server'
import { getCitySeo } from '@/lib/seo-cities-store'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metalic-estrutura.com.br'

    // We import dynamically to match structure
    const { citiesPR } = await import('@/lib/cities')

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    // This MUST be a urlset, not a sitemapindex! (This caused the Nested Error)
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    // We fetch concurrent lastMod for precise dating, fallback to current
    const currentDate = new Date().toISOString()

    for (const city of citiesPR) {
        // Obter os dados em lote demora, logo usaremos o Date padrão caso genérico, 
        // mas a URL final aponta pra página da Cidade e pro XML dinâmico dela.
        // Espera aí! Se o Google só aponta Sitemaps no GSC, este agrupador de Paraná tem duas opções

        xml += `  <url>
    <loc>${baseUrl}/pr/${city.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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
