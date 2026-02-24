'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
    {
        image: '/images/inicial/cobertura-metalica.jpg',
        title: 'Cobertura Metálica',
        status: 'Finalizado',
        progress: 95,
        location: 'Curitiba, PR',
        href: '/servicos/cobertura-metalica',
    },
    {
        image: '/images/inicial/cobertura-metalica-pr.jpg',
        title: 'Cobertura Metálica',
        status: 'Em Andamento',
        progress: 78,
        location: 'Paranaguá, PR',
        href: '/servicos/cobertura-metalica',
    },
    {
        image: '/images/inicial/hotel-fazenda-estrutura-metalica.jpg',
        title: 'Hotel Fazenda Piscina Coberta',
        status: 'Finalizado',
        progress: 100,
        location: 'Interior, PR',
        href: '/servicos/cobertura-metalica',
    },
    {
        image: '/images/inicial/casa-estrutura-metalica.jpg',
        title: 'Casa Estrutura Metálica',
        status: 'Em Andamento',
        progress: 99,
        location: 'Curitiba, PR',
        href: '/servicos/estrutura-metalica',
    },
    {
        image: '/images/inicial/fabricacao-estrutura-metalica.jpg',
        title: 'Fabricação Estrutura Metálica',
        status: 'Finalizado',
        progress: 100,
        location: 'São Paulo, SP',
        href: '/servicos/estrutura-metalica',
    },
]

export default function ProjectsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        return () => { emblaApi.off('select', onSelect) }
    }, [emblaApi])

    // Auto-play
    useEffect(() => {
        if (!emblaApi) return
        const id = setInterval(() => emblaApi.scrollNext(), 3000)
        return () => clearInterval(id)
    }, [emblaApi])

    return (
        <section ref={ref} className="section-padding bg-[#0A0A0A]">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="flex items-end justify-between mb-10"
                >
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                            Acompanhe nossos serviços
                        </span>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-white">
                            PROJETOS em <span className="text-primary">Andamento</span>
                        </h2>
                    </div>
                    <div className="hidden sm:flex gap-2">
                        <button
                            onClick={scrollPrev}
                            className="p-3 rounded-full border border-[#1F2937] text-muted hover:border-primary hover:text-white transition-all"
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="p-3 rounded-full border border-[#1F2937] text-muted hover:border-primary hover:text-white transition-all"
                            aria-label="Próximo"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </motion.div>

                <div className="embla" ref={emblaRef}>
                    <div className="embla__container gap-4" style={{ display: 'flex' }}>
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    <Link
                                        href={project.href}
                                        className="group block bg-[#111827] rounded-xl overflow-hidden border border-[#1F2937] hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />

                                            {/* Status Badge */}
                                            <div className="absolute top-3 right-3">
                                                <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${project.progress === 100
                                                        ? 'bg-green-900/70 text-green-400 border border-green-700/50'
                                                        : 'bg-accent/20 text-accent border border-accent/30'
                                                    } backdrop-blur-sm`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="p-4">
                                            <h3 className="font-display font-bold text-base text-white mb-1 group-hover:text-primary transition-colors truncate">
                                                {project.title}
                                            </h3>
                                            <p className="text-[11px] text-muted mb-3">{project.location}</p>

                                            {/* Progress Bar */}
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 h-1.5 bg-[#1F2937] rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={isInView ? { width: `${project.progress}%` } : { width: 0 }}
                                                        transition={{ duration: 1, delay: 0.5 }}
                                                        className={`h-full rounded-full ${project.progress === 100 ? 'bg-green-500' : 'bg-primary'
                                                            }`}
                                                    />
                                                </div>
                                                <span className="text-[11px] font-bold text-white whitespace-nowrap">
                                                    {project.progress}%
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            className={`transition-all rounded-full ${i === selectedIndex ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-[#1F2937]'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
