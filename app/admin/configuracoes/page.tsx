import { getSiteConfig } from '@/lib/site-config-store'
import ConfigForm from '@/components/admin/ConfigForm'

export const dynamic = 'force-dynamic'

export default async function ConfiguracoesPage() {
    const config = await getSiteConfig()

    return (
        <div className="max-w-4xl space-y-6">
            <div>
                <h1 className="font-display font-black text-3xl text-white uppercase tracking-wide">
                    Configurações <span className="text-[#C0392B]">do Site</span>
                </h1>
                <p className="text-xs text-white/20 mt-1 uppercase tracking-widest">
                    Edite dados de contato, redes sociais e textos exibidos no site
                </p>
            </div>

            <ConfigForm initial={config} />
        </div>
    )
}
