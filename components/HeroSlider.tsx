'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

const slides = [
    {
        image: '/images/slider/estrutura-metalica.jpg',
        title: 'ESTRUTURA METÁLICA',
        subtitle: 'Atendimento para todo',
        highlight: 'Brasil',
        cta: 'Solicitar Orçamento',
        ctaHref: '/contato',
    },
    {
        image: '/images/slider/cobertura-metalica.jpg',
        title: 'EXPERIÊNCIA',
        subtitle: 'Compromisso',
        highlight: 'e Qualidade',
        cta: 'Ver Serviços',
        ctaHref: '/servicos/estrutura-metalica',
    },
    {
        image: '/images/slider/estrutura-metalica-curitiba.jpg',
        title: 'ATENDIMENTO DIFERENCIADO',
        subtitle: 'Mais de',
        highlight: '2.000 Obras',
        extra: 'em todo o Brasil',
        cta: 'Entre em Contato',
        ctaHref: '/contato',
    },
]

export default function HeroSlider() {
    const [current, setCurrent] = useState(0)
    const [paused, setPaused] = useState(false)

    const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])

    useEffect(() => {
        if (paused) return
        const id = setInterval(next, 5000)
        return () => clearInterval(id)
    }, [next, paused])

    return (
        <section
            className="relative h-[90vh] min-h-[560px] overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* Slides */}
            <AnimatePresence mode="wait">
                {slides.map((slide, i) =>
                    i === current ? (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            className="absolute inset-0"
                        >
                            {/* Background Image */}
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority={i === 0}
                                quality={90}
                            />
                            {/* Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                            <div className="absolute inset-0 gradient-steel" />
                            {/* Steel texture */}
                            <div className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 4px)',
                                }}
                            />
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container-max w-full">
                    <AnimatePresence mode="wait">
                        {slides.map((slide, i) =>
                            i === current ? (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 40 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="max-w-3xl"
                                >
                                    {/* Accent Line */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 60 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="h-1 bg-primary mb-6"
                                    />

                                    {/* Subtitle */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
                                    >
                                        {slide.subtitle}
                                    </motion.p>

                                    {/* Title */}
                                    <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-white mb-2 uppercase">
                                        {slide.title}
                                    </h1>

                                    {/* Highlight */}
                                    <p className="font-display font-bold text-3xl sm:text-4xl text-primary mb-2">
                                        {slide.highlight}
                                    </p>
                                    {slide.extra && (
                                        <p className="font-display text-2xl text-white/80 mb-6">{slide.extra}</p>
                                    )}

                                    {/* CTAs */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="flex flex-wrap gap-4 mt-8"
                                    >
                                        <Link href={slide.ctaHref} className="btn-primary text-sm">
                                            {slide.cta}
                                            <ChevronRight size={16} />
                                        </Link>
                                        <a
                                            href={`tel:${siteConfig.phoneClean}`}
                                            className="btn-outline text-sm"
                                        >
                                            <Phone size={15} />
                                            {siteConfig.phone}
                                        </a>
                                    </motion.div>
                                </motion.div>
                            ) : null
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Slide ${i + 1}`}
                        className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>

            {/* Bottom Gradient to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
        </section>
    )
}
