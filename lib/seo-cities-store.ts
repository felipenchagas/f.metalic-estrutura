import { promises as fs } from 'fs'
import path from 'path'

export interface CitySEOData {
    status: 'default' | 'customized'
    customH1?: string
    customMetaTitle?: string
    customMetaDesc?: string
    customHeroText?: string
    customText1?: string
    customText2?: string
    customQuote?: string
    isManual?: boolean
    neighborhoods: { slug: string; name: string }[]
    lastUpdated?: string
}

export type SeoCitiesStore = Record<string, CitySEOData>

const DATA_FILE = path.join(process.cwd(), 'data', 'seo-cities.json')

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

export async function getSeoCities(): Promise<SeoCitiesStore> {
    await ensureFile()
    const raw = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(raw)
}

export async function getCitySeo(slug: string): Promise<CitySEOData | null> {
    const data = await getSeoCities()
    return data[slug] || null
}

export async function updateCitySeo(slug: string, updates: Partial<CitySEOData>): Promise<CitySEOData> {
    await ensureFile()
    const store = await getSeoCities()

    const existing = store[slug] || {
        status: 'default',
        neighborhoods: []
    }

    store[slug] = {
        ...existing,
        ...updates,
        status: updates.neighborhoods?.length || updates.customH1 || updates.customMetaDesc ? 'customized' : existing.status,
        lastUpdated: new Date().toISOString()
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(store, null, 2), 'utf-8')
    return store[slug]
}
