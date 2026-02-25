'use client'

import { useState } from 'react'
import { Search, MapPin, ExternalLink, Edit2, CheckCircle2, X, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import type { City } from '@/lib/cities'
import type { SeoCitiesStore, CitySEOData } from '@/lib/seo-cities-store'

interface Props {
    cities: City[]
    seoStore: SeoCitiesStore
}

export default function CitiesGrid({ cities, seoStore: initialStore }: Props) {
    const [search, setSearch] = useState('')
    const [store, setStore] = useState<SeoCitiesStore>(initialStore)

    // Modal state
    const [editingCity, setEditingCity] = useState<City | null>(null)
    const [editForm, setEditForm] = useState<Partial<CitySEOData>>({})
    const [isSaving, setIsSaving] = useState(false)
    const [isGenerating, setIsGenerating] = useState(false)
    const [alertModal, setAlertModal] = useState<{ show: boolean, type: 'success' | 'error', message: string, shouldReload?: boolean }>({ show: false, type: 'success', message: '' })
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const filtered = cities.filter(c =>
        !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.slug.toLowerCase().includes(search.toLowerCase())
    ).sort((a, b) => {
        if (a.slug === 'curitiba') return -1
        if (b.slug === 'curitiba') return 1

        const countA = store[a.slug]?.neighborhoods?.length || 0
        const countB = store[b.slug]?.neighborhoods?.length || 0
        return countB - countA
    })

    const openModal = (city: City) => {
        setEditingCity(city)
        const currentData = store[city.slug] || { status: 'default', neighborhoods: [] }
        setEditForm({ ...currentData })
    }

    const closeModal = () => {
        setEditingCity(null)
        setEditForm({})
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!editingCity) return

        setIsSaving(true)
        try {
            const res = await fetch('/api/admin/seo/cities', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug: editingCity.slug, updates: { ...editForm, isManual: true } })
            })

            if (res.ok) {
                const { data } = await res.json()
                setStore(prev => ({ ...prev, [editingCity.slug]: data }))
                closeModal()
                setAlertModal({ show: true, type: 'success', message: 'Configurações de cidade salvas com sucesso!' })
            } else {
                setAlertModal({ show: true, type: 'error', message: 'Erro ao salvar as configurações de SEO.' })
            }
        } catch (error) {
            console.error(error)
            setAlertModal({ show: true, type: 'error', message: 'Erro inesperado.' })
        } finally {
            setIsSaving(false)
        }
    }

    const handleGenerateRemainingClick = () => {
        setShowConfirmModal(true)
    }

    const handleConfirmGenerateRemaining = async () => {
        setShowConfirmModal(false)
        setIsGenerating(true)
        try {
            const res = await fetch('/api/admin/seo/generate', { method: 'POST' })
            if (res.ok) {
                const { count } = await res.json()
                setAlertModal({
                    show: true,
                    type: 'success',
                    message: `Sucesso! ${count} cidades ganharam textos únicos.`,
                    shouldReload: true
                })
            } else {
                setAlertModal({ show: true, type: 'error', message: 'Erro na geração.' })
            }
        } catch (error) {
            console.error(error)
            setAlertModal({ show: true, type: 'error', message: 'Erro inesperado na geração.' })
        } finally {
            setIsGenerating(false)
        }
    }

    const addNeighborhood = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            const input = e.currentTarget
            const value = input.value.trim()
            if (value && editForm.neighborhoods) {
                const slugCandidate = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, '-')
                if (!editForm.neighborhoods.some(n => n.slug === slugCandidate)) {
                    setEditForm({ ...editForm, neighborhoods: [...editForm.neighborhoods, { slug: slugCandidate, name: value }] })
                }
                input.value = ''
            }
        }
    }

    const removeNeighborhood = (nbToRem: string) => {
        if (!editForm.neighborhoods) return
        setEditForm({
            ...editForm,
            neighborhoods: editForm.neighborhoods.filter(nb => nb.slug !== nbToRem)
        })
    }

    const customizedCount = cities.filter(c => store[c.slug]?.status === 'customized').length
    const percentage = Math.round((customizedCount / cities.length) * 100) || 0

    return (
        <div className="space-y-6">
            {/* Header controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                    <h2 className="text-xl font-display font-black text-white tracking-widest uppercase mb-1">CIDADES ATENDIDAS</h2>
                    <p className="text-[13px] text-white/40 mb-2">Selecione uma cidade para gerenciar as rotas de SEO e os bairros focais.</p>
                    <div className="flex items-center gap-3">
                        <span className="text-xs bg-[#111] border border-white/10 px-2 py-1 rounded-sm text-white/50">
                            <span className={percentage === 100 ? 'text-green-500 font-bold' : 'text-[#f39c12] font-bold'}>{percentage}%</span> customizado ({customizedCount}/{cities.length})
                        </span>
                        <button
                            onClick={handleGenerateRemainingClick}
                            disabled={isGenerating}
                            className="text-xs bg-[#C0392B]/10 hover:bg-[#C0392B]/20 border border-[#C0392B]/30 text-[#e74c3c] px-3 py-1 rounded-sm transition-colors flex items-center gap-2 disabled:opacity-50"
                        >
                            {isGenerating ? 'Gerando...' : 'Re-Gerar SEO / Textos (Roleta)'}
                        </button>
                    </div>
                </div>

                <div className="flex gap-4 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-72">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                            type="search"
                            placeholder="Buscar cidades..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-[#111] border border-white/10 rounded-sm text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#C0392B] focus:border-[#C0392B] transition-shadow placeholder-white/30"
                        />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {filtered.map(city => {
                    const seo = store[city.slug] || { status: 'default', neighborhoods: [] }
                    const isManual = seo.isManual === true
                    const isCustomized = seo.status === 'customized'
                    const nbCount = seo.neighborhoods?.length || 0

                    return (
                        <div key={city.slug} className="bg-[#111] rounded-sm border border-white/5 hover:border-[#C0392B]/30 transition-colors overflow-hidden flex flex-col group relative">
                            {/* Card Header */}
                            <div className="p-5 pb-4 border-b border-white/5 relative z-10">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="w-8 h-8 rounded-sm bg-[#C0392B]/10 flex items-center justify-center text-[#C0392B] group-hover:bg-[#C0392B]/20 transition-colors">
                                        <MapPin size={16} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex gap-1.5 text-white/30">
                                        <a href={`/pr/${city.slug}`} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-white/10 hover:text-white rounded-sm transition-colors" title="Ver página">
                                            <ExternalLink size={14} />
                                        </a>
                                        <button onClick={() => openModal(city)} className="p-1.5 hover:bg-white/10 hover:text-white rounded-sm transition-colors" title="Editar SEO">
                                            <Edit2 size={14} />
                                        </button>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white leading-tight truncate" title={city.name}>{city.name}</h3>
                                <p className="text-[10px] font-mono text-white/30 bg-black inline-block px-1.5 py-0.5 rounded-sm mt-1.5 border border-white/5">
                                    /{city.slug}
                                </p>
                            </div>

                            {/* Card Body */}
                            <div className="p-5 pt-4 flex-1 flex flex-col justify-between relative z-10">
                                <div className="flex justify-between items-end mb-5">
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">
                                            BAIRROS
                                        </p>
                                        <div className="flex items-center gap-1.5 text-green-500 font-bold">
                                            <span className="text-base">{nbCount}</span>
                                            {nbCount > 0 && <CheckCircle2 size={12} className="opacity-80" />}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1.5">
                                            STATUS
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

                                {nbCount > 0 && (
                                    <div className="mt-4 pt-4 border-t border-white/5 text-center">
                                        <Link href={`/admin/seo/cities/${city.slug}`} className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#C0392B]/10 hover:bg-[#C0392B]/20 border border-[#C0392B]/30 rounded-sm text-xs text-[#e74c3c] font-black tracking-widest uppercase transition-colors">
                                            VER {nbCount} BAIRROS <ExternalLink size={12} />
                                        </Link>
                                    </div>
                                )}

                                {/* Manage action */}
                                <button onClick={() => openModal(city)} className="w-full text-left pt-3 mt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-black tracking-widest uppercase text-white/40 hover:text-[#C0392B] transition-colors">
                                    GERENCIAR SEO
                                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>

                            {/* Hover effect bottom red line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C0392B] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0" />
                        </div>
                    )
                })}
            </div>

            {
                filtered.length === 0 && (
                    <div className="py-20 text-center border border-white/10 rounded-sm bg-[#111]">
                        <p className="text-white/40 text-sm">Nenhuma cidade encontrada para "{search}"</p>
                    </div>
                )
            }

            {/* Modal de Edição SEO */}
            {
                editingCity && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-[#111] border border-white/10 rounded-sm w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
                            {/* Modal Header */}
                            <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-sm bg-[#C0392B]/10 flex items-center justify-center text-[#C0392B]">
                                        <MapPin size={16} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">{editingCity.name}</h3>
                                        <p className="text-[10px] text-white/40 font-mono tracking-wider">/pr/{editingCity.slug}</p>
                                    </div>
                                </div>
                                <button onClick={closeModal} className="text-white/30 hover:text-white p-2">
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6">

                                {/* Meta Tags */}
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-[#C0392B] border-b border-white/5 pb-2">Configurações de Meta Tags</h4>

                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Meta Title Personalizado</label>
                                            <input
                                                type="text"
                                                value={editForm.customMetaTitle || ''}
                                                onChange={e => setEditForm({ ...editForm, customMetaTitle: e.target.value })}
                                                placeholder="Ex: Empresa de Estrutura Metálica em Curitiba PR"
                                                className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Meta Description Personalizada</label>
                                            <textarea
                                                value={editForm.customMetaDesc || ''}
                                                onChange={e => setEditForm({ ...editForm, customMetaDesc: e.target.value })}
                                                placeholder="Descrição curta que aparece no Google..."
                                                rows={2}
                                                className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none resize-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Page Content */}
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-[#C0392B] border-b border-white/5 pb-2">Substituição de Conteúdo</h4>

                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Título H1 da Página</label>
                                            <input
                                                type="text"
                                                value={editForm.customH1 || ''}
                                                onChange={e => setEditForm({ ...editForm, customH1: e.target.value })}
                                                placeholder="Título principal da página"
                                                className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Texto Apresentação (Hero Subtitle)</label>
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
                                            <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Frase de Efeito (Blockquote)</label>
                                            <input
                                                type="text"
                                                value={editForm.customQuote || ''}
                                                onChange={e => setEditForm({ ...editForm, customQuote: e.target.value })}
                                                className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Neighborhoods (Clusters) */}
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-[#C0392B] border-b border-white/5 pb-2">Zonas e Bairros (Geo-Clusters)</h4>

                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">Adicionar Bairro</label>
                                        <input
                                            type="text"
                                            placeholder="Digite o bairro e aperte ENTER para adicionar..."
                                            onKeyDown={addNeighborhood}
                                            className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none"
                                        />
                                        <p className="text-[10px] text-white/30 mt-1.5">Gera subtópicos focados em bairros desta cidade para atrair tráfego local.</p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {!editForm.neighborhoods?.length && (
                                            <span className="text-[11px] text-white/20 italic">Nenhum bairro cadastrado ainda.</span>
                                        )}
                                        {editForm.neighborhoods?.map(nb => (
                                            <span key={nb.slug} className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-white/10 text-white/80 text-xs px-2.5 py-1 rounded-sm">
                                                {nb.name}
                                                <div className="flex items-center gap-1 border-l border-white/10 pl-2 ml-1">
                                                    {editingCity && (
                                                        <a href={`/pr/${editingCity.slug}/${nb.slug}`} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-blue-400" title="Visualizar página local">
                                                            <ExternalLink size={12} />
                                                        </a>
                                                    )}
                                                    <button type="button" onClick={() => removeNeighborhood(nb.slug)} className="text-white/30 hover:text-[#C0392B]" title="Remover bairro">
                                                        <X size={12} />
                                                    </button>
                                                </div>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </form>

                            {/* Modal Footer */}
                            <div className="px-6 py-4 border-t border-white/10 flex justify-end gap-3 bg-[#0a0a0a]">
                                <button
                                    onClick={closeModal}
                                    type="button"
                                    className="px-5 py-2 text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-wider"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className="px-6 py-2 bg-[#C0392B] hover:bg-[#E74C3C] text-white text-sm font-bold rounded-sm uppercase tracking-wider transition-colors disabled:opacity-50"
                                >
                                    {isSaving ? 'Salvando...' : 'Salvar Alterações'}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Modal de Confirmação da Roleta */}
            {showConfirmModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
                    <div className="bg-[#111] border border-[#C0392B]/30 rounded-sm w-full max-w-md flex flex-col shadow-2xl overflow-hidden shadow-[#C0392B]/10">
                        <div className="p-6">
                            <h3 className="text-xl font-black text-center text-white mb-2 uppercase tracking-tight">Ativar Roleta Automática?</h3>
                            <p className="text-sm text-center text-white/50 leading-relaxed mb-6">
                                Deseja gerar automaticamente o conteúdo SEO para todas as cidades pendentes?
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowConfirmModal(false)}
                                    className="flex-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wider uppercase rounded-sm transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleConfirmGenerateRemaining}
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
        </div >
    )
}
