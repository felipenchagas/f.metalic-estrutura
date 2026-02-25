'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function AuthButton() {
    const router = useRouter()

    const handleLogout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' })
        router.push('/login')
        router.refresh()
    }

    return (
        <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md text-[13px] font-bold text-[#5D6D7E] hover:bg-[#F2F4F4] hover:text-[#34495E] transition-all cursor-pointer"
        >
            <LogOut size={16} />
            Sair do Sistema
        </button>
    )
}
