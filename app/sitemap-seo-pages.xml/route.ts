import { NextResponse } from 'next/server'
import { projects } from '@/lib/projects'
import { guides } from '@/lib/guides'
import fs from 'fs'
import path from 'path'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metalic-estrutura.com.br'
    const currentDate = new Date().toISOString()

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    // Add Projects
    projects.forEach((proj) => {
        xml += `  <url>
    <loc>${baseUrl}/obras/${proj.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`
    })

    // Add AEO Guides
    guides.forEach((guide) => {
        xml += `  <url>
    <loc>${baseUrl}/guia/${guide.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`
    })

    // Add News
    try {
        const raw = fs.readFileSync(path.join(process.cwd(), 'data', 'news.json'), 'utf-8')
        const newsData = JSON.parse(raw)
        Object.keys(newsData).forEach(slug => {
            xml += `  <url>
    <loc>${baseUrl}/noticias/${slug}</loc>
    <lastmod>${newsData[slug].updatedAt || currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
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
