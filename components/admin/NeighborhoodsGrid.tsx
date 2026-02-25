'use client'

import { useState, useEffect } from 'react'
import { Search, MapPin, ExternalLink, Dices, X, Edit2, CheckCircle2 } from 'lucide-react'
import type { City } from '@/lib/cities'
import type { NeighborhoodSEOData } from '@/lib/seo-neighborhoods-store'

interface Props {
    city: City
    neighborhoods: { slug: string; name: string }[]
    initialStore: Record<string, NeighborhoodSEOData>
}

export default function NeighborhoodsGrid({ city, neighborhoods, initialStore }: Props) {
    const [search, setSearch] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)
    const [store, setStore] = useState<Record<string, NeighborhoodSEOData>>(initialStore)

    const [editingNb, setEditingNb] = useState<string | null>(null)
    const [editForm, setEditForm] = useState<Partial<NeighborhoodSEOData>>({})
    const [isSaving, setIsSaving] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [alertModal, setAlertModal] = useState<{ show: boolean, type: 'success' | 'error', message: string, shouldReload?: boolean }>({ show: false, type: 'success', message: '' })

    const filtered = neighborhoods.filter(n =>
        !search || n.name.toLowerCase().includes(search.toLowerCase()) || n.slug.toLowerCase().includes(search.toLowerCase())
    )

    const handleRandomizeClick = () => {
        setShowConfirmModal(true)
    }

    const handleConfirmRandomize = async () => {
        setShowConfirmModal(false)

        setIsGenerating(true)
        try {
            const res = await fetch('/api/admin/seo/neighborhoods/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ citySlug: city.slug })
            })
            if (res.ok) {
                const { count } = await res.json()
                setAlertModal({
                    show: true,
                    type: 'success',
                    message: `Sucesso! ${count} bairros de ${city.name} foram randomizados com textos exclusivos.`,
                    shouldReload: true
                })
            } else {
                setAlertModal({ show: true, type: 'error', message: 'Erro na geração.' })
            }
        } catch (error) {
            console.error(error)
            setAlertModal({ show: true, type: 'error', message: 'Erro inesperado.' })
        } finally {
            setIsGenerating(false)
        }
    }

    const openModal = (nbObj: { slug: string; name: string }) => {
        const slugNb = nbObj.slug
        setEditingNb(nbObj.name)
        setEditForm({ ...(store[slugNb] || { status: 'default' }) })
    }

    const closeModal = () => {
        setEditingNb(null)
        setEditForm({})
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!editingNb) return

        setIsSaving(true)
        const slugNb = editingNb.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, '-')
        try {
            const res = await fetch('/api/admin/seo/neighborhoods', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ citySlug: city.slug, nbSlug: slugNb, updates: { ...editForm, isManual: true } })
            })

            if (res.ok) {
                const { data } = await res.json()
                setStore(prev => ({ ...prev, [slugNb]: data }))
                closeModal()
                setAlertModal({ show: true, type: 'success', message: 'Configurações salvas com sucesso!', shouldReload: true })
            } else {
                setAlertModal({ show: true, type: 'error', message: 'Erro ao salvar as configurações.' })
            }
        } catch (error) {
            console.error(error)
            setAlertModal({ show: true, type: 'error', message: 'Erro inesperado.' })
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <div className="space-y-6">
            {/* Header controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                    <h2 className="text-xl font-display font-black text-white tracking-widest uppercase mb-1">
                        BAIRROS DE {city.name}
                    </h2>
                    <p className="text-[13px] text-white/40 mb-2">
                        Gerencie a indexação e o conteúdo de cada zona local.
                    </p>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleRandomizeClick}
                            disabled={isGenerating}
                            className="text-xs bg-[#C0392B]/10 hover:bg-[#C0392B]/20 border border-[#C0392B]/30 text-[#e74c3c] px-3 py-1 rounded-sm transition-colors flex items-center gap-2 disabled:opacity-50"
                        >
                            <Dices size={12} />
                            {isGenerating ? 'Randomizando...' : 'Re-Gerar SEO / Textos (Roleta)'}
                        </button>
                    </div>
                </div>

                <div className="flex gap-4 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-72">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                            type="search"
                            placeholder="Buscar bairro..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-[#111] border border-white/10 rounded-sm text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#C0392B] focus:border-[#C0392B] transition-shadow placeholder-white/30"
                        />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4">
                {filtered.map(nbObj => {
                    const slugNb = nbObj.slug
                    const nbName = nbObj.name
                    const nbData = store[slugNb]
                    const isManual = nbData?.isManual === true
                    const isCustomized = nbData?.status === 'customized'

                    return (
                        <div key={slugNb} className="bg-[#111] rounded-sm border border-white/5 hover:border-[#C0392B]/30 transition-colors overflow-hidden flex flex-col group relative">
                            {/* Card Header */}
                            <div className="p-5 pb-4 border-b border-white/5 relative z-10">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="w-8 h-8 rounded-sm bg-[#C0392B]/10 flex items-center justify-center text-[#C0392B] group-hover:bg-[#C0392B]/20 transition-colors">
                                        <MapPin size={16} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex gap-1.5 text-white/30">
                                        <a href={`/pr/${city.slug}/${slugNb}`} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-white/10 hover:text-white rounded-sm transition-colors" title="Ver página">
                                            <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white leading-tight truncate" title={nbName}>{nbName}</h3>
                                <div className="flex justify-between items-center mt-1.5">
                                    <p className="text-[10px] font-mono text-white/30 bg-black inline-block px-1.5 py-0.5 rounded-sm border border-white/5">
                                        /pr/{city.slug}/{slugNb}
                                    </p>
                                    {isManual ? (
                                        <span className="inline-flex items-center rounded-sm bg-[#C0392B]/10 px-2 py-0.5 text-[9px] font-black tracking-wider text-[#C0392B] border border-[#C0392B]/20">
                                            EDITADO À MÃO
                                        </span>
                                    ) : isCustomized ? (
                                        <span className="inline-flex items-center rounded-sm bg-green-500/10 px-2 py-0.5 text-[9px] font-black tracking-wider text-green-500 border border-green-500/20">
                                            GERADO (ROLETA)
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center rounded-sm bg-black px-2 py-0.5 text-[9px] font-black tracking-wider text-white/30 border border-white/10">
                                            PADRÃO
                                        </span>
                                    )}
                                </div>
                            </div>

                            <button onClick={() => openModal(nbObj)} className="w-full text-left p-4 bg-[#0a0a0a] border-t border-white/5 flex justify-between items-center text-[10px] font-black tracking-widest uppercase text-white/50 hover:text-[#C0392B] transition-colors relative z-10 group-hover:bg-[#111]">
                                <span className="flex items-center gap-2"><Edit2 size={12} /> EDITAR SEO DE {nbName}</span>
                                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                            </button>

                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C0392B] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" />
                        </div>
                    )
                })}
            </div>

            {filtered.length === 0 && (
                <div className="py-20 text-center border border-white/10 rounded-sm bg-[#111]">
                    <p className="text-white/40 text-sm">Nenhum bairro encontrado para "{search}"</p>
                </div>
            )}

            {/* Modal de Edição */}
            {editingNb && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#111] border border-white/10 rounded-sm w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
                        <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-sm bg-[#C0392B]/10 flex items-center justify-center text-[#C0392B]">
                                    <MapPin size={16} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">{editingNb}</h3>
                                    <p className="text-[10px] text-white/40 font-mono tracking-wider">/pr/{city.slug}/{editingNb.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, '-')}</p>
                                </div>
                            </div>
                            <button onClick={closeModal} className="text-white/30 hover:text-white p-2">
                                <X size={18} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6">
                            <div className="space-y-4">
                                <h4 className="text-xs font-black uppercase tracking-widest text-[#C0392B] border-b border-white/5 pb-2">Customização Livre (Sobrescreve Roleta)</h4>
                                <p className="text-[11px] text-white/40 mb-3">Se deixado em branco, a página continuará usando o gerador de matriz SEO.</p>

                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Meta Title</label>
                                        <input
                                            type="text"
                                            value={editForm.customMetaTitle || ''}
                                            onChange={e => setEditForm({ ...editForm, customMetaTitle: e.target.value })}
                                            className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Meta Description / Texto SEO</label>
                                        <textarea
                                            value={editForm.customMetaDesc || ''}
                                            onChange={e => setEditForm({ ...editForm, customMetaDesc: e.target.value })}
                                            rows={2}
                                            className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none resize-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Texto Apresentação (Hero)</label>
                                        <textarea
                                            value={editForm.customHeroText || ''}
                                            onChange={e => setEditForm({ ...editForm, customHeroText: e.target.value })}
                                            rows={2}
                                            className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none resize-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Texto Corpo (Parágrafo 1)</label>
                                        <textarea
                                            value={editForm.customText1 || ''}
                                            onChange={e => setEditForm({ ...editForm, customText1: e.target.value })}
                                            rows={3}
                                            className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none resize-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Texto Corpo (Parágrafo 2)</label>
                                        <textarea
                                            value={editForm.customText2 || ''}
                                            onChange={e => setEditForm({ ...editForm, customText2: e.target.value })}
                                            rows={3}
                                            className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none resize-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Frase de Destaque (Blockquote)</label>
                                        <input
                                            type="text"
                                            value={editForm.customQuote || ''}
                                            onChange={e => setEditForm({ ...editForm, customQuote: e.target.value })}
                                            className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Título H1 Principal</label>
                                        <input
                                            type="text"
                                            value={editForm.customH1 || ''}
                                            onChange={e => setEditForm({ ...editForm, customH1: e.target.value })}
                                            className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="px-6 py-4 border-t border-white/10 flex justify-end gap-3 bg-[#0a0a0a]">
                            <button onClick={closeModal} type="button" className="px-5 py-2 text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-wider">
                                Cancelar
                            </button>
                            <button onClick={handleSave} disabled={isSaving} className="px-6 py-2 bg-[#C0392B] hover:bg-[#E74C3C] text-white text-sm font-bold rounded-sm uppercase tracking-wider transition-colors disabled:opacity-50">
                                {isSaving ? 'Salvando...' : 'Salvar Alterações'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Confirmação da Roleta */}
            {showConfirmModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
                    <div className="bg-[#111] border border-[#C0392B]/30 rounded-sm w-full max-w-md flex flex-col shadow-2xl overflow-hidden shadow-[#C0392B]/10">
                        <div className="p-6">
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-[#C0392B]/10 flex items-center justify-center text-[#C0392B]">
                                    <Dices size={24} />
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-center text-white mb-2 uppercase tracking-tight">Ativar Roleta SEO?</h3>
                            <p className="text-sm text-center text-white/50 leading-relaxed mb-6">
                                Isto fará uma varredura pelos <strong className="text-white">{neighborhoods.length}</strong> bairros e salvará o conteúdo estático da matriz em todos que não estiverem customizados.
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowConfirmModal(false)}
                                    className="flex-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wider uppercase rounded-sm transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleConfirmRandomize}
                                    className="flex-1 px-4 py-2.5 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-bold text-sm tracking-wider uppercase rounded-sm transition-colors shadow-lg shadow-[#C0392B]/20"
                                >
                                    Rodar Roleta
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Feedback (Sucesso/Erro) */}
            {alertModal.show && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
                    <div className={`bg-[#111] border ${alertModal.type === 'success' ? 'border-green-500/30 shadow-green-500/10' : 'border-[#C0392B]/30 shadow-[#C0392B]/10'} rounded-sm w-full max-w-sm flex flex-col shadow-2xl overflow-hidden`}>
                        <div className="p-6">
                            <div className="flex justify-center mb-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${alertModal.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-[#C0392B]/10 text-[#C0392B]'}`}>
                                    {alertModal.type === 'success' ? <CheckCircle2 size={24} /> : <X size={24} />}
                                </div>
                            </div>
                            <h3 className="text-lg font-black text-center text-white mb-2 uppercase tracking-tight">
                                {alertModal.type === 'success' ? 'Sucesso!' : 'Atenção'}
                            </h3>
                            <p className="text-sm text-center text-white/60 leading-relaxed mb-6">
                                {alertModal.message}
                            </p>

                            <button
                                onClick={() => {
                                    setAlertModal({ ...alertModal, show: false })
                                    if (alertModal.shouldReload) {
                                        window.location.reload()
                                    }
                                }}
                                className={`w-full px-4 py-2.5 font-bold text-sm tracking-wider uppercase rounded-sm transition-colors shadow-lg ${alertModal.type === 'success' ? 'bg-green-600 hover:bg-green-500 text-white shadow-green-500/20' : 'bg-[#C0392B] hover:bg-[#E74C3C] text-white shadow-[#C0392B]/20'}`}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
