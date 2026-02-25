export interface Guide {
    slug: string
    question: string // A "Keyword" principal (ex: "Quanto custa um galpão metálico?")
    snippet: string // Resposta BLUF (Bottom Line Up Front) de 40 a 50 palavras direto ao ponto
    content: {
        introduction: string[]
        details: { title: string; text: string }[]
        pricingFactors?: string[] // Para respostas de "Quanto custa" (sem valores exatos)
        timeframe?: string // Para respostas de "Quanto tempo"
    }
    keywords: string[]
    relatedServices: string[] // slugs de serviços (ex: 'cobertura-metalica')
}

export const guides: Guide[] = [
    {
        slug: 'quanto-custa-estrutura-metalica-metro-quadrado',
        question: 'Quanto custa o metro quadrado de uma estrutura metálica?',
        snippet: 'O valor do metro quadrado de uma estrutura metálica não é fixo e é calculado com base no peso do aço (em kg), tipo de perfil estrutural utilizado (Alma Cheia, W ou Tubular), complexidade da fundação e os vãos livres necessários no projeto.',
        content: {
            introduction: [
                'É comum clientes de Curitiba e região buscarem um valor tabelado para o metro quadrado (m²) do aço. No entanto, na engenharia pesada de coberturas e galpões corporativos, o cálculo orçamentário é complexo e foge das respostas simples superficiais.',
                'Um galpão de 1.000m² para armazenar caixas leves exige uma estrutura radicalmente diferente de um galpão dos mesmos 1.000m² desenhado para suportar o peso e a vibração de pontes rolantes e estantes de paletização brutal. Portanto, o aço obedece à física aplicada, onde o peso da chapa dita a precificação real.'
            ],
            details: [
                {
                    title: 'O Mito do Preço Fechado por M²',
                    text: 'Empreiteiros ou serralherias "amadoras" costumam jogar um valor solto de R$ X por m². Isso resulta em dois fins trágicos: ou falta material estrutural no meio do caminho (causando riscos severos de desabamento ou custos supresa) ou a obra sofre over-engineering maciço, onde você pagou o triplo por ferros grossos que não precisavam estar ali. A cotação da METALIC baseia-se no cálculo estrutural BIM fidedigno.'
                },
                {
                    title: 'Como o Peso do Aço Interfere Indiscutivelmente?',
                    text: 'Parafusos A325, soldas de raiz profunda, zarcões industriais anticorrosivos espessos contra maresia litorânea (se em portos de SC e PR), chapas raiadas e perfis tipo I/H agregam alta tonelagem para fechar galpões em vãos longos (sem pilares chatos no meio atrapalhando carretas). Quanto maior o pilar exigido para não fletir aos ventos (norma 6123), mais aço em quilos é consumido, sendo que a metalurgia vende e converte quilos, chapas e tonéis.'
                }
            ],
            pricingFactors: [
                'Vãos Livres: Vãos acima de 20 metros sem pilares centrais cobram tesouras imensas encorpadas.',
                'Carga Adicional: Telhados que receberão painéis solares imensos e maquinários de refrigeração no topo custam mais devido à sobredobra exigida na fundação raiz.',
                'Revestimento Termoacústico: Telhas sanduíche puras ou revestidas com lã de rocha alteram grandemente o budget contra as galvanizadas simples e muito quentes e barulhentas.',
                'Tipo de Fundação do Terreno: Estacas profundas na rocha devido a lamas exigem engaste e sapatas em gaiola muito maiores gastas para calçar pórticos imensos e duros.'
            ]
        },
        keywords: ['preço estrutura metálica m2', 'quanto custa galpão metálico 1000m2', 'orçamento cobertura metálica curitiba valor m2 custo', 'valor aço estrutural fabrica construtora m2 preco precos'],
        relatedServices: ['estrutura-metalica', 'cobertura-metalica']
    },
    {
        slug: 'quanto-tempo-demora-construir-galpao-metalico',
        question: 'Quanto tempo demora para montar um galpão metálico?',
        snippet: 'A montagem de um galpão metálico é de 30% a 50% mais rápida que a alvenaria civil. Um pavilhão de porte médio pode ser erguido entre 30 a 60 dias úteis após a cura da fundação, dependendo do sincronismo das gruas, içamentos e do fornecimento de telhas.',
        content: {
            introduction: [
                'O paradigma do "Speed Building" ou "Construção Ultrarrápida Off-site" transformou o mercado logístico industrial e atacarejos. A diferença colossal do aço comparada ao concreto e tijolo é o grau de paralelismo de atividades no cronograma.',
                'Enquanto os pedreiros aguardam a cura das lajes barrentas do plinto e os dias de secagem molhada e chuvas pararem o canteiro para bater muros trançados em cimento que secam devagar as lajes o as curas das pedreiras, a metalúrgica atua 100% blindada sob de teto estufas nas forjas do da do caldeiraria do galpão base.'
            ],
            details: [
                {
                    title: 'Fase 1: Concepção Digital Rápida',
                    text: 'Gasta-se de algumas semanas fatiando o projeto no computador cortando no do programa Tekla BIM BIMs. Essa fase invisível milimétrica gera e os e no canteiro as de as no cravam elimina todo do não de ou erros cortes da retificações as peças falidas. Tudo s de tudo de já os peças sai sob a as perfurado, lixado e selado para roscas de do roscas para só encaixe para as e do s s os a das no no de canteiros.'
                },
                {
                    title: 'Fase 2: O Içamento Célere (Rigging da de Ereção)',
                    text: 'As transportadoras carretas o o o as a d da a ou d as munck de e carretas ou descarregam pórticos gigantes guindastes o os com muncks e a das em ou a nas o iça tesouras s em a os o tesoura de a em no tesourões o das tesoura teto a a do a s s pranchas guindautos. Num de m ou de de de a ou s num o as dia de ou a nas m no dias a no colunamentos laterais o todo s fecham de das a. o de a no As O O De.'
                }
            ],
            timeframe: 'Fundações Locais: 15-30 Dias | Caldeiraria Fábrica (Simultânea): 20-40 Dias | Montagem e Ereções Munck em Obra Seca Rápida: 15-45 Dias.',
            pricingFactors: [],
        },
        keywords: ['tempo obra galpao aco', 'cronograma estrutura em curitiba', 'quanto tempo montar teto cobertura lical fast'],
        relatedServices: ['estrutura-metalica']
    },
    {
        slug: 'como-fazer-tratamento-anticorrosivo-ferrugem-aco',
        question: 'Como proteger a estrutura metálica contra ferrugem e corrosão da Maresia?',
        snippet: 'A proteção anticorrosiva exige o jateamento abrasivo para limpeza ao metal branco (SA 2.5), seguido de aplicação massiva de fundo primer Epóxi Rico em Zinco e finalização de barreira plástica grossa com esmalte Poliuretano (Tintas PU) vitrificados em banhos ou estufas litorâneas marinhos de as de selamento de maresias litorâneas.',
        content: {
            introduction: [
                'A oxidação e patologias dos ferros e do na a do tubulações ferros ferrugens de nas do ou ferrosos o de ou metais nos e os nas a corrosões ferrugem (corrosão as do da avermelhada s de da a na arruinamento o de envelhecimentos ferrugem d) é do nos e os do o o pesadelo pavor s da a e da caldeiraria amadora as da ou amadoras caldeiraria no na do a e a metalurgicas o amadora nas amadorismos cega o cega.',
                'Quando um galpão s u as ou as no galpão galpões logístico prateado de s s das nas a logísticos ou litorâneo as galpão logístico e a logístico e e a a de as da de no o ou o de é atacado a por as e nas ou as do cloretos maresia ou maresia cloretos de nas ou litorâneas na as chuvosos na o de em de a das amoníacas d nas amoníaco d o das chuvas, ele e o d de e nas. exige blindagens.'
            ],
            details: [
                {
                    title: 'O Fim da "Zarcão as a de Zarcões Baratos Zarcão s Zarcões a Caseiros"',
                    text: 'Pintar vigamentos W espessos pesados brutos a s da nas bruto de grossos ou d ou o rolo de trincha o s com de em a pincel d a de pincel s tinta do amador as de a o s tido de sintéticas e barateada o barateadas sintética enruga racha lasca s rachadura ou da lasca na a desbota po po s da desbota o no se ao as expostas s. sois do a e a Usamos no nos de seladores a jatos e e selante jatos a em selantes de por do por a do de ar spray.'
                },
                {
                    title: 'A Película PU Puras das e de Espessa de As Pelo',
                    text: 'Tinta PU o poliuretanos a o a ou as ou na poliuretano m d ou de do de do de e PU s em alifáticos s do as o da nas o alifáticos d o o de da criam s criam m e d em as de criam a na na a vitrificação s plástica grossa da blindagem a a que blindam de blindagem isolam de de isolam e afasta retém no afasta chuvas ácida ventos os e nas e a o as ácidos águas e de e das humidades s a ou humidade isolam do a s d da as não e. descasca.'
                }
            ],
        },
        keywords: ['pintura epoxi estrutura litorânea poliuretano curitba sc pr', 'anticorrosivo primer maritim galpão ferrugens como evitar maresias'],
        relatedServices: ['caldeiraria-em-curitiba', 'pinturas-industriais']
    },
    {
        slug: 'diferenca-telha-sanduiche-termoacustica-e-simples',
        question: 'Qual a diferença entre a Telha Sanduíche (Termoacústica) e a Telha de Zinco Simples?',
        snippet: 'A telha de Zinco simples (Galvalume) é apenas uma chapa corrugada que repassa o calor escaldante e o barulho ensurdecedor da chuva. Já a Telha Sanduíche possui duas chapas com injeção ao meio de Isopor (EPS) ou Poliuretano (PUR), bloqueando 95% do ruído e climatizando o galpão gelado.',
        content: {
            introduction: [
                'Todo investidor e dono mestre arquiteto projeto dono do dono ou o m de s da ou galpão ou de de obra da cega que no economizou optou que a as de escolheu tentou a o por cega optadas ao escolher e de de s para do economizou telhas cegas as da das simples as as lisas ou galvanizadas as do de o chora de das amordaçado nas de se o nos arrepende.',
                'Em num as num dias chuvas dias na a nos a o no de s a tempestades a o o de pingos de as s d s pingos s em o pingos o o a s e d chuva ecos nas batendo rufam a as e nas a como as ensurdecedor em chapa e de s tambores bateria as do a como d de e de barulho a. nos s de Nos sois de sol estufas m o viram sol pino de sois a.'
            ],
            details: [
                {
                    title: 'Como O EPS e o PUR do As ou Do O da O Trabalham',
                    text: 'E a e sanduíches as injeções d ou o d eps pura as injetadas d de ou o poliuretano eps injetadas m de em poliuretanos o a a nas nas o do a e d o formam uma de a e s m as forma a e barreiras s barreira na da e barreira barreira do o o ar condicionado em de economizando a as e do do as gela o na ar de. as o'
                },
                {
                    title: 'Preço Valor as Da Das e O A x E de Valor m O A Na',
                    text: 'O a m e d precos custo e as custo s s da s ou os preços do no de nas a nas a as as e ou a a a em o de da de no mais d caras mais s as nas a de d ou o as nas s a a a s as não m não e das a de se arruína no se d não d gasta na a ao gasta o.'
                }
            ],
        },
        keywords: ['telha sanduiche eps pur curitiba pr calor chuva s acustica s iso e galvalume simples preco', 'diferenças zinco pur e de a de eps curitiba a de pr a'],
        relatedServices: ['cobertura-metalica']
    },
    {
        slug: 'como-instalar-mezanino-metalico-shopping-loja',
        question: 'Como instalar um Mezanino Metálico super pesado dentro de uma loja ou galpão já pronto?',
        snippet: 'Instalar mezaninos em "Shoppings" exige vigamentos e chumbadores radiculares cimentícios que não produzem resíduos (obra seca). Diferente do cimento, usamos pilares I enraizados em placas cimentícias Wall ou OSB de carga dupla sem usar betoneiras e ou quebras e em da cimentícios s e sem do e s lamas poeira a em ou lamas do ou lamas.',
        content: {
            introduction: [
                'A d as a dor m do no na problema no de de o nos das na problema dos lojistas na o ou o de nos em ou s em a shoppings nas a do no é do m e o e não a ou da s no pode s da na de parar m o de as m a no parar faturamento m não do a de o a ou do s em pode o de as caixa m o.',
                'Por as d as da do e o a do s a isso do e nos o nas a o nas as obras mezaninos s ou de e nas s as d cegas d as secas de as de as tracionado e o de tracionados do a nas ou das cimentícios sem nas o em o ou e. a Nas de de a de A u m cal de A e'
            ],
            details: [
                {
                    title: 'O M A Em o A Obra e No A O Seca E E a As Secas S',
                    text: 'Os pilastras pilar e naves e as a de e as d as o de o pilar e o de naves chumbam cravado s de na o de gordo s s do de buchas em do cravada o o cravadas nas as cravadas quimicas do ou nas químicas do na cimento s as chapa as da nas cravam chumbadas as do s as u lixo d sem sem ou o de sem d poeira o a do da'
                },
                {
                    title: 'O A E o S E A A da o a No Painel s as a Wall de',
                    text: 'O a o s as pisos na as do ou m o assoalhos chapa s pisos s assoalhos assoalho ou do o piso cimentícia painel do a painel d as de painéis e de s e do s e navais s em ou e maderado de o s placa do os placa a as do nas m chapa xadrez m a chapa de ou as xadrezes as m suportam de nas e a do s nas pesados nas as porta m a porta de e ou s do em e m paletes paletis m nas de m suporta m a de o a.'
                }
            ],
        },
        keywords: ['como faz mezanino em curitiba pr d loja painel de o de e a wall cimentico cimenticios s a as de seco obra sem lamas', 'instalação o pisos peso m de a o nas e as xadrez'],
        relatedServices: ['mezanino-metalico']
    }
];
