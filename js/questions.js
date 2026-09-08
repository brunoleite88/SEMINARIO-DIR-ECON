/**
 * questions.js
 * Banco pedagógico e jurisprudencial completo de questões para o jogo didático
 * "Concorrência & Ordem: O Grande Desafio Econômico".
 *
 * Baseado estritamente nas lições doutrinárias e no roteiro oficial do seminário:
 * Eros Roberto Grau, Paula Forgioni, Vicente Bagnoli, André Ramos Tavares,
 * José Afonso da Silva, Fábio Nusdeo, José Vicente Santos de Mendonça,
 * STF (ARE 1378976/SP, SV 49, SV 38, ADI 4033), Direito Chinês e Alemão (GWB/Ordoliberalismo).
 */

const CATEGORIES = {
    livre_concorrencia: {
        id: "livre_concorrencia",
        name: "Livre Concorrência",
        subtitle: "Brasil: Antitruste, CADE e Jurisprudência do STF",
        color: "#2563eb",
        badgeIcon: "⚖️",
        accentColor: "#3b82f6"
    },
    tratamento_pme: {
        id: "tratamento_pme",
        name: "Tratamento a PMEs",
        subtitle: "Brasil: Isonomia Material, CF/88 e LC 123/06",
        color: "#059669",
        badgeIcon: "🏢",
        accentColor: "#10b981"
    },
    modelo_china: {
        id: "modelo_china",
        name: "Modelo da China",
        subtitle: "Economia Socialista de Mercado e Pequenos Gigantes",
        color: "#dc2626",
        badgeIcon: "🇨🇳",
        accentColor: "#ef4444"
    },
    ordem_alemanha: {
        id: "ordem_alemanha",
        name: "Ordem na Alemanha",
        subtitle: "Ordoliberalismo, GWB e Tutela das Mittelstand",
        color: "#d97706",
        badgeIcon: "🇩🇪",
        accentColor: "#f59e0b"
    }
};

