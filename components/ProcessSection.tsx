'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, FileText, Cpu, Wrench } from 'lucide-react'

const steps = [
    {
        number: '01',
        icon: MessageSquare,
        title: 'Contato & Briefing',
        description: 'Você nos conta seu projeto — metragem, tipo de estrutura, prazo e localização. Atendimento por WhatsApp, email ou telefone.',
    },
    {
        number: '02',
        icon: FileText,
        title: 'Projeto & Orçamento',
        description: 'Nossa equipe de engenharia elabora o projeto técnico e envia um orçamento detalhado sem compromisso em até 48h.',
    },
    {
        number: '03',
        icon: Cpu,
        title: 'Fabricação',
        description: 'Estrutura fabricada em nossa planta com aço certificado e controle de qualidade rigoroso. Prazo médio: 15 a 30 dias.',
    },
    {
        number: '04',
        icon: Wrench,
        title: 'Instalação',
        description: 'Equipe especializada instala em todo o Brasil. Entregamos com ART assinada e garantia de estrutura.',
    },
]

export default function ProcessSection() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const schemaHowTo = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Processo de Construção de Estrutura Metálica',
        description: 'Como a Metalic Estrutura atua: do briefing técnico inicial até a engenharia final e instalação da estrutura em sua obra.',
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            url: `https://www.metalic-estrutura.com.br/#step-${index + 1}`,
            name: step.title,
            text: step.description,
        }))
    }

    return (
        <section ref={ref} className="section-padding relative overflow-hidden bg-[#111827]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />

            {/* Horizontal line decoration */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/3 hidden lg:block" />

            <div className="container-max relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="mb-14"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3 block">
                        Como funciona
                    </span>
                    <h2 className="font-display font-black text-4xl md:text-5xl text-white max-w-xl" style={{ textWrap: 'balance' }}>
                        Do contato à <span className="text-[#C0392B]">entrega</span>, sem complicações
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                    {steps.map((step, i) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="relative p-6 lg:p-8 group"
                            >
                                {/* Connector arrow (desktop) */}
                                {i < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 z-10">
                                        <div className="w-3 h-3 border-t-2 border-r-2 border-[#C0392B]/40 rotate-45" />
                                    </div>
                                )}

                                {/* Step number */}
                                <div className="font-display font-black text-[64px] leading-none text-white/4 absolute top-4 right-4 select-none">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="w-12 h-12 bg-[#C0392B]/10 border border-[#C0392B]/20 flex items-center justify-center mb-5 group-hover:bg-[#C0392B]/20 group-hover:border-[#C0392B]/40 transition-all duration-300">
                                    <Icon size={20} className="text-[#C0392B]" />
                                </div>

                                {/* Step label */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[10px] font-black text-[#C0392B] font-mono">{step.number}</span>
                                    <div className="flex-1 h-[1px] bg-[#C0392B]/20" />
                                </div>

                                <h3 className="font-display font-bold text-lg text-white mb-2 uppercase tracking-wide">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-white/40 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
