'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function AboutSection() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="sobre" ref={ref} className="section-padding bg-[#0A0A0A]">
            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                            Prontos para atender
                        </span>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
                            ESTRUTURA METÁLICA<br />
                            <span className="text-primary">e projetos em aço</span>
                        </h2>
                        <div className="w-12 h-1 bg-primary mb-6" />
                        <div className="flex flex-col gap-4 text-muted leading-relaxed">
                            <p>
                                Dispomos de uma equipe de engenheiros especialistas em estruturas metálicas, capazes de desenvolver qualquer obra desde o projeto até a entrega final. Nossos colaboradores são treinados e retreinados para garantia de um serviço bem executado.
                            </p>
                            <p>
                                Tenha certeza de escolher a empresa mais completa quando se fala em estrutura metálica. A resistência do aço é tão flexível que pode vencer grandes vãos — impossível para uma estrutura de concreto.
                            </p>
                            <p>
                                Levando em conta outros tipos de estruturas existentes no mercado mundialmente, a estrutura metálica é disparada a melhor e mais confiável.
                            </p>
                        </div>
                        <Link href="/contato" className="btn-primary mt-8 inline-flex">
                            Solicitar Orçamento <ChevronRight size={16} />
                        </Link>
                    </motion.div>

                    {/* Gallery Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 gap-3"
                    >
                        <div className="img-overlay rounded-xl overflow-hidden aspect-[4/5] row-span-2">
                            <Image
                                src="/images/inicial/cobertura-metalica-em-curitiba.jpg"
                                alt="Cobertura Metálica"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>
                        <div className="img-overlay rounded-xl overflow-hidden aspect-[4/3]">
                            <Image
                                src="/images/inicial/escada-metalica.jpg"
                                alt="Escada Metálica"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>
                        <div className="img-overlay rounded-xl overflow-hidden aspect-[4/3]">
                            <Image
                                src="/images/inicial/mezanino-metalico.jpg"
                                alt="Mezanino Metálico"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
