import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
    ChevronRight, 
    Calendar, 
    User, 
    Clock, 
    ShieldCheck, 
    PhoneCall, 
    ArrowRight, 
    Wrench, 
    Building2, 
    CheckCircle2, 
    Share2, 
    Sparkles, 
    Layers,
    FileText
} from 'lucide-react'
import { getAllNewsArticles, getNewsArticleBySlug } from '@/lib/news-store'
import { siteConfig } from '@/lib/seo'

export const dynamic = 'force-dynamic'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const articles = await getAllNewsArticles()
    return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const article = await getNewsArticleBySlug(slug)

    if (!article) return {}

    return {
        title: article.seoTitle || `${article.title} | Metalic Estrutura`,
        description: article.seoDescription || article.excerpt,
        authors: [{ name: article.author }],
        alternates: {
            canonical: `${siteConfig.url}/blog/${article.slug}`,
            languages: {
                'pt-BR': `${siteConfig.url}/blog/${article.slug}`
            }
        },
        openGraph: {
            title: article.seoTitle || article.title,
            description: article.seoDescription || article.excerpt,
            url: `${siteConfig.url}/blog/${article.slug}`,
            type: 'article',
            publishedTime: article.publishedAt,
            modifiedTime: article.updatedAt,
            authors: [article.author],
            tags: article.tags,
            images: [
                {
                    url: article.heroImage || '/images/slider/cobertura-metalica.jpg',
                    alt: article.title,
                    width: 1200,
                    height: 630,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.excerpt,
            images: [article.heroImage || '/images/slider/cobertura-metalica.jpg'],
        }
    }
}

function parseMarkdownContent(md: string) {
    if (!md) return ''
    if (md.includes('<p>') || md.includes('<h2>')) return md

    let html = md
        .replace(/^### (.*$)/gim, '<h3 class="font-display font-bold text-2xl text-white mt-10 mb-4 pb-2 border-b border-white/10">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="font-display font-black text-3xl text-white mt-12 mb-6 text-primary flex items-center gap-2">$1</h2>')
        .replace(/^# (.*$)/gim, '<h1 class="font-display font-black text-4xl text-white mt-12 mb-6">$1</h1>')
        .replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-primary bg-[#1F2937]/50 p-5 rounded-r-xl italic my-6 text-white/90 text-lg">$1</blockquote>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-bold text-white">$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em class="italic text-white/80">$1</em>')
        .replace(/^- (.*$)/gim, '<li class="ml-4 list-disc text-white/80 mb-2 leading-relaxed">$1</li>')

    // Agrupa parágrafos
    const blocks = html.split(/\n\s*\n/)
    const parsed = blocks.map(block => {
        const trimmed = block.trim()
        if (!trimmed) return ''
        if (/^(<h[1-6]|<blockquote|<ul|<li|<div|<table)/i.test(trimmed)) {
            return trimmed
        }
        return `<p class="mb-6 leading-relaxed text-[17px] text-white/80 font-light tracking-wide">${trimmed.replace(/\n/g, '<br />')}</p>`
    })

    return parsed.join('\n')
}

export default async function NewsArticlePage({ params }: Props) {
    const { slug } = await params
    const article = await getNewsArticleBySlug(slug)

    if (!article) return notFound()

    const allArticles = await getAllNewsArticles()
    const latestArticles = allArticles.filter(a => a.slug !== article.slug).slice(0, 4)

    const newsArticleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteConfig.url}/blog/${article.slug}`
        },
        headline: article.title,
        description: article.excerpt,
        image: [`${siteConfig.url}${article.heroImage || '/images/slider/cobertura-metalica.jpg'}`],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        author: {
            '@type': 'Organization',
            name: article.author || 'Engenharia Metalic',
            url: siteConfig.url
        },
        publisher: {
            '@type': 'Organization',
            name: 'Metalic Estrutura',
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/images/logo.png`
            }
        }
    }

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: siteConfig.url },
            { '@type': 'ListItem', position: 2, name: 'Blog & Artigos', item: `${siteConfig.url}/blog` },
            { '@type': 'ListItem', position: 3, name: article.title, item: `${siteConfig.url}/blog/${article.slug}` }
        ]
    }

    const htmlFormatted = parseMarkdownContent(article.content)

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="min-h-screen bg-[#07090E] text-slate-100">
                {/* Hero Header do Artigo */}
                <header className="relative pt-32 pb-20 bg-gradient-to-b from-[#0F172A] to-[#07090E] border-b border-white/5 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
                    />
                    
                    <div className="container-max max-w-7xl mx-auto px-4 relative z-10">
                        {/* Breadcrumb Moderno */}
                        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-8" aria-label="Breadcrumb">
                            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
                            <ChevronRight size={13} className="text-slate-600" />
                            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                            <ChevronRight size={13} className="text-slate-600" />
                            <span className="text-primary truncate max-w-[280px]">{article.title}</span>
                        </nav>

                        <div className="max-w-4xl">
                            {/* Badges / Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {article.tags?.map(tag => (
                                    <span key={tag} className="bg-primary/15 text-primary border border-primary/30 text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-lg">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight uppercase tracking-tight mb-6">
                                {article.title}
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 border-l-2 border-primary pl-4">
                                {article.excerpt}
                            </p>

                            {/* Metadados do Autor e Data */}
                            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400 border-t border-white/10 pt-6">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold">
                                        <User size={15} />
                                    </div>
                                    <span className="text-white font-semibold">{article.author || 'Engenharia Metalic'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-primary" />
                                    <span>Publicado em {new Date(article.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-primary" />
                                    <span>5 min de leitura</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Layout Principal: Conteúdo 8/12 + Barra Lateral 4/12 */}
                <div className="container-max max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        
                        {/* Coluna Principal do Artigo (8/12) */}
                        <div className="lg:col-span-8 space-y-10">
                            
                            {/* Imagem de Capa com Efeito Premium */}
                            <div className="relative aspect-[16/9] w-full bg-[#111827] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src={article.heroImage || '/images/slider/cobertura-metalica.jpg'}
                                    alt={article.title}
                                    fill
                                    priority
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 1024px) 100vw, 800px"
                                />
                            </div>

                            {/* Corpo Editorial do Artigo */}
                            <div className="bg-[#0D131F] rounded-2xl p-6 sm:p-10 border border-white/5 shadow-lg">
                                <div 
                                    className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-a:text-primary prose-strong:text-white"
                                    dangerouslySetInnerHTML={{ __html: htmlFormatted }}
                                />
                            </div>

                            {/* Banner CTA no Rodapé do Artigo */}
                            <div className="relative bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#E53E3E]/20 rounded-2xl p-8 sm:p-10 border border-primary/30 shadow-2xl overflow-hidden">
                                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                                
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="space-y-3 text-center md:text-left">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/40 rounded-md text-primary text-xs font-black uppercase tracking-wider">
                                            <ShieldCheck size={14} /> Atendimento de Engenharia
                                        </div>
                                        <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase leading-tight">
                                            Precisa de Estrutura Metálica para sua Obra?
                                        </h3>
                                        <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                                            A Metalic conta com mais de 2.000 projetos executados com cálculo estrutural, ART e garantia formal. Peça seu orçamento sem compromisso.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                                        <Link 
                                            href="/contato" 
                                            className="px-6 py-4 bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
                                        >
                                            <PhoneCall size={16} /> Solicitar Orçamento
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Barra Lateral / Sidebar (4/12) */}
                        <aside className="lg:col-span-4 space-y-8">
                            
                            {/* Card de Contato Direto */}
                            <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary mb-5">
                                    <Building2 size={24} />
                                </div>
                                <h4 className="font-display font-black text-xl text-white uppercase tracking-wide mb-2">
                                    Fale com Nossos Engenheiros
                                </h4>
                                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                                    Dimensionamos seu barracão, cobertura ou mezanino com precisão e fornecimento em todo o Paraná e Santa Catarina.
                                </p>
                                <a 
                                    href="https://wa.me/5541996368387?text=Ol%C3%A1%2C%20vi%20o%20artigo%20no%20blog%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20estrutura%20met%C3%A1lica." 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                                >
                                    <PhoneCall size={16} /> WhatsApp: (41) 99636-8387
                                </a>
                            </div>

                            {/* Card: Principais Serviços */}
                            <div className="bg-[#0D131F] rounded-2xl p-6 border border-white/5 shadow-lg">
                                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/10">
                                    <Wrench size={18} className="text-primary" />
                                    <h4 className="font-display font-black text-sm uppercase tracking-wider text-white">
                                        Nossos Serviços
                                    </h4>
                                </div>
                                <ul className="space-y-2.5 text-xs font-semibold">
                                    {[
                                        { title: 'Galpões e Barracões Industriais', href: '/servicos/galpoes-industriais' },
                                        { title: 'Coberturas e Fechamentos Metálicos', href: '/servicos/coberturas-metalicas' },
                                        { title: 'Mezaninos e Estruturas para Lojas', href: '/servicos/mezaninos-metalicos' },
                                        { title: 'Estruturas para Supermercados', href: '/servicos/estruturas-supermercados' },
                                        { title: 'Manutenção Preventiva de Galpões', href: '/servicos/manutencao-galpoes' },
                                    ].map((s, idx) => (
                                        <li key={idx}>
                                            <Link 
                                                href={s.href} 
                                                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-primary/20 hover:text-white text-slate-300 transition-all group"
                                            >
                                                <span>{s.title}</span>
                                                <ChevronRight size={14} className="text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Card: Últimos Artigos Publicados */}
                            {latestArticles.length > 0 && (
                                <div className="bg-[#0D131F] rounded-2xl p-6 border border-white/5 shadow-lg">
                                    <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-white/10">
                                        <FileText size={18} className="text-primary" />
                                        <h4 className="font-display font-black text-sm uppercase tracking-wider text-white">
                                            Últimas Publicações
                                        </h4>
                                    </div>
                                    <div className="space-y-4">
                                        {latestArticles.map(rec => (
                                            <Link 
                                                key={rec.slug} 
                                                href={`/blog/${rec.slug}`}
                                                className="group flex gap-3.5 items-start p-2 rounded-xl hover:bg-white/[0.03] transition-all"
                                            >
                                                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-800 border border-white/10">
                                                    <Image 
                                                        src={rec.heroImage || '/images/slider/cobertura-metalica.jpg'} 
                                                        alt={rec.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h5 className="text-xs font-bold text-slate-200 group-hover:text-primary line-clamp-2 transition-colors leading-snug">
                                                        {rec.title}
                                                    </h5>
                                                    <span className="text-[10px] text-slate-500 mt-1 block">
                                                        {new Date(rec.publishedAt).toLocaleDateString('pt-BR')}
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Card de Diferenciais Metalic */}
                            <div className="bg-gradient-to-br from-primary/15 to-transparent rounded-2xl p-6 border border-primary/20 shadow-lg">
                                <h4 className="font-display font-black text-sm uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
                                    <Sparkles size={16} /> Por que a Metalic?
                                </h4>
                                <ul className="space-y-3 text-xs text-slate-300 font-medium">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                                        <span>Mais de 2.000 obras concluídas</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                                        <span>Projetos com ART e laudo técnico</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                                        <span>Montagem ágil com equipe própria</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                                        <span>Garantia formal e assistência pós-obra</span>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    )
}