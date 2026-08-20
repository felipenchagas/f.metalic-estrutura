import { NextResponse } from 'next/server'
import { getAllNewsArticles } from '@/lib/news-store'

export const dynamic = 'force-dynamic'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://metalic-estrutura.com.br'
    const currentDate = new Date().toISOString()

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    try {
        const articles = await getAllNewsArticles()
        articles.forEach(article => {
            const cleanSlug = article.slug.replace(/^\/blog\//, '').replace(/^\/noticias\//, '').replace(/^\//, '')
            xml += `  <url>
    <loc>${baseUrl}/blog/${cleanSlug}</loc>
    <lastmod>${article.updatedAt || currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`
        })
    } catch (e) {
        // fallback
    }

    xml += '</urlset>'

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=60, s-maxage=60, stale-while-revalidate=30',
        },
    })
}