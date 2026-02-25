import { promises as fs } from 'fs'
import path from 'path'

export interface Lead {
    id: string
    nome: string
    email: string
    ddd: string
    telefone: string
    cidade: string
    estado: string
    descricao: string
    createdAt: string
    ip?: string
    status?: 'novo' | 'em_contato' | 'orcamento_enviado' | 'fechado' | 'perdido'
    notas?: string
}

const DATA_FILE = path.join(process.cwd(), 'data', 'leads.json')

async function ensureFile() {
    const dir = path.dirname(DATA_FILE)
    await fs.mkdir(dir, { recursive: true })
    try {
        await fs.access(DATA_FILE)
    } catch {
        await fs.writeFile(DATA_FILE, '[]', 'utf-8')
    }
}

export async function getLeads(): Promise<Lead[]> {
    await ensureFile()
    const raw = await fs.readFile(DATA_FILE, 'utf-8')
    const leads: Lead[] = JSON.parse(raw)
    return leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function saveLead(data: Omit<Lead, 'id' | 'createdAt'>): Promise<Lead> {
    await ensureFile()
    const leads = await getLeads()
    const lead: Lead = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        status: 'novo',
        notas: '',
    }
    leads.unshift(lead)
    await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8')
    return lead
}

export async function updateLead(id: string, updates: Partial<Lead>): Promise<Lead | null> {
    await ensureFile()
    const leads = await getLeads()
    const index = leads.findIndex(l => l.id === id)
    if (index === -1) return null

    leads[index] = { ...leads[index], ...updates }
    await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8')
    return leads[index]
}

export async function deleteLead(id: string): Promise<boolean> {
    await ensureFile()
    const leads = await getLeads()
    const newLeads = leads.filter(l => l.id !== id)
    if (newLeads.length === leads.length) return false

    await fs.writeFile(DATA_FILE, JSON.stringify(newLeads, null, 2), 'utf-8')
    return true
}

export async function getStats() {
    const leads = await getLeads()
    const now = new Date()
    const today = now.toDateString()
    const thisWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    const todayCount = leads.filter(l => new Date(l.createdAt).toDateString() === today).length
    const weekCount = leads.filter(l => new Date(l.createdAt) >= thisWeek).length

    // State distribution
    const byState: Record<string, number> = {}
    leads.forEach(l => {
        const st = (l.estado || 'N/A').toUpperCase()
        byState[st] = (byState[st] || 0) + 1
    })
    const topState = Object.entries(byState).sort(([, a], [, b]) => b - a)[0]

    // Last 7 days chart data
    const days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(now.getTime() - (6 - i) * 24 * 60 * 60 * 1000)
        const label = d.toLocaleDateString('pt-BR', { weekday: 'short' })
        const count = leads.filter(l => new Date(l.createdAt).toDateString() === d.toDateString()).length
        return { label, count }
    })

    const maxDay = Math.max(...days.map(d => d.count), 1)

    return {
        total: leads.length,
        today: todayCount,
        week: weekCount,
        topState: topState ? `${topState[0]} (${topState[1]})` : '—',
        chart: days.map(d => ({ ...d, pct: Math.round((d.count / maxDay) * 100) })),
    }
}
