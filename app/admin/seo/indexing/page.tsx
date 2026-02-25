'use client'

import { useState } from 'react'
import { Search, Zap, Send, CheckCircle2, Bot } from 'lucide-react'

export default function IndexingConsolePage() {
    const [urls, setUrls] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [result, setResult] = useState<{ success: number, total: number } | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!urls.trim()) return

        setIsSubmitting(true)
        try {
            const list = urls.split('\n').filter(u => u.trim() !== '')
            const res = await fetch('/api/admin/seo/indexing', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ urls: list })
            })
            if (res.ok) {
                const data = await res.json()
                setResult({ success: data.success, total: data.total })
                setUrls('')
            } else {
                alert('Erro na API de Indexação.')
            }
        } catch (err) {
            console.error(err)
            alert('Falha interna.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="p-8 max-w-[1000px] mx-auto bg-[#0a0a0a] min-h-screen text-white">
            <div className="mb-8">
                <h2 className="text-xl font-display font-black text-white tracking-widest uppercase mb-1 flex items-center gap-2">
                    <Zap size={20} className="text-[#C0392B]" />
                    CONSOLE DE INDEXAÇÃO
                </h2>
                <p className="text-[13px] text-white/40">Notifique o Google instantaneamente sobre novas páginas ou atualizações (via Indexing API).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-[#111] border border-white/5 p-6 rounded-sm">
                        <label className="block text-[11px] font-black uppercase tracking-widest text-[#C0392B] mb-3">
                            URLs para Indexar (Uma por linha)
                        </label>
                        <textarea
                            value={urls}
                            onChange={(e) => setUrls(e.target.value)}
                            placeholder="https://metalic-estrutura.com.br/pr/curitiba&#10;https://metalic-estrutura.com.br/servicos/cobertura"
                            className="w-full h-64 bg-black border border-white/10 p-4 font-mono text-sm text-white/80 focus:border-[#C0392B] outline-none rounded-sm resize-none mb-4 placeholder-white/20"
                        />
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting || !urls.trim()}
                                className="flex items-center gap-2 px-6 py-2.5 bg-[#C0392B] hover:bg-[#E74C3C] disabled:bg-white/10 disabled:text-white/30 text-white text-sm font-bold uppercase tracking-widest transition-colors rounded-sm"
                            >
                                {isSubmitting ? (
                                    <>Enviando lote...</>
                                ) : (
                                    <>
                                        <Send size={16} /> Enviar URLs
                                    </>
                                )}
                            </button>
                        </div>

                        {result && (
                            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-sm flex items-center gap-3">
                                <CheckCircle2 size={18} />
                                <span className="text-sm font-medium">Sucesso: {result.success} de {result.total} URLs enviadas para a fila de indexação do Googlebot.</span>
                            </div>
                        )}
                    </form>
                </div>

                <div className="space-y-4">
                    <div className="bg-[#111] border border-white/5 p-5 rounded-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <Bot size={20} className="text-blue-400" />
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Cota da API</h3>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs text-white/60">
                                <span>Solicitações Hoje</span>
                                <span className="text-white font-mono">14 / 200</span>
                            </div>
                            <div className="w-full bg-black h-1.5 rounded-full overflow-hidden">
                                <div className="bg-blue-400 h-full w-[7%]" />
                            </div>
                        </div>
                        <p className="text-[10px] text-white/30 mt-3 leading-relaxed">
                            O limite diário de requisições na API de Indexação do Google é de 200 URLs por projeto. Zera todos os dias às 00:00 PST.
                        </p>
                    </div>

                    <div className="bg-[#111] border border-white/5 p-5 rounded-sm">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#C0392B] mb-3">Logs Recentes</h3>
                        <div className="space-y-3">
                            {[
                                { status: 200, url: '/pr/londrina' },
                                { status: 200, url: '/pr/cascavel' },
                                { status: 200, url: '/servicos/mezanino' }
                            ].map((log, i) => (
                                <div key={i} className="flex items-center gap-3 text-xs border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                    <span className="text-green-500 font-mono">[{log.status}]</span>
                                    <span className="text-white/60 truncate">{log.url}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
