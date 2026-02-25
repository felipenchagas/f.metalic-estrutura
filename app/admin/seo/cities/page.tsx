import { getSeoCities } from '@/lib/seo-cities-store'
import { citiesPR } from '@/lib/cities'
import CitiesGrid from '@/components/admin/CitiesGrid'

export default async function CitiesManagerPage() {
    const seoStore = await getSeoCities()

    // Sort cities: Curitiba always first, then customized, then alphabetical
    const sortedCities = [...citiesPR].sort((a, b) => {
        if (a.slug === 'curitiba') return -1
        if (b.slug === 'curitiba') return 1

        const aStatus = seoStore[a.slug]?.status === 'customized' ? 1 : 0
        const bStatus = seoStore[b.slug]?.status === 'customized' ? 1 : 0

        if (aStatus > bStatus) return -1
        if (aStatus < bStatus) return 1

        return a.name.localeCompare(b.name)
    })

    return (
        <div className="p-8 max-w-[1400px] mx-auto bg-[#0a0a0a] min-h-screen text-white">
            <CitiesGrid cities={sortedCities} seoStore={seoStore} />
        </div>
    )
}
