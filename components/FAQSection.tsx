'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
    {
        q: 'Quanto tempo demora para receber o orçamento?',
        a: 'Após nos enviar as informações do projeto (metragem, tipo de estrutura e localização), enviamos o orçamento detalhado em até 48 horas úteis, sem nenhum compromisso.',
    },
    {
        q: 'A Metalic atende fora do Paraná?',
        a: 'Sim. Atendemos todo o Brasil. Temos clientes em São Paulo, Santa Catarina, Rio de Janeiro, Minas Gerais, Rio Grande do Sul e outros estados. Entre em contato para verificar disponibilidade na sua região.',
    },
    {
        q: 'O projeto inclui ART (Anotação de Responsabilidade Técnica)?',
        a: 'Sim. Todos os projetos estruturais são acompanhados de ART assinada por engenheiro responsável, garantindo segurança técnica e legal para sua obra.',
    },
    {
        q: 'Qual a garantia da estrutura metálica?',
        a: 'Oferecemos garantia estrutural conforme normas ABNT. Com manutenção adequada (pintura anticorrosiva periódica), a estrutura dura mais de 50 anos. Fornecemos manual de manutenção junto com a entrega.',
    },
    {
        q: 'Vocês fazem a instalação ou só a fabricação?',
        a: 'Fazemos as duas coisas. Oferecemos serviço completo: projeto, fabricação e instalação com equipe própria especializada. Também fornecemos somente a fabricação caso o cliente prefira instalar com equipe própria.',
    },
    {
        q: 'Como é feito o transporte da estrutura?',
        a: 'O transporte é realizado com caminhões especializados contratados por nós. O frete é calculado conforme a distância e o peso total da estrutura, e já incluímos esse custo no orçamento final.',
    },
    {
        q: 'A estrutura metálica precisa de fundação especial?',
        a: 'Depende do porte da obra. Nossa equipe de engenharia inclui no projeto o estudo de fundação adequado — que pode ser sapata, baldrame ou piso industrial. Orientamos o cliente sobre o tipo correto.',
    },
    {
        q: 'Posso parcelar o pagamento?',
        a: 'Trabalhamos com condições de pagamento flexíveis: sinal na assinatura do contrato, parcela na entrega da estrutura e parcela final na conclusão da instalação. Consulte-nos sobre outras formas.',
    },
]

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
}

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null)
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="section-padding relative overflow-hidden" style={{ background: '#0A0A0A' }}>
            {/* FAQPage JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container-max">
                <div className="lg:grid lg:grid-cols-5 lg:gap-16">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        className="lg:col-span-2 mb-10 lg:mb-0"
                    >
                        <span className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3 block">
                            FAQ
                        </span>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6" style={{ textWrap: 'balance' }}>
                            Perguntas <span className="text-[#C0392B]">frequentes</span>
                        </h2>
                        <p className="text-sm text-white/40 leading-relaxed mb-8">
                            Não encontrou sua dúvida? Entre em contato diretamente — respondemos em até 2 horas.
                        </p>
                        <a
                            href="https://wa.me/5541996368387"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-[#C0392B] hover:bg-[#E74C3C] text-white text-xs font-bold uppercase tracking-widest transition-colors duration-150"
                        >
                            Falar no WhatsApp
                        </a>
                    </motion.div>

                    {/* Right — Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.15 }}
                        className="lg:col-span-3 space-y-2"
                    >
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`border transition-colors duration-200 ${open === i ? 'border-[#C0392B]/40 bg-[#C0392B]/5' : 'border-white/6 bg-[#111] hover:border-white/12'}`}
                            >
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    aria-expanded={open === i}
                                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                                >
                                    <span className="text-sm font-semibold text-white">{faq.q}</span>
                                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                        {open === i
                                            ? <Minus size={14} className="text-[#C0392B]" />
                                            : <Plus size={14} className="text-white/30" />
                                        }
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {open === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-5 pb-4 text-sm text-white/50 leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
