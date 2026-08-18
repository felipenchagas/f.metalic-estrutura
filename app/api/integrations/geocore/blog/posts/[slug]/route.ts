import { NextRequest, NextResponse } from 'next/server';
import { getNewsArticleBySlug } from '@/lib/news-store';

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const article = await getNewsArticleBySlug(slug);

    if (!article) {
      return NextResponse.json({ success: false, error: 'Artigo não encontrado' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      post: {
        id: article.id,
        title: article.title,
        slug: article.slug,
        content: article.content,
        excerpt: article.excerpt,
        featuredImage: article.heroImage,
        createdAt: article.publishedAt,
        updatedAt: article.updatedAt,
      }
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
