import { services } from '@/lib/services'
import { Briefcase, ExternalLink, Edit2, PlayCircle } from 'lucide-react'

export default function ServicesSeoPage() {
    return (
        <div className="p-8 max-w-[1400px] mx-auto bg-[#0a0a0a] min-h-screen text-white">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl font-display font-black text-white tracking-widest uppercase mb-1 flex items-center gap-2">
                        <Briefcase size={20} className="text-[#C0392B]" />
                        SERVIÇOS (SEO MANAGER)
                    </h2>
                    <p className="text-[13px] text-white/40">Gerencie as propriedades de SEO das páginas de serviços e galpões comerciais.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map(service => (
                    <div key={service.slug} className="bg-[#111] rounded-sm border border-white/5 hover:border-[#C0392B]/30 transition-colors overflow-hidden flex flex-col group relative">
                        <div className="p-5 pb-4 border-b border-white/5 relative z-10">
                            <div className="flex justify-between items-start mb-3">
                                <div className="w-8 h-8 rounded-sm bg-[#C0392B]/10 flex items-center justify-center text-[#C0392B] group-hover:bg-[#C0392B]/20 transition-colors">
                                    <Briefcase size={16} strokeWidth={2.5} />
                                </div>
                                <div className="flex gap-1.5 text-white/30">
                                    <a href={`/servicos/${service.slug}`} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-white/10 hover:text-white rounded-sm transition-colors" title="Ver página">
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white leading-tight">{service.title}</h3>
                            <p className="text-[10px] font-mono text-white/30 bg-black inline-block px-1.5 py-0.5 rounded-sm mt-1.5 border border-white/5">
                                /servicos/{service.slug}
                            </p>
                        </div>

                        <div className="p-5 pt-4 flex-1 flex flex-col justify-between relative z-10">
                            <div className="flex justify-between items-end mb-5">
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-[#C0392B] mb-1">
                                        ANÁLISE DE CONTEÚDO
                                    </p>
                                    <div className="flex items-center gap-1.5 text-green-500 font-bold">
                                        <span className="text-[11px] bg-green-500/10 px-2 py-0.5 rounded-sm">OTIMIZADO</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full text-left pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-black tracking-widest uppercase text-white/40 hover:text-[#C0392B] transition-colors">
                                EDITAR SEO
                                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C0392B] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" />
                    </div>
                ))}
            </div>
        </div>
    )
}
