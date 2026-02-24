'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useCounterAnimation } from 'framer-motion'

const stats = [
    { value: 2000, suffix: '+', label: 'Obras Realizadas' },
    { value: 15, suffix: '+', label: 'Anos de Experiência' },
    { value: 10, suffix: '+', label: 'Estados Atendidos' },
    { value: 100, suffix: '%', label: 'Comprometidos' },
]

function StatItem({ value, suffix, label, index }: {
    value: number; suffix: string; label: string; index: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center gap-1 text-center"
        >
            <div className="font-display font-black text-4xl md:text-5xl text-white flex items-baseline gap-0.5">
                <CountUp value={value} active={isInView} />
                <span className="text-primary">{suffix}</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">{label}</p>
        </motion.div>
    )
}

function CountUp({ value, active }: { value: number; active: boolean }) {
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (!active || !ref.current) return
        const duration = 1800
        const startTime = performance.now()
        const update = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            if (ref.current) ref.current.textContent = Math.round(eased * value).toString()
            if (progress < 1) requestAnimationFrame(update)
        }
        requestAnimationFrame(update)
    }, [active, value])

    return <span ref={ref}>0</span>
}

export default function StatsBar() {
    return (
        <section className="bg-[#111827] border-y border-[#1F2937] py-10">
            <div className="container-max">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[#1F2937]">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex items-center justify-center">
                            <StatItem {...stat} index={i} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
