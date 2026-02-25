import { promises as fs } from 'fs'
import path from 'path'

const listFile = path.join(process.cwd(), 'PARANA', 'curitiba', 'Curitiba.txt')
const dataFile = path.join(process.cwd(), 'data', 'seo-cities.json')

async function updateCuritiba() {
    // Lê os 84 bairros
    const bairrosText = await fs.readFile(listFile, 'utf-8')
    const bairros = bairrosText
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 0)

    // Lê os dados do app
    const raw = await fs.readFile(dataFile, 'utf-8')
    const store = JSON.parse(raw)

    // Injeta os bairros
    if (!store['curitiba']) store['curitiba'] = { status: 'default', neighborhoods: [] }

    // Reseta Curitiba para 'default' pro botão poder reaparecer
    store['curitiba'].status = 'default'
    store['curitiba'].neighborhoods = Array.from(new Set([...store['curitiba'].neighborhoods, ...bairros]))

    await fs.writeFile(dataFile, JSON.stringify(store, null, 2), 'utf-8')
    console.log(`Curitiba atualizada para 'default' com ${bairros.length} bairros na array.`)
}

updateCuritiba()
