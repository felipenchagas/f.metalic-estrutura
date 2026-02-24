import type { Metadata } from 'next'

const baseUrl = 'https://www.metalic-estrutura.com.br'

export const siteConfig = {
    name: 'Metalic Estrutura',
    tagline: 'Especialistas em Estrutura Metálica',
    description: 'A Metalic Estrutura oferece soluções completas em estrutura metálica, coberturas, mezaninos, escadas e muito mais. Atendemos todo o Brasil a partir de Curitiba-PR.',
    url: baseUrl,
    phone: '(41) 9-9636 8387',
    phoneClean: '+554196368387',
    email: 'comercial@projeto-metalico.com.br',
    address: 'CIC, Curitiba - Paraná',
    city: 'Curitiba',
    state: 'PR',
    country: 'BR',
    lat: -25.4389,
    lng: -49.3454,
    logo: `${baseUrl}/images/logo.png`,
    social: {
        facebook: '',
        instagram: '',
        linkedin: '',
    },
}

export const baseMetadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'Metalic Estrutura | Estrutura Metálica em Curitiba PR SP SC RJ MG',
        template: '%s | Metalic Estrutura',
    },
    description: siteConfig.description,
    keywords: [
        'estrutura metálica',
        'cobertura metálica',
        'mezanino metálico',
        'escada metálica',
        'alambrado',
        'campo de futebol grama sintética',
        'estrutura metálica Curitiba',
        'estrutura metálica SP',
        'estrutura metálica PR',
        'empresa estrutura metálica',
    ],
    authors: [{ name: 'Metalic Estrutura' }],
    creator: 'Metalic Estrutura',
    publisher: 'Metalic Estrutura',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: baseUrl,
        siteName: 'Metalic Estrutura',
        title: 'Metalic Estrutura | Estrutura Metálica em todo o Brasil',
        description: siteConfig.description,
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Metalic Estrutura - Especialistas em Estruturas Metálicas',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Metalic Estrutura | Estrutura Metálica',
        description: siteConfig.description,
        images: ['/images/og-image.jpg'],
    },
    alternates: {
        canonical: baseUrl,
    },
}

export function getLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#business`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: baseUrl,
        telephone: siteConfig.phoneClean,
        email: siteConfig.email,
        logo: siteConfig.logo,
        image: siteConfig.logo,
        address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.city,
            addressRegion: siteConfig.state,
            addressCountry: siteConfig.country,
            streetAddress: 'CIC',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: siteConfig.lat,
            longitude: siteConfig.lng,
        },
        areaServed: ['PR', 'SP', 'SC', 'RJ', 'MG', 'RS', 'Brasil'],
        openingHours: 'Mo-Fr 08:00-18:00',
        priceRange: '$$',
        sameAs: [],
    }
}

export function getServiceSchema(serviceName: string, serviceUrl: string, description: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        description: description,
        url: serviceUrl,
        provider: {
            '@type': 'LocalBusiness',
            name: siteConfig.name,
            telephone: siteConfig.phoneClean,
            url: baseUrl,
        },
        areaServed: 'BR',
    }
}

export function getWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: baseUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/busca?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    }
}
