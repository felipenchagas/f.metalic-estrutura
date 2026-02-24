'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '@/lib/services'
import { siteConfig } from '@/lib/seo'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setServicesOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    return (
        <>
            {/* Top Bar */}
            <div className="hidden md:block bg-[#0d0d0d] border-b border-[#1a1a1a]">
                <div className="container-max flex items-center justify-between py-2">
                    <div className="flex items-center gap-6 text-[11px] text-muted">
                        <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone size={12} className="text-primary" />
                            {siteConfig.phone}
                        </a>
                        <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail size={12} className="text-primary" />
                            {siteConfig.email}
                        </a>
                    </div>
                    <span className="text-[11px] text-muted">CIC, Curitiba — Paraná | Atendemos todo o Brasil</span>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#1a1a1a]'
                        : 'bg-[#0A0A0A]'
                    }`}
            >
                <div className="container-max">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center flex-shrink-0 hover-lift">
                            <Image
                                src="/images/logo.png"
                                alt="Metalic Estrutura"
                                width={160}
                                height={50}
                                className="h-10 md:h-12 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            <NavLink href="/">Início</NavLink>
                            <NavLink href="/#sobre">Empresa</NavLink>

                            {/* Services Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setServicesOpen(v => !v)}
                                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors rounded-md hover:bg-white/5"
                                    aria-expanded={servicesOpen}
                                >
                                    Serviços
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {servicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-2 w-64 glass-dark rounded-lg py-2 shadow-2xl border border-white/10"
                                        >
                                            {services.map((s) => (
                                                <Link
                                                    key={s.slug}
                                                    href={`/servicos/${s.slug}`}
                                                    onClick={() => setServicesOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors group"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    {s.title}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <NavLink href="/galeria">Galeria</NavLink>
                            <NavLink href="/contato">Contato</NavLink>
                        </div>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center gap-3">
                            <a
                                href={`tel:${siteConfig.phoneClean}`}
                                className="hidden md:flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                            >
                                <Phone size={14} className="text-primary" />
                                <span className="hidden xl:inline">{siteConfig.phone}</span>
                            </a>
                            <Link
                                href="/contato"
                                className="btn-primary text-xs px-4 py-2.5 hidden sm:flex"
                            >
                                Solicitar Orçamento
                            </Link>
                            <button
                                onClick={() => setIsOpen(v => !v)}
                                className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
                                aria-label="Menu"
                                aria-expanded={isOpen}
                            >
                                {isOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.25 }}
                        className="fixed inset-0 z-40 lg:hidden"
                        style={{ top: 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />
                        <div className="absolute right-0 top-0 h-full w-80 bg-[#0d0d0d] border-l border-[#1a1a1a] overflow-y-auto">
                            <div className="flex items-center justify-between p-5 border-b border-[#1a1a1a]">
                                <Image src="/images/logo.png" alt="Metalic" width={120} height={40} className="h-8 w-auto" />
                                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>
                            <nav className="p-4 flex flex-col gap-1">
                                <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Início</MobileNavLink>
                                <MobileNavLink href="/#sobre" onClick={() => setIsOpen(false)}>Empresa</MobileNavLink>

                                <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-widest text-muted mt-2">Serviços</div>
                                {services.map(s => (
                                    <MobileNavLink key={s.slug} href={`/servicos/${s.slug}`} onClick={() => setIsOpen(false)} indent>
                                        {s.title}
                                    </MobileNavLink>
                                ))}

                                <MobileNavLink href="/galeria" onClick={() => setIsOpen(false)}>Galeria</MobileNavLink>
                                <MobileNavLink href="/contato" onClick={() => setIsOpen(false)}>Contato</MobileNavLink>

                                <div className="mt-4 pt-4 border-t border-[#1a1a1a] flex flex-col gap-3">
                                    <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors px-3">
                                        <Phone size={14} className="text-primary" />
                                        {siteConfig.phone}
                                    </a>
                                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors px-3">
                                        <Mail size={14} className="text-primary" />
                                        {siteConfig.email}
                                    </a>
                                    <Link href="/contato" onClick={() => setIsOpen(false)} className="btn-primary justify-center mt-2 mx-3">
                                        Solicitar Orçamento
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="px-4 py-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors rounded-md hover:bg-white/5 animated-border"
        >
            {children}
        </Link>
    )
}

function MobileNavLink({
    href,
    children,
    onClick,
    indent,
}: {
    href: string
    children: React.ReactNode
    onClick: () => void
    indent?: boolean
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`block px-3 py-2.5 text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-md transition-colors ${indent ? 'pl-6 text-xs' : ''}`}
        >
            {children}
        </Link>
    )
}
