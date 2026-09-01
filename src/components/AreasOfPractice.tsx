import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Scroll, Building2, FileCheck2, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../contactConfig';

export const AreasOfPractice: React.FC = () => {
  const whatsappUrl = (areaTitle: string) =>
    `https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(
      `Olá, Dra. Rosana! Gostaria de uma consultoria sobre ${areaTitle}.`
    )}`;

  const practiceAreas = [
    {
      id: 'area-familia',
      title: 'Direito de Família',
      tag: 'PROTEÇÃO & DISCRIÇÃO',
      desc: 'Atendimento humanizado e estratégico em momentos delicados, assegurando a proteção dos direitos e o equilíbrio familiar.',
      icon: HeartHandshake,
      items: [
        'Divórcio consensual e litigioso',
        'Guarda e convivência familiar',
        'Pensão alimentícia e revisional',
        'Reconhecimento e dissolução de união estável',
        'Partilha de bens',
        'Tutela e curatela',
      ],
    },
    {
      id: 'area-sucessoes',
      title: 'Sucessões',
      tag: 'PLANEJAMENTO & AGILIDADE',
      desc: 'Condução ágil e segura da transmissão de bens, prezando pela harmonia familiar e pela preservação do patrimônio.',
      icon: Scroll,
      items: [
        'Inventário judicial e em cartório (extrajudicial)',
        'Testamentos e disposições de última vontade',
        'Planejamento sucessório e patrimonial',
        'Cessão de direitos hereditários',
        'Alvarás judiciais',
      ],
    },
    {
      id: 'area-imobiliario',
      title: 'Direito Imobiliário',
      tag: 'SEGURANÇA EM NEGÓCIOS',
      desc: 'Assessoria jurídica integral para negociações imobiliárias seguras, blindagem de riscos e elaboração contratual precisa.',
      icon: Building2,
      items: [
        'Contratos de compra e venda',
        'Contratos de locação comercial e residencial',
        'Análise de riscos imobiliários (Due Diligence)',
        'Ações de despejo e renovatórias',
        'Assessoria em leilões de imóveis',
      ],
    },
    {
      id: 'area-regularizacao',
      title: 'Regularização de Imóveis',
      tag: 'REGULARIDADE & VALORIZAÇÃO',
      desc: 'Soluções judiciais e em cartório para regularizar a titularidade e documentação do seu imóvel com segurança.',
      icon: FileCheck2,
      items: [
        'Usucapião extrajudicial e judicial',
        'Adjudicação compulsória extrajudicial',
        'Retificação de área e averbações de construção',
        'Desmembramento e unificação de lotes',
        'Lavratura e registro de escrituras',
      ],
    },
  ];

  return (
    <section id="areas" className="py-20 md:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#B88E5E] tracking-[0.22em] uppercase block mb-3">
            ÁREAS DE ATUAÇÃO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211C19] font-normal leading-tight mb-4">
            Especialidades jurídicas com foco na sua tranquilidade
          </h2>
          <div className="w-12 h-[2px] bg-[#B88E5E] mx-auto mb-5" />
          <p className="text-[#5C544E] text-sm md:text-base leading-relaxed font-light">
            Atuação especializada e personalizada nas principais demandas civis, familiares e patrimoniais.
          </p>
        </div>

        {/* Practice Grid - 4 Columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                id={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="scroll-mt-24 md:scroll-mt-28 bg-white rounded-2xl p-7 border border-[#E8E2D8] hover:border-[#B88E5E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center text-[#B88E5E] group-hover:bg-[#B88E5E] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.4]" />
                    </div>
                    <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-[0.14em] text-[#B88E5E] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E8E2D8]">
                      {area.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#211C19] font-normal mb-3 group-hover:text-[#B88E5E] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-xs text-[#5C544E] leading-relaxed mb-5 font-light">
                    {area.desc}
                  </p>

                  <div className="border-t border-[#E8E2D8]/60 pt-4 mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C663D] block mb-2.5">
                      Principais Serviços:
                    </span>
                    <ul className="space-y-2">
                      {area.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#5C544E]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B88E5E] shrink-0 mt-1.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={whatsappUrl(area.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#E8E2D8] text-xs font-semibold uppercase tracking-wider text-[#211C19] group-hover:text-[#B88E5E] transition-colors"
                >
                  <span>Consultar área</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

