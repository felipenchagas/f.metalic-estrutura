import { NextResponse } from 'next/server';
import { getAllNewsArticles } from '@/lib/news-store';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const articles = await getAllNewsArticles();
    return NextResponse.json({
      success: true,
      posts: articles.map(a => ({
        id: a.id,
        title: a.title,
        slug: a.slug,
        excerpt: a.excerpt,
        content: a.content,
        featuredImage: a.heroImage,
        createdAt: a.publishedAt,
        updatedAt: a.updatedAt,
      }))
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}