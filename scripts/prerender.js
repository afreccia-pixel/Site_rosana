import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://SEU_DOMINIO.com.br';
const TODAY = new Date().toISOString().split('T')[0];

const PRACTICE_AREAS = [
  {
    slug: 'familia',
    aliases: ['direito-de-familia'],
    title: 'Direito de Família em Balneário Camboriú | Dra. Rosana Beling Advocacia',
    description: 'Advogada especialista em Direito de Família em Balneário Camboriú. Divórcio consensual em cartório e litigioso, partilha de bens, guarda compartilhada, pensão alimentícia e união estável. OAB/SC 24.701.',
    headline: 'Proteção jurídica e acolhimento humano para o momento mais delicado da sua vida.',
    subtitle: 'Atendimento estratégico e humanizado em divórcios, partilhas de bens, guarda de filhos e pensão alimentícia em Balneário Camboriú e região.',
    tag: 'PROTEÇÃO & DISCRIÇÃO',
    services: [
      {
        title: 'Divórcio Consensual e Extrajudicial (em Cartório)',
        desc: 'Solução célere e descomplicada para casais sem litígio, concluída em poucos dias diretamente em tabelionato.'
      },
      {
        title: 'Divórcio Litigioso e Medidas Urgentes',
        desc: 'Atuação combativa para bloqueio preventivo de bens, fixação de alimentos provisórios e resguardo de direitos.'
      },
      {
        title: 'Guarda, Convivência e Regime de Visitas',
        desc: 'Estruturação do plano parental com foco no melhor interesse dos filhos e combate à alienação parental.'
      },
      {
        title: 'Pensão Alimentícia (Fixação, Revisão e Execução)',
        desc: 'Cálculo equilibrado de alimentos, ações revisionais e execução ágil de débitos em atraso.'
      },
      {
        title: 'Reconhecimento e Dissolução de União Estável',
        desc: 'Formalização legal do período de convivência com divisão justa do patrimônio comum.'
      },
      {
        title: 'Partilha de Bens e Planejamento Matrimonial',
        desc: 'Pactos antenupciais estratégicos e condução segura da partilha de imóveis e empresas.'
      },
      {
        title: 'Tutela, Curatela e Tomada de Decisão Apoiada',
        desc: 'Proteção e representação jurídica de idosos ou enfermos para atos da vida civil.'
      }
    ],
    faqs: [
      {
        q: 'Quanto tempo demora um divórcio em cartório (extrajudicial)?',
        a: 'Quando há acordo entre o casal e não há filhos menores dependentes, o divórcio extrajudicial em cartório costuma ser concluído entre 3 e 15 dias úteis.'
      },
      {
        q: 'Como é calculado o valor da pensão alimentícia?',
        a: 'O valor é determinado pelo equilíbrio entre a necessidade de quem recebe, a capacidade financeira de quem paga e a proporcionalidade.'
      },
      {
        q: 'Guarda compartilhada significa que o filho passa metade do tempo em cada casa?',
        a: 'Não necessariamente. A guarda compartilhada diz respeito à responsabilidade conjunta nas decisões sobre a vida do filho.'
      },
      {
        q: 'O que acontece se um dos cônjuges esconder bens antes do divórcio?',
        a: 'A ocultação fraudulenta de patrimônio pode ser combatida em juízo por meio de quebra de sigilo bancário, fiscal e perícia contábil.'
      }
    ]
  },
  {
    slug: 'sucessoes',
    aliases: ['inventario', 'direito-das-sucessoes'],
    title: 'Inventário e Sucessões em Balneário Camboriú | Dra. Rosana Beling',
    description: 'Especialista em Inventário Extrajudicial em Cartório, Inventário Judicial, Testamentos e Planejamento Sucessório em Balneário Camboriú - SC. OAB/SC 24.701.',
    headline: 'Inventários ágeis, partilha segura de herança e proteção do patrimônio familiar.',
    subtitle: 'Condução estratégica e desburocratizada de inventários extrajudiciais em cartório, testamentos e planejamento sucessório em Santa Catarina.',
    tag: 'PLANEJAMENTO & AGILIDADE',
    services: [
      {
        title: 'Inventário Extrajudicial em Cartório (Tabelionato)',
        desc: 'Finalização ágil em poucas semanas por escritura pública em cartório, liberando os bens para venda ou registro imediato.'
      },
      {
        title: 'Inventário Judicial Consensual ou Litigioso',
        desc: 'Condução com agilidade processual e defesa intransigente do seu quinhão hereditário.'
      },
      {
        title: 'Planejamento Sucessório e Estruturação Patrimonial',
        desc: 'Organização antecipada da sucessão através de doações com usufruto e testamentos, reduzindo custos tributários.'
      },
      {
        title: 'Testamentos Públicos e Diretivas de Vontade',
        desc: 'Orientação precisa para elaboração e registro de testamentos válidos respeitando a legítima dos herdeiros.'
      },
      {
        title: 'Cessão de Direitos Hereditários e Renúncia',
        desc: 'Transferência legal de direitos sobre herança a terceiros ou outros herdeiros antes da conclusão do inventário.'
      },
      {
        title: 'Alvarás Judiciais e Liberação de Valores',
        desc: 'Levantamento rápido de saldos bancários, FGTS, PIS/PASEP e autorização para venda de veículos e imóveis.'
      }
    ],
    faqs: [
      {
        q: 'Qual é o prazo para abertura do inventário em SC?',
        a: 'O Código de Processo Civil estabelece o prazo de 60 dias a contar da data do falecimento para iniciar o inventário sem incidência de multa sobre o ITCMD.'
      },
      {
        q: 'Quais são os requisitos para fazer o inventário em cartório?',
        a: 'Os herdeiros devem ser maiores e capazes, deve haver consenso integral sobre a divisão dos bens e a presença de advogado constituído.'
      },
      {
        q: 'É possível vender um imóvel herdado antes do término do inventário?',
        a: 'Sim, através de autorização judicial (alvará) ou por Escritura Pública de Cessão de Direitos Hereditários.'
      }
    ]
  },
  {
    slug: 'imobiliario',
    aliases: ['direito-imobiliario'],
    title: 'Direito Imobiliário em Balneário Camboriú | Dra. Rosana Beling',
    description: 'Assessoria jurídica imobiliária em Balneário Camboriú e região. Due Diligence para compra e venda, elaboração de contratos, locações, despejo e distratos. OAB/SC 24.701.',
    headline: 'Segurança jurídica e blindagem de riscos para seus negócios imobiliários.',
    subtitle: 'Assessoria jurídica especializada para compra, venda, contratos, locações comerciais e residenciais e incorporações imobiliárias no litoral de SC.',
    tag: 'SEGURANÇA EM NEGÓCIOS',
    services: [
      {
        title: 'Auditoria e Análise de Risco (Due Diligence Imobiliária)',
        desc: 'Investigação profunda de certidões pessoais e do imóvel para prevenir penhoras, hipotecas ou fraudes à execução.'
      },
      {
        title: 'Elaboração e Revisão de Contratos Imobiliários',
        desc: 'Redação personalizada de contratos de compra e venda, permuta, dação em pagamento e cessão de direitos.'
      },
      {
        title: 'Contratos e Conflitos de Locação (Residencial e Comercial)',
        desc: 'Assessoria integral em locações urbanas e comerciais, ações de despejo por falta de pagamento e renovatórias.'
      },
      {
        title: 'Distrato Imobiliário e Rescisão Contratual',
        desc: 'Recuperação de valores pagos e aplicação da Lei do Distrato em casos de atraso na entrega de obras.'
      },
      {
        title: 'Assessoria em Leilões de Imóveis',
        desc: 'Análise prévia de editais, processos de origem, imissão na posse e cancelamento de gravames.'
      }
    ],
    faqs: [
      {
        q: 'O que é Due Diligence imobiliária e por que ela é indispensável?',
        a: 'É a auditoria jurídica prévia que investiga certidões do imóvel e do vendedor em âmbito cível, trabalhista e fiscal, evitando a perda do imóvel.'
      },
      {
        q: 'Quanto tempo demora uma ação de despejo por falta de pagamento?',
        a: 'Com o pedido de liminar para desocupação em 15 dias, a decisão judicial pode ser obtida com grande rapidez.'
      }
    ]
  },
  {
    slug: 'regularizacao',
    aliases: ['regularizacao-de-imoveis'],
    title: 'Regularização de Imóveis e Usucapião em Balneário Camboriú | Dra. Rosana Beling',
    description: 'Regularize seu imóvel com Usucapião Extrajudicial em Cartório, Adjudicação Compulsória, Retificação de Área e Escrituras em Balneário Camboriú - SC. OAB/SC 24.701.',
    headline: 'Transforme posse e contratos de gaveta em escritura pública registrada.',
    subtitle: 'Soluções jurídicas extrajudiciais em cartório e judiciais para obter a matrícula definitiva do seu imóvel e garantir valorização imediata.',
    tag: 'REGULARIDADE & VALORIZAÇÃO',
    services: [
      {
        title: 'Usucapião Extrajudicial em Cartório de Registro de Imóveis',
        desc: 'Obtenha a propriedade e a matrícula definitiva diretamente no cartório de registro de imóveis sem filas judiciais.'
      },
      {
        title: 'Usucapião Judicial (Urbano, Rural e Ordinário)',
        desc: 'Atuação judicial especializada com coleta robusta de provas para regularizar posses antigas e consolidadas.'
      },
      {
        title: 'Adjudicação Compulsória Extrajudicial (Lei 14.382)',
        desc: 'Transferência direta em cartório quando o vendedor sumiu ou se recusa a outorgar a escritura definitiva.'
      },
      {
        title: 'Regularização de Contratos de Gaveta',
        desc: 'Saneamento da cadeia de transmissões informais para registrar o imóvel no nome do comprador final.'
      },
      {
        title: 'Retificação de Área e Averbação de Construções',
        desc: 'Correção de confrontações e averbação de Habite-se na matrícula para viabilizar financiamento bancário.'
      }
    ],
    faqs: [
      {
        q: 'Qual a diferença entre Escritura Pública e Matrícula de Imóvel?',
        a: 'A Escritura lavra o negócio entre as partes, mas só o registro da escritura na Matrícula no Cartório de Imóveis transfere a propriedade legal ("só é dono quem registra").'
      },
      {
        q: 'Quanto tempo demora o Usucapião em Cartório (extrajudicial)?',
        a: 'Costuma ser concluído entre 4 a 12 meses no Cartório de Registro de Imóveis, muito mais rápido que os 4 a 8 anos de um processo judicial.'
      }
    ]
  }
];

