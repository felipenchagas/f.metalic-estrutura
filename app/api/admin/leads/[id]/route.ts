import { NextRequest, NextResponse } from 'next/server'
import { updateLead, deleteLead } from '@/lib/leads-store'

export async function PATCH(req: NextRequest, props: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await props.params
        const body = await req.json()
        const updated = await updateLead(id, body)

        if (!updated) {
            return NextResponse.json({ error: 'Lead não encontrado' }, { status: 404 })
        }

        return NextResponse.json({ ok: true, lead: updated })
    } catch (err) {
        console.error('Erro ao atualizar lead:', err)
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, props: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await props.params
        const success = await deleteLead(id)

        if (!success) {
            return NextResponse.json({ error: 'Lead não encontrado' }, { status: 404 })
        }

        return NextResponse.json({ ok: true })
    } catch (err) {
        console.error('Erro ao excluir lead:', err)
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }
}
