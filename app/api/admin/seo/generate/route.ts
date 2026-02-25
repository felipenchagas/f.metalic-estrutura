import { NextResponse } from 'next/server'
import { getSeoCities, updateCitySeo } from '@/lib/seo-cities-store'
import { citiesPR } from '@/lib/cities'
import { generateSEOForCity } from '@/lib/seo-generator'

export async function POST() {
    try {
        const store = await getSeoCities()
        let generatedCount = 0

        for (const city of citiesPR) {
            const currentData = store[city.slug]
            if (!currentData?.isManual) {
                // To randomize the content per city reliably, we seed it with City Name + random hash
                const gen = generateSEOForCity(city.name, Math.random().toString(36).substring(7))

                await updateCitySeo(city.slug, {
                    customH1: gen.h1,
                    customMetaTitle: gen.title,
                    customMetaDesc: gen.description,
                    customHeroText: gen.heroSubtitle,
                    customText1: gen.customText[0].replace(city.name, city.name),
                    customText2: gen.customText[1],
                    customQuote: gen.customQuote,
                })

                generatedCount++
            }
        }

        return NextResponse.json({ success: true, count: generatedCount })
    } catch (error) {
        console.error('API /seo/generate error:', error)
        return NextResponse.json({ error: 'Erro ao gerar SEO automático' }, { status: 500 })
    }
}
