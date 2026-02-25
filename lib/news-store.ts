import fs from 'fs'
import path from 'path'

export interface NewsArticle {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string
    heroImage: string
    author: string
    publishedAt: string
    updatedAt: string
    isFeatured: boolean
    tags: string[]
    seoTitle?: string
    seoDescription?: string
}

const dataPath = path.join(process.cwd(), 'data', 'news.json')

export async function getNewsStore(): Promise<Record<string, NewsArticle>> {
    try {
        if (!fs.existsSync(dataPath)) {
            // Seed initial data if file doesn't exist
            const initialData: Record<string, NewsArticle> = {
                'importancia-cobertura-metalica-industria': {
                    id: '1',
                    slug: 'importancia-cobertura-metalica-industria',
                    title: 'A Importância da Cobertura Metálica na Indústria Moderna',
                    excerpt: 'Entenda como estruturas de aço aceleram o cronograma de obras logísticas e garantem ROI rápido para o agronegócio e varejo.',
                    content: 'A construção civil industrial...',
                    heroImage: '/images/slider/cobertura-metalica.jpg',
                    author: 'Engenharia Metalic',
                    publishedAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    isFeatured: true,
                    tags: ['Indústria', 'Engenharia', 'Obras'],
                    seoTitle: 'Importância da Cobertura Metálica na Indústria | Metalic',
                    seoDescription: 'Descubra por que a cobertura metálica é o investimento definitivo para barracões, atacados e indústrias que buscam expansão rápida.'
                }
            }
            fs.writeFileSync(dataPath, JSON.stringify(initialData, null, 2), 'utf8')
            return initialData
        }
        const data = fs.readFileSync(dataPath, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        console.error('Error reading news data:', error)
        return {}
    }
}

export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
    const store = await getNewsStore()
    return store[slug] || null
}

export async function getAllNewsArticles(): Promise<NewsArticle[]> {
    const store = await getNewsStore()
    return Object.values(store).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function saveNewsArticle(article: NewsArticle): Promise<boolean> {
    try {
        const store = await getNewsStore()
        store[article.slug] = {
            ...article,
            updatedAt: new Date().toISOString()
        }
        fs.writeFileSync(dataPath, JSON.stringify(store, null, 2), 'utf8')
        return true
    } catch (error) {
        console.error('Error saving news article:', error)
        return false
    }
}

export async function deleteNewsArticle(slug: string): Promise<boolean> {
    try {
        const store = await getNewsStore()
        if (store[slug]) {
            delete store[slug]
            fs.writeFileSync(dataPath, JSON.stringify(store, null, 2), 'utf8')
            return true
        }
        return false
    } catch (err) {
        return false
    }
}
