import { siteConfig } from './seo'

const h1Prefixes = [
    'Cobertura Metálica',
    'Construção de Cobertura Metálica',
    'Especialista em Cobertura Metálica',
    'Fabricação de Cobertura Metálica',
    'Fábrica de Cobertura Metálica',
    'Galpões e Cobertura Metálica',
    'Projetos de Cobertura Metálica',
    'Instalação de Cobertura Metálica',
    'Estrutura e Cobertura Metálica',
    'Melhor Cobertura Metálica',
    'Empresa de Cobertura Metálica',
    'Serviços em Aço e Cobertura Metálica',
    'Coberturas Metálicas Sob Medida',
    'Montagem de Cobertura Metálica',
    'Soluções em Cobertura Metálica',
    'Galpões Metálicos e Coberturas',
    'Sistemas de Cobertura Metálica',
    'Cobertura Metálica Industrial',
    'Telhados Metálicos e Estruturas',
    'Especialistas em Telhados Metálicos',
    'Cobertura Termoacústica',
    'Fábrica de Telhas e Coberturas',
    'Cobertura Metálica para Galpão',
    'Engenharia e Cobertura Metálica',
    'Coberturas Metálicas de Grande Porte'
]

const titleSuffixes = [
    '| Metalic Estrutura',
    '— Qualidade Metalic',
    '| Referência no PR',
    '| Orçamento Rápido',
    '— Fabricação Própria',
    '| Engenharia Metálica',
    '— Estruturas Metálicas',
    '| Atendimento Especializado',
    '— Soluções Industriais',
    '| Projetos em Aço',
    '— Líder em Coberturas',
    '| Especialistas em Galpões',
    '— Entrega no Prazo',
    '| Orçamento sem Compromisso',
    '| Fabricação Rápida',
    '— Instalação Segura',
    '| Projetos Personalizados',
    '— Isolamento Térmico',
    '| Estruturas Robustas',
    '— Maior Durabilidade'
]

const descStarts = [
    'Buscando',
    'Precisando de',
    'A Metalic é a principal especialista em',
    'Sua obra exige a melhor',
    'Fabricamos e instalamos',
    'Desenvolvemos projetos de',
    'Procurando',
    'Realizamos a construção de',
    'Destaque no Paraná em',
    'Temos a solução ideal em',
    'Encontre a perfeição em',
    'Eleve o padrão do seu projeto com',
    'Trabalhamos duro para oferecer a melhor',
    'Liderança absoluta no fornecimento de',
    'Se a sua empresa precisa de'
]

const descMiddles = [
    'cobertura metálica para barracões e indústrias',
    'coberturas em aço de alta durabilidade',
    'estruturas e coberturas metálicas premium',
    'telhados e coberturas industriais de aço',
    'sistemas de cobertura com telha sanduíche',
    'coberturas zipadas e soluções metálicas',
    'coberturas termoacústicas para grandes vãos',
    'projeto completo de cobertura para galpão',
    'instalação de coberturas para quadras e ginásios',
    'estruturas metálicas de alta resistência',
    'projetos de coberturas rurais e silos',
    'coberturas de aço sob medida para logística',
    'engenharia de precisão para fechamentos metálicos'
]

const descEnds = [
    'Atendemos toda a região com agilidade e laudo ART.',
    `Ligue agora para ${siteConfig.phone} e faça seu orçamento.`,
    'Solicite uma visita técnica da nossa equipe.',
    'Garantia, segurança e cumprimento rigoroso de prazos.',
    'Menor custo por metro quadrado com qualidade superior.',
    'Experiência comprovada em mais de 2.000 obras.',
    'Trabalhamos dentro de todas as normas da ABNT.',
    'Soluções rápidas para não parar a sua produção.',
    'Construímos o sucesso da sua obra com aço certificado.',
    'Fábrica moderna e frota própria pronta para atender.',
    'Proteja seu estoque com tecnologia termoacústica.',
    'Não atrase seu cronograma. Confie em nossos profissionais.'
]

