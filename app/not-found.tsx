import Link from 'next/link'
import { AlertTriangle, Home, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export const metadata = {
    title: 'Página Não Encontrada | Metalic Estrutura',
    description: 'A página que você está procurando não existe ou foi removida.',
}

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#0A0A0A] text-center px-4 py-20">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20">
                <AlertTriangle size={40} className="text-primary" />
            </div>
            <h1 className="font-display font-black text-6xl text-white mb-4">404</h1>
            <h2 className="text-2xl text-white font-bold mb-4">Página Não Encontrada</h2>
            <p className="text-muted max-w-md mx-auto mb-8 leading-relaxed">
                Desculpe, a página que você está procurando não existe ou foi movida.
                Mas não se preocupe, nossa equipe de engenharia está à disposição para discutir sua <strong>Estrutura Metálica</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/" className="btn-primary flex items-center justify-center gap-2">
                    <Home size={18} /> Voltar ao Início
                </Link>
                <a href={`tel:${siteConfig.phoneClean}`} className="btn-outline flex items-center justify-center gap-2">
                    <Phone size={18} /> Falar com Especialista
                </a>
            </div>
        </div>
    )
}
