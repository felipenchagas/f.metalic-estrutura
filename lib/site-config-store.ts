import { promises as fs } from 'fs'
import path from 'path'

export interface SiteConfig {
    phone: string
    phoneClean: string
    whatsapp: string        // just the number, e.g. 5541996368387
    email: string
    address: string
    businessHours: string
    instagram: string
    facebook: string
    heroTitle: string
    heroSubtitle: string
    ctaText: string
}

const CONFIG_FILE = path.join(process.cwd(), 'data', 'site-config.json')

export const defaultConfig: SiteConfig = {
    phone: '(41) 9-9636 8387',
    phoneClean: '+554196368387',
    whatsapp: '5541996368387',
    email: 'comercial@projeto-metalico.com.br',
    address: 'CIC, Curitiba — Paraná',
    businessHours: 'Seg–Sex, 08h às 18h',
    instagram: '',
    facebook: '',
    heroTitle: 'Estrutura Metálica com Qualidade e Garantia',
    heroSubtitle: 'Especialistas em cobertura metálica, mezaninos, escadas e estruturas de aço. Atendemos todo o Brasil.',
    ctaText: 'Solicitar Orçamento',
}

async function ensureFile() {
    const dir = path.dirname(CONFIG_FILE)
    await fs.mkdir(dir, { recursive: true })
    try {
        await fs.access(CONFIG_FILE)
    } catch {
        await fs.writeFile(CONFIG_FILE, JSON.stringify(defaultConfig, null, 2), 'utf-8')
    }
}

export async function getSiteConfig(): Promise<SiteConfig> {
    await ensureFile()
    try {
        const raw = await fs.readFile(CONFIG_FILE, 'utf-8')
        return { ...defaultConfig, ...JSON.parse(raw) }
    } catch {
        return defaultConfig
    }
}

export async function saveSiteConfig(config: Partial<SiteConfig>): Promise<SiteConfig> {
    await ensureFile()
    const current = await getSiteConfig()
    const updated = { ...current, ...config }
    await fs.writeFile(CONFIG_FILE, JSON.stringify(updated, null, 2), 'utf-8')
    return updated
}