const heroSubtitles = [
    'Especialistas em engenharia de coberturas',
    'Protegendo seu patrimônio com aço de alta resistência',
    'Qualidade superior na proteção do seu galpão',
    'O melhor custo-benefício em telhados metálicos',
    'Acelere sua obra com nossas soluções em aço pré-fabricado',
    'Instalação rápida e garantida contra intempéries temporais',
    'Coberturas industriais com isolamento termoacústico',
    'Soluções estruturais desenhadas para longevidade máxima',
    'Transformando aço em produtividade e segurança absoluta',
    'Sua expansão industrial protegida por normas rigorosas',
    'Chega de infiltrações e manutenções corretivas excessivas',
    'Tecnologia de ponta desde a fundação ao teto do pavilhão'
]

// Simple deterministic string hasher to seed the random logic
function hashString(str: string): number {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i)
        hash = (hash << 5) - hash + char
        hash = hash & hash // Convert to 32bit integer
    }
    return Math.abs(hash)
}

function pickRandom<T>(arr: T[], seed: number, offset: number): T {
    const index = (seed + offset) % arr.length
    return arr[index]
}

const p1Options = [
    `A necessidade de uma infraestrutura robusta na cidade de {CITY} é crescente. Seja para novos polos logísticos ou complexos industriais, o uso de uma cobertura arquitetada em alta precisão elimina o risco de infiltrações e desgastes prematuros. Nosso atendimento dedicado aos empresários de {CITY} foca na pontualidade e em entregas rigorosamente dentro do cronograma estabelecido.`,
    `No dinâmico mercado de {CITY}, empreendimentos comerciais e agronegócios não podem perder tempo. Por isso, as estruturas metálicas oferecem o método mais eficiente e ágil para fechamentos e telhados. Atendemos toda a região de {CITY}, desde a fundação inicial do projeto à entrega da chave, executando obras focadas em retorno financeiro acelerado.`,
    `A geografia e o desenvolvimento urbano de {CITY} pedem soluções viáveis e que suportem fortes intempéries climáticas. Nossas coberturas metálicas são especialmente projetadas para cobrir galpões e pavilhões em {CITY} com o máximo de segurança estrutural. Nossa engenharia obedece estritamente a todas as normas da ABNT.`,
    `Em {CITY}, galpões de armazenamento, garagens e centros de distribuição necessitam de coberturas sem vazamentos e com amplos vãos livres. É exatamente isso que as estruturas de aço da Metalic promovem. A instalação que realizamos na região de {CITY} garante o mínimo de interferência na rotina produtiva da sua empresa.`,
    `A Metalic traz para o setor industrial de {CITY} o que há de mais inovador em telhados termoacústicos e coberturas de aço pesado. Como {CITY} conta com uma densidade grande de galpões e empresas fabris, nossos técnicos executam planejamentos para viabilizar vãos maiores a um custo global consideravelmente menor que alvenarias convencionais.`,
    `Empresários de {CITY} reconhecem que a chave para otimizar galpões logísticos é eliminar sustos com o clima agressivo da região. Soluções estruturadas da Metalic garantem blindagem extrema a vendavais e frentes frias crônicas habituais do Paraná. O investimento local retorna rapidamente na redução de avarias no parque fabril e no fim de manutenções corretivas em {CITY}.`,
    `Pensando no crescimento em larga escala das cooperativas de {CITY}, os edifícios e depósitos rurais da região exigem cobertura metálica robusta. Trabalhamos exclusivamente com ligas resistentes, perfis usinados com trato e pinturas eletrostáticas antienvelhecimento. Ao optar por construir com a Metalic em {CITY}, a depreciação deixa de ser um problema no orçamento.`,
    `Cada município da região metropolitana tem suas particularidades operacionais. Em {CITY}, onde o ritmo é acelerado, montar uma laje ou galpão em concreto armado tem cronograma lento. Com a chegada dos chassis de aço da Metalic, grandes empresários de {CITY} cortam em até quatro meses o cronograma, colocando galpões em operação muito mais cedo do que métodos arcaicos.`,
    `Não importa a inclinação ou a finalidade comercial em {CITY}. Do supermercado à transportadora de produtos perecíveis, a temperatura de abrigo sob um telhado desenhado pela nossa engenharia preserva insumos no longo prazo. Em {CITY}, fomos testados à exaustão por grandes companhias, e todos atestam as vantagens dos telhados termoisolantes de alto nível que instalamos.`,
    `A expansão industrial em {CITY} exige espaços versáteis, e construir com a Metalic garante exatamente isso. Projetamos telhados e estruturas pré-fabricadas inteiramente sob medida para concessionárias, atacados e indústrias pesadas da sua região. Nossa experiência se transforma em durabilidade real e comprovada nas construções industriais de {CITY}.`,
    `Sabemos que empreendimentos esportivos, como quadras cobertas e ginásios em {CITY}, necessitam de altíssimos graus de ventilação somados a vãos totalmente sem poluição visual ou pilares no meio da pista. A Metalic produz tesouras em aço que alcançam extremidades desafiadoras em solo de {CITY}, dando a liberdade espacial perfeita.`,
    `Se o seu frigorífico ou centro de armazenamento térmico no polo de {CITY} sofre com choques de energia, nossas telhas EPS (sanduíche) aplicadas sob estruturas milimetricamente calculadas oferecem proteção térmica impecável. A refrigeração da sua empresa em {CITY} se tornará exponencialmente mais rentável com o encapsulamento metálico adequado.`,
    `Em tempos em que a segurança do trabalho é pauta número um para grandes construções de {CITY}, não podemos aceitar montagens feitas às pressas por amadores. A Metalic opera na cidade inteiramente calçada por engenheiros renomados e licenças adequadas, blindando você contra litígios burocráticos e acidentes com alvenaria arcaica.`,
    `As construtoras responsáveis pelos maiores centros universitários e templos religiosos de {CITY} escolhem o aço arquitetônico como assinatura primária de beleza e esbeltez predial. Conseguimos montar em {CITY} coberturas leves, bonitas e que exigem 80% menos de sapatas e base de concreto do que um prédio ordinário.`,
    `O setor rural de {CITY} clama por armazéns que se preservem limpos de goteiras durante o escoamento de safras. Fazemos silos, cocheiras cobertas e pátios fechados que blindam todo o maquinário da pecuária e colheita ao menor custo viável por m², servindo o agro raiz de {CITY} ano após ano sem reclamar de manutenção.`
]

