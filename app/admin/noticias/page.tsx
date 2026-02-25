'use client'

import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, Calendar, Eye, Save, X } from 'lucide-react'
import { NewsArticle } from '@/lib/news-store'

export default function AdminNoticiasPage() {
    const [articles, setArticles] = useState<NewsArticle[]>([])
    const [loading, setLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [currentArticle, setCurrentArticle] = useState<Partial<NewsArticle> | null>(null)

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        try {
            const res = await fetch('/api/admin/noticias')
            if (res.ok) {
                const data = await res.json()
                setArticles(data.articles || [])
            }
        } catch (error) {
            console.error('Error fetching articles:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!currentArticle) return

        try {
            const method = currentArticle.id ? 'PUT' : 'POST'
            // Generate slug if new
            const articleToSave = {
                ...currentArticle,
                slug: currentArticle.slug || currentArticle.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
            }

            const res = await fetch('/api/admin/noticias', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(articleToSave)
            })

            if (res.ok) {
                await fetchArticles()
                setIsEditing(false)
                setCurrentArticle(null)
            } else {
                alert('Falha ao salvar a notícia.')
            }
        } catch (error) {
            alert('Erro de conexão ao salvar.')
        }
    }

    const handleDelete = async (slug: string) => {
        if (!confirm('Deseja realmente excluir esta publicação?')) return

        try {
            const res = await fetch(`/api/admin/noticias?slug=${slug}`, { method: 'DELETE' })
            if (res.ok) {
                await fetchArticles()
            }
        } catch (error) {
            alert('Erro ao excluir')
        }
    }

    if (loading) return <div className="p-8 text-white/50">Carregando módulo de notícias...</div>

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-display font-bold text-white uppercase">Gestão do Blog & Notícias</h1>
                    <p className="text-sm text-white/50 mt-1">
                        Gerencie publicações do site otimizadas para o Google Top Stories (NewsArticle).
                    </p>
                </div>
                {!isEditing && (
                    <button
                        onClick={() => {
                            setCurrentArticle({ title: '', excerpt: '', content: '', heroImage: '', tags: [] })
                            setIsEditing(true)
                        }}
                        className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
                    >
                        <Plus size={16} /> Nova Notícia
                    </button>
                )}
            </div>

            {isEditing ? (
                /* Editor Form */
                <form onSubmit={handleSave} className="bg-[#111827] border border-white/5 p-6 rounded-xl space-y-6">
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                        <h2 className="text-xl font-bold text-white">
                            {currentArticle?.id ? 'Editar Publicação' : 'Criar Nova Publicação'}
                        </h2>
                        <button type="button" onClick={() => setIsEditing(false)} className="text-white/40 hover:text-white p-2">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-white/60 mb-1">Título da Matéria *</label>
                                <input
                                    required
                                    type="text"
                                    value={currentArticle?.title || ''}
                                    onChange={e => setCurrentArticle({ ...currentArticle, title: e.target.value })}
                                    className="w-full bg-[#1F2937] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary"
                                    placeholder="Ex: Obra de 5.000m² entregue em Curitiba"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-white/60 mb-1">Resumo (Excerpt) *</label>
                                <textarea
                                    required
                                    rows={3}
                                    value={currentArticle?.excerpt || ''}
                                    onChange={e => setCurrentArticle({ ...currentArticle, excerpt: e.target.value })}
                                    className="w-full bg-[#1F2937] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary resize-none"
                                    placeholder="Um resumo cativante de 2 linhas sobre a obra/dica."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-white/60 mb-1">URL da Imagem (Capa)</label>
                                    <input
                                        type="text"
                                        value={currentArticle?.heroImage || ''}
                                        onChange={e => setCurrentArticle({ ...currentArticle, heroImage: e.target.value })}
                                        className="w-full bg-[#1F2937] border border-white/10 rounded-lg px-4 py-2 text-white text-sm"
                                        placeholder="/images/slider/foto.jpg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-white/60 mb-1">Autor</label>
                                    <input
                                        type="text"
                                        value={currentArticle?.author || 'Engenharia Metalic'}
                                        onChange={e => setCurrentArticle({ ...currentArticle, author: e.target.value })}
                                        className="w-full bg-[#1F2937] border border-white/10 rounded-lg px-4 py-2 text-white text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-white/60 mb-1">Corpo da Matéria (Texto Completo) *</label>
                                <textarea
                                    required
                                    rows={10}
                                    value={currentArticle?.content || ''}
                                    onChange={e => setCurrentArticle({ ...currentArticle, content: e.target.value })}
                                    className="w-full bg-[#1F2937] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary font-mono text-sm leading-relaxed"
                                    placeholder="Escreva os parágrafos separando-os por duas quebras de linha (Enter Enter)."
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-white/60 mb-1">Tags (separadas por vírgula)</label>
                                <input
                                    type="text"
                                    value={currentArticle?.tags?.join(', ') || ''}
                                    onChange={e => setCurrentArticle({ ...currentArticle, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
                                    className="w-full bg-[#1F2937] border border-white/10 rounded-lg px-4 py-2 text-white text-sm"
                                    placeholder="Ex: Engenharia, Galpões, Curitiba"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 justify-end pt-6 border-t border-white/10">
                        <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors">
                            Cancelar
                        </button>
                        <button type="submit" className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors">
                            <Save size={16} /> Publicar Matéria
                        </button>
                    </div>
                </form>
            ) : (
                /* List View */
                <div className="bg-[#111827] border border-white/5 rounded-xl overflow-hidden">
                    {articles.length === 0 ? (
                        <div className="p-8 text-center text-white/40">Nenhuma postagem encontrada. Comece a redigir seu blog agora!</div>
                    ) : (
                        <div className="divide-y divide-white/5">
                            {articles.map(article => (
                                <div key={article.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                                    <div className="flex-grow">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">
                                                {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
                                            </span>
                                            {article.isFeatured && (
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded">
                                                    Destaque
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-1">{article.title}</h3>
                                        <p className="text-sm text-white/50 line-clamp-1">{article.excerpt}</p>
                                    </div>

                                    <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                                        <a href={`/noticias/${article.slug}`} target="_blank" rel="noopener noreferrer" className="p-2 text-white/40 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors tooltip-trigger" title="Ver no Site">
                                            <Eye size={18} />
                                        </a>
                                        <button onClick={() => { setCurrentArticle(article); setIsEditing(true); }} className="p-2 text-white/40 hover:text-green-400 hover:bg-green-400/10 rounded-lg transition-colors tooltip-trigger" title="Editar">
                                            <Pencil size={18} />
                                        </button>
                                        <button onClick={() => handleDelete(article.slug)} className="p-2 text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors tooltip-trigger" title="Excluir">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
