import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
    title: 'Contato',
    description: 'Entre em contato com a Metalic Estrutura. Solicite orçamentos para estrutura metálica, cobertura, mezanino e mais. Curitiba PR — (41) 9-9636 8387.',
    alternates: { canonical: '/contato' },
}

const contactInfo = [
    {
        icon: Phone,
        label: 'Telefone / WhatsApp',
        value: siteConfig.phone,
        href: `tel:${siteConfig.phoneClean}`,
        color: '#22C55E',
    },
    {
        icon: Mail,
        label: 'E-mail Comercial',
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
        color: '#3B82F6',
    },
    {
        icon: MapPin,
        label: 'Endereço',
        value: 'CIC — Curitiba, Paraná',
        href: 'https://maps.google.com/?q=Curitiba,PR',
        color: '#C0392B',
    },
    {
        icon: Clock,
        label: 'Horário de Atendimento',
        value: 'Segunda a Sexta, 08h–18h',
        color: '#E67E22',
    },
]

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-[#111827] py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <div className="container-max relative">
                    <nav className="flex items-center gap-2 text-xs text-white/40 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-white transition-colors">Início</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary">Contato</span>
                    </nav>
                    <div className="w-10 h-0.5 bg-primary mb-4" />
                    <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-none uppercase mb-4">
                        CONTATO <span className="text-primary">Metalic</span>
                    </h1>
                    <p className="text-muted max-w-xl leading-relaxed">
                        Entre em contato e solicite orçamentos. Nossa equipe responde em até 24 horas.
                    </p>
                </div>
            </section>

            {/* Contact + Form */}
            <section className="section-padding bg-[#0A0A0A]">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Info */}
                        <div>
                            <p className="text-muted leading-relaxed mb-8">
                                A Metalic Estrutura aguarda seu contato para apresentar soluções em estrutura metálica. Entre em contato para sanar dúvidas ou solicitar um orçamento para o projeto que deseja iniciar.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {contactInfo.map((item, i) => {
                                    const Icon = item.icon
                                    const content = (
                                        <div
                                            key={i}
                                            className="glass border border-white/5 rounded-xl p-5 flex gap-4 items-start hover:border-white/10 transition-colors group"
                                        >
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}25` }}
                                            >
                                                <Icon size={18} style={{ color: item.color }} />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted mb-1">
                                                    {item.label}
                                                </p>
                                                <p className="text-sm text-white font-medium break-all">{item.value}</p>
                                            </div>
                                        </div>
                                    )

                                    return item.href ? (
                                        <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                                            {content}
                                        </a>
                                    ) : content
                                })}
                            </div>

                            {/* Map */}
                            <div className="rounded-xl overflow-hidden border border-[#1F2937]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387805.74816529173!2d-49.34533962065482!3d-25.43895438610142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3f5fc090ff1%3A0x3c7a83b0092bb747!2sCuritiba+-+PR%2C+Brasil!5e0!3m2!1spt-BR!2sus!4v1468007028074"
                                    width="100%"
                                    height="280"
                                    style={{ border: 0, display: 'block', filter: 'invert(0.9) hue-rotate(180deg)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localização Metalic Estrutura — Curitiba, PR"
                                />
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <div className="glass border border-white/5 rounded-2xl overflow-hidden">
                                <div className="bg-[#111827] p-6 border-b border-white/5">
                                    <h2 className="font-display font-bold text-2xl text-white">Solicitar Orçamento</h2>
                                    <p className="text-muted text-sm mt-1">Preencha o formulário e entraremos em contato</p>
                                </div>
                                <div className="p-6">
                                    <QuoteForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