function generateHtmlForRoute(baseTemplate, routeConfig) {
  let html = baseTemplate;

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/i,
    `<title>${routeConfig.title}</title>`
  );

  // Replace description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/i,
    `<meta name="description" content="${routeConfig.description}" />`
  );

  // Replace Canonical
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/i,
    `<link rel="canonical" href="${DOMAIN}${routeConfig.path}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/i,
    `<meta property="og:title" content="${routeConfig.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/i,
    `<meta property="og:description" content="${routeConfig.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/i,
    `<meta property="og:url" content="${DOMAIN}${routeConfig.path}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/i,
    `<meta name="twitter:title" content="${routeConfig.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/i,
    `<meta name="twitter:description" content="${routeConfig.description}" />`
  );

  // Inject Rich Pre-Rendered Markup in #root
  if (routeConfig.renderedContent) {
    html = html.replace(
      /<div id="root">[\s\S]*?<\/div>\s*<script/i,
      `<div id="root">\n${routeConfig.renderedContent}\n</div>\n<script`
    );
  }

  // Inject Schemas if provided
  if (routeConfig.schemas && routeConfig.schemas.length > 0) {
    const schemasHtml = routeConfig.schemas
      .map(
        (schema) =>
          `\n    <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n    </script>`
      )
      .join('');
    html = html.replace('</head>', `${schemasHtml}\n  </head>`);
  }

  return html;
}

async function runPrerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run vite build first.');
    return;
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf8');

  console.log('Generating Pre-rendered HTML and Structured Data for all routes...');

  const sitemapUrls = [
    { loc: `${DOMAIN}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${DOMAIN}/sobre`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${DOMAIN}/contato`, changefreq: 'monthly', priority: '0.8' },
  ];

  // 1. Process Practice Areas
  for (const area of PRACTICE_AREAS) {
    const areaPath = `/${area.slug}`;
    sitemapUrls.push({
      loc: `${DOMAIN}${areaPath}`,
      changefreq: 'weekly',
      priority: '0.9',
    });

    // Generate Structured Data (Schema.org)
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': area.title,
      'serviceType': area.tag,
      'description': area.description,
      'provider': {
        '@type': 'LegalService',
        'name': 'Rosana Beling Advocacia',
        'url': `${DOMAIN}/`,
        'telephone': '+5547992279984',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Av. Brasil, 2816 - Centro',
          'addressLocality': 'Balneário Camboriú',
          'addressRegion': 'SC',
          'postalCode': '88330-058',
          'addressCountry': 'BR',
        },
      },
      'areaServed': ['Balneário Camboriú', 'Camboriú', 'Itajaí', 'Santa Catarina'],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': `Serviços em ${area.tag}`,
        'itemListElement': area.services.map((s) => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': s.title,
            'description': s.desc,
          },
        })),
      },
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': `${DOMAIN}/` },
        { '@type': 'ListItem', 'position': 2, 'name': 'Áreas de Atuação', 'item': `${DOMAIN}/#areas` },
        { '@type': 'ListItem', 'position': 3, 'name': area.tag, 'item': `${DOMAIN}${areaPath}` },
      ],
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': area.faqs.map((f) => ({
        '@type': 'Question',
        'name': f.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.a,
        },
      })),
    };

    // Pre-rendered HTML content
    const renderedContent = `
      <div style="font-family: serif; padding: 2rem 1.5rem; max-width: 1200px; margin: 0 auto; color: #211C19; background-color: #F8F5F0;">
        <nav style="font-size: 0.85rem; color: #7A6E65; margin-bottom: 1.5rem; border-bottom: 1px solid #E8E2D8; padding-bottom: 0.75rem;">
          <a href="/" style="color: #B88E5E; text-decoration: none;">Início</a> / 
          <a href="/#areas" style="color: #B88E5E; text-decoration: none;">Áreas de Atuação</a> / 
          <strong>${area.tag}</strong>
        </nav>
        
        <header style="margin-bottom: 2.5rem; padding-top: 0.5rem;">
          <span style="font-size: 0.8rem; font-weight: bold; color: #B88E5E; letter-spacing: 0.2em; text-transform: uppercase;">${area.tag} • OAB/SC 24.701</span>
          <h1 style="font-size: 2.2rem; line-height: 1.2; margin-top: 0.5rem; margin-bottom: 1rem; color: #211C19;">${area.headline}</h1>
          <p style="font-size: 1.1rem; color: #5C544E; line-height: 1.6; margin-bottom: 0;">${area.subtitle}</p>
        </header>

        <section style="margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.7rem; color: #211C19; margin-bottom: 1.5rem; border-bottom: 2px solid #B88E5E; padding-bottom: 0.5rem; display: inline-block;">Serviços Especializados em ${area.tag}</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
            ${area.services
              .map(
                (s) => `
              <div style="background: white; border: 1px solid #E8E2D8; border-radius: 12px; padding: 1.5rem;">
                <h3 style="font-size: 1.2rem; color: #211C19; margin-bottom: 0.5rem;">${s.title}</h3>
                <p style="font-size: 0.95rem; color: #5C544E; line-height: 1.5;">${s.desc}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </section>

        <section style="background: #FAF7F2; border: 1px solid #E8E2D8; border-radius: 16px; padding: 2rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; color: #211C19; margin-bottom: 1rem;">Dúvidas Frequentes</h2>
          ${area.faqs
            .map(
              (f) => `
            <div style="margin-bottom: 1.2rem; background: white; padding: 1.2rem; border-radius: 8px; border: 1px solid #E8E2D8;">
              <h3 style="font-size: 1.05rem; color: #211C19; margin-bottom: 0.4rem;">${f.q}</h3>
              <p style="font-size: 0.95rem; color: #5C544E; line-height: 1.5;">${f.a}</p>
            </div>
          `
            )
            .join('')}
        </section>

        <footer style="text-align: center; padding: 2rem; background: #211C19; color: #FAF7F2; border-radius: 16px;">
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: #FAF7F2;">Rosana Beling Advocacia - OAB/SC 24.701</h2>
          <p style="font-size: 0.95rem; color: #D8CEBE; margin-bottom: 1rem;">Av. Brasil, 2816 - Centro, Balneário Camboriú - SC • Tel / WhatsApp: (47) 99227-9984</p>
          <a href="https://wa.me/5547992279984" style="color: #B88E5E; text-decoration: none; font-weight: bold;">Iniciar Atendimento pelo WhatsApp →</a>
        </footer>
      </div>
    `;

    const htmlOutput = generateHtmlForRoute(baseTemplate, {
      path: areaPath,
      title: area.title,
      description: area.description,
      renderedContent,
      schemas: [serviceSchema, breadcrumbSchema, faqSchema],
    });

    // Write to dist/<slug>/index.html
    const outDir = path.join(distDir, area.slug);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), htmlOutput);
    console.log(`✓ Pre-rendered: dist/${area.slug}/index.html`);

    // Write to aliases
    if (area.aliases) {
      for (const alias of area.aliases) {
        const aliasDir = path.join(distDir, alias);
        if (!fs.existsSync(aliasDir)) fs.mkdirSync(aliasDir, { recursive: true });
        fs.writeFileSync(path.join(aliasDir, 'index.html'), htmlOutput);
        console.log(`✓ Pre-rendered alias: dist/${alias}/index.html`);
        sitemapUrls.push({ loc: `${DOMAIN}/${alias}`, changefreq: 'monthly', priority: '0.7' });
      }
    }
  }

  // 2. Process /sobre Page
  const sobreDir = path.join(distDir, 'sobre');
  if (!fs.existsSync(sobreDir)) fs.mkdirSync(sobreDir, { recursive: true });
  const sobreHtml = generateHtmlForRoute(baseTemplate, {
    path: '/sobre',
    title: 'Sobre a Dra. Rosana Beling | Advogada OAB/SC 24.701 em Balneário Camboriú',
    description: 'Conheça a trajetória e o compromisso ético da Dra. Rosana Beling (OAB/SC 24.701). Especialista em Direito de Família, Sucessões, Direito Imobiliário e Regularização de Imóveis.',
  });
  fs.writeFileSync(path.join(sobreDir, 'index.html'), sobreHtml);
  console.log('✓ Pre-rendered: dist/sobre/index.html');

  // 3. Process /contato Page
  const contatoDir = path.join(distDir, 'contato');
  if (!fs.existsSync(contatoDir)) fs.mkdirSync(contatoDir, { recursive: true });
  const contatoHtml = generateHtmlForRoute(baseTemplate, {
    path: '/contato',
    title: 'Contato e Localização | Dra. Rosana Beling Advocacia Balneário Camboriú',
    description: 'Agende uma consulta presencial ou online com a Dra. Rosana Beling. Escritório na Av. Brasil, 2816 - Centro, Balneário Camboriú - SC. WhatsApp (47) 99227-9984.',
  });
  fs.writeFileSync(path.join(contatoDir, 'index.html'), contatoHtml);
  console.log('✓ Pre-rendered: dist/contato/index.html');

  // 4. Generate Comprehensive Sitemap XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml);
  fs.writeFileSync(path.resolve(process.cwd(), 'public/sitemap.xml'), sitemapXml);
  console.log(`✓ Generated sitemap.xml with ${sitemapUrls.length} indexable URLs.`);

  console.log('SSG / Pre-rendering completed successfully!');
}

runPrerender().catch(console.error);
