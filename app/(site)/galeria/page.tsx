import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import GalleryClient from '@/components/GalleryClient'

export const metadata: Metadata = {
    title: 'Galeria de Projetos',
    description: 'Galeria de fotos dos projetos de estrutura metálica, coberturas, mezaninos e escadas realizados pela Metalic Estrutura em todo o Brasil.',
    alternates: { canonical: '/galeria' },
}

const galleryItems = [
    { src: '/images/estrutura/estrutura-metalica.jpg', alt: 'Estrutura metálica', category: 'Estrutura Metálica', href: '/servicos/estrutura-metalica' },
    { src: '/images/estrutura/construir-estrutura-metalica.jpg', alt: 'Construção estrutura metálica', category: 'Estrutura Metálica', href: '/servicos/estrutura-metalica' },
    { src: '/images/estrutura/mezanino-residencial.jpg', alt: 'Mezanino residencial', category: 'Mezanino Metálico', href: '/servicos/mezanino-metalico' },
    { src: '/images/estrutura/cobertura-metalica.jpg', alt: 'Cobertura metálica', category: 'Cobertura Metálica', href: '/servicos/cobertura-metalica' },
    { src: '/images/estrutura/escada-metalica.jpg', alt: 'Escada metálica', category: 'Escadas Metálicas', href: '/servicos/escadas-metalicas' },
    { src: '/images/estrutura/estrutura-metalica-curitiba.jpg', alt: 'Estrutura metálica Curitiba', category: 'Estrutura Metálica', href: '/servicos/estrutura-metalica' },
    { src: '/images/inicial/cobertura-metalica-em-curitiba.jpg', alt: 'Cobertura em Curitiba', category: 'Cobertura Metálica', href: '/servicos/cobertura-metalica' },
    { src: '/images/inicial/cobertura-metalica.jpg', alt: 'Cobertura metálica industrial', category: 'Cobertura Metálica', href: '/servicos/cobertura-metalica' },
    { src: '/images/inicial/cobertura-metalica-pr.jpg', alt: 'Cobertura metálica PR', category: 'Cobertura Metálica', href: '/servicos/cobertura-metalica' },
    { src: '/images/inicial/hotel-fazenda-estrutura-metalica.jpg', alt: 'Hotel fazenda piscina coberta', category: 'Cobertura Metálica', href: '/servicos/cobertura-metalica' },
    { src: '/images/inicial/casa-estrutura-metalica.jpg', alt: 'Casa estrutura metálica', category: 'Estrutura Metálica', href: '/servicos/estrutura-metalica' },
    { src: '/images/inicial/fabricacao-estrutura-metalica.jpg', alt: 'Fabricação de estrutura metálica', category: 'Estrutura Metálica', href: '/servicos/estrutura-metalica' },
    { src: '/images/inicial/mezanino-metalico.jpg', alt: 'Mezanino metálico', category: 'Mezanino Metálico', href: '/servicos/mezanino-metalico' },
    { src: '/images/inicial/mezanino-metalico-curitiba.jpg', alt: 'Mezanino Curitiba', category: 'Mezanino Metálico', href: '/servicos/mezanino-metalico' },
    { src: '/images/inicial/escada-metalica.jpg', alt: 'Escada metálica projeto', category: 'Escadas Metálicas', href: '/servicos/escadas-metalicas' },
    { src: '/images/inicial/estrutura-para-ponte-g.jpg', alt: 'Estrutura para ponte', category: 'Estrutura Metálica', href: '/servicos/estrutura-metalica' },
]

export default function GalleryPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-[#111827] py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="container-max relative">
                    <nav className="flex items-center gap-2 text-xs text-white/40 mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Início</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary">Galeria</span>
                    </nav>
                    <div className="w-10 h-0.5 bg-primary mb-4" />
                    <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-none uppercase mb-4">
                        GALERIA DE <span className="text-primary">PROJETOS</span>
                    </h1>
                    <p className="text-muted max-w-xl">
                        Mais de 2.000 obras realizadas em todo o Brasil. Conheça alguns de nossos projetos de estrutura metálica.
                    </p>
                </div>
            </section>

            <GalleryClient items={galleryItems} />
        </>
    )
}
