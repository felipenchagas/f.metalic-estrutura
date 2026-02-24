'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react'
import type { Service } from '@/lib/services'
import { siteConfig } from '@/lib/seo'
import QuoteForm from '@/components/QuoteForm'

/* ── Gallery: layout adapts to number of images ─────────── */
function ServiceGallery({ images }: { images: { src: string; alt: string }[] }) {
    const count = images.length

    if (count === 1) {
        return (
            <div className="img-overlay rounded-xl overflow-hidden w-full aspect-video relative">
                <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" sizes="66vw" />
            </div>
        )
    }

    if (count === 2) {
        return (
            <div className="grid grid-cols-2 gap-3">
                {images.map((img, i) => (
                    <div key={i} className="img-overlay rounded-xl overflow-hidden aspect-[4/3] relative">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
                    </div>
                ))}
            </div>
        )
    }

    if (count === 3) {
        // 1 tall on left + 2 stacked on right — same total height
        return (
            <div className="grid grid-cols-2 gap-3" style={{ height: 340 }}>
                <div className="img-overlay rounded-xl overflow-hidden relative h-full">
                    <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" sizes="33vw" />
                </div>
                <div className="grid grid-rows-2 gap-3 h-full">
                    <div className="img-overlay rounded-xl overflow-hidden relative">
                        <Image src={images[1].src} alt={images[1].alt} fill className="object-cover" sizes="25vw" />
                    </div>
                    <div className="img-overlay rounded-xl overflow-hidden relative">
                        <Image src={images[2].src} alt={images[2].alt} fill className="object-cover" sizes="25vw" />
                    </div>
                </div>
            </div>
        )
    }

    // 4+ images: uniform 2×2 grid
    return (
        <div className="grid grid-cols-2 gap-3">
            {images.slice(0, 4).map((img, i) => (
                <div key={i} className="img-overlay rounded-xl overflow-hidden aspect-[4/3] relative">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
                </div>
            ))}
        </div>
    )
}

/* ── Main component ─────────────────────────────────────── */
interface Props {
    service: Service
    related: Service[]
}

export default function ServicePageClient({ service, related }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <div ref={ref}>
            <section className="section-padding bg-[#0A0A0A]">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* ── Main Content ──────────────── */}
                        <div className="lg:col-span-2">
                            {/* Intro paragraphs */}
                            <div className="flex flex-col gap-4 mb-8">
                                {service.content.intro.map((para, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-muted leading-relaxed"
                                    >
                                        {para}
                                    </motion.p>
                                ))}
                            </div>

                            {/* Gallery */}
                            {service.galleryImages.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 }}
                                    className="mb-8"
                                >
                                    <ServiceGallery images={service.galleryImages} />
                                </motion.div>
                            )}

                            {/* Quote */}
                            {service.content.quote && (
                                <motion.blockquote
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 }}
                                    className="border-l-2 border-primary pl-5 my-8"
                                >
                                    <p className="text-lg text-white/80 italic leading-relaxed">
                                        &ldquo;{service.content.quote}&rdquo;
                                    </p>
                                </motion.blockquote>
                            )}

                            {/* Body text */}
                            {service.content.bodyText?.map((para, i) => (
                                <p key={i} className="text-muted leading-relaxed mb-4">{para}</p>
                            ))}

                            {/* Advantages */}
                            {service.content.advantages && (
                                <div className="mt-10">
                                    <h2 className="font-display font-bold text-2xl text-white mb-6">
                                        Vantagens do <span className="text-primary">{service.shortTitle}</span>
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.content.advantages.map((adv, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                                transition={{ delay: 0.4 + i * 0.1 }}
                                                className="flex gap-3 p-4 glass border border-white/5 rounded-xl hover:border-primary/30 transition-colors"
                                            >
                                                <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h4 className="font-semibold text-white text-sm mb-1">{adv.title}</h4>
                                                    <p className="text-xs text-muted leading-relaxed">{adv.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ── Sidebar ───────────────────── */}
                        <aside className="lg:col-span-1">
                            <div className="lg:sticky lg:top-24 flex flex-col gap-5">

                                {/* Quote Form */}
                                <div className="glass border border-white/5 rounded-xl overflow-hidden">
                                    <div className="bg-primary px-5 py-4">
                                        <h3 className="font-display font-bold text-white text-lg">Solicite um Orçamento</h3>
                                        <p className="text-xs text-white/70 mt-0.5">Respondemos em até 24h</p>
                                    </div>
                                    <div className="p-5">
                                        <QuoteForm />
                                    </div>
                                </div>

                                {/* Contact Card */}
                                <div className="glass border border-white/5 rounded-xl p-5">
                                    <h4 className="font-semibold text-white mb-4 text-sm">Fale Diretamente</h4>
                                    <a
                                        href={`tel:${siteConfig.phoneClean}`}
                                        className="flex items-center gap-3 text-muted hover:text-white transition-colors group"
                                    >
                                        <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <Phone size={15} className="text-primary" />
                                        </span>
                                        <span className="text-sm font-medium">{siteConfig.phone}</span>
                                    </a>
                                </div>

                                {/* Related Services */}
                                {related.length > 0 && (
                                    <div className="glass border border-white/5 rounded-xl p-5">
                                        <h4 className="font-semibold text-white mb-4 text-sm">Serviços Relacionados</h4>
                                        <div className="flex flex-col gap-2">
                                            {related.map(s => (
                                                <Link
                                                    key={s.slug}
                                                    href={`/servicos/${s.slug}`}
                                                    className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
                                                >
                                                    <ArrowRight size={12} className="text-primary flex-shrink-0" />
                                                    {s.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    )
}
