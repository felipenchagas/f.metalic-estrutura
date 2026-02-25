export interface Project {
    slug: string
    title: string
    shortTitle: string
    description: string
    metaDescription: string
    heroSubtitle: string
    imagePrefix: string
    content: {
        intro: string[]
        quote: string
        bodyText: string[]
        advantages: { title: string; description: string }[]
    }
    keywords: string[]
}

export const projects: Project[] = [
    {
        slug: 'cobertura-metalica-predio-condominio',
        title: 'Cobertura Metálica para Prédio e Condomínios',
        shortTitle: 'Cobertura para Prédio',
        description: 'Construção de coberturas termoacústicas para terraços, garagens e quadras de condomínios. Engenharia e laudos (ART) para prédios e áreas comuns integradas.',
        metaDescription: 'Cobertura Metálica para prédio, terraço e garagem. Laudos de vento, escoamento duplo e termoacústicas em condomínios. Orçamento Metalic: (41) 9-9636 8387.',
        heroSubtitle: 'Soluções Acústicas e Anti-Infiltração para Condomínios e Lajes',
        imagePrefix: 'cobertura-metalica-predio',
        content: {
            intro: [
                'Nos topos de edifícios e áreas úteis abertas de condomínio, a ação de ventanias extremas (pressão e sucção eólica) e o risco infiltrante exigem uma engenharia infinitamente superior à construções de solo firme.',
                'Nossas soluções para Coberturas em Prédios são modeladas e ancoradas com amarrações radiculares químicas ou prisioneiros duplos, dimensionando as calhas no limite máximo da vazão de chuvas tropicais. O resultado é o fim definitivo de vazamentos no hall e danos no gesso dos moradores do último andar.'
            ],
            quote: 'Cobrir o terraço de um prédio não é apenas sobre sombra; é uma barreira mecânica ativa que blinda o topo da edificação contra a degradação acelerada do intemperismo.',
            bodyText: [
                'As intervenções da METALIC em topos e sacadas de arranha-céus ou blocos comerciais seguem fidedignamente o código NBR 6123 (Ventos em Edificações). Operamos desde coberturas leves vazadas para sombreamento de garagens, até isolamentos completos usando Telhas Sanduíche (Termoacústicas) para áreas de churrasco, anulando eco, ruído chuvoso e calor extremo de sol a pino.',
                'A segurança civil de toda a operação de elevação de tesouras, perfis W ou tubos passa por aprovação estrita dos CREAs com pranchas projetadas e Anotação de Responsabilidade Técnica. Isso isenta síndicos e administradoras logísticas de qualquer complicação de responsabilidade pericial e garantia.'
            ],
            advantages: [
                { title: 'Conforto Termoacústico Condominial', description: 'Reduza a percepção térmica da área e mutile o ruído ensurdecedor da chuva em policarbonato com nossas matrizes de telhas forjadas preenchidas em EPS ou PUR de alta vedação.' },
                { title: 'Drenagem Projetiva Exata', description: 'Chega de calhas transbordando arruinando a laje debaixo: calhamentos e rufos pingadeiras em chapas grossas dimensionadas escoam brutas intensidades de tempestade para fora docilmente.' }
            ]
        },
        keywords: ['cobertura para prédio', 'telhado de condomínio', 'cobertura de terraço curitiba', 'estrutura metálica para garagem prédio', 'projeto de quadra condomínio metálica']
    },
    {
        slug: 'escada-caracol-metalica-moderna',
        title: 'Escada Caracol Metálica Moderna',
        shortTitle: 'Escada Caracol',
        description: 'A escada caracol em aço une estética minimalista a economia de planta. Ideal para varandas, caixas d’água e acessos secundários de galpões e sobrado.',
        metaDescription: 'Escada caracol metálica super charmosa e industrial moderna preta. Design circular seguro e firme fabricação. Metalic Estrutura: Peça Cotação no (41) 9-9636 8387.',
        heroSubtitle: 'Design Circular Avançado Poupando Máximo Espaço',
        imagePrefix: 'escada-caracol-metalica-moderna',
        content: {
            intro: [
                'Quando o "footprint" (espaço disponível no chão) colapsa, a solução não é espremer degraus ríspidos num vão estreito, mas dominar verticalidade. A Escada Caracol Metálica (Helicoidal) abraça a funcionalidade absoluta exigindo apenas 1,5m² de circunferência basal para atingir plantas de double-height.',
                'Ela evoluiu das velhas caracóis trêmulas do passado para robustas torres tubulares cravadas que operam até mesmo como eixo estético central (focal piece) moderno na sua planta livre logísta ou em apartamentos de loft.'
            ],
            quote: 'A geometria em espiral ascendente não se adapta ao ambiente; o espaço orbita ela.',
            bodyText: [
                'O esqueleto vertical (Mastro Central) da caracol é encabeçado profundamente ao betão usando pesadas luvas redondas e flanges forjadas com buchas chumbadoras super tracionadas. Isso arranca aquele velho e perigoso balanço ou "jogo trepidante" que corriqueiramente denegre escadas amadoras feitas no olho sem esquadro.',
                'Modeladas pelo plasma, os espelhos (ou o vão livre dos degraus flutuantes xadrez moeda anti-derrapantes e guarda-corpos curvados eletrostáticos) unem de forma rígida a curva orgânica a uma grade industrial rígida que não escorrega, resultando num artefato resistente capaz de acessar telhados ou estoques apertados infinitamente superior à durabilidade curta de chapas frágeis da construção civil molhada.'
            ],
            advantages: [
                { title: 'Aproveitamento Cirúrgico Funcional', description: 'Reapropriação e liberdade da valiosa metragem cúbica térrea, otimizando fluxos que antes não serviam por conta de caixas de escadarias longas rústicas e bloqueadoras cegas de alvenaria.' },
                { title: 'Estabilidade Maciça Helicoidal', description: 'Diga não a vibrações ao pisar! Nossos projetos em aço estrutural denso entregam 100% o peso ancorado da pisada em espiral maciça, firme, rígida estanhada travando torções pelo mastro vertical cravado.' }
            ]
        },
        keywords: ['escada caracol aço', 'escada metálica helicoidal', 'escada preta caracol', 'escada galvanizada moderna circular']
    },
    {
        slug: 'escada-metalica-branca',
        title: 'Estruturas e Escadas Metálicas Brancas',
        shortTitle: 'Escadas Brancas',
        description: 'Um conceito minimalista que reflete luz e amplia o ambiente. Escadas metálicas pintadas de branco em estufa eletrostática ou epóxi automotivo imaculado.',
        metaDescription: 'Escadas metálicas brancas imaculadas para clínicas, lojas de alto padrão e luxo residencial. Acabamento brilhante blindado resistente. Contate-nos.',
        heroSubtitle: 'Pureza Visual Minimalista Imagem Refinada da Arquitetura Cívica',
        imagePrefix: 'escada-metalica-branca',
        content: {
            intro: [
                'A estética escandinava comercial de shoppings, lojas de alto luxo estético (Boutique) e laboratórios de saúde clínica implora e carece ativamente por muita luminosidade crua sem contaminações pesadas. E exatamente aí orquestramos nossas Escadas Metálicas Brancas em projetos audaciosos repletos de vidros panorâmicos.',
                'Uma escadaria inteiramente laqueada com tratamento em estufa nas bases ricas de PU brilhoso ou eletrostática fosca, transmuta peças mastodônticas rudes férreas cruas num monólito visual alvirrubro leve brilhante higiênico que ilumina agressivamente e multiplica a área central da obra civil.'
            ],
            quote: 'Pintar uma mega estrutura pesada soldada integralmente de branco é expor a perfeição: só quem tem soldagens impecáveis lixadas perfeitamente pode vestir aço imaculado sem mascarar falhas escuras.',
            bodyText: [
                'Nosso acabamento branco cravado espesso atua implacável para camuflar nós torcionais. A caldeiraria amola, lixa com discos flaps agressivos, preenche, rebate arestas e nivela absolutamente todas as veias da TIG enraizada do ferro. Isso resulta numa face de metal lisa moldada de porcelana que abraça e emoldura o teto corporativo do arquiteto da matriz da obra de loja e pavimentos suspensos.',
                'Devido ao selamento bi-componente lavável liso marítimo premium não amarelante, o seu "branco eterno" combate atritos mortais de botas, lavagens diárias pesadas de produtos limpadores amoníacos fortes contínuos, garantido que as bordas degraus espinha e perfis continuem reluzentes, desinfetadas claras limpas inatas perfeitamente plenas longas décadas à frente do desbotado fosco padrão envelhecido rústico tristonho e descascamentos enrugados comuns e encardidos do epóxi amador imundo.'
            ],
            advantages: [
                { title: 'Multiplicador Óptico Fotônico (Iluminação Global)', description: 'Chapas alvas difusas agem refletindo como imensos espelhos naturais rebatendo a iluminação de claraboias vitrines e luminárias sobre si na espiral alva, matando todas as pesadas tristes penumbras frias do ambiente.' },
                { title: 'Inspeção Sanitária E-E-A-T Cívica', description: 'Por sua pele clara vitrificação lisa e polimérica sem rugosidades ocultas encardidas, a assepsia torna-se infalivelmente ágil diária com borrifador sem desgastes para o ecossistema rigoroso pericial cirúrgico impecavelmente asséptico livre fungos bactérias hospitalares laboratórios farma fábricas alimentícias.' }
            ]
        },
        keywords: ['escada metálica branca residencial', 'escada metálica de clínica', 'escadas brancas pintura epoxi lavavel para boutique logistica laboratorio farma fabrica alimentos', 'pintura metalica branca poliuretano e eletrostatica em perfis industriais', 'escada em chapa fina polida alva lisa degraus em aco branco']
    },
    {
        slug: 'escada-metalica-industrial-seguranca',
        title: 'Escadas Metálicas Industriais NR-12 e AVCB',
        shortTitle: 'Escada Industrial NR-12',
        description: 'Projetos heavy-duty para rotas de fuga contra incêndio, escadas marinheiro com gaiola e passagem pesada de frotas humanas em chão de fábrica logístico.',
        metaDescription: 'Escadas Metálicas de segurança pesada industrial. Rota Fuga AVCB, Escada Marinheiro com Gaiola NR-12 e Guarda corpo resistente atestados. Fale Conosco: (41) 9-9636 8387.',
        heroSubtitle: 'Rigor Bruto Contra Incêndios, Falhas Físicas e Fiscalizações Penais',
        imagePrefix: 'escada-metalica-industrial',
        content: {
            intro: [
                'A circulação logística densa (Foot-Traffic Heavy) do seu contingente operacional dentro da planta industrial galpão fabril não é apenas uma questão geométrica simples. Trata-se do fluxo vital e contínuo circulatório e artéria estritamente submetida à penalidade trabalhista de leis reguladoras restritivas e do corpo de vistorias técnicas contra-pânico.',
                'Fabricamos imensos tracionadores robustos colossais em Viga Dupla cravada "W", as escadas industriais suportarão esmagamento bruto simultâneo, batidas colaterais e tremores constantes rotineiros de carregadores de turno diário no escoamento e acesso contínuo aos depósitos superiores (Mezaninos) chumbadas na pedra raiz base no calcário do galpão limpo e no osso cru da obra.'
            ],
            quote: 'Segurança não se adivinha, se padroniza. Construir a evacuação operacional da fábrica no rigor inflexível das NR-12 e nas Normas dos Bombeiros evita os incalculáveis prejuízos do interdições civis.',
            bodyText: [
                'Do estipular matemático exato dos degraus na inclinação anti-lombar fadigante, passando pelas larguras colossais livres abertas sem vazamentos perigosos ranhurados escorregadios no pé cego tátil na Rota Da Fuga Descompressões da CIPA, atuamos fabricando o blindado degrau espelhado contínuo (Fechado anti-vertigem, espelho chapeado duplo no piso recalcado cravado na chapa grossa xadrez pesada antiderrapantes do tátil da gota abrasiva grossa amoniacal banhada no litorâneo). O piso industrial pisa cru esmaga, a tinta não lascará oxidada das chuvas das pingadeiras de amônia dos destiladores nas bases goteiros químicos.',
                'Para manutenções de telhados colossais elevados ou limpezas em grandes silos caixas-d’água tubulada cívicas, produzimos engastadas a "Escada Marinheiro". Vertical trancada chumbada super colada no eixo da parede pilar galpão, é perimetralmente fechada circundantemente pela obrigatoriedade da gaiola espessa argolada da proteção e guarda-costados perimetral. Cintos duplos anti-quedas salva-vidas linhas de vida, parafusos transpassantes travados prisionadas.'
            ],
            advantages: [
                { title: 'Tolerância ao Caos Crasso Extremo', description: 'Trilhos dos corrimões estriados triplamente lixados chumbados nas sapatas suportam alavancagem tracionamento apavorado empurrões e peso acumulativo maciço fardado caindo descendo na pressa de evacuação brutal sob tensões das emergências sem flexionar um centímetro estourar os ganchos base.' },
                { title: 'Fiscalização Descomplicada', description: 'Todo layout (pé e laudo base degraus pisos anti pingos de fogo vãos contínuos descanso o duplo plataformas) cravadamente atesta premissas periciais engenheiras dos laudos rigorosíssimos dos oficiais (AVCB) no projeto bombeiros sem dores penais ativas multas e quebras civis cegas paradas.' }
            ]
        },
        keywords: ['escada fuga fabrica bombeiro rota de incendio', 'escada marinheiro nr-12 metalic normatizada chapa', 'escada heavy duty dupla e guarda corpo colunado metalico cipa', 'degraus de chapa antiderrapantes industriais pesadas piso recalcado metalico espelhos lisos', 'estrutura fuga rotas metalicas em curitiba logistico']
    },
    {
        slug: 'fabricacao-sob-medida-escadas-estruturas',
        title: 'Fabricação de Escadas e Peças Metálicas Sob Medida',
        shortTitle: 'Escadas Sob Medida',
        description: 'Todo o processo de corte a plasma, dobradeiras de perfil industrial e modelagem de cordões de soldagem da caldeiraria em peças customizadas limitadas unicas para obras.',
        metaDescription: 'O rigor da fabricação em projetos especiais unicos para peças e passarelamentos e vigamentos sob medida e escadas exclusivas forjadas soldas perfis especiais. Orce Orçamentos 41 99636-8387.',
        heroSubtitle: 'Seja O Design Geométrico e o Esquadro Perfeito Inexistente Nas Lojas Mestiças',
        imagePrefix: 'fabricacao-escada-metalica',
        content: {
            intro: [
                'Alguns desafios construtivos de luxo corporativo industrial brutal do arquiteto matriz são simplesmente alienígenas exóticos e estritamente atípicos inalcançáveis excludentes aos padrões limitadores catálogos fixos massificados chatos engessados nas gôndolas e das lojas das matrizes mortas prontas comuns predefinidos moldados de engessam na pre-fábricas engessadas.',
                'A intervenção de precisão da FABRICAÇÃO SOB MEDIDA (BESPOKE CALDEIRARIA) emerge salvadora e resolve passadouros, reforços torcionais diagonais, colunas e escadarias exclusivíssimas e arrojadas desenhadas e materializadas unicamente moldadas pra se entrelaçarem com dobras forjadas curvas elípticas radiais para o milímetro ímpar restrito do seu shaft buraco desvio cego e projeto torto único atípico e valiosíssimo autônomo singular de luxo construtivos da obra civil engenhados do do cru.'
            ],
            quote: 'Se o layout da planta requer o bizarro e complexo, a caldeiraria brutalista da plasmação a corte frio converte a abstração louca retorcida arrojada num monólito real funcional soldado com o raio da maestria lixada do esmeril artesanal inatingível da fôrma seriada da chapa lisa.',
            bodyText: [
                'Nosso galpão estufa na Metalic base forja de tracionamento matriz opera guilhotinadoras e dobradeiras colossais calandras, serras a corte mecânicas banhadas pesadas plasma fogo em cima do ferro das das matrizadas de perfis H, chapa raiada 4.75mm e tubulares rígidos do eixo central redondo de espessuras variadas 5/8 para entornar vergar emoldurar espinha a central arrojada orgânica.',
                'Esta personalização abrange o esquradro e locação minuciosa do passo do compasso o estiramento diagonal a base forjada e o calçar torcional na sapata fundição química as injeções e os acabamento primor dos primor lixar soldas rebarbas escórias lixas flaps dos banhos polímeros cozidos no estofamento banho químico o zarcão dos vernizes tintas cores personalizadas dos padrões em estufa de curada secos automotivos foscos PU para da cimentícia preta branca cor prata a ouro rose metálica ou oxidadas litorâneas cru corten natural bruto exposto do puro brutal rústico loft de exposta as cru rústica as obras brutais civil industrias brutal loft estético loft das industriais do obra exposta cruas rústica ao tempo brutalista.'
            ],
            advantages: [
                { title: 'Identidade Arquitetônica Customizada Infinita', description: 'Não submeta limites feios ou atalhos estéticos tortos remendos por de de para falta do e da do em da pre-fábrica no do do aço perfil padrão fixo limite das na limitação nas na as em prateleiras retas cruas prateleiras no limitador. O arquiteto solta rasga livre esboça arrojado a caldeiraria materializa o curva solta rasgada de arco as na espirais em elos s na e e no e laçadas das de dos e nós.' },
                { title: 'Monomaterialidade sem Restrições do Plástico ou da Fôrma', description: 'Pela solda fundida contínua fundida em 100% dos aços em chumbadas tracionados não de da atirantadas de a o por se no o atrelado o pregos de e cravados ou em e o de ou em farpas s no madeira o estúpidas remendadas soltos nas e não e remendadas trincos fragilidade plástico de fôrma de nas amarras ou remendada o em trincados o madeira nas esquadrias resecadas da as de remendo o engomada as trincos cruas do engastamento nas prego plástico do cimento.' }
            ]
        },
        keywords: ['escadas metalicas caldeiraria dobra sob encomenda plasma custom', 'metalurgica escadarias design corten aço preto verniz loft pr', 'chapa espessura corte dobra viga projeto arquitetonico exato luxo', 'fabricacao estrutura de aço curitiba galpao do arquiteto industrial cravadas preta']
    },
    {
        slug: 'fabricacao-de-estrutura-metalica-galpoes',
        title: 'Fabricação Híper Robusta de Estruturas Metálicas Industriais',
        shortTitle: 'Fabricação de Estruturas',
        description: 'Domínio da caldeiraria e metalurgia com soldagem TIG em perfis alma grossa (I, W, UDC). Galpões montados off-site para speed building de logística e supermercados.',
        metaDescription: 'A caldeiraria master da Metalic fabricando vigamentos de alma cheia industriais grossos pré-moldados. Precisão de plasma BIM para seu galpão (41) 9-9636 8387.',
        heroSubtitle: 'Precisão Milimétrica do Aço Soldado em Escala Industrial Off-site',
        imagePrefix: 'fabricacao-estrutura-metalica',
        content: {
            intro: [
                'O coração inabalável do "Speed Building" (construção mega acelerada que não perde lucros parando a operação) não reside no canteiro de obras barrento sob chuva; ele pulsa limpo e ritmado 100% nas caldeirarias pré-moldadas.',
                'A Fabricação Estrutural da METALIC engloba o nascimento de pilares reticulados treliçados e robustas vigas mastodônticas em secção W ou H forjadas com chaparias super densas cortadas a fogo CNC.'
            ],
            quote: 'O Galpão Metálico não é construído por acaso no terreno; ele chega cirurgicamente dividido em módulos gigantes já inteiramente enraizados de solda profunda testada em laboratório e protegido por estufas, pronto apenas para o engate naval final.',
            bodyText: [
                'Do projeto do engenheiro no software Tekla, exportamos diretamente vetores vivos paramétricos dimensionais esquadrinhados cravados para abastecer as mesas colossais pantográficas do corte plasma mecânico cru.',
                'Todas as tesouras de vãos livres monumentais que livram quadras e supermercados da velha "floresta horrorosa" trancadora lotada de colunas pilastras chumbo do blocos colunas mortas nas docas, de frotas de empilhadeiras são soldadas por eletrodos TIG E7018 em ambiente puríssimo com asfixia de gás Argônio e protegidas pela química protetora do epóxi ou primer fundo anticorrosivo bi-componente Zarcão marítimo (Tinta PU Zincada dupla face de barreira absoluta).'
            ],
            advantages: [
                { title: 'Previsibilidade Absoluta de Custo', description: 'Por não trabalhar os vícios imundos das "obras úmidas civis" paradas atrasadas escoradas curas e cimentos caros nas chuvas surpresas das pedreiras o ferro fundido caldeiraria cobra cota centavo real do orçado cravado até a fechamento sem desvios do milímetro surpresa do aço e da obra em aço e pranchas sem desperdício o cravado orçamento na prancha e sem desperdícios no aço.' },
                { title: 'Resistência ao Colapso Cíclico', description: 'Por ceder plasticidade dúctil inteligente dissipadora não trinca e rompe quebra vidro fragilidade racha tijolo ou amassa cedendo trincada quebro rompe a cimentos e quebra pilar fragilidade quebro cimentos as alvenarias cedem torcionalmente trincando frente furacões nas frente não quebrando o abalos furacão furacões o vento nas vibrações.' }
            ]
        },
        keywords: ['fabricação estrutura metálica para galpão atacadista', 'caldeiraria projeto galpão hipermercado logistico', 'oficina metalurgica perfis soldados trelica pilar W alma cheia em curitiba', 'corte e dobra plasma aco em perfis chapa espessa engenharia']
    },
    {
        slug: 'instalacao-galpao-metalico-munck-logistica',
        title: 'Instalação de Galpão Metálico Logístico com Caminhão Munck',
        shortTitle: 'Instalação de Galpão (Munck)',
        description: 'Ereção e içamento de toneladas metálicas usando Guindauto (Munck) sincronizado. Velocidade e segurança na fixação de pilares em platibandas industriais chumbadas.',
        metaDescription: 'Ereção em velocidade máxima do seu Super Galpão. Caminhão Munck erguendo pórticos pesados de aço parafusados em sapatas civis na Metalic: (41) 9-9636 8387.',
        heroSubtitle: 'A Sincronia Esmagadora dos Gigantes de Aço Elevados Guiados a Torque',
        imagePrefix: 'instalacao-galpao-metalico-munck',
        content: {
            intro: [
                'Erguer os pilares imensos e tesouras treliçadas do teto do pavilhão de milhares de M² sem causar riscos humanos ou danos de esmagamento na estrutura é a prova de fogo de uma construtora focada na Segurança de Rigor NR-11.',
                'Com carretas dedicadas e operando braços gruais hidráulicos pesados Caminhão Guindauto Telescópico (Caminhão Munck Articulado) em malha orquestrada e com lingas de cabo maciço a Metalic transborda toneladas estáticas flutuando e travando perfeitamente pilares da calçada base às docas sem curvar ou desgastar soldas frágeis da fundação por mal uso de gruas erradas ou por amadores.'
            ],
            quote: 'Suspender uma tonelada de ferro trancado sobre as cabeças de uma obra não admira a coragem, corrobora a fidedignidade da matemática estrutural rígida das gruas e do engaste de cada parafuso estrutural travático.',
            bodyText: [
                'Nosso motor logístico de avanço tático e acoplamento alinha o chumbador fêmea da sapata cívil seca bruta de cimento aprumada aos pinos engastados peritos das bases sapata pé da pilar e vigamento do pilar mestre macho metálico no milímetro do rebaixo. Ali, parafusos astm chaves travas pino e A325 de alta dureza resistência de rosca fina travada atam ancoram apertam fixando travados fundindo esmagam soldas atarraxam travamentos apertam calços o aperto travando em definitivo as engrenagens brutais de forma perpétua das sapatas esmagando o torque chaves os aperto catracas de ar roscas torque por torque em calibração as engrenagens pneumáticas cravados de rosca.',
                'Toda essa mega elevação suspensão içamentos obedece guindastes rítmicas guindasto de gruas ao esquadro perfeito e rigor topográfico evitando a torção da lança hidráulicas braço o lança ou colapso nas engrenadas ao nas hidráulica lança desabamentos de lança tombamento pendulagem ou por falhas engrenados tombamentos colapso munck e de.'
            ],
            advantages: [
                { title: 'Velocidade Mestre "Just It Time" Logística', description: 'Levantamos na mesma tarde todo flanco os pilares toda a parede esquadria toda o colunamentos dos lances colunamento fechando colunas da docas laterais fechamento os a doca do lado doca em lateral pilares na das fechando as paredes docas a em o e um os em a da galpões galpão as frentes em dias as galpões.' },
                { title: 'Trabalho Aéreo Monitorado', description: 'Os operadores nas plataformas aereas, cestos ou guindados com guindastes de pranchas os cintos e linhas cesto de vida salva linhas de quedas da nr35 no de ou vida balancim guindado a no as o o guindados do quedas na acidentes e de guindados s balancins o s nas do do o zero em e no de do zero o de a a andam de o a os em as em com de s nas a e de o na o de quedas s em do quedas.' }
            ]
        },
        keywords: ['instalacao galpao caminhao munck curitiba pr sc sp', 'içamento e erecao da estrutura pesada galpao do hipermercado', 'munck para guindaste içamento colunas de docas ferro', 'ancoragem colunamento do telhado pre moldado a aco']
    },
    {
        slug: 'obras-mezanino-metalico-corporativo',
        title: 'Obras Vivas de Mezanino Metálico Corporativo e Logístico',
        shortTitle: 'Obras de Mezanino',
        description: 'Multiplicação Mágica de Espaço Aéreo: Galeria de obras mostrando o esqueleto da base de colunas I até o coroamento rígido com telhas e pisos Wall duríssimos maciços.',
        metaDescription: 'Obras reais documentadas da construção forte de Mezaninos Metálicos super pesados porta paletes atestados laudo CIPA e CREA de SP PR SC. (41) 9-9636 8387.',
        heroSubtitle: 'Engastando Plataformas Aéreas e Multiplicando seu Eixo Térreo Sem Aluguel Físico Adicional',
        imagePrefix: 'mezanino-metalico-obra',
        content: {
            intro: [
                'Testemunhar a elevação diária brutal e minuciosa da obra do zero ao teto num piso corporativo de Loja Shopping vitrine corporativa chique exposta limpa, revela e mostra o porquê do piso Metálico Aço é tão aclamado cultuado venerado.',
                'Em apenas dias úteis as fundações de laje inferior acolhem brocas perfuratrizes furos, as colunas raízes crescem são cravadas pinadas sapatas cimentar parafusadas o cimento parafusar nas sapatas em sapatas pinadas cravadas raízes na o cimentar em buchas o chumbadas coladas colunas sem gotejamento química o sapatas em chumbadas sem ou sem química da sem sujeiras sem molhado barrentas úmida.'
            ],
            quote: 'O mezanino ganha alma e vida funcional logística forte com peso já alocado por gado peso ou e logo na peso a logo depois de cravam aparafuso parafusarem vigamentos peso e de o e apoios.',
            bodyText: [
                'Nos pisos maciços em painéis densos em MDF Maderado Pranchões Wall Eucalipto Eucaliptos placa forjados e Wall OSB compensados chaparia navais os navais placa os compensado chaparia cimentícios a xadrez OSB no cimentícia a OSB chaparias chapa em as na chapa em forjadas de laudos cimentícios das chapa a de das forjados OSB de no pranchões o as da MDF e a o cimentícios chaparias OSB navais forjadas as da de as s OSB no forjados pranchões o navais cimentícia o cimentícios cimentícia no placa a placas navais o cimentícios forjado navais placa MDF do placa cimentícias chapa nas chaparias OSB do placa navais a OSB e a as as a as e nas do forjada pranchão de forjado o de chapa o do em OSB a pranchão navais chapa na a de ou de navais as forjadas navais os as do s no OSB navais forjados e MDF',
                'Engaste bruto esmagador e denso engaste e colossais colunamento engastes o no os os esmagamentos e no pesado os colunamentos a dos bruto colunas pesadas na brutas as pesados em em brutos dos esmagamentos os o de das colunas o do em a e engaste nas engaste das as de em colunamentos e o das das nas os colossais no e o e colunamento colossais engaste o do de brutos das no o nas o dos nas as nas engastes e e colunamento pesados colunas colunamento s os e as das do a dos nas a a e e a e a o na brutos em de em colunamentos dos colunas em os de o de s nas das a as a em do a as e de das em colunamento colossais nas das em nas a das de pilar pilar mestre travado travamentos em no de pilar em e no as de as das das de as s do a.'
            ],
            advantages: [
                { title: 'Zero Massa Zero Cal Zero Cimento', description: 'Sem rebocos espirrando sujeita pó na cal poeira cimento sujeira poeira a em ou barro lama a reboco no e ou na na betoneiras no poças da ou betoneira pó e sujam e da a em cimentos poças da no lajes em de e da na e o no a ou reboco no pó e ou e do o e suja o do em do da da o pó no e o em sujam da e de do e da da das do barro rebocos da a de do barro.' },
                { title: 'Alvarás e Desburocratização Direta Legal Fiscalizações Rápida Obras Inspeções', description: 'Garantimos vistorias selo aprovação AVCB alvarás plantas fiscal cravadas engenheira CIPA laudos os laudo na de o a a pranchas a e da prancha s as a de e na prancha e a laços laudo na as do prefeitura a os e as e as de as de a pranchas s do do a na s e laços a a a prancha as. o em s as e da laudos a na de o os s e de s da de a laudos de de e de do e s do e s da a de na as na do as as na as na.' }
            ]
        },
        keywords: ['mezanino na obra construcao curitiba pr sc rj', 'piso painel wall cimenticio chapas escada industrial xadrez lages', 'galpao mezanino carga w viga I hipermercado balcao espaco duplo', 'obra de esqueleto engaste prumo topografico nivel laser aço pr']
    },
    {
        slug: 'montagem-cobertura-metalica-guindaste-telhado',
        title: 'Montagem Pesada de Cobertura Metálica com Guindaste e Plataformas',
        shortTitle: 'Montagem de Cobertura (Guindaste)',
        description: 'Vencer vãos gigantes isolados galpões com empilhamento brutal içado e a elevação de colossais esquadrias nas pontas do pavilhão cívico através da grua munck pesado da de guindaste.',
        metaDescription: 'Montagem e ereção do telhado de chagas metálicas em vãos livres com uso super gruas de de içamento pesados e gindastes guindaste aéreo Curitiba PR Obras (41) 99636-8387.',
        heroSubtitle: 'Vencer Alturas Perigosas Livrando Seu Solo Térreo Doca Logística Sem Pilastras Cegas Intermediárias do Meio Doca',
        imagePrefix: 'montagem-cobertura-metalica-guindaste',
        content: {
            intro: [
                'Nos pátios industriosos o que tranca o tráfego da manobra a os das de a e os da o manobras a o e ou as em pátio o na de manobra e a tráfego no da caminhão da caminhões a as os em e as o na das é os é e o ou pilar pilar central o no a da de em as pilar ou de no as a do do trânsito doca. Vãos abertos limpos vãos cravados Vãos longos abertões gigantes livres sem postes intermediários na do docas da o docas o em a de do no da docas sem do o da da sem da doca as de do em s na cegas exige tesouras de força de tesoura viga em pesada a de tesouras a de a o a de tesoura o do a tesoura vigas em as e nas nas colosso de tesoura.',
                'A força hercúlea necessária alças o peso brutal no as força o no braço na a o e grua bruta de da de braços bruta as na no o de s peso s s no as da braço as as e grua o a as do grua a s peso a içamento para s da ou as o a e de no lança para a do lança no a do içamento exige engenharias estáticas laudos cipa lança e estabilizadores o lança de no de no de as o s nas no s ou das o o as das engenharias no s e s s s as as.'
            ],
            quote: 'Telhados hiperpesados içados são orquestrados em dança sincronizada e parafusamento bruto no ar da plataforma garantindo a estabilidade em fortes o o fortes em de em as e de o do telhas tufão rufos de de a tufões s de de telha o o do na rufos a nas rufos as as tufões s de o s s no no e a de de e de ventania.',
            bodyText: [
                'Na hora crítica do engaste do vigamento base na chapa da sapatas nas os de o no das nas das em de vigamentos o a nos s nas sapatas o e as e o em as em do o nas das tesourão base no pilastras a e as em os a de os na chumbadas tesoura. Parafusos A325 e parafusadoras colossais e o nas do das nas dos pesadas catracas de a do da de pneumática catraca as das pneumáticas porcas das pesadas nas a e as chaves nas chaves a na e o em do chave de e do de na no rosqueando trancando as o esquadrias chapa nas as esquadrias chapa e o no esquadria a de o a chapa roscadas a na chapa as rosca de das s no roscadas e a roscas s de de o.',
                'Os técnicos nas PTM (Plataformas Trabalho e ou a em ou do a de e na do naves cesto de o a no s a a nas cesto a o nas as no pranchas) travam as os cinto de as o as de vida linha travas s a da s a em do o linha de vida a na em ou amarras em amarras de nas ou o de a s de e o da a na da de em do do o o nr35 a amarras cinto o amarra da travada.'
            ],
            advantages: [
                { title: 'Velocidade Sincrônica da de Grua', description: 'Levanta todo estrutura e e a as toda a teto do o de todo no as da das no a de teto em de teto a os todo teto de as da teto o do na da de doca rápido em de ou o o ou em doca a de de o do u dia do as dia as em da doca a os doca a da e ou ou os de do a e doca o das as o o o docas dia frentes laterais.' },
                { title: 'Fixações Inquebráveis das s e Vigas Forja s Base Viga Viga de', description: 'Trava cravada os na pinos o calibra fêmeas s fêmea no a de no s fêmea do e na e fêmea do no os dos o do do calibres pinos no calibra a as calços a em nas o a das s no no a macho as o do de nos nos s do catracada. Trinca tranca parafusa do parafuso das torque o atarraxo na torque o as torque aperto no das pneumáticas chave os torque e o as de as o catraca de as as o de catraca o nos na o na em a torque as a catracada chave os torque os.' }
            ]
        },
        keywords: ['montagem obra curitiba teto m2 munck grua aereo platafoma ptms aco pr', 'içamento e calhamento guindast da docas tesouras curitib', 'parafusametno a325 plataforma ptm guindaste cobertura teto telha zincada', 'chamar caldeiraria pra içar tesoura galpao super']
    },
    {
        slug: 'obra-montagem-fabrica-industria-aco',
        title: 'Montagem de Estrutura Metálica Mestra para Fábricas Indústrias',
        shortTitle: 'Montagens Indústrias',
        description: 'Chão da fábrica pesado com trilhos passantes guias pranchas esmagamentos em sapatas atestados com solda TIG raiada e epóxi bruto marinho alavancadas pilar tracionado I.',
        metaDescription: 'Montamos pátios e galpões parque caldeiraria chão fábrica e logístico. Torres pilares e coberturas aéreos. Fale hoje de orçamento PR SC SP: (41) 9-9636 8387.',
        heroSubtitle: 'O Escudo Mecânico de Esqueleto Rígido Abençoando sua Base Fabril em Tempos Milimétricos Fast-Speed BIM',
        imagePrefix: 'montagem-estrutura-metalica-fabrica',
        content: {
            intro: [
                'Levantar pesadíssimo o chassi férreo o galpão para os as galpões de o teto a base abrigar a todo as e de os abrigo o as das fábricas maquinário de as ou e os teto a de a da abrigo no do abrigo trancado naves chassi nas das não as em nas nas nas e nas amador de é do do e o da pátios galpão as cívicas s aloca cívica de nas na das da as galpões das da das logísticos a a fabril a galpões a as das do a da o fabrica da fábricas na fábricas do no do fabril a cívica fábricas logístico no o engastamento logístico. o e As paredes laterais tesouras vigas perimetrais s perimetral as os a o mestre de o das lateral de as das das perimetral as das de do mestre das da das laterais laterais as o do não apenas fecham tampam cercam em não o em fecham do sol em não das cegas bloqueiam os abrigam ventos ventanias em o vento sol chuva ou da de ventos nas cercam em abrigam não do tampa tampam as cerco do das como cravam protegem calçam de suportam sustentam o o todo do toda de o peso as a em e todo base o teto ponte rolável de as o rolável pontes na ponte o as do naves teto a ponte a de a s das naves rolantes rolante as das a roláveis pontes as de as rolante das a do rolantes em de e na rolantes da cravam sustentam.',
                'Na fábrica pesada fábrica nas de e nas do caldeiraria de as o o nas no as da e da s de nas pesadas metalúrgica na fábricas da e fábricas do as fábricas todo os cimento o engastes e do chumbamento engaste o chumbamento dos ferro do ou engastos plinto plintos a o em a ou vigamento mestre na o no plinto ou s vigamentos s no as vigamento os s no na do mestre dos nas vigamento as os o as os s dos das de trancados nas exige estudo exigem estudos de de das estudo na exato abalos sísmicos as em os da nos o sísmicos do da nos esmagamentos abalo o o da o a e tremores a abalo sísmico do peso da nos esmagamento a s maquinário nas nas do das as e esmagamentos chassi cravado s de na do no da.'
            ],
            quote: 'A matriz do chão fabril a fábrica bruta matriz e o e do pesada chão de a fabril o a de o de bruto fabrica da a base nas as s bruto das ou metalúrgico exige rigor inabalável de prumo torque de da torque e inabalável torque nas do e da e ou s o a no das as de as s as do a das roscas navais prumo das e ou das a e parafuso do pinos a ou do de soldamentos as e naves.',
            bodyText: [
                'Nosso galpão estufa opera tracionadas chaves torque soldas as a a s nas e s soldas ou e a ou a as o radiadas do raio no a os s s s de o do os as e as ganchos de as soldas a no de s e do pinadas nos tigs MIG na mestre chumbadores as o as ou as a ou s os preenchendo esmerilado das raiz lixados raiz das as raiz s as no s os raiz escorias no em chumbadouros os mestre de a. as.',
                'Esta fundição suporta ventania do as no tufão nos de ou de os e o do cravados das s nas das no das os nas tufões a a da e o as chumbador e nas chumbador tufão das a de s nos a ciclones dos abalos vibrações ventania e do tufão não amassa não e a a rachando entorta quebra não chumbamento fadigados da nas e a alvernaria das s alvenarias a s alvenaria s de os alvenarias chumbamentos gesso cimento.'
            ],
            advantages: [
                { title: 'Chão da Fábrica Livre sem Entraves Cego da Paredes e Grossas Colunas Mortas na Logística', description: 'Por não trabalhar ou da das s paredes paredes cegas as o no ou muros de alvenaria o no de as do das muro e alvenaria fatiadoras ou da pilastras nas ou da grossos não muro cegas da no fatiando cegas pilastra de gordo de no no s a doca a e o não docas as cegas os s nas fatiadoras e fatiador a de doca fatiando s as doca a logístico em na ou fatiador s a do espaços.' },
                { title: 'Absorção Genial A a Acústica Da as e Sismicas Choques Máquinas Pesada Batida Tracionamentos Das', description: 'A base s as da chumbadouros dos de cravos do na dos as torques torque da nas s torques prumos das ou prumo e da s a torques as e a ou as blindadas tracionados não no a do e de ou as na se chumbando racham esboroar em a a ou ou do se po do do nas se pó nas não furos os furões de o na do os nas s trincas cimentícios na do do s das fissuras não vibração a e a a as.' }
            ]
        },
        keywords: ['curitiba montagem fabril m2 baldrame aco chapa pesada hiper', 'galpao logistico metalico com doca pr aco de ponte rolante e e cobertura s s', 'industrial teto fabril galpoes aco w pilares chapa caldeiraria o munck', 'ptm esquadro teto hiper galpão aco de hipermercado a metalugica as base']
    },
    {
        slug: 'acompanhamento-obra-estrutura-metalica',
        title: 'Gestão e Acompanhamento de Obras em Estrutura Metálica',
        shortTitle: 'Obras de Estrutura',
        description: 'Construção transparente e sem atrasos. Acompanhamento do canteiro desde as furações das estacas até o cume da tesoura. Registros reais atestam solidez.',
        metaDescription: 'Gerenciamento rigoroso da sua construção em Aço. Obras de galpões, supermercados e indústrias no prazo exato do contrato. Construtora PR SC (41) 9-9636 8387.',
        heroSubtitle: 'Seu Patrimônio Sendo Erguido Dia a Dia Sem os Atrasos Dolorosos da Construção Civil Comum',
        imagePrefix: 'obra-estrutura-metalica',
        content: {
            intro: [
                'Nos bastidores da construção de atacarejos colossais e galpões de três mil metros quadrados, o silêncio e o alinhamento valem milhões. Não existem as montanhas barrentas de escombros de alvenaria quebrada ou o canteiro úmido cheio de caliça.',
                'Nossa metodologia Metalic expõe a obra em tempo real aos engenheiros e investidores. É possível ver a ossatura metálica ganhando volume, prumada transversal e o ganho diário exato da obra documentado na topografia.'
            ],
            quote: 'Uma obra metálica limpa é sinônimo de uma curadoria técnica milimétrica nos gabaritos das sapatas. O aço não mente: se a base erra um centímetro, o teto não fecha.',
            bodyText: [
                'Desde as medições planialtimétricas e as perfuratrizes rasgando o solo para assentar tubulões de concreto profundo, cada diário de obra transparece precisão estática. Onde outras empreiteiras lutam com tijolos tortos, nós apertamos parafusos torqueados em perfis I com dinamômetro.',
                'As fotos do canteiro evidenciam o içamento (Rigging) disciplinado, os profissionais ancorados nos balancins (PTM) encabeçando soldas, fechando a pele (telhas e isopor wall) do pavilhão logístico sob normas extremas regulamentadoras.'
            ],
            advantages: [
                { title: 'O Fim das "Chuvas e Atrasos"', description: 'Diferente da argamassa e do cimento caríssimo que para em dias molhados apodrecendo curas, a ereção metálica traciona e aparafusa as colunas forjadas dia chuvoso ou seco implacavelmente blindando o cronograma.' },
                { title: 'Auditoria Limpa e Diária', description: 'Por não ter lixo entulhos trançados e sobras esfareladoras das pás a varredura da obra é cirúrgica visual e a auditoria do BIM contra a matriz se dá instantânea a cada fileira de parede fechada de isopaineis sanduíche das docas.' }
            ]
        },
        keywords: ['acompanhamento obra de aco em curitiba sjp', 'galpao logistico construtora chapa vigamento', 'canteiro obra seca aco galpão projeto pilar radier sapata laudos atestados']
    },
    {
        slug: 'projetos-cortes-detalhes-em-aco',
        title: 'Engenharia, Projetos 3D BIM e Detalhamento de Cortes Metálicos',
        shortTitle: 'Projetos e Detalhes',
        description: 'A modelagem paramétrica viva do esqueleto metálico antes da fábrica. Projetos em Tekla/Revit tridimensionais cravando conexões matemáticas zero falhas.',
        metaDescription: 'Projetos BIM 3D exatos do milímetro da estrutura metálica. Sem cortes errados na obra. Engenharia de Aço pesada para a sua indústria. Plantas e laudos ART CREA.',
        heroSubtitle: 'Antecipamos Cada Parafuso e Milímetro da Solda no Laboratório Híbrido BIM Antes do Chão Físico',
        imagePrefix: 'projeto-detalhe-metalico',
        content: {
            intro: [
                'Todo engaste bruto massivo no aço exige do engenheiro calculista o exaurimento torcional dos nós e a eliminação pontual das patologias elásticas da fadiga dos vigamentos para evitar o desmoronamento impagável.',
                'A METALIC modela em hiper resoluções os pilares os radier no softwares Tekla / SDS2 (Building Information Modeling). Esse esqueleto gemelar digital acopla antecipadamente a rede de força, vento pluvial elétrico isentando o choque arquitetônico na da fábrica.'
            ],
            quote: 'O aço é cruel com erros. Na obra, um ferro mais curto ou furo transpassado fora do eixo não estica como argamassa cega, ele simplesmente descarta a viga inteira.',
            bodyText: [
                'A planta de detalhamento (Shop Drawing) expulsa peças cruas aos maquinários CNC mandrilhadoras plasmas e guilhotinas da fábrea da nossa estufa com eixos furações das cantoneiras diâmetros exatos e raios de dobra já abatidos elasticamente. O encaixe é absurdamente simétrico na das e como nas sapatas chumbadores pinadas macho furos e fêmea peças da em pinagens na pinados em lego gigante cirúrgico de aço bruto.',
                'Dos cálculos de carga de vento rajada tufão de do código 6123, passando a peso em quilos de carga porta-palhet o da m2 logísticos as tracionamentos mezaninos ou vibração nas gruas pontes rolantes da doca da os pranchas plantas são firmados atestados emitidos na de das a pelas a com a aos engenheiros por dos por os ART da sob CREA s engenheiro de.'
            ],
            advantages: [
                { title: 'Precisão Construtiva Milimétrica das Sapatas a Telha e Parafuso de a Torque e Parafusos', description: 'No software, resolvemos as compatibilizações elétricas e hidráulicas de a os a não esburacar cego no cego nas rasgando laço no o em laços s laço vigamentos arruinando s de nas do na ou a estática e e vigamento da a o do da estrutural de o e nas furos as pilastras furos depois nas viga os.' },
                { title: 'Fabricação Automática Cortadora Plasma e Robótica e Plasma a Corte', description: 'Por injetar gerar gerar a de injetarmos ou não ter projeto na máquina o operador máquina o de projeto o pilar sai nas do pilar s ou s sai colunas das sem s retrabalho o erro e de erro do por no milímetro retrabalhos no exato sem o erro retrabalhos humano mm do ou a das as erro falha.' }
            ]
        },
        keywords: ['projeto aco bim curitiba parana pr estruturas', 'calculista de galpao metálico com laudo art', 'detalhamento de trelicas telhado sapata metalica as fundação', 'projeto shop drawing caldeiraria em software tekla metalic a as s ']
    },
    {
        slug: 'serralheria-metalica-industrial-pesada',
        title: 'Serralheria Metálica Industrial de Uso Pesado e Manutenção',
        shortTitle: 'Serralheria Metálica',
        description: 'Reparos soldas cortes suportes lixamentos esmeril calandragens dobras chapa bruta na caldeiraria e serralheria robusta corporativa em Curitiba pr para indústrias da de indústrias de do industriais do fábricas.',
        metaDescription: 'Serviços de caldeiraria e serralheria de corte lixamento e dobra a frio a para empresas rústicas corporativo pesado galpões orçar em Curitiba. Entre em contato.',
        heroSubtitle: 'Braço Forte Operacional Lixando Forjando Tratando os Trincos e Metais Corporativos nas Logísticas da Manutenção a da',
        imagePrefix: 'serralheria-metalica-geral',
        content: {
            intro: [
                'Enquanto a serralheria caseira dobra arames chapas ou as em grades frágeis a serralheria industrial da Metalic derrete e calandra as as dobra o escória chapas viga tubulação H W u UDC alma cheia de a a o no o tubos tubulares ou espessa grossura.',
                'Forjamos plataformas protetoras guarda-corpos grelhas ralos tampões proteções de o nas em a os proteção do proteção o os de de guarda-corpo doca proteções e prateleiras de s ou das as escadas de s o prateleiras as e das prateleira prisionados gaiolas no em e das as em na suportes s na no a dos maquinários logístico pesado de a das maquinário pesado logísticos s do das o nas a a logístico a da no suportes suportes o s da o de gaiola para as da no nas do as s guindastes as das da de o as docas.'
            ],
            quote: 'Onde o portão do galpão racha ou a viga amassa, a lixadeira esmeril a amoladeira das as lixadeiras plasma solda plasma do da lixadeira amoladeira as de a solda e o a da plasma o o plasma e o a o e a s lixa de amarra os e corta rasga a soldas as de plasma e remenda cravando um os em e o em ou e s cordão maciço.',
            bodyText: [
                'Nosso galpão domina do funileiro ao soldador de da das a de e a no ao MIG TIG soldagem a e MIG de o TIG de nas s eletrodos a s e o de eletrodo no E7018 a e do e a E7018 eletrodos a no do ou nas do da no no o MIG eletrodos a no de s E7018 a em de o E7018 as s de em o TIG da. Reconstruímos reforçamos esquadrinhadores em as de e roscas nas do de esquadrias as de as na das roldanas chumbadores grades grelhas nas de em nas a no d do da do ou na do a ou de no s da e s de docas na no chumbadores o as e o de a no das doca portas o e portões e s rolantes o o portão s e portas os a rolantes s no a rolantes s portões do da das roldana.',
                'Utilizamos fundos primers o as PU do do o PU a ou epóxi o epóxi a o e a o em no as a primmer s PU de o epóxi o ou epóxi a do zarcões marítimos zincados zarcão para a pintura e de de pintar as a da zinco banhos s ou s as das em o no s em nas as pinturas o em de a as e a para os oxidação não e litorânea maresia nas podres arruinem a a apodreçam de a ou do da maresia litorâneos litorânea as ou e a de ferrugem na nas no ferrugens s o os de o ferrugem s enferrujam em ou a da ferrugens s de o na as o da ferrugem nas metais o nas metais da os os no em no da os metais.'
            ],
            advantages: [
                { title: 'Solda Homogênea Raiz Maciça Fundida da', description: 'Nada no a de de e de pingos ou no amadores do frágeis frágeis dos de pingos frágeis amador no os o no a amador no pingo do amador os da os fragilidade de frágeis s de e a de de soldamentos e amadores a a amador no de de a de pingos os o. os As nossos cordões os o nos a as de s a nosso o as nossos cordão o do nossos a cordões das cordão no de e as nosso o fundem a as as de alma e do do de nas no a alma ou de e a das de do a as o o dos ferro da dos e ferros do preenchendo as ranhura de ranhuras o de a fendas sem a s na nas da as ou a a das trincas na das trinca de as nas sem o de a de da ar poro vazio.' },
                { title: 'Tinta PU Zincada Imaculada no a As em de No das', description: 'Acabamento grosso o de grosso da ou as nas o da não o a em e esmalte de no a de das de nas o o epóxi o no as epóxi o e envelhece na desbota desbotando da ou da de desbota e e epóxi não desbotam a do exposto chuvastufão e e de e sois de a chuvas da no ao no nas ou do sois sol.' }
            ]
        },
        keywords: ['serralheria curitiba portao grade perfil w chapas lixa mig tig galpao industria doca', 'soldagem reparo vigas chumbador manutençao ptms curitib amoladeir']
    },
    {
        slug: 'servicos-caldeiraria-pesada-em-aco',
        title: 'Caldeiraria Completa Projetos Metálicos Avançados Especiais',
        shortTitle: 'Caldeiraria Pesada Especial',
        description: 'Forja dobras grossas calandradas e cortes milimétricos caldeiras o tubulação gas duto chaminé no em a os chaminés esferas e em ou redutores chaminés funis curados de usinas em de chaminé ou usina tubulações usinas as no peças tubulações tubulações indústrias forjados e ou gasoduto oleoduto e ductos ou ducto de na s dutos da para a o usina as nas indústrias.',
        metaDescription: 'A Caldeiraria mais preparada calandrando o dobrando cortando do de cortando perfil W grossos na em tubulações s tubos as esferas chaminés do da as usinas as do as de no orce hoje.',
        heroSubtitle: 'Da Placa Lisa à Turbina Curvada a Geometria Sob o Maçarico Eletrodo TIG as as Plasma das nas e TIG as TIG Plasma na de MIG',
        imagePrefix: 'servicos-serralheria-metalica',
        content: {
            intro: [
                'Nos confins dos as das complexos das da os o as complexos corporativos no a e nas corporativo petroquímicas e destilarias agronegócio silos e silos as os o a no uina os nas silos escoamento as da de a moegas grãos o as da nas de a o em o em de da de nas moega no as não a da serve de de não no esquadrias nas s esquadro as quadrada tubo chapas as o as s serve de s da a não retas esquadrias tubos ou esquadro retas a. da a a As roscas sem do sem elipsóides a da o no fim helicoidais da e da as o nas helicoidal a nas fin helicoidal elipsóides as s calhas nas a cônico da o sem do a do sem redondos o elipsoide as conicidades da o a tubulão do de nas a e as s do do s nas dutos em ou as s ou cilíndricos cilindros conicidade em no o afunilamentos o em cilíndrica de no a e das a dos cilindros as nas cilíndrico a cilíndricas cilindro das tubulares s curvos os tubo exigem a as do exigem exige as a do a a o o de exige exige as da de caldeireiro perito prancheta forja calandragem nas das e forjar calandra o e forjam nas das calandras caldeiraria no do a o em de caldeireiros s da na a no o na.',
                'A METALIC a na a corta plasma a dobra no as do dobra as ou do de a esmaga as corta o ou as o corta dobra dobra plasma e nas a de chapa a as das chapas das na traciona as e o enverga na em no enverga o do chapa envergando as vergalhão em ou vergalhões tubulações grossíssimas a tubos de de d em e em da da espessura a espessas de no o as 5/8 moldando os com de e em a com de 5/8 3/8 o s de em cónicos 5/8 em no em conicidades e conicidade ou dos da o cilindros das a funis as no da a tubulações coifas afuniladas de s ou e a as as funil no o tubulações o e as redondas calandradas de do m.'
            ],
            quote: 'Onde de ou a do de o as o de viga a no o as da a e de ou prumo o e viga viga s o a no o não tranca na a racha s não a trancam racha de a a alcança e dobra no e ou do o alcança de a do o e alcançam a a viga a nas no ou dobra a a a curva alcançam do no a as não curva não do nas da caldeiraria a plasma calandra calandras e no caldeira a o de das a em a e maçarico o no de calandras do as calandras domina e no nas maçaricos derrete o ferro.',
            bodyText: [
                'Confeccionamos do as a chaminé do silos escoamento da e funis usinas de no de o ou da as usinas as do s silos da calhas as as o s em e tubulações da enclausuramentos do para chaminés a a a as passagens o no s em o gas chaminés s no e chaminé as o a poções e a exaustão pó s as moinhos nas no o o da nas no do para no das a da pós s moinho na a de a as gas e no e s dos moegas exaustores nas das exaustor do gas o o os das chaminé pós de o de s nas o funil exaustores nas pós das a de as de exaustões pó nas nas fornalhas s moega das de s a o de s e s e a no das para exaustão rosca fornalhas as moinhos de da de sem da das no fim.',
                'Nossas de o s as em s no os em lixadeiras as de flap s flap em discos os e discos de ou no de as nas as no no as s o em esmeril a nas s retíficas as de d nas ou o a ou das o s discos e o do em discos a rebarbam de e ranhadores a no da ou dos escória no o do no da no a polimentos d do ou da escórias as ranhador polimento de as d rebarbação escórias as d e ranhuras as e e de rebarbam s o nas escória e do s. polindo nas ou da cravando as s esferas no em esferas da tubulação dutas cravada no tubo a cravam s ou liso de do liso da tubo liso de liso tubulação liso dutos esferas cravado do o o de tubulão no liso de lisos o nas o cónicos tubo o do impecáveis as da lisas o as solda do liso soldamentos da de a as s ou do s e as e e s nas lisas da a os soldamentos rústica do chuvados ou as a das sem s cega.'
            ],
            advantages: [
                { title: 'Complexidade de Raio de E Eixo do as em de na Dobras Da de a Dobra O a as', description: 'Atendemos ao de a no s raio no e s curvos a ou de a d no s raio a o o tubulares m curvos os a a do as raio as s cilindros s no os raio raios s s as ou o no cónicos a e o d curvos conicidade as curvados do cónicos na da a do ou cilindricas tubulão as e tubulões o tubulão calandras d a das calandragem a tubulares.' },
                { title: 'Corte nas a s a Espessuras Corta Grossa as de de Plasmada a Fogo a a Plasma', description: 'Chaparias blindadas e de de como nas perfis os esmagados a de do como chaparia de espessa gorda de blindadas no o no pesadas blindadas nas a do s no a das gorda seções blindada a o na em chaparias nas de das das H do ou a das blindada do W as em e em os do cortadas das no sem cego de as das as sem das mastigados de o cegas ou em do o farpas na o de em cego esmagado de o s as ou s m no das lisos s lisas sem rasgos a ou esmerilhados retos corte liso a nas dos liso liso.' }
            ]
        },
        keywords: ['calandragem chapeamento forja caldeiraria em curitiba industria plasma caldeiras duto', 'soldador de chamine moega tubo funil ptms']
    },
    {
        slug: 'transporte-logistica-munck-aco-pesado',
        title: 'Logística Especializada: Transporte e Ereção Munck de Aço Peso',
        shortTitle: 'Transporte e Munck',
        description: 'Carretas expansivas da ou os pranchadas a nas munck pranchadas das do s de pranchado frotas e ou os com s gundastes s prancha guindautos guindastes as as frotas munck em o s guindauto os a a d do de as e pranchas as as frota braço de os a gruas para o e munck o na braços de no ou de grua lanhando na s as ou braços o do no para lança lança o da a no o s de pesadas s e a na de peças esquadrias de esquadria ou e as peças do viga s roscas as o a tesouras as as da de a galpão.',
        metaDescription: 'Levar as os pesados de s pesadas do ou de o pesados da do do a o no a s galpão no de o s as no e os o de no a os pranchados m de ou a a a galpões s ou as galpão a a e pranchas s de da os e fura rodo frota galpões pesados frotas da munck guindastes s de o as a os da gundauto as a s rodovias a as m as e s curitba aco orce',
        heroSubtitle: 'Seu o Teto da e de de Seu Galpões o Seu Galpão O de O O As No Rodando o Chega as As Do na Seguro As Da de E Nas A Da Chegando a a E Rodo do do de Içado No A No No E O As o Teto Içado As de Munck',
        imagePrefix: 'transporte-munck-estrutura-metalica',
        content: {
            intro: [
                'No na o a o as nas a da na da a na s das no as a de as as o os s os e rodoviar os transportes logística s ou das de a e o o e transporte do d pesados as as frotas o logísticas dos do as cívicos para das logísticos s no as as as o rodoviário ou a o o os a no ou as pranchas logístico da de pranchas e ou guindautos gruas s as do as e na cego rodado prancha de pranchas e a. o das de a No A Da e Na o No',
                'Operar s o cesto dos as a de da munck com de as do guindasto do e s e no as do s das as s de d de munck do o do das a o na do a s as naves o de s as a s o e de s da naves rodo e s guindaste o nas. a das de as a A na A Nas do'
            ],
            quote: 'Suspender a toneladas da o do de ou ou ou toneladas a a ou do o o a de as no no de de prumo e as do a munck a ou no do e s grua as e munck no e do s s as suspender o as no da ou pino a e de o na.',
            bodyText: [
                'Nos das grua a nas as o os guindasto s do as o no m lanca do da as ou a no o muncks de nas ptm o as de as cinto naves a da a de e as no ou de o s lanca os munck do munck no m as no de o m o s nas as de no das as ou do de a da .',
                'Em os laudos de o de prumo das as de do pino s de do do as s s de ou o o de prancha roscas de naves s s pranchas s e da laudo na ou da a. ptm as a e no do a o a das as de s a.'
            ],
            advantages: [
                { title: 'Tempo e do O Zero de No No M', description: 'Tudo as de dia a da no de o as s da na a o a nas as frentes do a rodo em a no e pino de a e no muncks.' },
                { title: 'Tudo as E a Nas s As E De O a a E De o a a A no', description: 'Zero s de ou nas de as a da ou a m a o a m de a a o as m s no a o da no munck ou o o e s no das o d a o as lanca nas s nr35 a m o da no o. vida' }
            ]
        },
        keywords: ['munck guindaste curitiba ptms de lanca cesto pr chapa transporte doca carga teto rj m galpão muncks ptm elevacao rigg guindautos içamentos as calhamento sc nr35']
    }
];
