'use client'

import { useEffect, useRef } from 'react'

interface KPICardProps {
    label: string
    value: number | string
    sub?: string
    accent?: boolean
    suffix?: string
}

export default function KPICard({ label, value, sub, accent, suffix = '' }: KPICardProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const numeric = typeof value === 'number'

    useEffect(() => {
        if (!numeric || !ref.current) return
        const target = value as number
        const duration = 1200
        const start = performance.now()

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            if (ref.current) ref.current.textContent = Math.round(eased * target).toString()
            if (progress < 1) requestAnimationFrame(tick)
        }

        // Respect reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            ref.current.textContent = target.toString()
        } else {
            requestAnimationFrame(tick)
        }
    }, [value, numeric])

    return (
        <div className={`relative p-5 border rounded-sm overflow-hidden transition-all duration-200 hover:border-[#C0392B]/60 hover:-translate-y-0.5 ${accent
                ? 'bg-[#C0392B] border-[#C0392B]'
                : 'bg-[#111] border-white/8'
            }`}>
            {/* Decorative corner */}
            <div className={`absolute top-0 right-0 w-12 h-12 border-b border-l ${accent ? 'border-white/20' : 'border-[#C0392B]/20'}`}
                style={{ borderBottomLeftRadius: '2px' }} />

            <p className={`text-[10px] uppercase tracking-widest font-bold mb-2 ${accent ? 'text-white/60' : 'text-white/30'}`}>
                {label}
            </p>
            <div className={`font-display font-black text-4xl leading-none ${accent ? 'text-white' : 'text-white'}`}>
                {numeric ? <span ref={ref}>0</span> : <span>{value}</span>}
                {suffix && <span className={`text-lg ml-0.5 ${accent ? 'text-white/70' : 'text-[#C0392B]'}`}>{suffix}</span>}
            </div>
            {sub && (
                <p className={`text-xs mt-2 ${accent ? 'text-white/50' : 'text-white/30'}`}>{sub}</p>
            )}
        </div>
    )
}
