import { NextRequest, NextResponse } from 'next/server'
import { getSeoCities, updateCitySeo } from '@/lib/seo-cities-store'

export async function GET() {
    try {
        const store = await getSeoCities()
        return NextResponse.json(store)
    } catch (err) {
        console.error('Erro ao buscar seo-cities:', err)
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { slug, updates } = body

        if (!slug || !updates) {
            return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
        }

        const data = await updateCitySeo(slug, updates)
        return NextResponse.json({ ok: true, data })
    } catch (err) {
        console.error('Erro ao atualizar seo-cities:', err)
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }
}
