import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ShieldAlert, ArrowRight } from 'lucide-react'

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ error?: string }>
}) {
    const { error } = await searchParams

    async function login(formData: FormData) {
        'use server'
        const username = formData.get('username') as string
        const password = formData.get('password') as string
        const adminPassword = process.env.ADMIN_PASSWORD || 'cassiano8080'

        // Validação estrita exigindo User 'admin' e Password 'cassiano8080'
        if (username !== 'admin' || (password !== 'cassiano8080' && password !== adminPassword)) {
            redirect('/admin/login?error=1')
        }

        const cookieStore = await cookies()
        cookieStore.set('admin_auth', adminPassword, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
        })
        redirect('/admin')
    }

    return (
        <div className="absolute inset-0 w-full h-full bg-[#050505] flex flex-col items-center justify-center p-4 overflow-hidden selection:bg-red-500/30">
            {/* Background fixo que não quebra no refresh */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a0505] via-[#050505] to-[#0a0202]" />
            <div className="absolute inset-0 z-0 bg-[url('/images/noise.png')] opacity-[0.02] mix-blend-overlay" />

            {/* Main Wrapper */}
            <div className="relative z-10 w-full max-w-md">

                {/* Header Logo */}
                <div className="flex flex-col items-center mb-10 text-center animate-fade-in-up">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-900/20 mb-6 border border-white/5 ring-1 ring-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="relative z-10 drop-shadow-md">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-display font-black tracking-tight text-white/90 drop-shadow-sm">Metalic <span className="text-white">Admin</span></h1>
                    <p className="text-sm text-neutral-500 font-medium mt-2 max-w-[280px]">Gestão unificada de Leads, Obras e Motores de Busca Avançados.</p>
                </div>

                {/* Login Card (Glassmorphism) */}
                <div className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 shadow-2xl ring-1 ring-white/[0.02]">
                    <form action={login} className="space-y-6">

                        {/* Error State */}
                        {error && (
                            <div className="animate-fade-in-down flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400">
                                <ShieldAlert size={18} className="shrink-0 mt-0.5" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold">Acesso Negado</span>
                                    <span className="text-xs text-red-400/80 mt-0.5">As credenciais inseridas não conferem com o sistema administrativo.</span>
                                </div>
                            </div>
                        )}

                        {/* Input Field Group */}
                        <div className="space-y-4">
                            {/* Input Username */}
                            <div className="space-y-1.5 focus-within:text-white text-neutral-400 transition-colors">
                                <label htmlFor="username" className="block text-xs font-semibold tracking-wide uppercase ml-1">
                                    Usuário
                                </label>
                                <div className="relative group">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        required
                                        className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-neutral-600 focus-visible:outline-none focus:border-red-500/50 focus:ring-4 focus:ring-red-500/10 transition-all duration-300"
                                        placeholder="Digite o usuário administrador..."
                                    />
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 group-focus-within:from-red-500/5 group-focus-within:via-red-500/5 group-focus-within:to-red-500/5 transition-all duration-500 rounded-xl" />
                                </div>
                            </div>

                            {/* Input Password */}
                            <div className="space-y-1.5 focus-within:text-white text-neutral-400 transition-colors">
                                <label htmlFor="password" className="block text-xs font-semibold tracking-wide uppercase ml-1">
                                    Credencial de Comando
                                </label>
                                <div className="relative group">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-neutral-600 focus-visible:outline-none focus:border-red-500/50 focus:ring-4 focus:ring-red-500/10 transition-all duration-300"
                                        placeholder="Digite sua senha master..."
                                    />
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 group-focus-within:from-red-500/5 group-focus-within:via-red-500/5 group-focus-within:to-red-500/5 transition-all duration-500 rounded-xl" />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="group relative w-full flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white text-black px-4 py-3.5 font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span className="relative z-10 transition-colors group-hover:text-red-600">Autenticar Sessão</span>
                            <ArrowRight size={18} className="relative z-10 transition-all group-hover:translate-x-1 group-hover:text-red-600" />
                            <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </form>
                </div>

                {/* Footer Notes */}
                <div className="mt-8 text-center flex flex-col items-center gap-2">
                    <p className="text-[11px] text-neutral-600 font-medium tracking-wide">
                        SISTEMA PROTEGIDO POR CRIPTOGRAFIA DE PONTA A PONTA
                    </p>
                    <div className="flex gap-1">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-neutral-800" />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
