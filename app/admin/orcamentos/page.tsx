import { getLeads } from '@/lib/leads-store'
import LeadsTable from '@/components/admin/LeadsTable'

export const dynamic = 'force-dynamic'

export default async function OrcamentosPage() {
    const leads = await getLeads()

    return (
        <div className="max-w-6xl space-y-5">
            <div>
                <h1 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                    Orçamentos <span className="text-[#C0392B]">Recebidos</span>
                </h1>
                <p className="text-xs text-white/20 mt-1 uppercase tracking-widest">
                    {leads.length} orçamento{leads.length !== 1 ? 's' : ''} no total
                </p>
            </div>

            <LeadsTable leads={leads} />
        </div>
    )
}
