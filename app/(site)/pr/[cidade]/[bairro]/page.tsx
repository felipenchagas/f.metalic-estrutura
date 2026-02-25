import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Phone, CheckCircle2 } from 'lucide-react'
import { citiesPR, getCityBySlug } from '@/lib/cities'
import { siteConfig, getServiceSchema, getBreadcrumbSchema } from '@/lib/seo'
import { getCitySeo } from '@/lib/seo-cities-store'
import { getNeighborhoodSeo } from '@/lib/seo-neighborhoods-store'
import { generateSEOForCity } from '@/lib/seo-generator'
import QuoteForm from '@/components/QuoteForm'
import CTABand from '@/components/CTABand'
import { SEOInternalLinks } from '@/components/SEOInternalLinks'

type Props = { params: Promise<{ cidade: string; bairro: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { cidade, bairro } = await params
    const city = getCityBySlug(cidade)
    if (!city) return {}

    const storeData = await getCitySeo(city.slug)
    const normalizedBairro = bairro.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

    // Verificamos se o bairro existe no JSON da cidade para não criar 404 fake
    if (!storeData?.neighborhoods?.map(n => n.slug).includes(bairro)) {
        return {}
    }

    const generated = generateSEOForCity(`${normalizedBairro}, ${city.name}`)
    const nbSlug = bairro.toLowerCase().trim()
    const nbData = await getNeighborhoodSeo(city.slug, nbSlug)

    return {
        title: nbData?.customMetaTitle || generated.title,
        description: nbData?.customMetaDesc || generated.description,
        keywords: [`cobertura metálica em ${normalizedBairro}`, `cobertura metálica ${normalizedBairro} ${city.name} PR`, `estrutura em aço ${normalizedBairro}`],
        alternates: { canonical: `/pr/${cidade}/${bairro}` },
        openGraph: {
            title: nbData?.customMetaTitle || generated.title,
            description: nbData?.customMetaDesc || generated.description
        },
    }
}

const advantages = [
    'Instalação modular super-rápida',
    'Minimização do custo de manutenção',
    'Excelente isolamento acústico e térmico',
    'Estruturação com perfis robustos de aço',
    'Possibilidade de aproveitamento de longos vãos',
    'Laudo técnico de entrega (ART)',
]

export default async function BairroPage({ params }: Props) {
    const { cidade, bairro } = await params
    const city = getCityBySlug(cidade)
    if (!city) return notFound()

    const storeData = await getCitySeo(city.slug)
    const normalizedBairro = bairro.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

    if (!storeData?.neighborhoods?.map(n => n.slug).includes(bairro)) {
        return notFound()
    }

    const generated = generateSEOForCity(`${normalizedBairro}, ${city.name}`)
    const nbSlug = bairro.toLowerCase().trim()
    const nbData = await getNeighborhoodSeo(city.slug, nbSlug)

    const finalH1 = nbData?.customH1 || `${generated.h1.replace(` em ${normalizedBairro}, ${city.name}`, '')} em ${normalizedBairro}`
    const finalDesc = nbData?.customMetaDesc || generated.description
    const finalHero = nbData?.customHeroText || generated.heroSubtitle
    const finalP1 = nbData?.customText1 || generated.customText[0]
    const finalP2 = nbData?.customText2 || generated.customText[1]
    const finalQuote = nbData?.customQuote || generated.customQuote

    const schemaService = getServiceSchema(
        finalH1,
        `${siteConfig.url}/pr/${cidade}/${bairro}`,
        finalDesc
    )
    const schemaBreadcrumb = getBreadcrumbSchema([
        { name: 'Início', url: '/' },
        { name: 'Paraná', url: '/pr' },
        { name: city.name, url: `/pr/${cidade}` },
        { name: normalizedBairro, url: `/pr/${cidade}/${bairro}` }
    ])

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

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
                        <Link href={`/pr/${cidade}`} className="hover:text-white transition-colors">{city.name}</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary">{normalizedBairro}</span>
                    </nav>
                    <div className="w-10 h-0.5 bg-primary mb-4" />
                    <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-none uppercase mb-4" dangerouslySetInnerHTML={{
                        __html: finalH1.replace(new RegExp(`em ${normalizedBairro}`, 'i'), `<span class="text-primary">em ${normalizedBairro}</span>`)
                    }} />
                    <p className="text-muted max-w-xl leading-relaxed">
                        {finalHero}
                    </p>
                </div>
            </section>

            {/* Content + Sidebar */}
            <section className="section-padding bg-[#0A0A0A]">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <article className="lg:col-span-2 prose-sm max-w-none">
                            <h2 className="font-display font-bold text-2xl text-white mb-4">
                                Especialistas em {normalizedBairro} — {city.name}/PR
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                {finalP1}
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                {finalP2}
                            </p>

                            <blockquote className="border-l-2 border-primary pl-5 my-6">
                                <p className="text-lg text-white/80 italic">
                                    &ldquo;{finalQuote}&rdquo;
                                </p>
                            </blockquote>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 mt-10">
                                {advantages.map((adv, i) => (
                                    <div key={i} className="flex gap-3 p-4 glass border border-white/5 rounded-xl">
                                        <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-muted leading-relaxed">{adv}</p>
                                    </div>
                                ))}
                            </div>
                        </article>

                        <aside className="lg:col-span-1">
                            <div className="lg:sticky lg:top-24 flex flex-col gap-5">
                                <div className="glass border border-white/5 rounded-xl overflow-hidden">
                                    <div className="bg-primary px-5 py-4">
                                        <h3 className="font-display font-bold text-white text-lg">Orçamento Rápido</h3>
                                    </div>
                                    <div className="p-5"><QuoteForm /></div>
                                </div>
                                <div className="glass border border-white/5 rounded-xl p-5">
                                    <h4 className="font-semibold text-white mb-3 text-sm">Central de Vendas</h4>
                                    <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-3 text-muted hover:text-white transition-colors group">
                                        <span className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                            <Phone size={16} className="text-primary" />
                                        </span>
                                        <div>
                                            <p className="text-white font-bold text-sm">{siteConfig.phone}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <SEOInternalLinks currentContext="city" citySlug={city.slug} />

            <CTABand />
        </>
    )
}