const p2Options = [
    `Sabemos que os desafios climáticos exigem estruturas em aço bem dimensionadas. Uma cobertura metálica instalada em {CITY} pela nossa equipe recebe soldas MIG avançadas e revestimento termoacústico para maximizar o conforto no galpão, tornando seu negócio muito mais rentável operativamente.`,
    `Construir com aço em {CITY} significa ter previsibilidade total de custos, pois cada peça já chega da nossa base pronta para montagem. Essa abordagem reduz em quase 40% as perdas com entulhos em sua obra. Para os empreendedores locais de {CITY}, isso traduz-se de imediato em ROI rápido.`,
    `Cada perfil metálico fixado nos projetos que a Metalic entrega aos clientes de {CITY} passa por inspeções rigorosas contra corrosão e desgastes climáticos. Seja zincalume, galvalume ou telha sanduíche com EPS, todas as soluções viabilizam galpões sustentáveis e à prova de dores de cabeça estruturais.`,
    `Como o volume de chuvas no eixo logístico do estado afeta a todos, as coberturas da Metalic erguidas em {CITY} utilizam sistemas de calhamento e rufos superdimensionados intencionalmente, a fim de suportar altos volumes de água de forma escoada. Sua mercadoria, sua frota ou seus maquinários sempre ficam blindados das chuvas em {CITY}.`,
    `Os processos de expansão de indústrias em {CITY} encontram na estrutura pré-fabricada de aço a união perfeita: ela permite facilmente futuros "puxadinhos" planejados ou expansões modulares, não sendo preciso desmontar toda a fachada existente. Se você crescer em {CITY}, seu galpão deverá expandir com a mesma facilidade técnica.`,
    `Mais do que soldas e chapas parafusadas, entregar estabilidade é nossa meta diária no interior do Paraná. Entendemos a realidade econômica do parque operacional em {CITY} e formatamos projetos calculados no fio de cabelo pelas nossas pranchetas de cálculo estrutural e simulações.`,
    `Uma das premissas essenciais em {CITY} é zelar pela legalidade da execução predial. Galpões em chácaras comerciais, barracões industriais e estacionamentos privados exigem assinatura e ART (Anotação de Responsabilidade Técnica). Nossos mestres de obra liberam as operações na prefeitura de {CITY} sem nenhuma dor de cabeça com peritos.`,
    `Além do aspecto logístico, a beleza industrial é crucial. Nossa gama de coberturas translúcidas instaladas em depósitos de varejo em {CITY} garantem fumaça contida, iluminação solar farta para economizar kW/h de energia elétrica, alinhando um visual limpo através de vãos amplos e modernos que destacam as construções em torno de {CITY}.`,
    `Lavar dinheiro ralo abaixo com retrabalhos estruturais não dá mais. Nossa frota mobilizada até {CITY} conta com braços mecânicos munck e especialistas em fundações complexas de aço. Cada etapa de montagem recebe uma auditoria rigorosa fotográfica para aferir de forma inquestionável que a bitola utilizada foi a combinada.`,
    `A aplicação de telhas autoportantes em supermercados atacadões de {CITY} está substituindo armações rústicas por coberturas perfeitamente lisas que dispensam apoio interno. Entregamos obras belas que valorizam a arquitetura local da fachada e transmitem status imediato à sua marca perante o público da região.`,
    `Usar a Metalic em {CITY} significa contar com um ecossistema que limpa todas as ferrugens prévias do ambiente, trata juntas oxidadas de anexos velhos e funde a obra nova à existente com estética irretocável, transformando barracões abandonados em ativos hiperlucrativos.`,
    `Paredes trincam e cedem, mas o esqueleto primário do aço soldado pela Metalic em {CITY} resiste firme. Utilizamos aços normatizados das maiores siderúrgicas nacionais para certificar que tempestades não venham a retorcer seu pavilhão industrial na calada da noite.`,
    `Com um galpão bem iluminado pelo vão zenital de uma cobertura metálica apropriada, clientes da Metalic situados em {CITY} estão poupando montanhas de dinheiro todo mês com lâmpadas apagadas de dia. Trazemos as luzes do sol filtradas contra raios UV diretamente para dentro do chão de fábrica local.`,
    `A montagem a seco, também chamada de off-site construction, transformou a forma como {CITY} aborda grandes polos atacadistas. Sem usar água, sem gerar poeira insana e sem concretagem interminável na cobertura, sua equipe de caixa estará batendo recordes de faturamento enquanto os concorrentes ainda preparam argamassa.`
]

