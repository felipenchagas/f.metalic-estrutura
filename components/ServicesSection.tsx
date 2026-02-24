'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/services'

export default function ServicesSection() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="section-padding bg-[#111827] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px',
                }}
            />

            <div className="container-max relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                        Alguns de nossos serviços
                    </span>
                    <h2 className="font-display font-black text-4xl md:text-5xl text-white">
                        O QUE OFERECEMOS AOS NOSSOS{' '}
                        <span className="text-primary">CLIENTES</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                        >
                            <Link
                                href={`/servicos/${service.slug}`}
                                className="group block glass border border-white/5 rounded-xl overflow-hidden card-hover cursor-pointer h-full relative"
                            >
                                {/* Image */}
                                <div className="img-overlay aspect-[16/9] relative overflow-hidden">
                                    <Image
                                        src={service.galleryImages[0]?.src || '/images/slider/estrutura-metalica.jpg'}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Service label on image */}
                                    <div className="absolute bottom-3 left-4">
                                        <span className="text-[10px] font-semibold uppercase tracking-widest text-primary bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                                            {service.shortTitle}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2">
                                        {service.description}
                                    </p>
                                    <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary group-hover:gap-3 transition-all duration-300">
                                        Ver mais <ArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <Link href="/contato" className="btn-primary">
                        Solicitar Orçamento <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
