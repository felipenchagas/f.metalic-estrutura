import Link from 'next/link'
import { services } from '@/lib/services'
import { projects } from '@/lib/projects'
import { guides } from '@/lib/guides'
import { citiesPR } from '@/lib/cities'
import { Building2, Compass, BookOpen, MapPin } from 'lucide-react'

interface SEOInternalLinksProps {
    currentContext?: 'city' | 'service' | 'project' | 'guide' | 'home'
    citySlug?: string
}

// Fisher-Yates shuffle
function shuffle<T>(array: readonly T[]): T[] {
    const copy = [...array]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
}

export function SEOInternalLinks({ currentContext = 'home', citySlug }: SEOInternalLinksProps) {
    // Pegamos amostras aleatórias para gerar a malha de links cruzados durante o Build SSG.
    const sampleServices = shuffle(services).slice(0, 3)
    const sampleProjects = shuffle(projects).slice(0, 4)
    const sampleGuides = shuffle(guides).slice(0, 3)

    // Pegar algumas cidades, excluindo a cidade atual se houver
    const availableCities = citySlug ? citiesPR.filter(c => c.slug !== citySlug) : citiesPR
    const sampleCities = shuffle(availableCities).slice(0, 6)

    return (
        <section className="bg-dark-eval-1 py-16 border-t border-white/5 relative z-10 w-full overflow-hidden">
            <div className="container-max">

                <div className="flex flex-col mb-12">
                    <h3 className="text-2xl font-bold text-white mb-2">Continue Explorando</h3>
                    <div className="w-16 h-1 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Serviços Relacionados */}
                    {currentContext !== 'service' && (
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm mb-4">
                                <Building2 size={18} className="text-primary" />
                                <h4>Especialidades</h4>
                            </div>
                            <ul className="flex flex-col gap-3">
                                {sampleServices.map(svc => (
                                    <li key={svc.slug}>
                                        <Link href={`/servicos/${svc.slug}`} className="text-muted hover:text-primary transition-colors text-sm font-light">
                                            {svc.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/#servicos" className="text-primary text-xs font-bold uppercase tracking-widest mt-2 hover:underline">Ver Tds. Serviços →</Link>
                        </div>
                    )}

                    {/* Guias e Respostas Rápidas */}
                    {currentContext !== 'guide' && (
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm mb-4">
                                <BookOpen size={18} className="text-orange-400" />
                                <h4>Guia Técnico</h4>
                            </div>
                            <ul className="flex flex-col gap-3">
                                {sampleGuides.map(guide => (
                                    <li key={guide.slug}>
                                        <Link href={`/guia/${guide.slug}`} className="text-muted hover:text-primary transition-colors text-sm font-light line-clamp-2" title={guide.question}>
                                            {guide.question}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/guia" className="text-orange-400 text-xs font-bold uppercase tracking-widest mt-2 hover:underline">Acervo de Guias →</Link>
                        </div>
                    )}

                    {/* Galerias de Obras */}
                    {currentContext !== 'project' && (
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm mb-4">
                                <Compass size={18} className="text-green-500" />
                                <h4>Cases Reais</h4>
                            </div>
                            <ul className="flex flex-col gap-3">
                                {sampleProjects.map(proj => (
                                    <li key={proj.slug}>
                                        <Link href={`/obras/${proj.slug}`} className="text-muted hover:text-primary transition-colors text-sm font-light">
                                            {proj.shortTitle}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/obras" className="text-green-500 text-xs font-bold uppercase tracking-widest mt-2 hover:underline">Ver Portfólio →</Link>
                        </div>
                    )}

                    {/* Atendimento Regional */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm mb-4">
                            <MapPin size={18} className="text-blue-400" />
                            <h4>Atendimento PR</h4>
                        </div>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {sampleCities.map(city => (
                                <li key={city.slug}>
                                    <Link href={`/pr/${city.slug}`} className="text-muted hover:text-primary transition-colors text-sm font-light">
                                        Em {city.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link href="/pr/curitiba" className="text-blue-400 text-xs font-bold uppercase tracking-widest mt-2 hover:underline">Polos Principais →</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
