'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function CTABand() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Image with overlay */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url(/images/inicial/estrutura-melhor.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/80 to-[#C0392B]/50" />
            {/* Diagonal overlay */}
            <div className="absolute inset-0 bg-[#C0392B]/10" />
            {/* Steel lines */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 21px)',
                }}
            />

            <div className="container-max relative z-10">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block"
                    >
                        Para o seu projeto
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-none uppercase mb-4"
                    >
                        A MELHOR <br />
                        <span className="text-primary">EMPRESA</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed"
                    >
                        Para o seu projeto, seja ele simples ou complexo, escolha a empresa mais confiável em estrutura metálica do Brasil.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="/contato" className="btn-primary text-sm">
                            Entre em Contato <ArrowRight size={16} />
                        </Link>
                        <a
                            href={`tel:${siteConfig.phoneClean}`}
                            className="btn-outline text-sm"
                        >
                            <Phone size={15} />
                            Ligar Agora
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
