import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.metalic-estrutura.com.br'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/api/'], // Protegendo as APIs privadas e o CMS Admin
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
