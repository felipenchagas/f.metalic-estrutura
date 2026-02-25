import { promises as fs } from 'fs'
import path from 'path'

export interface SeoPageData {
    id: string
    slug: string
    title: string
    metaDesc: string
    h1: string
    content: string
    createdAt: string
}

const DATA_FILE = path.join(process.cwd(), 'data', 'seo-pages.json')

async function ensureFile() {
    const dir = path.dirname(DATA_FILE)
    await fs.mkdir(dir, { recursive: true })
    try {
        await fs.access(DATA_FILE)
    } catch {
        // Initialize with empty array
        await fs.writeFile(DATA_FILE, '[]', 'utf-8')
    }
}

export async function getSeoPages(): Promise<SeoPageData[]> {
    await ensureFile()
    const raw = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(raw)
}

export async function getSeoPageBySlug(slug: string): Promise<SeoPageData | null> {
    const pages = await getSeoPages()
    return pages.find(p => p.slug === slug) || null
}

export async function saveSeoPage(page: SeoPageData): Promise<SeoPageData> {
    const pages = await getSeoPages()
    const index = pages.findIndex(p => p.id === page.id)

    if (index >= 0) {
        pages[index] = page
    } else {
        pages.push(page)
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(pages, null, 2), 'utf-8')
    return page
}

export async function deleteSeoPage(id: string): Promise<void> {
    const pages = await getSeoPages()
    const filtered = pages.filter(p => p.id !== id)
    await fs.writeFile(DATA_FILE, JSON.stringify(filtered, null, 2), 'utf-8')
}
