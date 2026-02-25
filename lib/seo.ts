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
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
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
        languages: {
            'pt-BR': baseUrl
        }
    },
    manifest: '/site.webmanifest',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    }
}

export function getGlobalSchemaGraph() {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${baseUrl}/#website`,
                url: baseUrl,
                name: siteConfig.name,
                description: siteConfig.description,
                publisher: {
                    '@id': `${baseUrl}/#organization`
                },
                potentialAction: [
                    {
                        '@type': 'SearchAction',
                        target: {
                            '@type': 'EntryPoint',
                            urlTemplate: `${baseUrl}/busca?q={search_term_string}`
                        },
                        'query-input': 'required name=search_term_string'
                    }
                ]
            },
            {
                '@type': 'LocalBusiness',
                '@id': `${baseUrl}/#organization`,
                name: siteConfig.name,
                url: baseUrl,
                image: siteConfig.logo,
                telephone: siteConfig.phoneClean,
                email: siteConfig.email,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'CIC',
                    addressLocality: siteConfig.city,
                    addressRegion: siteConfig.state,
                    postalCode: '80000-000',
                    addressCountry: siteConfig.country
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: siteConfig.lat,
                    longitude: siteConfig.lng
                },
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '128'
                },
                areaServed: [
                    { '@type': 'City', name: 'Curitiba' },
                    { '@type': 'City', name: 'São Paulo' },
                    { '@type': 'City', name: 'Joinville' }
                ],
                openingHoursSpecification: [
                    {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                        opens: '08:00',
                        closes: '18:00'
                    }
                ],
                sameAs: [
                    'https://www.instagram.com/metalicestrutura',
                    'https://www.facebook.com/metalicestrutura'
                ]
            },
            {
                '@type': 'SpeakableSpecification',
                xpath: [
                    "/html/head/title",
                    "/html/head/meta[@name='description']/@content"
                ]
            }
        ]
    }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.url}`,
        })),
    }
}

export function getServiceSchema(serviceName: string, serviceUrl: string, description: string, image?: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        description: description,
        url: serviceUrl,
        image: image ? `${baseUrl}${image}` : siteConfig.logo,
        provider: {
            '@id': `${baseUrl}/#organization`
        },
        areaServed: {
            '@type': 'Country',
            name: 'Brasil'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Serviços de Estrutura Metálica',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: serviceName,
                    }
                }
            ]
        }
    }
}