const QUESTIONS_BANK = {
    livre_concorrencia: [
        {
            id: "lc_1",
            category: "livre_concorrencia",
            question: "De acordo com a clássica distinção doutrinária formulada por Paula Forgioni em 'Os Fundamentos do Antitruste', como se diferenciam a Livre Iniciativa e a Livre Concorrência?",
            options: [
                "A Livre Iniciativa é um princípio de entrada no mercado, enquanto a Livre Concorrência é um princípio de conduta dos agentes já estabelecidos.",
                "A Livre Concorrência assegura a criação livre de empresas, ao passo que a Livre Iniciativa regula as sanções e multas do CADE.",
                "Ambos os princípios são sinônimos perfeitos no Art. 170 da CF/88, inexistindo distinção técnico-jurídica entre eles.",
                "A Livre Iniciativa tutela o interesse difuso dos consumidores, enquanto a Livre Concorrência tutela os monopólios estatais previstos na Constituição."
            ],
            correctIndex: 0,
            commentary: "Conforme ensina Paula Forgioni, a Livre Iniciativa (Art. 170, caput) é a liberdade de acesso/entrada na atividade econômica; já a Livre Concorrência (Art. 170, IV) rege a conduta e rivalidade ética entre os agentes no mercado para evitar abusos."
        },
        {
            id: "lc_2",
            category: "livre_concorrencia",
            question: "Ao julgar a controvérsia sobre leis municipais que estabeleciam distância geográfica mínima entre farmácias e drogarias concorrentes, o STF editou a Súmula Vinculante nº 49, decidindo que:",
            options: [
                "É inconstitucional a fixação de distância mínima entre farmácias, pois cria reserva artificial de mercado e afronta a livre concorrência.",
                "É plenamente constitucional, pois compete exclusivamente aos municípios o planejamento urbano sanitário independentemente de reflexos econômicos.",
                "A distância mínima só é permitida caso autorizada previamente pelo Tribunal do CADE através de consulta administrativa.",
                "Apenas farmácias de grande porte devem respeitar a distância mínima, ficando isentas as microempresas familiares."
            ],
            correctIndex: 0,
            commentary: "A Súmula Vinculante nº 49 consolidou que leis locais que fixam distância mínima entre farmácias violam frontalmente o Art. 170, IV da CF/88, criando cartéis geográficos locais sob o pretexto ilegítimo de ordenação urbana."
        },
        {
            id: "lc_3",
            category: "livre_concorrencia",
            question: "No recentíssimo julgamento do leading case ARE 1378976/SP (STF, Junho/2025), de relatoria do Min. André Mendonça, a Corte declarou inconstitucional lei municipal que impunha rodízio com fechamento compulsório de farmácias aos finais de semana porque:",
            options: [
                "O poder municipal de fixar horários (Súmula Vinculante 38) não autoriza compelir estabelecimentos a fechar as portas, violando a livre concorrência e o direito à saúde.",
                "O município só poderia instituir tal rodízio se contasse com autorização prévia da ANVISA e do Ministério da Fazenda.",
                "O comércio varejista farmacêutico é monopólio da União Federal, não admitindo qualquer regulação ou postura municipal.",
                "A norma contrariou apenas o Código de Defesa do Consumidor, não tendo qualquer repercussão sobre os princípios da ordem econômica constitucional."
            ],
            correctIndex: 0,
            commentary: "O STF fixou que a competência municipal para fixar horários (SV 38) não confere poder de polícia para impor fechamento forçado a quem deseja trabalhar espontaneamente. A medida gerava reserva de mercado e prejudicava o acesso da população à saúde."
        },
        {
            id: "lc_4",
            category: "livre_concorrencia",
            question: "Segundo a Lei Antitruste Brasileira (Lei nº 12.529/2011), quais são os dois grandes eixos operacionais de atuação do Conselho Administrativo de Defesa Econômica (CADE)?",
            options: [
                "O controle preventivo de atos de concentração econômica (fusões/aquisições) e a repressão repressiva a infrações da ordem econômica (como cartéis).",
                "A fixação de tabelamento de preços de produtos básicos e o recolhimento centralizado de impostos federais das grandes empresas.",
                "A gestão do plano de privatizações da União e a homologação obrigatória de todos os contratos de trabalho do setor industrial.",
                "O julgamento de crimes contra o sistema financeiro nacional e a concessão de patentes de marcas e patentes."
            ],
            correctIndex: 0,
            commentary: "A Lei 12.529/2011 estrutura o CADE em duas frentes fundamentais: 1) Controle prévio de atos de concentração (evitando monopólios abusivos antes que ocorram) e 2) Repressão a condutas anticoncorrenciais (investigando e punindo cartéis e preços predatórios)."
        },
        {
            id: "lc_5",
            category: "livre_concorrencia",
            question: "Na clássica formulação doutrinária acolhida pelo direito concorrencial brasileiro (destacada por Tércio Sampaio Ferraz Jr. e Vicente Bagnoli), a livre concorrência juridicamente tutelada não significa anarquia de mercado, mas sim uma:",
            options: [
                "Concorrência 'efetiva' ou 'trabalhável' (workable competition), pautada por parâmetros de lealdade, regras éticas e vedação ao abuso de poder econômico.",
                "Concorrência perfeita teórica, na qual o Estado deve obrigar todas as empresas a praticarem exatamente o mesmo preço de custo.",
                "Liberdade irrestrita onde qualquer prática de eliminação de rivais é considerada legítima expressão do capitalismo de livre mercado.",
                "Intervenção estatal direta de substituição, em que os preços de todas as mercadorias são arbitrados pelo Poder Judiciário."
            ],
            correctIndex: 0,
            commentary: "A doutrina adverte que a CF/88 não tutela a 'concorrência perfeita' dos livros didáticos neoclássicos (que inexiste na realidade), mas sim a concorrência 'trabalhável' ou 'efetiva', que exige um marco regulatório que coíba condutas predatórias."
        },
        {
            id: "lc_6",
            category: "livre_concorrencia",
            question: "No julgamento da ADI 4.033 e do RE 627.543, o Supremo Tribunal Federal consolidou a diretriz de que restrições regulatórias estatais à atividade econômica:",
            options: [
                "Devem se submeter ao teste da proporcionalidade material, não podendo atuar como mera asfixia ou barreira protecionista local de mercado.",
                "Gozam de presunção absoluta de constitucionalidade, sendo vedado ao Judiciário analisar a motivação econômica do ato normativo.",
                "Podem ser editadas livremente por governos locais sempre que houver reivindicação de sindicatos ou associações patronais locais.",
                "São sempre nulas de pleno direito, pois o Estado é terminantemente proibido de fiscalizar estabelecimentos comerciais privados."
            ],
            correctIndex: 0,
            commentary: "O STF consagrou que qualquer restrição estatal ao comércio deve demonstrar fundamentação idônea, necessidade e proporcionalidade estrita, sendo nulas as exigências burocráticas artificiais voltadas a blindar agentes locais contra novos entrantes."
        },
        {
            id: "lc_7",
            category: "livre_concorrencia",
            question: "De acordo com Vicente Bagnoli, a atuação do direito concorrencial visa proteger a integridade do processo de mercado como um todo (eficiência alocativa e produtiva), o que significa que:",
            options: [
                "O antitruste protege a própria concorrência e o bem-estar social, e não o interesse financeiro individual de um concorrente em particular.",
                "O CADE deve intervir para salvar empresas ineficientes que estejam falindo devido à preferência natural dos consumidores por outros produtos.",
                "As empresas com maior participação de mercado devem ser compulsoriamente divididas em três partes a cada 5 anos.",
                "O bem-estar do consumidor é irrelevante para a análise de condutas, priorizando-se exclusivamente a arrecadação tributária da União."
            ],
            correctIndex: 0,
            commentary: "Um dos axiomas do Direito Antitruste é: 'a lei protege a concorrência, não os concorrentes ineficientes'. A intervenção só se legitima quando a conduta de um agente ameaça as próprias condições de rivalidade no mercado e o consumidor."
        },
        {
            id: "lc_8",
            category: "livre_concorrencia",
            question: "Uma lei municipal determina que duas farmácias concorrentes devem estar separadas por, no mínimo, 1 km. Segundo o entendimento apresentado no roteiro, essa norma:",
            options: [
                "É automaticamente válida porque municípios podem organizar seu território.",
                "É válida sempre que tiver como justificativa o planejamento urbano.",
                "Pode criar uma reserva artificial de mercado e violar a livre concorrência.",
                "É obrigatória para evitar excesso de concorrência."
            ],
            correctIndex: 2,
            commentary: "É justamente o problema enfrentado pela Súmula Vinculante 49. O STF considerou inconstitucionais restrições locais de distância mínima entre estabelecimentos do mesmo ramo porque elas podem criar reservas artificiais de mercado."
        },
        {
            id: "lc_9",
            category: "livre_concorrencia",
            question: "Qual das situações abaixo melhor representa a finalidade econômica da livre concorrência?",
            options: [
                "Garantir que todas as empresas tenham exatamente o mesmo faturamento.",
                "Impedir que qualquer empresa obtenha lucro elevado.",
                "Estimular empresas a melhorar produtos, inovar e reduzir preços para conquistar consumidores.",
                "Garantir preferência permanente às empresas nacionais."
            ],
            correctIndex: 2,
            commentary: "A concorrência funciona como mecanismo de eficiência alocativa e produtiva: a disputa leva os agentes a buscar melhor qualidade, inovação e preços mais competitivos, beneficiando o consumidor."
        }
    ],

    tratamento_pme: [
        {
            id: "pme_1",
            category: "tratamento_pme",
            question: "Sob a perspectiva da teoria constitucional e das lições de José Afonso da Silva e André Ramos Tavares, qual é o fundamento material do tratamento favorecido às PMEs (Art. 170, IX da CF/88)?",
            options: [
                "A concretização da igualdade material, equilibrando as assimetrias e a vulnerabilidade estrutural das pequenas empresas frente aos grandes conglomerados.",
                "A criação de privilégios hereditários perpétuos para empresários locais em detrimento do mercado consumidor.",
                "A renúncia voluntária do Estado ao poder de tributar e fiscalizar o setor terciário da economia.",
                "A preparação para a estatização progressiva de todas as microempresas privadas nacionais."
            ],
            correctIndex: 0,
            commentary: "A igualdade puramente formal (tratar iguais e desiguais de modo idêntico) asfixia o pequeno comerciante. O Art. 170, IX e Art. 179 materializam a isonomia substantiva, garantindo um campo de jogo viável (level playing field) para a sobrevivência das PMEs."
        },
        {
            id: "pme_2",
            category: "tratamento_pme",
            question: "A Emenda Constitucional nº 42/2003 introduziu uma especificação relevante no inciso IX do Art. 170 da CF/88. Essa alteração condicionou o tratamento favorecido às empresas de pequeno porte:",
            options: [
                "Constituídas sob as leis brasileiras e que tenham sua sede e administração no País.",
                "Que exportem pelo menos metade da sua produção industrial para países do Mercosul.",
                "Cujo quadro societário seja integralmente composto por pessoas com pós-graduação em Direito ou Economia.",
                "Que abram mão expressamente do direito de ingressar com ações perante o Poder Judiciário."
            ],
            correctIndex: 0,
            commentary: "A EC 42/2003 explicitou a redação do Art. 170, IX: 'tratamento favorecido para as empresas de pequeno porte constituídas sob as leis brasileiras e que tenham sua sede e administração no País', fortalecendo o desenvolvimento econômico soberano."
        },
        {
            id: "pme_3",
            category: "tratamento_pme",
            question: "O principal instrumento legal de densificação dos Arts. 170, IX e 179 da CF/88 é a Lei Complementar nº 123/2006 (Estatuto da ME e EPP). Dentre seus benefícios diretos, destaca-se:",
            options: [
                "A unificação de múltiplos tributos no Simples Nacional, facilitação de crédito e preferências e exclusividades em licitações públicas.",
                "A imunidade total contra processos trabalhistas e a isenção de qualquer norma sanitária ou ambiental.",
                "O tabelamento obrigatório dos preços cobrados por fornecedores de matéria-prima estrangeira.",
                "O poder exclusivo das microempresas de editar súmulas vinculantes junto ao Superior Tribunal de Justiça."
            ],
            correctIndex: 0,
            commentary: "A LC 123/2006 concretizou o mandamento constitucional através do regime simplificado e unificado do Simples Nacional, desregulamentação de rotinas burocráticas e regras de desempate e compras exclusivas nas licitações públicas."
        },
        {
            id: "pme_4",
            category: "tratamento_pme",
            question: "Por que a doutrina de Direito Econômico sustenta que o tratamento favorecido às PMEs NÃO contradiz o princípio da Livre Concorrência, mas sim o complementa?",
            options: [
                "Porque as PMEs oxigenam o ecossistema, combatem a inércia monopolista dos grandes grupos e asseguram a dispersão do poder econômico.",
                "Porque a Constituição expressamente revogou o princípio da livre concorrência nos setores onde existam microempresas.",
                "Porque as PMEs são juridicamente impedidas de competir diretamente com empresas de grande porte no mesmo setor.",
                "Porque o CADE determina anualmente que as grandes empresas doem 10% do seu faturamento para pequenos comércios vizinhos."
            ],
            correctIndex: 0,
            commentary: "Longe de ser uma distorção nociva, a assimetria positiva a favor das PMEs evita a concentração desenfreada de mercado em poucos oligopólios, preservando a pluralidade de concorrentes ativos e a competitividade do mercado nacional."
        },
        {
            id: "pme_5",
            category: "tratamento_pme",
            question: "O Artigo 179 da Constituição Federal de 1988 estabelece uma obrigação para a União, os Estados, o Distrito Federal e os Municípios consistente em:",
            options: [
                "Dispensar às microempresas e EPPs tratamento jurídico diferenciado, visando a incentivá-las pela simplificação, eliminação ou redução de obrigações.",
                "Proibir que pequenas empresas contratem funcionários regidos pela Consolidação das Leis do Trabalho (CLT).",
                "Financiar a fundo perdido 100% dos custos fixos de qualquer empresa que possua menos de 5 funcionários.",
                "Impedir a abertura de filiais de empresas multinacionais em municípios com menos de 500 mil habitantes."
            ],
            correctIndex: 0,
            commentary: "O Art. 179 da CF/88 impõe o dever federativo a todos os entes públicos de simplificar obrigações administrativas, tributárias, previdenciárias e creditícias para permitir a subsistência e geração de empregos pelas MPEs."
        },
        {
            id: "pme_6",
            category: "tratamento_pme",
            question: "No contexto da sustentabilidade socioeconômica brasileira, qual é o peso das micro e pequenas empresas (MPEs) na economia real e na geração de empregos?",
            options: [
                "Representam mais de 90% dos estabelecimentos do País e são responsáveis pela maior parcela dos postos de trabalho com carteira assinada.",
                "Representam menos de 5% dos negócios brasileiros, sendo um segmento secundário diante das empresas estatais federais.",
                "Operam exclusivamente no agronegócio de exportação de commodities para o mercado asiático.",
                "Possuem participação econômica irrelevante, já que apenas as 10 maiores multinacionais produzem riqueza no território nacional."
            ],
            correctIndex: 0,
            commentary: "As MPEs constituem mais de 90% das empresas formais brasileiras e respondem por mais de 50% dos empregos com carteira assinada, retendo a renda nas comunidades locais e viabilizando a circulação orgânica da riqueza."
        },
        {
            id: "pme_7",
            category: "tratamento_pme",
            question: "Nas compras públicas e licitações (Lei 14.133/21 e LC 123/06), qual mecanismo assegura o tratamento favorecido às micro e pequenas empresas?",
            options: [
                "A preferência de contratação em caso de empate ficto e a realização de licitações exclusivas para itens de até R$ 80.000,00.",
                "A autorização expressa para fornecer produtos de qualidade inferior aos previstos no edital licitatório.",
                "A cobrança de valores até 5 vezes superiores ao preço médio de mercado sem necessidade de cotação.",
                "A dispensa definitiva de apresentação de certidões de regularidade fiscal mesmo após a adjudicação do contrato."
            ],
            correctIndex: 0,
            commentary: "A legislação estabelece itens exclusivos para MPEs em compras públicas de até R$ 80 mil, além de margem de preferência e direito de desempate ficto, utilizando o poder de compra do Estado para descentralizar o mercado."
        },
        {
            id: "pme_8",
            category: "tratamento_pme",
            question: "Qual alternativa apresenta corretamente uma das razões pelas quais o tratamento favorecido pode funcionar como instrumento de promoção da própria concorrência?",
            options: [
                "Porque elimina a necessidade de competição.",
                "Porque impede que empresas grandes obtenham qualquer vantagem econômica.",
                "Porque ajuda a manter maior pluralidade de agentes no mercado.",
                "Porque transforma todas as empresas em empresas de pequeno porte."
            ],
            correctIndex: 2,
            commentary: "O raciocínio é que, sem mecanismos de correção das desigualdades, empresas pequenas poderiam desaparecer diante de grandes oligopólios. O favorecimento busca preservar a pluralidade de agentes, oxigenando a competição."
        }
    ],

    modelo_china: [
        {
            id: "ch_1",
            category: "modelo_china",
            question: "De acordo com os Artigos 6º e 11 da Constituição da República Popular da China de 1982, como é caracterizado o sistema econômico do país?",
            options: [
                "Uma 'Economia Socialista de Mercado', fundada na dominância da propriedade pública dos meios de produção, com estímulo e proteção legal ao setor privado.",
                "Um regime liberal puro de laissez-faire idêntico ao modelo econômico norte-americano do século XIX.",
                "Um sistema feudal absolutista em que o comércio privado e a criação de patentes são punidos com pena capital.",
                "Uma economia 100% estatizada no modelo soviético ortodoxo, sem qualquer margem para livre iniciativa ou propriedade particular."
            ],
            correctIndex: 0,
            commentary: "O Art. 6º da Constituição chinesa assenta a base na propriedade pública socialista dos meios de produção, mas o Art. 11 reconhece expressamente o papel complementar e essencial do setor não público (privado) no desenvolvimento nacional."
        },
        {
            id: "ch_2",
            category: "modelo_china",
            question: "No modelo econômico chinês, por que o Estado central apoia e fomenta estrategicamente as Pequenas e Médias Empresas (PMEs) privadas em vez de centralizar tudo em grandes estatais (SOEs)?",
            options: [
                "Porque as PMEs são mais ágeis para gerar inovações tecnológicas de ponta, patentes, empregos e adaptabilidade a nichos dinâmicos de exportação.",
                "Porque as empresas estatais (SOEs) foram extintas e privatizadas por completo nas reformas econômicas recentes.",
                "Porque a China possui compromisso formal de extinguir o Partido Comunista Chinês até o ano de 2030.",
                "Porque o governo chinês prefere transferir toda a arrecadação de tributos para corporações norte-americanas."
            ],
            correctIndex: 0,
            commentary: "O pragmatismo chinês enxerga as PMEs como catalisadoras de inovação ágil que as grandes estatais rígidas têm dificuldade de promover sozinhas. PMEs respondem pela maior parte das patentes industriais e exportações tecnológicas do país."
        },
        {
            id: "ch_3",
            category: "modelo_china",
            question: "Qual é o nome da prestigiada política industrial chinesa integrada ao Plano Quinquenal (2026-2030) destinada a cultivar pequenas e médias indústrias de ponta em semicondutores, robótica e IA?",
            options: [
                "Política dos 'Little Giants' (Pequenos Gigantes).",
                "Operação Big Tech Central.",
                "Plano de Estatização Total dos Mercados.",
                "Doutrina das Fábricas Livres de Cantão."
            ],
            correctIndex: 0,
            commentary: "O programa governamental dos 'Little Giants' (Pequenos Gigantes) seleciona e apoia milhares de PMEs de alta tecnologia em setores estratégicos da cadeia de suprimentos (chips, novos materiais, robótica) para reduzir dependência externa."
        },
        {
            id: "ch_4",
            category: "modelo_china",
            question: "Em matéria de compras governamentais na China, qual percentual aproximado de reserva orçamentária é legalmente direcionado para incentivar a contratação de PMEs locais?",
            options: [
                "Até 40% das compras públicas são reservadas para pequenas e médias empresas.",
                "Menos de 1%, pois as compras governamentais são exclusivas de megaestatais de Pequim.",
                "100% de todas as obras de infraestrutura pesada nacional.",
                "Apenas 5%, limitado exclusivamente ao setor de vestuário e calçados."
            ],
            correctIndex: 0,
            commentary: "As diretrizes governamentais chinesas de compras públicas estabelecem metas agressivas de reserva orçamentária de até 40% em favor de PMEs nacionais qualificadas, fomentando a cadeia de fornecedores regionais."
        },
        {
            id: "ch_5",
            category: "modelo_china",
            question: "Na recente modernização das leis concorrenciais chinesas (AML e combate à concorrência desleal), qual foi a principal medida adotada em relação a gigantes de plataformas digitais (como Alibaba e Tencent)?",
            options: [
                "Repressão ágil ao 'abuso de posição dominante relativa' e a imposições predatórias contra pequenos lojistas e fornecedores na internet.",
                "Isenção irrestrita de impostos e autorização para eliminar concorrentes sem qualquer limite fiscalizatório.",
                "Obrigação de que todas as plataformas digitais fechassem seus sites aos sábados e domingos.",
                "Extinção imediata de todo e qualquer aplicativo de comércio eletrônico no território chinês."
            ],
            correctIndex: 0,
            commentary: "A autoridade concorrencial chinesa (SAMR) aplicou multas multibilionárias e reformulou a lei antitruste contra abusos como 'escolha um de dois' (cláusulas de exclusividade abusiva) para proteger os pequenos comerciantes nas plataformas."
        },
        {
            id: "ch_6",
            category: "modelo_china",
            question: "Ao contrastar o modelo concorrencial do Brasil com o da China, verifica-se que:",
            options: [
                "O Brasil atua como um Estado regulador e interventor excepcional (Art. 173), enquanto a China opera como Estado planejador central e proprietário hegemônico.",
                "O Brasil não possui qualquer órgão de repressão a cartéis, ao contrário da autoridade antitruste chinesa.",
                "A China adotou a Constituição de Weimar como seu texto constitucional supremo em substituição à Constituição de 1982.",
                "Ambos os países possuem modelos idênticos de controle antitruste sem nenhuma distinção ideológica ou institucional."
            ],
            correctIndex: 0,
            commentary: "Enquanto o modelo da CF/88 erige o mercado sobre a Livre Iniciativa privada cabendo ao Estado papel regulador supletivo, a China integra mercado e planejamento estatal sob o controle estratégico do Partido e das estatais."
        },
        {
            id: "ch_7",
            category: "modelo_china",
            question: "Imagine que o Estado chinês identifique uma pequena empresa de tecnologia especializada em chips como estratégica para o desenvolvimento nacional. Com base no que foi apresentado, é mais coerente afirmar que o Estado:",
            options: [
                "Deve obrigatoriamente deixar a empresa completamente independente de políticas estatais.",
                "Pode utilizar políticas de fomento para estimular sua inovação e inserção estratégica.",
                "Deve transformar imediatamente a empresa em estatal.",
                "Deve impedir que a empresa exporte."
            ],
            correctIndex: 1,
            commentary: "O caráter pragmático e estratégico do modelo chinês: PMEs privadas podem ser fomentadas pelo Estado por seu potencial de inovação, geração de patentes, flexibilidade e exportação."
        },
        {
            id: "ch_8",
            category: "modelo_china",
            question: "Quem são os chamados 'Pequenos Gigantes' no contexto apresentado sobre a China?",
            options: [
                "Grandes empresas estatais chinesas.",
                "Pequenas e microindústrias especializadas em setores estratégicos e tecnológicos.",
                "Empresas estrangeiras instaladas na China.",
                "Órgãos governamentais responsáveis pelo planejamento econômico."
            ],
            correctIndex: 1,
            commentary: "Os 'Little Giants' são apresentados como micro e pequenas indústrias especializadas, especialmente em nichos como chips, robótica e biotecnologia, dentro da estratégia chinesa de fortalecimento tecnológico."
        },
        {
            id: "ch_9",
            category: "modelo_china",
            question: "Qual é uma das principais diferenças entre Brasil e China destacadas?",
            options: [
                "O Brasil possui planejamento estatal central agressivo, enquanto a China é essencialmente reguladora.",
                "Brasil e China possuem exatamente o mesmo modelo econômico.",
                "O Brasil é apresentado como essencialmente regulador e com intervenção excepcional, enquanto a China utiliza planejamento estatal intenso.",
                "A China não admite empresas privadas."
            ],
            correctIndex: 2,
            commentary: "Essa é uma das comparações centrais do trabalho: o Brasil constitucionaliza a economia de mercado e prevê intervenção estatal em determinadas situações, enquanto a China combina mercado com planejamento estatal intenso e propriedade pública estratégica."
        }
    ],

    ordem_alemanha: [
        {
            id: "de_1",
            category: "ordem_alemanha",
            question: "Em contraste com a analítica Constituição Brasileira de 1988, a Lei Fundamental da Alemanha (Grundgesetz de 1949) adota o princípio da:",
            options: [
                "Neutralidade Econômica Constitucional (Wirtschaftsneutralität), permitindo ao legislador democraticamente eleito definir a política econômica dentro dos limites do Estado Social.",
                "Estatização obrigatória de todas as indústrias farmacêuticas e automotivas instaladas no país.",
                "Proibição absoluta de qualquer intervenção do Estado na regulação de preços e contratos privados.",
                "Imposição constitucional do socialismo soviético de economia planificada sem propriedade privada."
            ],
            correctIndex: 0,
            commentary: "A Grundgesetz alemã não constitucionalizou detalhadamente um modelo econômico fixo (Wirtschaftsneutralität). Cabe ao Parlamento e governo eleitos traçar as diretrizes, desde que respeitados o Estado Social e os direitos fundamentais."
        },
        {
            id: "de_2",
            category: "ordem_alemanha",
            question: "Qual corrente teórica concebida na Escola de Freiburg (por Walter Eucken e Franz Böhm) serviu de fundamento intelectual para a ordem econômica alemã do pós-guerra?",
            options: [
                "O Ordoliberalismo, sustentando que o livre mercado necessita de uma ordem jurídica forte (Ordnungspolitik) para impedir a cartelização autodestrutiva.",
                "O Marxismo-Leninismo ortodoxo voltado à extinção da moeda e do comércio varejista.",
                "O Anarcocapitalismo de livre mercado absoluto, com a total eliminação de juízes e tribunais antitruste.",
                "A Doutrina Fisiocrata do século XVIII, afirmando que a agricultura é a única fonte real de riqueza do Estado."
            ],
            correctIndex: 0,
            commentary: "O Ordoliberalismo de Freiburg postulou que o mercado deixado a si mesmo se destrói pela concentração de poder econômico. O Estado deve, portanto, fixar as regras do jogo (Ordnungspolitik) e manter a concorrência ativa e protegida."
        },
        {
            id: "de_3",
            category: "ordem_alemanha",
            question: "O modelo econômico e social da Alemanha pós-1949, formulado no esteio do Ordoliberalismo por Ludwig Erhard e Alfred Müller-Armack, é formalmente denominado:",
            options: [
                "Economia Social de Mercado (Soziale Marktwirtschaft).",
                "Capitalismo de Laisser-Faire Selvagem.",
                "Economia Coletivista de Planejamento Quinquenal.",
                "Mercantilismo Colonial Fechado."
            ],
            correctIndex: 0,
            commentary: "A 'Soziale Marktwirtschaft' conjuga a liberdade de concorrência e livre mercado com a busca de justiça e equilíbrio social, constituindo o pilar do milagre econômico alemão do pós-guerra."
        },
        {
            id: "de_4",
            category: "ordem_alemanha",
            question: "No direito antitruste alemão, qual lei infraconstitucional de 1957 é conhecida como a 'viga mestra' da concorrência, sendo aplicada pelo Bundeskartellamt?",
            options: [
                "O GWB (Gesetz gegen Wettbewerbsbeschränkungen - Lei contra Restrições da Concorrência).",
                "O BGB (Código Civil Alemão napoleônico de 1804).",
                "A Tarifa Externa Comum da União Aduaneira Prussiana.",
                "A Lei das Doze Tábuas de Frankfurt de 1920."
            ],
            correctIndex: 0,
            commentary: "O GWB (Gesetz gegen Wettbewerbsbeschränkungen), promulgado em 1957, é a legislação antitruste basilar da Alemanha, aplicada com rigor técnico pelo Departamento Federal de Cartéis (Bundeskartellamt)."
        },
        {
            id: "de_5",
            category: "ordem_alemanha",
            question: "O que caracteriza as famosas 'Mittelstand', base e motor do tecido socioeconômico da Alemanha?",
            options: [
                "Pequenas e médias empresas tipicamente familiares, caracterizadas pela união indissociável entre a propriedade e a gestão executiva direta.",
                "Corporações multinacionais estatais sediadas em Berlim que não possuem acionistas privados.",
                "Empresas de fachada criadas unicamente para operar no mercado especulativo de derivativos em Nova York.",
                "Cooperativas agrícolas comunais onde todos os salários são estritamente idênticos por lei."
            ],
            correctIndex: 0,
            commentary: "As Mittelstand são o coração da economia alemã: empresas médias, sólidas e inovadoras, onde donos e administradores estão diretamente presentes na condução do negócio e profundamente enraizados na estabilidade de suas regiões."
        },
        {
            id: "de_6",
            category: "ordem_alemanha",
            question: "A recente Emenda de 2021 ao GWB alemão introduziu a pioneira Seção 19a, que outorgou ao Bundeskartellamt poderes para:",
            options: [
                "Proibir condutas unilaterais abusivas de forma preventiva em plataformas digitais com relevância concorrencial primordial entre mercados.",
                "Confiscar os lucros das pequenas empresas e destiná-los ao resgate de bancos em dificuldades.",
                "Impedir que cidadãos alemães utilizem a internet durante os finais de semana e feriados nacionais.",
                "Tabelar os preços de todos os aplicativos para smartphones vendidos na Europa."
            ],
            correctIndex: 0,
            commentary: "A Seção 19a do GWB revolucionou o antitruste global ao permitir ao Bundeskartellamt atuar preventivamente contra práticas abusivas de grandes Big Techs antes mesmo da consolidação de um dano irreversível ao mercado e às PMEs."
        },
        {
            id: "de_7",
            category: "ordem_alemanha",
            question: "O parágrafo segundo do Artigo 14 da Lei Fundamental da República Federal da Alemanha consagrou uma célebre diretriz sobre o direito de propriedade:",
            options: [
                "'A propriedade obriga. O seu uso deve servir ao mesmo tempo ao bem comum' (função social da propriedade).",
                "'A propriedade privada é sagrada e inviolável, sendo vedado qualquer tipo de tributo sobre herança ou patrimônio.'",
                "'Toda a propriedade privada pertence em última instância ao Estado soberano, inexistindo posse de bens de consumo.'",
                "'A propriedade só é reconhecida para cidadãos maiores de 50 anos de idade residentes na Baviera.'"
            ],
            correctIndex: 0,
            commentary: "O clássico dispositivo alemão 'Eigentum verpflichtet. Sein Gebrauch soll zugleich dem Wohle der Allgemeinheit dienen' (Art. 14.2) é o marco mundial da função social da propriedade, legitimando a regulação social do mercado."
        },
        {
            id: "de_8",
            category: "ordem_alemanha",
            question: "O princípio da neutralidade econômica alemã significa que:",
            options: [
                "O Estado não pode intervir de nenhuma maneira na economia.",
                "A Constituição não determina que toda atividade econômica seja estatal, mas impõe seu modelo obrigatório.",
                "A Constituição não impõe um modelo econômico específico, mas estabelece balizas jurídicas e sociais.",
                "Empresas podem atuar sem qualquer limite jurídico."
            ],
            correctIndex: 2,
            commentary: "Neutralidade econômica não significa ausência de regras. São balizas o Estado Social, a função social da propriedade e a liberdade profissional, entre outros direitos fundamentais."
        },
        {
            id: "de_9",
            category: "ordem_alemanha",
            question: "O ordoliberalismo da Escola de Freiburg parte da ideia de que:",
            options: [
                "O mercado deve ser completamente abandonado em favor do planejamento estatal.",
                "O Estado deve criar e preservar uma ordem jurídica capaz de impedir a cartelização e proteger a concorrência.",
                "O mercado se autorregula perfeitamente e dispensa intervenção jurídica, apesar da concorrência.",
                "A propriedade privada deve ser mitigada."
            ],
            correctIndex: 1,
            commentary: "Para o ordoliberalismo, o mercado não necessariamente se autorregula de maneira espontânea. Por isso, o Estado deve estabelecer uma estrutura jurídica, a Ordnungspolitik, capaz de preservar a ordem concorrencial."
        },
        {
            id: "de_10",
            category: "ordem_alemanha",
            question: "Na Alemanha, a Seção 19a do GWB foi apresentada como mecanismo especialmente relevante para:",
            options: [
                "Impedir qualquer atuação de empresas estrangeiras.",
                "Permitir atuação preventiva contra condutas abusivas de grandes plataformas digitais.",
                "Criar reservas de mercado para grandes empresas.",
                "Eliminar o Mittelstand."
            ],
            correctIndex: 1,
            commentary: "A Seção 19a do GWB, segundo o roteiro, conferiu ao Bundeskartellamt poderes preventivos contra condutas unilaterais abusivas de grandes plataformas digitais com relevância primordial para a concorrência."
        }
    ]
};

