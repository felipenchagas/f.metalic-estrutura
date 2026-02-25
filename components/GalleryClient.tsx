'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

interface GalleryItem {
    src: string
    alt: string
    category: string
    href: string
}

const categories = ['Todos', 'Estrutura Metálica', 'Cobertura Metálica', 'Mezanino Metálico', 'Escadas Metálicas']

export default function GalleryClient({ items }: { items: GalleryItem[] }) {
    const [activeCategory, setActiveCategory] = useState('Todos')
    const [lightbox, setLightbox] = useState<number | null>(null)

    const filtered = activeCategory === 'Todos'
        ? items
        : items.filter(i => i.category === activeCategory)

    const prev = () => setLightbox(l => l !== null ? (l - 1 + filtered.length) % filtered.length : null)
    const next = () => setLightbox(l => l !== null ? (l + 1) % filtered.length : null)

    return (
        <section className="section-padding bg-[#0A0A0A]">
            <div className="container-max">
                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-200 ${activeCategory === cat
                                ? 'bg-primary border-primary text-white'
                                : 'border-[#1F2937] text-muted hover:border-primary/50 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                >
                    <AnimatePresence>
                        {filtered.map((item, i) => (
                            <motion.div
                                key={item.src}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.25 }}
                                className="group relative cursor-pointer aspect-square overflow-hidden rounded-xl img-overlay border border-[#1F2937] hover:border-primary/50 transition-colors"
                                onClick={() => setLightbox(i)}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 text-center">
                                    <p className="text-white font-semibold text-sm">{item.alt}</p>
                                    <span className="text-[10px] text-primary mt-1 font-medium uppercase tracking-wider">{item.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted mb-4 text-sm">Gostou do que viu? Solicite um orçamento agora.</p>
                    <Link href="/contato" className="btn-primary">
                        Solicitar Orçamento <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <button
                            onClick={() => setLightbox(null)}
                            aria-label="Fechar galeria"
                            className="absolute top-4 right-4 text-white/60 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <button
                            onClick={e => { e.stopPropagation(); prev() }}
                            aria-label="Imagem anterior"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <ChevronLeft size={22} />
                        </button>
                        <button
                            onClick={e => { e.stopPropagation(); next() }}
                            aria-label="Próxima imagem"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <ChevronRight size={22} />
                        </button>

                        <motion.div
                            key={lightbox}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative max-w-4xl max-h-[85vh] w-full aspect-[4/3] rounded-xl overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <Image
                                src={filtered[lightbox].src}
                                alt={filtered[lightbox].alt}
                                fill
                                className="object-contain"
                                quality={95}
                                sizes="90vw"
                            />
                        </motion.div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                            <p className="text-white font-medium text-sm">{filtered[lightbox].alt}</p>
                            <p className="text-primary text-xs mt-1">{lightbox + 1} / {filtered.length}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
