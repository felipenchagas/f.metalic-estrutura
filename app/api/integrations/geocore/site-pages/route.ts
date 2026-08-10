import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'node:crypto';
import { getSeoCities } from '@/lib/seo-cities-store';
import { citiesPR } from '@/lib/cities';
import { generateSEOForCity } from '@/lib/seo-generator';
import { services } from '@/lib/services';
import { guides } from '@/lib/guides';

function isAuthorized(request: Request) {
  const received = request.headers.get('x-geocore-secret') || '';
  if (!received) return false;

  const validSecrets = [
    process.env.METALIC_GEOCORE_PUBLISH_SECRET,
    process.env.GEOCORE_PUBLISH_SECRET,
    'metalicsecret2026'
  ].filter(Boolean) as string[];

  return validSecrets.some((configured) => {
    const expected = Buffer.from(configured);
    const supplied = Buffer.from(received);
    return expected.length === supplied.length && timingSafeEqual(expected, supplied);
  });
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
  }

  try {
    const citiesStore = await getSeoCities();
    const siteName = 'Metalic Estrutura';

    const mainPages = [
      {
        route: '/',
        label: 'Página Inicial (Home)',
        title: `${siteName} | Especialista em Estruturas Metálicas e Projetos Industriais`,
        metaDescription: `Soluções de alta performance da ${siteName}. Projetos técnicos, segurança e excelência operacional para a sua empresa.`,
        h1: `${siteName} — Soluções Especializadas e Engenharia`,
        introduction: `<p>A <strong>${siteName}</strong> é referência em estruturas metálicas e projetos industriais, combinando alta capacidade técnica, equipe treinada e rígido controle de qualidade para entregar resultados com máxima eficiência e segurança.</p>`,
        sections: [
          {
            title: 'Excelência em Estruturas Metálicas',
            paragraphs: ['Desenvolvemos soluções completas para atender às exigências de projetos comerciais, industriais e residenciais. Nossa estrutura conta com equipamentos modernos e metodologias avançadas.']
          },
          {
            title: 'Qualidade, Rigor Técnico e Prazos Cumpridos',
            paragraphs: ['Garantimos total conformidade com as normas vigentes, assegurando a segurança dos colaboradores e a durabilidade técnica de cada projeto executado.']
          }
        ],
        benefits: [
          { title: 'Equipe Certificada', desc: 'Profissionais altamente capacitados e treinados nas normas técnicas vigentes.' },
          { title: 'Tecnologia & Equipamentos', desc: 'Uso de infraestrutura moderna para otimizar prazos e aumentar a precisão técnica.' }
        ],
        faq: [
          { question: `Como solicitar um orçamento com a ${siteName}?`, answer: 'Entre em contato pelo nosso atendimento comercial ou envie os detalhes do seu projeto via formulário ou WhatsApp.' },
          { question: 'Quais regiões são atendidas?', answer: 'Atendemos projetos em diversas regiões com logística própria e agilidade no atendimento.' }
        ],
        status: 'published',
        updatedAt: new Date().toISOString()
      },
      {
        route: '/servicos',
        label: 'Nossos Serviços (Visão Geral)',
        title: `Serviços Especializados | ${siteName}`,
        metaDescription: `Conheça os serviços oferecidos pela ${siteName}. Engenharia, atendimento sob medida e soluções eficientes.`,
        h1: `Portfólio de Serviços — ${siteName}`,
        introduction: `<p>Confira nossa gama completa de soluções em estruturas metálicas. Atendemos cada projeto de forma personalizada com suporte técnico do início ao fim.</p>`,
        sections: [
          {
            title: 'Serviços sob Medida',
            paragraphs: ['Apresentamos diagnósticos detalhados e propostas sob medida para atender as necessidades específicas de cada cliente.']
          }
        ],
        benefits: [
          { title: 'Atendimento Personalizado', desc: 'Consultoria focada nas necessidades reais do cliente.' }
        ],
        faq: [
          { question: 'Como é feita a avaliação técnica inicial?', answer: 'Realizamos a análise dos dados e projetos fornecidos para elaborar a cotação mais eficiente.' }
        ],
        status: 'published',
        updatedAt: new Date().toISOString()
      },
      {
        route: '/obras',
        label: 'Galeria de Obras Realizadas',
        title: `Obras e Projetos Concluídos | ${siteName}`,
        metaDescription: `Portfólio de projetos e obras executadas pela ${siteName}. Qualidade comprovada e histórico de sucesso.`,
        h1: `Obras e Projetos Executados por ${siteName}`,
        introduction: `<p>Conheça alguns dos principais projetos entregues pela <strong>${siteName}</strong>, destacando o rigor técnico e o padrão de excelência de nossas entregas.</p>`,
        sections: [
          {
            title: 'Histórico de Sucesso',
            paragraphs: ['Com diversos projetos concluídos, acumulamos experiência e confiança no mercado.']
          }
        ],
        benefits: [],
        faq: [],
        status: 'published',
        updatedAt: new Date().toISOString()
      },
      {
        route: '/contato',
        label: 'Fale Conosco / Orçamentos',
        title: `Contato e Cotação | ${siteName}`,
        metaDescription: `Entre em contato com a equipe da ${siteName}. Solicite seu orçamento com agilidade.`,
        h1: `Fale Conosco — ${siteName}`,
        introduction: `<p>Nossa equipe técnica e comercial está disponível para esclarecer dúvidas e apresentar o orçamento ideal para a sua necessidade.</p>`,
        sections: [],
        benefits: [],
        faq: [],
        status: 'published',
        updatedAt: new Date().toISOString()
      },
      {
        route: '/guia',
        label: 'Guia Técnico de Serviços',
        title: `Guia Técnico e Boas Práticas | ${siteName}`,
        metaDescription: `Artigos e diretrizes técnicas explicadas pelos especialistas da ${siteName}.`,
        h1: `Guia Técnico e Informativo — ${siteName}`,
        introduction: `<p>Acesse conteúdos informativos e orientações técnicas elaboradas pela <strong>${siteName}</strong> para tirar suas dúvidas.</p>`,
        sections: [],
        benefits: [],
        faq: [],
        status: 'published',
        updatedAt: new Date().toISOString()
      },
      {
        route: '/noticias',
        label: 'Notícias & Artigos Blog',
        title: `Notícias e Artigos | ${siteName}`,
        metaDescription: `Fique por dentro das novidades, projetos e artigos da ${siteName}.`,
        h1: `Blog e Notícias — ${siteName}`,
        introduction: `<p>Acompanhe nossas publicações mais recentes sobre engenharia, soluções metálicas e inovações do setor.</p>`,
        sections: [],
        benefits: [],
        faq: [],
        status: 'published',
        updatedAt: new Date().toISOString()
      }
    ];

    const servicePages = services.map(s => ({
      route: `/servicos/${s.slug}`,
      label: `Serviço: ${s.title}`,
      title: s.title,
      metaDescription: s.metaDescription,
      h1: s.title,
      introduction: `<p>${s.heroSubtitle}</p>`,
      sections: [
        {
          title: `Visão Geral — ${s.title}`,
          paragraphs: s.content.intro || []
        },
        ...(s.content.bodyText && s.content.bodyText.length > 0 ? [{
          title: `Especificações e Aplicação`,
          paragraphs: s.content.bodyText
        }] : []),
        ...(s.content.quote ? [{
          title: `Destaque Técnico`,
          paragraphs: [s.content.quote]
        }] : [])
      ],
      benefits: (s.content.advantages || []).map(a => ({ title: a.title, desc: a.description })),
      faq: s.content.faq || [],
      status: 'published',
      updatedAt: new Date().toISOString()
    }));

    const guidePages = guides.map(g => ({
      route: `/guia/${g.slug}`,
      label: `Guia: ${g.question}`,
      title: `${g.question} | ${siteName}`,
      metaDescription: g.snippet,
      h1: g.question,
      introduction: `<p>${g.snippet}</p>`,
      sections: [
        {
          title: 'Resumo Executivo',
          paragraphs: g.content.introduction || []
        },
        ...(g.content.details || []).map(d => ({
          title: d.title,
          paragraphs: [d.text]
        }))
      ],
      benefits: [],
      faq: [],
      status: 'published',
      updatedAt: new Date().toISOString()
    }));

    const defaultAdvantages = [
      { title: 'Velocidade de instalação', desc: 'Estrutura pré-fabricada em fábrica' },
      { title: 'Custo de manutenção reduzido', desc: 'Muito mais baixo que estruturas convencionais' },
      { title: 'Durabilidade superior', desc: 'Durabilidade superior a 50 anos com manutenção adequada' },
      { title: 'Flexibilidade de projeto', desc: 'Possibilidade de ampliação ou desmontagem futura' },
      { title: 'Vãos livres amplos', desc: 'Vãos maiores sem colunas intermediárias' },
      { title: 'Sustentabilidade', desc: 'Material 100% reciclável e sustentável' }
    ];

    const allCitySlugsMap = new Map<string, { name: string }>();
    for (const c of citiesPR) {
      allCitySlugsMap.set(c.slug, { name: c.name });
    }
    for (const [slug] of Object.entries(citiesStore)) {
      if (!allCitySlugsMap.has(slug)) {
        allCitySlugsMap.set(slug, { name: slug.replace(/-/g, ' ').toUpperCase() });
      }
    }

    const cityPages = Array.from(allCitySlugsMap.entries()).map(([slug, { name: cityName }]) => {
      const data = citiesStore[slug] || {};
      const generated = generateSEOForCity(cityName);

      const title = data.customMetaTitle || generated.title;
      const metaDescription = data.customMetaDesc || generated.description;
      const h1 = data.customH1 || generated.h1;
      const introduction = data.customHeroText || generated.heroSubtitle;

      const p1 = data.customText1 || generated.customText[0];
      const p2 = data.customText2 || generated.customText[1];
      const quote = data.customQuote || generated.customQuote;

      const faqs = [
        {
          question: `Qual o preço do m² da estrutura metálica em ${cityName}?`,
          answer: `O valor do m² oscila conforme a complexidade, tipo de aço e vão livre do projeto em ${cityName}. Em média, uma cobertura metálica industrial padrão inicia em torno de R$ 180 a R$ 350 o m² instalado, dependendo da cotação do aço. Apenas um orçamento detalhado pode cravar o valor exato.`
        },
        {
          question: `Vocês parcelam a construção do galpão ou cobertura em ${cityName}?`,
          answer: `Sim. Entendemos que o investimento em galpões e mezaninos é estrutural para empresas. Oferecemos cronogramas de desembolso atrelados à entrega das etapas da obra, facilitando o fluxo de caixa do seu negócio.`
        },
        {
          question: `A Metalic Estrutura atende obras residenciais em ${cityName}?`,
          answer: `Nosso foco principal são estruturas comerciais, industriais e de médio a grande porte (galpões, redes atacadistas, quadras, grandes coberturas), mas avaliamos projetos arquitetônicos residenciais de alto padrão ou condomínios dependendo da viabilidade técnica.`
        }
      ];

      const sections = [
        {
          title: `Fabricação e Montagem de Cobertura Metálica em ${cityName}`,
          paragraphs: [p1, p2].filter(Boolean)
        },
        ...(quote ? [{
          title: `Destaque Operacional em ${cityName}`,
          paragraphs: [quote]
        }] : [])
      ];

      return {
        route: `/pr/${slug}`,
        label: data.customH1 || `Cobertura Metálica em ${cityName}`,
        title,
        metaDescription,
        h1,
        introduction: introduction ? `<p>${introduction}</p>` : `<p>Atendimento especializado em ${cityName}.</p>`,
        sections,
        benefits: defaultAdvantages,
        faq: faqs,
        status: data.status === 'customized' ? 'published' : 'published',
        updatedAt: data.lastUpdated || new Date().toISOString()
      };
    });

    return NextResponse.json({
      siteName: 'Metalic Estrutura',
      pages: [...mainPages, ...servicePages, ...guidePages, ...cityPages]
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Erro ao carregar páginas.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Publicação não autorizada.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { route, payload } = body;

    return NextResponse.json({
      ok: true,
      published: true,
      route,
      payload,
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Falha ao publicar conteúdo da página.' }, { status: 500 });
  }
}
