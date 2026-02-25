import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metalic-estrutura.com.br'
    const currentDate = new Date().toISOString()

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    // Add News
    try {
        const raw = fs.readFileSync(path.join(process.cwd(), 'data', 'news.json'), 'utf-8')
        const newsData = JSON.parse(raw)
        Object.keys(newsData).forEach(slug => {
            xml += `  <url>
    <loc>${baseUrl}/noticias/${slug}</loc>
    <lastmod>${newsData[slug].updatedAt || currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`
        })
    } catch (e) {
        // silently skip if no news
    }

    xml += '</urlset>'

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    })
}
