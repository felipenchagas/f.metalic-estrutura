'use client'

import { useState } from 'react'
import { Search, AlertTriangle, CheckCircle, Activity, Loader2 } from 'lucide-react'

export default function SeoIntegrityPage() {
    const [isAuditing, setIsAuditing] = useState(false)
    const [score, setScore] = useState(100)
    const [lastScan, setLastScan] = useState('Sem Verificação')
    const [results, setResults] = useState<{ status: string, url: string, message: string, details?: string[] }[]>([])

    const handleAudit = async () => {
        setIsAuditing(true)

        try {
            const res = await fetch('/api/admin/seo/audit')
            if (res.ok) {
                const data = await res.json()
                const now = new Date()
                setLastScan(`Hoje, ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`)
                setScore(data.score)
                setResults(data.results)
            } else {
                alert('Erro ao rodar auditoria no servidor.')
            }
        } catch (err) {
            console.error(err)
            alert('Falha na comunicação com a API de auditoria.')
        } finally {
            setIsAuditing(false)
        }
    }

    return (
        <div className="p-8 max-w-[1400px] mx-auto bg-[#0a0a0a] min-h-screen text-white">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl font-display font-black text-white tracking-widest uppercase mb-1 flex items-center gap-2">
                        <Search size={20} className="text-[#C0392B]" />
                        INTEGRIDADE SEO
                    </h2>
                    <p className="text-[13px] text-white/40">Auditoria técnica de links quebrados, H1 duplicados e status das páginas.</p>
                </div>

                <button
                    onClick={handleAudit}
                    disabled={isAuditing}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#111] border border-[#C0392B] text-[#C0392B] hover:bg-[#C0392B]/10 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-bold uppercase tracking-widest transition-colors rounded-sm"
                >
                    {isAuditing ? <Loader2 size={16} className="animate-spin" /> : <Activity size={16} />}
                    {isAuditing ? 'Auditando...' : 'Rodar Auditoria'}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Score Card */}
                <div className="bg-[#111] border border-white/5 p-6 rounded-sm flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#C0392B] mb-2">Saúde do Site</p>
                        <h3 className="text-4xl font-black text-green-500">
                            {isAuditing ? '...' : score}<span className="text-lg text-white/30 ml-1">/100</span>
                        </h3>
                    </div>
                    <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${isAuditing ? 'border-white/10 border-t-white/30 animate-spin' : 'border-green-500/20 border-t-green-500'}`}>
                        {!isAuditing && <CheckCircle className="text-green-500" size={24} />}
                    </div>
                </div>

                {/* Warnings */}
                <div className="bg-[#111] border border-white/5 p-6 rounded-sm relative overflow-hidden">
                    <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-2">Avisos Leves</p>
                    <h3 className="text-4xl font-black text-white">{isAuditing ? '-' : results.filter(r => r.status === 'warning').length}</h3>
                    <p className="text-xs text-white/40 mt-1">Pontos de atenção encontrados.</p>
                    {isAuditing && <div className="absolute inset-0 bg-white/5 animate-pulse" />}
                </div>

                {/* Errors */}
                <div className="bg-[#111] border border-white/5 p-6 rounded-sm border-b-2 border-b-[#C0392B] relative overflow-hidden">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#C0392B] mb-2">Erros Críticos (404 / 500)</p>
                    <div className="flex items-center gap-3">
                        <h3 className="text-4xl font-black text-white">{isAuditing ? '-' : results.filter(r => r.status === 'error').length}</h3>
                        {!isAuditing && <AlertTriangle className="text-[#C0392B]" size={24} />}
                    </div>
                    {isAuditing && <div className="absolute inset-0 bg-[#C0392B]/5 animate-pulse" />}
                </div>
            </div>

            {/* List */}
            <div className="bg-[#111] border border-white/5 rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5 bg-black/50 flex justify-between items-center">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/80">Resultados Detalhados</h3>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Última Verificação: {isAuditing ? 'Processando...' : lastScan}</span>
                </div>

                <div className="p-6 relative">
                    {isAuditing && (
                        <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
                            <div className="flex flex-col items-center gap-3">
                                <Loader2 size={32} className="text-[#C0392B] animate-spin" />
                                <span className="text-[10px] text-white/60 font-mono tracking-widest uppercase">Varrendo links internos...</span>
                            </div>
                        </div>
                    )}

                    <div className="space-y-1">
                        {results.map((res, i) => (
                            res.details && res.details.length > 0 ? (
                                <details key={i} className="w-full bg-transparent rounded-sm border border-transparent hover:border-white/5 transition-colors group">
                                    <summary className="flex items-center gap-4 text-sm text-white/60 p-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${res.status === 'ok' ? 'bg-green-500' :
                                            res.status === 'warning' ? 'bg-yellow-500' : 'bg-[#C0392B]'
                                            }`} />
                                        <span className="w-28 font-mono text-[11px] bg-black px-2 py-1 rounded-sm border border-white/5 truncate flex-shrink-0" title={res.url}>{res.url}</span>
                                        <span className="flex-1 truncate" title={res.message}>{res.message}</span>
                                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-sm flex-shrink-0 group-open:bg-[#C0392B] group-open:text-white transition-colors">+{res.details.length} itens</span>
                                    </summary>
                                    <div className="pl-[168px] pr-4 pb-4">
                                        <div className="bg-[#0a0a0a] border border-white/5 rounded-sm p-4 max-h-48 overflow-y-auto shadow-inner">
                                            <ul className="list-disc pl-4 space-y-1.5 marker:text-white/20">
                                                {res.details.map((detail, idx) => (
                                                    <li key={idx} className="text-xs text-white/50 font-mono tracking-wide">{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </details>
                            ) : (
                                <div key={i} className="flex items-center gap-4 text-sm text-white/60 p-3 hover:bg-white/5 rounded-sm transition-colors border border-transparent hover:border-white/5">
                                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${res.status === 'ok' ? 'bg-green-500' :
                                        res.status === 'warning' ? 'bg-yellow-500' : 'bg-[#C0392B]'
                                        }`} />
                                    <span className="w-28 font-mono text-[11px] bg-black px-2 py-1 rounded-sm border border-white/5 truncate flex-shrink-0" title={res.url}>{res.url}</span>
                                    <span className="flex-1 truncate" title={res.message}>{res.message}</span>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
