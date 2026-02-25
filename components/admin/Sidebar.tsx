'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Inbox, LogOut, Zap, Settings, Map, Briefcase, FileText, Search, FileCode2 } from 'lucide-react'
import AuthButton from './AuthButton'

const menuItems = [
    { label: 'Orçamentos', href: '/admin/orcamentos', icon: Inbox },
    { label: 'Notícias & Blog', href: '/admin/noticias', icon: FileText },
    { label: 'Painel SEO', href: '/admin', icon: LayoutDashboard },
    { label: 'Console de Indexação', href: '/admin/seo/indexing', icon: Zap },
    { label: 'Gestor de Cidades', href: '/admin/seo/cities', icon: Map },
    { label: 'Serviços Atendidos', href: '/admin/seo/services', icon: Briefcase },
    { label: 'Páginas SEO', href: '/admin/seo/pages', icon: FileText },
    { label: 'Integridade SEO', href: '/admin/seo/integrity', icon: Search },
    { label: 'Sitemaps', href: '/admin/seo/sitemaps', icon: FileCode2 },
    { label: 'Configurações', href: '/admin/configuracoes', icon: Settings },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed left-0 top-0 h-screen w-[240px] bg-[#0d0d0d] border-r border-[#1a1a1a] shadow-xl flex flex-col z-50">
            {/* Logo area */}
            <div className="h-16 flex flex-shrink-0 items-center px-6 border-b border-[#1a1a1a] bg-[#111]">
                <div className="flex items-center gap-2">
                    <span className="font-display font-black text-[#C0392B] text-xl tracking-widest flex items-center gap-0.5 uppercase">
                        Metalic <span className="text-[#666] text-[9px] mt-1 ml-1.5 font-sans tracking-wide">SEO CMS</span>
                    </span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 flex-1 space-y-1 overflow-y-auto">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 text-[13px] font-bold transition-all border-l-2 ${isActive
                                ? 'bg-[#1a1a1a] text-white border-[#C0392B]'
                                : 'text-[#666] border-transparent hover:bg-[#111] hover:text-[#999]'
                                }`}
                        >
                            <Icon size={17} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'text-[#C0392B]' : ''} />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom section (Auth) */}
            <div className="p-4 border-t border-[#1a1a1a] bg-[#0a0a0a]">
                <AuthButton />
            </div>
        </aside>
    )
}
