import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { citiesPR } from '@/lib/cities'

export const metadata: Metadata = {
    title: 'Cobertura Metálica no Paraná | Todas as Cidades | Metalic Estrutura',
    description: 'A Metalic Estrutura atende todos os municípios do Paraná com cobertura metálica. Clique na sua cidade e solicite orçamento.',
    alternates: { canonical: '/pr' },
}

export default function PRIndexPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-[#111827] py-16 border-b border-[#1F2937]">
                <div className="container-max">
                    <nav className="flex items-center gap-2 text-xs text-white/40 mb-5">
                        <Link href="/" className="hover:text-white transition-colors">Início</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary">Paraná</span>
                    </nav>
                    <div className="w-10 h-0.5 bg-primary mb-4" />
                    <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-none uppercase mb-4">
                        Cobertura Metálica <br />
                        <span className="text-primary">no Paraná</span>
                    </h1>
                    <p className="text-muted max-w-xl">
                        Atendemos todos os {citiesPR.length} municípios do Paraná. Selecione sua cidade abaixo.
                    </p>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="section-padding bg-[#0A0A0A]">
                <div className="container-max">
                    <p className="text-muted text-sm mb-6">
                        <span className="text-white font-semibold">{citiesPR.length} municípios</span> atendidos no estado do Paraná
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                        {citiesPR.map(city => (
                            <Link
                                key={city.slug}
                                href={`/pr/${city.slug}`}
                                className="group px-3 py-2.5 glass border border-white/5 rounded-lg hover:border-primary/50 hover:bg-white/5 transition-all duration-200 text-sm text-muted hover:text-white flex items-center gap-2"
                            >
                                <span className="w-1 h-1 rounded-full bg-primary opacity-40 group-hover:opacity-100 flex-shrink-0" />
                                <span className="truncate">{city.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
