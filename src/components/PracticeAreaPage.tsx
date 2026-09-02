import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Building2,
  HeartHandshake,
  Scroll,
  FileCheck2,
  ArrowRight,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { CONTACT_INFO } from '../contactConfig';
import { PRACTICE_AREAS_DATA, PracticeAreaDetail } from '../data/practiceAreasData';

interface PracticeAreaPageProps {
  slug: string;
  onNavigate: (page: string, anchor?: string) => void;
}

export const PracticeAreaPage: React.FC<PracticeAreaPageProps> = ({ slug, onNavigate }) => {
  const area: PracticeAreaDetail = PRACTICE_AREAS_DATA[slug] || PRACTICE_AREAS_DATA['familia'];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = area.metaTitle;
  }, [slug, area.metaTitle]);

  const otherAreas = Object.values(PRACTICE_AREAS_DATA).filter((a) => a.slug !== area.slug);

  const getAreaIcon = (areaSlug: string) => {
    switch (areaSlug) {
      case 'familia':
        return HeartHandshake;
      case 'sucessoes':
        return Scroll;
      case 'imobiliario':
        return Building2;
      case 'regularizacao':
        return FileCheck2;
      default:
        return FileText;
    }
  };

  const CurrentIcon = getAreaIcon(area.slug);

  // Schema.org Structured Data
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': `${area.title} em Balneário Camboriú - Dra. Rosana Beling`,
    'serviceType': area.title,
    'description': area.metaDescription,
    'provider': {
      '@type': 'LegalService',
      'name': 'Rosana Beling Advocacia',
      'url': 'https://SEU_DOMINIO.com.br/',
      'telephone': '+5547992279984',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Av. Brasil, 2816 - Centro',
        'addressLocality': 'Balneário Camboriú',
        'addressRegion': 'SC',
        'postalCode': '88330-058',
        'addressCountry': 'BR'
      }
    },
    'areaServed': [
      { '@type': 'AdministrativeArea', 'name': 'Balneário Camboriú' },
      { '@type': 'AdministrativeArea', 'name': 'Camboriú' },
      { '@type': 'AdministrativeArea', 'name': 'Itajaí' },
      { '@type': 'AdministrativeArea', 'name': 'Santa Catarina' }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': `Serviços de ${area.title}`,
      'itemListElement': area.services.map((s, index) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': s.title,
          'description': s.description
        }
      }))
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Início',
        'item': 'https://SEU_DOMINIO.com.br/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Áreas de Atuação',
        'item': 'https://SEU_DOMINIO.com.br/#areas'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': area.title,
        'item': `https://SEU_DOMINIO.com.br/${area.slug}`
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': area.faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-[#F8F5F0] text-[#211C19]">
      {/* Dynamic SEO JSON-LD Injected Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb & Navigation Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#E8E2D8] pb-4">
          <div className="flex items-center gap-2 text-xs text-[#7A6E65]">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#B88E5E] transition-colors cursor-pointer"
            >
              Início
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate('home', 'areas')}
              className="hover:text-[#B88E5E] transition-colors cursor-pointer"
            >
              Áreas de Atuação
            </button>
            <span>/</span>
            <span className="font-semibold text-[#B88E5E]">{area.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#B88E5E] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E8E2D8]">
              {CONTACT_INFO.oab}
            </span>
          </div>
        </div>

        {/* HERO SECTION FOR PRACTICE AREA (UNBOXED / TEXT & ICONS ONLY) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-14 pt-2"
        >
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D8] flex items-center justify-center text-[#B88E5E] shadow-xs">
                <CurrentIcon className="w-5 h-5 stroke-[1.6]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B88E5E]">
                {area.tag}
              </span>
              <span className="text-xs text-[#8C7A6B]">•</span>
              <span className="text-xs font-medium text-[#8C7A6B] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B88E5E]" />
                {area.heroBadge}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211C19] font-normal leading-tight mb-5">
              {area.headline}
            </h1>

            <p className="text-base sm:text-lg text-[#5C544E] leading-relaxed font-light">
              {area.subtitle}
            </p>
          </div>
        </motion.div>

        {/* INSTITUTIONAL OVERVIEW & STRATEGIC APPROACH */}
        <div className="max-w-4xl mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B88E5E]">
            <ShieldCheck className="w-4 h-4" />
            <span>Visão e Atuação Estratégica</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#211C19] font-normal leading-snug">
            Como atuamos na defesa e preservação dos seus direitos em {area.title}
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#5C544E] leading-relaxed font-light">
            {area.overview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Strategic Pillars Box */}
          <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E8E2D8] mt-6">
            <h3 className="font-serif text-lg text-[#211C19] font-medium mb-3">
              {area.strategicApproach.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C544E] mb-4">
              {area.strategicApproach.description}
            </p>
            <ul className="space-y-2.5">
              {area.strategicApproach.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#38312B]">
                  <CheckCircle2 className="w-4 h-4 text-[#B88E5E] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DETAILED SERVICES CATALOG */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-[#B88E5E] tracking-[0.22em] uppercase block mb-3">
              SERVIÇOS ESPECIALIZADOS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#211C19] font-normal leading-tight mb-4">
              Principais demandas e atuações em {area.title}
            </h2>
            <div className="w-12 h-[2px] bg-[#B88E5E] mx-auto mb-4" />
            <p className="text-[#5C544E] text-sm leading-relaxed font-light">
              Conheça as frentes de trabalho conduzidas pelo escritório com rigor técnico e agilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {area.services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#E8E2D8] hover:border-[#B88E5E] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center text-[#B88E5E] mb-4 text-xs font-bold">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <h3 className="font-serif text-lg text-[#211C19] font-normal mb-3 leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C544E] leading-relaxed mb-5 font-light">
                    {srv.description}
                  </p>
                </div>

                <div className="border-t border-[#E8E2D8]/60 pt-4">
                  <ul className="space-y-1.5">
                    {srv.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-xs text-[#6B5F54]">
                        <span className="w-1 h-1 rounded-full bg-[#B88E5E]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-STEP METHODOLOGY */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#E8E2D8] mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#B88E5E] tracking-[0.22em] uppercase block mb-3">
              METODOLOGIA DE TRABALHO
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#211C19] font-normal leading-tight mb-4">
              Como funciona o atendimento e a condução do seu caso
            </h2>
            <p className="text-[#5C544E] text-sm leading-relaxed font-light">
              Transparência, etapas bem definidas e acompanhamento próximo do início ao fim.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {area.methodology.map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E8E2D8] relative"
              >
                <span className="text-2xl font-serif font-bold text-[#B88E5E]/40 block mb-3">
                  {m.step}
                </span>
                <h3 className="font-serif text-base text-[#211C19] font-medium mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-[#5C544E] leading-relaxed font-light">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ ACCORDION SECTION */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B88E5E] tracking-[0.22em] uppercase mb-3">
              <HelpCircle className="w-4 h-4" />
              <span>DÚVIDAS FREQUENTES</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#211C19] font-normal leading-tight mb-3">
              Perguntas frequentes sobre {area.title}
            </h2>
            <div className="w-12 h-[2px] bg-[#B88E5E] mx-auto" />
          </div>

          <div className="space-y-4">
            {area.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#E8E2D8] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2]/50 transition-colors"
                  >
                    <span className="font-serif text-sm sm:text-base text-[#211C19] font-medium leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#B88E5E] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5C544E] leading-relaxed font-light border-t border-[#E8E2D8]/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* OTHER PRACTICE AREAS CROSS-NAVIGATION */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-[#E8E2D8] pb-4">
            <h3 className="font-serif text-xl text-[#211C19] font-normal">
              Outras Áreas de Atuação
            </h3>
            <button
              onClick={() => onNavigate('home', 'areas')}
              className="text-xs font-semibold text-[#B88E5E] hover:text-[#A57C4E] transition-colors cursor-pointer"
            >
              Ver todas as áreas →
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {otherAreas.map((other) => {
              const OtherIcon = getAreaIcon(other.slug);
              return (
                <button
                  key={other.slug}
                  onClick={() => onNavigate(other.slug)}
                  className="bg-white rounded-2xl p-6 border border-[#E8E2D8] hover:border-[#B88E5E] hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center text-[#B88E5E] group-hover:bg-[#B88E5E] group-hover:text-white transition-all mb-4">
                      <OtherIcon className="w-5 h-5 stroke-[1.4]" />
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-[#B88E5E] block mb-1">
                      {other.tag}
                    </span>
                    <h4 className="font-serif text-lg text-[#211C19] font-normal group-hover:text-[#B88E5E] transition-colors mb-2">
                      {other.title}
                    </h4>
                    <p className="text-xs text-[#5C544E] font-light line-clamp-2 mb-4">
                      {other.shortDesc}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#B88E5E] pt-3 border-t border-[#E8E2D8]/60">
                    <span>Acessar página completa</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
