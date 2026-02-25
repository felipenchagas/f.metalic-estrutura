'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Ricardo Mendes',
        role: 'Empresário',
        city: 'São Paulo — SP',
        service: 'Galpão Industrial 1.200m²',
        text: 'A Metalic superou todas as expectativas. Entregaram nossa estrutura 2 semanas antes do prazo, com acabamento impecável. Já indicamos para 3 parceiros.',
        rating: 5,
        initials: 'RM',
    },
    {
        name: 'Fernanda Oliveira',
        role: 'Diretora de Operações',
        city: 'Curitiba — PR',
        service: 'Mezanino Comercial 600m²',
        text: 'Projeto, fabricação e instalação em 45 dias. A equipe técnica é muito competente e o atendimento do começo ao fim foi excelente. Recomendo sem hesitar.',
        rating: 5,
        initials: 'FO',
    },
    {
        name: 'Paulo Carvalho',
        role: 'Engenheiro Civil',
        city: 'Joinville — SC',
        service: 'Cobertura Metálica 800m²',
        text: 'Como engenheiro, sei avaliar qualidade técnica. A Metalic entregou uma estrutura de altíssimo nível, ART assinada, todos os cálculos em ordem. Parceria certeira.',
        rating: 5,
        initials: 'PC',
    },
]

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} size={12} className="fill-[#E67E22] text-[#E67E22]" />
            ))}
        </div>
    )
}

export default function TestimonialsSection() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="section-padding relative overflow-hidden" style={{ background: '#0d0d0d' }}>
            {/* Background grid */}
            <div className="absolute inset-0 opacity-[0.025]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Red glow bottom-left */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C0392B] opacity-[0.04] rounded-full blur-3xl" />

            <div className="container-max relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="mb-14"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3 block">
                        Depoimentos
                    </span>
                    <h2 className="font-display font-black text-4xl md:text-5xl text-white max-w-xl" style={{ textWrap: 'balance' }}>
                        O que nossos <span className="text-[#C0392B]">clientes</span> dizem
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {testimonials.map((t, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            className="relative flex flex-col bg-[#111] border border-white/6 rounded-sm p-6 hover:border-[#C0392B]/30 transition-colors duration-300 group"
                        >
                            {/* Quote icon */}
                            <Quote size={28} className="text-[#C0392B]/20 absolute top-5 right-5 group-hover:text-[#C0392B]/40 transition-colors" />

                            {/* Rating */}
                            <StarRating count={t.rating} />

                            {/* Text */}
                            <p className="text-sm text-white/60 leading-relaxed mt-4 mb-6 flex-1">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Service tag */}
                            <div className="mb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C0392B] bg-[#C0392B]/10 px-2 py-1 rounded-sm">
                                    {t.service}
                                </span>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                <div className="w-9 h-9 rounded-sm bg-[#C0392B] flex items-center justify-center flex-shrink-0">
                                    <span className="text-[11px] font-black text-white">{t.initials}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white leading-none">{t.name}</p>
                                    <p className="text-[10px] text-white/30 mt-0.5">{t.role} · {t.city}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
