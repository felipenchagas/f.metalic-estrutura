import { getLeads, getStats } from '@/lib/leads-store'
import KPICard from '@/components/admin/KPICard'
import MiniChart from '@/components/admin/MiniChart'
import LeadsTable from '@/components/admin/LeadsTable'
import { citiesPR } from '@/lib/cities'
import { services } from '@/lib/services'
import {
    ExternalLink, Globe, MessageCircle, MapPin,
    Wrench, BarChart2, FileText, RefreshCw, Phone, Mail
} from 'lucide-react'

export const dynamic = 'force-dynamic'

const siteUrl = 'https://metalic-estrutura.com.br'
const whatsappNumber = '5541996368387'

const quickLinks = [
    { label: 'Ver Site', href: siteUrl, icon: Globe, color: 'text-white' },
    { label: 'WhatsApp', href: `https://wa.me/${whatsappNumber}`, icon: MessageCircle, color: 'text-green-400' },
    { label: 'Google Search Console', href: 'https://search.google.com/search-console', icon: BarChart2, color: 'text-[#C0392B]' },
    { label: 'Google Analytics', href: 'https://analytics.google.com', icon: BarChart2, color: 'text-orange-400' },
    { label: 'HestiaCP', href: 'https://hestiacp.com', icon: Wrench, color: 'text-blue-400' },
    { label: 'Email / Webmail', href: `https://webmail.metalic-estrutura.com.br`, icon: Mail, color: 'text-yellow-400' },
]

const sitePages = [
    { label: 'Homepage', href: '/', path: '/' },
    { label: 'Galeria', href: '/galeria', path: '/galeria' },
    { label: 'Contato', href: '/contato', path: '/contato' },
    { label: 'Cidades PR', href: '/pr', path: '/pr' },
]

export default async function AdminPage() {
    const [leads, stats] = await Promise.all([getLeads(), getStats()])
    const recent = leads.slice(0, 8)

    return (
        <div className="space-y-6 max-w-7xl">
            {/* Page header */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="font-display font-black text-3xl text-white uppercase tracking-wide">
                        Painel <span className="text-[#C0392B]">de Controle</span>
                    </h1>
                    <p className="text-[10px] text-white/20 mt-1 uppercase tracking-widest">
                        {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
                <a href={siteUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 border border-white/8 rounded-sm text-xs text-white/40 hover:text-white hover:border-white/20 transition-all">
                    <Globe size={12} />
                    {siteUrl.replace('https://', '')}
                    <ExternalLink size={10} />
                </a>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <KPICard label="Total de Orçamentos" value={stats.total} sub="desde o início" accent />
                <KPICard label="Recebidos Hoje" value={stats.today} sub="últimas 24h" />
                <KPICard label="Essa Semana" value={stats.week} sub="últimos 7 dias" />
                <KPICard label="Estado Mais Ativo" value={stats.topState} sub="maior volume" />
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                {/* Left col — chart + recent */}
                <div className="lg:col-span-2 space-y-4">
                    <MiniChart data={stats.chart} />

                    {/* Recent leads */}
                    <div className="bg-[#111] border border-white/8 rounded-sm">
                        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-white/5">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">
                                Últimos orçamentos
                            </p>
                            <a href="/admin/orcamentos"
                                className="text-[10px] text-[#C0392B] hover:text-[#E74C3C] transition-colors uppercase tracking-widest flex items-center gap-1">
                                Ver todos <ExternalLink size={9} />
                            </a>
                        </div>
                        <div className="px-5 py-1">
                            {recent.length === 0 && (
                                <p className="text-white/20 text-sm text-center py-6">Nenhum orçamento ainda</p>
                            )}
                            {recent.map((lead, i) => (
                                <div key={lead.id}
                                    className={`flex items-center gap-4 py-3 ${i < recent.length - 1 ? 'border-b border-white/4' : ''}`}>
                                    <div className="w-7 h-7 rounded-sm bg-[#C0392B]/10 border border-[#C0392B]/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-[9px] text-[#C0392B] font-black">{lead.estado || '?'}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-white truncate font-medium">{lead.nome}</p>
                                        <p className="text-[10px] text-white/30 truncate">{lead.cidade} · {lead.email}</p>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <a href={`https://wa.me/55${lead.ddd}${lead.telefone}`} target="_blank" rel="noopener noreferrer"
                                            className="w-6 h-6 bg-green-500/10 border border-green-500/20 rounded-sm flex items-center justify-center hover:bg-green-500/20 transition-colors">
                                            <MessageCircle size={10} className="text-green-400" />
                                        </a>
                                        <a href={`tel:${lead.ddd}${lead.telefone}`}
                                            className="w-6 h-6 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center hover:bg-white/10 transition-colors">
                                            <Phone size={10} className="text-white/40" />
                                        </a>
                                        <a href={`mailto:${lead.email}`}
                                            className="w-6 h-6 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center hover:bg-white/10 transition-colors">
                                            <Mail size={10} className="text-white/40" />
                                        </a>
                                    </div>
                                    <span className="text-[10px] text-white/20 font-mono whitespace-nowrap tabular-nums">
                                        {new Date(lead.createdAt).toLocaleDateString('pt-BR')}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right col */}
                <div className="space-y-4">
                    {/* Quick links */}
                    <div className="bg-[#111] border border-white/8 rounded-sm p-5">
                        <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-4">Acesso Rápido</p>
                        <div className="space-y-1.5">
                            {quickLinks.map(l => (
                                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-sm hover:bg-white/5 border border-transparent hover:border-white/8 transition-all group">
                                    <l.icon size={13} className={l.color} />
                                    <span className="text-sm text-white/50 group-hover:text-white transition-colors">{l.label}</span>
                                    <ExternalLink size={10} className="ml-auto text-white/10 group-hover:text-white/30" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Site stats */}
                    <div className="bg-[#111] border border-white/8 rounded-sm p-5">
                        <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-4">Estatísticas do Site</p>
                        <div className="space-y-3">
                            {[
                                { label: 'Páginas de Cidades PR', value: citiesPR.length, icon: MapPin, color: 'text-[#C0392B]' },
                                { label: 'Serviços cadastrados', value: services.length, icon: Wrench, color: 'text-orange-400' },
                                { label: 'Total de páginas SEO', value: citiesPR.length + services.length + 4, icon: FileText, color: 'text-yellow-400' },
                            ].map(item => (
                                <div key={item.label} className="flex items-center gap-3">
                                    <item.icon size={13} className={item.color} />
                                    <span className="text-xs text-white/40 flex-1">{item.label}</span>
                                    <span className="font-display font-black text-white text-lg tabular-nums">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pages */}
                    <div className="bg-[#111] border border-white/8 rounded-sm p-5">
                        <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-4">Páginas do Site</p>
                        <div className="space-y-1">
                            {sitePages.map(p => (
                                <a key={p.href} href={`${siteUrl}${p.href}`} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-between px-3 py-2 rounded-sm hover:bg-white/5 text-xs text-white/40 hover:text-white transition-all group">
                                    <span>{p.label}</span>
                                    <span className="text-white/15 group-hover:text-white/40 font-mono">{p.path} <ExternalLink size={9} className="inline" /></span>
                                </a>
                            ))}
                            {services.map(s => (
                                <a key={s.slug} href={`${siteUrl}/servicos/${s.slug}`} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-between px-3 py-2 rounded-sm hover:bg-white/5 text-xs text-white/40 hover:text-white transition-all group">
                                    <span>{s.shortTitle}</span>
                                    <span className="text-white/15 group-hover:text-white/40 font-mono">/servicos/{s.slug} <ExternalLink size={9} className="inline" /></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
