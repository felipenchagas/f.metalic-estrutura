import type { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { citiesPR } from '@/lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.metalic-estrutura.com.br'

    const staticRoutes = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
        { url: `${baseUrl}/contato`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.8 },
        { url: `${baseUrl}/galeria`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/pr`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    ]

    const serviceRoutes = services.map(s => ({
        url: `${baseUrl}/servicos/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    const cityRoutes = citiesPR.map(c => ({
        url: `${baseUrl}/pr/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.6,
    }))

    return [...staticRoutes, ...serviceRoutes, ...cityRoutes]
}

