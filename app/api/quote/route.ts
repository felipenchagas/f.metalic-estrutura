import { NextRequest, NextResponse } from 'next/server'
import { saveLead } from '@/lib/leads-store'

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()

        // Honeypot check
        if (formData.get('honeypot')) {
            return NextResponse.json({ ok: true }) // silently reject bots
        }

        const nome = (formData.get('nome') as string)?.trim()
        const email = (formData.get('email') as string)?.trim()
        const ddd = (formData.get('ddd') as string)?.trim()
        const telefone = (formData.get('telefone') as string)?.trim()
        const cidade = (formData.get('cidade') as string)?.trim()
        const estado = (formData.get('estado') as string)?.trim()
        const descricao = (formData.get('descricao') as string)?.trim()

        if (!nome || !email || !telefone || !cidade) {
            return NextResponse.json({ error: 'Campos obrigatórios faltando' }, { status: 400 })
        }

        const lead = await saveLead({ nome, email, ddd, telefone, cidade, estado, descricao })

        // Also forward to original PHP endpoint (best-effort)
        fetch('https://empresarialweb.com.br/backend/metalic/processa_formulario.php', {
            method: 'POST',
            body: formData,
        }).catch(() => {/* ignore errors */ })

        return NextResponse.json({ ok: true, id: lead.id })
    } catch (err) {
        console.error('Quote API error:', err)
        return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
    }
}
