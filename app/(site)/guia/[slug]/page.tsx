import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, ArrowLeft, CheckCircle2, Clock, DollarSign, HelpCircle } from 'lucide-react'
import { guides } from '@/lib/guides'
import { SEOInternalLinks } from '@/components/SEOInternalLinks'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const guide = guides.find(g => g.slug === resolvedParams.slug)

    if (!guide) {
        return {
            title: 'Guia não encontrado | Metalic',
        }
    }

    return {
        title: `${guide.question} | Respostas Metalic Estruturas`,
        description: guide.snippet,
        keywords: guide.keywords,
        alternates: {
            canonical: `https://metalicestruturas.com.br/guia/${guide.slug}`
        },
        openGraph: {
            title: guide.question,
            description: guide.snippet,
            type: 'article',
        }
    }
}

export function generateStaticParams() {
    return guides.map((guide) => ({
        slug: guide.slug,
    }))
}

export default async function GuideDetalhePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const guide = guides.find(g => g.slug === resolvedParams.slug)

    if (!guide) return notFound()

    // Schema Markup (Article + FAQPage combinado para PAA)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [{
            '@type': 'Question',
            'name': guide.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': guide.snippet
            }
        }]
    };

    return (
        <div className="flex flex-col pt-[104px] overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section Resposta Direta AEO */}
            <section className="relative bg-[#111827] py-20 pb-28 md:py-32 border-b border-white/5">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />

                <div className="container-max relative z-10 max-w-4xl mx-auto">
                    <nav className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-white/50 mb-10 font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Início</Link>
                        <ChevronRight size={14} className="text-white/30" />
                        <Link href="/guia" className="hover:text-primary transition-colors">Base de Conhecimento</Link>
                        <ChevronRight size={14} className="text-white/30" />
                        <span className="text-primary truncate max-w-[200px] md:max-w-none">Resposta Rápida</span>
                    </nav>

                    <Link href="/guia" className="inline-flex items-center text-primary/70 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-8 group w-fit">
                        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Voltar para os Guias
                    </Link>

                    <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-12">
                        {guide.question}
                    </h1>

                    {/* Featured Snippet Box (BLUF) */}
                    <div className="bg-primary/10 border-l-4 border-primary rounded-r-2xl p-8 md:p-10 shadow-lg relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <HelpCircle size={80} className="text-primary" />
                        </div>
                        <h2 className="text-white text-lg font-bold uppercase tracking-widest mb-4 flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
                            A Resposta Direta
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed relative z-10">
                            "{guide.snippet}"
                        </p>
                    </div>
                </div>
            </section>

            {/* Conteúdo Profundo (The Meat) */}
            <section className="py-20 bg-dark-eval-0 relative">
                <div className="container-max max-w-3xl mx-auto">

                    <div className="prose prose-invert prose-lg max-w-none mb-16">
                        {guide.content.introduction.map((paragraph, idx) => (
                            <p key={idx} className="text-muted leading-relaxed font-light mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="space-y-16">
                        {guide.content.details.map((detail, idx) => (
                            <div key={idx} className="relative">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                                    <span className="text-primary font-mono text-xl opacity-50">0{idx + 1}.</span>
                                    {detail.title}
                                </h3>
                                <div className="text-muted leading-relaxed font-light text-lg">
                                    {detail.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Blocos Específicos de Tempo ou Preço */}
                    {(guide.content.timeframe || (guide.content.pricingFactors && guide.content.pricingFactors.length > 0)) && (
                        <div className="mt-20 grid grid-cols-1 gap-8">

                            {guide.content.timeframe && (
                                <div className="bg-[#1f2937]/40 border border-[#1f2937] p-8 rounded-2xl">
                                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                        <Clock className="text-orange-400" size={24} />
                                        Cronograma Estimado
                                    </h4>
                                    <p className="text-muted text-lg font-light leading-relaxed">
                                        {guide.content.timeframe}
                                    </p>
                                </div>
                            )}

                            {guide.content.pricingFactors && guide.content.pricingFactors.length > 0 && (
                                <div className="bg-[#1f2937]/40 border border-[#1f2937] p-8 rounded-2xl">
                                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <DollarSign className="text-green-500" size={24} />
                                        O que altera o Preço Final?
                                    </h4>
                                    <ul className="space-y-4">
                                        {guide.content.pricingFactors.map((factor, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-muted text-lg font-light">
                                                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                                                <span>{factor}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>
                    )}

                </div>
            </section>

            <SEOInternalLinks currentContext="guide" />
        </div>
    )
}
