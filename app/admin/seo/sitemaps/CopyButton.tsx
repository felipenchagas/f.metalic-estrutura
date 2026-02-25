'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyButton({ url }: { url: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            // Constrói a URL absoluta baseada na origem atual
            const fullUrl = `${window.location.origin}${url}`
            await navigator.clipboard.writeText(fullUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Falha ao copiar:', err)
        }
    }

    return (
        <button
            onClick={handleCopy}
            className="text-white/30 hover:text-white inline-flex p-2 rounded-sm hover:bg-white/5 transition-colors"
            title="Copiar URL"
        >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
        </button>
    )
}
