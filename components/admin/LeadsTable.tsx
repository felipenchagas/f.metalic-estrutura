'use client'

import { useState } from 'react'
import type { Lead } from '@/lib/leads-store'
import { ChevronDown, ChevronUp, Search, Phone, Mail, MapPin, FileText } from 'lucide-react'

type SortKey = keyof Pick<Lead, 'createdAt' | 'nome' | 'estado' | 'cidade'>

export default function LeadsTable({ leads }: { leads: Lead[] }) {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState<SortKey>('createdAt')
    const [asc, setAsc] = useState(false)
    const [expanded, setExpanded] = useState<string | null>(null)

    const filtered = leads
        .filter(l => {
            const q = search.toLowerCase()
            return !q || l.nome.toLowerCase().includes(q) || l.email.toLowerCase().includes(q) ||
                l.cidade.toLowerCase().includes(q) || l.estado.toLowerCase().includes(q)
        })
        .sort((a, b) => {
            const va = a[sort] ?? ''
            const vb = b[sort] ?? ''
            return asc ? va.localeCompare(vb) : vb.localeCompare(va)
        })

    const toggleSort = (key: SortKey) => {
        if (sort === key) setAsc(p => !p)
        else { setSort(key); setAsc(false) }
    }

    const SortIcon = ({ k }: { k: SortKey }) =>
        sort === k ? (asc ? <ChevronUp size={11} /> : <ChevronDown size={11} />) : null

    const fmtDate = (iso: string) => {
        const d = new Date(iso)
        return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' }) +
            ' ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }

    return (
        <div>
            {/* Search */}
            <div className="relative mb-4">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                    id="leads-search"
                    type="search"
                    placeholder="Buscar por nome, email, cidade…"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    autoComplete="off"
                    className="w-full pl-9 pr-4 py-2.5 bg-[#0d0d0d] border border-white/8 rounded-sm text-sm text-white placeholder-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B] transition"
                />
            </div>

            {/* Count */}
            <p className="text-[10px] text-white/20 uppercase tracking-widest mb-3">
                {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
            </p>

            {/* Table */}
            <div className="overflow-x-auto rounded-sm border border-white/6">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-white/6 bg-[#0d0d0d]">
                            {([
                                ['Data', 'createdAt'],
                                ['Nome', 'nome'],
                                ['Cidade', 'cidade'],
                                ['UF', 'estado'],
                            ] as [string, SortKey][]).map(([lbl, key]) => (
                                <th
                                    key={key}
                                    onClick={() => toggleSort(key)}
                                    className="px-4 py-3 text-left text-[10px] uppercase tracking-widest text-white/30 cursor-pointer hover:text-white/60 transition-colors select-none whitespace-nowrap"
                                >
                                    <span className="flex items-center gap-1">{lbl}<SortIcon k={key} /></span>
                                </th>
                            ))}
                            <th className="px-4 py-3 text-left text-[10px] uppercase tracking-widest text-white/30">Contato</th>
                            <th className="px-4 py-3" />
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-4 py-10 text-center text-white/20 text-sm">
                                    Nenhum orçamento encontrado
                                </td>
                            </tr>
                        )}
                        {filtered.map(lead => (
                            <>
                                <tr
                                    key={lead.id}
                                    onClick={() => setExpanded(expanded === lead.id ? null : lead.id)}
                                    className="border-b border-white/4 hover:bg-[#C0392B]/5 cursor-pointer transition-colors group"
                                >
                                    <td className="px-4 py-3 text-white/40 text-xs font-mono whitespace-nowrap">{fmtDate(lead.createdAt)}</td>
                                    <td className="px-4 py-3 text-white font-medium">{lead.nome}</td>
                                    <td className="px-4 py-3 text-white/60">{lead.cidade}</td>
                                    <td className="px-4 py-3">
                                        <span className="px-2 py-0.5 bg-[#C0392B]/15 text-[#C0392B] text-[10px] font-bold uppercase rounded-sm tracking-wider">
                                            {lead.estado || '—'}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <a href={`tel:${lead.ddd}${lead.telefone}`}
                                                onClick={e => e.stopPropagation()}
                                                className="text-white/30 hover:text-[#C0392B] transition-colors">
                                                <Phone size={13} />
                                            </a>
                                            <a href={`mailto:${lead.email}`}
                                                onClick={e => e.stopPropagation()}
                                                className="text-white/30 hover:text-[#C0392B] transition-colors">
                                                <Mail size={13} />
                                            </a>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <ChevronDown
                                            size={13}
                                            className={`text-white/20 transition-transform duration-200 ${expanded === lead.id ? 'rotate-180' : ''}`}
                                        />
                                    </td>
                                </tr>
                                {expanded === lead.id && (
                                    <tr key={`${lead.id}-exp`} className="bg-[#0d0d0d] border-b border-white/4">
                                        <td colSpan={6} className="px-6 py-4">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2 text-xs text-white/40">
                                                        <Mail size={11} className="text-[#C0392B]" />
                                                        <a href={`mailto:${lead.email}`} className="hover:text-white transition-colors">{lead.email}</a>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs text-white/40">
                                                        <Phone size={11} className="text-[#C0392B]" />
                                                        <a href={`tel:${lead.ddd}${lead.telefone}`} className="hover:text-white transition-colors">({lead.ddd}) {lead.telefone}</a>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs text-white/40">
                                                        <MapPin size={11} className="text-[#C0392B]" />
                                                        <span>{lead.cidade} — {lead.estado}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex items-start gap-2 text-xs text-white/40">
                                                        <FileText size={11} className="text-[#C0392B] mt-0.5 flex-shrink-0" />
                                                        <p className="leading-relaxed">{lead.descricao || '—'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
