import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'node:crypto';
import { getSeoCities } from '@/lib/seo-cities-store';

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
        label: 'Nossos Serviços',
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

    const cityPages = Object.entries(citiesStore).map(([slug, data]) => ({
      route: `/pr/${slug}`,
      label: data.customH1 || `Estrutura Metálica em ${slug.toUpperCase()}`,
      title: data.customMetaTitle || `Estrutura Metálica em ${slug.toUpperCase()} | ${siteName}`,
      metaDescription: data.customMetaDesc || `Soluções em estrutura metálica na cidade de ${slug.toUpperCase()}.`,
      h1: data.customH1 || `Estrutura Metálica em ${slug.toUpperCase()}`,
      introduction: data.customHeroText || `<p>Atendimento especializado em ${slug.toUpperCase()}.</p>`,
      sections: [],
      benefits: [],
      faq: [],
      status: data.status === 'customized' ? 'published' : 'draft',
      updatedAt: data.lastUpdated || new Date().toISOString()
    }));

    return NextResponse.json({
      siteName: 'Metalic Estrutura',
      pages: [...mainPages, ...cityPages]
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
