import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Phone, CheckCircle2, ArrowRight } from 'lucide-react'
import { citiesPR, getCityBySlug } from '@/lib/cities'
import { siteConfig } from '@/lib/seo'
import QuoteForm from '@/components/QuoteForm'
import CTABand from '@/components/CTABand'

type Props = { params: Promise<{ cidade: string }> }

export async function generateStaticParams() {
    return citiesPR.map(c => ({ cidade: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { cidade } = await params
    const city = getCityBySlug(cidade)
    if (!city) return {}
    const title = `Cobertura Metálica em ${city.name} PR | Metalic Estrutura`
    const description = `Empresa especializada em cobertura metálica em ${city.name} - Paraná. Solicite orçamento: ${siteConfig.phone}`
    return {
        title,
        description,
        keywords: [`cobertura metálica em ${city.name}`, `cobertura metálica ${city.name} PR`, `cobertura em aço ${city.name}`],
        alternates: { canonical: `/pr/${cidade}` },
        openGraph: { title, description },
    }
}

const advantages = [
    'Velocidade de instalação — estrutura pré-fabricada em fábrica',
    'Custo de manutenção muito mais baixo que estruturas convencionais',
    'Durabilidade superior a 50 anos com manutenção adequada',
    'Possibilidade de ampliação ou desmontagem futura',
    'Vãos maiores sem colunas intermediárias',
    'Material 100% reciclável e sustentável',
]

export default async function CoberturaMetalicaCidadePage({ params }: Props) {
    const { cidade } = await params
    const city = getCityBySlug(cidade)
    if (!city) return notFound()

    return (
        <>
            {/* Hero */}
            <section className="relative bg-[#111827] py-16 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                <div className="container-max relative">
                    <nav className="flex items-center gap-2 text-xs text-white/40 mb-5 flex-wrap" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-white transition-colors">Início</Link>
                        <ChevronRight size={12} />
                        <Link href="/pr" className="hover:text-white transition-colors">Paraná</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary">{city.name}</span>
                    </nav>
                    <div className="w-10 h-0.5 bg-primary mb-4" />
                    <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-none uppercase mb-4">
                        Cobertura Metálica<br />
                        <span className="text-primary">em {city.name}</span>{' '}
                        <span className="text-white/40 text-3xl md:text-4xl">PR</span>
                    </h1>
                    <p className="text-muted max-w-xl leading-relaxed">
                        Especialistas em cobertura metálica atendendo {city.name} e toda a região do Paraná.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                        <Link href="/contato" className="btn-primary text-sm">Solicitar Orçamento</Link>
                        <a href={`tel:${siteConfig.phoneClean}`} className="btn-outline text-sm">
                            <Phone size={14} />{siteConfig.phone}
                        </a>
                    </div>
                </div>
            </section>

            {/* Content + Sidebar */}
            <section className="section-padding bg-[#0A0A0A]">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <article className="lg:col-span-2 prose-sm max-w-none">
                            <h2 className="font-display font-bold text-2xl text-white mb-4">
                                Cobertura Metálica em <span className="text-primary">{city.name}</span> — Paraná
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                A importância da <strong className="text-white/80">estrutura em aço</strong> é inegável: coberturas metálicas para galpões em {city.name} PR, escolas, hospitais, aeroportos e estações ferroviárias são projetos onde a cobertura metálica se destaca.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                <strong className="text-white/80">Cobertura metálica em {city.name}</strong> é a escolha de quem sabe apontar para o futuro — desde a economia de materiais até a velocidade de finalização do projeto.
                            </p>

                            <div className="grid grid-cols-2 gap-3 my-8">
                                <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                                    <Image src="/images/cobertura/cobertura-metalica-fabricada.jpg" alt={`Cobertura metálica em ${city.name} PR`} fill className="object-cover" sizes="33vw" />
                                </div>
                                <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                                    <Image src="/images/cobertura/cobertura-metalica-pre-fabricada.jpg" alt={`Cobertura metálica pré-fabricada ${city.name}`} fill className="object-cover" sizes="33vw" />
                                </div>
                            </div>

                            <blockquote className="border-l-2 border-primary pl-5 my-6">
                                <p className="text-lg text-white/80 italic">
                                    &ldquo;A principal vantagem da estrutura metálica é a precisão no desenvolvimento e a velocidade da instalação.&rdquo;
                                </p>
                            </blockquote>

                            <h3 className="font-display font-bold text-xl text-white mb-5">
                                Vantagens da <span className="text-primary">Cobertura Metálica</span>
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {advantages.map((adv, i) => (
                                    <div key={i} className="flex gap-3 p-4 glass border border-white/5 rounded-xl">
                                        <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-muted leading-relaxed">{adv}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 glass border border-white/5 rounded-xl">
                                <h4 className="font-semibold text-white mb-3 text-sm">Cobertura Metálica em outras cidades do Paraná</h4>
                                <div className="flex flex-wrap gap-2">
                                    {citiesPR.filter(c => c.slug !== cidade).slice(0, 12).map(c => (
                                        <Link key={c.slug} href={`/pr/${c.slug}`}
                                            className="text-xs text-muted hover:text-primary transition-colors px-2 py-1 border border-white/5 rounded hover:border-primary/30">
                                            {c.name}
                                        </Link>
                                    ))}
                                    <Link href="/pr" className="text-xs text-primary hover:text-primary/80 transition-colors px-2 py-1 flex items-center gap-1">
                                        Ver todas <ArrowRight size={10} />
                                    </Link>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="lg:sticky lg:top-24 flex flex-col gap-5">
                                <div className="glass border border-white/5 rounded-xl overflow-hidden">
                                    <div className="bg-primary px-5 py-4">
                                        <h3 className="font-display font-bold text-white text-lg">Orçamento em {city.name}</h3>
                                        <p className="text-xs text-white/70 mt-0.5">Respondemos em até 24h</p>
                                    </div>
                                    <div className="p-5"><QuoteForm /></div>
                                </div>
                                <div className="glass border border-white/5 rounded-xl p-5">
                                    <h4 className="font-semibold text-white mb-3 text-sm">Ligue Agora</h4>
                                    <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-3 text-muted hover:text-white transition-colors group">
                                        <span className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                            <Phone size={16} className="text-primary" />
                                        </span>
                                        <div>
                                            <p className="text-white font-bold text-sm">{siteConfig.phone}</p>
                                            <p className="text-[11px] text-muted">Seg–Sex, 08h às 18h</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <CTABand />
        </>
    )
}
