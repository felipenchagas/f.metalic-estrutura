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

const article = (content: SitePageContent): SitePageCatalogItem => ({
  ...content, status: 'editable', adapter: 'article-page',
  editableFields: ['SEO title', 'Meta description', 'H1', 'Introdução', 'Conteúdo', 'Destaques', 'FAQ', 'Imagem hero', 'Imagem editorial'],
});

const catalogItems: SitePageCatalogItem[] = [
  {
    "route": "/",
    "label": "Página Inicial (Início)",
    "title": "Página Inicial (Início) | Metalic Estruturas Metálicas",
    "metaDescription": "Página Inicial (Início) em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Página Inicial (Início)",
    "introduction": "Serviços técnicos e especializados de página inicial (início) por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Página Inicial (Início) com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza página inicial (início) utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para página inicial (início)?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/sobre-a-empresa",
    "label": "Sobre a Empresa",
    "title": "Sobre a Empresa | Metalic Estruturas Metálicas",
    "metaDescription": "Sobre a Empresa em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Sobre a Empresa",
    "introduction": "Serviços técnicos e especializados de sobre a empresa por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Sobre a Empresa com Segurança e Excelência",
        "paragraphs": [
          "Diga adeus ao risco e ao tempo ocioso em andaimes lentos. A Metalic Estruturas Metálicas desenvolve e executa projetos customizados de trabalho e resgate técnico vertical desde 2014.",
          "Conheça os marcos e conquistas que moldaram nosso acervo técnico exclusivo.",
          "Possuímos acervo técnico consolidado (CAT) chancelado pelos órgãos de classe, equipe integralmente registrada sob regime CLT, laudos ASO e documentações de segurança integradas (PGR, PCMSO) prontas para envio imediato.",
          "Atendemos aos requisitos mais rigorosos das áreas de compras e saúde ocupacional de multinacionais dos setores de energia, petroquímica e alimentício.",
          "Conecte-se com nossa equipe administrativa e agilize a homologação de acesso por cordas da Metalic Estruturas Metálicas hoje mesmo."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para sobre a empresa?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/empresa-alpinismo-industrial",
    "label": "Empresa Alpinismo (Legado)",
    "title": "Empresa Alpinismo (Legado) | Metalic Estruturas Metálicas",
    "metaDescription": "Empresa Alpinismo (Legado) em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Empresa Alpinismo (Legado)",
    "introduction": "Serviços técnicos e especializados de empresa alpinismo (legado) por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Empresa Alpinismo (Legado) com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza empresa alpinismo (legado) utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para empresa alpinismo (legado)?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/missao",
    "label": "Nossa Missão",
    "title": "Nossa Missão | Metalic Estruturas Metálicas",
    "metaDescription": "Nossa Missão em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Nossa Missão",
    "introduction": "Serviços técnicos e especializados de nossa missão por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Nossa Missão com Segurança e Excelência",
        "paragraphs": [
          "Viabilizar inspeções, manutenções e reparos mecânicos complexos em locais verticais inacessíveis com 100% de segurança ativa e prazos expressivamente reduzidos.",
          "Acreditamos que nenhuma altura é inacessível para a engenharia. Através do alpinismo industrial e do planejamento tático rigoroso, desmistificamos o acesso a silos, plataformas offshore, chaminés e fachadas monumentais, garantindo prazos curtos de intervenção.",
          "Cada atividade de canteiro é planejada nos mínimos detalhes. Desenvolvemos projetos de rigging tridimensionais, calculando o estresse físico dinâmico de queda de forma matemática antes do primeiro operário se conectar à corda."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para nossa missão?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/visao",
    "label": "Nossa Visão",
    "title": "Nossa Visão | Metalic Estruturas Metálicas",
    "metaDescription": "Nossa Visão em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Nossa Visão",
    "introduction": "Serviços técnicos e especializados de nossa visão por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Nossa Visão com Segurança e Excelência",
        "paragraphs": [
          "Ser o parceiro estratégico preferido de grandes corporações para paradas técnicas industriais, operando sob normas internacionais sem margem a desvios.",
          "Buscamos consolidar a Metalic Estruturas Metálicas como o maior centro de referência física e operacional em alpinismo industrial do Brasil, aplicando tecnologias de controle operacional inovadoras, como rastreabilidade de conectores RFID.",
          "Queremos ser a primeira opção de contratação de gerentes de facilities, coordenadores de SESMT e engenheiros de plantas petroquímicas, refinarias, fábricas de papel/celulose e parques eólicos em todo o território nacional."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para nossa visão?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/valores",
    "label": "Nossos Valores",
    "title": "Nossos Valores | Metalic Estruturas Metálicas",
    "metaDescription": "Nossos Valores em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Nossos Valores",
    "introduction": "Serviços técnicos e especializados de nossos valores por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Nossos Valores com Segurança e Excelência",
        "paragraphs": [
          "A vida de cada trabalhador na corda é um bem supremo e inalienável. A segurança precede qualquer velocidade operacional de canteiro.",
          "Não abrimos mão da vida humana. Trabalhamos exclusivamente sob os rigores máximos das diretrizes federais da NR-35 e do padrão internacional IRATA, garantindo redundâncias completas.",
          "Trabalho vertical é uma atividade científica séria. Cuidar de cada profissional e dar o suporte necessário para a sua integridade física e emocional é o núcleo da nossa marca.",
          "O planejamento matemático de cargas de queda, memorial de cálculos de tirantes metálicos e a emissão ágil de ARTs constituem o diferencial de engenharia que nos destaca."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para nossos valores?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/contato",
    "label": "Contato Comercial",
    "title": "Contato Comercial | Metalic Estruturas Metálicas",
    "metaDescription": "Contato Comercial em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Contato Comercial",
    "introduction": "Serviços técnicos e especializados de contato comercial por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Contato Comercial com Segurança e Excelência",
        "paragraphs": [
          "Fale com nossos consultores técnicos e engenheiros. Analisamos seu canteiro de obras, projeto de linha de vida ou parada técnica com máxima atenção.",
          "Agradecemos seu contato. Nossos engenheiros de acesso e segurança analisarão seus dados e retornarão em menos de 2 horas úteis.",
          "Preencha o formulário e receba nosso retorno ágil."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para contato comercial?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/alpinismo-industrial",
    "label": "Alpinismo Industrial (Mãe)",
    "title": "Alpinismo Industrial (Mãe) | Metalic Estruturas Metálicas",
    "metaDescription": "Alpinismo Industrial (Mãe) em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Alpinismo Industrial (Mãe)",
    "introduction": "Serviços técnicos e especializados de alpinismo industrial (mãe) por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Alpinismo Industrial (Mãe) com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza alpinismo industrial (mãe) utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para alpinismo industrial (mãe)?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/instalacao-linhas-vida",
    "label": "Instalação de Linhas de Vida",
    "title": "Projetos & Instalação de Linhas de Vida | Metalic Estruturas Metálicas",
    "metaDescription": "Projetos estruturais completos, dimensionamento mecânico, ensaios de arrancamento estático com dinamômetro e laudos técnicos em estrita conformidade com as normas NR-35 e NBR 16325.",
    "h1": "Projetos & Instalação de Linhas de Vida",
    "introduction": "Projetos estruturais completos, dimensionamento mecânico, ensaios de arrancamento estático com dinamômetro e laudos técnicos em estrita conformidade com as normas NR-35 e NBR 16325.",
    "sections": [
      {
        "title": "Prevenção Científica de Acidentes e Conformidade Legal Absoluta.",
        "paragraphs": [
          "Sistemas de ancoragem não podem ser especificados por estimativa. Projetar e instalar linhas de vida exige profunda perícia de cálculo mecânico de esforços. Cada poste de ancoragem intermediário ou de extremidade deve resistir a picos intensos de carga gerados por quedas acidentais múltiplas sem danificar a estrutura da cobertura ou de alvenaria.",
          "Na Metalic Estruturas Metálicas, entregamos soluções turnkey: do mapeamento tridimensional de riscos, modelagem em CAD e cálculo estrutural, até a montagem por técnicos IRATA e entrega técnica formal com testes físicos hidrodinâmicos e emissão de ART de obra."
        ],
        "bullets": [
          "Testes físicos de tração estática executados in loco com dinamômetro",
          "Uso exclusivo de cabos de aço inox e fixações químicas estruturais de cura rápida",
          "Emissão imediata de memorial de cálculo e ART de projeto e execução"
        ]
      }
    ],
    "benefits": [
      {
        "title": "01 Zona Livre de Queda (ZLQ)",
        "desc": "Calculamos matematicamente a ZLQ (distância mínima necessária para impedir que o operador toque o solo durante a queda). Essencial em galpões de baixa altura."
      },
      {
        "title": "02 Absorvedores de Energia Dinâmicos",
        "desc": "Nossos sistemas deformáveis reduzem a carga transferida para a estrutura do telhado, preservando o telhado zipado de rasgos e vazamentos pós-retensão."
      },
      {
        "title": "03 Fixações Não-Invasivas",
        "desc": "Utilizamos sapatas e grampos mecânicos específicos para fixação direta nas zipagens das telhas metálicas sem furações, preservando a garantia de estanqueidade."
      }
    ],
    "faq": [
      {
        "question": "O que é uma Linha de Vida e quando ela é legalmente obrigatória?",
        "answer": "A linha de vida é um Sistema de Proteção Coletiva Contra Quedas (SPCQ), regulamentado pela NR-35 e pela NBR 16325. Ela é legalmente obrigatória em qualquer atividade industrial, predial ou comercial executada a mais de 2 metros de altura do nível inferior onde haja iminente risco de queda do trabalhador."
      },
      {
        "question": "Qual a diferença entre uma linha de vida rígida e flexível?",
        "answer": "As linhas flexíveis utilizam cabos de aço inox flexíveis tensionados de 8mm a 10mm, ideais para cobrir longas extensões de coberturas onde há boa altura livre de queda. Já as linhas rígidas utilizam trilhos de alumínio ou aço galvanizado estruturais. Elas eliminam totalmente a deflexão (barriga do cabo) em caso de queda, sendo a única escolha viável para docas de carregamento ou áreas industriais com baixa distância até o chão."
      },
      {
        "question": "Os sistemas instalados pela Metalic Estruturas Metálicas acompanham ART e Memorial?",
        "answer": "Sim, sem exceções. Cada instalação efetuada pela Metalic Estruturas Metálicas é acompanhada por um book técnico de engenharia completo, contendo: ART (Anotação de Responsabilidade Técnica) do engenheiro projetista e do engenheiro instalador, Memorial de Cálculo Estrutural detalhado dos esforços aplicados à estrutura, Manual de Utilização da Linha de Vida e Relatório de Arrancamento Estático."
      },
      {
        "question": "Com qual frequência a linha de vida deve ser inspecionada?",
        "answer": "Conforme determinações estritas da NR-35 e da NBR 16325, todas as linhas de vida e ancoragens devem passar obrigatoriamente por uma inspeção técnica formal e recertificação técnica a cada 12 meses. Também é obrigatório submeter o sistema a testes imediatos caso ele tenha retido a queda de um operador ou sofrido intempéries extraordinárias."
      }
    ]
  },
  {
    "route": "/linha-de-vida-pr-sc-rj-sp",
    "label": "Linha de Vida Regional (PR, SC, RJ, SP)",
    "title": "Linha de Vida Regional (PR, SC, RJ, SP) | Metalic Estruturas Metálicas",
    "metaDescription": "Linha de Vida Regional (PR, SC, RJ, SP) em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Linha de Vida Regional (PR, SC, RJ, SP)",
    "introduction": "Serviços técnicos e especializados de linha de vida regional (pr, sc, rj, sp) por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Linha de Vida Regional (PR, SC, RJ, SP) com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza linha de vida regional (pr, sc, rj, sp) utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para linha de vida regional (pr, sc, rj, sp)?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/ponto-de-ancoragem-pr-sc-rj-sp",
    "label": "Instalação de Pontos de Ancoragem",
    "title": "Instalação de Pontos de Ancoragem PR, SC, RJ e SP | Metalic Estruturas Metálicas",
    "metaDescription": "Projetos estruturais personalizados e ensaios físicos de tração de D-Rings em conformidade com as diretrizes da NR-35 e NBR 16325 no Sul e Sudeste.",
    "h1": "Instalação de Pontos de Ancoragem PR, SC, RJ e SP",
    "introduction": "Projetos estruturais personalizados e ensaios físicos de tração de D-Rings em conformidade com as diretrizes da NR-35 e NBR 16325 no Sul e Sudeste.",
    "sections": [
      {
        "title": "A Metalic Estruturas Metálicas é Referência Física em Segurança Contra Quedas em PR, SC, RJ e SP",
        "paragraphs": [
          "Garantir a total segurança de condomínios industriais e edifícios corporativos no Paraná, Santa Catarina, Rio de Janeiro e São Paulo exige conformidade imediata com as normas regulamentadoras federais.",
          "A Metalic Estruturas Metálicas conta com bases de engenharia ágeis e mobilização rápida em toda a região Sul e Sudeste. Instalamos pontos de ancoragem (D-Rings) sob rigorosos métodos químicos epóxi e parabolts expansivos metálicos de alta resistência, emitindo laudos técnicos e ART no mesmo dia."
        ],
        "bullets": [
          "Instalação e ensaios com dinamômetro calibrado RBC com ART",
          "Atendimento rápido com corpo de engenheiros locais nas principais capitais",
          "Rastreabilidade de lote de fixações químicas e garantia estrutural de fixação"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Bases Locais PR, SC, RJ e SP",
        "desc": "Mobilização ágil com menores custos logísticos de deslocamento da equipe."
      },
      {
        "title": "Conformidade Total com NR-35",
        "desc": "Aprovado em todas as auditorias e sistemas eletrônicos industriais de terceiros."
      },
      {
        "title": "Seguro de Alta Cobertura",
        "desc": "Seguros de responsabilidade civil adequados às exigências de multinacionais."
      }
    ],
    "faq": [
      {
        "question": "Por que a Metalic Estruturas Metálicas é a escolha ideal para frotas prediais em múltiplos estados?",
        "answer": "Centralizar seus laudos de recertificação anual de segurança em altura com a Metalic Estruturas Metálicas garante uniformidade técnica total de relatórios de engenharia e facilidade de faturamento unificado para grandes gestoras corporativas de facilities em PR, SC, RJ e SP."
      },
      {
        "question": "Como é testada a resistência do concreto que receberá o ponto de ancoragem?",
        "answer": "Antes de instalar, efetuamos testes de dureza superficial esclerométrica para certificar que a estrutura de concreto armado do edifício possui a capacidade física mínima (geralmente fck maior ou igual a 20 MPa) para ancorar parafusos mecânicos químicos com segurança absoluta."
      }
    ]
  },
  {
    "route": "/certificacao-testes-pontos-ancoragem",
    "label": "Certificação e Testes de Pontos de Ancoragem",
    "title": "Certificação & Testes de Pontos de Ancoragem | Metalic Estruturas Metálicas",
    "metaDescription": "Ensaios físicos de tração estática in loco por dinamômetro com memória digital. Laudos de engenharia e emissão de ART em total conformidade com a norma NBR 16325.",
    "h1": "Certificação & Testes de Pontos de Ancoragem",
    "introduction": "Ensaios físicos de tração estática in loco por dinamômetro com memória digital. Laudos de engenharia e emissão de ART em total conformidade com a norma NBR 16325.",
    "sections": [
      {
        "title": "Validando Sistemas de Proteção Contra Quedas",
        "paragraphs": [
          "Os pontos de ancoragem (D-Rings) são o elo crítico entre o trabalhador em altura e a estrutura da edificação. Garantir que esses dispositivos suportem a força dinâmica extrema decorrente de uma queda acidental exige ensaios físicos rigorosos de arrancamento estático a cada 12 meses.",
          "A Metalic Estruturas Metálicas é especialista em testes, inspeções visuais metalográficas e recertificações de sistemas de proteção. Desenvolvemos laudos com modelagem de esforço mecânico reais que garantem total isenção jurídica para o SESMT de sua empresa."
        ],
        "bullets": [
          "Ensaios in loco com dinamômetros calibrados de alta precisão",
          "Inspeção por ensaio de líquido penetrante para detecção de trincas nas soldas",
          "Book técnico completo contendo ART e Memorial de Cálculos de engenharia"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Calibração e Rastreabilidade RBC",
        "desc": "Todos os nossos dinamômetros e ferramentas possuem certificados de calibração RBC válidos."
      },
      {
        "title": "Dinamismo e Rapidez",
        "desc": "Técnicos IRATA instalam e testam dezenas de pontos ao dia com mínima interrupção predial."
      },
      {
        "title": "Book de Engenharia Completo",
        "desc": "Fornecemos desenhos técnicos CAD, diagramas de ZLQ e memorial descritivo em PDF."
      }
    ],
    "faq": [
      {
        "question": "Qual a periodicidade legal obrigatória para testar os pontos de ancoragem?",
        "answer": "A norma regulamentadora NR-35 e a NBR 16325 determinam expressamente que todas as ancoragens coletivas (linhas de vida) e pontos individuais (D-Rings) passem por uma inspeção minuciosa com recertificação técnica a cada 12 meses."
      },
      {
        "question": "O que acontece se um ponto de ancoragem falhar no teste de tração?",
        "answer": "Se o olhal de ancoragem apresentar qualquer deformação mecânica, microtrinca na solda detectada no ensaio de líquido penetrante, ou deslocamento de arranque estrutural abaixo da força especificada, ele é condenado imediatamente. Nossa equipe efetua a substituição imediata instalando um novo dispositivo de alta resistência."
      }
    ]
  },
  {
    "route": "/manutencao-linhas-vida",
    "label": "Manutenção de Linhas de Vida (Inspeção Anual)",
    "title": "Manutenção & Inspeção de Linhas de Vida | Metalic Estruturas Metálicas",
    "metaDescription": "Inspeção anual obrigatória, laudos de conformidade técnica de cabo de aço, retensionamento mecânico de linhas de segurança e emissão de ART conforme a NBR 16325.",
    "h1": "Manutenção & Inspeção de Linhas de Vida",
    "introduction": "Inspeção anual obrigatória, laudos de conformidade técnica de cabo de aço, retensionamento mecânico de linhas de segurança e emissão de ART conforme a NBR 16325.",
    "sections": [
      {
        "title": "Mantendo o Escudo de Proteção dos Seus Operários",
        "paragraphs": [
          "As linhas de vida horizontais e verticais são sistemas ativos críticos de proteção coletiva contra quedas (SPCQC). Submetidos a intempéries contínuas (vento, poluição e maresia), os cabos de aço inox sofrem afrouxamento físico natural e desgaste de tensionadores, exigindo revisões anuais obrigatórias.",
          "Na Metalic Estruturas Metálicas, efetuamos a manutenção completa dos sistemas de proteção: tensionamento hidráulico de cabos, substituição de absorvedores de impacto danificados, ensaios de tração nos pontos extremos de ancoragem e fornecimento de book de engenharia com ART."
        ],
        "bullets": [
          "Retensionamento sob carga controlada com medidor de tensão digital",
          "Substituição imediata de conectores, sapatas e absorvedores de impacto desgastados",
          "Inspeção obrigatória a cada 12 meses sob pena de interdição legal"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Garantia de Liberação Legal",
        "desc": "Aprovado em todas as auditorias fiscais e sistemas de homologação de terceiros."
      },
      {
        "title": "Agilidade Operacional",
        "desc": "Técnicos IRATA instalam e testam sem necessidade de interromper as atividades."
      },
      {
        "title": "Equipamentos Calibrados RBC",
        "desc": "Todos os nossos dinamômetros e torquímetros possuem certificados de validade RBC."
      }
    ],
    "faq": [
      {
        "question": "Qual a importância da inspeção de linhas de vida a cada 12 meses?",
        "answer": "A oxidação dos cabos de aço provocada pela chuva ácida, relaxamento de molas de absorvedores de energia e deslocamento milimétrico de parafusos de ancoragem por dilatação térmica reduzem silenciosamente a resistência física da linha. A inspeção anual é a única forma técnica de certificar que o cabo segurará o peso dinâmico de queda."
      },
      {
        "question": "O que acontece se uma linha de vida for condenada na auditoria visual?",
        "answer": "Se nossa engenharia identificar oxidação de núcleo do cabo de aço, esmagamento de sapatas ou trincas microscópicas em suportes de fixação, a linha é interditada imediatamente com tags vermelhas. Efetuamos a manutenção corretiva e substituição das peças condenadas de forma rápida, liberando a linha com tag verde em seguida."
      }
    ]
  },
  {
    "route": "/alpinismo-industrial-curitiba",
    "label": "Alpinismo Industrial em Curitiba",
    "title": "Alpinismo Industrial em Curitiba | Metalic Estruturas Metálicas",
    "metaDescription": "Referência técnica em acesso por corda, manutenção predial, tratamento anticorrosivo e soluções técnicas sob as normas NR-35/NR-33 na Grande Curitiba.",
    "h1": "Alpinismo Industrial em Curitiba",
    "introduction": "Referência técnica em acesso por corda, manutenção predial, tratamento anticorrosivo e soluções técnicas sob as normas NR-35/NR-33 na Grande Curitiba.",
    "sections": [
      {
        "title": "Engenharia de Acesso por Corda para Silos, Galpões e Fachadas",
        "paragraphs": [
          "A Metalic Estruturas Metálicas viabiliza serviços em locais elevados e de difícil acesso na região de Curitiba, Araucária, Pinhais, São José dos Pinhais e Campo Largo. Nossa abordagem elimina custos de logística complexa na montagem de andaimes tubulares gigantescos.",
          "Com equipe técnica capacitada, oferecemos serviços rápidos de lavagem técnica de fachadas, impermeabilização predial, pintura anticorrosiva de estruturas metálicas e suporte técnico em altura. Buscamos conformidade técnica com as normas regulamentadoras do trabalho em altura."
        ],
        "bullets": [
          "Mitigação rigorosa de riscos com equipe qualificada em acesso por corda",
          "Atendimento ágil em Curitiba e toda a Região Metropolitana",
          "Documentações operacionais completas (APR/PT/ART quando aplicável)"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Segurança de Acesso por Corda",
        "desc": "Supervisão experiente garantindo procedimentos redundantes de dupla checagem."
      },
      {
        "title": "Emissão de ART",
        "desc": "Projetos técnicos executados acompanhados de Anotação de Responsabilidade Técnica de engenharia quando aplicável."
      },
      {
        "title": "Mínima Interferência Logística",
        "desc": "Nossos técnicos utilizam ancoragens temporárias e desmobilizam o sistema diariamente."
      }
    ],
    "faq": [
      {
        "question": "A Metalic Estruturas Metálicas possui sede física e atendimento ativo em Curitiba?",
        "answer": "Sim. A Metalic Estruturas Metálicas possui base estruturada em Curitiba/PR. Realizamos vistorias técnicas presenciais ágeis para indústrias, condomínios residenciais e comerciais em toda a Região Metropolitana."
      },
      {
        "question": "Quais documentos a empresa entrega antes de iniciar os serviços?",
        "answer": "Fornecemos o dossiê completo de conformidade legal: Análise Preliminar de Risco (APR), Permissão de Trabalho (PT), exames de aptidão física dos técnicos (ASOs para NR-35 e NR-33), certificados de calibração dos equipamentos e a emissão de ART assinada por nosso engenheiro civil de segurança do trabalho."
      },
      {
        "question": "Como solicitar uma proposta técnica para manutenção de fachada ou industrial?",
        "answer": "Basta entrar em contato pelo nosso WhatsApp ou formulário comercial. Nossa equipe de engenharia realiza o agendamento de uma visita técnica in loco para avaliar os pontos de ancoragem e a logística operacional antes do envio da proposta comercial."
      }
    ]
  },
  {
    "route": "/trabalho-em-altura-curitiba",
    "label": "Trabalho em Altura em Curitiba",
    "title": "Trabalho em Altura em Curitiba | Metalic Estruturas Metálicas",
    "metaDescription": "Planejamento técnico, laudos de ancoragem e execução vertical avançada sob a norma NR-35 na Grande Curitiba.",
    "h1": "Trabalho em Altura em Curitiba",
    "introduction": "Planejamento técnico, laudos de ancoragem e execução vertical avançada sob a norma NR-35 na Grande Curitiba.",
    "sections": [
      {
        "title": "Gestão Estruturada de Riscos em Altura para sua Indústria ou Condomínio",
        "paragraphs": [
          "Evite passivos legais e trabalhistas em Curitiba. A execução de serviços em altura por profissionais sem a devida capacitação é um dos principais fatores de acidentes graves em coberturas e fachadas corporativas.",
          "A Metalic Estruturas Metálicas fornece suporte técnico completo para o SESMT de indústrias, galpões logísticos e administradoras de condomínios. Garantimos a conformidade documental e operacional de cada projeto vertical."
        ],
        "bullets": [
          "Equipe técnica qualificada sob normas federais vigentes (NR-35/NR-33)",
          "Critérios técnicos para testes e dimensionamento físico",
          "Dossiê documental completo entregue antes da mobilização"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Engenharia de Segurança",
        "desc": "Responsáveis técnicos que assinam projetos de ancoragem e emitem ART quando aplicável."
      },
      {
        "title": "Inspeção de Equipamentos",
        "desc": "Utilização exclusiva de cordas, mosquetões e dispositivos sob rígidos prazos de validade."
      },
      {
        "title": "Plano de Resgate Estruturado",
        "desc": "Evacuação técnica desenhada preventivamente e adaptada a cada mobilização vertical quando aplicável."
      }
    ],
    "faq": [
      {
        "question": "O que é obrigatório exigir de uma empresa de trabalho em altura?",
        "answer": "Toda contratada deve fornecer: Certificados de treinamento NR-35 (trabalho em altura) e exames de saúde ocupacional (ASO) específicos para altura com eletrocardiograma e eletroencefalograma válidos, além de seguro de vida e calibração dos equipamentos de proteção individual (EPIs/EPCs)."
      },
      {
        "question": "Qual a altura mínima considerada para enquadramento na NR-35?",
        "answer": "Segundo a NR-35, considera-se trabalho em altura toda atividade executada acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda que possa resultar em lesões aos profissionais envolvidos."
      },
      {
        "question": "Como a Metalic Estruturas Metálicas auxilia na mitigação de riscos na execução?",
        "answer": "Operamos com sistemas redundantes de dupla segurança: o alpinista fica conectado a dois pontos independentes de ancoragem através de cordas distintas. Nossos supervisores desenham planos de resgate sob medida de prontidão para atuação imediata."
      }
    ]
  },
  {
    "route": "/linha-de-vida-curitiba",
    "label": "Linha de Vida em Curitiba",
    "title": "Linha de Vida em Curitiba | Metalic Estruturas Metálicas",
    "metaDescription": "Projetos executivos, instalação qualificada sob normas técnicas ABNT NBR 16325 e inspeção técnica de segurança em Curitiba.",
    "h1": "Linha de Vida em Curitiba",
    "introduction": "Projetos executivos, instalação qualificada sob normas técnicas ABNT NBR 16325 e inspeção técnica de segurança em Curitiba.",
    "sections": [
      {
        "title": "Sistemas de Proteção contra Quedas de Alta Performance em Curitiba",
        "paragraphs": [
          "A instalação de linhas de vida horizontais e verticais em coberturas e galpões industriais protege os colaboradores contra acidentes e isenta a diretoria e administradores de passivos jurídicos e civis.",
          "A Metalic Estruturas Metálicas desenvolve projetos integrados focados em durabilidade. Nossos materiais resistem a ambientes agressivos industriais e intempéries climáticas, com absorvedores de impacto eficientes."
        ],
        "bullets": [
          "Conformidade técnica com as normas NR-35, NR-18 e ABNT NBR 16325-1/2",
          "Ensaios não destrutivos com dinamômetro de tração em conformidade com critérios técnicos",
          "Book técnico contendo memorial de cálculo e ART de engenharia quando aplicável"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Projetos de Absorção de Impacto",
        "desc": "Instalação de absorvedores que dissipam a energia da queda, protegendo a estrutura predial."
      },
      {
        "title": "Laudo de arrancamento químico",
        "desc": "Ensaios de resistência de tração dos parafusos de ancoragem com dinamômetro digital conforme critérios aplicáveis."
      },
      {
        "title": "Apoio e Consultoria ao SESMT",
        "desc": "Facilitamos a integração com a equipe de medicina e segurança do trabalho interna."
      }
    ],
    "faq": [
      {
        "question": "Qual a validade legal de uma instalação de linha de vida?",
        "answer": "De acordo com as exigências e recomendações técnicas aplicáveis da norma NR-35, todos os sistemas de ancoragem e linhas de vida devem passar por uma inspeção técnica periódica para verificar o desgaste dos componentes, oxidação e torques de segurança."
      },
      {
        "question": "O que é a norma técnica ABNT NBR 16325?",
        "answer": "A NBR 16325 rege a fabricação, ensaios mecânicos e instalação de dispositivos de ancoragem de proteção contra quedas. Ela é dividida em classes (como Tipo A para ancoragens pontuais, e Tipo C para linhas de vida horizontais flexíveis sob cabos de aço)."
      },
      {
        "question": "Quem pode realizar a instalação e assinar a ART de uma linha de vida?",
        "answer": "Tanto a instalação quanto o projeto de dimensionamento mecânico e a inspeção técnica devem ser realizados por profissionais habilitados — engenheiros com registro ativo no conselho profissional competente, com emissão de ART quando aplicável."
      }
    ]
  },
  {
    "route": "/ponto-de-ancoragem-curitiba",
    "label": "Pontos de Ancoragem em Curitiba",
    "title": "Pontos de Ancoragem em Curitiba | Metalic Estruturas Metálicas",
    "metaDescription": "Soluções conforme NR-35 e critérios técnicos aplicáveis, testes estáticos com dinamômetro de tração e laudo de conformidade em Curitiba.",
    "h1": "Pontos de Ancoragem em Curitiba",
    "introduction": "Soluções conforme NR-35 e critérios técnicos aplicáveis, testes estáticos com dinamômetro de tração e laudo de conformidade em Curitiba.",
    "sections": [
      {
        "title": "Instalação de Pontos de Ancoragem Seguros e Certificados",
        "paragraphs": [
          "Os pontos de ancoragem prediais e industriais são vitais para conectar cinturões de segurança, talabartes e linhas de vida móveis. Realizar a lavagem de fachadas de condomínios ou a manutenção de vidraças sem pontos adequados expõe a gestão a riscos de responsabilidade jurídica.",
          "A Metalic Estruturas Metálicas projeta e instala pontos de ancoragem em concreto armado em toda a Região de Curitiba. Nossas fixações passam por ensaios não destrutivos de tração estática periódicos, acompanhados de relatórios técnicos e ART quando aplicável."
        ],
        "bullets": [
          "Conformidade técnica com os critérios aplicáveis da ABNT NBR 16325-1",
          "Ensaios não destrutivos com dinamômetro digital",
          "Book técnico e ART de Engenheiro de Segurança emitidos quando aplicável"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Resistência a intempéries",
        "desc": "Instalação de aço inoxidável AISI 316 resistente e adequado para intempéries."
      },
      {
        "title": "Testes estáticos de tração",
        "desc": "Verificação e aferição de tração nos anéis de ancoragem com dinamômetro digital de acordo com critérios aplicáveis."
      },
      {
        "title": "Laudos com ART",
        "desc": "Entrega completa do book técnico chancelado por engenheiro responsável com emissão de ART quando aplicável."
      }
    ],
    "faq": [
      {
        "question": "Qual a carga mínima exigida para um ponto de ancoragem no Brasil?",
        "answer": "Segundo as normas regulamentadoras e a ABNT NBR 16325, os dispositivos de ancoragem devem possuir capacidade de suportar a carga de ruptura mínima de 1.200 kgf (12 kN) para um usuário, ou 1.500 kgf (15 kN) para sistemas de acesso por corda."
      },
      {
        "question": "O teste de arrancamento estático é obrigatório para condomínios?",
        "answer": "Sim, conforme as exigências da NR-35 e legislações aplicáveis, os pontos de ancoragem devem passar por verificações e testes periódicos para certificar que a pastilha, concreto ou material de fixação não sofreu fadiga mecânica estrutural."
      },
      {
        "question": "O que é chumbamento químico na instalação de ancoragens?",
        "answer": "É a fixação de barras roscadas utilizando ampolas ou resinas químicas de injeção epóxi/vinilester. A reação química cria uma adesão monolítica com o concreto estrutural do edifício, sendo altamente indicada para materiais de fixação em concreto estrutural."
      }
    ]
  },
  {
    "route": "/manutencao-alpinismo",
    "label": "Manutenção por Alpinismo (Mãe)",
    "title": "Manutenção Industrial por Alpinismo | Metalic Estruturas Metálicas",
    "metaDescription": "Soluções ágeis e de alta segurança NR-35 em conservação de fachadas, limpezas técnicas de silos, soldagens e reparos industriais de difícil acesso.",
    "h1": "Manutenção Industrial por Alpinismo",
    "introduction": "Soluções ágeis e de alta segurança NR-35 em conservação de fachadas, limpezas técnicas de silos, soldagens e reparos industriais de difícil acesso.",
    "sections": [
      {
        "title": "Mantendo a Integridade Física da sua Planta Sem Paradas de Produção",
        "paragraphs": [
          "A integridade física de fachadas prediais, silos graneleiros e grandes tubulações industriais exige planos de manutenção periódicos minuciosos. Postergar esses serviços expõe o patrimônio da empresa a sérios danos estruturais, oxidações graves e riscos de quedas de materiais.",
          "Na Metalic Estruturas Metálicas, aplicamos a agilidade e a máxima segurança do acesso por corda (alpinismo industrial) para realizar manutenções corretivas e preventivas. Nossos técnicos intervêm de forma extremamente limpa, sem obstruir o fluxo rodoviário ou a logística do térreo."
        ],
        "bullets": [
          "Manutenção corretiva mecânica e hidráulica com técnicos certificados IRATA",
          "Vedação e hidrojateamento de fachadas de concreto e pele de vidro",
          "Projetos executados sem interrupção operacional na planta fabril"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Redução de Prazos",
        "desc": "A montagem rápida dos cabos permite início imediato do reparo técnico."
      },
      {
        "title": "Segurança de Acesso IRATA",
        "desc": "Técnicos liderados por supervisores N3 garantindo controle absoluto contra falhas."
      },
      {
        "title": "Book e Laudos Técnicos",
        "desc": "Fornecemos relatórios fotográficos minuciosos contendo ART de engenharia."
      }
    ],
    "faq": [
      {
        "question": "Como o alpinismo industrial otimiza os custos em paradas de fábrica?",
        "answer": "Durante paradas programadas de manutenção, cada hora inativa representa pesados prejuízos de caixa. O alpinismo industrial permite intervenções mecânicas em tempo recorde nas tubulações e estruturas elevadas, pois a equipe monta e desmonta as rotas de acesso em minutos, sem atrasar as outras disciplinas operacionais."
      },
      {
        "question": "Vocês realizam a limpeza mecânica interna de silos verticais de grãos?",
        "answer": "Sim. Nossos técnicos contam com treinamento completo de espaço confinado (NR-33) combinados às certificações de altura (NR-35), permitindo a desincrustação mecânica segura de farelos de grãos nas paredes internas de silos graneleiros verticais gigantes."
      }
    ]
  },
  {
    "route": "/manutencao-estrutura-metalica",
    "label": "Manutenção de Estruturas Metálicas",
    "title": "Manutenção & Pintura de Estruturas Metálicas | Metalic Estruturas Metálicas",
    "metaDescription": "Soldagem qualificada, jateamento abrasivo, hidrojateamento e pintura industrial por sistema airless em galpões, torres de telecomunicações e coberturas metálicas verticais.",
    "h1": "Manutenção & Pintura de Estruturas Metálicas",
    "introduction": "Soldagem qualificada, jateamento abrasivo, hidrojateamento e pintura industrial por sistema airless em galpões, torres de telecomunicações e coberturas metálicas verticais.",
    "sections": [
      {
        "title": "Protegendo Estruturas Metálicas Contra a Ação da Corrosão",
        "paragraphs": [
          "Galpões industriais, pórticos de rolamento, pipe racks e torres de telecomunicações sofrem degradação contínua provocada pela oxidação do aço. Sem planos de manutenção técnica rigorosos, a estrutura perde resistência mecânica e expõe a planta a sérios perigos de colapso físico.",
          "Na Metalic Estruturas Metálicas, aliamos a agilidade do acesso por corda a técnicas avançadas de pintura e preparação de superfícies ferrosas, estendendo a durabilidade do seu ativo industrial sem a necessidade de andaimes volumosos ou guindastes obstrutivos."
        ],
        "bullets": [
          "Soldagem industrial de precisão em locais de difícil acesso com ART e qualificação AWS/ASME",
          "Pintura protetiva por sistema airless com medição de espessura de película seca (EPS)",
          "Zero obstrução ou bloqueios na logística e tráfego terrestre da sua planta"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Garantia Estendida Antiferrugem",
        "desc": "Tratamentos duráveis sob a norma ISO 12944 que protegem a estrutura por muitos anos contra corrosão severa."
      },
      {
        "title": "Técnicos de Soldagem Qualificados",
        "desc": "Operadores certificados em processos de eletrodo revestido e MIG/TIG sob cordas com ART inclusa."
      },
      {
        "title": "Laudos de Inspeção e ART",
        "desc": "Fornecemos relatórios fotográficos com ART e diagramas de medição de espessura detalhados."
      }
    ],
    "faq": [
      {
        "question": "Como a Metalic Estruturas Metálicas executa soldagem elétrica e corte a quente (oxi-corte/lixadeira) em altura de forma segura e em conformidade com as normas?",
        "answer": "A execução de trabalho a quente sob cordas segue rigidamente as diretrizes da NR-35 e NR-34 (Trabalho a Quente). Todos os nossos alpinistas industriais soldadores são qualificados em conformidade com as normas AWS D1.1 e ASME Seção IX. Nosso rigoroso protocolo de segurança engloba o uso de cabos de segurança em aço para suspensão de máquinas de solda inversoras compactas, instalação de mantas de fibra de vidro antichamas (fire blankets) suspensas logo abaixo da área de soldagem para contenção total de fagulhas/pingos de solda quente, além de um técnico 'vigia' de incêndio permanentemente posicionado no piso térreo munido de extintores adequados de CO2 e pó químico."
      },
      {
        "question": "Quais sistemas de revestimento anticorrosivo e esquemas de pintura são especificados para a manutenção de estruturas metálicas industriais?",
        "answer": "Para garantir a máxima durabilidade contra oxidação severa em ambientes fabris agressivos, especificamos esquemas de pintura industrial de alto desempenho em conformidade com a norma ISO 12944. O processo padrão inclui a preparação mecânica da superfície até o padrão St3 por lixamento/agulhamento pneumático ou jateamento abrasivo ao metal quase branco Sa 2½, seguido da aplicação de uma demão de primer rico em zinco ou primer epóxi fosfato de zinco (espessura de película seca - EPS de 75 a 100 micrômetros) que funciona como barreira de proteção catódica ativa. O acabamento é executado com tinta esmalte poliuretano acrílico alifático (EPS de 50 a 70 micrômetros), que oferece altíssima resistência a raios ultravioleta (UV), intempéries e névoas salinas em ambientes costeiros industriais."
      },
      {
        "question": "Como é medido o controle de qualidade e a espessura da pintura em estruturas elevadas?",
        "answer": "O controle de qualidade pós-pintura é monitorado de perto por inspetores qualificados utilizando equipamentos digitais calibrados de alta precisão. Realizamos ensaios não destrutivos (END) de medição de espessura de película seca (EPS) com medidores magnéticos/eletromagnéticos digitais (conforme norma ABNT NBR 10443), mapeando m² por m² da estrutura para atestar que as camadas de epóxi e poliuretano alcançaram a micragem mínima exigida no plano de pintura técnica da montagem industrial. Os dados estatísticos de medição são consolidados em um relatório técnico fotográfico que acompanha o encerramento da obra e a emissão de ART (Anotação de Responsabilidade Técnica) pelo engenheiro responsável."
      },
      {
        "question": "Quais são as principais vantagens financeiras e operacionais de realizar a pintura de galpões e pipe racks por alpinismo industrial em comparação com andaimes ou plataformas (PTAs)?",
        "answer": "O acesso por cordas (alpinismo industrial) regulamentado pela NR-35 e certificado pela IRATA/ANEAC reduz em até 70% o custo logístico de montagem de andaimes ou locação de plataformas elevatórias articuladas telescópicas. Operacionalmente, a montagem e desmontagem das linhas de vida e ancoragens duram poucos minutos, liberando a estrutura no início e fim do dia sem obstruir o trânsito térreo de empilhadeiras, carretas e operários. Isso reduz drasticamente o downtime (tempo de parada de produção) do parque fabril e elimina o risco de colisões acidentais de maquinários contra as pernas de andaimes tradicionais."
      },
      {
        "question": "A Metalic Estruturas Metálicas realiza substituição de elementos metálicos estruturais deformados e aperto técnico de parafusos elevados?",
        "answer": "Sim. Executamos a substituição cirúrgica (retrofit estrutural) de contraventamentos, montantes, terças de telhado e vigas metálicas deformadas por fadiga de material ou colisão de empilhadeiras em altura. Nossas equipes realizam o escoramento temporário tático de carga com sistemas de vantagem mecânica de polias e talhas de corrente suspensas, efetuam o corte controlado do elemento danificado e a soldagem/parafusamento do novo perfil metálico. Também realizamos inspeção visual de ligações parafusadas de alta resistência e reaperto técnico de conexões com torquímetros de estalo digitais calibrados, garantindo o torque exato de projeto em conformidade com as normas estruturais brasileiras."
      },
      {
        "question": "Como garantir que a lavagem e hidrojateamento de estruturas elevadas não causem danos ou contaminação na planta industrial abaixo?",
        "answer": "Antes de qualquer lavagem técnica de estruturas ou telhados por hidrojateamento (com pressões de 3.000 a 5.000 PSI para remoção de fuligem, gorduras e contaminações salinas), nossa equipe executa um rigoroso plano de isolamento da área térrea. Instalamos contenções plásticas impermeáveis do tipo 'bacia' para reter o fluxo de águas residuais de lavagem, protegendo maquinários produtivos e painéis elétricos sensíveis posicionados abaixo da projeção de trabalho. Adicionalmente, utilizamos detergentes desengraxantes biodegradáveis neutros que não agridem o meio ambiente nem geram efluentes tóxicos ou corrosivos."
      }
    ]
  },
  {
    "route": "/manutencao-predial",
    "label": "Manutenção Predial (Fachadas e Vidros)",
    "title": "Manutenção Predial (Fachadas e Vidros) | Metalic Estruturas Metálicas",
    "metaDescription": "Manutenção Predial (Fachadas e Vidros) em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Manutenção Predial (Fachadas e Vidros)",
    "introduction": "Serviços técnicos e especializados de manutenção predial (fachadas e vidros) por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Manutenção Predial (Fachadas e Vidros) com Segurança e Excelência",
        "paragraphs": [
          "Infiltrações em fachadas deterioram a armadura metálica interna do concreto e estragam o acabamento dos apartamentos ou escritórios, depreciando severamente o valor do patrimônio do condomínio. A manutenção preventiva sistemática é a melhor ferramenta técnica para evitar custos astronômicos de reparação estrutural emergencial.",
          "A Metalic Estruturas Metálicas une o know-how da engenharia civil aos métodos mais rápidos e seguros de escalada industrial. Eliminamos as caras despesas com andaimes suspensos e balancins lentos, oferecendo agilidade incomparável e acabamentos perfeitos.",
          "Oferecemos um escopo operacional completo de engenharia e impermeabilização predial para corporações e condomínios residenciais.",
          "Não aplicamos tinta sobre fissuras ativas ou rebocos podres. Nosso processo segue a sequência técnica ideal de engenharia civil.",
          "Ao eliminar o trânsito e o balanço de cabos metálicos de balancins pesados nas garagens ou guaritas, preservamos integralmente o fluxo diário e garantimos privacidade absoluta contra intrusões de terceiros pelas janelas de moradores e escritórios corporativos.",
          "Instalações limpas, rápidas e sem barulhos contínuos de batidas de andaimes suspensos.",
          "Homologações e aplicação rigorosa dos processos e primers das maiores fabricantes de tintas.",
          "Sistemas de corda recolhidos integralmente todos os dias ao encerramento do horário de trabalho.",
          "Conecte-se com nosso engenheiro civil operacional e agende uma vistoria acústica gratuita para identificar anomalias estruturais antes do período de chuvas."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "01 Mapeamento Percussivo Acústico",
        "desc": "Nossos técnicos batem sistematicamente em cada m² de revestimento pastilhado ou cerâmico. O som oco indica descolamento e risco de queda de detritos."
      },
      {
        "title": "02 Tratamento de Fissuras e Juntas de Dilatação",
        "desc": "Abertura mecânica de trincas, selagem com mastique de poliuretano de alto fator de movimentação e aplicação de tela de poliéster estruturante."
      },
      {
        "title": "03 Aplicação de Hidrofugante e Seladores",
        "desc": "Aplicação de silano-siloxano invisível de alto poder hidrofóbico nas pastilhas, criando uma barreira invisível que repele a água sem alterar a cor original."
      }
    ],
    "faq": [
      {
        "question": "Qual a diferença entre lavagem técnica simples e descalcinação de vidros?",
        "answer": "A lavagem técnica simples remove a sujeira superficial acumulada por poeira. A descalcinação é um tratamento químico profundo que utiliza agentes levemente ácidos controlados para quebrar os depósitos minerais de cálcio e sílica cristalizados na superfície do vidro (manchas esbranquiçadas de chuva ácida), devolvendo a transparência cristalina original à vidraça."
      },
      {
        "question": "Como o alpinismo industrial protege o condomínio em relação a andaimes?",
        "answer": "Os andaimes tradicionais geram graves problemas de segurança patrimonial (risco de invasão por janelas), poluição visual, ruído constante e obstrução de garagens e jardins. O alpinismo por corda da Metalic Estruturas Metálicas elimina tudo isso. Ao final de cada expediente comercial, as cordas são recolhidas e guardadas em local fechado, assegurando isolamento total e privacidade absoluta para moradores e escritórios."
      },
      {
        "question": "A Metalic Estruturas Metálicas fornece ART para todos os serviços prediais?",
        "answer": "Sim. Todas as nossas obras prediais de pintura, restauração de pastilhas ou impermeabilização contam com emissão de ART (Anotação de Responsabilidade Técnica) chancelada por nosso engenheiro civil responsável, memorial fotográfico completo da execução de reparos e apólice ativa de seguro de Responsabilidade Civil Operacional."
      },
      {
        "question": "Com qual periodicidade é recomendável lavar ou restaurar a fachada?",
        "answer": "De acordo com as boas práticas de engenharia de manutenção, fachadas pastilhadas ou cerâmicas devem passar por lavagem técnica profunda a cada 2 anos para evitar incrustações severas. Já o teste de percussão e a recertificação de juntas de dilatação PU devem ser programados a cada 3 a 5 anos para evitar acidentes por desprendimento de reboco."
      }
    ]
  },
  {
    "route": "/manutencao-torre-eolica",
    "label": "Manutenção de Torres Eólicas",
    "title": "Manutenção de Torres Eólicas | Metalic Estruturas Metálicas",
    "metaDescription": "Manutenção de Torres Eólicas em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Manutenção de Torres Eólicas",
    "introduction": "Serviços técnicos e especializados de manutenção de torres eólicas por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Manutenção de Torres Eólicas com Segurança e Excelência",
        "paragraphs": [
          "Os aerogeradores operam sob condições climáticas extremas. A erosão de borda de ataque das pás e o acúmulo de óleo proveniente da nacelle não apenas diminuem a eficiência aerodinâmica (gerando perda real de receita diária), mas também causam desequilíbrios mecânicos severos que danificam o redutor e os rolamentos.",
          "A Metalic Estruturas Metálicas desenvolve e executa projetos de acesso por cordas customizados, mobilizando técnicos em tempo recorde para paradas programadas ou emergenciais. Oferecemos controle absoluto de processos com relatórios fotográficos detalhados de antes e depois.",
          "Conheça os detalhes e os materiais utilizados por nossos técnicos nas intervenções mais exigentes do mercado eólico.",
          "Substituir caros guindastes telescópicos por cordas redundantes reduz a burocracia, simplifica os processos contratuais de compras corporativas e melhora sensivelmente as metas de ESG com poluição sonora nula nas florestas eólicas.",
          "Supervisão constante com planos de emergência e resgate técnico preparados de forma ativa.",
          "Rastreabilidade e detecção precoce de bolhas ou delaminações microscópicas na estrutura.",
          "Equipes preparadas para paradas emergenciais pós-tempestades com tempestividade cirúrgica.",
          "Consulte rotas estaduais mantidas para orientar demandas de manutenção de torre eólica por região, sempre com avaliação técnica por escopo e viabilidade operacional.",
          "Conecte-se com nossa equipe e envie o memorial descritivo dos aerogeradores para receber um escopo técnico comercial completo."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Quais são as principais patologias encontradas em pás eólicas?",
        "answer": "As principais patologias incluem: erosão de borda de ataque (causada por chuva, granizo e partículas de poeira a altas velocidades), delaminação das camadas de fibra de vidro devido a esforços mecânicos extremos, trincas estruturais transversais causadas por fadiga de material e danos por raios (descargas atmosféricas) que queimam o receptor de proteção (receptor de SPDA) e as pontas das pás."
      },
      {
        "question": "Como o alpinismo industrial reduz o downtime em parques eólicos?",
        "answer": "Utilizar guindastes de grande porte ou plataformas suspensas exige janelas de vento extremamente restritas, alto custo logístico e tempo de montagem superior a 2 dias. Com o acesso por corda (alpinismo), nossos técnicos instalam ancoragens seguras em menos de 1 hora, operam em janelas de vento mais amplas de forma ágil, executam o trabalho e liberam a turbina para voltar a girar muito mais rápido, cortando custos operacionais de paradas em até 70%."
      },
      {
        "question": "A Metalic Estruturas Metálicas possui equipe capacitada em reparo de compósitos e SPDA?",
        "answer": "Sim. Nossos profissionais possuem qualificação técnica específica para reparo de compósitos avançados (fibra de vidro e carbono), além de medição de continuidade elétrica de sistemas de proteção contra descargas atmosféricas (SPDA) internos nas pás, assegurando que o sistema receptor de raios esteja 100% operacional antes da época de tempestades."
      },
      {
        "question": "Qual a cobertura geográfica da Metalic Estruturas Metálicas para atendimento eólico?",
        "answer": "Atendemos complexos eólicos em todo o território nacional, com ênfase nas principais regiões de geração do país, incluindo o litoral e interior do Nordeste, e parques no extremo Sul. Dispomos de contêineres oficinas completos móveis prontos para mobilização rápida."
      }
    ]
  },
  {
    "route": "/sistema-de-iluminacao",
    "label": "Instalação de Sistemas de Iluminação",
    "title": "Instalação de Sistemas de Iluminação de Alta Potência | Metalic Estruturas Metálicas",
    "metaDescription": "Iluminação arquitetônica monumental de fachadas, substituição de refletores de alta potência em chaminés e silos industriais por alpinismo industrial.",
    "h1": "Instalação de Sistemas de Iluminação de Alta Potência",
    "introduction": "Iluminação arquitetônica monumental de fachadas, substituição de refletores de alta potência em chaminés e silos industriais por alpinismo industrial.",
    "sections": [
      {
        "title": "Iluminando Fachadas e Torres com Segurança e Rapidez",
        "paragraphs": [
          "Substituir luminárias queimadas em torres de comunicação, silos gigantescos ou no topo de chaminés industriais exige o posicionamento de técnicos qualificados sob rigorosas diretrizes de eletricidade e altura.",
          "Na Metalic Estruturas Metálicas, aliamos a perícia do acesso por corda a eletricistas industriais certificados na NR-10 e NR-35. Projetamos passagens verticais de fiação blindadas, instalamos suportes metálicos de refletores LED e efetuamos comissionamento de sinalização noturna de segurança de aviação com total precisão."
        ],
        "bullets": [
          "Substituição ágil de refletores monumentais sem uso de guindastes",
          "Eletricistas industriais de altura qualificados na norma NR-10",
          "Instalação de balizamento noturno com acionamento fotoelétrico automatizado"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Mão de Obra Homologada",
        "desc": "Técnicos de acesso com NR-10 (Segurança em Eletricidade) e SEP atualizados."
      },
      {
        "title": "Isolamento Estanque de Cabos",
        "desc": "Instalações verticais resistentes a intempéries contínuas de chuva ácida."
      },
      {
        "title": "Emissão de Laudo e ART",
        "desc": "Laudos técnicos fotográficos e desenhos de diagramas unifilares inclusos."
      }
    ],
    "faq": [
      {
        "question": "Vocês realizam a iluminação cênica de fachadas monumentais de vidro?",
        "answer": "Sim. Executamos passagens de cabos de controle lógico de protocolo DMX512, installation de barras LED RGB de alto brilho e comissionamento remoto do sistema de programação de cores junto à gerência de facilities do cliente."
      },
      {
        "question": "Quais os cuidados de segurança da equipe de alpinistas elétricos?",
        "answer": "Todos os técnicos elétricos de altura contam com EPIs isolantes adequados para a atividade (cinturões de altura e mosquetões com isolação térmica e dielétrica), e trabalham obrigatoriamente após checagem por multímetro de ausência física de corrente nos circuitos."
      },
      {
        "question": "Quais são as principais normas regulamentadoras aplicadas a serviços de eletricidade em altura?",
        "answer": "Nossas operações combinam de forma rigorosa as conformidades da NR-10 (Segurança em Instalações e Serviços em Eletricidade) e da NR-35 (Trabalho em Altura). Todos os eletricistas alpinistas da Metalic Estruturas Metálicas possuem certificações ativas em ambas as normas federais brasileiras, além de treinamento em SEP (Sistema Elétrico de Potência) e procedimentos específicos de desenergização e segurança dielétrica."
      },
      {
        "question": "Como funciona a manutenção e substituição de sinalizadores noturnos de aviação (balizamento aéreo)?",
        "answer": "A manutenção de sinalizadores de obstáculos aéreos em chaminés e torres de transmissão segue as diretrizes do DECEA (Departamento de Controle do Espaço Aéreo) e ICA 63-19. Nossos técnicos realizam a troca de lâmpadas LED de alta durabilidade, calibração de sensores fotoelétricos automáticos e conferência do sistema de no-break backup, atestando a plena visibilidade noturna para segurança da aviação civil."
      },
      {
        "question": "Quais cuidados especiais são tomados no tracionamento vertical de cabos de força em grandes alturas?",
        "answer": "O tracionamento vertical de cabos elétricos blindados exige cálculos mecânicos precisos de alívio de tensão e peso próprio (catenária). Instalamos abraçadeiras de ancoragem estruturais (kellems / grips de tração) a intervals matemáticos calculados para evitar o cisalhamento ou estiramento interno do cobre, garantindo a integridade elétrica e durabilidade física a longo prazo."
      },
      {
        "question": "Vocês realizam a montagem de infraestrutura elétrica blindada à prova de explosão (Ex) em altura?",
        "answer": "Sim. Em ambientes industriais de alto risco (como indústrias químicas e petroquímicas), projetamos e instalamos eletrodutos pesados de aço galvanizado a fogo, caixas de passagem seladas à prova de explosão (Classificação Ex d / Ex e) e prensa-cabos certificados. Isso garante total estanqueidade elétrica contra gases inflamáveis ou pós explosivos em suspensão na atmosfera."
      },
      {
        "question": "Qual a vantagem do alpinismo industrial sobre guindastes e plataformas elevatórias telescópicas?",
        "answer": "A utilização de guindastes ou plataformas de lança telescópica exige bloqueio físico de vias térreas de logística industrial, tem alto custo diário de locação e restrições severas de ventania de segurança. O alpinismo industrial (acesso por corda) elimina todas as interdições de pátio, é imune a pequenas variações climáticas, permite acesso a geometrias que guindastes não alcançam e reduz o custo do projeto elétrico em até 70%."
      }
    ]
  },
  {
    "route": "/manutencao/manutencao-estrutura-metalica",
    "label": "Manutenção de Estrutura Metálica",
    "title": "Manutenção de Estrutura Metálica | Metalic Estruturas Metálicas",
    "metaDescription": "Manutenção de Estrutura Metálica em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Manutenção de Estrutura Metálica",
    "introduction": "Serviços técnicos e especializados de manutenção de estrutura metálica por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Manutenção de Estrutura Metálica com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza manutenção de estrutura metálica utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para manutenção de estrutura metálica?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/manutencao/inspecao-estrutural",
    "label": "Inspeção Estrutural",
    "title": "Inspeção Estrutural | Metalic Estruturas Metálicas",
    "metaDescription": "Inspeção Estrutural em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Inspeção Estrutural",
    "introduction": "Serviços técnicos e especializados de inspeção estrutural por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Inspeção Estrutural com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza inspeção estrutural utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para inspeção estrutural?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/manutencao/reparo-de-danos",
    "label": "Reparo de Danos",
    "title": "Reparo de Danos | Metalic Estruturas Metálicas",
    "metaDescription": "Reparo de Danos em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Reparo de Danos",
    "introduction": "Serviços técnicos e especializados de reparo de danos por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Reparo de Danos com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza reparo de danos utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para reparo de danos?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/manutencao/manutencao-preventiva",
    "label": "Manutenção Preventiva",
    "title": "Manutenção Preventiva | Metalic Estruturas Metálicas",
    "metaDescription": "Manutenção Preventiva em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Manutenção Preventiva",
    "introduction": "Serviços técnicos e especializados de manutenção preventiva por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Manutenção Preventiva com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza manutenção preventiva utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para manutenção preventiva?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/manutencao/limpeza-fachadas",
    "label": "Limpeza de Fachadas",
    "title": "Limpeza de Fachadas | Metalic Estruturas Metálicas",
    "metaDescription": "Limpeza de Fachadas em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Limpeza de Fachadas",
    "introduction": "Serviços técnicos e especializados de limpeza de fachadas por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Limpeza de Fachadas com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza limpeza de fachadas utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para limpeza de fachadas?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/manutencao/pintura-fachadas",
    "label": "Pintura de Fachadas",
    "title": "Pintura de Fachadas | Metalic Estruturas Metálicas",
    "metaDescription": "Pintura de Fachadas em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Pintura de Fachadas",
    "introduction": "Serviços técnicos e especializados de pintura de fachadas por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Pintura de Fachadas com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza pintura de fachadas utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para pintura de fachadas?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/manutencao/restauracao-fachadas",
    "label": "Restauração de Fachadas",
    "title": "Restauração de Fachadas | Metalic Estruturas Metálicas",
    "metaDescription": "Restauração de Fachadas em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Restauração de Fachadas",
    "introduction": "Serviços técnicos e especializados de restauração de fachadas por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Restauração de Fachadas com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza restauração de fachadas utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para restauração de fachadas?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/manutencao/limpeza-de-vidros",
    "label": "Limpeza de Vidros em Altura",
    "title": "Limpeza de Vidros em Altura | Metalic Estruturas Metálicas",
    "metaDescription": "Limpeza de Vidros em Altura em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Limpeza de Vidros em Altura",
    "introduction": "Serviços técnicos e especializados de limpeza de vidros em altura por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Limpeza de Vidros em Altura com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza limpeza de vidros em altura utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para limpeza de vidros em altura?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/manutencao/inspecao-predial",
    "label": "Inspeção Predial Completa",
    "title": "Inspeção Predial Completa | Metalic Estruturas Metálicas",
    "metaDescription": "Inspeção Predial Completa em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Inspeção Predial Completa",
    "introduction": "Serviços técnicos e especializados de inspeção predial completa por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Inspeção Predial Completa com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza inspeção predial completa utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para inspeção predial completa?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico-emergencial",
    "label": "Técnico Emergencial (Mãe)",
    "title": "Atendimento Técnico Emergencial em Altura | Metalic Estruturas Metálicas",
    "metaDescription": "Reparos urgentes 24 horas em grandes alturas e ambientes complexos. Soldagem estrutural emergencial, contenção física de pastilhas descoladas e vedações críticas de infiltrações.",
    "h1": "Atendimento Técnico Emergencial em Altura",
    "introduction": "Reparos urgentes 24 horas em grandes alturas e ambientes complexos. Soldagem estrutural emergencial, contenção física de pastilhas descoladas e vedações críticas de infiltrações.",
    "sections": [
      {
        "title": "Equipes Técnicas Táticas de Alpinismo de Prontidão 24 Horas",
        "paragraphs": [
          "Fissuras civis repentinas gerando infiltrações em servidores prediais, pastilhas cerâmicas descolando com per perigo iminente sobre pedestres ou quebras mecânicas em paradas de fábrica não esperadas exigem ações de resgate e reparo imediatos.",
          "Na Metalic Estruturas Metálicas, mantemos equipes de técnicos de acesso por corda de prontidão 24 horas. Nossos alpinistas são habilitados em soldagens certificadas, caldeiraria e contenções estruturais para intervir com máxima agilidade nas situações de estresse industrial."
        ],
        "bullets": [
          "Atendimento emergencial 24 horas por dia em toda a região Sul e Sudeste",
          "Contenção imediata de risco de queda de revestimentos em fachadas",
          "Soldagens mecânicas rápidas e reparos de dutos em paradas críticas"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Prontidão Total 24 Horas",
        "desc": "Equipes preparadas de plantão com carros de atendimento rápido carregados."
      },
      {
        "title": "Segurança Nível IRATA N3",
        "desc": "Supervisores experientes liderando os procedimentos rápidos de ancoragens."
      },
      {
        "title": "ART Inclusa na Ocorrência",
        "desc": "Emissão imediata de Anotação de Responsabilidade Técnica de segurança civil."
      }
    ],
    "faq": [
      {
        "question": "Qual o tempo médio de resposta de vocês nas principais capitais?",
        "answer": "Em Curitiba, Joinville, Florianópolis, Porto Alegre e nas regiões metropolitanas de São Paulo e Rio de Janeiro, mantemos um tempo de deslocamento tático emergencial de poucas horas pós-validação técnica inicial da gravidade da ocorrência pelo nosso engenheiro de plantão, garantindo rapidez para estancar riscos patrimoniais e civis."
      },
      {
        "question": "O atendimento tático emergencial em altura emite ART (Anotação de Responsabilidade Técnica)?",
        "answer": "Sim, obrigatoriamente. Toda intervenção técnica rápida ou contenção emergencial em altura executada pela Metalic Estruturas Metálicas conta com a emissão imediata de ART (Anotação de Responsabilidade Técnica) assinada e homologada por nossos engenheiros civis e mecânicos responsáveis, atendendo plenamente às normas do CREA."
      },
      {
        "question": "Como funciona a mobilização emergencial 24h para reparos industriais e civis?",
        "answer": "Nosso sistema de prontidão 24 horas inicia-se no instante do chamado via WhatsApp ou telefone. A engenharia realiza uma análise técnica imediata das imagens e relatórios da patologia estrutural e mobiliza a unidade móvel mais próxima. Nossos veículos utilitários rápidos são carregados de forma permanente com equipamentos de segurança redundantes, prontos para ação."
      },
      {
        "question": "Quais conformidades com a NR-35 e NR-33 são exigidas nessas operações rápidas?",
        "answer": "Seguimos à risca todas as diretrizes federais brasileiras. Nossas operações cumprem integralmente a NR-35 (Trabalho em Altura, em especial o Anexo I para acesso por cordas) e a NR-33 (Segurança em Espaços Confinados). Nossos alpinistas industriais possuem certificação internacional IRATA e nacional ANEAC, mantendo ancoragens redundantes ativas mesmo em atuações urgentes de alta pressão."
      },
      {
        "question": "Como a equipe atua em fachadas com risco de queda de pastilhas ou reboco?",
        "answer": "A equipe tática executa primeiro o isolamento físico da projeção vertical no solo para proteção de pedestres. Acessando a fachada por cordas duplas ancoradas de forma segura, os alpinistas realizam o batimento de choco (remoção manual de revestimento solto ou condenado) ou instalam preventivamente telas de contenção de alta tenacidade para mitigar qualquer risco de impacto físico no solo."
      },
      {
        "question": "Vocês prestam suporte para paradas de fábrica não planejadas e caldeiraria?",
        "answer": "Sim. Atendemos indústrias petroquímicas, metalúrgicas, cimentícias, alimentícias e silos graneleiros com serviços rápidos de caldeiraria em altura, soldagem estrutural certificada (SMAW/GMAW), reparo e selagem de dutos de exaustão rachados e desobstruções rápidas de tubulações de processo suspensas, minimizando os severos prejuízos operacionais causados por paradas não planejadas."
      },
      {
        "question": "Vocês possuem seguro para cobrir danos materiais imprevistos nas ocorrências?",
        "answer": "Sim. Todos os nossos serviços emergenciais, táticos e programados de alpinismo industrial contam com o respaldo de apólices de seguro de responsabilidade civil corporativas de alta cobertura, oferecendo total blindagem jurídica, patrimonial e tranquilidade financeira aos nossos parceiros comerciais."
      }
    ]
  },
  {
    "route": "/ambientes-confinados",
    "label": "Ambientes Confinados (NR-33)",
    "title": "Ambientes Confinados (NR-33) | Metalic Estruturas Metálicas",
    "metaDescription": "Ambientes Confinados (NR-33) em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Ambientes Confinados (NR-33)",
    "introduction": "Serviços técnicos e especializados de ambientes confinados (nr-33) por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Ambientes Confinados (NR-33) com Segurança e Excelência",
        "paragraphs": [
          "Os trabalhos em Espaços Confinados requerem um nível de supervisão militar e equipamentos de ponta. Atmosferas invisíveis, falta de oxigênio ou acúmulo de gases tóxicos são os maiores causadores de incidentes em indústrias nacionais.",
          "A Metalic Estruturas Metálicas oferece uma equipe completa de supervisores, vigias treinados e alpinistas qualificados em NR-33 e NR-35 para executar serviços de soldagem, reparos internos e limpeza de silos com monitoramento contínuo e exaustão técnica ativa.",
          "Cobrimos todas as etapas e requisitos legais para manter sua empresa protegida contra interdições trabalhistas e acidentes operacionais.",
          "Possuímos equipamentos homologados e testados antes de cada jornada operacional em canteiros de obra.",
          "Nossos supervisores não deixam nenhuma margem para o improviso. A segurança na entrada e a certeza da rota de fuga são validadas cientificamente.",
          "Fale com quem possui mais de 10 anos de experiência operacional livre de acidentes. Desenvolvemos o estudo e a ART do seu projeto."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "O que caracteriza um Espaço Confinado segundo a NR-33?",
        "answer": "Segundo a NR-33, espaço confinado é qualquer área ou ambiente não projetado para ocupação humana contínua, que possua meios limitados de entrada e saída, ventilação natural deficiente onde possam existir ou se formar atmosferas perigosas (gases tóxicos, asfixiantes ou inflamáveis) ou teor de oxigênio abaixo do nível ideal (19.5% a 23%). Exemplos comuns são silos, tanques de armazenamento, reatores, tubulações subterrâneas, caixas d'água e bueiros."
      },
      {
        "question": "Quais são as atribuições obrigatórias do Vigia e do Supervisor?",
        "answer": "O Supervisor de Entrada realiza as medições atmosféricas, preenche e assina a PET antes da entrada dos trabalhadores. O Vigia permanece obrigatoriamente do lado de fora do espaço confinado, mantendo contato visual ou via rádio direto com os trabalhadores, monitorando as condições de segurança e acionando o plano de resgate caso ocorra qualquer anomalia atmosférica ou desmaio de técnicos internos."
      },
      {
        "question": "Quais equipamentos são essenciais nas operações em espaços confinados da Metalic Estruturas Metálicas?",
        "answer": "Utilizamos detectores multigás calibrados periodicamente (medindo oxigênio, monóxido de carbono, gás sulfídrico e limites de explosividade), exaustores e insufladores axiais intrinsecamente seguros (à prova de explosão), tripés de resgate certificados com guinchos mecânicos de alavanca, cintos de segurança classe A, lanternas de cabeça EX e equipamentos de respiração autônoma de ar comprimido."
      },
      {
        "question": "Como a Metalic Estruturas Metálicas assegura a máxima mitigação de riscos nessas operações?",
        "answer": "Asseguramos o cumprimento impecável do protocolo de entrada: isolamento completo do local com bloqueio físico (etiquetagem LOTO), medições constantes de atmosfera e exaustão forçada. Nossa equipe é certificada e treinada exaustivamente para atuar sob pressão com planos de resgate pré-desenhados para remoção imediata dos operários sem que o vigia precise entrar no local de perigo."
      }
    ]
  },
  {
    "route": "/plataforma-de-petroleo",
    "label": "Plataformas de Petróleo (Offshore)",
    "title": "Alpinismo Industrial em Plataformas de Petróleo | Metalic Estruturas Metálicas",
    "metaDescription": "Inspeções de queimadores (flare tips), integridade de superestruturas, tratamento anticorrosivo de alta espessura e ensaios END com rigor total sob normas CBSP, HUET e IRATA.",
    "h1": "Alpinismo Industrial em Plataformas de Petróleo",
    "introduction": "Inspeções de queimadores (flare tips), integridade de superestruturas, tratamento anticorrosivo de alta espessura e ensaios END com rigor total sob normas CBSP, HUET e IRATA.",
    "sections": [
      {
        "title": "Acesso Vertical de Alta Performance sob Rígidas Normas Marítimas Internacionais",
        "paragraphs": [
          "As plataformas de petróleo (SS, FPSO e fixas) representam os ativos de engenharia mais complexos e hostis do planeta. A agressividade extrema do spray salino, a umidade oceânica constante e a presença de gases industriais aceleram drasticamente a oxidação em componentes críticos, tais como a torre de queima (flare boom), guias de risers, pontes de interligação e helipontos.",
          "Nossa divisão offshore é altamente qualificada e mobiliza engenheiros e técnicos com certificações internacionais IRATA N3, CBSP e HUET para intervir com agilidade e total isenção de risco. Realizamos soldagem industrial homologada AWS D1.1, caldeiraria fina de precisão, ensaios não destrutivos de integridade física e manutenções programadas de topo de mastro sem a necessidade de paradas operacionais custosas."
        ],
        "bullets": [
          "Técnicos com certificações internacionais CBSP, HUET e exames ASO Marítimo atualizados",
          "Inspeção, rigging e substituição assistida de ponteiras de flare (flare tips)",
          "Tratamento anticorrosivo em zonas de transição de risers sob a norma ISO 12944 CX",
          "Ensaios não-destrutivos por ultrassom e líquido penetrante sob as regras da ANP",
          "Montagem e operação de habitats de solda pressurizados com monitoramento LEL em áreas classificadas"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Seguros Offshore de Alta Cobertura",
        "desc": "Seguro de responsabilidade civil corporativo adaptado aos rígidos requisitos internacionais das petroleiras."
      },
      {
        "title": "Supervisão Permanente IRATA N3",
        "desc": "Plano de resgate desenhado sob medida e controle diário de riscos liderados por especialistas de nível máximo."
      },
      {
        "title": "Laudos com ART e Rastreabilidade",
        "desc": "Entrega de book técnico digitalizado contendo certificados de calibração, fotos macro/micro e laudos com ART/CREA."
      }
    ],
    "faq": [
      {
        "question": "Como as equipes efetuam a substituição de flare tips suspensas em plataformas?",
        "answer": "Utilizamos sistemas complexos de rigging de alta performance, compostos por polias mecânicas de liga leve, guinchos pneumáticos ou hidráulicos especiais e linhas de desvio temporárias. A substituição do queimador de alta tonelagem é realizada com controle milimétrico e redundância tripla de segurança, eliminando a necessidade de guindastes flutuantes pesados (heavy lift vessels)."
      },
      {
        "question": "Vocês atendem em plataformas operando em águas internacionais e em navegação?",
        "answer": "Sim. Nossas equipes possuem toda a documentação legal e médica de embarque internacional ativa (vacinação, passaporte, exames médicos marítimos específicos e certificações HUET/CBSP homologadas pela Marinha do Brasil), permitindo mobilização rápida para bacias oceânicas nacionais e águas internacionais."
      },
      {
        "question": "Quais as normas regulamentadoras federais que regem as atividades da Metalic Estruturas Metálicas a bordo?",
        "answer": "Operamos em estrita conformidade com a NR-37 (Segurança e Saúde em Plataformas de Petróleo), NR-35 (Trabalho em Altura), NR-33 (Espaço Confinado) e NR-34 (Trabalho a Quente), além das diretrizes internacionais da ANP e normas de controle de tráfego do DECEA para interligações aéreas."
      },
      {
        "question": "Como é feito o controle de estanqueidade em passagens de risers marítimos?",
        "answer": "Aplicamos tratamentos anticorrosivos e elastômeros selantes IP68 de altíssima performance química na zona de variação de maré (splash zone). Realizamos varreduras prévias e inspeção de integridade por ultrassom para detectar corrosão sob isolamento (CUI) ou fadigas localizadas na chapa."
      }
    ]
  },
  {
    "route": "/resgate-e-emergencia",
    "label": "Serviços de Resgate e Emergência",
    "title": "Serviços de Resgate e Emergência | Metalic Estruturas Metálicas",
    "metaDescription": "Serviços de Resgate e Emergência em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Serviços de Resgate e Emergência",
    "introduction": "Serviços técnicos e especializados de serviços de resgate e emergência por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Serviços de Resgate e Emergência com Segurança e Excelência",
        "paragraphs": [
          "Em atividades de trabalho em altura, não há espaço para improviso. Quando um colaborador sofre uma queda e fica inerte no cinturão de segurança, inicia-se um cronômetro médico crítico. A extração vertical deve ocorrer em poucos minutos para evitar sequelas permanentes decorrentes da asfixia postural e do choque ortostático.",
          "A Metalic Estruturas Metálicas conta com resgatistas certificados nos mais rigorosos padrões da escala mundial IRATA . Atuamos desenhando planos de emergência robustos, mapeando rotas tridimensionais e montando sistemas preventivos com as brigadas internas das indústrias.",
          "Oferecemos engenharia de salvamento consultiva e tática para garantir a mitigação máxima de riscos nas operações verticais de sua planta industrial.",
          "Conheça os diferenciais dos equipamentos e técnicas que aplicamos em cada operação de alto risco da Metalic Estruturas Metálicas.",
          "Ao transferir a prontidão técnica de resgate para nossa engenharia, você garante total blindagem contra multas severas e responsabilidades cíveis decorrentes de panes em trabalhos industriais e paradas operacionais complexas.",
          "Cordas, mosquetões e polias sob ensaios de impacto metalográfico e rastreabilidade rigorosa.",
          "Alinhamos perfeitamente nossos planos de escape às brigadas internas das indústrias parceiras.",
          "Conhecimento profundo de manipulação e contenção vascular pós-trauma de suspensão.",
          "Conecte-se com nossa coordenação de engenharia e envie o cronograma de paradas de sua planta para planejar simulados e resgates sem compromisso."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "01 Mitigação do Trauma de Suspensão Inerte",
        "desc": "O trabalhador suspenso após uma queda perde circulação nas pernas (choque ortostático). Nosso protocolo exige extração vertical completa em menos de 6 minutos para preservar a integridade vascular."
      },
      {
        "title": "02 Multiplicadores de Força Mecânicos 4:1 / 5:1",
        "desc": "Utilizamos sistemas avançados de polias auto-bloqueantes e blocantes que multiplicam a capacidade de içamento técnico. Isso permite extrair vítimas pesadas em espaço estreito com suavidade cirúrgica."
      },
      {
        "title": "03 Macas Envelope para Espaço Confinado",
        "desc": "Uso de macas envelope SKED rígidas e flexíveis que envolvem a vítima perfeitamente. Permitem içamentos em chaminés e silos estreitos tanto verticais quanto horizontais sem agravar lesões de coluna."
      }
    ],
    "faq": [
      {
        "question": "O que é o Trauma de Suspensão Inerte e por que ele é crítico?",
        "answer": "O trauma de suspensão inerte (síndrome do arnês) ocorre quando um trabalhador fica suspenso e imóvel no cinturão de segurança após sofrer uma queda. As alças do cinturão comprimem as veias femorais, impedindo o retorno do sangue das pernas para o coração e cérebro. Se a vítima permanecer inconsciente e suspensa por mais de 10 minutos, pode sofrer choque ortostático grave ou parada cardíaca. Por isso, nosso plano de resgate técnico foca em extração ágil abaixo de 6 minutos."
      },
      {
        "question": "Como a equipe de prontidão da Metalic Estruturas Metálicas atua em paradas de fábrica?",
        "answer": "Durante paradas de manutenção, instalamos preventivamente linhas de vida temporárias e sistemas multiplicadores de força com polias auto-bloqueantes nos pontos críticos em altura. Nossos técnicos permanecem paramentados e posicionados na entrada da zona quente. Caso ocorra um acidente ou mal súbito, realizamos o resgate imediato e iniciamos o suporte básico de vida antes mesmo do acionamento dos bombeiros civis locais."
      },
      {
        "question": "Os técnicos de resgate possuem treinamento de APH avançado?",
        "answer": "Sim. Nossos resgatistas possuem formação rigorosa em APH (Atendimento Pré-Hospitalar) focado em grandes traumas verticais, manuseio de desfibrilador externo automático (DEA), oxigenioterapia e técnicas especiais de remoção espinhal em espaços confinados (NR-33)."
      },
      {
        "question": "A Metalic Estruturas Metálicas emite ART para os planos e simulados de resgate?",
        "answer": "Sim. Todos os planos de resgate técnico, diagramas tridimensionais de escape e laudos pós-simulados são chancelados por nossa engenharia civil de segurança do trabalho com a emissão imediata da correspondente ART (Anotação de Responsabilidade Técnica)."
      }
    ]
  },
  {
    "route": "/estruturas-temporarias",
    "label": "Estruturas Temporárias (Andaimes/Redes)",
    "title": "Montagem de Estruturas Temporárias & Andaimes | Metalic Estruturas Metálicas",
    "metaDescription": "Projetos e montagens de andaimes suspensos (balancins), passarelas de manutenção provisórias e redes de proteção contra quedas em grandes canteiros.",
    "h1": "Montagem de Estruturas Temporárias & Andaimes",
    "introduction": "Projetos e montagens de andaimes suspensos (balancins), passarelas de manutenção provisórias e redes de proteção contra quedas em grandes canteiros.",
    "sections": [
      {
        "title": "Acesso Seguro para Grandes Obras Civis",
        "paragraphs": [
          "Muitas manutenções pesadas de fachadas prediais ou montagens mecânicas industriais exigem plataformas suspensas temporárias estáveis. Planejar e montar andaimes suspensos ou passarelas provisórias com total segurança exige engenharia de cálculo estrutural apurada.",
          "Na Metalic Estruturas Metálicas, entregamos soluções completas: calculamos a distribuição de forças mecânicas nos apoios superiores da laje, montamos contra-pesos calibrados de fixação e instalamos redes de proteção contra detritos com agilidade de acesso por cordas."
        ],
        "bullets": [
          "Montagem tática de andaimes suspensos leves e pesados (balancins manuais/elétricos)",
          "Instalação de redes de proteção contra quedas de objetos e operários (padrão NR-18)",
          "Montagem de passarelas e plataformas suspensas temporárias em treliças",
          "Sistemas de linhas de vida temporárias e pontos de ancoragem certificados para trabalhos rápidos",
          "Cálculo detalhado de distribuição de cargas na estrutura de apoio com emissão de ART de montagem e desmonte"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Plena Conformidade com NR-18",
        "desc": "Cumprimos rigorosamente todos os capítulos de plataformas suspensas de obras."
      },
      {
        "title": "Inspeções Diárias Estritas",
        "desc": "Os supervisores efetuam checagem mecânica de freios manuais e elétricos."
      },
      {
        "title": "Mobilização em Poucas Horas",
        "desc": "Desmobilizamos toda a logística estrutural rapidamente sem bagunça no térreo."
      }
    ],
    "faq": [
      {
        "question": "Qual a diferença entre a ancoragem do cabo de tração e a ancoragem do cabo de trava-quedas?",
        "answer": "A norma NR-18 exige expressamente a independência total de ancoragem. O cabo de sustentação/movimentação do andaime suspensa fica preso em uma estrutura, enquanto o cabo trava-quedas secundário de segurança do operador fica ancorado em D-Ring químico totalmente separado, garantindo segurança redundante absoluta em caso de rompimento mecânico do cabo primário."
      },
      {
        "question": "Vocês realizam a montagem de coberturas temporárias para galpões?",
        "answer": "Sim. Realizamos instalação de estruturas de lona tensionada provisória, permitindo que as atividades internas continuem protegidas da chuva durante as reformas de telhados."
      }
    ]
  },
  {
    "route": "/tecnico/manutencao-tanques",
    "label": "Manutenção de Tanques",
    "title": "Manutenção de Tanques | Metalic Estruturas Metálicas",
    "metaDescription": "Manutenção de Tanques em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Manutenção de Tanques",
    "introduction": "Serviços técnicos e especializados de manutenção de tanques por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Manutenção de Tanques com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza manutenção de tanques utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para manutenção de tanques?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/servicos-em-dutos",
    "label": "Serviços em Dutos",
    "title": "Serviços em Dutos | Metalic Estruturas Metálicas",
    "metaDescription": "Serviços em Dutos em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Serviços em Dutos",
    "introduction": "Serviços técnicos e especializados de serviços em dutos por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Serviços em Dutos com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza serviços em dutos utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para serviços em dutos?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/trabalho-em-silos",
    "label": "Trabalho em Silos",
    "title": "Trabalho em Silos | Metalic Estruturas Metálicas",
    "metaDescription": "Trabalho em Silos em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Trabalho em Silos",
    "introduction": "Serviços técnicos e especializados de trabalho em silos por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Trabalho em Silos com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza trabalho em silos utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para trabalho em silos?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/limpeza-caixa-d-agua",
    "label": "Limpeza de Caixa d'Água",
    "title": "Limpeza de Caixa d'Água | Metalic Estruturas Metálicas",
    "metaDescription": "Limpeza de Caixa d'Água em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Limpeza de Caixa d'Água",
    "introduction": "Serviços técnicos e especializados de limpeza de caixa d'água por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Limpeza de Caixa d'Água com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza limpeza de caixa d'água utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para limpeza de caixa d'água?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/pintura-revestimento",
    "label": "Pintura e Revestimento",
    "title": "Pintura e Revestimento | Metalic Estruturas Metálicas",
    "metaDescription": "Pintura e Revestimento em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Pintura e Revestimento",
    "introduction": "Serviços técnicos e especializados de pintura e revestimento por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Pintura e Revestimento com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza pintura e revestimento utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para pintura e revestimento?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/limpeza-industrial",
    "label": "Limpeza Industrial",
    "title": "Limpeza Industrial | Metalic Estruturas Metálicas",
    "metaDescription": "Limpeza Industrial em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Limpeza Industrial",
    "introduction": "Serviços técnicos e especializados de limpeza industrial por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Limpeza Industrial com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza limpeza industrial utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para limpeza industrial?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/reparos-estruturais",
    "label": "Reparos Estruturais",
    "title": "Reparos Estruturais | Metalic Estruturas Metálicas",
    "metaDescription": "Reparos Estruturais em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Reparos Estruturais",
    "introduction": "Serviços técnicos e especializados de reparos estruturais por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Reparos Estruturais com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza reparos estruturais utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para reparos estruturais?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/operacoes-resgate-altura",
    "label": "Operações de Resgate em Altura",
    "title": "Operações de Resgate em Altura | Metalic Estruturas Metálicas",
    "metaDescription": "Operações de Resgate em Altura em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Operações de Resgate em Altura",
    "introduction": "Serviços técnicos e especializados de operações de resgate em altura por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Operações de Resgate em Altura com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza operações de resgate em altura utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para operações de resgate em altura?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/atendimento-emergencias",
    "label": "Atendimento a Emergências",
    "title": "Atendimento a Emergências | Metalic Estruturas Metálicas",
    "metaDescription": "Atendimento a Emergências em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Atendimento a Emergências",
    "introduction": "Serviços técnicos e especializados de atendimento a emergências por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Atendimento a Emergências com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza atendimento a emergências utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para atendimento a emergências?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/treinamento-resgate",
    "label": "Treinamento de Resgate",
    "title": "Treinamento de Resgate | Metalic Estruturas Metálicas",
    "metaDescription": "Treinamento de Resgate em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Treinamento de Resgate",
    "introduction": "Serviços técnicos e especializados de treinamento de resgate por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Treinamento de Resgate com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza treinamento de resgate utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para treinamento de resgate?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/montagem-andaimes",
    "label": "Montagem de Andaimes",
    "title": "Montagem de Andaimes | Metalic Estruturas Metálicas",
    "metaDescription": "Montagem de Andaimes em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Montagem de Andaimes",
    "introduction": "Serviços técnicos e especializados de montagem de andaimes por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Montagem de Andaimes com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza montagem de andaimes utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para montagem de andaimes?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/desmontagem-estruturas",
    "label": "Desmontagem de Estruturas",
    "title": "Desmontagem de Estruturas | Metalic Estruturas Metálicas",
    "metaDescription": "Desmontagem de Estruturas em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Desmontagem de Estruturas",
    "introduction": "Serviços técnicos e especializados de desmontagem de estruturas por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Desmontagem de Estruturas com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza desmontagem de estruturas utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para desmontagem de estruturas?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/instalacao-palcos-estruturas-eventos",
    "label": "Instalação de Palcos e Estruturas para Eventos",
    "title": "Instalação de Palcos e Estruturas para Eventos | Metalic Estruturas Metálicas",
    "metaDescription": "Instalação de Palcos e Estruturas para Eventos em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Instalação de Palcos e Estruturas para Eventos",
    "introduction": "Serviços técnicos e especializados de instalação de palcos e estruturas para eventos por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Instalação de Palcos e Estruturas para Eventos com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza instalação de palcos e estruturas para eventos utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para instalação de palcos e estruturas para eventos?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/limpeza-pas-estruturas",
    "label": "Limpeza de Pás e Estruturas Eólicas",
    "title": "Limpeza de Pás e Estruturas Eólicas | Metalic Estruturas Metálicas",
    "metaDescription": "Limpeza de Pás e Estruturas Eólicas em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Limpeza de Pás e Estruturas Eólicas",
    "introduction": "Serviços técnicos e especializados de limpeza de pás e estruturas eólicas por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Limpeza de Pás e Estruturas Eólicas com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza limpeza de pás e estruturas eólicas utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para limpeza de pás e estruturas eólicas?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/pintura-tratamento-anticorrosivo",
    "label": "Pintura e Tratamento Anticorrosivo",
    "title": "Pintura e Tratamento Anticorrosivo | Metalic Estruturas Metálicas",
    "metaDescription": "Pintura e Tratamento Anticorrosivo em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Pintura e Tratamento Anticorrosivo",
    "introduction": "Serviços técnicos e especializados de pintura e tratamento anticorrosivo por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Pintura e Tratamento Anticorrosivo com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza pintura e tratamento anticorrosivo utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para pintura e tratamento anticorrosivo?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/tecnico/colagem-adesivos-sinalizacao",
    "label": "Colagem de Adesivos e Sinalização",
    "title": "Colagem de Adesivos e Sinalização | Metalic Estruturas Metálicas",
    "metaDescription": "Colagem de Adesivos e Sinalização em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Colagem de Adesivos e Sinalização",
    "introduction": "Serviços técnicos e especializados de colagem de adesivos e sinalização por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Colagem de Adesivos e Sinalização com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza colagem de adesivos e sinalização utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para colagem de adesivos e sinalização?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/industrial/instalacao-iluminacao-altura",
    "label": "Instalação de Iluminação em Altura",
    "title": "Instalação de Iluminação em Altura | Metalic Estruturas Metálicas",
    "metaDescription": "Instalação de Iluminação em Altura em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Instalação de Iluminação em Altura",
    "introduction": "Serviços técnicos e especializados de instalação de iluminação em altura por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Instalação de Iluminação em Altura com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza instalação de iluminação em altura utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para instalação de iluminação em altura?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/industrial/manutencao-sistemas-iluminacao",
    "label": "Manutenção de Sistemas de Iluminação",
    "title": "Manutenção de Sistemas de Iluminação | Metalic Estruturas Metálicas",
    "metaDescription": "Manutenção de Sistemas de Iluminação em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Manutenção de Sistemas de Iluminação",
    "introduction": "Serviços técnicos e especializados de manutenção de sistemas de iluminação por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Manutenção de Sistemas de Iluminação com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza manutenção de sistemas de iluminação utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para manutenção de sistemas de iluminação?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/industrial/modernizacao-sistemas-iluminacao",
    "label": "Modernização de Iluminação Vertical",
    "title": "Modernização de Iluminação Vertical | Metalic Estruturas Metálicas",
    "metaDescription": "Modernização de Iluminação Vertical em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Modernização de Iluminação Vertical",
    "introduction": "Serviços técnicos e especializados de modernização de iluminação vertical por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Modernização de Iluminação Vertical com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza modernização de iluminação vertical utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para modernização de iluminação vertical?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/construcao-especiais",
    "label": "Construção e Especiais (Mãe)",
    "title": "Alpinismo Industrial na Construção & Projetos Especiais | Metalic Estruturas Metálicas",
    "metaDescription": "Soluções táticas de engenharia civil em locais de acesso extremo. Retrofit monumental, recuperação de silo graneleiro e intervenções verticais sob demanda.",
    "h1": "Alpinismo Industrial na Construção & Projetos Especiais",
    "introduction": "Soluções táticas de engenharia civil em locais de acesso extremo. Retrofit monumental, recuperação de silo graneleiro e intervenções verticais sob demanda.",
    "sections": [
      {
        "title": "Acesso Inteligente para Grandes Desafios de Engenharia",
        "paragraphs": [
          "Existem estruturas cujas dimensões ou complexidade geométrica inviabilizam o uso de métodos de acesso convencionais. Silos graneleiros verticais gigantescos, pontes estaiadas monumentais, cúpulas de vidro e chaminés de refinarias exigem soluções de alpinismo industrial de engenharia sofisticada.",
          "Na Metalic Estruturas Metálicas, superamos barreiras estruturais desenhando planos de rigging e acesso sob medida. Nossos técnicos contam com equipamentos especiais de tração pneumática e cabos táticos, garantindo intervenções limpas e rápidas em qualquer altura."
        ],
        "bullets": [
          "Mão de obra versátil e qualificada em múltiplas disciplinas civis e mecânicas",
          "Inspeções térmicas e monitoramento de vibração estrutural",
          "Redução de custos operacionais e eliminação de andaimes pesados"
        ]
      }
    ],
    "benefits": [
      {
        "title": "ART Inclusa sem Exceção",
        "desc": "Todo o escopo do projeto, laudo técnico de conformidade e montagem acompanha ART."
      },
      {
        "title": "Segurança de Acesso IRATA N3",
        "desc": "Todos os canteiros possuem supervisores experientes gerenciando as ancoragens."
      },
      {
        "title": "Flexibilidade Geométrica",
        "desc": "Acessamos qualquer geometria arquitetônica ou ângulo vertical complexo."
      }
    ],
    "faq": [
      {
        "question": "Como a Metalic Estruturas Metálicas gerencia o risco em fachadas inclinadas ou pele de vidro?",
        "answer": "Em fachadas com inclinação acentuada ou coberturas de vidro delicadas, instalamos pórticos de distribuição de carga mecânica e utilizamos sistemas de desvio de cabos (re-anchors). Isso impede qualquer atrito das cordas nas esquadrias ou superfícies de vidro frágeis, preservando a edificação de danos."
      },
      {
        "question": "Vocês realizam a vedação estrutural de fendas e infiltrações monumentais?",
        "answer": "Sim. Executamos aplicação de poliuretano expandido, mantas asfálticas de alto desempenho e selantes elastômeros de cura rápida para solucionar infiltrações e intempéries complexas."
      },
      {
        "question": "Como funciona o desenvolvimento de planos de rigging e acesso para projetos monumentais?",
        "answer": "Para cada desafio de alta complexidade geométrica (como chaminés industriais, silos gigantes ou pontes estaiadas), nossa equipe de engenheiros seniores desenvolve um plano de rigging de acesso completo. Realizamos a modelagem tridimensional de esforços físicos, o cálculo matemático de tensões sobre as ancoragens estruturais e a determinação de coeficientes de segurança redundantes, atendendo plenamente à norma ABNT NBR 16325."
      },
      {
        "question": "É seguro utilizar alpinismo industrial em retrofits de edifícios com pele de vidro e painéis solares?",
        "answer": "Sim, perfeitamente seguro e altamente recomendado. Ao contrário de andaimes ou plataformas pesadas que exercem pressões concentradas sobre o solo e risco de colisão física contra a fachada, o alpinismo industrial utiliza linhas de vida de desvio tático (re-anchors) e protetores de corda antiatrito. A aproximação física do técnico é extremamente controlada e suave, protegendo totalmente esquadrias, vidros laminados e painéis fotovoltaicos de qualquer impacto ou avaria."
      },
      {
        "question": "Qual a capacitação necessária da equipe de alpinistas industriais para atuar em projetos especiais civis?",
        "answer": "Nossos técnicos não são apenas escaladores qualificados, mas sim profissionais certificados no grau máximo internacional IRATA (Nível 1, 2 e N3) com especializações técnicas paralelas: soldadores qualificados ASME, montadores de estruturas certificados, técnicos de inspeção por ultrassom (END) e especialistas em recuperação de concreto de fachadas e silos. Toda a equipe passa por constantes reciclagens em nosso centro de treinamento."
      },
      {
        "question": "Como é executada a recuperação civil interna e impermeabilização de silos graneleiros verticais gigantes?",
        "answer": "A intervenção interna em silos graneleiros (considerados espaços confinados) é uma das nossas especialidades de alta complexidade. Operamos sob rígida conformidade com a NR-33 e NR-35. Realizamos hidrojateamento de alta pressão para desincrustação, remoção de contaminações biológicas das paredes de concreto, reparo estrutural de trincas com grautes especiais e aplicação de selantes elastoméricos atóxicos adequados para estocagem segura de grãos."
      },
      {
        "question": "Quais documentos técnicos de engenharia são fornecidos ao final de uma obra especial em altura?",
        "answer": "Ao final de cada intervenção, entregamos um dossiê completo de engenharia (o As-Built da obra), que compreende: relatório fotográfico minucioso antes/depois da intervenção, laudo de integridade física estrutural assinado por engenheiro legalmente habilitado, certificados de calibração de todos os instrumentos de ensaio utilizados e a Anotação de Responsabilidade Técnica (ART) registrada junto ao CREA."
      }
    ]
  },
  {
    "route": "/alpinismo-industrial/construcao-civil",
    "label": "Alpinismo na Construção Civil",
    "title": "Alpinismo Industrial na Construção Civil | Metalic Estruturas Metálicas",
    "metaDescription": "Soluções de engenharia de acesso vertical de alta performance para construtoras, retrofit de fachadas prediais, tratamento de patologias de concreto e instalações prediais complexas em conformidade com as normas NR-18 e NR-35.",
    "h1": "Alpinismo Industrial na Construção Civil",
    "introduction": "Soluções de engenharia de acesso vertical de alta performance para construtoras, retrofit de fachadas prediais, tratamento de patologias de concreto e instalações prediais complexas em conformidade com as normas NR-18 e NR-35.",
    "sections": [
      {
        "title": "Otimização Logística e Mitigação Máxima de Riscos em Obras Verticais",
        "paragraphs": [
          "O alpinismo industrial revolucionou as frentes de trabalho da construção civil moderna ao otimizar a logística vertical nos canteiros de obras. Ao substituir os andaimes convencionais pesados e as custosas plataformas elevatórias por ancoragens temporárias de alta resistência, o acesso por cordas reduz o tempo de montagem operacional em até 80%, diminuindo drasticamente os custos indiretos de construtoras, incorporadoras e condomínios.",
          "Na Metalic Estruturas Metálicas, nossa atuação une a precisão cirúrgica de técnicas de escalada assistida ao profundo conhecimento de engenharia civil diagnóstica. Nossa equipe de especialistas está plenamente qualificada para intervir em fachadas ativas sob a chancela das diretrizes de segurança da NR-18 e NR-35, realizando levantamentos de manifestações patológicas estruturais, recomposições profundas de reboco, tratamento de corrosão de armaduras de aço e instalação de infraestruturas técnicas complexas em grandes alturas."
        ],
        "bullets": [
          "Eliminação total do custo elevado de montagem, travamento e locação de andaimes de fachadas",
          "Técnicos especialistas qualificados com dupla habilitação: construção civil e certificação IRATA",
          "Projetos de Rigging detalhados e cálculo de distribuição de cargas na estrutura com ART de execução",
          "Isenção de interferência no tráfego térreo da obra, mantendo o canteiro limpo, seguro e desobstruído"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Responsabilidade Civil Geral e Técnica",
        "desc": "Apólice robusta de seguro contra eventuais danos materiais e corporais causados a terceiros durante a movimentação vertical no canteiro."
      },
      {
        "title": "Mão de Obra de Dupla Qualificação",
        "desc": "Nossos pintores, pedreiros e eletricistas prediais possuem dupla qualificação obrigatória: civil técnica e certificação oficial de acesso por cordas."
      },
      {
        "title": "Projetos de Rigging e Ancoragem",
        "desc": "Modelagem matemática das cargas aplicadas aos postes de fixação temporários ou permanentes, certificando conformidade estrita à NBR 16325."
      }
    ],
    "faq": [
      {
        "question": "Como é feita a ancoragem dos técnicos em edifícios que ainda estão em fase inicial de construção ou em obras antigas?",
        "answer": "Em edifícios novos, integramos nossas linhas de trabalho aos pontos de ancoragem definitivos de projeto que obrigatoriamente seguem a norma NBR 16325. Em obras existentes ou retrofits sem dispositivos instalados, nosso engenheiro projetista instala sistemas de fixação química temporária à base de epóxi ou chumbadores mecânicos parabolts em vigas e lajes estruturais de concreto armado da cobertura. Todos os pontos sofrem ensaio físico de arrancamento estático com dinamômetro digital de alta precisão e recebem ART específica antes da descida do primeiro técnico."
      },
      {
        "question": "A Metalic Estruturas Metálicas assume a responsabilidade civil e jurídica pelas atividades civis em altura?",
        "answer": "Sim. Emitimos formalmente a ART (Anotação de Responsabilidade Técnica) pelo CREA-PR referente a toda atividade de execução mecânica executada por nossos alpinistas na fachada. Além disso, possuímos uma apólice ativa de seguro de Responsabilidade Civil Geral focada em alpinismo industrial, que resguarda a construtora contratante contra danos materiais causados no térreo ou a edifícios adjacentes, oferecendo total blindagem cível, trabalhista e tributária."
      },
      {
        "question": "Como são gerenciados os canteiros onde há operações concomitantes de gruas ou ventos severos?",
        "answer": "A segurança é uma ciência exata de mitigação de riscos. Em canteiros dinâmicos, definimos uma zona de exclusão terrestre delimitada com isolamentos físicos rígidos e redes de contenção. A movimentação vertical de alpinistas é coordenada diretamente com os operadores de gruas e minigruas por rádio transmissor em frequência dedicada. Para condições climáticas, nosso supervisor IRATA Nível 3 mantém um anemômetro ativo em tempo real; caso os ventos ultrapassem 40 km/h ou haja iminência de precipitação severa ou raios, a operação é imediatamente abortada e a equipe evacuada sob o protocolo de segurança padrão."
      },
      {
        "question": "Quais normas e portarias federais regulam e validam o alpinismo industrial na construção civil?",
        "answer": "A atividade é regulamentada de forma rigorosa pela NR-35 (Trabalho em Altura - Anexo I) e pela NR-18 (Segurança e Saúde no Trabalho na Indústria da Construção). O anexo I da NR-35 valida e detalha a certificação obrigatória do trabalhador para acesso por cordas, o uso de duas cordas independentes (linha de trabalho e linha de segurança/vida), os sistemas de conexões antiquedas e a obrigatoriedade de supervisão em tempo real. A Metalic Estruturas Metálicas segue estritamente estas portarias federais, além de operar sob a diretriz internacional IRATA."
      },
      {
        "question": "Como a eliminação de andaimes pesados beneficia a velocidade da obra e o fluxo no entorno da edificação?",
        "answer": "Andaimes de fachada exigem semanas de montagem, causam transtornos logísticos de circulação do canteiro, cobrem as saídas de emergência e expõem a edificação a riscos de invasão. O alpinismo industrial elimina essa infraestrutura. Nossos técnicos ativam suas cordas nas ancoragens de topo, executam o trabalho de forma silenciosa e, ao final do expediente, removem e guardam todo o equipamento. Isso reduz a obstrução térrea a zero, acelera o cronograma global da obra em até 3x e blinda o condomínio contra invasões criminosas."
      },
      {
        "question": "Como é feita a remoção de pastilhas soltas e revestimentos com risco de queda?",
        "answer": "Executamos a limpeza de fachada por percussão controlada. Equipados com martelos de teste específicos, nossos alpinistas realizam a varredura tática de todo o revestimento cerâmico. O som oco (cavo) delata a falta de aderência do tardoz da pastilha à argamassa base. As seções condenadas são removidas cirurgicamente sob telas acopladas aos alpinistas para conter qualquer fragmento e, em seguida, as pastilhas novas são recolocadas com argamassa colante AC-III cinza de secagem rápida tolerante à umidade, restabelecendo a perfeita estética e estanqueidade."
      },
      {
        "question": "A Metalic Estruturas Metálicas fornece memorial de cálculo e book técnico ao final do serviço de retrofit predial?",
        "answer": "Sim, entregamos o Data Book Técnico completo da obra. Esse documento reúne as fichas de rastreabilidade RFID de todos os conectores e cabos de aço empregados, o laudo fotográfico antes/depois das patologias corrigidas, os relatórios de arrancamento dos parabolts químicos, o cronograma real medido de progresso, a apólice de seguro empregada, as licenças de descarte ecológico dos resíduos civis, a ART do CREA e o certificado de garantia técnica da restauração de fachada por 5 anos contra infiltrações."
      }
    ]
  },
  {
    "route": "/alpinismo-industrial-pontes-viadutos",
    "label": "Inspeções de Pontes e Viadutos",
    "title": "Inspeção, Recuperação e Reforço de Pontes e Viadutos (OAE) | Metalic Estruturas Metálicas",
    "metaDescription": "Engenharia de acesso por corda de alta performance para Obras de Arte Especiais. Diagnósticos não destrutivos de carbonatação, ensaios de esclerometria, recuperação de armaduras e reforço estrutural com fibras de carbono (CFRP) sob normas ABNT NBR 9452 e DNIT.",
    "h1": "Inspeção, Recuperação e Reforço de Pontes e Viadutos (OAE)",
    "introduction": "Engenharia de acesso por corda de alta performance para Obras de Arte Especiais. Diagnósticos não destrutivos de carbonatação, ensaios de esclerometria, recuperação de armaduras e reforço estrutural com fibras de carbono (CFRP) sob normas ABNT NBR 9452 e DNIT.",
    "sections": [
      {
        "title": "Acesso por Cordas de Alta Precisão sob Tabuleiros e Encontros",
        "paragraphs": [
          "Pontes, viadutos e passarelas (Obras de Arte Especiais - OAE) estão sob constante ação de carregamento dinâmico cíclico e severas agressões ambientais. Realizar vistorias periódicas e recuperações pontuais no intradosso dos tabuleiros e nas faces dos pilares elevados exige métodos operacionais ágeis para evitar a interdição parcial ou total das rodovias e ferrovias.",
          "Na Metalic Estruturas Metálicas, implementamos soluções avançadas de acesso tático por cordas, permitindo que nossos engenheiros e técnicos realizem ensaios não destrutivos e intervenções corretivas pesadas. Com equipe IRATA Nível 3, alcançamos pilares e encontros suspensos de forma rápida e segura, eliminando o custo proibitivo de montagem de andaimes ou plataformas flutuantes."
        ],
        "bullets": [
          "Zero obstrução de tráfego rodoviário ou ferroviário durante as intervenções",
          "Diagnósticos preventivos e ensaios físicos em total conformidade com a ABNT NBR 9452",
          "Reforço mecânico de vigas e pilares de concreto armado com tecidos de fibra de carbono (CFRP)"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Segurança de Acesso Certificada",
        "desc": "Técnicos IRATA Nível 3 supervisionando a ancoragem com redundância total de linhas."
      },
      {
        "title": "Preservação da Mobilidade",
        "desc": "Os trabalhos ocorrem abaixo do tabuleiro da ponte sem bloquear o fluxo diário de veículos."
      },
      {
        "title": "Laudos Conclusivos Completos",
        "desc": "Entregamos relatórios detalhados com mapeamento térmico estrutural e ART."
      }
    ],
    "faq": [
      {
        "question": "Como a Metalic Estruturas Metálicas realiza vistorias e intervenções em OAEs sobre rios ou vales profundos sem o uso de andaimes?",
        "answer": "Nossos técnicos utilizam sistemas de acesso por corda de alta performance, estabelecendo ancoragens redundantes e linhas de vida temporárias diretamente a partir do tabuleiro superior ou das vigas de apoio. Isso permite a movimentação tridimensional rápida sob o intradosso do tabuleiro e faces externas dos pilares, eliminando a necessidade de balsas, andaimes suspensos ou plataformas flutuantes, mesmo sobre corpos d'água ou abismos."
      },
      {
        "question": "Quais normas técnicas regulamentam as vistorias, ensaios e laudos emitidos para Obras de Arte Especiais?",
        "answer": "Todas as nossas inspeções estruturais e relatórios de conformidade seguem estritamente a norma ABNT NBR 9452 (Inspeção de pontes, viadutos e passarelas de concreto) e as diretrizes do DNIT (Manual de Inspeção de OAE) e DER. Classificamos os danos e manifestações patológicas em graus de urgência técnica, garantindo plena validade técnica e jurídica para concessionárias e órgãos públicos."
      },
      {
        "question": "O que é a carbonatação do concreto e qual ensaio em altura é realizado para detectá-la?",
        "answer": "A carbonatação ocorre quando o CO₂ atmosférico reage com os compostos hidratados do cimento, reduzindo o pH do concreto (de ~12.5 para menos de 9), o que despassiva a armadura de aço e inicia a corrosão. Nossos escaladores realizam ensaios colorimétricos in loco por aspersão de uma solução indicadora de fenolftaleína em seções expostas do concreto. A mudança de cor para rosa-carmim identifica a zona alcalina (saudável), enquanto a ausência de cor delimita a profundidade da carbonatação."
      },
      {
        "question": "Como a Metalic Estruturas Metálicas mitiga o impacto das vibrações dinâmicas ativas (tráfego de veículos) na cura de materiais estruturais?",
        "answer": "A execução de reparos sob carregamento dinâmico cíclico exige o uso de tecnologias de pega ultrarrápida e alta tixotropia. Aplicamos argamassas poliméricas de alto desempenho modificadas com microssílica e resinas epóxi estruturais com transição de gel acelerada. Além disso, utilizamos sistemas de ancoragem e escoramentos de amortecimento dinâmico ativo para garantir estabilidade absoluta do composto até a sua cura inicial, sem paralisar o tráfego da OAE."
      },
      {
        "question": "Qual é o respaldo legal e de responsabilidade civil (CREA/ART) oferecido nos laudos e obras executados?",
        "answer": "Toda intervenção, ensaio destrutivo ou não destrutivo, e mapeamento de patologias é supervisionado por engenheiros de estruturas de concreto e OAE. Emitimos a devida Anotação de Responsabilidade Técnica (ART) registrada no CREA (Conselho Regional de Engenharia e Agronomia) competente. Adicionalmente, nossas operações são cobertas por apólices de seguro de responsabilidade civil profissional de alto valor securitário."
      },
      {
        "question": "Como é executada a reabilitação em zonas de concreto com armadura exposta e delaminação estrutural?",
        "answer": "O processo segue fases técnicas rigorosas: delimitação da área com corte de disco diamantado, escarificação para remoção do concreto delaminado, limpeza abrasiva do aço exposto até o padrão comercial SA-2.5, aplicação de primer rico em zinco para passivação galvânica do aço e, por fim, recomposição volumétrica com microconcreto estrutural fluido ou argamassa tixotrópica polimérica de alta resistência estrutural (fck > 40 MPa)."
      },
      {
        "question": "Qual é a vantagem financeira e logística do alpinismo industrial em relação a andaimes convencionais e treliças suspensas?",
        "answer": "O acesso por cordas reduz os custos operacionais e de mobilização em até 80%. Não há necessidade de montagem de canteiros volumosos, interdições duradouras de faixas de rolamento ou custos adicionais com logística de sinalização pesada. Enquanto andaimes convencionais exigem dias para montagem e desmontagem, nossos especialistas ativam os acessos em minutos diariamente, acelerando o cronograma global da obra em até 4 vezes."
      }
    ]
  },
  {
    "route": "/navios-embarcacoes-trabalho-embarcado",
    "label": "Navios e Trabalho Embarcado (Naval)",
    "title": "Alpinismo Industrial Offshore & Naval | Metalic Estruturas Metálicas",
    "metaDescription": "Serviços embarcados de caldeiraria classe A, pintura marítima homologada CX, ensaios de END e inspeções estruturais em navios, FPSO e plataformas.",
    "h1": "Alpinismo Industrial Offshore & Naval",
    "introduction": "Serviços embarcados de caldeiraria classe A, pintura marítima homologada CX, ensaios de END e inspeções estruturais em navios, FPSO e plataformas.",
    "sections": [
      {
        "title": "Performance Técnica nos Cenários Mais Severos da Indústria Naval e Offshore",
        "paragraphs": [
          "Operar em embarcações de grande porte, navios cargueiros, petroleiros e FPSOs exige o mais alto nível de conformidade de segurança e excelência em acesso por cordas. A atmosfera marítima altamente agressiva (C5/CX) acelera drasticamente a corrosão em cascos, tanques de lastro, chaminés de exaustão e guindastes de convés.",
          "Na Metalic Estruturas Metálicas, nossa divisão de serviços embarcados naval e offshore combina técnicos qualificados IRATA/HUET (CBSP) habilitados a realizar intervenções de caldeiraria estrutural, soldagem homologada AWS D1.1/ASME IX e medição de espessura de chapas (END) sob total rigor regulatório, inclusive com a embarcação em navegação ou fundeada em alto-mar."
        ],
        "bullets": [
          "Técnicos com credenciais internacionais CBSP, HUET e exames ASO Marítimo/Marinha",
          "Tratamento de superfície padrão St3/Sa2.5 e hidrojateamento de ultra-alta pressão",
          "Pintura tática com primers epóxi de alta espessura tolerantes a umidade sob a norma ISO 12944 CX",
          "Ensaios não destrutivos de espessura (END) com emissão de book técnico e ART"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Credenciamento ISPS Code",
        "desc": "Equipes devidamente credenciadas e homologadas para acesso rápido a portos e terminais alfandegados."
      },
      {
        "title": "Segurança Absoluta IRATA N3",
        "desc": "Supervisores de salvamento e resgate dedicados em tempo integral na supervisão de cada descida vertical."
      },
      {
        "title": "Conformidade com MARPOL",
        "desc": "Garantimos conformidade total com as normas internacionais de controle de poluição e descarte de efluentes no mar."
      }
    ],
    "faq": [
      {
        "question": "Como a equipe de alpinismo atua com segurança no costado do navio flutuando?",
        "answer": "Utilizamos sistemas avançados de posicionamento de corda, incluindo desvios de cabo (re-anchors) e linhas de vida horizontais tensionadas. Isso impede que os ventos constantes e o balanço do mar afastem o operador da chapa de costado. Além disso, as embarcações utilizam botes ou plataformas infláveis de apoio."
      },
      {
        "question": "Vocês realizam a limpeza de tanques de carga e espaço confinado a bordo?",
        "answer": "Sim. Nossas equipes possuem treinamentos federais em dia para a norma NR-33 (Espaço Confinado), utilizando explosímetros para medição de gases inflamáveis, sistemas de ventilação mecânica forçada, tripés de resgate rápidos e iluminação estanque à prova de explosão (Ex) para intervir em tanques de lastro ou carga."
      },
      {
        "question": "Quais são as exigências médicas para os alpinistas marítimos embarcarem?",
        "answer": "Todos os nossos operadores possuem exames ASO específicos e exames de saúde física navais homologados. Também portam vacinações internacionais exigidas pela ANVISA e os certificados CBSP (Curso Básico de Segurança de Plataforma) e HUET (Escape de Helicóptero Submerso) válidos."
      },
      {
        "question": "Vocês atendem em portos fora do Paraná para embarques urgentes?",
        "answer": "Sim. Atendemos com mobilização rápida nos principais portos e terminais do Brasil (Santos, Paranaguá, Itajaí, Rio Grande, Rio de Janeiro e Vitória). Cuidamos de todos os trâmites alfandegários para a emissão de crachás portuários provisórios em tempo recorde."
      }
    ]
  },
  {
    "route": "/equipamentos-especiais-em-altura",
    "label": "Equipamentos Especiais em Altura",
    "title": "Equipamentos Especiais & Sensores em Altura | Metalic Estruturas Metálicas",
    "metaDescription": "Instalação de antenas de comunicação, sensores meteorológicos industriais, câmeras de CFTV e sistemas de cabeamento estruturado vertical de difícil acesso.",
    "h1": "Equipamentos Especiais & Sensores em Altura",
    "introduction": "Instalação de antenas de comunicação, sensores meteorológicos industriais, câmeras de CFTV e sistemas de cabeamento estruturado vertical de difícil acesso.",
    "sections": [
      {
        "title": "Acesso de Precisão para Tecnologia Industrial",
        "paragraphs": [
          "Modernizar complexos fabris exige a instalação de sensores inteligentes, câmeras e antenas nos pontos mais altos das plantas — silos, chaminés e topos de edifícios industriais. Utilizar plataformas elevatórias ou guindastes para realizar fixações leves é financeiramente inviável.",
          "A Metalic Estruturas Metálicas une técnica tática de acesso por corda com o conhecimento eletrônico e mecânico para instalar e alinhar sensores de vibração, antenas parabólicas e cabeamento de rede estruturado com total velocidade."
        ],
        "bullets": [
          "Instalação rápida de antenas de rádio, Wi-Fi industrial e parabólicas",
          "Passagem vertical de cabos ópticos e elétricos em poços técnicos",
          "Inspeção e substituição de balizamentos noturnos no topo de chaminés"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Técnicos com Dupla Aptidão",
        "desc": "Técnicos especialistas em telecom e elétrica com certificados de acesso por cordas."
      },
      {
        "title": "Preservação da Infraestrutura",
        "desc": "Instalamos suportes não-invasivos que evitam corrosão nas estruturas originais."
      },
      {
        "title": "Prontidão ágil",
        "desc": "Avanço e desmobilização rápidos sem bloquear a circulação do térreo do cliente."
      }
    ],
    "faq": [
      {
        "question": "Vocês realizam a passagem de cabos elétricos de para-raios (SPDA)?",
        "answer": "Sim. Realizamos inspeção visual, passagens de cabos de descida de cobre nu ou estanhado e substituição de captores (para-raios Franklin) em chaminés e silos industriais de difícil acesso."
      },
      {
        "question": "Como é feito o manuseio de equipamentos sensíveis sob corda?",
        "answer": "Utilizamos mochilas térmicas impermeáveis e mochilas de lona rígidas especiais de tracionamento técnico. O equipamento desce preso por linhas secundárias dedicadas de segurança, impedindo qualquer impacto mecânico durante a progressão."
      }
    ]
  },
  {
    "route": "/poda-e-tratamento-de-arvores",
    "label": "Poda e Tratamento de Árvores Gigantes",
    "title": "Poda Tática & Tratamento de Árvores Gigantes | Metalic Estruturas Metálicas",
    "metaDescription": "Poda em altura por arboristas qualificados, corte controlado de galhos com perigo de queda sobre telhados, e tratamentos táticos de conservação florestal.",
    "h1": "Poda Tática & Tratamento de Árvores Gigantes",
    "introduction": "Poda em altura por arboristas qualificados, corte controlado de galhos com perigo de queda sobre telhados, e tratamentos táticos de conservação florestal.",
    "sections": [
      {
        "title": "Acesso Especializado em Copas e Galhos de Grande Porte",
        "paragraphs": [
          "Árvores monumentais centenárias, pinheiros de grande altura e copas com perigo de desabamento sobre redes elétricas exigem intervenções de técnicos qualificados em arboricultura urbana. Cortar ou podar esses gigantes de forma descuidada expõe telhados, pedestres e fiações a sérios acidentes.",
          "Na Metalic Estruturas Metálicas, aplicamos as técnicas do alpinismo em árvores (arborismo profissional). Nossos profissionais são treinados em escalada tática em troncos e posicionamento de cordas dinâmicas, garantindo o corte segmentado com descida controlada por cordas."
        ],
        "bullets": [
          "Corte tático e segmentado por roldanas com descida amortecida de galhos pesados",
          "Poda de conformidade técnica para liberação de linhas de transmissão elétricas",
          "Inspeções de fitossanidade com diagnóstico de apodrecimento interno do tronco"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Técnicos Arboristas Treinados",
        "desc": "Equipe com qualificação nas melhores práticas de escalada arborícola segura."
      },
      {
        "title": "Zero Dano Patrimonial",
        "desc": "Técnicas de amortecimento de queda por freios mecânicos portáteis táticos."
      },
      {
        "title": "Laudos de Corte Legal",
        "desc": "Elaboramos documentação exigida por órgãos ambientais prediais municipais."
      }
    ],
    "faq": [
      {
        "question": "Vocês possuem autorização legal para realizar o corte completo de árvores?",
        "answer": "A supressão total de uma árvore exige autorização prévia por escrito da Secretaria de Meio Ambiente do município (SMMA). A Metalic Estruturas Metálicas elabora o laudo técnico fitossanitário assinado por engenheiro florestal/agrônomo para dar entrada na licença de corte e, após a liberação da prefeitura, executa a supressão segura."
      },
      {
        "question": "O que é a técnica de cabling e quando ela é indicada?",
        "answer": "O cabling é a instalação de tirantes e cabos flexíveis de poliéster ou aço de alta resistência no topo da copa de árvores bifurcadas. Indicamos essa técnica quando o tronco central apresenta trincas e corre o risco de rachar ao meio durante tempestades, permitindo sustentar a copa de forma flexível sem precisar suprimir a árvore."
      }
    ]
  },
  {
    "route": "/especiais/alpinismo-industrial-construcao-civil",
    "label": "Alpinismo na Construção Civil (Especial)",
    "title": "Alpinismo na Construção Civil (Especial) | Metalic Estruturas Metálicas",
    "metaDescription": "Alpinismo na Construção Civil (Especial) em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Alpinismo na Construção Civil (Especial)",
    "introduction": "Serviços técnicos e especializados de alpinismo na construção civil (especial) por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Alpinismo na Construção Civil (Especial) com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza alpinismo na construção civil (especial) utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para alpinismo na construção civil (especial)?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/reforco-estrutural-reparos-altura",
    "label": "Reforço Estrutural e Reparos em Altura",
    "title": "Reforço Estrutural e Reparos em Altura | Metalic Estruturas Metálicas",
    "metaDescription": "Reforço Estrutural e Reparos em Altura em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Reforço Estrutural e Reparos em Altura",
    "introduction": "Serviços técnicos e especializados de reforço estrutural e reparos em altura por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Reforço Estrutural e Reparos em Altura com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza reforço estrutural e reparos em altura utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para reforço estrutural e reparos em altura?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/inspecao-estrutural-pontes-viadutos",
    "label": "Inspeção Estrutural de Pontes e Viadutos",
    "title": "Inspeção Estrutural de Pontes e Viadutos | Metalic Estruturas Metálicas",
    "metaDescription": "Inspeção Estrutural de Pontes e Viadutos em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Inspeção Estrutural de Pontes e Viadutos",
    "introduction": "Serviços técnicos e especializados de inspeção estrutural de pontes e viadutos por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Inspeção Estrutural de Pontes e Viadutos com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza inspeção estrutural de pontes e viadutos utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para inspeção estrutural de pontes e viadutos?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/reparos-reforcos-estruturais",
    "label": "Reparos e Reforços Estruturais em OAE",
    "title": "Reparos e Reforços Estruturais em OAE | Metalic Estruturas Metálicas",
    "metaDescription": "Reparos e Reforços Estruturais em OAE em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Reparos e Reforços Estruturais em OAE",
    "introduction": "Serviços técnicos e especializados de reparos e reforços estruturais em oae por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Reparos e Reforços Estruturais em OAE com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza reparos e reforços estruturais em oae utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para reparos e reforços estruturais em oae?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/limpeza-conservacao",
    "label": "Limpeza Técnica e Conservação de Pontes",
    "title": "Limpeza Técnica e Conservação de Pontes | Metalic Estruturas Metálicas",
    "metaDescription": "Limpeza Técnica e Conservação de Pontes em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Limpeza Técnica e Conservação de Pontes",
    "introduction": "Serviços técnicos e especializados de limpeza técnica e conservação de pontes por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Limpeza Técnica e Conservação de Pontes com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza limpeza técnica e conservação de pontes utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para limpeza técnica e conservação de pontes?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/manutencao-superestruturas-navios",
    "label": "Manutenção de Superestruturas de Navios",
    "title": "Manutenção de Superestruturas de Navios | Metalic Estruturas Metálicas",
    "metaDescription": "Manutenção de Superestruturas de Navios em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Manutenção de Superestruturas de Navios",
    "introduction": "Serviços técnicos e especializados de manutenção de superestruturas de navios por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Manutenção de Superestruturas de Navios com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza manutenção de superestruturas de navios utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para manutenção de superestruturas de navios?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/limpeza-pintura-casco",
    "label": "Limpeza e Pintura de Casco",
    "title": "Limpeza e Pintura de Casco | Metalic Estruturas Metálicas",
    "metaDescription": "Limpeza e Pintura de Casco em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Limpeza e Pintura de Casco",
    "introduction": "Serviços técnicos e especializados de limpeza e pintura de casco por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Limpeza e Pintura de Casco com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza limpeza e pintura de casco utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para limpeza e pintura de casco?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/instalacao-equipamentos-nauticos",
    "label": "Instalação de Equipamentos Náuticos",
    "title": "Instalação de Equipamentos Náuticos | Metalic Estruturas Metálicas",
    "metaDescription": "Instalação de Equipamentos Náuticos em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Instalação de Equipamentos Náuticos",
    "introduction": "Serviços técnicos e especializados de instalação de equipamentos náuticos por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Instalação de Equipamentos Náuticos com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza instalação de equipamentos náuticos utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para instalação de equipamentos náuticos?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/antenas-sistemas-comunicacao",
    "label": "Antenas e Sistemas de Comunicação",
    "title": "Antenas e Sistemas de Comunicação | Metalic Estruturas Metálicas",
    "metaDescription": "Antenas e Sistemas de Comunicação em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Antenas e Sistemas de Comunicação",
    "introduction": "Serviços técnicos e especializados de antenas e sistemas de comunicação por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Antenas e Sistemas de Comunicação com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza antenas e sistemas de comunicação utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para antenas e sistemas de comunicação?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/sensores-equipamentos-meteorologicos",
    "label": "Sensores e Equipamentos Meteorológicos",
    "title": "Sensores e Equipamentos Meteorológicos | Metalic Estruturas Metálicas",
    "metaDescription": "Sensores e Equipamentos Meteorológicos em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Sensores e Equipamentos Meteorológicos",
    "introduction": "Serviços técnicos e especializados de sensores e equipamentos meteorológicos por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Sensores e Equipamentos Meteorológicos com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza sensores e equipamentos meteorológicos utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para sensores e equipamentos meteorológicos?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/sistemas-seguranca-cameras",
    "label": "Sistemas de Segurança e Câmeras",
    "title": "Sistemas de Segurança e Câmeras | Metalic Estruturas Metálicas",
    "metaDescription": "Sistemas de Segurança e Câmeras em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Sistemas de Segurança e Câmeras",
    "introduction": "Serviços técnicos e especializados de sistemas de segurança e câmeras por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Sistemas de Segurança e Câmeras com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza sistemas de segurança e câmeras utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para sistemas de segurança e câmeras?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/remocao-galhos-perigosos",
    "label": "Remoção de Galhos Perigosos",
    "title": "Remoção de Galhos Perigosos | Metalic Estruturas Metálicas",
    "metaDescription": "Remoção de Galhos Perigosos em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Remoção de Galhos Perigosos",
    "introduction": "Serviços técnicos e especializados de remoção de galhos perigosos por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Remoção de Galhos Perigosos com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza remoção de galhos perigosos utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para remoção de galhos perigosos?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/corte-raizes",
    "label": "Corte de Raízes Invasoras",
    "title": "Corte de Raízes Invasoras | Metalic Estruturas Metálicas",
    "metaDescription": "Corte de Raízes Invasoras em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Corte de Raízes Invasoras",
    "introduction": "Serviços técnicos e especializados de corte de raízes invasoras por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Corte de Raízes Invasoras com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza corte de raízes invasoras utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para corte de raízes invasoras?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/tratamento-fitossanitario",
    "label": "Tratamento Fitossanitário",
    "title": "Tratamento Fitossanitário | Metalic Estruturas Metálicas",
    "metaDescription": "Tratamento Fitossanitário em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Tratamento Fitossanitário",
    "introduction": "Serviços técnicos e especializados de tratamento fitossanitário por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Tratamento Fitossanitário com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza tratamento fitossanitário utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para tratamento fitossanitário?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/medicao-espessura",
    "label": "Medição de Espessura em Altura",
    "title": "Medição de Espessura em Altura | Metalic Estruturas Metálicas",
    "metaDescription": "Medição de Espessura em Altura em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Medição de Espessura em Altura",
    "introduction": "Serviços técnicos e especializados de medição de espessura em altura por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Medição de Espessura em Altura com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza medição de espessura em altura utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para medição de espessura em altura?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/ultrassom-industrial",
    "label": "Inspeção por Ultrassom Industrial",
    "title": "Inspeção por Ultrassom Industrial | Metalic Estruturas Metálicas",
    "metaDescription": "Inspeção por Ultrassom Industrial em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Inspeção por Ultrassom Industrial",
    "introduction": "Serviços técnicos e especializados de inspeção por ultrassom industrial por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Inspeção por Ultrassom Industrial com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza inspeção por ultrassom industrial utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para inspeção por ultrassom industrial?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/termografia",
    "label": "Termografia de Sistemas Elétricos",
    "title": "Termografia de Sistemas Elétricos | Metalic Estruturas Metálicas",
    "metaDescription": "Termografia de Sistemas Elétricos em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Termografia de Sistemas Elétricos",
    "introduction": "Serviços técnicos e especializados de termografia de sistemas elétricos por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Termografia de Sistemas Elétricos com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza termografia de sistemas elétricos utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para termografia de sistemas elétricos?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/registro-atividades",
    "label": "Registro de Atividades de Alpinismo",
    "title": "Registro de Atividades de Alpinismo | Metalic Estruturas Metálicas",
    "metaDescription": "Registro de Atividades de Alpinismo em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Registro de Atividades de Alpinismo",
    "introduction": "Serviços técnicos e especializados de registro de atividades de alpinismo por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Registro de Atividades de Alpinismo com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza registro de atividades de alpinismo utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para registro de atividades de alpinismo?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/monitoramento-seguranca",
    "label": "Monitoramento Ativo de Segurança",
    "title": "Monitoramento Ativo de Segurança | Metalic Estruturas Metálicas",
    "metaDescription": "Monitoramento Ativo de Segurança em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Monitoramento Ativo de Segurança",
    "introduction": "Serviços técnicos e especializados de monitoramento ativo de segurança por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Monitoramento Ativo de Segurança com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza monitoramento ativo de segurança utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para monitoramento ativo de segurança?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/especiais/relatorios-tecnicos",
    "label": "Emissão de Relatórios Técnicos",
    "title": "Emissão de Relatórios Técnicos | Metalic Estruturas Metálicas",
    "metaDescription": "Emissão de Relatórios Técnicos em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Emissão de Relatórios Técnicos",
    "introduction": "Serviços técnicos e especializados de emissão de relatórios técnicos por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Emissão de Relatórios Técnicos com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza emissão de relatórios técnicos utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para emissão de relatórios técnicos?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/seguranca-em-altura",
    "label": "Segurança em Altura (Consultoria SESMT)",
    "title": "Segurança em Altura (Consultoria SESMT) | Metalic Estruturas Metálicas",
    "metaDescription": "Segurança em Altura (Consultoria SESMT) em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Segurança em Altura (Consultoria SESMT)",
    "introduction": "Serviços técnicos e especializados de segurança em altura (consultoria sesmt) por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Segurança em Altura (Consultoria SESMT) com Segurança e Excelência",
        "paragraphs": [
          "Diagnósticos estruturais, ensaios não-destrutivos e laudos sob a égide da NR-35. Proteção integral para a sua planta, facilities e reputação corporativa.",
          "Histórico impecável de sinistralidade devido ao planejamento rigoroso das atividades.",
          "Equipe formada por Supervisores IRATA N3 e engenheiros de segurança do trabalho.",
          "Todos os projetos verticais acompanham laudo assinado com responsabilidade técnica.",
          "A segurança de uma linha de vida ou ponto de ancoragem química não pode ser estimada no visual. Na Metalic Estruturas Metálicas, aplicamos ensaios não-destrutivos e testes mecânicos computadorizados in loco para certificar a integridade física de cada fixador em altura.",
          "Operamos sob o mais rígido conjunto de normas nacionais para garantir segurança jurídica e operacional.",
          "Estabelece os requisitos mínimos de proteção para o trabalho em altura, envolvendo o planejamento, organização e execução das atividades operacionais por cordas.",
          "Rege o trabalho em espaços confinados, cobrindo os planos de emergência e resgate necessários para a manutenção segura de tanques, galerias e silos.",
          "ABNT que define as diretrizes de projeto e calibração de ancoragens, garantindo que os tirantes resistam a testes mecânicos de arrancamento de até 12kN.",
          "Nenhum alpinista industrial da Metalic Estruturas Metálicas sobe sem antes haver um memorial de cálculos aprovado e revisado por engenheiros de segurança do trabalho habilitados. Desenhamos a rota do acesso, calculamos o fator de queda ideal e projetamos as melhores linhas de ancoragem.",
          "Esclareça suas principais dúvidas técnicas e legais de conformidade operacional.",
          "Fale diretamente com nossa diretoria de engenharia de segurança operacional. Desenvolvemos o estudo prévio da sua fachada, torre eólica ou planta industrial."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Qual a responsabilidade civil do gestor corporativo em acidentes em altura?",
        "answer": "Conforme o Código Civil Brasileiro e a legislação trabalhista, o tomador de serviços responde de forma solidária e subsidiária em acidentes de trabalho. Contratar prestadores sem treinamento adequado, sem EPIs testados ou sem a emissão das documentações da NR-35 constitui negligência jurídica grave com sérias punições cíveis e criminais."
      },
      {
        "question": "Como a Metalic Estruturas Metálicas certifica a ausência de trincas microscópicas em ancoragens?",
        "answer": "Utilizamos ensaios não-destrutivos avançados de líquido penetrante nas soldas estruturais de D-Rings e realizamos medições precisas por ultrassom industrial para certificar que o metal não sofreu microtrincas invisíveis provocadas por estresse ou fadiga de material."
      },
      {
        "question": "Quais documentos integram o book de segurança de uma obra vertical?",
        "answer": "O book é composto pela Anotação de Responsabilidade Técnica (ART) emitida pelo CREA, Memorial Descritivo de Cálculo de Cargas Dinâmicas, Certificado de Calibração dos Instrumentos de Teste de Arrancamento Estático, laudos metalográficos e os certificados de capacitação da NR-35 de todos os técnicos envolvidos."
      }
    ]
  },
  {
    "route": "/documentacao-alpinismo-industrial",
    "label": "Documentação de Alpinismo Industrial (APR/PT)",
    "title": "Laudos Técnicos & Documentação de Segurança | Metalic Estruturas Metálicas",
    "metaDescription": "Elaboração de memorial descritivo, Análise Preliminar de Risco (APR), Permissão de Trabalho (PT) e laudos de ensaios de ancoragem com chancela de engenharia.",
    "h1": "Laudos Técnicos & Documentação de Segurança",
    "introduction": "Elaboração de memorial descritivo, Análise Preliminar de Risco (APR), Permissão de Trabalho (PT) e laudos de ensaios de ancoragem com chancela de engenharia.",
    "sections": [
      {
        "title": "Gestão Documental e Blindagem de Responsabilidade",
        "paragraphs": [
          "No setor de alpinismo industrial e trabalhos de alto risco, a segurança começa muito antes dos técnicos prenderem seus cabos. Garantir total blindagem legal para os diretores de SESMT, gerentes de facilities e compras exige uma gestão documental impecável.",
          "Na Metalic Estruturas Metálicas, todos os serviços são antecedidos por um book robusto de documentações legais, contendo certificados de calibração RBC, fichas de EPIs rastreáveis por código de barras, exames médicos atualizados (ASO) e Análise Preliminar de Risco detalhada."
        ],
        "bullets": [
          "Rastreabilidade total e individual de EPIs com etiquetas de ensaio",
          "APR (Análise Preliminar de Risco) personalizada para cada cenário de risco",
          "ART de Engenharia emitida para todos os projetos de engenharia civil e de lifelines"
        ]
      }
    ],
    "benefits": [
      {
        "title": "Plataformas de Homologação",
        "desc": "Temos 100% de aprovação em sistemas de validação de terceiros industriais."
      },
      {
        "title": "ART Inclusa",
        "desc": "Fornecemos Anotação de Responsabilidade Técnica sem custos adicionais nos projetos."
      },
      {
        "title": "Histórico Seguro",
        "desc": "Zero incidentes em nossa trajetória operacional devido ao rígido planejamento documental."
      }
    ],
    "faq": [
      {
        "question": "Qual a importância de checar a documentação de uma empresa de alpinismo?",
        "answer": "O alpinismo industrial é uma atividade de alto risco regulamentada pela NR-35. Contratar empresas informais sem seguro de acidentes, exames médicos válidos, ou sem técnicos qualificados IRATA expõe o contratante (Facilities, Engenheiro Responsável, Condomínio) a corresponsabilidade civil e criminal direta em caso de acidentes graves."
      },
      {
        "question": "Vocês possuem seguro de responsabilidade civil corporativa?",
        "answer": "Sim. Todos os nossos serviços são cobertos por apólices de seguro de responsabilidade civil de alta cobertura, oferecendo total segurança financeira para a sua empresa."
      }
    ]
  },
  {
    "route": "/sitemap",
    "label": "Mapa do Site (Navegável)",
    "title": "Mapa do Site (Navegável) | Metalic Estruturas Metálicas",
    "metaDescription": "Mapa do Site (Navegável) em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Mapa do Site (Navegável)",
    "introduction": "Serviços técnicos e especializados de mapa do site (navegável) por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Mapa do Site (Navegável) com Segurança e Excelência",
        "paragraphs": [
          "Explore a estrutura de páginas, especialidades verticais e soluções técnicas sob cordas da Metalic Estruturas Metálicas. Encontre documentações de conformidade e canais de contato."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para mapa do site (navegável)?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/servicos",
    "label": "Nossos Serviços (Hub)",
    "title": "Nossos Serviços (Hub) | Metalic Estruturas Metálicas",
    "metaDescription": "Nossos Serviços (Hub) em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Nossos Serviços (Hub)",
    "introduction": "Serviços técnicos e especializados de nossos serviços (hub) por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Nossos Serviços (Hub) com Segurança e Excelência",
        "paragraphs": [
          "Combinamos engenharia de acesso vertical, certificações rigorosas e segurança ativa para viabilizar operações complexas com máxima eficiência operacional."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para nossos serviços (hub)?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/cases",
    "label": "Cases de Sucesso",
    "title": "Cases de Sucesso | Metalic Estruturas Metálicas",
    "metaDescription": "Cases de Sucesso em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Cases de Sucesso",
    "introduction": "Serviços técnicos e especializados de cases de sucesso por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Cases de Sucesso com Segurança e Excelência",
        "paragraphs": [
          "Soluções reais desenvolvidas sob medida para desafios extremos em altura. Engenharia, conformidade técnica com normas NR-35/NR-33 e segurança irrestrita à vida.",
          "Fale com nosso time de engenharia comercial. Elaboramos soluções técnicas de segurança em altura, linhas de vida e manutenção industrial adequadas ao seu segmento."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para cases de sucesso?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/cases/instalacao-linha-de-vida-industria-logistica",
    "label": "Case: Linha de Vida Complexo Logístico",
    "title": "Case: Linha de Vida Complexo Logístico | Metalic Estruturas Metálicas",
    "metaDescription": "Case: Linha de Vida Complexo Logístico em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Case: Linha de Vida Complexo Logístico",
    "introduction": "Serviços técnicos e especializados de case: linha de vida complexo logístico por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Case: Linha de Vida Complexo Logístico com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza case: linha de vida complexo logístico utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para case: linha de vida complexo logístico?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/cases/pintura-anticorrosiva-planta-metalurgica",
    "label": "Case: Pintura Planta Metalúrgica",
    "title": "Case: Pintura Planta Metalúrgica | Metalic Estruturas Metálicas",
    "metaDescription": "Case: Pintura Planta Metalúrgica em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Case: Pintura Planta Metalúrgica",
    "introduction": "Serviços técnicos e especializados de case: pintura planta metalúrgica por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Case: Pintura Planta Metalúrgica com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza case: pintura planta metalúrgica utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para case: pintura planta metalúrgica?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  },
  {
    "route": "/cases/lavagem-pintura-fachada-edificio-corporativo",
    "label": "Case: Fachada Edifício Corporativo",
    "title": "Case: Fachada Edifício Corporativo | Metalic Estruturas Metálicas",
    "metaDescription": "Case: Fachada Edifício Corporativo em Curitiba e PR. Atendimento técnico por acesso por corda com laudo e ART.",
    "h1": "Case: Fachada Edifício Corporativo",
    "introduction": "Serviços técnicos e especializados de case: fachada edifício corporativo por acesso por corda em Curitiba e PR.",
    "sections": [
      {
        "title": "Case: Fachada Edifício Corporativo com Segurança e Excelência",
        "paragraphs": [
          "A Metalic Estruturas Metálicas realiza case: fachada edifício corporativo utilizando técnicas avançadas de acesso por corda em Curitiba e PR.",
          "Nossas equipes atuam sob rigorosos padrões de segurança com supervisão por engenheiros e emissão de ART."
        ],
        "bullets": [
          "Conformidade técnica com as normas regulamentadoras NR-35 e NR-18.",
          "Atendimento presencial ágil em Curitiba e Região Metropolitana.",
          "Emissão de laudo técnico de inspeção acompanhado de ART."
        ]
      }
    ],
    "benefits": [
      {
        "title": "Sem Andaimes",
        "desc": "Acesso por corda ágil sem bloquear acessos ou fachadas."
      },
      {
        "title": "Equipe Certificada",
        "desc": "Profissionais 100% treinados sob as normas NR-35 e IRATA."
      },
      {
        "title": "Engenharia com ART",
        "desc": "Laudos estruturais e certificações emitidos por engenheiros."
      }
    ],
    "faq": [
      {
        "question": "Como solicitar orçamento para case: fachada edifício corporativo?",
        "answer": "Entre em contato pelo WhatsApp comercial da Metalic Estruturas Metálicas para agendar uma vistoria técnica presencial com nossos engenheiros."
      }
    ]
  }
].map(article);

export const SITE_PAGE_CATALOG = Object.fromEntries(
  catalogItems.map(p => [p.route, p])
);

export function normalizeSitePageContent(payload: any, route: string): SitePageContent {
  const match = SITE_PAGE_CATALOG[route];
  if (!payload || typeof payload !== 'object') return match;
  return {
    route,
    label: payload.label || match?.label || route,
    title: payload.title || match?.title || '',
    metaDescription: payload.metaDescription || match?.metaDescription || '',
    h1: payload.h1 || match?.h1 || '',
    introduction: payload.introduction || match?.introduction || '',
    sections: Array.isArray(payload.sections) ? payload.sections : match?.sections || [],
    benefits: Array.isArray(payload.benefits) ? payload.benefits : match?.benefits || [],
    faq: Array.isArray(payload.faq) ? payload.faq : match?.faq || [],
    hero: payload.hero || match?.hero,
    inline: payload.inline || match?.inline,
  };
}

export async function getSitePageCatalog(): Promise<SitePageCatalogItem[]> {
  return catalogItems;
}

export async function getSitePageContent(route: string): Promise<SitePageContent | null> {
  const catalog = await getSitePageCatalog();
  const match = catalog.find((item) => item.route === route);
  if (!match) return null;
  const { status, adapter, editableFields, reason, ...content } = match;
  return content;
}
