import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { services } from '@/lib/services'
import { siteConfig } from '@/lib/seo'

const galleryImages = [
    { src: '/images/rodape/mezaninometalico.jpg', alt: 'Mezanino' },
    { src: '/images/rodape/coberturametalica.jpg', alt: 'Cobertura' },
    { src: '/images/inicial/escada-metalica.jpg', alt: 'Escada' },
    { src: '/images/inicial/mezanino-metalico-curitiba.jpg', alt: 'Mezanino Curitiba' },
    { src: '/images/inicial/fabricacao-estrutura-metalica.jpg', alt: 'Fabricação' },
    { src: '/images/inicial/cobertura-metalica.jpg', alt: 'Cobertura' },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-[#0d0d0d]">
            {/* CTA strip */}
            <div className="border-t border-[#1F2937] border-b">
                <div className="container-max py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-display font-bold text-lg text-white">
                        Pronto para iniciar seu projeto?
                    </p>
                    <Link href="/contato" className="btn-primary text-sm flex-shrink-0">
                        Solicitar Orçamento Grátis
                    </Link>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container-max py-14">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                    {/* Col 1: Brand — 3 cols */}
                    <div className="md:col-span-3">
                        <Image
                            src="/images/logo.png"
                            alt="Metalic Estrutura"
                            width={140}
                            height={44}
                            className="h-10 w-auto mb-5"
                        />
                        <p className="text-sm text-muted leading-relaxed mb-6">
                            Empresa referência em estrutura metálica com mais de 2.000 obras em todo o Brasil.
                        </p>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a
                                    href={`tel:${siteConfig.phoneClean}`}
                                    className="flex items-center gap-2.5 text-sm text-muted hover:text-white transition-colors"
                                >
                                    <Phone size={13} className="text-primary flex-shrink-0" />
                                    {siteConfig.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="flex items-start gap-2.5 text-sm text-muted hover:text-white transition-colors"
                                >
                                    <Mail size={13} className="text-primary flex-shrink-0 mt-0.5" />
                                    <span className="break-all leading-snug">{siteConfig.email}</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5 text-sm text-muted">
                                <MapPin size={13} className="text-primary flex-shrink-0" />
                                CIC — Curitiba, PR
                            </li>
                            <li className="flex items-center gap-2.5 text-sm text-muted">
                                <Clock size={13} className="text-primary flex-shrink-0" />
                                Seg–Sex, 08h às 18h
                            </li>
                        </ul>
                    </div>

                    {/* Col 2: Services — 3 cols */}
                    <div className="md:col-span-3">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-5">
                            Serviços
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {services.map(s => (
                                <li key={s.slug}>
                                    <Link
                                        href={`/servicos/${s.slug}`}
                                        className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-primary opacity-50 group-hover:opacity-100 flex-shrink-0" />
                                        {s.shortTitle}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Quick Links — 2 cols */}
                    <div className="md:col-span-2">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-5">
                            Menu
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {[
                                ['Início', '/'],
                                ['Empresa', '/#sobre'],
                                ['Galeria', '/galeria'],
                                ['Contato', '/contato'],
                                ['Cidades Atendidas', '/pr'],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-primary opacity-50 group-hover:opacity-100 flex-shrink-0" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Gallery — 4 cols */}
                    <div className="md:col-span-4">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-white mb-5">
                            Galeria
                        </h4>
                        <div className="grid grid-cols-3 gap-1.5">
                            {galleryImages.map((img, i) => (
                                <Link
                                    key={i}
                                    href="/galeria"
                                    className="group relative aspect-square rounded-lg overflow-hidden block"
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                                        sizes="80px"
                                    />
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 rounded-lg" />
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/galeria"
                            className="mt-4 text-xs text-muted hover:text-primary transition-colors flex items-center gap-1 group"
                        >
                            <span>Ver todos os projetos</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#1F2937]">
                <div className="container-max py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-muted">
                        © {year} Metalic Estrutura. Todos os direitos reservados.
                    </p>
                    <p className="text-xs text-muted">
                        CIC, Curitiba — Paraná
                    </p>
                </div>
            </div>
        </footer>
    )
}
