'use client'

import { useState, useEffect } from 'react'
import { FileText, Plus, Globe, Settings, Edit2, Trash2, X, AlertCircle } from 'lucide-react'

interface SeoPageData {
    id: string
    slug: string
    title: string
    metaDesc: string
    h1: string
    content: string
    createdAt: string
}

export default function SeoPagesManager() {
    const [pages, setPages] = useState<SeoPageData[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isSaving, setIsSaving] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingPage, setEditingPage] = useState<SeoPageData | null>(null)

    const [form, setForm] = useState({
        id: '',
        slug: '',
        title: '',
        metaDesc: '',
        h1: '',
        content: ''
    })

    useEffect(() => {
        fetchPages()
    }, [])

    const fetchPages = async () => {
        setIsLoading(true)
        try {
            const res = await fetch('/api/admin/seo/pages')
            if (res.ok) {
                const data = await res.json()
                setPages(data)
            }
        } catch (err) {
            console.error('Failed to fetch pages', err)
        } finally {
            setIsLoading(false)
        }
    }

    const openCreateModal = () => {
        setForm({ id: '', slug: '', title: '', metaDesc: '', h1: '', content: '' })
        setEditingPage(null)
        setIsModalOpen(true)
    }

    const openEditModal = (page: SeoPageData) => {
        setForm({
            id: page.id,
            slug: page.slug,
            title: page.title,
            metaDesc: page.metaDesc,
            h1: page.h1,
            content: page.content
        })
        setEditingPage(page)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        if (isSaving) return
        setIsModalOpen(false)
        setEditingPage(null)
    }

    const generateSlug = (text: string) => {
        let str = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        return str
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm(prev => {
            const updated = { ...prev, [name]: value }

            // Auto generate slug and h1 only if editing title on a new page
            if (name === 'title' && !editingPage) {
                if (!prev.slug || generateSlug(prev.title) === prev.slug) {
                    updated.slug = generateSlug(value)
                }
                if (!prev.h1 || prev.h1 === prev.title) {
                    updated.h1 = value
                }
            }
            return updated
        })
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!form.title || !form.slug) {
            alert('Title e Slug são obrigatórios')
            return
        }

        setIsSaving(true)
        try {
            const res = await fetch('/api/admin/seo/pages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })

            if (res.ok) {
                await fetchPages()
                closeModal()
            } else {
                const err = await res.json()
                alert(err.error || 'Erro ao salvar a página.')
            }
        } catch (error) {
            console.error(error)
            alert('Falha de conexão com a API.')
        } finally {
            setIsSaving(false)
        }
    }

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`Tem certeza que deseja DELETAR a página "${name}"? Essa ação não pode ser desfeita.`)) return

        try {
            const res = await fetch(`/api/admin/seo/pages?id=${id}`, {
                method: 'DELETE'
            })
            if (res.ok) {
                await fetchPages()
            } else {
                alert('Erro ao deletar página.')
            }
        } catch (error) {
            console.error(error)
            alert('Falha ao conectar com o backend.')
        }
    }

    return (
        <div className="p-8 max-w-[1400px] mx-auto bg-[#0a0a0a] min-h-screen text-white">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl font-display font-black text-white tracking-widest uppercase mb-1 flex items-center gap-2">
                        <FileText size={20} className="text-[#C0392B]" />
                        LANDING PAGES (SEO)
                    </h2>
                    <p className="text-[13px] text-white/40">Use técnicas E-E-A-T criando conteúdo único focado em nichos ou keywords tail específicas.</p>
                </div>

                <button onClick={openCreateModal} className="flex items-center gap-2 px-5 py-2.5 bg-[#C0392B] hover:bg-[#E74C3C] text-white text-sm font-bold uppercase tracking-widest transition-colors rounded-sm shadow-md">
                    <Plus size={16} strokeWidth={2.5} />
                    Nova Página SEO
                </button>
            </div>

            {/* Listagem de Páginas */}
            {isLoading ? (
                <div className="h-64 flex items-center justify-center border border-white/5 bg-[#111] rounded-sm">
                    <p className="text-white/40 font-mono text-sm uppercase tracking-widest animate-pulse">Carregando páginas...</p>
                </div>
            ) : pages.length === 0 ? (
                <div className="bg-[#111] border border-white/5 rounded-sm overflow-hidden min-h-[400px] flex items-center justify-center">
                    <div className="text-center p-8 max-w-sm">
                        <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/20 mb-4 shadow-inner">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Nenhuma Página Criada</h3>
                        <p className="text-xs text-white/40 leading-relaxed mb-6">
                            Você ainda não criou landing pages independentes. Use este módulo para criar variações de páginas (ex: "Galpão Industrial para Agro").
                        </p>
                        <button onClick={openCreateModal} className="px-5 py-2 border-2 border-[#C0392B] text-[#C0392B] hover:bg-[#C0392B]/10 text-xs font-bold uppercase tracking-widest transition-colors rounded-sm inline-flex items-center gap-2">
                            <Plus size={14} /> Criar a Primeira Página
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-[#111] border border-white/5 rounded-sm overflow-hidden shadow-sm">
                    <table className="w-full text-left text-sm text-white/60">
                        <thead className="text-[10px] font-black uppercase tracking-widest text-[#C0392B] bg-black/50 border-b border-white/5">
                            <tr>
                                <th className="px-6 py-4">Página</th>
                                <th className="px-6 py-4 hidden sm:table-cell">Meta Description</th>
                                <th className="px-6 py-4">URL (Slug)</th>
                                <th className="px-6 py-4 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {pages.map((p) => (
                                <tr key={p.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <p className="text-white font-bold">{p.title}</p>
                                        <p className="text-[10px] text-white/30 uppercase tracking-widest font-mono mt-0.5" title="H1:">{p.h1}</p>
                                    </td>
                                    <td className="px-6 py-4 hidden sm:table-cell max-w-xs truncate" title={p.metaDesc}>
                                        {p.metaDesc || <span className="text-yellow-500 flex items-center gap-1"><AlertCircle size={12} /> Vazio</span>}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-black/80 px-2 py-1 border border-white/5 rounded-sm font-mono text-[11px] text-blue-400">
                                                /lp/{p.slug}
                                            </span>
                                            <a href={`/lp/${p.slug}`} target="_blank" className="text-white/30 hover:text-white transition-colors" title="Visualizar a Rota Dinâmica">
                                                <Globe size={14} />
                                            </a>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button onClick={() => openEditModal(p)} className="p-2 bg-transparent text-white/40 hover:text-[#C0392B] hover:bg-[#C0392B]/10 rounded-sm transition-colors" title="Editar SEO & Conteúdo">
                                                <Settings size={16} />
                                            </button>
                                            <button onClick={() => handleDelete(p.id, p.title)} className="p-2 bg-transparent text-white/40 hover:text-red-500 hover:bg-red-500/10 rounded-sm transition-colors" title="Deletar Página">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modal Full-Screen / Editor Advanced SEO */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 overflow-y-auto w-full min-h-screen bg-black/90 backdrop-blur-md">
                    <div className="bg-[#111] border border-white/10 w-full max-w-5xl rounded-sm shadow-2xl flex flex-col my-auto mt-10 mb-10">

                        {/* Header Modal */}
                        <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-black/50 sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-sm bg-[#C0392B]/10 flex items-center justify-center text-[#C0392B]">
                                    <Edit2 size={16} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold uppercase tracking-widest text-sm">
                                        {editingPage ? 'Editar Página SEO' : 'Criar Nova Landing Page Engine'}
                                    </h3>
                                    <p className="text-[10px] text-white/40 font-mono tracking-wider">
                                        Compliance E-E-A-T Guidelines
                                    </p>
                                </div>
                            </div>
                            <button onClick={closeModal} className="text-white/30 hover:text-[#C0392B] p-2 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Corpo Modal */}
                        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* Coluna Esquerda: Meta e SEO Técnico (1/3) */}
                            <div className="lg:col-span-1 space-y-6">
                                <h4 className="text-xs font-black uppercase tracking-widest text-[#C0392B] border-b border-white/10 pb-2 flex items-center gap-2">
                                    <Settings size={14} /> Atributos Técnicos
                                </h4>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">
                                            URL Slug <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-sm font-mono select-none">/lp/</span>
                                            <input
                                                type="text"
                                                name="slug"
                                                value={form.slug}
                                                onChange={handleFormChange}
                                                required
                                                placeholder="galpao-industrial-agro"
                                                className="w-full bg-black border border-white/10 rounded-sm pl-[2.8rem] pr-3 py-2 text-sm text-blue-400 font-mono focus:border-[#C0392B] outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5 flex justify-between">
                                            Meta Title <span className="text-red-500">*</span>
                                            <span className={form.title.length > 60 ? 'text-red-500' : 'text-green-500'}>
                                                {form.title.length}/60
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={form.title}
                                            onChange={handleFormChange}
                                            required
                                            placeholder="Título otimizado para a SERP"
                                            className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5 flex justify-between">
                                            Meta Description
                                            <span className={form.metaDesc.length > 160 ? 'text-red-500' : form.metaDesc.length > 0 ? 'text-green-500' : 'text-white/30'}>
                                                {form.metaDesc.length}/160
                                            </span>
                                        </label>
                                        <textarea
                                            name="metaDesc"
                                            value={form.metaDesc}
                                            onChange={handleFormChange}
                                            placeholder="Chamada persuasiva para o Google. Insira call to actions e os principais benefícios."
                                            rows={4}
                                            className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-sm text-white focus:border-[#C0392B] outline-none resize-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Coluna Direita: Conteúdo Principal (2/3) */}
                            <div className="lg:col-span-2 space-y-6">
                                <h4 className="text-xs font-black uppercase tracking-widest text-[#C0392B] border-b border-white/10 pb-2 flex items-center gap-2">
                                    <FileText size={14} /> Estrutura do Conteúdo (H1 & Body)
                                </h4>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5">
                                            Cabeçalho H1 (Título Visível) <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="h1"
                                            value={form.h1}
                                            onChange={handleFormChange}
                                            required
                                            placeholder="O H1 principal deve conter a palavra-chave primária."
                                            className="w-full bg-black border border-white/10 rounded-sm px-3 py-2 text-xl font-bold text-white focus:border-[#C0392B] outline-none"
                                        />
                                    </div>

                                    <div className="flex flex-col h-full">
                                        <label className="block text-[11px] text-white/50 uppercase tracking-widest font-bold mb-1.5 flex justify-between items-center">
                                            Conteúdo E-E-A-T (HTML / Texto Livre)
                                            <span className="text-[9px] bg-[#C0392B]/20 text-[#C0392B] px-2 py-0.5 rounded-sm">Suporta marcação básica HTML</span>
                                        </label>
                                        <textarea
                                            name="content"
                                            value={form.content}
                                            onChange={handleFormChange}
                                            placeholder={`Escreva artigos ricos e aprofundados sobre o tema.
Evite parágrafos simples.

<h2>A Importância da Estrutura Metálica de Grande Porte</h2>
<p>Explique detalhadamente seu processo, material utilizado (aço patinável, aço galvanizado) e garantias estruturais. Lembre-se, o Google avalia Profundidade de Conhecimento e Autoridade do Autor (E-E-A-T).</p>

<ul>
    <li>Fator de durabilidade em anos operacionais</li>
    <li>Capacidade de carga térmica e resistência a ventos</li>
</ul>`}
                                            className="w-full min-h-[300px] h-full bg-black border border-white/10 rounded-sm px-4 py-3 text-[13px] leading-relaxed font-mono text-white/80 focus:border-[#C0392B] outline-none resize-y"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Modal Actions */}
                        <div className="px-6 py-4 border-t border-white/10 flex justify-between items-center bg-black/50 sm:sticky bottom-0 z-10">
                            <button
                                type="button"
                                onClick={closeModal}
                                disabled={isSaving}
                                className="px-5 py-2 text-sm font-bold text-white/50 hover:text-white transition-colors uppercase tracking-wider disabled:opacity-50"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="px-6 py-2 bg-[#C0392B] hover:bg-[#E74C3C] text-white text-sm font-bold shadow-lg rounded-sm uppercase tracking-widest transition-colors flex items-center gap-2 disabled:opacity-50"
                            >
                                {isSaving ? (
                                    <>Salvando...</>
                                ) : (
                                    <>Publicar Página Baseática</>
                                )}
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
