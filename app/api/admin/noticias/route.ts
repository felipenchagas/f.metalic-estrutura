import { NextResponse } from 'next/server'
import { getNewsStore, saveNewsArticle, deleteNewsArticle, NewsArticle } from '@/lib/news-store'

export async function GET() {
    try {
        const store = await getNewsStore()
        const articles = Object.values(store).sort((a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
        return NextResponse.json({ articles })
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao carregar notícias' }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { slug, title, excerpt, content, heroImage, author, isFeatured, tags, seoTitle, seoDescription } = body

        if (!slug || !title || !content) {
            return NextResponse.json({ error: 'Campos obrigatórios: slug, title, content' }, { status: 400 })
        }

        const newArticle: NewsArticle = {
            id: Date.now().toString(),
            slug,
            title,
            excerpt: excerpt || '',
            content,
            heroImage: heroImage || '/images/slider/cobertura-metalica.jpg',
            author: author || 'Equipe Metalic',
            publishedAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isFeatured: !!isFeatured,
            tags: tags || [],
            seoTitle,
            seoDescription
        }

        const success = await saveNewsArticle(newArticle)
        if (!success) throw new Error('Falha ao salvar')

        return NextResponse.json({ success: true, article: newArticle })
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao criar notícia' }, { status: 500 })
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json()
        const { slug, ...updates } = body

        if (!slug) {
            return NextResponse.json({ error: 'Slug é obrigatório para atualização' }, { status: 400 })
        }

        const store = await getNewsStore()
        const existing = store[slug]

        if (!existing) {
            return NextResponse.json({ error: 'Notícia não encontrada' }, { status: 404 })
        }

        const updatedArticle = {
            ...existing,
            ...updates,
            updatedAt: new Date().toISOString()
        }

        const success = await saveNewsArticle(updatedArticle)
        if (!success) throw new Error('Falha ao salvar')

        return NextResponse.json({ success: true, article: updatedArticle })
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao atualizar notícia' }, { status: 500 })
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const slug = searchParams.get('slug')

        if (!slug) {
            return NextResponse.json({ error: 'Slug é obrigatório' }, { status: 400 })
        }

        const success = await deleteNewsArticle(slug)
        if (!success) {
            return NextResponse.json({ error: 'Notícia não encontrada ou falha ao excluir' }, { status: 404 })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao excluir notícia' }, { status: 500 })
    }
}
