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
        process?: { step: number; title: string; description: string }[]
        faq?: { question: string; answer: string }[]
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
                'A METALIC atua como grande referência em engenharia construtiva focada no aço. O desenvolvimento de projetos em estruturas metálicas não se resume apenas a unir perfis W, I ou H de catálogo; trata-se de um estudo matemático profundo envolvendo forças de momento-torçor, limites de escoamento do aço estrutural, e cálculos precisos de cisalhamento.',
                'Utilizamos a metodologia Building Information Modeling (BIM) e softwares avançados como o Tekla Structures. Essa abordagem nos permite simular o galpão logístico ou supermercado em 3D perfeito antes que a primeira chapa seja cortada no plasma CNC. O design paramétrico garante o encaixe micrométrico das peças, zerando paralisações no canteiro de obras.',
                'Quando trazemos as amarrações da NBR 6123 (Forças do Vento em Edificações) e detalhamento da NBR 8800 para a prancheta comercial, nosso projeto blinda o investidor contra sinistros aerodinâmicos ou rupturas prematuras.',
                'Do ponto de vista financeiro, adotar os galpões de aço frente aos pré-moldados de concreto é o segredo do rápido Retorno sobre o Investimento (ROI) de transportadoras e varejistas. Com o maquinário e perfis pesando até 30% menos que alvenaria engastada, há um alívio absurdo na exigência das fundações e sapatas, desinflando consideravelmente a conta de cimento usinado da obra.'
            ],
            quote: 'A estrutura metálica corporativa moderna é o que confere a velocidade de erguer hipermercados inteiros em meros 90 dias, aliando segurança ABNT a uma sustentabilidade impecável.',
            bodyText: [
                'Do ponto de vista logístico e da arquitetura do varejo, o uso das tesouras metálicas e do aço de alta resistência patinável (Corten) permite transpor Vãos Livres gigantescos (acima de trinta ou quarenta metros) sem a interrupção visual de pilares centrais. Para a frota de empilhadeiras em Centro de Distribuição ou a livre circulação em Academias e Igrejas, a planta livre (open-space) vale ouro real.',
                'Para assegurar a Autenticidade (E-E-A-T) em toda a Região Sul, ressaltamos nosso exército de soldadores e engenheiros qualificados. As ligações são validadas através de Ensaios Não-Destrutivos (como o Líquido Penetrante, Partículas Magnéticas e Ultrassom), suprimindo vazios na poça de fusão MIG/MAG/Eletrodo Revestido.',
                'Por sermos uma verdadeira Fábrica de Caldeiraria Pesada, todo aço recebe jateamento abrasivo grau Sa 2½ (Metal Branco) para ancoragem de fundo epóxi rico em zinco, culminando com poliuretano (PU) alifático no acabamento externo, concedendo durabilidade estendida mesmo em ambientes de névoa salina agressiva.'
            ],
            advantages: [
                { title: 'Super Desconto em Fundação', description: 'O carregamento inferior nas bases prediais exige sapatas muito mais rasas. Uma economia direta no aluguel de escavadeiras, ferragens armadas e volume de concreto usinado.' },
                { title: 'Logística de ESG e Sustentabilidade', description: 'Por se tratar do metal base ser reciclado, a obra reduz em 90% a sujeira (entulho), uso de formas de madeira e contaminação do solo por calcinação úmida.' },
                { title: 'Canteiro Industrial Enxuto', description: 'Diferente da estrutura mista in-loco clássica, a fábrica opera durante sua terraplanagem. O içamento ocorre quase instantaneamente como blocos de "montar", contornando tempestades da estação.' },
                { title: 'Rígido Cumprimento NBR e ART', description: 'Assegurado e assinado por laudos oficiais. Segue as diretrizes fundamentais da NBR 8800 (Projeto), NBR 14762 (Perfis Frios) e os ensaios de aço.' },
            ],
            process: [
                { step: 1, title: 'Engenharia Estrutural e Topografia', description: 'Aprovação da arquitetura em BIM. Cálculo minucioso ponderando carga morta telhas sanduíches e arrastos plásticos rotulados e engastados (ventos locais NBR).' },
                { step: 2, title: 'Fabril e Usinagem CNC Pesada', description: 'Convecção dos vergalhões estruturais pelas máquinas de plasma e puncionamento; seguidos da soldagem limpa estruturada acompanhada.' },
                { step: 3, title: 'Tratamento Anticorrosivo e Pintura', description: 'Banhos protetores ou jateamento severo para aplicar um casulo de Epóxi anti-ferrugem de padrão portuário industrial marítimo e marítimo.' },
                { step: 4, title: 'Transporte Flutuante e Tightening', description: 'Ancoragem das colunas direto dos chassis de caminhões utilizando muncks e aperto de cada porca da classe nobre (ASTM A325/A490) aferida por torquímetro eletrônico.' }
            ],
            faq: [
                { question: 'Qual a durabilidade esperada de um galpão em Estrutura Metálica comercial?', answer: 'Quando fabricado por engenheiros especialistas, um galpão metálico dura facilmente entre 80 e 100 anos. O segredo principal reside no sistema de pintura (Epóxi + PU Alifático) e galvânica aplicada durante a caldeiraria, que protegem o ferro da oxidação atmosférica.' },
                { question: 'Vou conseguir economizar na fundação (Sapatas e Concreto)?', answer: 'Com certeza absoluta. A leveza comparativa formidável do aço estrutural em contraste direto a pesados pilares de concreto maciço armado corta até 30% os custos profundos e aluguel de brocas/estacas.' },
                { question: 'É verdade que a estrutura metálica pode sofrer desmontagem e mudança de terreno?', answer: 'Sim. Essa é a grande "Moeda de Troca" logística. Sendo montado num sistema 100% de junções parafusadas, todo o barracão ganha imensa liquidez; ele pode ser desmontado, transportado em carretas abertas e reconstruído do zero num aluguel mais lucrativo em outro município sem perda do ativo físico mestre.' },
                { question: 'Existe Risco Maior em Casos de Incêndios severos?', answer: 'Não se seguir normativas de proteção contra-fogo passiva (AVCB-Bombeiros). Na fabricação de excelência são aplicadas tintas intumescentes especiais na periferia dos pilares centrais; elas se expandem com o calor e isolam o aço e prolongando imensamente as rotas de fuga do local sem fadigar e deformar.' },
                { question: 'Quanto custa, na média, o M2 M² de um barracão estrutural liso de aço?', answer: 'O mercado Brasileiro varia dependendo de cargas, mas no modelo corporativo premium do Paraná as estipulações balizam entre R$ 250,00 e R$ 450,00 por metro construído; levando a uma relação Custo-Benefício brutal versus galpões lentos de blocos.' }
            ]
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
                'O envelopamento superior de edificações industriais deixou de ser apenas a "colocação de telhas de zinco" para se tornar a fase primordial contra danos milionários ao seu estoque e maquinário. Uma cobertura metálica otimizada pela METALIC engloba sistemas complexos com Termoacústica (Sanduíche de Poliuretano/EPS), Coberturas Zipadas para inclinações baixíssimas (< 5%) e brises de ventilação natural aerodinâmica.',
                'Nossa execução foca de maneira estrita na impermeabilização máxima e na gestão de águas pluviais monstruosas. Dimensionamos rufos, calhas generosas em chapa grossa e perfis com inclinação matemática correta (Teoria de Manning-Strickler) para lidar velozmente com os maiores volumes pluviométricos (tempestades de verão severas) vistos na região do Paraná e no sul do Brasil.',
                'A profundidade técnica é a nossa apólice de seguro para você. Instalamos o travamento dos esquadros e das terças no distanciamento normatizado por cálculos de elementos finitos, erradicando por completo as vibrações aerodinâmicas (também chamadas de "fluttering" ou arrancamento) sob as fortes rajadas de ventanias meridionais.'
            ],
            quote: 'O empresário arrojado não compra telhados; ele investe na "armadura climática" do seu galpão logístico. É a cobertura quem protege o seu fluxo de caixa e o maquinário de R$ 5 Milhões que repousa no estoque.',
            bodyText: [
                'Nas instalações como Telheiros de Pátio, Quadras de Esporte outdoor (futebol, tênis) e Postos de Combustível, depender essencialmente de balanços milimétricos bem estruturados é vital para nós criarmos marquises imponentes de até 15 ou 20 metros de balanço livre, sem a pesada interrupção de colunas de cimento no percurso de trânsito dos veículos pesados.',
                'A aplicação prática da física termodinâmica: Utilizar um manto de Telha Termoacústica importada (Sanduíche de EPS/PIR) ou Filme Anti-Condensação aluminizado sob o telhado matriz garante a melhoria imediata e absoluta no ambiente de trabalho insalubre dos operários, abafando ruídos pluviais intensos de trovoadas e estabilizando a sensação térmica industrial entre 2°C a 6°C menor em dias torridos de verão abrasador.'
            ],
            advantages: [
                { title: 'Bloqueio Hidráulico 100% Garantido', description: 'Parafusos ponta espeda e auto-brocantes lacrados com micro gaxetas vulcanizadas de EPDM. É a selagem infalível contra focos de goteiras crônicas em telhados longitudinais gigantes.' },
                { title: 'Absorção Isotérmica Avançada', description: 'As famosas "Telhas tipo Sanduíche" interceptam ondas de calor brutal e reduzem radicalmente as contas elétricas com HVAC (sistemas pesados de ar condicionado) no maquinário do agronegócio.' },
                { title: 'Enraizamento contra Furacões (Eólico)', description: 'Sistemas geometricamente engastados ou clipados (Zipados) traçados milimetricamente para suportar índices de arrastes catastróficos registrados e mensurados pelos radares de intempéries da ABNT.' },
                { title: 'Caixa Seca e Intacta Internamente', description: 'As firmes treliças do teto dão o arrasto perfeito de ancoragem e amarração de robustas grades de leitos de rede elétrica e dutagem Sprinklers pesados de extinção de incêndio automatizados (AVCB) com total folga.' },
            ],
            process: [
                { step: 1, title: 'Geometria de Fluidos de Chuva', description: 'Auditoria perita da inclinação perfeita dos planos das telhas metálicas baseada no atlas anual pluviométrico de agressividade de vazão d água e correntes convectivas da região do cliente.' },
                { step: 2, title: 'Linha Fabril das Tesouras e Calhas', description: 'Dobragem mecânica de estamparia das massivas calhas de viga-calha centrais estruturais e amarração total dos "U" enrijecidos sem deixar nenhuma escória escurecida de fusão nas emendas da caldeiraria fina.' },
                { step: 3, title: 'Ancoramento Vertical Cauteloso', description: 'Sincronia balística do levantamento de chapas pré-perfiladas e da enorme cobertura treliçada pelos Cabos de Aço do Guindaste Articulado pesado, suprimindo o estrangulamento torcional durante a movimentação eétrica no ar do Canteiro.' },
                { step: 4, title: 'Capeamento Supremo de Rufos e Vedantes', description: 'Transpasse cego das abas metálicas das capas de rufo, das pingadeiras arquitetônicas laterais e a cura ativa por fitas adesivas termofletivas embutidas entrelaçando frestas do topo da inclinação d´água principal limitando infiltrações difusas.' }
            ],
            faq: [
                { question: 'A cobertura metálica simples sofre e reverbera muito ruído barulhento na chuva de granizo?', answer: 'É inevitável: Telhas galvanizadas ou galvalume lisas do tipo simples (por exemplo as TR 40 de 0.43mm normatizadas) possuem sim um ressoar metálico direto. Contudo, em 95% do mercado de indústrias caladas a solução definitiva de E-E-A-T sugerida é a aplicação da Manta Subcobertura Foil e o upgrade glorioso para o sistema Termoacústica (Telha com refil interno). O miolo expansivo macio desse "pão de forma" bloqueia integral excessivo estrondo com anulações de 40dB imediatas.' },
                { question: 'Quais as diferenças de desempenho e o que é afinal um Telhado com Tela Cobertura Zipada logístico?', answer: 'No Olimpo das engenharias pesadas, a telha autozipada sem furos é o suprassumo do escoamento seguro. São quilômetros lineares de calhas em perfil duplo contínuo sem nenhuma marca de parafuso transfixando. Suas lâminas sobrepostas não tem juntas, são mecanicamente "costuradas e apertadas" no próprio varão formando um cofre gigantesco coeso blindado anti-vazamento nas mais hostis fábricas de papéis ou químicas ativas.' },
                { question: 'Vocês têm autonomia tecnológica para fazer calhas imensas centrais sobre duas águas sem transbordamento perigoso durante vendavais caóticos com excessos tropicais?', answer: 'Com segurança inquestionável certificada pela ART na premissa da Topologia Estrutural: O diâmetro do aço U das calhas de água do vale, das prumadas condutoras circulares da queda de encanamentos até do rufamento e caídas do telhado inclinado passa rigorosamente pela Equação Logarítmica e pelo Coeficiente Retardatário na Fórmula Universal da Lei de Manning e Vazão Pluviométrica, tragando os milímetros pesados sem gotejos acidentais laterais.' },
                { question: 'Por onde entra Luz se eu fechar toda tampa do Teto gigante corporativo do Pavilhão de Produção meu?', answer: 'O Projeto de Isolamento Metalúrgico do Barracão sempre engloba Iluminação Zenital Natural Sustentável, por causa dos custos operacionais no bolso do mantenedor. Para transpor o escurecimento tático instalamos conjuntos translúcidos simétricos vitrificados de Venezianas em Policarbonato ou Fibra de Vidro (Fiberglass intercaladas em intervalos no eixo Y). Isso projeta dezenas de faixes potentes lineares luz cruzada natural de graça durantes os turnos da manhã e até ofuscando nas despesas com luz da COPEL mensais.' }
            ]
        },
        galleryImages: [
            { src: '/images/inicial/cobertura-metalica-em-curitiba.jpg', alt: 'Cobertura metálica em Curitiba' },
            { src: '/images/inicial/cobertura-metalica.jpg', alt: 'Cobertura metálica' },
            { src: '/images/inicial/hotel-fazenda-estrutura-metalica.jpg', alt: 'Hotel fazenda com cobertura metálica' },
            { src: '/images/inicial/cobertura-metalica-pr.jpg', alt: 'Cobertura metálica no Paraná' },
        ],
        relatedServices: ['estrutura-metalica', 'mezanino-metalico', 'alambrados'],
        keywords: ['cobertura metálica', 'telhado metálico sanduiche', 'cobertura com zipada galpões industriais logística preço m2 cotação parana curitiba', 'coberturas engenharia termicas acusticas'],
    },
    {
        slug: 'mezanino-metalico',
        title: 'Mezanino Metálico',
        shortTitle: 'Mezanino',
        description: 'Fabricação e rápida instalação atestada e focada em pesados de mezaninos metálicos estruturais aço para triagem logística interna e externos.',
        metaDescription: 'Mezanino metálico forte logístico de chapas fabricado e parafusado de norte ao Sul, SP, PR, SC, RJ. Dobre o espaço 3D galpão. Metalic Estrutura 41 9-9636 8387.',
        heroSubtitle: 'Laudos Ativos, Parafusamentos Vivos em Mezaninos Industriais Verticais',
        icon: 'layers',
        heroImage: '/images/inicial/mezanino-metalico.jpg',
        content: {
            intro: [
                'Nas realidades cruas de altíssimos custos especulativos pelo preço de terrenos do M2 nos centros de operações das metrópoles, o projeto estruturado de Mezanino Metálico é a fuga estratégica real para a super Verticalização Imediata Corporativa.',
                'Trata-se literalmente da rápida conjunção ou encarte físico de um pavimento pesado novo intermediário sobre estruturas comerciais flutuantes que antes detinham vazio oneroso do Pé-Direito Elevadíssimo Duplo. Isso espalha sua real capacidade massiva de estoque logístico (fulfillment) na mesma edificação primária ou confere o acoplamento do HQ limpo de seus escritórios técnicos operacionais com vidro duplo de forma barata.',
                'A METALIC executa os gabaritos estruturais industriais "Chave na Mão" ou no termo da área (Turn-Key Solution) na engenharia avançada de piso de super mezaninos. Seja o chão dele feito do uso em sanduíche cimentício dos densíssimos Painéis Wall Acústicos prensados, em tábuas nobres de madeira tratada naval, ou no cruzamento tramado das chapas de grade tipo xadrez (Telas eletrofundidas antideslizantes).',
                'O esqueleto e sub-base perimetral da torre usam conjuntos de travamentos soldados ultra resistentes de classe "W", e perfis U enrijecidos que fornecem sobrecarga útil permitida da base que baliza laudos exatos de 300Kgf/m² (para tráfego humano de Varejos) até esmagadoras marcas monstruosas superiores a 1.250kg/m² de peso contínuo para prateleiras de baterias e porta-paletes motorizados.'
            ],
            quote: 'Dentro da linha temporal cruel do payback contábil, expandir 1.000m² para cima no teto através do aço industrial rápido na sua atual matriz rende infinitamente mais capital do que arrendar burocraticamente galpões rurais novos por aluguéis milionários logísticos a dez anos.',
            bodyText: [
                'Falando nas entranhas das amarras do ponto de vista do rigor normativo (Direito Arquitetônico Corporativo de Fiscalizações), não há escape da vistoria: As vibrações constantes ressonantes do aço vivo sob as rodas ríspidas oscilatórias das empilhadeiras e empilhadores (paleteiras manuais/elétricas tracionadoras) e da vibração natural de longo fluxo de pessoas sobre lojas de roupas impõem exigências intransponíveis sobre laudos periciais e soldas rigorosas.',
                'Essa solidez blindada não cai dos céus. Trata-se do estrito escoamento da solda qualificada das uniões feitas com exata temperatura em junta transversal nos biséis verificados pelo inspetor com revelador ultrassom ativo penetrante. Além da solda, o aperto mecânico (tightening) com torquímetros importados crava o travamento 100% de centenas de parafusos classe 8.8 na alma da torre estabilizadora.',
                'Como complementação crítica às premissas obrigatórias exigidas pelas regras fiscais de prefeituras (AVCB), atestamos e fabricamos as bases do guarda-corpos protetivos antiquedas para mezaninos e elaboramos escadarias tubulares de rota de fuga normatizadas à risca pelas exigências de prevenção de emergência do Corpo de Bombeiros, usando corrimão milimetricamente nas distâncias corretas de vasão de fluxo.'
            ],
            advantages: [
                { title: 'Aproveitamento Volumétrico Exponencial (3D)', description: 'Transforme o espaço aéreo "morto" do pé-direito gigante e inativo do seu barracão em um ativo que gera lucro real e expansível, montando ilhas inteiramente equipadas com estantes piso-a-teto apoiadas nessa nova base dupla maciça.' },
                { title: 'Velocidade Expressa em Obra Limpa/Seca', description: 'Por tratar-se de peças cortadas e modularizadas que chegam prontas na fábrica, a montagem é 100% parafusada "a seco". O içamento permite que trabalhemos rápido no final de semana escuro (Retrofit Express), sem poeira de cimento e sem paralisar sua loja nos momentos lucrativos abertos ao público.' },
                { title: 'Liquidez Re-usável Permanente', description: 'O mezanino modular 100% atarraxado não se incorpora irreversivelmente à planta oficial da prefeitura (tributária fixa). É um ativo extremamente líquido na mudança caso você deseje deixar o pavilhão alugado que quebrou seu contrato: As pranchas e engates podem inteiramente ser desmontadas no destrato locatício e reinstaladas noutra sede central em carretas abertas completas transportando capital de giro real seguro.' },
                { title: 'Auditoria Blindada (Pintura Intumescente AVCB)', description: 'Em casos periciais obrigatórios rigorosos nos laudos protetivos contra focos severos de incêndio, englobamos o tratamento epóxi especial sintético intumescente. Sob pico térmico trágico superior a trezentos graus ela expande fofamente isolando e cobrindo os vergalhões pilares de aço, prolongando absurdamente a permanência estrutural passiva ao fogo para não desmoronar flácida amolecendo repentinamente por choque térmico.' },
            ],
            process: [
                { title: 'Perícia de Sobrecarga e Fundação Base', step: 1, description: 'Sondagem tática do "calço" da baldrame que receberá nossos pilares mestres cravados, calculando picos de recalque compressivos provindos da laje morta do aço tracionado com as mercadorias variáveis do estoque abarrotado, para certificar total e profunda ausência de fundações rachadas.' },
                { title: 'Geometria de Plasma CNC Fresado', step: 2, description: 'Dobragens estritas no traçador mecânico a frio esquadrejando cortes perfeitos nas seccionadas colunas pesadas na tesoura afiada. Todo conjunto ganha encaixe por matriz computacional CNC e milimétrica das juntas unidas fixadas a engates sem erros de folgas marginais de furos brocados.' },
                { title: 'Aperto Catracado com Torque e Prumo 100%', step: 3, description: 'A força da montagem a cinta nas catracas e roldanas levantando maciços o esqueleto no engaste perfeito nos pinos macho-femêa, niveladores cravando as esquadrias retas atarraxados com tracionamentos mecânicos de alavancas usando chaves de porcas de impacto garantindo nivelamento e calibramentos estalados justos livres esteticamente de cimentos secos fluídos amarrados inteiriços.' },
                { title: 'Assentamentos Densos dos Painéis Wall', step: 4, description: 'Chumbamento da cobertura em assoalhos duros nas tabicas de apoios cravando ou compensado de pranchão nobre tipo naval tratada em verniz pesado, ou travando piso antiderrapante na grossa cimentícia selada de modulações e para as chapas grelha tipo industriais rotatórias operacionais eletroativas.' }
            ],
            faq: [
                { question: 'Quantos KGF o Mezanino deço aguenta carregado?', answer: 'É inteiramente fundamentado no uso logístico e no projeto de engenharia focado no propósito comercial. Nós elaboramos base de mesas transeuntes para uso super rotativo escritórios leves aguentando 300Kg/m², ou fabricamos bases monstruosas esmagadoras maciças com vigas duplas estribadas blindadas feitas operacionais exclusivamente suportar abarrotamento bruto estagnante porta-paletes excedendo patamares colossais de até 1.500 Kgf ou 2.000 kgf nos perímetros vitais limitados testados por laudos da CREA emitidos pericial.' },
                { question: 'Existe algum risco de o Mezanino de Aço oxidar rapidamente e apodrecer corrompido, enfraquecendo por desgaste e tombando?', answer: 'Não. Os vergalhões das pilastras de aço nunca apodrecem fragilmente quando envernizados pelo correto arcabouço termoquímico e galvanização correta espessa de primer sintético selado a nível epóxi marinho litorâneo (anti atmosférico anti oxidante severos litorâneas), garantido nas usinagens testadas da caldeiraria blindando totalmente qualquer fadigo por anos isolado da atmosfera ativa molhada do chão nas calhas e respiração umidificadas severas das industrias perigosas.' },
                { question: 'Na base, o esqueleto no piso inferior do meio mezanino, acoplam Gesso (DryWall Cartonado)?', answer: 'Absolutamente Sim! Essa é beleza lisa limpa modular métrica do arcabouço "Chave Na Mão" Retíssimo da Metalic na base mestre. Na laje interior do teto flutuante, perfuramos e calçamos as canaletas e prumamos os eixos finos (trilho guia liso perimetral limpo fixado de forros), montados fixando o piso interior de DryWall e sancas no fechamento retíssimo da planta corporativa inferior das salas envidraçadas e escritórios climatizados blindando toda o poeira da placa superior exposta calada de transitos dos funcionários na plataforma mestra e amortecido sonoramente o passos contínuos nos vãos acústicos.' },
                { question: 'Qual Exatidão de aprovação nas regras restritivas periciais das burocracias Corpo de Bombeiro (Alvarás)?', answer: 'Emitimos relatórios assinado assinadas estritos das anotações A.R.T sobre diretrizes legais arquitetônicas de fiscalização na NBR no cumprimento obrigatórios de largura contáveis dos espaços, corrimões escadões normativas larguras de dimensionadas escoamentos fluxo emergências extintores escadaria de larguras nas fugas escapes descompressão fluxos de descompressão atestadas e nas saídas portas larguras com fluxo das rota as dimensionamento do transito fuga descompressão atestas saídas fuga de prefeitura escoamento.' },
                { question: 'Posso Mudar e Reaproveitar O Pavilhão inteiro Metálico Alocado numa Nova Loja?', answer: 'Com extrema maestria da desocupação logistica ativa, sim. Estruturas aparafusadas classe W com estribos não levam fundição molhada nem cimento derramado nas juntas brutas presas, consequentemente todo alavancamento solta peças íntegras intactas. Num eventual distrato locativo pericial ou fechamento comercial rompido de expansão realocado galpão matriz, as carretas recolhem as torres os guindastes desengatam pranchas e transportam 100% de todo seu capital investido realocando nos depósitos novos como ativo de revenda permanente intactos estocados nas garagens blindados da desvalorização civil imóvel mortificado presa ataraxada imobilizada fundições das prefeituras inatas oficiais burocraticos tributarios.' }
            ]
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
                'A principal e mais crítica artéria de fluxo vertical dentro de grandes plantas industriais e edifícios comerciais de Múltiplos Pavimentos são as escadas metálicas. Enquanto os pesados modelos tradicionais de concreto exigem fôrmas cravadas e impõem dias ou semanas de cura escorada no meio do pavilhão, a escada em aço é uma peça paramétrica ágil.',
                'Ela é 100% modelada em detalhamento tridimensional (softwares BIM como Tekla e SolidWorks) off-site (dentro da nossa caldeiraria). Chega ao seu galpão dividida em módulos robustos quase finalizada, sendo içada e parafusada nas esquadrias de espera em velocidade recorde, liberando o fluxo de pessoas na mesma hora.',
                'As soluções da Metalic operam tanto no front logístico corporativo, abrangendo Escadas Marinheiro (com normativas NR-12 anti-queda) essenciais para acesso seguro e manutenção de telhados Termoacústicos, quanto no front arquitetônico moderno, criando Escadas Caracol (Helicoidais) para economia extrema de "footprint", e saídas táticas de rotas de incêndio prediais largas atestadas pelos Bombeiros Federais.'
            ],
            quote: 'A escada industrial não serve apenas para unir pavimentos flutuantes do seu Mezanino; ela rege todo o compasso arquitetônico do espaço e carrega o laudo de viabilidade de fuga contra emergências (AVCB).',
            bodyText: [
                'Do ponto de vista normatizador e pericial, a METALIC parametriza seus cálculos exclusivamente balizados pelas premissas brutas de aprovação do Corpo de Bombeiros. Exigimos espelhos fechados ou dimensionados para evitar vertigem em rotas de fuga densas, e cada degrau é matematicamente validado sob a Fórmula Ergonômica Universal de Blondel (2 Espelhos + 1 Piso = 63cm a 64cm), evitando a fadiga muscular letal em trajetos cotidianos de operários.',
                'Dominar a ciência metalúrgica das soldas de poça de fusão profunda (TIG/MIG) unidas a modernos perfis dobrados a frio é o que define o nosso abismo de mercado frente a "Serralherias Amadoras". Um nível de Suporte à Carga Master (Heavy-Duty) é entregue em cada soldagem: desde o minucioso encabeçamento ancorado por buchas químicas epóxi na laje, até o aprumado rígido dos corrimões estriados que aguentam centenas de pessoas em pânico apertando sua base, blindados na tinta antiferrugem eletrostática que nunca lasca.'
            ],
            advantages: [
                { title: 'Aprovação Direta NR-12 e AVCB', description: 'Tranquilidade penal para a diretoria: Fabricamos Escadas marinheiro de duralumínio ou escadarias de incêndio retas desenhadas obedecendo ao rigor estrito de vistoria da fiscalização (gaiolas costais de proteção e patamares duplos inclusos).' },
                { title: 'Resistência Surda ao Impacto', description: 'Tratamos as pisadas com apoios vigados dimensionados pela nossa engenharia para nunca fadigarem no meio e sem fazerem o insalubre estrondo de "tambor" sob o peso de dezenas de operacionais pulando.' },
                { title: 'Estética Brutalista Arquitetônica (Visual E-E-A-T)', description: 'Na prancheta arquitetônica o layout industrial premium abraça escadas aparentes em vigas "I" pintadas de Matt Black ou aço corten envernizado como mastodônticos elementos decorativos da recepção corporativa.' },
                { title: 'Ousadia Visual Estrutural (Degraus Flutuantes)', description: 'Viabilizado pelo metal sob plasma CNC, moldar nervuras centrais ("espinha de peixe") oferece a imediata impressão ótica sem chão de escadas lisas pendentes no vazio; arte complexa demais na feia e gorda concretagem padrão.' },
            ],
            process: [
                { step: 1, title: 'Scanner Laser Topográfico do Vão', description: 'Ancoragem inicial através da medição laser do pé-direito duplo verdadeiro, locando milimetricamente os desvios e obstáculos fixos da parede da obra real para o software BIM.' },
                { step: 2, title: 'BIM Ergonômico pela Lei de Blondel', description: 'Calculamos simulando a altura fracionada paramétrica do espelho (H) e da chapa do piso (P) pelo compasso fixo da lei de Blondel, obtendo escadarias corporativas perfeitamente ritmadas.' },
                { step: 3, title: 'Fundição MIG/TIG Raiz Avançada', description: 'Soldagem banhada em fusão contínua sob atmosfera inerte (Gás Nobre) nas cantoneiras de junção, enraizando contra microbolhas frágeis imperceptíveis na dobra fina do degrau sob carga cortante de tráfego pesado.' },
                { step: 4, title: 'Engaste Fixação por Química Injetável', description: 'Chumbamos os tirantes roscados profundos nos patamares através de ancoragem por injeção de bucha química epóxi pura bi-componente nas bordas de concreto das lajes maciças.' }
            ],
            faq: [
                { question: 'As escadas de emergência exigem material especial de fábrica segundo o Bombeiro?', answer: 'Com Certeza. Leis inquestionáveis: Toda a Rota de Fuga do AVCB exige obrigatoriamente degraus 100% lisos e fechados (sem frestas nos espelhos para não gerar pânico ou travar sapatos), corrimão duplo tubular retíssimo sem pontas vivas à altura normatizada de 1.10m, e usar chapas recartilhadas Xadrez de moeda antideslizantes para evitar escorregões durante evacuações chuvosas ou umidificadas.' },
                { question: 'A escada flutuante (espinha de peixe) sem nada embaixo oscila, amedronta ou balança com muito peso em cima?', answer: 'Nunca. Uma passarela em aço só tremula e apavora balançando feito gangorra se a engenharia aplicada da serralheria for amadora. Nós da Metalic dimensionamos vigotes centrais tipo viga "I" e "W" super densos e espessos em aço carbono, chumbados e engastados profundamente atrás da alvenaria bruta do berço de concreto; anulando invisivelmente toda a deflexão e torção (Fadiga Torcional).' },
                { question: 'A caldeiraria pinta e finaliza as escadarias para esconder as juntas carbonizadas de metal cru soldadas da obra?', answer: 'Evidente. O nosso selo Premium exige entrega imaculada. Nossa equipe lixa todas as rebarbas de escória crua do disco TIG até abaular e polir perfeitamente as quinas (Sem farpas afiadas). Depois, envernizamos a estrutura 100% via Pintura Eletrostática a pó cozida em forno, ou Poliuretano (PU) Alifático (Tripla Demão). Isso gera um monólito selado duradouro resistente a arranhões de chaves e pontapés agressivos de botas normais sem oxidar.' }
            ]
        },
        galleryImages: [
            { src: '/images/inicial/escada-metalica.jpg', alt: 'Escada metálica industrial blindada' },
            { src: '/images/estrutura/escada-metalica.jpg', alt: 'Escadaria metálica de fuga anti-incêndio e perito de bombeiro' },
            { src: '/images/inicial/estrutura-para-ponte-g.jpg', alt: 'Estruturação passarela para ponte metálica travessia' },
        ],
        relatedServices: ['mezanino-metalico', 'estrutura-metalica', 'cobertura-metalica'],
        keywords: ['escada metálica industrial normatizada', 'escada em aço curva e espinha de peixe corten eletrostatica', 'escada caracol metálica para galpão chapa xadrez', 'escadaria industrial NR-12 com laudo de fuga'],
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
                'No ecossistema corporativo atual, pautado pela blindagem imobiliária do capital, o fechamento perimetral do limite legal territorial feito rigorosamente com alambrados estruturais esticados em arame de malha losangular é o método definitivo de contenção.',
                'Trata-se inquestionavelmente da barreira física mais durável, arejada e eficiente para a segmentação prática em ambientes severos, ventosos e hostis de vastas chácaras, pátios logísticos, loteamentos rurais erosivos, aeroportos e parques desportivos (Society/Quadras).',
                'Seus densos trancamentos e nós de fios guiões absorvem, desconstroem e dissipam a força pontual bruta de esmagamentos inerciais (como atrito de gado, bolas em alta velocidade ou impactos de empilhadeiras leves) sem ceder em fadiga ou estourar a laçada dos losangos em pontos focais isolados do esticamento perimetral.'
            ],
            quote: 'Cercar a sua propriedade de forma blindada é a primeira grande barreira psicológica e física de dissuasão de riscos do seu patrimônio. O aço galvanizado tenso e chumbado no concreto garante que essa barreira resista intacta a décadas de testes severos.',
            bodyText: [
                'A METALIC entende que a alma da contenção não é o arame solto, mas a Fundação Estrutural da infraestrutura civil dos Mourões (Tubos Ciclópeos). Tubos industriais pesados com espaçamento militar a cada ~2.5 metros engastados em brocas de 1 metro no radier cimentício definem inteiramente a resistência inabalável e o prumo vivo inabalável de toda essa muralha tensionada cruzada contra o fluxo ou a tentativa fácil de transposição humana de rua.',
                'Do ponto de vista normativo das engenharias pesadas perimetrais, nossos alambrados exigem telas zincadas altamente densas (Bitolas BWG 10 ao BWG 12) armadas e ancoradas a catracas industriais de engate de fios de esticamento (Fio Guião) em três níveis duros horizontais, impedindo visceralmente qualquer defeito de estiramento ou a clássica e feia "barriga frouxa morta" que desmorona arames frágeis mal estruturados em condomínios.'
            ],
            advantages: [
                { title: 'Absorção Genial da Ação de Impactos', description: 'Por sua lógica trançada dinâmica, a tela trabalha de forma elástica: diferente de um muro fixo quebradiço de reboco e tijolinho, a tela recebe a porrada de vacas ou esbarrões pesados do esporte amortecendo num efeito de mola dissipativa sem estourar e cair o painel.' },
                { title: 'Segurança Prática Antitransposição Intensa', description: 'Todo esqueleto tem possibilidade de armar braços e hastes inclinadas curvadas tipo "Baioneta Mestra 45º". O berço pronto na cabeça do tubo espera sádico pelas assustadoras fileiras grossas das concertinas rústicas farpadas do topo.' },
                { title: 'Banho Quente na Galvanização (Anti-Ferrugem Litorânea)', description: 'Nossas opções abraçam estritamente no pacote o Fio Duplo Galvanizado. Revestimento que cova sob mergulho nos tanques de imersão banhados nas indústrias caldeirões o fio virgem para emergir blindado no Zinco cru inatacável pela maresia das chuvas arenosas praianas.' },
                { title: 'Transparência Visual Tática de Câmeras e Circulação Eólica', description: 'Uma barreira massiva concreta tampa a visibilidade das câmeras CFTV logísticas e bloqueia totalmente os canais e o correr dos ventos intensos represando furacões (Vácuos destrutivos). A tela filtra e corta a tormenta enquanto mantém os intrusos na mira limpa vigiada.' },
            ],
            process: [
                { step: 1, title: 'Perfurações Geológicas de Fundição Brocada', description: 'Engenharia da fundação civil abrindo e desobstruindo profundos buracos entre 80cm até 150cm (dependendo estritamente do índice arenoso e a normativa de solo do cliente).' },
                { step: 2, title: 'Prumada Mestra do Fincamento no Radier', description: 'Cravamento blindado de cada mourão de cano tubulado redondo preenchidos de calcinação em concreto maciço duro perfeitamente aprumados topograficamente nos pontos exatos e retilíneos a laser.' },
                { step: 3, title: 'Tensionamento dos Esqueletos do Fio Guia', description: 'Passagem rígida dos três eixos tracionadores (Fios Tensores Guia) varando postes alinhados com esticadores de bitola através das engrenadas grossas catracas e ganchos em alta pressão horizontal estirada.' },
                { step: 4, title: 'Tecedura Costurada e Amarrios Firmes', description: 'Costura paciente perita de engate e o estirar e fechar elo por elo das tramas aramides presas engastadas por torções de pinos grampos fixantes seladoras no esquadrado estético dos vãos.' }
            ],
            faq: [
                { question: 'As malhas da cerca tela costumam rasgar ou arrebentar o arame fácil em alambrados de campo Society pelas pancadas brutas do futebol?', answer: 'Nunca iriam se as regras fossem cumpridas e respeitadas. Para praças brutas esmagadoras nós usamos por exigência a tela super fechadíssima densa malha fio 10 bitola BWG10. Além do isolante natural adicionado que cruza três a quatro percursos horizontais costurados dos esticadores amarradores trancadores (Fio Guia Tensionado) para desestabilizar os pontapés brutos absolutos nos impactos travado na rede dos lances mortais no esporte.' },
                { question: 'A galvanização da cerca perde seu verdadeiro efeito apodrecendo rápido se instalada perto da agressividade de chácaras de mar praianas?', answer: 'Tudo orbita ao redor irredutível da espessura bruta do pacote de zinco ofertado pela usina. Em fazendinhas costeiras agressivas nós ofertamos e partimos pra brutal solução da Tripla Galvanização cravada ou ainda o encabeçamento híbrido da Tela Zincada revestida mergulhada selada num polímero extra grosso Verde em PVC isolando os cloretos assassinos marítimos pluviais da oxidação crua nítida de esburacamentos crônicos.' },
                { question: 'O topo reto do alambrado logístico suporta o amarrilho posterior bruto trancado e a colocação farpada pesada de cercas concertinas laminadas presas em cruz perimétrica?', answer: 'Deve suporter e ancorar ativamente. A Metalic produz todo mourão mestre desenhando no ápice uma forquilha curvada ríspida projetada, apelidada de Baioneta Simples ou pesada curva Y cravada. Tais bicos e chapas solam abrigam rústicas bases firmes que anulam afundamento enlaçador pra suportarem e ancorarem os giros pesados cruéis das temidas fitas duplas clipadas e atadas das brutais espirais farpadas das Concertinas das navalhas de defesa de presídios.' }
            ]
        },
        galleryImages: [
            { src: '/images/slider/estrutura-metalica.jpg', alt: 'Alambrado de alta tensão segurança rural curitiba e loteamento' },
            { src: '/images/slider/cobertura-metalica.jpg', alt: 'Cercamentos em alambrados e mourões blindados' },
        ],
        relatedServices: ['estrutura-metalica', 'cobertura-metalica'],
        keywords: ['alambrado reforçado', 'alambrado metálico litorâneo PR SC', 'cercamento sociedade quadra rural lotes chácara campo galvanizado pesada fio 10', 'alambrado industrial aço tela baldrame prumo concertina'],
    },
    {
        slug: 'galpoes-logisticos',
        title: 'Galpões Logísticos',
        shortTitle: 'Galpões',
        description: 'Construção rápida e segura de galpões logísticos e barracões industriais com grandes vãos livres em estrutura metálica.',
        metaDescription: 'Fabricação e montagem de galpões logísticos metálicos. Grandes vãos livres para estoque e empilhadeiras. METALIC Estruturas PR SC SP (41) 9-9636 8387.',
        heroSubtitle: 'A base sólida para a sua expansão logística e industrial',
        icon: 'warehouse',
        heroImage: '/images/inicial/estrutura-melhor.jpg',
        content: {
            intro: [
                'O coração de qualquer operação de e-commerce, agronegócio ou atacadista reside na eficiência do seu Centro de Distribuição. Galpões logísticos projetados em estrutura metálica representam a vanguarda da construção civil industrial, entregando velocidade de implantação e plantas arquitetônicas 100% livres de obstáculos.',
                'Utilizando perfis laminados estruturais de alta resistência (Aço ASTM A572 Alta Tensão) e pórticos de alma cheia (Plate Girders) ou treliçados, a METALIC projeta galpões capazes de vencer vãos livres impressionantes de 30, 40 ou até mais de 50 metros sem a interrupção de um único pilar central.',
                'A ausência de colunas internas não é mero detalhe estético; é trigonometria aplicada à rentabilidade. Sem colunas bloqueando o caminho, o layout do porta-paletes e a movimentação contínua de empilhadeiras trilaterais atingem máxima de produtividade (Flow Rate), eliminando pontos cegos e acidentes com mercadorias e veículos internos.'
            ],
            quote: 'O custo do metro quadrado de um barracão logístico só se paga quando 100% da sua área útil está disponível para operação pesada, livre de colunas e segura contra as intempéries tropicais.',
            bodyText: [
                'Nosso protocolo construtivo para pavilhões logísticos abraça nativamente as demandas para Docas Elevadas (Loading Docks) suportando cargas vivas esmagadoras de caminhões carretas. Projetamos o eixo de giro (Turning Radius) perfeitamente integrado à marquise de proteção das docas blindando mercadorias sob fortes tempestades de verão.',
                'A segurança e as normas são matrizes inegociáveis. Todo cálculo de pórtico e tesoura atende perfeitamente aos coeficientes de arraste de ventos severos locais detalhados pela NBR 6123, bem como às cargas suspensas para redes de sprinklers automatizados densos de teto e sistemas robustos de ventilação ou exaustão forçada sem torcer a estrutura matriz.',
                'Seja ampliando o parque do agronegócio paranaense com silos anexos ou erguendo pavilhões blindados em São Paulo para multinacionais tech, a METALIC entrega em 1/3 do tempo comparado ao concreto armado tradicional (Painel Pré-Fabricado).'
            ],
            advantages: [
                { title: 'Planta "Vão Livre" Máxima', description: 'Ganhos exorbitantes de volumetria de armazenagem ao anular e expurgar a necessidade de postes/pilares de centro. A prateleira (racks) pode cruzar o barracão inteiro lindamente ininterrupta.' },
                { title: 'Velocidade Time-to-Market', description: 'Enquanto a escavação topográfica e a baldrame de terraplanagem secam no terreno, os pórticos já estão cortados no CNC a frio na nossa fábrica, prontos para a subida relâmpago.' },
                { title: 'Pré-Adequação de Docas Carga/Descarga', description: 'As vigas transversais e o pé-direito lateral são estudados minunciosamente para abrigar baús refrigerados de carretas bitrens sob uma proteção estrita estendida de avanço longitudinal chuvoso.' },
                { title: 'Estruturação Forte para Sprinklers (AVCB)', description: 'O teto de aço não cederá sob a água e o peso da complexa e pesadíssima matriz entubada vermelha da hidra preventora de contra-incêndios vistoriada pelo Corpo de Bombeiros exigente.' }
            ],
            process: [
                { step: 1, title: 'Engenharia de Grandes Cargas (Ventos e Peso)', description: 'Simuladores computacionais de software FEA rodam testes estressantes virtuais de força do clima ventoso local, calibrando as almas das vigas centrais antes do plasma CNC operar.' },
                { step: 2, title: 'Fabricação Paramétrica Metalúrgica', description: 'Perfis usinados, cortados, soldados em atmosfera de Gás TIG e testados em líquido penetrante antes de sofrerem rígido banho anticorrosivo de PU Alifático cinza náutico duradouro.' },
                { step: 3, title: 'Içamento em Sincronia a Ar (Gruas)', description: 'O casamento das enormes tesouras de teto com os pés das colunas principais usando frotas robustas de Munkcks, onde milímetros definem o plumo com os prisioneiros químicos.' },
                { step: 4, title: 'Revestimento e Impermeabilização Superior', description: 'Instalação da película em Sanduíche de EPS Térmico travadas milimetricamente com parafusos anti-refluxo vedantes. Aplicação perimetral completa rigorosa de rufos pingadeiras e calhões massivos.' }
            ],
            faq: [
                { question: 'Por que o Vão Livre enorme (sem pilares) das estruturas de metal é tão cobiçado na logística?', answer: 'A logística vive do Layout fluido. Um pilar de concreto massivo no meio do barracão inutiliza metros preciosos de giro de uma empilhadeira e cega a visão de trânsito dos gerentes de estoque causando trombadas. O perfil I em aço laminado maciço transpassa e voa 40 metros de um lado ao outro pelo teto sustentando toda a cobertura firmemente apoiados apenas pelas paredes limite perimetrais abertas das extremidades sem afrouxar.' },
                { question: 'Um galpão grande metálico demora mais de 1 ano para ser entregue operante?', answer: 'Pelo Exato Contrário. A revolução está estritamente aqui na "Obra Limpa Seca Montável". Enquanto o trator alisa e escava a terra, na empresa fabricante (Metalic) as maquinas cospem a fachada em peças. Uma matriz atípica imensa com base mestre sólida de 2.000m² ergue seu esqueleto brutal completo do piso ás cumeeiras nos céus fechadas num cronograma incrivelmente focado na casa expressa recorde de meros 60 ou 90 Dias de montagem.' },
                { question: 'Posso instalar placas Solares Gigantes no teto depois da obra finalizada?', answer: 'Sim, e é Altamente encorajado pela visão ESG global. Nós estipulamos e adicionamos antecipadamente nos modelos matemáticos 3D a Carga Acidental Futura Estática Extra no esqueleto de base. Dessa forma, as terças de sustentação jamais vibrarão pesadas perigosamente suportando infinitos módulos onerosos pretos fotovoltaicos injetando solidez extrema no seu caixa a nível de longo retorno energético.' }
            ]
        },
        galleryImages: [
            { src: '/images/obras/obra-estrutura-metalica-9.jpg', alt: 'Galpão Logístico em montagem avançada tracionado' },
            { src: '/images/inicial/estrutura-para-ponte.jpg', alt: 'Grande viga tracionadora estrutural vão livre aço' },
            { src: '/images/obras/montagem-estrutura-metalica-fabrica-1.jpg', alt: 'Grua gigantes instalando as vigotas mestras logísticas' },
        ],
        relatedServices: ['estrutura-metalica', 'cobertura-metalica', 'marquises'],
        keywords: ['galpão metálico', 'barracão de aço', 'construtora de galpões logísticos', 'galpoes pre fabricados em estrutura de aço curto prazo', 'vão livre galpao', 'galpoes para alugar rampa doca'],
    },
    {
        slug: 'marquises',
        title: 'Marquises',
        shortTitle: 'Marquises',
        description: 'Construção avançada de marquises metálicas imponentes para fachadas, drive-thrus e controle de cargas em docas rústicas e refinadas.',
        metaDescription: 'Marquises Metálicas resistentes em SP, PR, SC, RJ. Soluções arquitetônicas em perfis aço para proteção de docas, vitrines, postos e recepções em balanço gigante.',
        heroSubtitle: 'Proteção e estética imponente projetadas em balanço flutuante de aço estrutural',
        icon: 'tent',
        heroImage: '/images/obras/cobertura-metalica-predio-7.jpg',
        content: {
            intro: [
                'Do ponto de vista arquitetônico agressivo ou para a necessidade pragmática protetiva da chuva, as Marquises Metálicas em Balanço são obras-primas das forças de Ancoragem. Sem o uso nocivo estético de pilares tocando incovenientes as calçadas extremas, o avanço voador do aço protege vitrines frontais limpas.',
                'Nas realidades cruas de altíssimos movimentos frenéticos de carga descargas noturnas rústicas, englobar as docas dos supermercados com marquises suspensas em vigas "I" robustas salva os milhares de dólares paletizados perecíveis estragados sob as severas tormentas do mercado livre molhado.',
                'Utilizar chumbamentos epóxis e sapatas ultraprofundas permite suspender no ar avanços dramáticos frontais gigantes (cantilever structures) excedendo bravos arrastos aéreos sob tormentas severas, com a segurança validada da assinatura técnica CREA da METALIC sem fissurar amarras da placa base primária dos galpões prediais ou sedes matriz anexas acopladas estruturadas firmemente blindadas.'
            ],
            quote: 'A marquise corporativa não é um puxadinho estético opcional; é a ponte protetora de asfalto ativo seca que separa seu cliente e sua carga dos danos imediatos e hostis causados impiedosamente pelas tempestades climáticas tropicais ativas da nossa localidade natural.',
            bodyText: [
                'Nos Setores de Varejo alimentares atacadistas de rua e postos revendedores de combustível premium fluídos espalhados nos interiores, o esqueleto perimetral aéreo esteticamente desenhado agrega prestígio puro E-E-A-T embutindo sancas embutidas com spot LED escondendo e recobrindo dutos de coletas grossas de rufos de águas nas fachadas estendidas e portais verticais acoplados em brises ACM decorativas metálicas plásticas isoladas do sol cegador dos finais do final tarde rudes ofuscantes das fachadas.',
                'Nossa execução tática das engenharias pesadas elimina gotejamentos pingadeiras feios amadores corrosivos embutindo tubulações e condutores hidráulicos discretamente correndo nas espessas almas tubulares ocas robustas, camuflando toda as entranhas agressivas construtivas industriais para o público comum transeunte inferior que estaciona as asfalto abrigadas.'
            ],
            advantages: [
                { title: 'Estética Suspensa Avançada Acoplada', description: 'Vislumbrar um peso gigantesco voador bloqueando chuva retendo a água de forma imperceptível alicerçadas nas paredes trás atesta agressividade beleza nobres das revendedoras de veículos limpos ou postos bandeirados premium.' },
                { title: 'Docas Perfeitas Operacionais 24 Hrs', description: 'Caminhões e Empilhadeiras tracionando de forma limpa frenética descarregando paletes a fio seco no cimento varridos da enxurrada de lama nos invernos torrenciais.' },
                { title: 'Impermeabilização Embutida Oculta das Estruturas', description: 'Esqueletos abertos em cima que seguram firmemente escondidos da rua grossos emborrachados telhados caídos sem as pessoas na calçada do chão visualizarem telhas metálicas amadoras brônzeas enferrujadas aparentes vazando lodo.' },
                { title: 'Baixo Impacto Espacial (Cantilever System)', description: 'Total Extinção da necessidade absurda de colunas pesadas fincadas no estacionamento inferior bloqueando vagas ou a virada angulada rotacional de manobra dos caminhões grossos articulados carreteiros longos acoplados nas baias docas centrais frontais extremas curtas limitadas.' }
            ],
            process: [
                { step: 1, title: 'Geometria do Momento de Inércia no Vão Fletor', description: 'Projeto calculando detalhadamente as forças estouradoras torcionais estáticas puxadas dos parafusos traseiros fixos nos chumbadores da fundação que aguentarão todo esticar flutuador voador das treliças longas pendentes frontais balançantes soltas sem os pesados suportes chão.' },
                { step: 2, title: 'Montagem Fria Caldeiraria Engastadora', description: 'Reforços dos bicos estendidos em L ligados nas massivas vigotas U de base soldadas peritamente para jamais entortarem envergadas arriando decaindo tortas com cansaço de estresse de fadigo estrutural perigoso ao longo prazo com o pesar chuvoso represado de granizo gelo.' },
                { step: 3, title: 'Injeção Química e Chumbamento Pesado', description: 'Esquadrinhamento dos prisioneiros longos atravessando pilares maciços ou chapas bases travadas amarradas em epóxis adesivos químicos curados para resistirem absurdos de toneladas aéreas brutas.' },
                { step: 4, title: 'Fechamento dos Plafons de Calhas Embutidos', description: 'Travação dos telhados metálicos calafetados grossos na inclinação imperceptível interna virados ao fundo condutor oculto mantendo frente testa reta falsa retangular elegante arquitetada camuflante visual reta cênica plomada plástica.' }
            ],
            faq: [
                { question: 'Por que algumas marquises da concorrência de calçadas envergam parecendo tristes e ameaçam decair as pontas?', answer: 'Infelizmente é Física pura castigando o erro rústico do "barato mal-feito soldador autônomo". Marquises exigem engenharia massiva estruturada. Tratando-se estritamente de Balanço sem pilares na frente sustentadores, o nó raiz engrossado nas paredes fixadas deve ser calculado a milimetros prevendo ventania ascendente rajante puxando a ponta e o peso permanente gordo flácido do acumulo temporal fadiga natural metálico, sem as mãos da competência Metalic elas dobram as hastes finas arrebentadas no meio decaindo empenadas assustadoramente.' },
                { question: 'A Marquise esconde da rua se os telhados nela em cima empossarão as telhados amadores pingando nas bordas do bico dela?', answer: 'Sim e jamais devem transbordar no bico frotal das vitrines caindo poças. Nossas Marquises contêm platinbandas altas retas e tubulações escoadoras dimensionadas fluídas calculadas grossas perimétricas conduzindo as fortes chuvas sorrateiramente para as bitolas pluviais na parede ao fundo retaguarda sem o cliente ver uma só calha grotesca transbordando gotejando suja visível penduradas frontais expostas goteiras barulhentas frontais debaixo da proteção das portas.' }
            ]
        },
        galleryImages: [
            { src: '/images/obras/cobertura-metalica-predio-7.jpg', alt: 'Marquise em estrutura metálica' },
            { src: '/images/obras/montagem-cobertura-metalica-guindaste-1.jpg', alt: 'Montagem perigosa alçada da marquise flutuadora gigante pesada suspensa' },
        ],
        relatedServices: ['galpoes-logisticos', 'supermercados-shopping-centers', 'cobertura-metalica'],
        keywords: ['marquises metálicas grandes vãos balanço fixar sem pilares frentais vitrines postos docas', 'estruturas frontais fachada galpoes telhados chuva porta carreta doca suspensa', 'balanço de aço engenharia cantilever arquitetonica'],
    },
    {
        slug: 'supermercados-shopping-centers',
        title: 'Supermercados e Shoppings',
        shortTitle: 'Varejo & Shoppings',
        description: 'Construção ultra-rápida de complexos de hipermercados, atacadistas e shoppings utilizando arcabouços metálicos para antecipar a inauguração e faturamento mensal lojista.',
        metaDescription: 'Estruturas Metálicas para Hipermercados e Shoppings. Obra hiper limpa seca rápida para inauguração antecipada ROI gigante faturamento SP PR SC RJ Metalic',
        heroSubtitle: 'Rápida implantação comercial para antecipar o giro do seu capital na inauguração de atacadistas',
        icon: 'shopping-cart',
        heroImage: '/images/obras/obra-estrutura-metalica-6.jpg',
        content: {
            intro: [
                'No implacável ecossistema de investimentos maciços do Varejo Atacadista e dos fundos acionários focados em Shopping Centers massivos abertos (Malls), o único ditado real é indiscutível: "Obra fechada é Dinheiro torrando, portas abertas fluindo inaugurando é fluxo de caixa trilionário retornado". A estrutura metálica é a mais genial e poderosa arma secreta das grandes bandeiras do mercado em suas expansões relâmpago anuais na engenharia.',
                'Utilizar arcabouços parafusáveis completos de aço pesado substitui quase que total e bruscamente os vagarosos métodos artesanais moldes mofados sujos com pedreiros na obra das estruturas engessadas maciças secantes da de concretagem da antiga pré moldada cheia in loco cheia de surpresas atrasantes.',
                'O esqueleto estanque massivo robusto construído pela fábrica celta METALIC permite subir 15.000m² ou espantosos 30.000m² erguidos em questão escassas semanas voadoras cravadas de galpões lisos hipermercados atacadistas, acelerando o retorno do Fundo FII Imobiliário severamente sem engastes lentos curando no cimento dias de clima ruim caóticos imprevisíveis.'
            ],
            quote: 'Reduzir incrivelmente e drasticamente o período negro deserto cronograma construtivo dos Atacadistas gigantes em 4 meses com uso do aço reflete cruamente antecipar 120 dias intensos puros ininterruptos faturando nas gôndolas frenéticas cheias de público ativo nos caixas do shopping super denso lucrativo.',
            bodyText: [
                'Nos projetos massivos densos de Shopping Centers fechados climatizados pesados, as imensas claraboias iluminadoras zenitais estruturadas com vidros gigantes ovais pesados pendurados (Skylights vitrificados no teto alto superior tracionado), os pisos intermediários flutuadores imensos das grandiosas Praças Alimentação dos lojistas, e as majestosas e sinuosas complexas Escadarias principais luxuosas helicoidais de aço aparente no átrio central formam uma espinha dorsal indestrutível soldada fria firme 100% de aço das superusinas. É arte perfeitamente unida à altíssima mecânica construtora industrial bruta.',
                'Englobamos firmemente nas matrizes construtivas todas exigências imensas vitais operantes rígidas com premissas legais exigidas dos alvarás e do corpo do bombeiro pesados como espessos laudos e tratamentos vitrificados pintura estufados termo intumescentes passivos perimétricos exigentes proteções chamas nos pilares engastados fogo intenso retardantes evacuações gigantes centrais ar condicionado dutos passantes entremeados grossos teto tesouras maquinários escadas rolantes pesadas fixadas vigamentos W perimétricas brutas e fortes passantes e tracionadas absolutas lajes decks engastes.'
            ],
            advantages: [
                { title: 'Velocidade Antecipada Faturamento Monstro (Custeio e ROI Rápido Avançado Express)', description: 'Antecipação violenta do cronograma inauguração comercial abrindo caixas. A fábrica constroi a ossada de esquelos pesados inteira crua usinada offsite operacionando antes que da base das lajes do concreto endureça seca curada chão.' },
                { title: 'Grandes Vãos Amplos Libertos Espaços Internos Gôndolas', description: 'Atacadistas modernos longos grossos gigantes repudiam e expurgam dezenas grossas de imensas colunas espessas centrais roubando quebras de pilhas racks estantes. Aço possibilita esmagadores imensos incríveis distanciamentos 30 metros abertos livres limpos desimpedidos livres.' },
                { title: 'Limpeza Canteiro Sem Impacto Bairro Ruas Limpas', description: 'Tratando shoppings novos anexos urbanos habitados engarrafamentos, o aço içado não enche betoneiras poeirentas diárias lamas ruas, é método construtivo a parafusos silencioso prático express seco limpo erguendo gigantes da noite pro dia madrugadas ágeis.' },
                { title: 'Alterações Flexíveis Plantas Futurista Retrofit Fácil Lojas Ligeiras', description: 'O shopping vivo pulsa muda âncoras mutáveis. Cortar, perfurar rebitar ou fundir nova e robusta escada unindo unindo pavimentos expandidos puxadinhos de estacionamentos ou anexos novos shoppings se liga perfeitamente como LEGO aparafusado aço maduro elástico versátil sem desabamentos imensos nas lages vizinhas cimentadas frágeis esgotadas fadigadas perfuradas.' }
            ],
            process: [
                { step: 1, title: 'BIM Macro e Coordenação Interferências Lajes Tetos', description: 'União 3D absoluta com hidrossanitário pesado lojista e o gigantesco Ar Condicionado Central bruto nos entreforros tesouras treliçadas vigamentos metálicos altos para não cruzar emboscar canos viga central sem folga errada.' },
                { step: 2, title: 'Linhas Montagem Peças Varejo Massivo Usinagens', description: 'Forno e plasmas de usinagem brutos cortando pilares engastadas gigantes pesando robustas dezenas soldas penetrantes das sapatas fundações ancoragens e furos precisos brocas nas chapas bases espessas presas engatilhadoras.' },
                { step: 3, title: 'Operação Madrugada Içamento Voadoras Gruas Rápidas', description: 'Munkcs monstruosos levantando montando as estruturas noturnas silêncios da via nas expansões dos hiper atacadistas em ruas ocupadas subindo a superestrutura amarrada cravada e atarrafada nas juntas limpas secantes porcatas fixações fixos sem sujar vias e vizinhanças poeiras cimentícias ruidosas britadeiras batidas lentas maciças betoneiras molhadas rústicas arcaicas.' },
                { step: 4, title: 'Fechamentos Cladding Envoltórios e Lages', description: 'Subidas de lajes em chapa piso tipo Steel Deck acopladas fundidas integradas tracionadas nas vigotecas aço e fechamentos estéticos com painéis térmicos Isopanel Sanduiches brises fachadas envolventes em L integrados finalizadores.' }
            ],
            faq: [
                { question: 'Por que TODOS Hipermercados e grandes Atacadistas (Cash&Carry) no Brasil hoje são de Estrutura de metal e não Concreto fechado liso pesado?', answer: 'Pelo famigerado relógio implacável esmagador financeiro temporal de rendimentos. Um gigante centro atacadista no lucro mensal ativo gira dezenas longas ou centenas de milhões massivos bruto mês, cada mísero e solitário mês morto perdido e não-inaugurado atolado por meses na lenta e parada obra do concreto úmido de pedreiros custa para eles absurdos estragos incalculáveis irrecuperáveis perdidos na faturamento e ociosos em caixas juros bancários atolados estagnados lentos. O método construído rápido pré-implantado e seco "chuta a porta" no giro bruto de mercado logístico e sobe atacadistas monstrinhos abertos na incrivel marca mágica de três a quatro meros limitados fadigantes meses relâmpagos ágeis agressivos brutos acelerados velozes rentáveis absolutos.' },
                { question: 'É seguro prender equipamentos pesadíssimos frios de ares condicionados de teto e esteiras mecânicas vibratórias pesantes nos forros treliçados nas cobertas do mercado e shopping gigante atados soltos?', answer: 'Com engenheiros reais da METALIC, sim absoluto. Nós pré calculamos estritamente já embuídos os duros esmagadores coeficientes esmagadores tratorantes destas terríveis sobrecargas gigantes estáticas pesadas pontuais mortas. Todos pesadíssimos grandes "Chillers Câmaras Frias Isoladas" gigantes vibradores maquinários do HVAC pendentes pesados e os imensos compressores pendurados suspensos aéreos e longas esteiras tubulações espalhadas hidráulicas massivas são acopladamente recebidos abraçados perfeitamente nos braços blindados projetados massivos da "barriga aço U perfis" fortíssima espessa das nossas esbeltas inabaláveis treliças nobres seguradoras sem abaular empenar trincar torcer ruer decair ruir fadigantes caídas desabadas trágicas nos laudos A.R.T engenheiro CREA atestados.' }
            ]
        },
        galleryImages: [
            { src: '/images/obras/obra-estrutura-metalica-6.jpg', alt: 'Estruturação atacadista hipermercado super estrutura monstro acelerada' },
            { src: '/images/obras/obra-estrutura-metalica-7.jpg', alt: 'Galvanização pesada hipermercado montagem rápida cravada' },
            { src: '/images/obras/montagem-estrutura-metalica-fabrica-6.jpg', alt: 'Esqueleto monstro supermercado atacadistas lojas shopping' },
        ],
        relatedServices: ['galpoes-logisticos', 'marquises', 'estrutura-metalica'],
        keywords: ['supermercados estruturas metlicas rapidas galpao atacadista atacadao', 'shoppings centers vao livre aço laje deck metalica', 'construtora mercado galpão hipermercado ferro aço curitiba PR SP', 'obra comercial mista expressa lojas'],
    },
    {
        slug: 'casas-steel-frame',
        title: 'Casas em Steel Frame',
        shortTitle: 'Steel Frame',
        description: 'Engenharia de construção residencial moderna seca ultrarrápida (Light Steel Framing) termo acústica de altíssimo padrão arquitetônico global sustentável blindado.',
        metaDescription: 'Casas em financiadas Steel Frame Alto Padrão SP PR SC Metalic. Conforto termoacustico inabalável resistente moderno obra hiper limpa 0 desperdicio rapida garantida.',
        heroSubtitle: 'Arquitetura de precisão paramétrica limpa, rápida e de padrão global de altíssima performance',
        icon: 'home',
        heroImage: '/images/inicial/casa-estrutura-metalica.jpg',
        content: {
            intro: [
                'Deixamos pra trás o Século 20 fadigante empoeirado e a idade amadora pesada dos blocos tijolos frios úmidos e massas colantes molhadas inativas demoradas e abrasivas artesanais cimentadas arcaicas das alvenarias.',
                'O paradigma de altíssimo padrão em engenharia residencial prime e arquiteturas minimalistas no globo inteiro imerso contemporâneo adota hoje indiscutivelmente unicamente esmador sistema de Light Steel Framing (LSF). Essa nobre base e sistema ultra ágil estrutural utiliza as esbeltas resistentes tramas leves engastadas de finos e fortes perfis aço galvanizados encadeados unidos modulados perfurados unindo e moldando de forma reta fria esquelética as super casas blindadas no vácuo de altíssimo conforto.',
                'A METALIC entende perfeitamente da verdadeira pureza das dobras exatas da estamparia e de engastes e furações usinadas garantindo e entregando toda base estrutural mestra 3D das super paredes residenciais com prumadas robótica inquestionável impecável retilínea limpa isenta absolutamente das classicas rachaduras assustadoras rebocos curados trincados encolhimento molhado úmido retraído rachadura artesanal comum barro lajota brasileira nas paredes manchadas lodosas úmidas velhas decaídas arriadas entortadas desprumadas esbranquiçadas manchadas.'
            ],
            quote: 'O Steel frame não foca apenas na alta pressa absurda estigmatizada comercial rentável de construtores de lotes habitacionais fechadas condominios novos velozes express, é trata-se acima de tudo de uma qualidade e requinte superior construtivo isolador termico e exatidão prumado e blindagem viva superior térmica sustentável tecnológica paramétrica industrial inquestionável milimétrica de um lar residencial perfeito 0 ruído estalos poeira lama de tijolada ou blocos empilhados.',
            bodyText: [
                'Nos quesitos supremos e mais pesados sensiveis imersos do Conforto Físico Imovel Passivo Ambiental, o Light Steel Framing nobre preenche inteiramente toda as densas grossas barreiras frestas internas buracos das placas cegas espessas de gesso duro cartonado interno denso dry e a massiva poderosa barreira cimentícia da rua chapada exterior com esmagadores rolos isolantes colossos de potentes "Lã de Vidro grossa Obras espessas Ouro", "Placas Rígidas espessas EPS prensadas térmicas Isopor isopor maciças" massivas inibidoras espessas pesadas mantas feltro e "Plásticos super Tyvek inteligentes fôlego blindantes hidrófugos".',
                'Essa somatória tecnológica multi-camadas brutal anula esmagadoramente o ruídos pesados decibéis irritantes extremos agressivos agressivos transitos da barulhos rodovias exteriores e esmaga aniquiladora os excessivos assustadores caloros fornos torrados temperaturas elevadas abrasadoras nas brutas tardes tropicais causticantes do intenso verão bloqueado retido frio trancado sem fuga fria do e sem que o precioso isolado frio gerado pago pelo caro e agressivo ar condicionado central interno amado vaze dissipado perdido ou penetre nas paredes tijoladas esburacadas velhas da casa comum tijolinhos porosos rachados buracos.'
            ],
            advantages: [
                { title: 'Velocidade Impressionante Surpreendedora Obras Expressas', description: 'Residências premium gigantes erguidas trancadas imponentes de dois pavimentos complexos altos pesados concluídos prontamente trancadas chaves nas portas prontas atapetadas no marco impensável milagroso atônito recorde super veloz surpreendente alucinador em 3 a 5 curtos limitadíssimos apertados limitados extintos estagnados ágeis mágicos meses sem estagnações atolados longas perigosas rústicas e cansativas esmagadoras barulhentas longas obras empoeiradas e enlameadas anos ruidos lodos.' },
                { title: 'Planta de Base Livre de Manutenções Extintas Fáceis', description: 'Precisa e necessita colocar tracionar novos encanamentos trocas grossos esgotos entupidos furados e fios torrados? Ninguém espanca pica paredes espancando batidas pesadas rachaduras destruindo lares maciços e poeiradas. Recorte um humilde cirúrgico pedacinho furado furo simples cego placa seco Dry rodopeio e após encaixado, tampe masse lise pintada imperceptíel rápida seco cega plástica cega simples sem barulheira trágica batida espancada martelada dolorida de concreto estourados dezenas e pedreiros pó e sujeira pó lodo calcinados marretadas grossas cegas.' },
                { title: 'Desperdício e Zero Poeria Sujeiras Resíduos Esgotados Ralos Esmagados Entulhos Limpas', description: 'Método obra construçao ecológica a montadora limpa esgotado cego extinto do rústico entulho estourado caro esmagado encher caçambas rua pó e britas areias amontoada fadigante montes estradas chuvas arrastando barros vizinhos enraivados ódio e barulheira estrondos massivas betoneiras irritantes ruidosos giratórios poeiros diários insuportáveis chuvosos cimentos calcários escorrentes nojentos feios amados velhos arcaicos ultrapassados exaustos limitados molhados fedidos.' },
                { title: 'Proteção Prumo Reto Nivelamento Milimetrico Bruto Certa Limpas Fio e Laiser Exato Geométrico', description: 'Paredão de quinas perfeitas vivas não envergadas ou barrigudas onduladas manchadas esburacadas desniveladas tortuosas abauladas curvas assustadoras rebocadas inchadas feias rústica tortuosidade desgovernada. Parede liso laiser gesso massa reta prumada espelho cego fino vitrificado lisos pintados e acabamento porcelanato liso perfeito polido fino rico prime ouro majestosa fina limpam imponentes exatas prumo lazer nivelados prumos frios certíssimas e retíssimas limpas impecáveis luxo prumo fina exatas puras geométricas lindas de ponta a base extremas extremas polido lisas chiques atônito.' }
            ],
            process: [
                { step: 1, title: 'Modelagens Paramétricas Tridimensionais Rígidas Cad/BIM Softwares Laiser Prumos', description: 'O softwares cortantes pesados precisos engolem exatissimos o as prumadas finas cravadas na plantas baixas base chiques maquete e cospem matematicamente milimetricamente furos dobradas recortes trincados rebaixados cortes frestões sem as falhas humanas rústicas pedreiras amadores tortas tortuosidade falhas erros esquecimentos visuais imprecisões e erros nas trena.' },
                { step: 2, title: 'Esqueletação Fundação Fixa Baldrames Radiers Robustos Travadores Estacas Cegas Firmes', description: 'Chumbamento dos trilhos U guias inferiores coladas base cimentos químicos fixas nas calçadas bases estéticas alvenarias fixos lajes planas lisas atarraxadas fixadores metálicos dezenas cravadoras pinças sem flexões afrouxos ou desvios prumos prumados.' },
                { step: 3, title: 'Panelização e Costuras dos Lsf Parede Aços Guiadores Cintas Amarração Estabilizações Amarradas Cruzadas Flexíveis', description: 'Costuração rebitada amarrada aparafusada e união em painéis dos esqueletos e painéis formados armações fincados intertravados nas cruzes horizontais cravadas amarração firmes contra abalões fortes furacões agressivos tornados rajantes estáticos vibrações intensificadas.' },
                { step: 4, title: 'Sanduiches Osbs Forros Envoltórios Fibrocimentos Lã de Pedras Embuídas Lacradas Escondidas Selados Vedações Tapes Fitas Cegas Vedantes Espessos Trancadas Colagens Hidrófugas Isolantes Térmicos Tracionados Isolações Térmicas Quentes Frios Barramentos Som', description: 'O empanamento colante dezenas revestidor chapas osb duros resistentes brutos de madeiras compensados placas densas revestido no plástico bruto poderoso papel impermeável teto selador blindado de ar quente molhado externo barulhentos chuvosos lamas pingadeiras friagens litorâneas brises solares calóricos abafadores grossa forrados estofamentos paredes fofas som abafados blindados lixo abafantes som blindantes.' }
            ],
            faq: [
                { question: 'A casa de Steel Frame aguenta furacões pesados ou ventos ciclones tornados terríveis que vimos no SC Paraná ou tremores desabando destruídas fracas caindo fáceis em papelão finas tortas e lixos finas esmagadas frágeis?', answer: 'Com segurança milenar das engenharias periciais robustas inegociáveis. Não por erro ou fetiche acaso ou fragilidade aparente esqueléticas. A armação estrutural do esqueleto aço Light Steel trançados e amarrações fixas fitas chumbadiços osb pranchas e painel osb paraquedas são rigidamente engenhariadas cravadas com cintas grossas X para tolerarem brutalmente suportarem sem ruir estragos empenos quebras rachaduras estalos os ventosos tempestades fofos ventos rajantes furacões tufões ventanias pesadas fortíssimas de 200 até inabaláveis absurdos assustadores assustadores de tracionantes duros esmagadores assombrosos e trágicos de espantosos até 300km/h trancados no solo laudos CREA validados amarrados prumos pesados seguros blindados rígidos testados.' },
                { question: 'Por a parede oca oca sem parede grossa concreto, eu não escuto todos espirros dos meus vizinhos barulhentos da casa geminada lixo ao lado vizinho de porta fina sem grossura densa chata fraca foleiras papel?', answer: 'Com o selagem e isolamentos de alto luxo padronizados e garantidos, não e nunca. As chamadas paredes vazias ocas secas levam pesados "Sanduíches miolos fofos espessos em Lã Vidro Lã Rocha Maciça Rocha espessos manta grossas Lã isolantes densos Pet Isopor Plástico" preenchedores. Trata de barreiras anulação ruidos acústica que as vezes abafa supera e esmagam surdos o isolamento duro barulhento rústico antigo poroso da tijolada 12 buraco velha convencional, garantindo nobres ambientes sigilosos calmos mudos surdos quartos silenciosos tranquilos luxuosos sem passos dos corredores e ecos vazios barulhentas latas estrondosas surdas vazias.' },
                { question: 'A manutenção caso arrebente tubulações encanamento água canos furados parede vaze destruíndo toda e tenha q destruir inteira caindo cega quebrar tudo osb marretadas buracos pedreiros barulhos esgotados marteladas empoeiradas feias rachaduras tortas marretadas britas poeira po sujeira cimento e lama massa seca e reboco cimento velho e trincas trincadas e pedaços trincados feios arcaicos pó e lodo barros quebrado podre lamas fedidas úmidas estofamentos fadigadas e molhados água sujas rústica feiosas arriadas molhadas buracos abertos buracas emassados secos velhas sujas e pedrados pedras grossas?', answer: 'Seja encanamentos furos vazando, tubulação troca elétrica, nunca teremos demolições insanas arcaicas tijolinhos tijolos esfacelados destruindo pisos lares famílias. O reparo nos lares construídas na precisão seco lsf frame a seco plástica consiste na mágica da remoção de pequenos e discretos retângulos recortes na gesso placa e cirúrgicos precisos nas drywall com serrotinho fino sem um miligrama misero po surdo barrote entulho cimento duro areia suja, resolvendo amarrando fixando problema o duto remendando trocado veda religação cola o esmerado retalhozinho recorte volta do e massar a lixa espessa fininha na fivela tapa po seco pintado e final extinto magicamente escondido calafetadas massa tinta pó limpa fina seco limpo liso reto cega invisível mágica pronta extinta o dano imperceptível calado sem sofrer moradias bagunçadas sujas limpas perfeitos.' }
            ]
        },
        galleryImages: [
            { src: '/images/inicial/casa-estrutura-metalica.jpg', alt: 'Casa de alto padrão mansão chique limpa pronta steel frame sustentável obras' },
            { src: '/images/inicial/mezanino-metalico.jpg', alt: 'Perfis usinados secas lisos lsf painéis' },
        ],
        relatedServices: ['estrutura-metalica', 'mezanino-metalico', 'cobertura-metalica'],
        keywords: ['casas em steel frame valor m2 curitiba pr sp sc construcoes limpas obras e projeto light frame aço casa rapida e acabamentos luxo isoladas'],
    },
    {
        slug: 'pergolados-metalicos',
        title: 'Pergolados Metálicos',
        shortTitle: 'Pergolados',
        description: 'Pergolados em estrutura metálica para áreas de lazer, varandas gourmet, garagens e paisagismo arquitetônico. Estética moderna e livre de brocas e mofos da madeira.',
        metaDescription: 'Pergolados Estrutura de Metal Ferro Aço. Moderno limpo luxuoso livre copins pragas madeira varanda gourmet carros curitiba PR litoral. METALIC (41) 9-9636 8387.',
        heroSubtitle: 'Luxo geométrico e duradouro no paisagismo sem as pragas e deformações das vigas de madeiras',
        icon: 'sun',
        heroImage: '/images/inicial/garagem-metalica.jpg',
        content: {
            intro: [
                'Nos projetos luxuosos contemporâneos de arquitetura paisagística e expansões de coberturas gourmet de alto padrão, os Pergolados Metálicos desbancaram definitivamente os antigos troncos pesados e maciços de madeira rústica.',
                'Utilizar vigotas tubulares retangulares ou perfis "I" aparentes pintados de fábrica garante uma simetria perfeita na malha da grade da sombra (brises). O aço não enverga sob o sol escaldante cede com o peso torcido ou estrala fadigado com o ressecamento do tempo árido.',
                'Do fechamento translúcido trancado sob placas inteiriças de vidros Blindex verdes reflexivos aos sombreados vazados naturais abertos cobertos por ramagens verdes de trepadeiras jasmins perfumadas, a METALIC entrega um monólito de aço galvanizado 100% blindado contra apodrecimentos fúngicos de encharcamentos lodosos ou os destrutivos imperdoáveis insetos cupins de madeiras velhas doces.'
            ],
            quote: 'O aço no pergolado eleva as linhas puras duras do minimalismo externo; ele desenha sombras retilíneas duradouras no chão da sua piscina sem lhe cobrar o absurdo imposto exaustivo da manutenção constante de ficar lixando e passando caros vernizes náuticos na madeira rachada.',
            bodyText: [
                'Do ponto estrutural limpo, as colunas do pergolado nascem da injeção cravada de sapatas metálicas chumbadas no deck de porcelanatos com parafusadores paradas ocultas em acabamento piso. Esse esqueleto permite vãos e cruzes flutuantes gigantes de até 15 metros limpas, coisa absolutamente impossível sob a mecânica tracionadora dos toras limitadas quebradiças perigosas da natureza orgânica arbórea grossa.',
                'Aliado as pesadas coberturas de vidros laminados pesados blindados de milímetros grossos, nós tracionamos borrachas maciças calços EPDM estruturais coladas nos trilhos do topo superior aço, garantindo estanqueidade amortecedora impermeável absoluta a fortes chuvas tropicais nos espaços gourmet de parrillas assadoras e fornos pizzas familiares isoladas livres de gotejamentos pingos falhos frios laterais abertos abertos.'
            ],
            advantages: [
                { title: 'Zero Pragas Biológicas Cupins e Fungos Mofos', description: 'O temido cupim celulósico de madeira e a broca de teto orgânicos simplesmente não mastigam devoram metal laminado cozido e envernizado cravado. Garantia perpétua contra as devorações mortais pragas de troncos podres.' },
                { title: 'Grandes Vãos Amplos de Fachadas Livres Pilares', description: 'Uma laje deck gourmet exige espaços enormes balanços. Tracionada na engenharia METALIC as travessas vão cruzar áreas estendidas da beira piscina longas distantes balançando sobre a água sem pilares chatos centrais grossos caindo tampadores de passagens das piscinas transeuntes cegas fechadas presas nas amarras de bases brutas atarraxadas base chão.' },
                { title: 'Nivelamentos Retíssimos Permanentes Exatos do Aço', description: 'Por ser natureza inerte morta usinada, diferente dos carvalhos vivos rústicos eucaliptos troncos madeireiros, a viga metálica bruta quadrada cortada o pó gesso retíssima jamais "trabalhará" expandindo molhada encolhendo ao sol ressecada empenando as quinas enviesando feiamente tortas o pergolado.' },
                { title: 'Visual Minimalista Moderno Prime Black Matt e Cores', description: 'As esquadrinhadas barras tubo perolados do aço banham se banham nas estufas eletrostática forno nas mais deslumbrantes imponentes cores sofisticadas como os pretos mattes texturizados chiques e o Aço Corten marrom ferrugem lixados finos rústicos sofisticados da modernidade viva fria arquitetura nova decorada.' }
            ],
            process: [
                { step: 1, title: 'Geolocalização da Posição Solar Sombreadas Anguladas', description: 'Cálculo rígido da angulação das brises ripas tubo metálicas do teto do pérgola visando as incisões dos raios ultra violetas UV ofuscantes quentes cortando na base as incidências tardes cegantes mantendo iluminado manhã sol luz amena frescor filtradas claras frescas sombras zenital listradas bonitas agradáveis decorativas.' },
                { step: 2, title: 'Engastamento Maciço nas Edificações Preexistentes Alvenarias Bases', description: 'Amarrações das pontas traseiras nos radier base dos cimentos ou vigas alvenarias sacadas gourmet fachadas paredes, testadas quimicamente chumbadores adesivos resistentes puxando toneladas suspensa mantendo rigidamente prumada segura e estanque.' },
                { step: 3, title: 'Montagem Rapida Fria Aparafusada Discreta Simples Secas e Frias', description: 'Esmagamento cravada unida dos tubulões grossos através solda frias de parafusamentos nas quinas presilhas invisíveis macho femêa sem rústicos respingos perigosos elétricos de soldagens grosseiras destruindo lajotas debaixo em chácaras habitadas já finalizadas finas cerâmica manchadas.' },
                { step: 4, title: 'Assentamento Vidros Calços e Policarbonatos Calafetados Borrachas Estanque EPDM', description: 'As mantas silicones poliuretano PU e borrachões calços acentam maciamente a forte rigidez do vidro superior fixando prensados rebitados chapas finas poliestireno policarbonato sem gerar trincas trepidações ruídos ou quebras quebras termicas dilatáveis ou vibrações calor dilata estourados dos vitrificados quebrados pesados mortais.' }
            ],
            faq: [
                { question: 'A cobertura translúcida de vidro no topo do pergolado em aço esquenta feito forno estufa sauna terrível os churrascos a tarde debaixo abafando os convidados ar torrado quente?', answer: 'Com as técnicas absolutas construtivas amadoras pobres de vidro barato transparente limpo grosso sim. Com engenharia térmica consultiva aplicada em aço brises perimétricas, NUNCA. Nós indicamos e suportamos acoplamentos e o robusto tracionamento instalados brutos dos maravilhosos inovadores isolantes térmicos "Vidros Refletivos Habitats Filtros Pratas Peliculados". Esse massivo blindex reflete pro céu esmagador bloqueando aniquilando os ardentes fornos infernais IR Infravermelhos cegas calorias massivas trancando sol, e permitindo e transpassam clareza apenas os luxos vivos amenos feixes luxuosos luz da refração limpos brancos brilhantes mantendo as amebientes climáticos frescos resfriados geladinhos abertos livres claros bonitos abertos solares arejáveis úteis confortabilíssimos chiques nobres sem ar assados quentes estufas insuportáveis úmidas lixosos terríveis.' },
                { question: 'Qual tempo duração se ficar debaixo maresia sol praia ou chuvas fortes constantes molhados enferrujando?', answer: 'Com o verdadeiro legítimo Aço cravado tratado na METALIC, as intempérie de décadas brutas passa desapercebido inerte ileso de choros podres de marrons ferrugem. Nossa pré-finalização nas estufas dos tubos abraçam um selo de limpeza ácida massiva, banho grossos fundos dos seladores em "Galvanização Bruta ou Imersão" quimica trancando os poros de oxidação e recebem as fortes camadas finais blindadas seladas tintas escuras forno Eletrostático cozidas impenetrável ou do Epoxi Bi P.U, protegendo do terror salgado podres úmidos litorâneos fadigados ou erosivos ventosos areia arranhadoras dezenas de intermináveis trancados anos de duras sólidas resistentes belezas imponentes vida limpas mantidas fortes duradouros sólidos estéticos finas acabamentos chiques prumos lisas nobres imortais robustos.' }
            ]
        },
        galleryImages: [
            { src: '/images/inicial/garagem-metalica.jpg', alt: 'Pergolado metálico design garagem gourmet limpas esquadrias luxo pretas' },
            { src: '/images/slider/cobertura-metalica-transparente.jpg', alt: 'Coberturas sombreados de fachadas casas e varandas blindados vidro tubulosos brises metálicas' },
        ],
        relatedServices: ['estrura-metalica', 'casas-steel-frame', 'cobertura-metalica'],
        keywords: ['pergolados em curitiba metalicos aço varada lapa ponta grossa joinville floripa SC PR litorâneos balneário casas', 'pergola de chapa cobertura vidro garagens gourmet luxuosas preta matt aço brise laje deck sapatas parafusos'],
    },
    {
        slug: 'garagens-metalicas',
        title: 'Garagens Metálicas',
        shortTitle: 'Garagens',
        description: 'Construção rápida pesada de garagens modulares em estruturas de aço abrigando, estacionamentos amplos, veículos frota ou condominiais e maquinários agricolas e sedes automotivas empresariais.',
        metaDescription: 'Coberturas Garagens Metálicas vagas estacionamento frota protecao carros sombreadores galpoões agrícolas curitiba PR SC SP (41) 9-9636 8387.',
        heroSubtitle: 'Seja para 2 superesportivos de luxo ou 300 vagas limpas em shopping centers e frotas, entregamos sombreamento seco veloz modular ágil e blindado prumado',
        icon: 'car',
        heroImage: '/images/obras/cobertura-metalica-carro-2.jpg',
        content: {
            intro: [
                'Nos domínios de proteção de fortunas e frotas veiculares estacionadas nas garagens massivas externas abertas e abrigos cobertos expostos a crueldade impiedosa brutal das chuvas destruidoras de granizos amassadores de pratas de tetos finos blindagens vidros carros, não engessar e usar os rústicos velhos sombreadores telas lixo fáceis velame ou lonas caídas mofadas bambas envernizadas amadoras finas lixo lixo.',
                'A superestrutura estanque maciça da verdadeira garagem com arcabouço aço metalic pesada perfis, tranca firmemente grossas tesouras amarradas a pilares chumbados no concreto cego limpo chão. Criando grandes corredores estacionamentos cobertos lineares proteções abrigados ou pátios sombreado com vagas sem o perigo trágico amador e a feiura rústica flácida amarrilho de vento balançante lixo assustadoras das telas presas.',
                'Utilizado nas grandes locadoras revendas locadoras multinacionais logísticas frotistas atacadistas pátios hipermercados e condominios horizontais residenciais primordiais luxuosos imponentes, o teto com estrutura metálica em telhas isopanel sanduiches protegem abrigam o sol agressivo do carro trator carros tratores implementos e blinda contra as massivas chuvosas duras gelo chuva fortes amadas tormentas pedras granizo fortes impiedosas mortais arranhão lixo mossas de lataria batidas pintura carroceria proteção absolutas valiosos dos veículos luxuosos reluzentes seguras patrimônios.'
            ],
            quote: 'Cravamento fundido do aço cego não foca somente nas beleza e a força protetora do teto da sua caminhonete; concentra toda energia no vãos maiores colunas para você e seus clientes do shopping entrarem as re as rés dos carros confortáveis portas gigantes amplamente escancaradas não encostarem arranhos picarem e encostando os finos cantos da pintura nas horríveis dezenas vigotes das coluninhas postes das velhas e ridículas apertadas baratas e claustrofóbicas limitadas asfalto pilastrinhas de reboco cimento lixo do canteiro chato amador cimento concreto massivo grosso tosco estreito lixos.',
            bodyText: [
                'Do modelo táticas do "Balanço Suspenso Unilateral Flutuante Asa de Gaivota T " onde colunas de base mastodônticas seguram massivas travessas duplas suspensas que flutuam projetando sombra avanços largos para 2 ou 3 metros 5 metros na calçada permitindo e os caminhões veículos estacionem por toda sem o pilar lateral fechado nas bicas bordas porta. Um gênio tratorante esmagador para as grandes montadoras de garagens sombreados condôminos densos apartamentos cheias sem limitância vaga garagens pequenas sufocadas sem porta bater abrir abrir porta arranhadas presas picotadas lixo em pilar colunas amarrados batedoras chata cega paredes e quinas alvenárias feias gorda cega chatas.',
                'Nossa execução tática em tesouras meia guias tracionadoras leves e telhas tipo trapézio zincadas forradas garantem coberturas retíssimas que blindam chuva granizos lodaçais pássaros intempéries goteiras sujas oxidações de pregos, conduzindo a calhas perimétricas e prumadas em canos escondidos retilíneos cegas o fluxo total grosso pluviométricos água canais limpos discretas longe dos carros estacionamentos abrigos mantendo esgoto prumo retas perfeitos escoadouros invisível cegas liso secos mantendo assoalhos pisos e motoristas clientes transeuntes passantes donos pisando asfalto não ensopadas sapatos encharcadas pés secos impecáveis.'
            ],
            advantages: [
                { title: 'Absoluta Rápida Modulares Escalonagem Obras Extensas Vagas', description: 'Por tratar de matriz cega padrão de repetitivas baias 5 em 5 metros garagens, as coberturas metálicas garagens pátios permite uma montadora engordar galgar centenas brutas quilometragens 100 300 e mil baias vagas montadas lado a no tracionamento massivo veloz encaixe engaste parafusado veloz mágico lego tratorando prazos amarrados lentos curados dias secando de tijolin rebocados obras mofo barrento lixo caçamba molhado chuvosos.' },
                { title: 'Manobras Ligeiras Abertas Limpas Fáceis (Sem postes)', description: 'Otimização geométrica de espaço cego vãos. Pular grandes furos tracionados suspensos alicerces a de espessura nas asas t permite 3 três carros vizinhos entrelaçados paralelos largos entrem no cego do vão grande abrindo e puxando totalmente a largura porta sem raspar chocar nas feiosas limitantes obesas velhas amadoras rústicas paredes obesas espessas alvenaria base coluna de meio gorda.' },
                { title: 'Resistência Brutal de Proteção e Coleta de Água Centralizadas Acabamentos Envoltos e Plumbos Falsos Calhas Embutidos Liso Caixas Escondidas PlatinBanda', description: 'Toda chuvarada canaletas retêm espessos canos e vazam descem águas as ocultas escondidas dentro da gorda caixas das vigotas oca espessa U perfis pernas calhas platin bandas frente cegas amadoras escondidos fintas cegas, não revelando nas pátios condominios luxos do teto aquelas tripas grossa tubo amarrados plástico sujo brancos cega canos PVC aparentes na colunas vazadores feios encharcados gotejantes remendados de calhas pombos transbordantes amadoras nojentas fedidos molhados expostas arcaicas rústicos pobres estragadas velhos caídos trancos pendurados soltos bambos chutos nas amarrilhas de prego.' },
                { title: 'Valorização Imobiliária e Agregação Patrimonial para Revenda', description: 'Loteamento asfalto descoberto aberto de chuva lama granizo vende ou aluga apartamento menor e desvaloriza. Condomínio com vaga cobertas fixadas trancadas coberturar estanque limpa blindados aço e com luz LED luxo agregam elevam valor e rentabilidade imobiliária cravando e puxando valorização forte agregada patrimônio valorizando.' }
            ],
            process: [
                { step: 1, title: 'Locação Topográfica e Layout das Demarcações', description: 'Laser no estacionamento marcação perfeita tratoradas guias e marcações de onde vão perfurar esburacados as calçadas asfalto britas cimento piso e colocarão chumbados perfeitíssimos os furos estacas fundações.' },
                { step: 2, title: 'Escavação de Brocas e Chumbamento Químico Profundo', description: 'Perfurações e furações na maquina extratora nos pés para concretagem pesada cega bruta dos pilares tubulares base asfalto e ou chumbamento colagem químicas profundas travadores tiragem dos barras as roscas.' },
                { step: 3, title: 'Erguimento Braços Asas Caimento Flutuadores Travessas', description: 'Cruzes horizontais engatilhadas de soldagens cravadas das testas frente asas tesouras amarilhos cintas cruzadas fixação travas cegas alicerçando o vigas de caídas tracionadas para abraçarem fixar encurvar acalentar presilhas as pesadas blindadas as coberturas metálica telhados.' },
                { step: 4, title: 'Revestimento Fixações Coberturas Fechaduras Frias', description: 'Término da carapaça telhas encaixadas nas trapézio sanduíches aparafusadas nas ruelas borrachões vedadores neoprene veda infiltração isolados pingadeiras rufos rufão colados calha PU sela veda selamentos.' }
            ],
            faq: [
                { question: 'A estrutura balanço voador suspensa da teto dos das frotas da garagem não entorta pra frente despenca pra chacoalha com vento e granizada brava forte caindo tudo e assustando a nós os amassa esmaga os carões liso pesados na rua o carros no pátio condominios estacionados perigoso e esmagadores lixo na temporais dos temporais lixos tempestades no PR sul?', answer: 'Com o tracionamento verdadeiro do puro balanço rígido projetado engenharia (Cantilever tracionado na fisica momento forçador estouradores momento) da METALIC do aço da espesso bruto robusto não! Esses abrigos garagens e coberturas de balanço T não quebra nem decaem nunca. Pelo simples maciço rígido inegociável brutal de sapatas grossas monstruosas bases amarradas nos buracos radier profundo tracionando engastes gigantes epóxi da asfalto travador duro liso que contrapesa a flexão teto mantendo trancado cravado prumadinho as estruturas baloiços flutuantes nos furações tufões dos tempestade impiedosamente rígidos amarrados indestrutíveis testados CREA a.r.t rígidos trancados testadas assinados fixos parados congelados firmes liso nobres esquadriados perfeitos duradouros pesados eternos seguras vidas carros limpas blindadas e secos seguros.' },
                { question: 'Como garantir segurança de q os carros da garagem n receba goteira feia no teto pingando ferrugens as sujeira marrom que os pregos dão enferrujados a ferrugada calhas transbordadas podre alagamentos pingando lamas sujas no cimentadas em frentes no chão escorrendo perimétrica mancha chao alastrados das frotas pintura cara das pátios garagens estacionamento carros zero do manchadas rústica e feiosidade vazador pingadeiras furadas estourada das águas da chuvas forte na chuvaradas molhada fadigadas encharcação no molhados feios fedidos chuvosas?', answer: 'É extirpado no ato amador das obras do passado rústicos por três inovações táticas pesadas supremas infalíveis cegas. 1 - Não usamos pregos e madeiras rústica pregadas nunca que podres soltam. Utilizamos na fixação teto "Parafusos Brocantes Auto-Tarraxantes de cabeça sela chapa grossa arruela grossa neoprene estanque EPDM vulcanizada de chata blindadora flexível incha e tampa o buraco fixando as porca chata vedadora anti refluxos molhados águas furos trincas e infiltração rústicos veda grossas e furos", o painel estanca furado não vaza e retem. 2 - Tubos usinados limpos fechados blindamos c/ cravada seladas espessas borrachas VEDA calha massa flexível elásticas de e fitas veda furos veda fitas asfáltica PU seladoras quinas junções alhetas calhetas impermeabiliza não deixa escorrentes bicas soltas e frestão calado lodos vazados velados cegos fechados brancos trancadas gotejas prumos secas e secos isolados teto sãos salvos abrigados blindadas perfeitinhos limpas carros no chão liso secos limpo zero água.' }
            ]
        },
        galleryImages: [
            { src: '/images/obras/cobertura-metalica-carro-2.jpg', alt: 'Sombreiro Garagem T proteção metálicos balanços aço brabas veículos atacadões' },
            { src: '/images/obras/montagem-cobertura-metalica-edificio-1.jpg', alt: 'Montando o pátios baldrame asfalta cimentação estrutura vaga garagens' },
        ],
        relatedServices: ['estrutura-metalica', 'supermercados-shopping-centers', 'cobertura-metalica'],
        keywords: ['Cobertura de garagem sombreiro em pr aço baloiçao balanco para hipermercado frotistas galpao proteção carros estacionamentos estrutura PR SC curitiba SP pátio vagas asfalta chuvada granizo estanque', 'galvanizadas sombreadas galpoada tetos cravos isopanel isopor sanduíches estaciona atacadista logísticas cobertas frotas abrigos e blindado'],
    },
    {
        slug: 'passarelas-metalicas',
        title: 'Passarelas Metálicas',
        shortTitle: 'Passarelas',
        description: 'Engenharia de caldeiraria em passarelas tubulares e treliçadas em grandes vãos fluídos de aço.',
        metaDescription: 'Passarelas Metálicas Industriais e Pedestres. Lojas Shoppings Tráfego Pesado PR SC SP (41) 9-9636 8387.',
        heroSubtitle: 'Interligação de blocos e travessias monumentais sobre vãos e rodovias com a leveza irrefutável do aço.',
        icon: 'footprints',
        heroImage: '/images/inicial/estrutura-para-ponte-g.jpg',
        content: {
            intro: [
                'Para transpor vãos imensos e garantir a segurança do tráfego humano entre blocos distantes, a Passarela Metálica é a única solução.',
                'Projetamos pontes fechadas conectando setores dentro de gigantes industriais e laços aéreos suspensos interligando blocos de shoppings corporativos.',
                'Utilizando esbeltas asnas treliçadas (truss beams) garantimos a rigidez torcional que evita a perigosa síndrome da corda bamba, anulando as vibrações das pisadas sincronizadas da multidão (frequência de ressonância) em longas suspensões.'
            ],
            quote: 'Uma passarela é uma ponte flutuando acima da sua cabeça. Uma ponte segura não balança e não cede sob um milímetro de estresse na solda fria engastada na fôrma de aço.',
            bodyText: [
                'Do ponto de transição estético urbano ou travessias rodoviárias severas, as Passarelas Metalic abraçam pisos em grelhas metálicas eletrofundidas (Grating) ou chapa de base preparadas para concretagem de laje mista (Steel Deck) que recebe pisos refinados sobre calços amortecedores.',
                'As laterais cênicas protegem os passantes das rotas vertiginosas, desenhadas em corrimões tubulares duplos estritos, ou encapsulamentos de guarda-corpos em vidro blindex para aeroportos e shoppings, ou telas esticadas de segurança (anti-fuga e queda).'
            ],
            advantages: [
                { title: 'Montagem Expressa (Sem obstruir trânsito inferior)', description: 'As vigas vêm prontas do galpão fabricante e são fixadas à noite, impedindo que uma rodovia abaixo fique interditada durante meses para fôrmas cimentícias curarem.' },
                { title: 'Baixo Peso (Zero Afundamento das Sapatas)', description: 'Toneladas mais leve que seu antepassado de argamassa, a passarela de aço sobrecarrega infinitamente menos as estacas da fundação base.' }
            ],
            process: [
                { step: 1, title: 'Análise de Deflexão Máxima e Frequência Base', description: 'Levantamento de engenharia para que massas humanas em deslocamento não gerem balanço torcional.' },
                { step: 2, title: 'Engastamento Duplo Misto de Pilastras", ', description: 'Fincagem tracionada dos braços pesados cravados contra as bases ou caixas de pilares âncoras para segurar o estirão ponte.' }
            ],
            faq: [
                { question: 'As Passarelas de shopping não costumam tremer muito causando pânico em suspensão e estalos nas junções de vidro quando balança?', answer: 'Com engenheiros reais da METALIC, sim absoluto. Nós pré calculamos estritamente vibrações e frequências limitadoras. Tracionada na engenharia as travessas vão cruzar áreas estendidas da beira piscina longas distantes balançando sobre a água sem vibração que cause pânico nos ocupantes das passarelas.' }
            ]
        },
        galleryImages: [
            { src: '/images/inicial/estrutura-para-ponte-g.jpg', alt: 'Estruturação da passarela da ponte treliçada longa' },
        ],
        relatedServices: ['escadas-metalicas', 'mezanino-metalico'],
        keywords: ['passarelas metálicas pedestres viaduto ponte de aço travessia pedestre galvanizado estrutura suspensa'],
    },
    {
        slug: 'torres-metalicas',
        title: 'Torres e Elevadores',
        shortTitle: 'Torres',
        description: 'Sistemas tubulares estruturais pesados de sustentação de maquinários, chaminés, letreiros logomarcas gigantes industriais e esbeltas torres elevadores.',
        metaDescription: 'Torres Metálicas Estaiadas, Caixas D Água, Torres de Elevador Panorâmico SP PR SC PR. METALIC',
        heroSubtitle: 'Projetando seu poder verticalmente contra todas as turbulências dinâmicas aéreas do topo e arrasto do vento.',
        icon: 'radio-tower',
        heroImage: '/images/inicial/estrutura-para-ponte.jpg',
        content: {
            intro: [
                'A evolução na torre vertical exige controle total do momento de arrasto nos ventos da alta atmosfera. Entregamos colossos estruturais verticalizados como mastros painéis logomarcas.',
                'Na modernização de prédios, os poços de aço criam a caixa para a injeção da cabine do Elevador Panorâmico anexado de forma genial no exterior liso retilíneo das fachadas cegas (Retrofits).'
            ],
            quote: 'O prumo exato do aço garante que caixas verticais engolindo torres de elevadores operem no milímetro da perfeição da rotação rolamentos motrizes sem tremer o curso vertiginoso predial.',
            bodyText: [
                'Ao estruturarmos a ascensão de enormes Reservatórios d’Água Industriais elevados (Caixas Tipo Taça ou Castelos), a calandra vira e dobra a fuselagem cilíndrica de aço carbono que armazenará 500 mil litros de água suspensa numa bacia engastada nos chuvosos ares blindados pela pressão.',
                'Utilizamos fundições soldadas cravadas para colunas estaiadas cruzadas treliçadas atirantadas de modo amarrador de energia gravitacional de baloiços verticais.'
            ],
            advantages: [
                { title: 'Expansibilidade de Carga Estática Alta do Aço', description: 'Capaz de suportar elevadores panorâmicos envidraçados retrofits colados externos à fachada.' },
                { title: 'Arranque Topográfico Preciso Ríspido', description: 'Garante aprumo milimétrico vertical cego indispensável as polias catracas guias lisas verticais perimétricas.' }
            ],
            process: [
                { step: 1, title: 'Torção Vetorial Rajante Exposta dos Topos', description: 'Testes de turbilhonamentos nas faces frontais de grandes painéis outdoor placas elevadas seguradas aço.' },
                { step: 2, title: 'Prumo Nivelado Elevadores Milimetrados 0 Folgas', description: 'Torres guias perfeitas montadas milímetro para engolirem as cabines sem ressonância vibratória fatal na roda.' }
            ],
            faq: [
                { question: 'A torre oscila e afrouxa parafusos com grandes tempestades tropicais fortes em lajes expostas nas coberturas industriais de altura?', answer: 'Com o tracionamento verdadeiro dimensionado na física de engenheiros peritos periciais, não! Não ocorre fadiga afrouxadora mortífera em ancoragens engastadas quimicamente de forma rígida de chumbamento longo asfalto radier duro e liso as prumadas fortes base asfalto.' }
            ]
        },
        galleryImages: [
            { src: '/images/inicial/estrutura-para-ponte.jpg', alt: 'Estruturação Mastro Torre de Elevação Metálica' },
        ],
        relatedServices: ['escadas-metalicas', 'galpoes-logisticos'],
        keywords: ['torre elevador aco fachada caixa dagua taca estrutura de torre tele logomarca letreiro shopping'],
    },
    {
        slug: 'reforco-estrutural',
        title: 'Reforço Estrutural',
        shortTitle: 'Reforços',
        description: 'Terapia engastada salva-vidas de edifícios operando cintamentos colagens adesivas chumbadas metálicas cicatrizadoras pesadas periciais curadoras das fadigas abaladas rompidas concreto civil.',
        metaDescription: 'Reforço Estrutural Metálico Patologia Predial Recuperação Vigas PR SC RJ SP. Profissionais Salvamento Metalic (41) 9-9636 8387',
        heroSubtitle: 'Cirurgia bruta no aço devolvendo a capacidade de carga tratorada extinta a prédios velhos doentes abalados curvados rachados de ponta lajes.',
        icon: 'dumbbell',
        heroImage: '/images/obras/obra-estrutura-metalica-7.jpg',
        content: {
            intro: [
                'Quando o esqueleto tradicional envelhece arriando colapsado rachaduras abismo rústico de concreto caindo estalando ruídos prediais apavorantes perigosos, a cura de resgates e os escoramentos esmagadores dos macacos de salvamentos pedem armadura pesada em aço chumbada.',
                'Entendemos a patologia da "Doença do Concreto (Carbonatação) Ferrugem cimento expandindo descascador fadigando", cravando colares braçadeiras estribos em "Sistemas Encamisamentos" envelopando colunas esmagadas rústicas velhas do gesso fraco recheadas apodrecidas fáceis.',
                'Essa costura tática de chapas espessas unidas à buchas tratoradas epóxicas colagens absolutas cura estancando a fraqueza deflexões rústicas afundadas da gravidade prediais e recupera alvarás perdidos isolantes cassados atestados Bombeiros Defesa Cívil cegas perigosas.'
            ],
            quote: 'Um colapso iminente caindo lajes empena prumadas chumbando rústico. A intervenção de recuperação pesada reescreve a salvação abraçando as lages na espinha grossa em abraçadeira encamisada cega do perfil de Aço Metalic imbatível sólido inquestionável.',
            bodyText: [
                'É cirurgia bruta in loco escoras cegas salvando vidas. Sequer tentamos quebrar colapsos rústicos remendar lixos asfalto cimentos podres lixos velhos lamas que desabam esfarelado areoso inerte poço fraco amador gorda podre.',
                'Colamos nas entranhas perfuradas o pilar com resinas quimicas buchas importadas 100% amarradas das armadilhas das trincadoras de concreto amarras soldadas trancadas furos transpassador de tirantes nas fundações radiers sapata salvando resgatadas da demolição fatal cega.'
            ],
            advantages: [
                { title: 'Salvamento de Interdição Abarrotada Trágica Predial Larga Demolidora Custosa Crítica', description: 'Antes do laudo demolidor cassar seu patrimônio derrubar trator destrutivos caros prejuízos, o envelopamento estribado chumbado encamisa o pilar velho garantindo fôlego carga resgatando atestados laudos ART laje pesada.' },
                { title: 'Menor Custo Esmagador Obra que Reconstruir Do Zero Demolir Do Cego Zero Absoluto', description: 'Trata de soldas precisas chapas aço abraçando cintas coladas cintadas vigotes fletidos sem o assustador desabador demolidor poeirado estrondo fechamento quebra marreta desmancha arruinado asfalto debaixo vizinhas barulho lixo.' }
            ],
            process: [
                { step: 1, title: 'Mapeamento Scanner Escoramentos Ultrassom Radiologia Lajes Falhas Trincas Assustadoras', description: 'Topografia e macacos de carga sustentadores cegas segurando a laje para não abater na cara cair as vigas abertas no pó rústicas de desmanchadoras.' },
                { step: 2, title: 'Injeção Quimica Prisioneiros Varões Colagens Engastes Estribos Grossas Aços Amarrações Cintas Fechamento Frios Furas', description: 'O enlaçamento envolvente costuras de cantoneiras chapões perfis W amarrador presas amparadores suportadores apertados catracados tracionador de porcas roscas pesadíssimo tirantamento perimétrica.' }
            ],
            faq: [
                { question: 'A ancoragem com injeção química e aço epóxi realmente cola mais forte que encher de cimento amador lixo um buraco caindo estalado aberto torto no concreto velho?', answer: 'Com certeza. A bucha química bicomponente expande em milimetros agarrando fundindo nos póros rugosos rústicos do pilar velho velho e o parafuso de aço criando e engripando atrito monstro inquebrável estancador indestrutíveis trancadas a toneladas infinitamente mais unhas garras que a lama barateira remendo fraco reboco tapa buraco areia morta areia massa amador estressada lodo podre barro cimentado farofa frios morta.' }
            ]
        },
        galleryImages: [
            { src: '/images/obras/obra-estrutura-metalica-7.jpg', alt: 'Encamisamento perfil pilar aço abraçadeira química ancoragem pilar reforço predial chumbada' },
        ],
        relatedServices: ['estrura-metalica', 'mezanino-metalico'],
        keywords: ['reforço estrutural concreto encamisamento chapa aço ancoragem quimica buchas resina recuperar viga coluna caida abalada fadigada PR SP'],
    }
]

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(s => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
    return services.filter(s => slugs.includes(s.slug))
}
