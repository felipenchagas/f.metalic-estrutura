import { promises as fs } from 'fs'
import path from 'path'
import { citiesPR } from './lib/cities'
import { generateSEOForCity } from './lib/seo-generator'

const DATA_FILE = path.join(process.cwd(), 'data', 'seo-cities.json')

async function seed() {
    let store: any = {}
    try {
        const raw = await fs.readFile(DATA_FILE, 'utf-8')
        store = JSON.parse(raw)
    } catch { }

    let added = 0
    for (const city of citiesPR) {
        if (!store[city.slug] || store[city.slug].status !== 'customized') {
            const gen = generateSEOForCity(city.name)
            store[city.slug] = {
                status: 'customized',
                customH1: gen.h1,
                customMetaTitle: gen.title,
                customMetaDesc: gen.description,
                customHeroText: gen.heroSubtitle,
                neighborhoods: store[city.slug]?.neighborhoods || [],
                lastUpdated: new Date().toISOString()
            }
            added++
        }
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(store, null, 2), 'utf-8')
    console.log(`Seeded ${added} cities successfully!`)
}

seed()
