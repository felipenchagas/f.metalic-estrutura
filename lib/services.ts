export interface Service {
    slug: string
    title: string
    shortTitle: string
    description: string
    metaDescription: string
    heroSubtitle: string
    icon: string
    heroImage: string
    content: {
        intro: string[]
        quote?: string
        advantages?: { title: string; description: string }[]
        bodyText?: string[]
    }
    galleryImages: { src: string; alt: string }[]
    relatedServices: string[]
    keywords: string[]
}

export const services: Service[] = [
    {
        slug: 'estrutura-metalica',
        title: 'Estrutura Metálica',
        shortTitle: 'Estrutura',
        description: 'Fabricação e instalação de estruturas metálicas para todo o Brasil — desde pequenos projetos até grandes obras industriais.',
        metaDescription: 'Empresa especialista em estrutura metálica em SP, PR, SC, RJ, MG, RS. Curitiba. Fabricação, projeto e instalação. Ligue (41) 9-9636 8387.',
        heroSubtitle: 'Especialistas em estruturas metálicas — SP PR RJ SC Curitiba',
        icon: 'building-2',
        heroImage: '/images/estrutura/construir-estrutura-metalica.jpg',
        content: {
            intro: [
                'Os fatores de influência da qualidade da construção de estrutura metálica devem ser levados em consideração: a carga que a estrutura suportará, o peso da construção e seus efeitos a longo prazo.',
                'A estrutura metálica está sendo amplamente adotada no Brasil. O impacto econômico que seu uso tem em nosso cenário atual é completamente positivo — custo de manutenção muito mais baixo e longevidade maior que uma estrutura comum.',
                'Mudanças climáticas têm muito efeito sobre a construção. Em um projeto arquitetônico deve haver um processo calculado de acordo com a situação real: isolação térmica, umidade, impermeabilidade, anti-congelamento.',
            ],
            quote: 'A principal vantagem da estrutura metálica é a precisão no desenvolvimento e a velocidade da instalação.',
            bodyText: [
                'A estrutura metálica hoje está presente em grandes arranha-céus, obras de grande extensão e projetos luxuosos. A tendência é que a indústria brasileira aproveite todo o potencial do poder do aço, continue inovando e crescendo.',
            ],
            advantages: [
                { title: 'Sustentabilidade', description: 'Ecologicamente correta e 100% reaproveitável.' },
                { title: 'Velocidade', description: 'Fabricação e instalação muito mais rápida que a estrutura comum.' },
                { title: 'Durabilidade', description: 'Com manutenção simples, dura mais de 50 anos.' },
                { title: 'Versatilidade', description: 'Uma opção versátil para vários modelos arquitetônicos.' },
            ],
        },
        galleryImages: [
            { src: '/images/estrutura/estrutura-metalica.jpg', alt: 'Estrutura metálica em Curitiba' },
            { src: '/images/estrutura/construir-estrutura-metalica.jpg', alt: 'Construção de estrutura metálica' },
            { src: '/images/estrutura/mezanino-residencial.jpg', alt: 'Mezanino residencial' },
            { src: '/images/estrutura/cobertura-metalica.jpg', alt: 'Cobertura metálica' },
        ],
        relatedServices: ['cobertura-metalica', 'mezanino-metalico', 'escadas-metalicas'],
        keywords: ['estrutura metálica', 'estrutura em aço', 'empresa de estrutura metálica', 'estrutura metálica Curitiba', 'estrutura metálica SP', 'estrutura metálica PR'],
    },
    {
        slug: 'cobertura-metalica',
        title: 'Cobertura Metálica',
        shortTitle: 'Cobertura',
        description: 'Coberturas metálicas para indústrias, galpões, piscinas, quadras e residências. Projetos sob medida com garantia e qualidade.',
        metaDescription: 'Cobertura metálica fabricada e instalada em SP, PR, SC, RJ, MG. Galpões, piscinas, quadras, residências. Metalic Estrutura Curitiba (41) 9-9636 8387.',
        heroSubtitle: 'Coberturas metálicas para todo tipo de obra — fabricação e instalação',
        icon: 'home',
        heroImage: '/images/inicial/cobertura-metalica-em-curitiba.jpg',
        content: {
            intro: [
                'A cobertura metálica é a solução ideal para galpões industriais, piscinas cobertas, quadras poliesportivas, postos de gasolina, residências e muito mais.',
                'Trabalhamos com telhas termoacústicas, estruturas metálicas treliçadas e perfis laminados, garantindo resistência, durabilidade e estética impecável para o seu projeto.',
            ],
            quote: 'Uma cobertura metálica bem executada protege por décadas com manutenção mínima.',
            advantages: [
                { title: 'Impermeabilidade', description: 'Proteção total contra chuva, sol e vento.' },
                { title: 'Leveza', description: 'Estrutura muito mais leve que concreto, reduzindo cargas na fundação.' },
                { title: 'Estética', description: 'Diversas opções de telhas e acabamentos modernos.' },
                { title: 'Rapidez', description: 'Instalação rápida, menor tempo de obra.' },
            ],
        },
        galleryImages: [
            { src: '/images/inicial/cobertura-metalica-em-curitiba.jpg', alt: 'Cobertura metálica em Curitiba' },
            { src: '/images/inicial/cobertura-metalica.jpg', alt: 'Cobertura metálica' },
            { src: '/images/inicial/hotel-fazenda-estrutura-metalica.jpg', alt: 'Hotel fazenda com cobertura metálica' },
            { src: '/images/inicial/cobertura-metalica-pr.jpg', alt: 'Cobertura metálica no Paraná' },
        ],
        relatedServices: ['estrutura-metalica', 'mezanino-metalico', 'alambrados'],
        keywords: ['cobertura metálica', 'telhado metálico', 'cobertura para galpão', 'cobertura metálica Curitiba', 'cobertura metálica SP'],
    },
    {
        slug: 'mezanino-metalico',
        title: 'Mezanino Metálico',
        shortTitle: 'Mezanino',
        description: 'Fabricação e instalação de mezaninos metálicos para ambientes internos e externos. Maximize o aproveitamento do seu espaço.',
        metaDescription: 'Mezanino metálico fabricado e instalado em SP, PR, SC, RJ, MG. Maximize o espaço do seu galpão ou comércio. Metalic Estrutura (41) 9-9636 8387.',
        heroSubtitle: 'Mezaninos metálicos — maximize seu espaço vertical',
        icon: 'layers',
        heroImage: '/images/inicial/mezanino-metalico.jpg',
        content: {
            intro: [
                'O mezanino metálico é a solução perfeita para quem precisa ampliar o espaço útil sem construir outro pavimento. Ideal para indústrias, comércios, galpões logísticos e residências.',
                'Desenvolvemos projetos personalizados de mezaninos, calculados por engenheiros especializados, garantindo segurança estrutural e aproveitamento máximo do pé-direito disponível.',
            ],
            quote: 'Um mezanino bem projetado pode dobrar a área útil do seu espaço.',
            advantages: [
                { title: 'Mais Espaço', description: 'Aproveite a altura disponível, dobrando a área útil.' },
                { title: 'Rápida Montagem', description: 'Instalação ágil com mínima interrupção das atividades.' },
                { title: 'Desmontável', description: 'Pode ser desmontado e remontado em outro local.' },
                { title: 'Personalizável', description: 'Projetos sob medida para qualquer dimensão e finalidade.' },
            ],
        },
        galleryImages: [
            { src: '/images/inicial/mezanino-metalico.jpg', alt: 'Mezanino metálico' },
            { src: '/images/inicial/mezanino-metalico-curitiba.jpg', alt: 'Mezanino metálico em Curitiba' },
            { src: '/images/estrutura/mezanino-residencial.jpg', alt: 'Mezanino residencial' },
        ],
        relatedServices: ['estrutura-metalica', 'escadas-metalicas', 'cobertura-metalica'],
        keywords: ['mezanino metálico', 'mezanino metálico Curitiba', 'mezanino para galpão', 'mezanino industrial', 'mezanino SP'],
    },
    {
        slug: 'escadas-metalicas',
        title: 'Escadas Metálicas',
        shortTitle: 'Escadas',
        description: 'Fabricação e instalação de escadas metálicas para todo o Brasil. Escadas retas, caracol, em L, flutuantes e industriais.',
        metaDescription: 'Escadas metálicas fabricadas e instaladas em SP, PR, SC, RJ, MG. Escadas retas, caracol e industriais. Metalic Estrutura Curitiba (41) 9-9636 8387.',
        heroSubtitle: 'Escadas metálicas — funcionalidade e design em aço',
        icon: 'arrow-up-right',
        heroImage: '/images/inicial/escada-metalica.jpg',
        content: {
            intro: [
                'Fabricamos e instalamos escadas metálicas para todos os tipos de aplicações: residencial, comercial e industrial. Nossos modelos incluem escadas retas, em L, caracol, flutuantes e escadas de emergência.',
                'Cada escada é projetada e fabricada sob medida, com cálculos estruturais precisos e acabamento de alta qualidade, seja galvanizado, pintado ou inoxidável.',
            ],
            quote: 'Uma escada metálica bem projetada une segurança, durabilidade e design.',
            advantages: [
                { title: 'Segurança', description: 'Calculadas e testadas por engenheiros especializados.' },
                { title: 'Durabilidade', description: 'Resistência superior a escadas de madeira ou concreto.' },
                { title: 'Design', description: 'Modelos modernos que valorizam qualquer ambiente.' },
                { title: 'Personalização', description: 'Fabricadas sob medida conforme seu projeto.' },
            ],
        },
        galleryImages: [
            { src: '/images/inicial/escada-metalica.jpg', alt: 'Escada metálica' },
            { src: '/images/estrutura/escada-metalica.jpg', alt: 'Escada metálica industrial' },
            { src: '/images/inicial/estrutura-para-ponte-g.jpg', alt: 'Estrutura para ponte' },
        ],
        relatedServices: ['mezanino-metalico', 'estrutura-metalica', 'cobertura-metalica'],
        keywords: ['escada metálica', 'escada em aço', 'escada metálica Curitiba', 'escada industrial', 'escada caracol metálica'],
    },
    {
        slug: 'alambrados',
        title: 'Alambrados',
        shortTitle: 'Alambrado',
        description: 'Instalação de alambrados e cercamentos metálicos para campos, empresas e propriedades. Segurança e durabilidade garantidas.',
        metaDescription: 'Alambrados e cercamentos metálicos em SP, PR, SC, RJ, MG. Para campos esportivos, empresas e propriedades. Metalic Estrutura (41) 9-9636 8387.',
        heroSubtitle: 'Alambrados — segurança e durabilidade em aço galvanizado',
        icon: 'fence',
        heroImage: '/images/slider/estrutura-metalica.jpg',
        content: {
            intro: [
                'Instalamos alambrados e cercamentos metálicos de alta qualidade para delimitação de campos esportivos, perímetro empresarial, condomínios, propriedades rurais e áreas de lazer.',
                'Utilizamos telas galvanizadas e postes metálicos com tratamento anticorrosivo, garantindo máxima durabilidade mesmo em ambientes externos e agressivos.',
            ],
            quote: 'Um alambrado bem instalado protege e valoriza seu patrimônio por décadas.',
            advantages: [
                { title: 'Galvanizado', description: 'Tratamento anticorrosivo para máxima durabilidade.' },
                { title: 'Manutenção Baixa', description: 'Praticamente nenhuma manutenção necessária.' },
                { title: 'Segurança', description: 'Barreira eficiente para delimitar e proteger.' },
                { title: 'Econômico', description: 'Custo-benefício superior a outros tipos de cerca.' },
            ],
        },
        galleryImages: [
            { src: '/images/slider/estrutura-metalica.jpg', alt: 'Alambrado metálico' },
            { src: '/images/slider/cobertura-metalica.jpg', alt: 'Cercamento metálico' },
        ],
        relatedServices: ['campo-de-futebol', 'estrutura-metalica', 'cobertura-metalica'],
        keywords: ['alambrado', 'alambrado metálico', 'cercamento metálico', 'alambrado campo de futebol', 'cerca metálica'],
    },
    {
        slug: 'campo-de-futebol',
        title: 'Campo de Futebol com Grama Sintética',
        shortTitle: 'Campo de Futebol',
        description: 'Construção de campos de futebol com grama sintética e alambrados. Projetos completos para clubes, escolas, condomínios e empresas.',
        metaDescription: 'Campo de futebol com grama sintética em SP, PR, SC, RJ, MG. Projeto completo com estrutura e alambrado. Metalic Estrutura (41) 9-9636 8387.',
        heroSubtitle: 'Campos de futebol — projetos completos com grama sintética',
        icon: 'circle-dot',
        heroImage: '/images/slider/estrutura-metalica-curitiba.jpg',
        content: {
            intro: [
                'Construímos campos de futebol society completos com grama sintética de alta qualidade, alambrado perimetral, iluminação e arquibancadas metálicas.',
                'Nossos campos são projetados para máxima durabilidade e desempenho, atendendo todos os padrões técnicos para campos society e futebol de campo.',
            ],
            quote: 'Invista em um campo profissional que garante diversão e rentabilidade por anos.',
            advantages: [
                { title: 'Grama Sintética', description: 'Grama de alta performance com garantia longa.' },
                { title: 'Alambrado Incluso', description: 'Cercamento completo com acabamento profissional.' },
                { title: 'Projeto Completo', description: 'Do projeto à entrega, tudo com a Metalic.' },
                { title: 'Iluminação', description: 'Opção de iluminação LED para jogos noturnos.' },
            ],
        },
        galleryImages: [
            { src: '/images/slider/estrutura-metalica-curitiba.jpg', alt: 'Campo de futebol' },
            { src: '/images/slider/cobertura-metalica.jpg', alt: 'Campo coberto' },
        ],
        relatedServices: ['alambrados', 'cobertura-metalica', 'estrutura-metalica'],
        keywords: ['campo de futebol grama sintética', 'campo society', 'campo futebol Curitiba', 'construção campo futebol', 'grama sintética PR'],
    },
]

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(s => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
    return services.filter(s => slugs.includes(s.slug))
}
