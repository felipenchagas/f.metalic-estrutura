'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const WHATSAPP_NUMBER = '5541996368387'
const MESSAGE = encodeURIComponent('Olá! Vim pelo site e gostaria de solicitar um orçamento de estrutura metálica.')

export default function FloatingWhatsApp() {
    const [visible, setVisible] = useState(false)
    const [dismissed, setDismissed] = useState(false)
    const pathname = usePathname()

    // Show after 3s scroll or delay
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 3000)
        return () => clearTimeout(timer)
    }, [])

    if (dismissed || pathname?.startsWith('/admin')) return null

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2"
                >
                    {/* Tooltip */}
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative bg-white text-gray-900 text-xs font-semibold px-3 py-2 rounded shadow-lg max-w-[180px] text-center leading-tight"
                        >
                            Solicite um orçamento agora!
                            {/* Arrow */}
                            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
                            {/* Dismiss */}
                            <button
                                onClick={() => setDismissed(true)}
                                aria-label="Fechar"
                                className="absolute -top-2 -left-2 w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                            >
                                <X size={8} className="text-white" />
                            </button>
                        </motion.div>
                    </AnimatePresence>

                    {/* WhatsApp button */}
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Falar no WhatsApp"
                        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20BD5C] rounded-full flex items-center justify-center shadow-2xl transition-colors duration-200 cursor-pointer"
                    >
                        {/* Pulse rings */}
                        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
                        <span className="absolute inset-1 rounded-full bg-[#25D366] animate-ping opacity-20" style={{ animationDelay: '0.3s' }} />
                        <MessageCircle size={26} fill="white" className="text-white relative z-10" />
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
