import { NextResponse } from 'next/server'
import { getSeoCities } from '@/lib/seo-cities-store'
import { getSeoNeighborhoods, updateNeighborhoodSeo } from '@/lib/seo-neighborhoods-store'
import { generateSEOForCity } from '@/lib/seo-generator'
import { getCityBySlug } from '@/lib/cities'

export async function POST(req: Request) {
    try {
        const { citySlug } = await req.json()
        if (!citySlug) {
            return NextResponse.json({ error: 'citySlug is required' }, { status: 400 })
        }

        const city = getCityBySlug(citySlug)
        if (!city) {
            return NextResponse.json({ error: 'City not found' }, { status: 404 })
        }

        const citiesStore = await getSeoCities()
        const cityData = citiesStore[citySlug]

        if (!cityData || !cityData.neighborhoods || cityData.neighborhoods.length === 0) {
            return NextResponse.json({ error: 'No neighborhoods found for this city' }, { status: 400 })
        }

        const neighborhoodsStore = await getSeoNeighborhoods()
        const cityNbStore = neighborhoodsStore[citySlug] || {}
        let generatedCount = 0

        for (const nbObj of cityData.neighborhoods) {
            const slugNb = nbObj.slug
            const nbName = nbObj.name
            const nbData = cityNbStore[slugNb]
            const isManual = nbData?.isManual === true

            if (!isManual) {
                // To randomize the content per neighborhood reliably, we seed it with City Name + Neighborhood Name + random hash
                const seo = generateSEOForCity(city.name, `${nbName} - ${Math.random().toString(36).substring(7)}`)

                // Add the neighborhood name gracefully into the texts
                const customH1 = `${seo.h1} em ${nbName}`
                const customTitle = `${seo.title} em ${nbName}`
                const customDesc = `${seo.description} Executamos projetos em ${nbName}, Curitiba e região.`
                const customHeroText = `${seo.heroSubtitle} Especialistas em coberturas no bairro ${nbName}.`

                // For body text
                const customText1 = seo.customText[0].replace(city.name, `${nbName}, ${city.name}`)
                const customText2 = seo.customText[1]
                const customQuote = seo.customQuote

                await updateNeighborhoodSeo(citySlug, slugNb, {
                    customH1,
                    customMetaTitle: customTitle,
                    customMetaDesc: customDesc,
                    customHeroText,
                    customText1,
                    customText2,
                    customQuote,
                })
                generatedCount++
            }
        }

        return NextResponse.json({ success: true, count: generatedCount })
    } catch (error) {
        console.error('Error generating neighborhood SEO:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
