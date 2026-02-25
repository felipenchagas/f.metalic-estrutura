import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { SEOInternalLinks } from '@/components/SEOInternalLinks'

export const metadata: Metadata = {
    title: 'Obras e Galeria de Projetos | Metalic Estruturas',
    description: 'Explore nosso portfólio completo de Engenharia Metálica pesada em Curitiba e Região. Galpões, Mezaninos, Coberturas, Escadas e Caldeiraria. Imagens reais de obras feitas pela Metalic.',
    alternates: { canonical: '/obras' },
}

export default function ObrasPage() {
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
                        <span className="text-primary tracking-wide">Obras e Projetos</span>
                    </nav>

                    <div className="flex flex-col max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-1 bg-primary rounded-full" />
                            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm hidden md:block">
                                Experiência Comprovada em Aço
                            </span>
                        </div>

                        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] uppercase tracking-tighter mb-8">
                            NOSSAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">OBRAS</span> E<br className="hidden md:block" /> GALERIAS
                        </h1>

                        <p className="text-muted text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l-[3px] border-white/10 pl-6">
                            Da caldeiraria à ereção de megaestruturas logísticas. Cada conjunto de fotos abaixo documenta o rigor, o suor e a maestria da fundação ao acabamento final NR-12.
                        </p>
                    </div>
                </div>

                {/* Decoration */}
                <div className="absolute top-0 right-0 w-[50vw] h-full bg-primary/5 blur-[120px] rounded-full translate-x-1/2" />
            </section>

            {/* Grid de Portfólio Obras */}
            <section className="py-16 md:py-32 relative bg-dark-eval-0">
                <div className="container-max">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/obras/${project.slug}`}
                                className="group flex flex-col bg-[#1f2937]/30 border border-white/5 hover:border-primary/40 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(234,88,12,0.3)] hover:-translate-y-2"
                            >
                                <div className="h-64 relative overflow-hidden bg-[#111827]">
                                    <Image
                                        src={`/images/obras/${project.imagePrefix}-1.jpg`}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-90 group-hover:opacity-100"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                    {/* Tag overlay */}
                                    <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm backdrop-blur-md">
                                        {project.shortTitle}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-[#111827] to-[#1f2937]/50">
                                    <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h2>
                                    <p className="text-muted text-sm line-clamp-3 mb-8 flex-grow font-light leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center text-primary font-bold text-sm tracking-widest uppercase mt-auto">
                                        <span className="relative">
                                            Acessar Galeria
                                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                                        </span>
                                        <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <SEOInternalLinks currentContext="project" />
        </div>
    )
}
