import { promises as fs } from 'fs'
import path from 'path'

export interface NeighborhoodSEOData {
    status: 'default' | 'customized'
    customH1?: string
    customMetaTitle?: string
    customMetaDesc?: string
    customHeroText?: string
    customText1?: string
    customText2?: string
    customQuote?: string
    isManual?: boolean
    lastUpdated?: string
}

// Record<citySlug, Record<neighborhoodSlug, NeighborhoodSEOData>>
export type SeoNeighborhoodsStore = Record<string, Record<string, NeighborhoodSEOData>>

const DATA_FILE = path.join(process.cwd(), 'data', 'seo-neighborhoods.json')

async function ensureFile() {
    const dir = path.dirname(DATA_FILE)
    await fs.mkdir(dir, { recursive: true })
    try {
        await fs.access(DATA_FILE)
    } catch {
        // Initialize with empty object
        await fs.writeFile(DATA_FILE, '{}', 'utf-8')
    }
}

export async function getSeoNeighborhoods(): Promise<SeoNeighborhoodsStore> {
    await ensureFile()
    const raw = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(raw)
}

export async function getNeighborhoodSeo(citySlug: string, nbSlug: string): Promise<NeighborhoodSEOData | null> {
    const data = await getSeoNeighborhoods()
    return data[citySlug]?.[nbSlug] || null
}

export async function updateNeighborhoodSeo(citySlug: string, nbSlug: string, updates: Partial<NeighborhoodSEOData>): Promise<NeighborhoodSEOData> {
    await ensureFile()
    const store = await getSeoNeighborhoods()

    if (!store[citySlug]) {
        store[citySlug] = {}
    }

    const existing = store[citySlug][nbSlug] || {
        status: 'default'
    }

    store[citySlug][nbSlug] = {
        ...existing,
        ...updates,
        status: updates.customH1 || updates.customMetaDesc ? 'customized' : existing.status,
        lastUpdated: new Date().toISOString()
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(store, null, 2), 'utf-8')
    return store[citySlug][nbSlug]
}
