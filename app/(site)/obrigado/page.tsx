import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, MessageCircle, ArrowRight, Clock, ShieldCheck, HardHat, PhoneCall } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
    title: 'Orçamento Enviado com Sucesso | Metalic Estrutura',
    description: 'Agradecemos o seu contato. Nossa equipe de engenharia analisará sua solicitação com prioridade.',
    robots: {
        index: false,
        follow: false,
    },
}

const WHATSAPP_NUMBER = '5541996368387'
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Acabei de enviar uma solicitação de orçamento pelo site e gostaria de atendimento prioritário.')

export default function ObrigadoPage() {
    return (
        <main className="min-h-[85vh] bg-[#0A0A0A] text-white flex items-center justify-center py-16 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px',
                }}
            />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container-max max-w-3xl relative z-10">
                <div className="glass border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-xl text-center">
                    
                    {/* Success Icon Badge */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-6 shadow-lg shadow-emerald-950/40">
                        <CheckCircle2 size={44} className="animate-pulse" />
                    </div>

                    <span className="inline-block px-3.5 py-1 text-xs uppercase tracking-widest font-bold text-emerald-400 bg-emerald-500/10 rounded-full mb-4 border border-emerald-500/20">
                        Mensagem Recebida
                    </span>

                    {/* Main Title */}
                    <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-4">
                        Orçamento Enviado com <span className="text-emerald-400">Sucesso!</span>
                    </h1>

                    {/* Main description requested */}
                    <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
                        Agradecemos o seu contato. Nossa equipe de engenharia analisará o seu projeto e entrará em contato rapidamente.
                    </p>

                    {/* Priority WhatsApp Card */}
                    <div className="bg-gradient-to-br from-[#131B2E] to-[#0F172A] border border-[#2563EB]/20 rounded-2xl p-6 sm:p-8 mb-8 text-left relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                                    <Clock size={16} />
                                    Atendimento Imediato
                                </div>
                                <h2 className="text-white font-bold text-lg sm:text-xl">
                                    Precisa de atendimento urgente?
                                </h2>
                                <p className="text-gray-400 text-sm max-w-md">
                                    Para solicitar prioridade ou enviar plantas e projetos diretamente, fale agora com nosso engenheiro no WhatsApp:
                                </p>
                            </div>

                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5C] text-gray-950 font-bold px-6 py-4 rounded-xl shadow-lg shadow-emerald-950/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center shrink-0 cursor-pointer"
                            >
                                <MessageCircle size={22} className="fill-current" />
                                <span>Solicitar Prioridade via WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Reassurance Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                            <HardHat size={20} className="text-primary shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Engenharia Própria</h4>
                                <p className="text-xs text-muted mt-0.5">Cálculo estrutural e emissão de ART.</p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                            <ShieldCheck size={20} className="text-primary shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Garantia & Qualidade</h4>
                                <p className="text-xs text-muted mt-0.5">Aço certificado e rigor técnico.</p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                            <PhoneCall size={20} className="text-primary shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contato Direto</h4>
                                <p className="text-xs text-muted mt-0.5">{siteConfig.phone}</p>
                            </div>
                        </div>
                    </div>

                    {/* Back to Home Button */}
                    <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-white/5"
                        >
                            <span>Voltar à Página Inicial</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    )
}
