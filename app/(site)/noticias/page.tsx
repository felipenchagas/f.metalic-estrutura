import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Calendar, User } from 'lucide-react'
import { getAllNewsArticles } from '@/lib/news-store'

export const metadata: Metadata = {
    title: 'Notícias e Artigos | Metalic Estrutura',
    description: 'Acompanhe as últimas publicações, dicas técnicas de engenharia e obras de estrutura metálica entregues em todo o Brasil pela equipe da Metalic.',
    alternates: { canonical: '/noticias' },
    openGraph: {
        title: 'Notícias e Obras | Metalic Estrutura',
        description: 'Dicas técnicas, cases de sucesso e novidades no setor de construção industrial e coberturas metálicas.',
        type: 'website'
    }
}

export default async function NoticiasPage() {
    const articles = await getAllNewsArticles()

    return (
        <main className="min-h-screen bg-[#0A0A0A]">
            {/* Minimal Hero */}
            <section className="relative pt-32 pb-16 bg-[#111827] border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
                />
                <div className="container-max relative z-10">
                    <nav className="flex items-center gap-2 text-xs text-white/40 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-white transition-colors">Início</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary">Notícias</span>
                    </nav>

                    <h1 className="font-display font-black text-5xl md:text-6xl text-white uppercase mb-4">
                        Centro de <span className="text-primary">Notícias</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl">
                        Acompanhe nossos últimos projetos, dicas de engenharia e tendências sobre construções e coberturas em aço pesado.
                    </p>
                </div>
            </section>

            {/* Grid de Artigos */}
            <section className="section-padding">
                <div className="container-max">
                    {articles.length === 0 ? (
                        <div className="text-center py-20 border border-white/5 rounded-xl bg-white/[0.02]">
                            <p className="text-white/40">Nenhuma notícia publicada ainda.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article) => (
                                <Link
                                    href={`/noticias/${article.slug}`}
                                    key={article.id}
                                    className="group flex flex-col bg-[#111827] border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/50">
                                        <Image
                                            src={article.heroImage || '/images/slider/cobertura-metalica.jpg'}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {article.isFeatured && (
                                            <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 pb-1.5 rounded-full">
                                                Destaque
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-white/40 mb-4 font-medium uppercase tracking-wider">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={13} className="text-primary" />
                                                {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <User size={13} className="text-primary" />
                                                {article.author}
                                            </span>
                                        </div>

                                        <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h2>

                                        <p className="text-sm text-white/50 mb-6 line-clamp-3 leading-relaxed flex-grow">
                                            {article.excerpt}
                                        </p>

                                        <div className="text-xs font-bold text-primary flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                                            Ler Matéria Completa <ChevronRight size={14} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}
