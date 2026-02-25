import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowRight, HelpCircle } from 'lucide-react'
import { guides } from '@/lib/guides'
import { SEOInternalLinks } from '@/components/SEOInternalLinks'

export const metadata: Metadata = {
    title: 'Guia Definitivo de Galpões e Estruturas Metálicas | Metalic',
    description: 'Respostas técnicas para todas as suas dúvidas sobre engenharia em aço. Como montar um galpão, diferenças de telhas, preços por m2, e qual a fundação correta.',
    alternates: { canonical: '/guia' },
}

export default function GuiaPage() {
    return (
        <div className="flex flex-col pt-[104px] overflow-hidden">


            {/* Hero Section */}
            <section className="relative bg-[#111827] py-20 pb-28 md:py-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />

                <div className="container-max relative z-10">
                    <nav className="flex items-center gap-2 text-xs md:text-sm text-white/50 mb-8 font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Início</Link>
                        <ChevronRight size={14} className="text-white/30" />
                        <span className="text-primary tracking-wide">Guia e Perguntas Frequentes</span>
                    </nav>

                    <div className="flex flex-col max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-1 bg-primary rounded-full" />
                            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm hidden md:block">
                                Central de Conhecimento
                            </span>
                        </div>

                        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] uppercase tracking-tighter mb-8">
                            DÚVIDAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">TÉCNICAS</span><br className="hidden md:block" /> RESPONDIDAS
                        </h1>

                        <p className="text-muted text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l-[3px] border-white/10 pl-6">
                            Não tome decisões sem fundamentos. Descubra exatamente como avaliamos os custos, prazos de ereção e porque as metodologias baratas sempre quebram logísticas.
                        </p>
                    </div>
                </div>

                {/* Decoration */}
                <div className="absolute top-0 right-0 w-[50vw] h-full bg-primary/5 blur-[120px] rounded-full translate-x-1/2" />
            </section>

            {/* Lista Vertical de SEO Respostas */}
            <section className="py-20 relative bg-dark-eval-0">
                <div className="container-max max-w-5xl">

                    <div className="space-y-6">
                        {guides.map((guide, idx) => (
                            <Link
                                key={guide.slug}
                                href={`/guia/${guide.slug}`}
                                className="group block bg-[#1f2937]/30 border border-white/5 rounded-2xl p-6 md:p-10 hover:border-primary/40 transition-all duration-300 hover:bg-[#1f2937]/50 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                                    <HelpCircle size={100} className="text-white" />
                                </div>

                                <div className="relative z-10 lg:flex items-start justify-between gap-10">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-primary/80 font-mono text-sm">Resumo Rápido</span>
                                            <div className="h-px bg-white/10 flex-grow max-w-[100px]" />
                                        </div>

                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                                            {guide.question}
                                        </h2>

                                        <p className="text-muted leading-relaxed font-light line-clamp-3 md:line-clamp-2 text-lg">
                                            {guide.snippet}
                                        </p>
                                    </div>

                                    <div className="mt-8 lg:mt-0 lg:flex-shrink-0 flex items-end h-full">
                                        <div className="bg-[#111827] border border-white/10 px-6 py-4 rounded-xl flex items-center justify-center text-primary font-bold uppercase tracking-wider text-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            Ler Resposta Completa
                                            <ArrowRight size={18} className="ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            <SEOInternalLinks currentContext="guide" />
        </div>
    )
}
