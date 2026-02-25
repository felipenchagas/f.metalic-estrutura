import { getCityBySlug } from '@/lib/cities'
import { getCitySeo } from '@/lib/seo-cities-store'
import { getSeoNeighborhoods } from '@/lib/seo-neighborhoods-store'
import NeighborhoodsGrid from '@/components/admin/NeighborhoodsGrid'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function CityNeighborhoodsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const city = getCityBySlug(slug)

    if (!city) return notFound()

    const seoStore = await getCitySeo(slug)
    const neighborhoods = seoStore?.neighborhoods || []

    const allNbs = await getSeoNeighborhoods()
    const cityNbStore = allNbs[slug] || {}

    return (
        <div className="p-8 max-w-[1400px] mx-auto bg-[#0a0a0a] min-h-screen text-white">
            <div className="mb-6">
                <Link href="/admin/seo/cities" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
                    <ChevronLeft size={16} /> Voltar para Cidades
                </Link>
            </div>
            <NeighborhoodsGrid city={city} neighborhoods={neighborhoods} initialStore={cityNbStore} />
        </div>
    )
}