const quoteOptions = [
    `A principal vantagem da estrutura metálica instalada em {CITY} é a precisão no desenvolvimento arquitetônico e a previsibilidade absoluta durante a instalação.`,
    `Aço não é apenas material de construção; é garantia de agilidade. Nos projetos que entregamos, o prazo final muitas vezes chega a ser antecipado.`,
    `Optar por coberturas metálicas premium significa acabar definitivamente com goteiras e paralisações operacionais na sua fábrica.`,
    `Sustentabilidade e força andam lado a lado. O aço utilizado pela Metalic garante décadas de operação intacta para qualquer galpão no Paraná.`,
    `Velocidade de montagem é dinheiro no bolso do empresário. Quanto mais rápido terminamos a cobertura, mais rápido sua operação fatura.`,
    `Mão de obra qualificada somada a perfis de aço normatizados resultam na infraestrutura mais resistente disponível hoje no mercado da construção civil.`,
    `Empresários eficientes não querem ver cimento e areia atrapalhando a rotina. A estrutura de aço chega pronta, bastando realizar o rápido processo de montagem.`,
    `Investir numa cobertura metálica com vedação impecável é ter certeza de proteger o estoque de chuvas de vento características dessa região do Paraná.`,
    `Grandes armazéns agrícolas e centros logísticos demandam espaços sem colunas. Oferecemos exatamente esta liberdade espacial (grandes vãos livres).`,
    `Uma cobertura de qualidade reflete diretamente na redução do custo energético, devido à implementação paralela de isolamentos termofísicos focados no micro-clima de {CITY}.`,
    `Para o pequeno empreendedor de {CITY}, o aço é um investimento seguro, durável e de fácil liquidez caso a infraestrutura inteira precise ser transferida futuramente.`,
    `Você desenha e calcula a arquitetura; nossa fábrica derrete a promessa burocrática e forja pilares intransponíveis ao redor do tempo, entregando estabilidade irrefutável.`,
    `Empresas campeãs em {CITY} estão trocando os métodos arcaicos pelas longarinas em aço galvalume para se blindarem das exigências sanitárias globais de armazenamento térmico fechado.`,
    `Uma tesoura estrutural desenhada à perfeição garante mais de 40 metros isolados no ar, devolvendo a mobilidade às carretas de piso dentro do seu centro logístico na cidade de {CITY}.`,
    `Não se arrisca a segurança de colaboradores com orçamentos obscuros em materiais podres. A Metalic usa vigas em perfis dobrados 100% monitorados e inspecionados com laudo e origem no Paraná.`,
    `Chega de obras sujas e crônicas. O aço pré-usinado revoluciona o panorama industrial, erguendo gigantes em questão de semanas, e ditando o novo compasso do agronegócio de {CITY}.`,
    `Nosso compromisso não é apenas parafusar as telhas; é garantir que nenhum vento arranque a proteção do seu fluxo de caixa contra a mãe natureza.`,
    `Se a engenharia e fundação não forem exatas, tudo ruirá. Nossos laudos ART na cidade de {CITY} são assinados sobre solo firme, garantindo vigas que não vergam e empresários que dormem em paz.`,
    `Tratar com zinco purificado e galvanizar as soldativas em {CITY} é o que fará as gerações de empresários herdeiros assumirem galpões que continuarão inabaláveis pelas intempéries do amanhã.`
]

