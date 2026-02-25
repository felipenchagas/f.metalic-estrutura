'use client'

import Sidebar from '@/components/admin/Sidebar'
import { usePathname } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isLoginPage = pathname === '/admin/login'

    if (isLoginPage) {
        return <div className="min-h-screen w-full bg-[#0A0A0A] m-0 p-0 overflow-hidden">{children}</div>
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A] flex">
            <Sidebar />
            <main className="flex-1 ml-[220px] min-h-screen">
                {/* Topbar */}
                <header className="h-12 border-b border-white/5 flex items-center px-6 gap-3">
                    <div className="flex items-center gap-1.5 text-[10px] text-white/20 uppercase tracking-widest">
                        <span>Metalic Estrutura</span>
                        <span>/</span>
                        <span className="text-white/40">Admin</span>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span className="text-[10px] text-white/20">Online</span>
                    </div>
                </header>
                <div className="p-6">{children}</div>
            </main>
        </div>
    )
}
