import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { citiesPR } from '@/lib/cities'

// Show a sample of well-known cities
const featured = ['curitiba', 'londrina', 'maringa', 'cascavel', 'foz-do-iguacu', 'ponta-grossa',
    'guarapuava', 'sao-jose-dos-pinhais', 'araucaria', 'colombo', 'almirante-tamandare', 'campo-largo']

export default function CitiesSection() {
    const featuredCities = citiesPR.filter(c => featured.includes(c.slug))
    const total = citiesPR.length

    return (
        <section className="section-padding bg-[#0d0d0d] border-t border-[#1F2937]">
            <div className="container-max">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-0.5 bg-primary" />
                            <span className="text-primary text-xs font-bold uppercase tracking-widest">Cobertura Regional</span>
                        </div>
                        <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase leading-none">
                            Atendemos todo o <span className="text-primary">Paraná</span>
                        </h2>
                    </div>
                    <Link
                        href="/pr"
                        className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors group flex-shrink-0"
                    >
                        Ver todas as {total} cidades
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-6">
                    {featuredCities.map(city => (
                        <Link
                            key={city.slug}
                            href={`/pr/${city.slug}`}
                            className="group flex items-center gap-2 px-3 py-2.5 glass border border-white/5 rounded-lg hover:border-primary/50 hover:bg-white/5 transition-all duration-200"
                        >
                            <MapPin size={11} className="text-primary flex-shrink-0" />
                            <span className="text-sm text-muted group-hover:text-white transition-colors truncate">{city.name}</span>
                        </Link>
                    ))}
                </div>

                <p className="text-xs text-muted">
                    Cobertura metálica em{' '}
                    <Link href="/pr" className="text-primary hover:underline">
                        {total} municípios do Paraná
                    </Link>
                    {' '}— solicite orçamento para sua cidade.
                </p>
            </div>
        </section>
    )
}
