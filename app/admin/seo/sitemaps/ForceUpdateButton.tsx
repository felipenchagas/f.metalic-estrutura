'use client'

import { useState } from 'react'
import { RefreshCw, Check } from 'lucide-react'

export default function ForceUpdateButton({ revalidateAction }: { revalidateAction: () => Promise<void> }) {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    async function handleUpdate() {
        setLoading(true)
        try {
            await revalidateAction()
            setSuccess(true)
            setTimeout(() => setSuccess(false), 3000)
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <button
            onClick={handleUpdate}
            disabled={loading}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#C0392B] hover:bg-[#E74C3C] disabled:opacity-50 text-white text-sm font-bold uppercase tracking-widest transition-colors rounded-sm"
        >
            {loading ? (
                <RefreshCw size={16} className="animate-spin" />
            ) : success ? (
                <Check size={16} />
            ) : (
                <RefreshCw size={16} />
            )}
            {loading ? 'Atualizando Cache...' : success ? 'Sitemaps Atualizados!' : 'Forçar Atualização'}
        </button>
    )
}
