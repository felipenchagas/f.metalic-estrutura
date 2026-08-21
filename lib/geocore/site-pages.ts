import { sanitizePlainText, sanitizeRichHtml } from './content-security';

export type SitePageContent = {
  route: string; label: string; title: string; metaDescription: string; h1: string; introduction: string;
  sections: Array<{ title: string; paragraphs: string[]; bullets?: string[] }>;
  benefits?: Array<{ title: string; desc: string }>;
  faq: Array<{ question: string; answer: string }>;
  hero?: { src?: string; title?: string; alt?: string };
  inline?: { src?: string; title?: string; alt?: string } | null;
};

export type SitePageCatalogItem = SitePageContent & {
  status: 'editable' | 'adapting';
  adapter: 'article-page' | 'custom';
  editableFields: string[];
  reason?: string;
};

const catalogItems: SitePageCatalogItem[] = [
  {
    "route": "/",
    "label": "Página Inicial (Home)",
    "title": "Página Inicial (Home) | Metalic Estrutura",
    "metaDescription": "Página Inicial (Home) com excelência e qualidade da Metalic Estrutura. Especialistas em estruturas metálicas, galpões industriais, mezaninos e coberturas de aço.",
    "h1": "Página Inicial (Home)",
    "introduction": "<p>A <strong>Metalic Estrutura</strong> oferece soluções completas e atendimento de alta qualidade em <strong>página inicial (home)</strong>.</p>",
    "sections": [
      {
        "title": "Diferenciais em Página Inicial (Home)",
        "paragraphs": [
          "Atuamos com rigor técnico e conformidade com os mais altos padrões de qualidade do mercado.",
          "Nossa equipe especializada entrega soluções eficientes e personalizadas para atender às suas necessidades."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Qualidade Garantida",
        "desc": "Profissionais certificados e atendimento ágil em Metalic Estrutura."
      },
      {
        "title": "Solução sob Medida",
        "desc": "Projetos e execução focados no melhor resultado para o cliente."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para página inicial (home)?",
        "answer": "Entre em contato com a equipe da Metalic Estrutura para receber uma proposta personalizada."
      }
    ],
    "status": "editable",
    "adapter": "article-page",
    "editableFields": [
      "SEO title",
      "Meta description",
      "H1",
      "Introdução",
      "Conteúdo",
      "Destaques",
      "FAQ",
      "Imagem hero",
      "Imagem editorial"
    ]
  },
  {
    "route": "/blog",
    "label": "Blog",
    "title": "Blog | Metalic Estrutura",
    "metaDescription": "Blog com excelência e qualidade da Metalic Estrutura. Especialistas em estruturas metálicas, galpões industriais, mezaninos e coberturas de aço.",
    "h1": "Blog",
    "introduction": "<p>A <strong>Metalic Estrutura</strong> oferece soluções completas e atendimento de alta qualidade em <strong>blog</strong>.</p>",
    "sections": [
      {
        "title": "Diferenciais em Blog",
        "paragraphs": [
          "Atuamos com rigor técnico e conformidade com os mais altos padrões de qualidade do mercado.",
          "Nossa equipe especializada entrega soluções eficientes e personalizadas para atender às suas necessidades."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Qualidade Garantida",
        "desc": "Profissionais certificados e atendimento ágil em Metalic Estrutura."
      },
      {
        "title": "Solução sob Medida",
        "desc": "Projetos e execução focados no melhor resultado para o cliente."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para blog?",
        "answer": "Entre em contato com a equipe da Metalic Estrutura para receber uma proposta personalizada."
      }
    ],
    "status": "editable",
    "adapter": "article-page",
    "editableFields": [
      "SEO title",
      "Meta description",
      "H1",
      "Introdução",
      "Conteúdo",
      "Destaques",
      "FAQ",
      "Imagem hero",
      "Imagem editorial"
    ]
  },
  {
    "route": "/contato",
    "label": "Contato",
    "title": "Contato | Metalic Estrutura",
    "metaDescription": "Contato com excelência e qualidade da Metalic Estrutura. Especialistas em estruturas metálicas, galpões industriais, mezaninos e coberturas de aço.",
    "h1": "Contato",
    "introduction": "<p>A <strong>Metalic Estrutura</strong> oferece soluções completas e atendimento de alta qualidade em <strong>contato</strong>.</p>",
    "sections": [
      {
        "title": "Diferenciais em Contato",
        "paragraphs": [
          "Atuamos com rigor técnico e conformidade com os mais altos padrões de qualidade do mercado.",
          "Nossa equipe especializada entrega soluções eficientes e personalizadas para atender às suas necessidades."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Qualidade Garantida",
        "desc": "Profissionais certificados e atendimento ágil em Metalic Estrutura."
      },
      {
        "title": "Solução sob Medida",
        "desc": "Projetos e execução focados no melhor resultado para o cliente."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para contato?",
        "answer": "Entre em contato com a equipe da Metalic Estrutura para receber uma proposta personalizada."
      }
    ],
    "status": "editable",
    "adapter": "article-page",
    "editableFields": [
      "SEO title",
      "Meta description",
      "H1",
      "Introdução",
      "Conteúdo",
      "Destaques",
      "FAQ",
      "Imagem hero",
      "Imagem editorial"
    ]
  },
  {
    "route": "/galeria",
    "label": "Galeria",
    "title": "Galeria | Metalic Estrutura",
    "metaDescription": "Galeria com excelência e qualidade da Metalic Estrutura. Especialistas em estruturas metálicas, galpões industriais, mezaninos e coberturas de aço.",
    "h1": "Galeria",
    "introduction": "<p>A <strong>Metalic Estrutura</strong> oferece soluções completas e atendimento de alta qualidade em <strong>galeria</strong>.</p>",
    "sections": [
      {
        "title": "Diferenciais em Galeria",
        "paragraphs": [
          "Atuamos com rigor técnico e conformidade com os mais altos padrões de qualidade do mercado.",
          "Nossa equipe especializada entrega soluções eficientes e personalizadas para atender às suas necessidades."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Qualidade Garantida",
        "desc": "Profissionais certificados e atendimento ágil em Metalic Estrutura."
      },
      {
        "title": "Solução sob Medida",
        "desc": "Projetos e execução focados no melhor resultado para o cliente."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para galeria?",
        "answer": "Entre em contato com a equipe da Metalic Estrutura para receber uma proposta personalizada."
      }
    ],
    "status": "editable",
    "adapter": "article-page",
    "editableFields": [
      "SEO title",
      "Meta description",
      "H1",
      "Introdução",
      "Conteúdo",
      "Destaques",
      "FAQ",
      "Imagem hero",
      "Imagem editorial"
    ]
  },
  {
    "route": "/guia",
    "label": "Guia",
    "title": "Guia | Metalic Estrutura",
    "metaDescription": "Guia com excelência e qualidade da Metalic Estrutura. Especialistas em estruturas metálicas, galpões industriais, mezaninos e coberturas de aço.",
    "h1": "Guia",
    "introduction": "<p>A <strong>Metalic Estrutura</strong> oferece soluções completas e atendimento de alta qualidade em <strong>guia</strong>.</p>",
    "sections": [
      {
        "title": "Diferenciais em Guia",
        "paragraphs": [
          "Atuamos com rigor técnico e conformidade com os mais altos padrões de qualidade do mercado.",
          "Nossa equipe especializada entrega soluções eficientes e personalizadas para atender às suas necessidades."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Qualidade Garantida",
        "desc": "Profissionais certificados e atendimento ágil em Metalic Estrutura."
      },
      {
        "title": "Solução sob Medida",
        "desc": "Projetos e execução focados no melhor resultado para o cliente."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para guia?",
        "answer": "Entre em contato com a equipe da Metalic Estrutura para receber uma proposta personalizada."
      }
    ],
    "status": "editable",
    "adapter": "article-page",
    "editableFields": [
      "SEO title",
      "Meta description",
      "H1",
      "Introdução",
      "Conteúdo",
      "Destaques",
      "FAQ",
      "Imagem hero",
      "Imagem editorial"
    ]
  },
  {
    "route": "/noticias",
    "label": "Noticias",
    "title": "Noticias | Metalic Estrutura",
    "metaDescription": "Noticias com excelência e qualidade da Metalic Estrutura. Especialistas em estruturas metálicas, galpões industriais, mezaninos e coberturas de aço.",
    "h1": "Noticias",
    "introduction": "<p>A <strong>Metalic Estrutura</strong> oferece soluções completas e atendimento de alta qualidade em <strong>noticias</strong>.</p>",
    "sections": [
      {
        "title": "Diferenciais em Noticias",
        "paragraphs": [
          "Atuamos com rigor técnico e conformidade com os mais altos padrões de qualidade do mercado.",
          "Nossa equipe especializada entrega soluções eficientes e personalizadas para atender às suas necessidades."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Qualidade Garantida",
        "desc": "Profissionais certificados e atendimento ágil em Metalic Estrutura."
      },
      {
        "title": "Solução sob Medida",
        "desc": "Projetos e execução focados no melhor resultado para o cliente."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para noticias?",
        "answer": "Entre em contato com a equipe da Metalic Estrutura para receber uma proposta personalizada."
      }
    ],
    "status": "editable",
    "adapter": "article-page",
    "editableFields": [
      "SEO title",
      "Meta description",
      "H1",
      "Introdução",
      "Conteúdo",
      "Destaques",
      "FAQ",
      "Imagem hero",
      "Imagem editorial"
    ]
  },
  {
    "route": "/obras",
    "label": "Obras",
    "title": "Obras | Metalic Estrutura",
    "metaDescription": "Obras com excelência e qualidade da Metalic Estrutura. Especialistas em estruturas metálicas, galpões industriais, mezaninos e coberturas de aço.",
    "h1": "Obras",
    "introduction": "<p>A <strong>Metalic Estrutura</strong> oferece soluções completas e atendimento de alta qualidade em <strong>obras</strong>.</p>",
    "sections": [
      {
        "title": "Diferenciais em Obras",
        "paragraphs": [
          "Atuamos com rigor técnico e conformidade com os mais altos padrões de qualidade do mercado.",
          "Nossa equipe especializada entrega soluções eficientes e personalizadas para atender às suas necessidades."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Qualidade Garantida",
        "desc": "Profissionais certificados e atendimento ágil em Metalic Estrutura."
      },
      {
        "title": "Solução sob Medida",
        "desc": "Projetos e execução focados no melhor resultado para o cliente."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para obras?",
        "answer": "Entre em contato com a equipe da Metalic Estrutura para receber uma proposta personalizada."
      }
    ],
    "status": "editable",
    "adapter": "article-page",
    "editableFields": [
      "SEO title",
      "Meta description",
      "H1",
      "Introdução",
      "Conteúdo",
      "Destaques",
      "FAQ",
      "Imagem hero",
      "Imagem editorial"
    ]
  },
  {
    "route": "/obrigado",
    "label": "Obrigado",
    "title": "Obrigado | Metalic Estrutura",
    "metaDescription": "Obrigado com excelência e qualidade da Metalic Estrutura. Especialistas em estruturas metálicas, galpões industriais, mezaninos e coberturas de aço.",
    "h1": "Obrigado",
    "introduction": "<p>A <strong>Metalic Estrutura</strong> oferece soluções completas e atendimento de alta qualidade em <strong>obrigado</strong>.</p>",
    "sections": [
      {
        "title": "Diferenciais em Obrigado",
        "paragraphs": [
          "Atuamos com rigor técnico e conformidade com os mais altos padrões de qualidade do mercado.",
          "Nossa equipe especializada entrega soluções eficientes e personalizadas para atender às suas necessidades."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Qualidade Garantida",
        "desc": "Profissionais certificados e atendimento ágil em Metalic Estrutura."
      },
      {
        "title": "Solução sob Medida",
        "desc": "Projetos e execução focados no melhor resultado para o cliente."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para obrigado?",
        "answer": "Entre em contato com a equipe da Metalic Estrutura para receber uma proposta personalizada."
      }
    ],
    "status": "editable",
    "adapter": "article-page",
    "editableFields": [
      "SEO title",
      "Meta description",
      "H1",
      "Introdução",
      "Conteúdo",
      "Destaques",
      "FAQ",
      "Imagem hero",
      "Imagem editorial"
    ]
  }
];

export const SITE_PAGE_CATALOG: Record<string, SitePageCatalogItem> = Object.fromEntries(
  catalogItems.map(item => [item.route, item])
);

export const SITE_PAGE_ALLOWLIST: Record<string, SitePageCatalogItem> = SITE_PAGE_CATALOG;

export function getSitePageCatalogItem(route: string): SitePageCatalogItem | null {
  return SITE_PAGE_CATALOG[route] || null;
}

export function getAllSitePageCatalogItems(): SitePageCatalogItem[] {
  return catalogItems;
}

export function normalizeSitePageContent(input: any): SitePageContent {
  return {
    route: String(input.route || '/'),
    label: String(input.label || input.title || 'Página'),
    title: sanitizePlainText(input.title || '', 200),
    metaDescription: sanitizePlainText(input.metaDescription || '', 400),
    h1: sanitizePlainText(input.h1 || '', 200),
    introduction: sanitizeRichHtml(input.introduction || '', 3000),
    sections: Array.isArray(input.sections) ? input.sections : [],
    benefits: Array.isArray(input.benefits) ? input.benefits : [],
    faq: Array.isArray(input.faq) ? input.faq : [],
    hero: input.hero || undefined,
    inline: input.inline || undefined,
  };
}

export function loadSitePageContentSync(route: string): SitePageContent | null {
  return SITE_PAGE_CATALOG[route] || null;
}

export async function loadSitePageOverride(route: string): Promise<SitePageContent | null> {
  const base = SITE_PAGE_CATALOG[route];
  if (!base) return null;
  try {
    const prismaClient = (globalThis as any).prisma;
    if (!prismaClient?.sitePageOverride) return null;
    const record = await prismaClient.sitePageOverride.findUnique({ where: { route } });
    if (!record) return null;
    return normalizeSitePageContent(JSON.parse(record.payloadJson));
  } catch {
    return null;
  }
}

export async function loadSitePageContent(route: string): Promise<SitePageContent | null> {
  const override = await loadSitePageOverride(route);
  return override || SITE_PAGE_CATALOG[route] || null;
}
