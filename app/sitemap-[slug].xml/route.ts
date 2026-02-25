import { NextResponse } from 'next/server'
import { getCitySeo } from '@/lib/seo-cities-store'
import { getNeighborhoodSeo } from '@/lib/seo-neighborhoods-store'

// O Next.js nos abençoa com rotas dinâmicas como /sitemap-[slug].xml onde slug captura a cidade
// Acessaremos context.params.slug para alimentar a base de dados
export async function GET(request: Request, context: any) {
    const params = await context.params
    const slug = params.slug
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metalic-estrutura.com.br'

    const cityData = await getCitySeo(slug)

    // Se baterem num XML solto que não existe mais ou que não é mais VIP (<= 4 bairros), retornamos vazio
    if (!cityData || !cityData.neighborhoods || cityData.neighborhoods.length <= 4) {
        // Fallback gracefully instead of throwing 500 error allowing Google to process
        return new NextResponse('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
            headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'no-store' }
        })
    }

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    // Adiciona o UrlSet de todos os bairros filhotes (ex: Centro, Água Verde) dessa capital
    for (const nb of cityData.neighborhoods) {
        // Buscar se há override de seo pro bairro, falhando quietamente p/ a data atual do build
        const nbData = await getNeighborhoodSeo(slug, nb.slug)
        const lastMod = nbData?.lastUpdated || new Date().toISOString()

        xml += `  <url>
    <loc>${baseUrl}/pr/${slug}/${nb.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`
    }

    xml += '</urlset>'

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            // Cache Forte: Evita consultas ao JSON pesadíssimas se abrirem múltiplas urbes rápidas
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    })
}
