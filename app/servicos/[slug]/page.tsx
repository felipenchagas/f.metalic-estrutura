import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Phone, CheckCircle2 } from 'lucide-react'
import { services, getServiceBySlug, getRelatedServices } from '@/lib/services'
import { siteConfig, getServiceSchema } from '@/lib/seo'
import ServicePageClient from '@/components/ServicePageClient'
import CTABand from '@/components/CTABand'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const service = getServiceBySlug(slug)
    if (!service) return {}

    return {
        title: service.title,
        description: service.metaDescription,
        keywords: service.keywords,
        alternates: { canonical: `/servicos/${slug}` },
        openGraph: {
            title: `${service.title} | Metalic Estrutura`,
            description: service.metaDescription,
            images: [{ url: service.heroImage, alt: service.title }],
        },
    }
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params
    const service = getServiceBySlug(slug)
    if (!service) notFound()

    const related = getRelatedServices(service.relatedServices)
    const schema = getServiceSchema(
        service.title,
        `${siteConfig.url}/servicos/${slug}`,
        service.metaDescription
    )

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
                <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

                {/* Steel lines */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.02) 3px, rgba(255,255,255,0.02) 4px)',
                    }}
                />

                <div className="container-max relative z-10 w-full">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs text-white/50 mb-4" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-white transition-colors">Início</Link>
                        <ChevronRight size={12} />
                        <span className="text-white/50">Serviços</span>
                        <ChevronRight size={12} />
                        <span className="text-primary">{service.shortTitle}</span>
                    </nav>

                    <div className="w-10 h-0.5 bg-primary mb-4" />
                    <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-none uppercase mb-3">
                        {service.title}
                    </h1>
                    <p className="text-lg text-white/60 max-w-xl">
                        {service.heroSubtitle}
                    </p>
                </div>
            </section>

            <ServicePageClient service={service} related={related} />
            <CTABand />
        </>
    )
}
