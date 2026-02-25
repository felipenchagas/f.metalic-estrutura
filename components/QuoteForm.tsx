'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle, Loader2 } from 'lucide-react'

interface FormData {
    nome: string
    email: string
    ddd: string
    telefone: string
    cidade: string
    estado: string
    descricao: string
    honeypot?: string
    form_loaded_at?: string
}

interface QuoteFormProps {
    onSuccess?: () => void
}

export default function QuoteForm({ onSuccess }: QuoteFormProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        setStatus('loading')
        const formData = new FormData()
        Object.entries(data).forEach(([k, v]) => v && formData.append(k, v))
        formData.set('form_loaded_at', Date.now().toString())

        try {
            await fetch('/api/quote', {
                method: 'POST',
                body: formData,
            })
            setStatus('success')
            reset()
            setTimeout(() => { onSuccess?.(); setStatus('idle') }, 3000)
        } catch {
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle size={48} className="text-green-400" />
                <div>
                    <h3 className="font-display text-xl font-bold text-white">Orçamento Enviado!</h3>
                    <p className="text-muted text-sm mt-1">Respondemos em até 24 horas úteis.</p>
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
            {/* Honeypot */}
            <input type="text" {...register('honeypot')} style={{ display: 'none' }} tabIndex={-1} />

            <div className="grid grid-cols-1 gap-4">
                <div>
                    <label htmlFor="nome" className="form-label">Nome Completo *</label>
                    <input
                        id="nome"
                        autoComplete="name"
                        className={`form-input ${errors.nome ? 'border-red-500' : ''}`}
                        placeholder="Ex: João da Silva"
                        {...register('nome', { required: true, pattern: /^[A-Za-zÀ-ÿ\s]+$/ })}
                    />
                    {errors.nome && <p className="text-red-400 text-xs mt-1">Nome inválido</p>}
                </div>

                <div>
                    <label htmlFor="email" className="form-label">E-mail *</label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        spellCheck={false}
                        className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="seu@email.com"
                        {...register('email', { required: true })}
                    />
                </div>

                <div>
                    <label htmlFor="ddd" className="form-label">Telefone *</label>
                    <div className="flex gap-2">
                        <input
                            id="ddd"
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel-area-code"
                            className={`form-input w-20 ${errors.ddd ? 'border-red-500' : ''}`}
                            placeholder="DDD"
                            maxLength={2}
                            {...register('ddd', { required: true, pattern: /\d{2}/ })}
                        />
                        <input
                            id="telefone"
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel-local"
                            className={`form-input flex-1 ${errors.telefone ? 'border-red-500' : ''}`}
                            placeholder="Ex: 99999-9999"
                            maxLength={9}
                            {...register('telefone', { required: true })}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                        <label htmlFor="cidade" className="form-label">Cidade *</label>
                        <input
                            id="cidade"
                            autoComplete="address-level2"
                            className={`form-input ${errors.cidade ? 'border-red-500' : ''}`}
                            placeholder="Sua cidade"
                            {...register('cidade', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="estado" className="form-label">Estado *</label>
                        <input
                            id="estado"
                            autoComplete="address-level1"
                            className={`form-input ${errors.estado ? 'border-red-500' : ''}`}
                            placeholder="UF"
                            maxLength={2}
                            {...register('estado', { required: true, pattern: /[A-Za-z]{2}/ })}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="descricao" className="form-label">Descrição do Projeto *</label>
                    <textarea
                        id="descricao"
                        autoComplete="off"
                        className={`form-input resize-none h-24 ${errors.descricao ? 'border-red-500' : ''}`}
                        placeholder="Descreva a estrutura metálica que deseja orçar…"
                        {...register('descricao', { required: true })}
                    />
                </div>
            </div>

            {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Erro ao enviar. Tente novamente ou ligue para nós.</p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary justify-center w-full"
            >
                {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : null}
                {status === 'loading' ? 'Enviando...' : 'Enviar Solicitação'}
            </button>

            <p className="text-xs text-muted text-center">
                Seus dados são confidenciais e protegidos.
            </p>
        </form>
    )
}
