import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteModal from '@/components/QuoteModal'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <QuoteModal />
            <FloatingWhatsApp />
        </>
    )
}
