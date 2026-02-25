import { NextRequest, NextResponse } from 'next/server'
import { getSeoPages, saveSeoPage, deleteSeoPage } from '@/lib/seo-pages-store'

export async function GET() {
    try {
        const pages = await getSeoPages()
        return NextResponse.json(pages)
    } catch (err) {
        console.error('API Pages GET erro:', err)
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        if (!body.slug || !body.title) {
            return NextResponse.json({ error: 'Slug e Título são obrigatórios.' }, { status: 400 })
        }

        const page = {
            id: body.id || Date.now().toString(),
            slug: body.slug,
            title: body.title,
            metaDesc: body.metaDesc || '',
            h1: body.h1 || body.title,
            content: body.content || '',
            createdAt: body.createdAt || new Date().toISOString()
        }

        const saved = await saveSeoPage(page)
        return NextResponse.json({ ok: true, data: saved })
    } catch (err) {
        console.error('API Pages POST erro:', err)
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const url = new URL(req.url)
        const id = url.searchParams.get('id')

        if (!id) {
            return NextResponse.json({ error: 'ID da página ausente.' }, { status: 400 })
        }

        await deleteSeoPage(id)
        return NextResponse.json({ ok: true })
    } catch (err) {
        console.error('API Pages DELETE erro:', err)
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }
}
