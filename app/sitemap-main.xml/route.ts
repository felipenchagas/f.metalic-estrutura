import { NextResponse } from 'next/server'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metalic-estrutura.com.br'
    const currentDate = new Date().toISOString()

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    const staticRoutes = [
        { route: '', priority: '1.0', changefreq: 'weekly' },
        { route: '/contato', priority: '0.8', changefreq: 'monthly' },
        { route: '/galeria', priority: '0.8', changefreq: 'monthly' }
    ]

    staticRoutes.forEach((item) => {
        xml += `  <url>
    <loc>${baseUrl}${item.route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
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
