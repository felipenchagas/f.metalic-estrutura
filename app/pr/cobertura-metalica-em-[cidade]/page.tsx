import { getCityBySlug, citiesPR } from '@/lib/cities'

type Props = { params: Promise<{ cidade: string }> }

export async function generateStaticParams() {
    return citiesPR.map(c => ({ cidade: c.slug }))
}

export default async function CoberturaMetalicaCidadePage({ params }: Props) {
    const { cidade } = await params
    const city = getCityBySlug(cidade)

    return (
        <div style={{ padding: 40, color: 'white', background: '#111' }}>
            <h1>Cidade: {cidade}</h1>
            <p>City found: {city ? city.name : 'NOT FOUND'}</p>
            <p>Total cities: {citiesPR.length}</p>
        </div>
    )
}
