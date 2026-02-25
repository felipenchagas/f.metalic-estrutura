import { NextResponse } from 'next/server'
import { getCitySeo } from '@/lib/seo-cities-store'
import { getNeighborhoodSeo } from '@/lib/seo-neighborhoods-store'

type Props = { params: Promise<{ cidade: string }> }

export async function GET(request: Request, { params }: Props) {
    const { cidade } = await params
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metalic-estrutura.com.br'

    const cityData = await getCitySeo(cidade)

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    // Adiciona a página matriz da Cidade
    xml += `  <url>
    <loc>${baseUrl}/pr/${cidade}</loc>
    <lastmod>${cityData?.lastUpdated || new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`

    // Adiciona os bairros da Cidade (se existirem)
    if (cityData?.neighborhoods && cityData.neighborhoods.length > 0) {
        for (const nb of cityData.neighborhoods) {
            const nbData = await getNeighborhoodSeo(cidade, nb.slug)
            const lastMod = nbData?.lastUpdated || new Date().toISOString()

            xml += `  <url>
    <loc>${baseUrl}/pr/${cidade}/${nb.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
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
