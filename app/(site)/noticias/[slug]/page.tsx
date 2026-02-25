import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Calendar, User, ArrowLeft, Clock } from 'lucide-react'
import { getAllNewsArticles, getNewsArticleBySlug } from '@/lib/news-store'
import { siteConfig } from '@/lib/seo'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const articles = await getAllNewsArticles()
    return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const article = await getNewsArticleBySlug(slug)

    if (!article) return {}

    return {
        title: article.seoTitle || `${article.title} | Metalic Estrutura`,
        description: article.seoDescription || article.excerpt,
        authors: [{ name: article.author }],
        alternates: {
            canonical: `${siteConfig.url}/noticias/${article.slug}`,
            languages: {
                'pt-BR': `${siteConfig.url}/noticias/${article.slug}`
            }
        },
        openGraph: {
            title: article.seoTitle || article.title,
            description: article.seoDescription || article.excerpt,
            url: `${siteConfig.url}/noticias/${article.slug}`,
            type: 'article',
            publishedTime: article.publishedAt,
            modifiedTime: article.updatedAt,
            authors: [article.author],
            tags: article.tags,
            images: [
                {
                    url: article.heroImage || '/images/logo.png',
                    alt: article.title,
                    width: 1200,
                    height: 630, // Proporção Exata do Google Top Stories
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.excerpt,
            images: [article.heroImage || '/images/logo.png'],
        }
    }
}

export default async function NewsArticlePage({ params }: Props) {
    const { slug } = await params
    const article = await getNewsArticleBySlug(slug)

    if (!article) return notFound()

    // 🏆 A Joia da Coroa: O Schema que Libera os Cards de Carousel do Google Discover
    const newsArticleSchema = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteConfig.url}/noticias/${article.slug}`
        },
        headline: article.title,
        description: article.excerpt,
        image: [
            `${siteConfig.url}${article.heroImage || '/images/logo.png'}`
        ],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        author: {
            '@type': 'Organization',
            name: article.author,
            url: siteConfig.url
        },
        publisher: {
            '@type': 'Organization',
            name: 'Metalic Estrutura',
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/images/logo.png`
            }
        }
    }

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: siteConfig.url },
            { '@type': 'ListItem', position: 2, name: 'Notícias', item: `${siteConfig.url}/noticias` },
            { '@type': 'ListItem', position: 3, name: article.title, item: `${siteConfig.url}/noticias/${article.slug}` }
        ]
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <main className="min-h-screen bg-[#0A0A0A]">
                {/* Header/Hero do Artigo */}
                <article>
                    <header className="relative pt-32 pb-24 bg-[#111827] border-b border-white/5 overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02]"
                            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
                        />
                        <div className="container-max relative z-10 max-w-4xl mx-auto">
                            <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
                                <Link href="/" className="hover:text-white transition-colors">Início</Link>
                                <ChevronRight size={12} />
                                <Link href="/noticias" className="hover:text-white transition-colors">Notícias</Link>
                                <ChevronRight size={12} />
                                <span className="text-primary truncate max-w-[200px]">{article.title}</span>
                            </nav>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {article.tags.map(tag => (
                                    <span key={tag} className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider px-3 py-1 pb-1.5 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight uppercase mb-6">
                                {article.title}
                            </h1>

                            <p className="text-xl text-white/60 font-medium mb-8 leading-relaxed">
                                {article.excerpt}
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-white/40 border-t border-white/10 pt-6 mt-8">
                                <div className="flex items-center gap-2 font-medium">
                                    <User size={16} className="text-primary" />
                                    <span className="text-white/80">{article.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-primary" />
                                    Publicado em {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
                                </div>
                                {article.updatedAt !== article.publishedAt && (
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-primary" />
                                        Atualizado há pouco
                                    </div>
                                )}
                            </div>
                        </div>
                    </header>

                    {/* Imagem de Destaque da Notícia */}
                    <div className="container-max max-w-5xl mx-auto -mt-12 relative z-20 px-4">
                        <div className="relative aspect-[21/9] w-full bg-[#1F2937] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src={article.heroImage || '/images/slider/cobertura-metalica.jpg'}
                                alt={article.title}
                                fill
                                priority
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                    </div>

                    {/* Corpo da Notícia (Markdown Simulado / Editor Tipográfico) */}
                    <div className="container-max max-w-3xl mx-auto py-16 px-4">
                        {/* Como utilizamos JSON nativamente sem Remark/MDX, faremos pre-wrap para quebra de linhas simplificadas */}
                        <div className="prose prose-invert prose-lg prose-p:text-white/70 prose-headings:font-display prose-headings:uppercase prose-a:text-primary max-w-none">
                            {article.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="mb-6 leading-relaxed text-[17px] font-light tracking-wide">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* CTA de Rodapé do Artigo */}
                        <div className="mt-16 pt-10 border-t border-white/10 text-center">
                            <h3 className="font-display font-bold text-2xl text-white uppercase mb-4">
                                Precisa de auxílio no seu projeto?
                            </h3>
                            <p className="text-white/50 mb-8 max-w-lg mx-auto">
                                A Engenharia da Metalic tem mais de 2.000 obras no portfólio. Transforme sua necessidade industrial em realidade.
                            </p>
                            <Link href="/contato" className="btn-primary inline-flex">
                                Solicite Orçamento Express
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}
