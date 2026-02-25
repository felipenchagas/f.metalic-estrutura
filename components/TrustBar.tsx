'use client'

import { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'

const stats = [
    { value: 2000, label: 'Obras Realizadas', suffix: '+' },
    { value: 15, label: 'Anos de Experiência', suffix: '+' },
    { value: 27, label: 'Estados Atendidos', suffix: '' },
    { value: 100, label: 'Satisfação Garantida', suffix: '%' },
]

function AnimatedNumber({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (!active || !ref.current) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            ref.current.textContent = value.toLocaleString('pt-BR') + suffix
            return
        }
        const duration = 1600
        const start = performance.now()
        const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 4)
            if (ref.current) ref.current.textContent = Math.round(eased * value).toLocaleString('pt-BR') + suffix
            if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
    }, [active, value, suffix])

    return <span ref={ref}>0{suffix}</span>
}

export default function TrustBar() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <section ref={ref} className="relative overflow-hidden border-y border-white/5"
            style={{ background: 'linear-gradient(135deg, #0d0d0d 0%, #141414 50%, #0d0d0d 100%)' }}>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C0392B] to-transparent opacity-60" />

            <div className="container-max">
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 px-6 py-8 sm:py-10 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-[#C0392B]/0 group-hover:bg-[#C0392B]/4 transition-colors duration-500" />
                            <div className="font-display font-black text-4xl sm:text-5xl text-white leading-none tabular-nums">
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} active={isInView} />
                            </div>
                            <div className="w-8 h-[2px] bg-[#C0392B] my-1 group-hover:w-12 transition-all duration-300" />
                            <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest text-center font-semibold">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C0392B]/40 to-transparent" />
        </section>
    )
}
