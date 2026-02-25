import { NextResponse } from 'next/server'
import { getLeads } from '@/lib/leads-store'

export async function GET() {
    try {
        const leads = await getLeads()

        // Define CSV headers
        const headers = ['ID', 'Data', 'Nome', 'Email', 'Celular', 'Cidade', 'Estado', 'Status', 'Interesse/Serviço', 'Notas']

        // Create CSV rows
        const rows = leads.map(l => {
            const date = new Date(l.createdAt).toLocaleDateString('pt-BR')
            const phone = `${l.ddd}${l.telefone}`
            const status = l.status || 'novo'
            const notes = l.notas || ''

            // Escape fields that might contain commas
            return [
                l.id,
                date,
                `"${l.nome.replace(/"/g, '""')}"`,
                l.email,
                phone,
                `"${l.cidade.replace(/"/g, '""')}"`,
                l.estado,
                status,
                `"${l.descricao.replace(/"/g, '""')}"`,
                `"${notes.replace(/"/g, '""')}"`
            ].join(',')
        })

        const csv = [headers.join(','), ...rows].join('\n')

        return new NextResponse(csv, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="leads-${new Date().toISOString().split('T')[0]}.csv"`
            }
        })
    } catch (err) {
        console.error('Erro na exportação:', err)
        return new NextResponse('Erro interno', { status: 500 })
    }
}
