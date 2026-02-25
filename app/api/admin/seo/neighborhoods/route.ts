import { NextResponse } from 'next/server'
import { updateNeighborhoodSeo } from '@/lib/seo-neighborhoods-store'

export async function POST(req: Request) {
    try {
        const { citySlug, nbSlug, updates } = await req.json()

        if (!citySlug || !nbSlug || !updates) {
            return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
        }

        const updatedData = await updateNeighborhoodSeo(citySlug, nbSlug, updates)

        return NextResponse.json({ success: true, data: updatedData })
    } catch (error) {
        console.error('Error updating neighborhood SEO:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
