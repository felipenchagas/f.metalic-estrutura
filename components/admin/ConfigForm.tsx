'use client'

import { useState, useTransition } from 'react'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import type { SiteConfig } from '@/lib/site-config-store'

interface FieldGroup {
    title: string
    fields: {
        key: keyof SiteConfig
        label: string
        type?: string
        placeholder?: string
        hint?: string
        prefix?: string
    }[]
}

const fieldGroups: FieldGroup[] = [
    {
        title: 'Contato & WhatsApp',
        fields: [
            {
                key: 'whatsapp',
                label: 'Número WhatsApp',
                type: 'text',
                placeholder: '5541996368387',
                hint: 'Use o formato internacional: 55 + DDD + número (só dígitos)',
                prefix: 'wa.me/',
            },
            {
                key: 'phone',
                label: 'Telefone exibido',
                type: 'text',
                placeholder: '(41) 9-9636 8387',
                hint: 'Formato de exibição no site',
            },
            {
                key: 'phoneClean',
                label: 'Telefone para href (tel:)',
                type: 'text',
                placeholder: '+554196368387',
                hint: 'Usado em links tel: — com + e código do país',
            },
            {
                key: 'email',
                label: 'E-mail de contato',
                type: 'email',
                placeholder: 'contato@seusite.com.br',
            },
        ],
    },
    {
        title: 'Endereço & Horário',
        fields: [
            {
                key: 'address',
                label: 'Endereço',
                placeholder: 'CIC, Curitiba — Paraná',
            },
            {
                key: 'businessHours',
                label: 'Horário de Funcionamento',
                placeholder: 'Seg–Sex, 08h às 18h',
            },
        ],
    },
    {
        title: 'Redes Sociais',
        fields: [
            {
                key: 'instagram',
                label: 'Instagram',
                placeholder: 'https://instagram.com/...',
                prefix: 'instagram.com/',
            },
            {
                key: 'facebook',
                label: 'Facebook',
                placeholder: 'https://facebook.com/...',
            },
        ],
    },
    {
        title: 'Texto do Site',
        fields: [
            {
                key: 'heroTitle',
                label: 'Título Principal (Hero)',
                placeholder: 'Estrutura Metálica com Qualidade e Garantia',
                hint: 'Aparece no texto do slider principal',
            },
            {
                key: 'heroSubtitle',
                label: 'Subtítulo do Hero',
                placeholder: 'Especialistas em...',
            },
            {
                key: 'ctaText',
                label: 'Texto do botão de chamada',
                placeholder: 'Solicitar Orçamento',
            },
        ],
    },
]

function InputField({
    fieldKey,
    label,
    type = 'text',
    placeholder,
    hint,
    prefix,
    value,
    onChange,
}: {
    fieldKey: string
    label: string
    type?: string
    placeholder?: string
    hint?: string
    prefix?: string
    value: string
    onChange: (v: string) => void
}) {
    return (
        <div>
            <label htmlFor={fieldKey} className="block text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">
                {label}
            </label>
            <div className="flex items-center">
                {prefix && (
                    <span className="px-3 py-2.5 bg-[#0d0d0d] border border-r-0 border-white/8 rounded-l-sm text-xs text-white/20 whitespace-nowrap">
                        {prefix}
                    </span>
                )}
                <input
                    id={fieldKey}
                    type={type}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    placeholder={placeholder}
                    autoComplete="off"
                    className={`flex-1 px-4 py-2.5 bg-[#0d0d0d] border border-white/8 text-sm text-white placeholder-white/15 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C0392B] transition-all ${prefix ? 'rounded-r-sm' : 'rounded-sm'}`}
                />
            </div>
            {hint && <p className="text-[10px] text-white/20 mt-1">{hint}</p>}
        </div>
    )
}

export default function ConfigForm({ initial }: { initial: SiteConfig }) {
    const [config, setConfig] = useState<SiteConfig>(initial)
    const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
    const [isPending, startTransition] = useTransition()

    const update = (key: keyof SiteConfig) => (value: string) => {
        setConfig(prev => ({ ...prev, [key]: value }))
        if (status === 'saved') setStatus('idle')
    }

    const handleSave = async () => {
        setStatus('saving')
        try {
            const res = await fetch('/api/admin/config', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config),
            })
            if (!res.ok) throw new Error()
            setStatus('saved')
            startTransition(() => { setTimeout(() => setStatus('idle'), 3000) })
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="space-y-8 max-w-3xl">
            {fieldGroups.map(group => (
                <div key={group.title} className="bg-[#111] border border-white/8 rounded-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-white/5 bg-[#0d0d0d]">
                        <h2 className="text-[10px] uppercase tracking-widest font-bold text-white/40">{group.title}</h2>
                    </div>
                    <div className="px-6 py-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {group.fields.map(f => (
                            <InputField
                                key={f.key}
                                fieldKey={f.key}
                                label={f.label}
                                type={f.type}
                                placeholder={f.placeholder}
                                hint={f.hint}
                                prefix={f.prefix}
                                value={config[f.key] as string}
                                onChange={update(f.key)}
                            />
                        ))}
                    </div>
                </div>
            ))}

            {/* WhatsApp preview */}
            <div className="bg-[#111] border border-white/8 rounded-sm p-5">
                <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-3">Preview do link WhatsApp</p>
                <a
                    href={`https://wa.me/${config.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-sm text-sm text-green-400 hover:bg-green-500/20 transition-colors font-mono"
                >
                    wa.me/{config.whatsapp}
                </a>
                <p className="text-[10px] text-white/20 mt-2">Clique para testar se o número está correto antes de salvar</p>
            </div>

            {/* Save */}
            <div className="flex items-center gap-4">
                <button
                    onClick={handleSave}
                    disabled={status === 'saving' || isPending}
                    className="flex items-center gap-2 px-8 py-3 bg-[#C0392B] hover:bg-[#E74C3C] text-white text-sm font-bold uppercase tracking-widest rounded-sm transition-colors duration-150 disabled:opacity-50"
                >
                    {status === 'saving' ? <Loader2 size={14} className="animate-spin" /> : null}
                    {status === 'saving' ? 'Salvando…' : 'Salvar Configurações'}
                </button>

                {status === 'saved' && (
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                        <CheckCircle size={14} />
                        Salvo com sucesso!
                    </div>
                )}
                {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                        <AlertCircle size={14} />
                        Erro ao salvar. Tente novamente.
                    </div>
                )}
            </div>

            <p className="text-xs text-white/15">
                ⚠️ Após salvar, reinicie o servidor ou faça redeploy para as alterações de texto aparecerem no site.
            </p>
        </div>
    )
}