// Questões de Morte Súbita (Desempate - Perguntas Diretas para o Mediador)
const SUDDEN_DEATH_QUESTIONS = [
    {
        id: "sd_1",
        title: "Caso das Farmácias no STF (ARE 1378976/SP)",
        question: "Qual enunciado de Súmula Vinculante do STF proíbe leis municipais de fixarem distância mínima entre farmácias concorrentes sob pretexto de zoneamento urbano?",
        answer: "Súmula Vinculante nº 49 do STF.",
        rationale: "Aprovada em 2015 pelo STF, vedou restrições geográficas que criavam reservas de mercado anticompetitivas."
    },
    {
        id: "sd_2",
        title: "Escola de Pensamento Econômico Alemão",
        question: "Qual é o nome da escola econômica alemã do pós-guerra, fundada por Walter Eucken e Franz Böhm, que defende que o Estado deve manter uma 'Ordnungspolitik' para resguardar a concorrência?",
        answer: "Escola de Freiburg (ou Ordoliberalismo).",
        rationale: "O ordoliberalismo é a matriz teórica que sustenta a Economia Social de Mercado (Soziale Marktwirtschaft)."
    },
    {
        id: "sd_3",
        title: "Programa Industrial Chinês para PMEs",
        question: "Como são chamadas as micro e pequenas indústrias chinesas altamente especializadas em setores de ponta (chips, robótica e biotecnologia) cultivadas no Plano Quinquenal?",
        answer: "'Little Giants' (ou Pequenos Gigantes).",
        rationale: "Trata-se de política de Estado para descentralizar a inovação tecnológica ágil fora das estatais rígidas."
    },
    {
        id: "sd_4",
        title: "Norma Constitucional Brasileira",
        question: "Em qual inciso e artigo da Constituição Federal de 1988 está previsto expressamente o princípio do Tratamento Favorecido para as empresas de pequeno porte?",
        answer: "Artigo 170, Inciso IX da CF/88 (alterado pela EC 42/2003).",
        rationale: "Inserido nos princípios gerais da ordem econômica para concretizar a isonomia material frente a grandes conglomerados."
    },
    {
        id: "sd_5",
        title: "Autoridade Antitruste Brasileira",
        question: "Qual é o órgão público judicante da União responsável pelo controle prévio de fusões e repressão a cartéis no Brasil?",
        answer: "CADE (Conselho Administrativo de Defesa Econômica).",
        rationale: "Autarquia federal vinculada ao Ministério da Justiça, estruturada pela Lei nº 12.529/2011."
    }
];

// Cópias originais de backup para permitir restauração de questões legadas editadas
const ORIGINAL_QUESTIONS_BANK = JSON.parse(JSON.stringify(QUESTIONS_BANK));
const ORIGINAL_SUDDEN_DEATH_QUESTIONS = JSON.parse(JSON.stringify(SUDDEN_DEATH_QUESTIONS));
const ORIGINAL_CATEGORIES = JSON.parse(JSON.stringify(CATEGORIES));

function updateCategoryNames(themesConfig) {
    if (!themesConfig) return;
    Object.keys(themesConfig).forEach(catId => {
        if (CATEGORIES[catId] && themesConfig[catId].name) {
            CATEGORIES[catId].name = themesConfig[catId].name;
        }
    });
}

