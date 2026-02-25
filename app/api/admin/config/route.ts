import { NextRequest, NextResponse } from 'next/server'
import { getSiteConfig, saveSiteConfig } from '@/lib/site-config-store'

export async function GET() {
    const config = await getSiteConfig()
    return NextResponse.json(config)
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const updated = await saveSiteConfig(body)
        return NextResponse.json({ ok: true, config: updated })
    } catch (err) {
        console.error('Config save error:', err)
        return NextResponse.json({ error: 'Erro ao salvar' }, { status: 500 })
    }
}
