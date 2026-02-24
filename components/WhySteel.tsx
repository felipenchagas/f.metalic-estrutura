'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Leaf, Zap, RefreshCw, Globe } from 'lucide-react'

const advantages = [
    {
        icon: Leaf,
        title: 'SUSTENTABILIDADE',
        description: 'Ecologicamente correta e 100% reaproveitável. A estrutura metálica é o material mais sustentável da construção civil.',
        color: '#22C55E',
    },
    {
        icon: Globe,
        title: 'EM TODO MUNDO',
        description: 'Presente em todos os países de primeiro mundo. O aço é o material estrutural mais utilizado globalmente.',
        color: '#3B82F6',
    },
    {
        icon: Zap,
        title: 'VELOCIDADE',
        description: 'Fabricação e instalação muito mais rápida que a estrutura comum. Menor tempo de obra, menor custo.',
        color: '#EAB308',
    },
    {
        icon: RefreshCw,
        title: 'DURABILIDADE',
        description: 'Com manutenção simples, uma estrutura metálica dura fácil mais de 50 anos. 100% reutilizável em caso de desmontagem.',
        color: '#C0392B',
    },
]

export default function WhySteel() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="section-padding relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #111827 0%, #0d1117 100%)' }}
        >
            {/* Steel gradient background */}
            <div className="absolute inset-0 opacity-30"
                style={{
                    background: 'radial-gradient(ellipse 80% 50% at 50% 0%, #C0392B15, transparent)',
                }}
            />

            <div className="container-max relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-14"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                        Vantagens da estrutura metálica
                    </span>
                    <h2 className="font-display font-black text-4xl md:text-5xl text-white">
                        O aço é o <span className="text-primary">futuro</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((adv, i) => {
                        const Icon = adv.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -6 }}
                                className="glass border border-white/5 rounded-xl p-6 text-center group cursor-default hover:border-white/10 transition-all duration-300"
                                style={{
                                    boxShadow: `0 0 0 1px transparent`,
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: `${adv.color}20`, border: `1px solid ${adv.color}30` }}
                                >
                                    <Icon size={24} style={{ color: adv.color }} />
                                </div>

                                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-3">
                                    {adv.title}
                                </h3>
                                <p className="text-xs text-muted leading-relaxed">
                                    {adv.description}
                                </p>

                                {/* Bottom accent */}
                                <div
                                    className="h-0.5 w-0 mx-auto mt-4 transition-all duration-500 group-hover:w-12 rounded-full"
                                    style={{ backgroundColor: adv.color }}
                                />
                            </motion.div>
                        )
                    })}
                </div>

                {/* Quote */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="mt-14 max-w-2xl mx-auto text-center"
                >
                    <div className="w-8 h-0.5 bg-primary mx-auto mb-4" />
                    <p className="text-lg text-white/70 italic font-light leading-relaxed">
                        &ldquo;Hoje em dia, com o avanço da ciência e tecnologia, a estrutura metálica é a escolha de quem sabe adotar a melhor tecnologia disponível.&rdquo;
                    </p>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mt-4">
                        Metalic Estrutura
                    </p>
                </motion.blockquote>
            </div>
        </section>
    )
}