export function generateSEOForCity(cityName: string, salt: string = '') {
    const seed = hashString(cityName + salt)

    // Generate custom H1
    const prefix = pickRandom(h1Prefixes, seed, 1)
    const h1 = `${prefix} em ${cityName}`

    // Generate Meta Title (approx 50-60 chars)
    const suffix = pickRandom(titleSuffixes, seed, 2)
    const title = `${h1} ${suffix}`

    // Generate Meta Description (approx 140-160 chars)
    const start = pickRandom(descStarts, seed, 3)
    const middle = pickRandom(descMiddles, seed, 4)
    const end = pickRandom(descEnds, seed, 5)
    const description = `${start} ${middle} em ${cityName} - PR. ${end}`

    // Generate Hero Subtitle
    const heroSubtitle = `${pickRandom(heroSubtitles, seed, 6)} atendendo ${cityName}.`

    // Generate custom text paragraphs internally
    const rawP1 = pickRandom(p1Options, seed, 8)
    const rawP2 = pickRandom(p2Options, seed, 9)
    const rawQuote = pickRandom(quoteOptions, seed, 10)

    const p1 = rawP1.replace(/{CITY}/g, cityName)
    const p2 = rawP2.replace(/{CITY}/g, cityName)
    const quote = rawQuote.replace(/{CITY}/g, cityName)

    return {
        h1,
        title,
        description,
        heroSubtitle,
        customText: [p1, p2],
        customQuote: quote
    }
}
