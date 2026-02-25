import { FileCode2, Download } from 'lucide-react'
import { getSeoCities } from '@/lib/seo-cities-store'
import ForceUpdateButton from './ForceUpdateButton'
import CopyButton from './CopyButton'
import { revalidatePath } from 'next/cache'
import fs from 'fs'
import path from 'path'

export default async function SitemapsPage() {
    const seoCities = await getSeoCities()
    const { citiesPR } = await import('@/lib/cities')
    const { services } = await import('@/lib/services')
    const { projects } = await import('@/lib/projects')
    const { guides } = await import('@/lib/guides')

    let newsCount = 0
    try {
        const raw = fs.readFileSync(path.join(process.cwd(), 'data', 'news.json'), 'utf-8')
        newsCount = Object.keys(JSON.parse(raw)).length
    } catch (e) { }

    const mainCount = 3
    const servicesCount = services.length
    const seoPagesCount = projects.length + guides.length

    let citiesAndNbCount = 0
    citiesPR.forEach(city => {
        citiesAndNbCount += 1
        if (seoCities[city.slug]?.neighborhoods) {
            citiesAndNbCount += seoCities[city.slug].neighborhoods.length
        }
    })

    const totalPages = mainCount + servicesCount + seoPagesCount + citiesAndNbCount

    async function revalidateSitemaps() {
        'use server'
        revalidatePath('/sitemap.xml')
        revalidatePath('/sitemap-main.xml')
        revalidatePath('/sitemap-services.xml')
        revalidatePath('/sitemap-seo-pages.xml')
        revalidatePath('/sitemap-noticias.xml')
        for (const city of citiesPR) {
            revalidatePath(`/sitemap-${city.slug}.xml`)
        }
    }

    const sitemapsMestre = [
        { name: 'sitemap.xml', type: 'Index Mestre', pages: 'Todos Agregadores', url: '/sitemap.xml' }
    ]

    let demaisBairrosCount = 0
    let sitemapsCidades: Array<{ name: string, type: string, pages: number, url: string }> = []

    citiesPR.forEach((c) => {
        const cData = seoCities[c.slug]
        const nbLength = cData?.neighborhoods?.length || 0

        if (nbLength > 4) {
            // Metrópoles VIP (Sitemap Isolado)
            sitemapsCidades.push({
                name: `sitemap-${c.slug}.xml`,
                type: 'Capitais/Bairros',
                pages: nbLength, // Agora não inclui mais a página da cidade (apenas bairros)
                url: `/sitemap-${c.slug}.xml`
            })
        } else if (nbLength > 0) {
            // Conta os bairros aglomerados no arquivo demais-bairros
            demaisBairrosCount += nbLength
        }
    })

    const sitemapsAgregadores = [
        { name: 'sitemap-parana.xml', type: 'Silo Estadual', pages: `${citiesPR.length} Cidades LPs`, url: '/sitemap-parana.xml' },
        { name: 'sitemap-demais-bairros.xml', type: 'Silo Bairros', pages: `${demaisBairrosCount} Bairros Agrup.`, url: '/sitemap-demais-bairros.xml' },
        { name: 'sitemap-main.xml', type: 'Institucional', pages: mainCount, url: '/sitemap-main.xml' },
        { name: 'sitemap-services.xml', type: 'Soluções', pages: servicesCount, url: '/sitemap-services.xml' },
        { name: 'sitemap-seo-pages.xml', type: 'Fundo-de-Funil', pages: seoPagesCount, url: '/sitemap-seo-pages.xml' },
        { name: 'sitemap-noticias.xml', type: 'Blog/Notícias', pages: newsCount, url: '/sitemap-noticias.xml' },
    ]

    const renderTable = (data: any[], title: string, subtitle: string, color: string, border: string) => (
        <div className="mb-8">
            <div className="mb-3">
                <h3 className={`text-sm font-black uppercase tracking-widest ${color}`}>{title}</h3>
                <p className="text-[11px] text-white/40 uppercase tracking-widest mt-1">{subtitle}</p>
            </div>
            <div className={`bg-[#111] border ${border} rounded-sm overflow-hidden`}>
                <table className="w-full text-left text-sm text-white/60">
                    <thead className={`text-[10px] font-black uppercase tracking-widest ${color} bg-black/20 border-b border-white/5`}>
                        <tr>
                            <th className="px-6 py-4">Arquivo Sitemap</th>
                            <th className="px-6 py-4">Tipo</th>
                            <th className="px-6 py-4">Páginas/Links</th>
                            <th className="px-6 py-4">Status de Cache</th>
                            <th className="px-6 py-4 text-right">Ação</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {data.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4 text-white font-medium">{item.name}</td>
                                <td className="px-6 py-4">
                                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-sm text-[10px] uppercase font-bold tracking-wider">
                                        {item.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-white">{item.pages}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 text-emerald-400">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span>Em Tempo Real</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <CopyButton url={item.url} />
                                        <a href={item.url} target="_blank" className="text-white/30 hover:text-white inline-flex p-2 rounded-sm hover:bg-white/5 transition-colors" title="Abrir Sitemap">
                                            <Download size={16} />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )



    return (
        <div className="p-8 max-w-[1400px] mx-auto bg-[#0a0a0a] min-h-screen text-white">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
                <div>
                    <h2 className="text-xl font-display font-black text-white tracking-widest uppercase mb-1 flex items-center gap-2">
                        <FileCode2 size={20} className="text-[#C0392B]" />
                        XML SITEMAPS
                    </h2>
                    <p className="text-[13px] text-white/40">Sitemaps em Árvore renderizados pelo App Router.</p>
                </div>

                <ForceUpdateButton revalidateAction={revalidateSitemaps} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Score Card: Total de Páginas */}
                <div className="bg-[#111] border border-white/5 p-6 rounded-sm flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#C0392B] mb-2">Total de Páginas Indexáveis</p>
                        <h3 className="text-4xl font-black text-white">
                            {totalPages.toLocaleString('pt-BR')}
                        </h3>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-[#C0392B]/20 flex items-center justify-center">
                        <FileCode2 className="text-[#C0392B]" size={24} />
                    </div>
                </div>

                {/* Score Card: Rotas Fundo de Funil Regionais */}
                <div className="bg-[#111] border border-white/5 p-6 rounded-sm flex flex-col justify-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-green-500 mb-2">URLs Fundo de Funil (Geo)</p>
                    <h3 className="text-4xl font-black text-white">{citiesAndNbCount.toLocaleString('pt-BR')}</h3>
                    <p className="text-xs text-white/40 mt-1">Cidades e Bairros varridos pelo robô.</p>
                </div>

                {/* Score Card: Rotas Institucionais */}
                <div className="bg-[#111] border border-white/5 p-6 rounded-sm flex flex-col justify-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Páginas Institucionais / AEO</p>
                    <h3 className="text-4xl font-black text-white">{(mainCount + servicesCount + seoPagesCount).toLocaleString('pt-BR')}</h3>
                    <p className="text-xs text-white/40 mt-1">Obras, Serviços, Guias e Views de Empresa.</p>
                </div>
            </div>

            {/* Listas Categorizadas Renderizadas Dinamicamente */}
            {renderTable(
                sitemapsMestre,
                "🟢 O ÚNICO QUE VOCÊ ENVIA AO GOOGLE",
                "Copie este link abaixo e cole no Search Console. Ele chamará todos os outros.",
                "text-emerald-400",
                "border-emerald-500/20"
            )}

            {renderTable(
                sitemapsAgregadores,
                "⚪ SITEMAPS SECUNDÁRIOS / BLOCOS",
                "Estes arquivos listam links ou agrupam as centenas de Cidades pequenas (Sem Bairros). O Google detecta eles automaticamente.",
                "text-white/50",
                "border-white/5"
            )}

            {renderTable(
                sitemapsCidades,
                "⚪ SITEMAPS ESPECÍFICOS DE METRÓPOLES",
                "Cidades que possuem muitos Bairros ganharam um Sitemap VIP isolado na raiz. O Google prioriza-as.",
                "text-white/50",
                "border-white/5"
            )}

            <div className="mt-8 bg-blue-500/10 border border-blue-500/20 p-5 rounded-sm">
                <h3 className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-2">Nota de Arquitetura (Sitemap Index Dinâmico)</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                    Nesta nova estrutura Avançada de SEO do Next.js App Router, o arquivo <strong className="text-white">sitemap.xml</strong> deixou de ser um arquivo monolítico listando tudo.
                    Ele atua como um <strong>Árbitro (Index Mestre)</strong>, ramificando o robô do Google para varrer em paralelo a malha de centenas de links Core, rotas de Cidades Regionais estáticas e os hubs dinâmicos e ultra-segmentados de Bairros por Cidade.
                </p>
            </div>
        </div>
    )
}
