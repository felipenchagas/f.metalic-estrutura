'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageSquare } from 'lucide-react'
import QuoteForm from './QuoteForm'

export default function QuoteModal() {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 btn-primary shadow-2xl shadow-red-900/40 rounded-full px-5 py-3.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Solicitar Orçamento"
            >
                <MessageSquare size={18} />
                <span className="font-semibold text-sm">Orçamento</span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full" />
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                            onClick={() => setOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 60, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 60, scale: 0.96 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 left-0 right-0 sm:left-auto sm:right-6 z-50 w-full sm:w-[480px] max-h-[90vh] overflow-y-auto"
                        >
                            <div className="bg-[#111827] border border-[#1F2937] rounded-t-2xl sm:rounded-2xl shadow-2xl">
                                <div className="flex items-center justify-between p-5 border-b border-[#1F2937]">
                                    <div>
                                        <h2 className="font-display text-xl font-bold text-white">Solicitar Orçamento</h2>
                                        <p className="text-xs text-muted mt-0.5">Respondemos em até 24 horas</p>
                                    </div>
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="text-muted hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
                                        aria-label="Fechar"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                                <div className="p-5">
                                    <QuoteForm onSuccess={() => setOpen(false)} />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
