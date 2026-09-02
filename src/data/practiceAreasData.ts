export interface SubService {
  title: string;
  description: string;
  highlights: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PracticeAreaDetail {
  slug: string; // 'familia' | 'sucessoes' | 'imobiliario' | 'regularizacao'
  id: string; // 'area-familia', etc.
  title: string;
  headline: string;
  subtitle: string;
  tag: string;
  shortDesc: string;
  heroBadge: string;
  overview: string[];
  strategicApproach: {
    title: string;
    description: string;
    points: string[];
  };
  services: SubService[];
  methodology: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: FaqItem[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  whatsappTopic: string;
}

export const PRACTICE_AREAS_DATA: Record<string, PracticeAreaDetail> = {
  familia: {
    slug: 'familia',
    id: 'area-familia',
    title: 'Direito de Família',
    headline: 'Proteção jurídica e acolhimento humano para o momento mais delicado da sua vida.',
    subtitle: 'Atendimento estratégico e humanizado em divórcios, partilhas de bens, guarda de filhos e pensão alimentícia em Balneário Camboriú e região.',
    tag: 'PROTEÇÃO & DISCRIÇÃO',
    heroBadge: 'Atendimento Humanizado & Especializado',
    shortDesc: 'Atendimento humanizado e estratégico em momentos delicados, assegurando a proteção dos direitos e o equilíbrio familiar.',
    whatsappTopic: 'Direito de Família (Divórcio, Guarda, Pensão ou Partilha)',
    metaTitle: 'Direito de Família em Balneário Camboriú | Dra. Rosana Beling Advocacia',
    metaDescription: 'Advogada especialista em Direito de Família em Balneário Camboriú. Divórcio consensual e litigioso, partilha de bens, guarda compartilhada, pensão e união estável. OAB/SC 24.701.',
    keywords: [
      'advogada de familia balneario camboriu',
      'divorcio em cartorio balneario camboriu',
      'divorcio litigioso sc',
      'partilha de bens divorcio',
      'guarda compartilhada filhos',
      'pensao alimenticia balneario camboriu',
      'reconhecimento uniao estavel',
      'dra rosana beling direito de familia'
    ],
    overview: [
      'O Direito de Família trata de relações profundamente humanas, onde aspectos emocionais e patrimoniais se entrelaçam. Questões como a dissolução de um casamento, a definição da convivência com os filhos ou a partilha do patrimônio conquistado exigem sensibilidade, discrição e uma condução técnica rigorosa.',
      'Na RB Advocacia, a atuação da Dra. Rosana Beling é guiada pela busca prioritária de soluções consensuais e céleres através de acordos e vias extrajudiciais em cartório, preservando o bem-estar psicológico da família e reduzindo o desgaste emocional e financeiro.',
      'Quando o consenso não é possível, atuamos com firmeza e combatividade no âmbito judicial para garantir a proteção integral dos seus direitos, a salvaguarda dos filhos menores e a justa divisão patrimonial.'
    ],
    strategicApproach: {
      title: 'Nossa Abordagem no Direito das Famílias',
      description: 'Aliamos a firmeza técnica à empatia necessária para conduzir momentos de transição com segurança:',
      points: [
        'Prioridade absoluta para vias consensuais e extrajudiciais mais rápidas.',
        'Atendimento sigiloso, individualizado e com acolhimento psicológico-jurídico.',
        'Blindagem patrimonial e auditoria preventiva na partilha de bens.',
        'Foco irrestrito no melhor interesse e bem-estar de crianças e adolescentes.'
      ]
    },
    services: [
      {
        title: 'Divórcio Consensual e Extrajudicial (em Cartório)',
        description: 'Solução célere e descomplicada para casais sem litígio. Quando não há filhos menores ou incapazes (ou com questões de guarda já homologadas), o divórcio pode ser lavrado em poucos dias diretamente em tabelionato.',
        highlights: ['Processo concluído em poucos dias', 'Economia de custas e menor desgaste', 'Partilha de bens documentada e segura']
      },
      {
        title: 'Divórcio Litigioso e Medidas Urgentes',
        description: 'Atuação combativa nos casos em que não há acordo entre as partes, resguardando direitos, pleiteando bloqueio preventivo de bens, fixação de alimentos provisórios e afastamento de cônjuge do lar quando necessário.',
        highlights: ['Pedidos liminares de urgência', 'Investigação e localização de patrimônio oculto', 'Defesa técnica incisiva em juízo']
      },
      {
        title: 'Guarda, Convivência e Regime de Visitas',
        description: 'Estruturação do plano parental com foco no melhor interesse dos filhos. Definição clara de residência principal, convivência paterna e materna, divisão de férias e feriados, além de prevenção contra alienação parental.',
        highlights: ['Guarda compartilhada equilibrada', 'Plano de convivência personalizado', 'Combate à alienação parental']
      },
      {
        title: 'Pensão Alimentícia (Fixação, Revisão e Execução)',
        description: 'Cálculo e fixação de alimentos com base no trinômio necessidade-possibilidade-proporcionalidade. Ações revisionais para readequação de valores e execuções ágeis em caso de inadimplemento.',
        highlights: ['Fixação justa de pensão alimentícia', 'Revisão por alteração financeira', 'Cobrança e execução de parcelas em atraso']
      },
      {
        title: 'Reconhecimento e Dissolução de União Estável',
        description: 'Formalização legal do período de convivência com estabelecimento do regime de bens, direitos sucessórios e divisão justa dos bens adquiridos durante a convivência em comum.',
        highlights: ['Contratos e escrituras de união estável', 'Partilha proporcional do patrimônio comum', 'Garantia de direitos previdenciários e sucessórios']
      },
      {
        title: 'Partilha de Bens e Planejamento Matrimonial',
        description: 'Análise minuciosa de regimes de bens, elaboração de pactos antenupciais estratégicos e condução segura da partilha de imóveis, empresas, investimentos e quotas societárias.',
        highlights: ['Pactos antenupciais e convivenciais', 'Partilha de cotas societárias e imóveis', 'Proteção patrimonial preventiva']
      },
      {
        title: 'Tutela, Curatela e Tomada de Decisão Apoiada',
        description: 'Processos voltados à proteção e representação jurídica de pessoas idosas, enfermas ou com necessidades especiais que necessitam de amparo legal para atos da vida civil.',
        highlights: ['Processos ágeis de curatela', 'Prestação de contas judicial segura', 'Garantia da dignidade da pessoa tutelada']
      }
    ],
    methodology: [
      {
        step: '01',
        title: 'Consulta e Diagnóstico Sigiloso',
        description: 'Escuta atenta da sua história e análise individualizada de todas as nuances familiares, emocionais e patrimoniais envolvidas.'
      },
      {
        step: '02',
        title: 'Estratégia e Análise Documental',
        description: 'Mapeamento detalhado dos bens, rendimentos, documentos civis e definição da melhor rota jurídica (extrajudicial ou judicial).'
      },
      {
        step: '03',
        title: 'Tentativa de Consenso & Mediação',
        description: 'Busca ativa por acordos justos e equilibrados que evitem anos de litígio, desgaste familiar e custos judiciais desnecessários.'
      },
      {
        step: '04',
        title: 'Condução Firme e Acompanhamento Contínuo',
        description: 'Protocolo e acompanhamento rigoroso do processo até a homologação final, com comunicação transparente e acessível em cada etapa.'
      }
    ],
    faqs: [
      {
        question: 'Quanto tempo demora um divórcio em cartório (extrajudicial)?',
        answer: 'Quando há acordo entre o casal sobre a partilha e não há filhos menores dependentes, o divórcio extrajudicial em cartório costuma ser concluído entre 3 e 15 dias úteis, após a reunião de todas as certidões necessárias.'
      },
      {
        question: 'Como é calculado o valor da pensão alimentícia?',
        answer: 'A lei brasileira não fixa uma porcentagem engessada de 30%. O valor é determinado pelo equilíbrio entre a necessidade de quem recebe (alimentando), a capacidade financeira de quem paga (alimentante) e a proporcionalidade, considerando moradia, saúde, educação, alimentação e lazer.'
      },
      {
        question: 'Guarda compartilhada significa que o filho passa metade do tempo em cada casa?',
        answer: 'Não necessariamente. A guarda compartilhada diz respeito à responsabilidade conjunta nas decisões sobre a vida do filho (escola, saúde, criação). A residência principal costuma ser fixada na casa de um dos genitores, com plano de convivência flexível e saudável para o outro.'
      },
      {
        question: 'O que acontece se um dos cônjuges esconder bens antes do divórcio?',
        answer: 'A ocultação fraudulenta de patrimônio pode ser combatida em juízo por meio de quebra de sigilo bancário, fiscal, expedição de ofícios a órgãos de registro e perícia contábil para reaver a quota-parte sonegada.'
      },
      {
        question: 'Como funciona a dissolução de união estável não registrada no papel?',
        answer: 'É possível ingressar com uma ação de reconhecimento cumulada com dissolução de união estável. Comprovação por fotos, testemunhas, contas conjuntas ou residência comum comprova a relação e dá direito à partilha dos bens adquiridos onerosamente no período.'
      }
    ]
  },

  sucessoes: {
    slug: 'sucessoes',
    id: 'area-sucessoes',
    title: 'Sucessões e Inventários',
    headline: 'Inventários ágeis, partilha segura de herança e proteção do patrimônio familiar.',
    subtitle: 'Condução estratégica e desburocratizada de inventários extrajudiciais em cartório, testamentos e planejamento sucessório em Santa Catarina.',
    tag: 'PLANEJAMENTO & AGILIDADE',
    heroBadge: 'Agilidade Extrajudicial & Preservação de Bens',
    shortDesc: 'Condução ágil e segura da transmissão de bens, prezando pela harmonia familiar e pela preservação do patrimônio.',
    whatsappTopic: 'Sucessões e Inventário (Inventário em Cartório, Testamento ou Planejamento)',
    metaTitle: 'Inventário e Sucessões em Balneário Camboriú | Dra. Rosana Beling',
    metaDescription: 'Especialista em Inventário Extrajudicial em Cartório, Inventário Judicial, Testamentos e Planejamento Sucessório em Balneário Camboriú - SC. OAB/SC 24.701.',
    keywords: [
      'inventario em cartorio balneario camboriu',
      'inventario extrajudicial sc',
      'inventario judicial sc',
      'advogada inventario balneario camboriu',
      'abertura inventario prazo itcmd sc',
      'planejamento sucessorio familiar',
      'testamento balneario camboriu',
      'dra rosana beling sucessoes'
    ],
    overview: [
      'A perda de um ente querido é um momento de grande vulnerabilidade emocional. Paralelamente ao luto, a família precisa lidar com procedimentos legais e prazos fiscais para a transferência regular dos bens deixados pelo falecido.',
      'O inventário não precisa ser um processo traumático, lento ou repleto de conflitos. Com a assessoria jurídica especializada da Dra. Rosana Beling, buscamos sempre que possível a via extrajudicial em cartório, que permite finalizar o inventário em semanas em vez de anos.',
      'Também oferecemos assessoria preventiva através de planejamento sucessório e testamentos, permitindo que famílias estruturem a sucessão em vida, reduzindo custos tributários (ITCMD) e garantindo harmonia entre os herdeiros.'
    ],
    strategicApproach: {
      title: 'Por que escolher a RB Advocacia para seu Inventário?',
      description: 'Oferecemos condução técnica focada em prazos curtos, economia tributária e serenidade familiar:',
      points: [
        'Expertise em Inventários Extrajudiciais em Cartório concluídos com máxima rapidez.',
        'Planejamento tributário para cálculo correto e otimização do ITCMD estadual.',
        'Atuação preventiva contra multas de atraso na abertura do inventário.',
        'Mediação ativa entre herdeiros para construção de consenso na partilha.'
      ]
    },
    services: [
      {
        title: 'Inventário Extrajudicial em Cartório (Tabelionato)',
        description: 'Procedimento mais ágil e econômico. Havendo acordo entre os herdeiros capazes, o inventário é realizado por escritura pública em cartório em questão de poucas semanas, liberando os bens para venda ou registro imediato.',
        highlights: ['Finalização média em 15 a 45 dias', 'Dispensa burocracias do Poder Judiciário', 'Liberação rápida de imóveis e contas']
      },
      {
        title: 'Inventário Judicial Consensual ou Litigioso',
        description: 'Necessário quando existem herdeiros menores/incapazes, testamento formal pendente de abertura ou divergências na partilha. Conduzimos o processo com agilidade processual e defesa intransigente do seu quinhão hereditário.',
        highlights: ['Representação combativa de herdeiros ou meeiro', 'Remoção de inventariante irregular', 'Prestação de contas minuciosa']
      },
      {
        title: 'Planejamento Sucessório e Estruturação Patrimonial',
        description: 'Organização antecipada da sucessão através de doações com reserva de usufruto, cláusulas de incomunicabilidade e impenhorabilidade, holdings familiares e testamentos, evitando disputas futuras.',
        highlights: ['Redução expressiva de custos e tributos', 'Prevenção de brigas entre herdeiros', 'Manutenção do controle dos bens em vida']
      },
      {
        title: 'Testamentos Públicos, Cerrados e Particulares',
        description: 'Orientação jurídica precisa para elaboração e registro de testamentos válidos, respeitando a legítima dos herdeiros necessários e garantindo que a vontade do testador seja integralmente cumprida.',
        highlights: ['Análise da legítima e quota disponível', 'Minutas seguras contra anulações', 'Diretivas antecipadas de vontade']
      },
      {
        title: 'Cessão de Direitos Hereditários e Renúncia',
        description: 'Assessoria para transferência legal de direitos sobre herança a terceiros ou outros herdeiros antes da conclusão do inventário, formalizada com rigor documental.',
        highlights: ['Elaboração de escritura pública de cessão', 'Segurança na compra de direitos hereditários', 'Formalização de renúncia pura e simples']
      },
      {
        title: 'Alvarás Judiciais e Liberação de Valores',
        description: 'Procedimento célere para levantamento de saldos bancários, FGTS, PIS/PASEP, restituição de imposto de renda ou autorização judicial para venda de veículos e imóveis no curso do inventário.',
        highlights: ['Liberação rápida de recursos retidos', 'Custeio das despesas funerárias e ITCMD', 'Venda autorizada de bens para saldar dívidas']
      }
    ],
    methodology: [
      {
        step: '01',
        title: 'Levantamento Patrimonial & Herdeiros',
        description: 'Identificação de todos os bens, dívidas, certidões de óbito, casamento e documentos dos herdeiros e do falecido.'
      },
      {
        step: '02',
        title: 'Definição da Via Mais Rápida (Cartório ou Judicial)',
        description: 'Análise de viabilidade para inventário extrajudicial em cartório ou protocolo judicial com pedido de urgência.'
      },
      {
        step: '03',
        title: 'Cálculo e Declaração do ITCMD',
        description: 'Apresentação da Declaração de Informações do ITCMD junto à Secretaria da Fazenda de Santa Catarina para emissão da guia.'
      },
      {
        step: '04',
        title: 'Lavratura da Escritura e Registro dos Bens',
        description: 'Assinatura da escritura pública de partilha no tabelionato e envio aos Registros de Imóveis e bancos para transferência definitiva.'
      }
    ],
    faqs: [
      {
        question: 'Qual é o prazo para abertura do inventário e qual a multa por atraso em SC?',
        answer: 'O Código de Processo Civil estabelece o prazo de 60 (sessenta) dias a contar da data do falecimento para iniciar o inventário. Caso ultrapassado, o Estado de Santa Catarina aplica uma multa percentual sobre o valor do imposto ITCMD.'
      },
      {
        question: 'Quais são os requisitos para fazer o inventário em cartório?',
        answer: 'Os herdeiros devem ser maiores e capazes, deve haver consenso integral sobre a divisão dos bens, e é obrigatória a presença de um advogado constituído. Havendo testamento, em SC é possível com prévia homologação judicial.'
      },
      {
        question: 'Quanto custa um inventário (custas, imposto e honorários)?',
        answer: 'Os custos envolvem: o imposto estadual (ITCMD, que em SC varia de 1% a 8% progressivo sobre o valor venal dos bens), as custas do cartório ou judiciais e os honorários advocatícios estabelecidos conforme a tabela da OAB/SC.'
      },
      {
        question: 'É possível vender um imóvel herdado antes do término do inventário?',
        answer: 'Sim, através de autorização judicial (alvará para venda no inventário judicial) ou por meio de Escritura Pública de Cessão de Direitos Hereditários, devidamente orientada por advogado especialista.'
      },
      {
        question: 'Se houver dívidas deixadas pelo falecido, os herdeiros precisam pagar do próprio bolso?',
        answer: 'Não. As dívidas do falecido são pagas exclusivamente pelo patrimônio da herança até o limite do valor dos bens deixados. O patrimônio pessoal dos herdeiros nunca responde por dívidas do falecido.'
      }
    ]
  },

  imobiliario: {
    slug: 'imobiliario',
    id: 'area-imobiliario',
    title: 'Direito Imobiliário',
    headline: 'Segurança jurídica e blindagem de riscos para seus negócios imobiliários.',
    subtitle: 'Assessoria jurídica especializada para compra, venda, contratos, locações comerciais e residenciais e incorporações imobiliárias no litoral de Santa Catarina.',
    tag: 'SEGURANÇA EM NEGÓCIOS',
    heroBadge: 'Due Diligence & Blindagem Contratual',
    shortDesc: 'Assessoria jurídica integral para negociações imobiliárias seguras, blindagem de riscos e elaboração contratual precisa.',
    whatsappTopic: 'Direito Imobiliário (Compra e Venda, Locação, Contratos ou Due Diligence)',
    metaTitle: 'Direito Imobiliário em Balneário Camboriú | Dra. Rosana Beling',
    metaDescription: 'Assessoria jurídica imobiliária em Balneário Camboriú e região. Due Diligence para compra e venda, elaboração de contratos, locações, despejo e distratos. OAB/SC 24.701.',
    keywords: [
      'advogado imobiliario balneario camboriu',
      'due diligence imobiliaria sc',
      'contrato compra e venda imovel balneario camboriu',
      'analise de risco imobiliario',
      'contrato de locacao comercial sc',
      'acao de despejo balneario camboriu',
      'distrato imobiliario sc',
      'dra rosana beling direito imobiliario'
    ],
    overview: [
      'O mercado imobiliário de Balneário Camboriú e do litoral de Santa Catarina é um dos mais valorizados e dinâmicos do país. Transações de alto valor exigem cuidado redobrado: um contrato mal redigido ou a falta de uma auditoria prévia detalhada pode gerar perdas financeiras milionárias e anos de litígios.',
      'A atuação da Dra. Rosana Beling em Direito Imobiliário visa proteger integralmente o patrimônio de compradores, vendedores, locadores, investidores e imobiliárias, garantindo que cada cláusula contratual ofereça segurança jurídica sólida.',
      'Realizamos auditorias imobiliárias completas (Due Diligence), elaboração e revisão minuciosa de contratos, assessoria em locações comerciais de alto padrão e defesa em disputas possessórias e contratuais.'
    ],
    strategicApproach: {
      title: 'Segurança Máxima em Negócios Imobiliários',
      description: 'Protegemos o seu capital com análise profunda de riscos e precisão contratual:',
      points: [
        'Due Diligence completa com emissão de parecer jurídico detalhado antes da assinatura.',
        'Contratos sob medida que blindam contra inadimplência, vícios ocultos e nulidades.',
        'Agilidade na resolução de conflitos locatícios e comerciais.',
        'Atuação alinhada às particularidades do mercado imobiliário do litoral catarinense.'
      ]
    },
    services: [
      {
        title: 'Auditoria e Análise de Risco (Due Diligence Imobiliária)',
        description: 'Investigação aprofundada da situação jurídica do imóvel e de todos os vendedores e antecessores. Verificação de certidões cíveis, fiscais, trabalhistas, ambientais e eventuais fraudes à execução.',
        highlights: ['Parecer de risco documentado', 'Verificação de penhoras e hipotecas ocultas', 'Prevenção de perdas do investimento']
      },
      {
        title: 'Elaboração e Revisão de Contratos Imobiliários',
        description: 'Redação de contratos de promessa de compra e venda, permuta, dação em pagamento, cessão de direitos e instrumentos particulares personalizados que eliminam brechas jurídicas.',
        highlights: ['Cláusulas penais e de garantia robustas', 'Definição clara de prazos e condições resolutivas', 'Equilíbrio e segurança jurídica bilateral']
      },
      {
        title: 'Contratos e Conflitos de Locação (Residencial e Comercial)',
        description: 'Assessoria integral para proprietários e inquilinos em contratos de locação urbana e comercial, garantias locatícias (fiança, seguro, caução), renovatórias e revisões de aluguel.',
        highlights: ['Contratos com garantias sólidas', 'Ações de despejo por falta de pagamento ou denúncia vazia', 'Ações renovatórias para pontos comerciais']
      },
      {
        title: 'Distrato Imobiliário e Rescisão Contratual',
        description: 'Defesa de adquirentes ou construtoras em rescisões de promessa de compra e venda de imóveis na planta, atraso na entrega de obras e recuperação de valores pagos.',
        highlights: ['Aplicação da Lei do Distrato (Lei 13.786)', 'Restituição justa de valores retidos', 'Cobrança de multas por atraso de entrega']
      },
      {
        title: 'Assessoria em Leilões de Imóveis (Judiciais e Extrajudiciais)',
        description: 'Análise prévia de editais, processos judiciais de origem, débitos condominiais e tributários, desocupação do imóvel arrematado e registro de carta de arrematação.',
        highlights: ['Análise de viabilidade do leilão', 'Ações de imissão na posse céleres', 'Cancelamento de gravames anteriores']
      },
      {
        title: 'Assessoria para Condomínios e Incorporações',
        description: 'Consultoria jurídica para condomínios residenciais e comerciais, cobrança de inadimplentes, elaboração e alteração de convenções e regimentos internos.',
        highlights: ['Cobrança extrajudicial e judicial de cotas', 'Adequação de convenção condominial', 'Consultoria jurídica para síndicos e administradoras']
      }
    ],
    methodology: [
      {
        step: '01',
        title: 'Análise Preliminar do Negócio',
        description: 'Compreensão do formato da transação, partes envolvidas, valores, forma de pagamento e prazos estipulados.'
      },
      {
        step: '02',
        title: 'Auditoria de Certidões e Matrícula',
        description: 'Requisição e conferência de todas as certidões pessoais dos vendedores e do imóvel em todos os órgãos competentes.'
      },
      {
        step: '03',
        title: 'Minuta Contratual Blindada',
        description: 'Elaboração ou revisão minuciosa da minuta contratual, inserindo salvaguardas essenciais para a proteção do cliente.'
      },
      {
        step: '04',
        title: 'Acompanhamento de Assinatura e Registro',
        description: 'Acompanhamento presencial ou digital da assinatura no tabelionato e protocolo no Cartório de Registro de Imóveis.'
      }
    ],
    faqs: [
      {
        question: 'O que é Due Diligence imobiliária e por que ela é indispensável?',
        answer: 'É a auditoria jurídica prévia que investiga certidões do imóvel e do vendedor em âmbito cível, trabalhista, criminal e fiscal. Ela evita que o comprador perca o imóvel por fraude contra credores, dívidas fiscais ou penhoras do antigo dono.'
      },
      {
        question: 'Posso usar um modelo padrão de contrato da internet para comprar um imóvel?',
        answer: 'Não é recomendado. Modelos genéricos não contêm cláusulas específicas sobre vícios redibitórios, condições resolutivas de financiamento bancário, multas proporcionais ou garantias personalizadas, deixando seu patrimônio vulnerável.'
      },
      {
        question: 'Quanto tempo demora uma ação de despejo por falta de pagamento?',
        answer: 'Com o pedido de liminar para desocupação em 15 dias (mediante caução quando aplicável), a decisão judicial pode ser obtida rapidamente, agilizando a recuperação da posse do imóvel pelo locador.'
      },
      {
        question: 'Se a construtora atrasar a entrega das chaves, quais são os meus direitos?',
        answer: 'Ultrapassado o prazo de tolerância de 180 dias previsto em lei, o comprador tem direito a receber indenização mensal de 1% sobre o valor pago ou rescindir o contrato com devolução de 100% dos valores pagos com juros e correção monetária.'
      },
      {
        question: 'O que deve ser verificado antes de arrematar um imóvel em leilão?',
        answer: 'Deve-se verificar o edital, o processo judicial de origem, débitos acumulados de IPTU e condomínio, se há recursos judiciais pendentes e se o imóvel está ocupado, calculando os custos de desocupação.'
      }
    ]
  },

  regularizacao: {
    slug: 'regularizacao',
    id: 'area-regularizacao',
    title: 'Regularização de Imóveis',
    headline: 'Transforme posse e contratos de gaveta em escritura pública registrada.',
    subtitle: 'Soluções jurídicas extrajudiciais em cartório e judiciais para obter a matrícula definitiva do seu imóvel e garantir valorização imediata.',
    tag: 'REGULARIDADE & VALORIZAÇÃO',
    heroBadge: 'Usucapião em Cartório & Matrícula Definitiva',
    shortDesc: 'Soluções judiciais e em cartório para regularizar a titularidade e documentação do seu imóvel com segurança.',
    whatsappTopic: 'Regularização de Imóveis (Usucapião, Escritura, Adjudicação ou Registro)',
    metaTitle: 'Regularização de Imóveis e Usucapião em Balneário Camboriú | Dra. Rosana Beling',
    metaDescription: 'Regularize seu imóvel com Usucapião Extrajudicial em Cartório, Adjudicação Compulsória, Retificação de Área e Escrituras em Balneário Camboriú - SC. OAB/SC 24.701.',
    keywords: [
      'regularizacao de imoveis balneario camboriu',
      'usucapiao extrajudicial em cartorio sc',
      'usucapiao urbano balneario camboriu',
      'adjudicacao compulsoria extrajudicial sc',
      'regularizar contrato de gaveta imovel',
      'averbacao de construcao na matricula',
      'retificacao de area terreno sc',
      'dra rosana beling regularizacao'
    ],
    overview: [
      'Estima-se que mais de 50% dos imóveis no Brasil possuam algum tipo de irregularidade documental: contratos de gaveta não registrados, ausência de habite-se, construções não averbadas ou imóveis sem matrícula própria.',
      'Um imóvel irregular sofre uma desvalorização de mercado de 30% a 50%, não pode ser financiado por bancos, não pode ser aceito como garantia e traz enorme insegurança jurídica para a família.',
      'Com ampla experiência em Direito Notarial e Registral, a Dra. Rosana Beling atua para sanear e regularizar imóveis através de Usucapião Extrajudicial (em Cartório), Adjudicação Compulsória Extrajudicial (Lei 14.382), retificação de áreas e escrituras pendentes.'
    ],
    strategicApproach: {
      title: 'Por que Regularizar seu Imóvel com a RB Advocacia?',
      description: 'Conquistar a matrícula definitiva traz benefícios imediatos para o seu patrimônio:',
      points: [
        'Valorização patrimonial imediata de 30% a 50% no valor venal e de mercado.',
        'Possibilidade de venda por financiamento bancário para qualquer comprador.',
        'Segurança jurídica absoluta contra disputas possessórias e penhoras de terceiros.',
        'Facilidade para transmissão aos herdeiros em futuro inventário.'
      ]
    },
    services: [
      {
        title: 'Usucapião Extrajudicial em Cartório de Registro de Imóveis',
        description: 'Obtenha a propriedade e a matrícula definitiva sem precisar ingressar na justiça. O procedimento é processado diretamente no cartório de registro de imóveis, conferindo rapidez e eficácia ao reconhecimento da posse mansa e pacífica.',
        highlights: ['Processo ágil sem filas judiciais', 'Reconhecimento da posse qualificada', 'Emissão de matrícula própria individualizada']
      },
      {
        title: 'Usucapião Judicial (Urbano, Rural e Ordinário)',
        description: 'Atuação judicial especializada quando há contestação por confrontantes, proprietários registrais em local incerto ou particularidades que exigem decisão do Poder Judiciário.',
        highlights: ['Usucapião extraordinário e constitucional', 'Coleta robusta de provas materiais e testemunhais', 'Regularização de posses antigas e consolidadas']
      },
      {
        title: 'Adjudicação Compulsória Extrajudicial (Lei 14.382)',
        description: 'Se você comprou e quitou um imóvel, mas o vendedor faleceu, sumiu ou se recusa a outorgar a escritura definitiva, a nova lei permite obter a transferência direta em cartório.',
        highlights: ['Resolução rápida em cartório de imóveis', 'Dispensa anos de processo judicial', 'Substitui a vontade do vendedor inadimplente']
      },
      {
        title: 'Regularização de Contratos de Gaveta e Cadeia Sucessória',
        description: 'Saneamento de transações informais sucessivas para consolidar a propriedade em nome do atual possuidor, eliminando o risco de perder o imóvel por dívidas do proprietário anterior.',
        highlights: ['Mapeamento da cadeia de transmissões', 'Reconstituição documental segura', 'Transferência definitiva para o comprador final']
      },
      {
        title: 'Retificação de Área, Desmembramento e Unificação',
        description: 'Adequação da metragem real do terreno descrita na matrícula com base em levantamento topográfico georreferenciado, divisão de lotes ou unificação de matrículas contíguas.',
        highlights: ['Correção de discrepâncias de confrontações', 'Aprovação junto à Prefeitura e Cartório', 'Viabilização de novos empreendimentos']
      },
      {
        title: 'Averbação de Construções e Demolições (Habite-se)',
        description: 'Inclusão da edificação construída na matrícula do imóvel perante o Cartório de Registro de Imóveis, regularizando CND do INSS e certidões municipais.',
        highlights: ['Imóvel apto a financiamento bancário', 'Regularidade fiscal perante a Receita Federal', 'Emissão de CND de Obras e Habite-se']
      }
    ],
    methodology: [
      {
        step: '01',
        title: 'Auditoria da Matrícula e Posse',
        description: 'Análise minuciosa da certidão de inteiro teor da matrícula, contratos anteriores, comprovantes de IPTU, contas e histórico de posse.'
      },
      {
        step: '02',
        title: 'Elaboração da Planta e Levantamento Topográfico',
        description: 'Coordenação com engenheiro agrimensor para confecção de memorial descritivo e planta georreferenciada do imóvel.'
      },
      {
        step: '03',
        title: 'Ata Notarial no Tabelionato de Notas',
        description: 'Lavratura de ata notarial de constatação de posse com inquirição de testemunhas e juntada das certidões negativas.'
      },
      {
        step: '04',
        title: 'Protocolo e Abertura da Matrícula no CRI',
        description: 'Apresentação do requerimento fundamentado ao Oficial de Registro de Imóveis até a emissão da certidão de propriedade definitiva.'
      }
    ],
    faqs: [
      {
        question: 'Qual a diferença entre Escritura Pública e Matrícula de Imóvel?',
        answer: 'A Escritura Pública registra o negócio de compra e venda entre as partes. Porém, no Direito Brasileiro vigora a regra: "só é dono quem registra". Apenas o registro da escritura na Matrícula do Imóvel no Cartório de Registro de Imóveis transfere a propriedade legal.'
      },
      {
        question: 'Quanto tempo demora o Usucapião em Cartório (extrajudicial)?',
        answer: 'Com toda a documentação, planta topográfica, ata notarial e certidões organizadas, o procedimento extrajudicial costuma ser concluído entre 4 a 12 meses no Cartório de Registro de Imóveis, muito mais rápido que os 4 a 8 anos de uma ação judicial.'
      },
      {
        question: 'Comprei um imóvel com "Contrato de Gaveta" há muitos anos. Posso perder o imóvel?',
        answer: 'Sim, há sério risco. Enquanto o imóvel permanecer em nome do antigo proprietário na matrícula, ele pode ser penhorado por dívidas fiscais, trabalhistas ou cíveis dele, ou até vendido novamente para terceiros de má-fé. A regularização é urgente.'
      },
      {
        question: 'Como funciona a Adjudicação Compulsória em Cartório?',
        answer: 'Com a Lei 14.382, quem possui contrato de promessa de compra e venda quitado e não consegue a escritura (por exemplo, construtora falida ou vendedor desaparecido) pode requerer a transferência direta no Cartório de Imóveis com assessoria de advogado.'
      },
      {
        question: 'Imóvel sem averbação de construção pode ser financiado pelo banco?',
        answer: 'Não. Os bancos só liberam financiamento habitacional para imóveis cuja construção esteja devidamente averbada na matrícula com a certidão de Habite-se e certidão negativa de débitos (CND) do INSS da obra.'
      }
    ]
  }
};
