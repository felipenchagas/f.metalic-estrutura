import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const QUEUE_FILE = path.join(process.cwd(), 'data', 'indexing-queue.json')

async function ensureQueueFile() {
    const dir = path.dirname(QUEUE_FILE)
    await fs.mkdir(dir, { recursive: true })
    try {
        await fs.access(QUEUE_FILE)
    } catch {
        await fs.writeFile(QUEUE_FILE, '[]', 'utf-8')
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { urls } = body

        if (!urls || !Array.isArray(urls)) {
            return NextResponse.json({ error: 'Lista de URLs inválida.' }, { status: 400 })
        }

        await ensureQueueFile()
        const raw = await fs.readFile(QUEUE_FILE, 'utf-8')
        const queue = JSON.parse(raw)

        const newEntries = urls.map((url: string) => ({
            url,
            status: 'PENDING',
            submittedAt: new Date().toISOString()
        }))

        const updatedQueue = [...newEntries, ...queue].slice(0, 1000) // Keep last 1000 logs

        await fs.writeFile(QUEUE_FILE, JSON.stringify(updatedQueue, null, 2), 'utf-8')

        return NextResponse.json({ success: urls.length, total: urls.length })
    } catch (error) {
        console.error('Indexing API Error:', error)
        return NextResponse.json({ error: 'Erro ao processar as requisições de indexação.' }, { status: 500 })
    }
}
