import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight, ArrowLeft } from 'lucide-react'
import { projects } from '@/lib/projects'
import fs from 'fs'
import path from 'path'
import { SEOInternalLinks } from '@/components/SEOInternalLinks'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const project = projects.find(p => p.slug === resolvedParams.slug)

    if (!project) {
        return {
            title: 'Obra não encontrada | Metalic Estruturas',
        }
    }

    return {
        title: `${project.title} | Construção Metálica`,
        description: project.metaDescription,
        keywords: project.keywords,
        alternates: {
            canonical: `https://metalicestruturas.com.br/obras/${project.slug}`
        },
        openGraph: {
            title: project.title,
            description: project.metaDescription,
            images: [`/images/obras/${project.imagePrefix}-1.jpg`],
        }
    }
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ObraDetalhePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const project = projects.find(p => p.slug === resolvedParams.slug)

    if (!project) return notFound()

    // Encontrar todas as fotos dessa obra lendo o File System no servidor
    const imagesDirectory = path.join(process.cwd(), 'public/images/obras')
    let imageFiles: string[] = []

    try {
        const allFiles = fs.readdirSync(imagesDirectory)
        imageFiles = allFiles.filter(file => file.startsWith(project.imagePrefix + '-') && file.endsWith('.jpg'))

        // Ordenar numericamente
        imageFiles.sort((a, b) => {
            const numA = parseInt(a.replace(project.imagePrefix + '-', '').replace('.jpg', ''))
            const numB = parseInt(b.replace(project.imagePrefix + '-', '').replace('.jpg', ''))
            return numA - numB
        })
    } catch (e) {
        console.error('Error reading images directory', e)
    }

    return (
        <div className="flex flex-col pt-[104px] overflow-hidden">
            {/* Hero Section Específica da Obra */}
            <section className="relative bg-[#111827] py-20 pb-28 md:py-32 border-b border-white/5">
                <div className="absolute inset-0">
                    <Image
                        src={`/images/obras/${project.imagePrefix}-1.jpg`}
                        alt={project.title}
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-[#111827]/60" />
                </div>

                <div className="container-max relative z-10">
                    <nav className="flex items-center gap-2 text-xs md:text-sm text-white/50 mb-8 font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Início</Link>
                        <ChevronRight size={14} className="text-white/30" />
                        <Link href="/obras" className="hover:text-primary transition-colors">Obras</Link>
                        <ChevronRight size={14} className="text-white/30" />
                        <span className="text-primary truncate max-w-[200px] md:max-w-none">{project.shortTitle}</span>
                    </nav>

                    <div className="flex flex-col max-w-4xl">
                        <Link href="/obras" className="inline-flex items-center text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-wider mb-8 group w-fit">
                            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            Voltar para o Portfólio
                        </Link>

                        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] uppercase tracking-tighter mb-6">
                            {project.title}
                        </h1>

                        <h2 className="text-xl md:text-2xl text-primary font-light mb-8 border-l-[3px] border-primary pl-6">
                            {project.heroSubtitle}
                        </h2>
                    </div>
                </div>
            </section>

            {/* Conteúdo Técnico e Fotos */}
            <section className="py-20 bg-dark-eval-0 relative">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Coluna de Texto SEO (Esquerda) */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="prose prose-invert prose-lg max-w-none">
                                {project.content.intro.map((paragraph, idx) => (
                                    <p key={idx} className="text-muted leading-relaxed font-light mb-6">
                                        {paragraph}
                                    </p>
                                ))}

                                <blockquote className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-xl my-10 italic text-white/90 text-xl font-light">
                                    "{project.content.quote}"
                                </blockquote>

                                {project.content.bodyText.map((paragraph, idx) => (
                                    <p key={idx} className="text-muted leading-relaxed font-light mb-6">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Vantagens E-E-A-T */}
                            <div className="bg-[#1f2937]/30 border border-white/5 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-primary rounded-full"></div>
                                    Vantagens da Metalic
                                </h3>
                                <div className="space-y-8">
                                    {project.content.advantages.map((adv, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-bold text-orange-400 mb-2 uppercase tracking-wide text-sm">{adv.title}</h4>
                                            <p className="text-muted text-sm leading-relaxed">{adv.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Coluna Galeria de Fotos (Direita) */}
                        <div className="lg:col-span-7">
                            <div className="sticky top-32">
                                <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
                                    Galeria da <span className="text-primary">Obra</span>
                                    {imageFiles.length > 0 && (
                                        <span className="text-xs font-normal text-muted bg-[#1f2937] px-3 py-1 rounded-full">{imageFiles.length} Fotos Registradas</span>
                                    )}
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {imageFiles.map((filename, idx) => (
                                        <div key={filename} className={`relative bg-[#111827] rounded-xl overflow-hidden shadow-lg border border-white/5 group ${idx === 0 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square'}`}>
                                            <Image
                                                src={`/images/obras/${filename}`}
                                                alt={`${project.title} - Acompanhamento Foto ${idx + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                                sizes={idx === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 30vw"}
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SEOInternalLinks currentContext="project" />
        </div>
    )
}
