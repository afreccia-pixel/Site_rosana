import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, CheckCircle2, Scale } from 'lucide-react';
import { CONTACT_INFO } from '../contactConfig';

export const About: React.FC = () => {
  const achievements = [
    {
      title: 'Advocacia Especializada',
      desc: 'Mais de 15 anos de atuação com foco exclusivo nos interesses e proteção de cada cliente.',
      icon: Award,
    },
    {
      title: 'Formação Sólida',
      desc: 'Graduação e especializações com constante aprimoramento em Direito de Família e Imobiliário.',
      icon: GraduationCap,
    },
    {
      title: 'Segurança & Estratégia',
      desc: 'Análise minuciosa de riscos e busca por soluções ágeis, tanto na via judicial quanto extrajudicial.',
      icon: Scale,
    },
    {
      title: 'Atendimento Personalizado',
      desc: 'Comunicação transparente, escuta ativa e acolhimento em cada etapa do processo.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Card with credentials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Decorative back-panel */}
              <div className="absolute inset-0 bg-[#B88E5E]/10 rounded-2xl transform -rotate-2" />

              <div className="relative bg-[#FFFFFF] p-8 md:p-10 rounded-2xl border border-[#E8E2D8] shadow-xl">
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B88E5E] block mb-2">
                  PERFIL PROFISSIONAL
                </span>
                <h3 className="font-serif text-3xl text-[#211C19] font-normal mb-1">
                  Dra. Rosana Beling
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#B88E5E] font-semibold mb-6">
                  {CONTACT_INFO.oab} • Balneário Camboriú / SC
                </p>

                <div className="w-10 h-[2px] bg-[#B88E5E] mb-6" />

                <div className="space-y-4 text-[#5C544E] text-sm leading-relaxed font-light">
                  <p>
                    Com vasta experiência jurídica, a Dra. Rosana Beling atua de forma humanizada e estratégica, aliando rigor técnico à sensibilidade exigida nas relações patrimoniais e familiares.
                  </p>
                  <p>
                    Sua prática é pautada na ética inegociável, transparência na comunicação e busca constante por desfechos céleres e seguros.
                  </p>
                </div>

                {/* Numbers / Badges */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#E8E2D8]">
                  <div>
                    <span className="font-serif text-3xl font-normal text-[#B88E5E] block">15+</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#5C544E] font-semibold">
                      Anos de Experiência
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-3xl font-normal text-[#B88E5E] block">100%</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#5C544E] font-semibold">
                      Dedicação aos Casos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold text-[#B88E5E] tracking-[0.22em] uppercase block mb-3">
              SOBRE O ESCRITÓRIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211C19] font-normal leading-tight mb-6">
              Compromisso ético e atuação focada em resultados.
            </h2>
            <div className="w-12 h-[2px] bg-[#B88E5E] mb-6" />

            <p className="text-[#5C544E] text-base leading-relaxed mb-6 font-light">
              Entendemos que cada processo envolve a história, os bens e o futuro de pessoas e famílias. Por isso, nosso trabalho vai além da técnica processual: oferecemos um ambiente seguro, acolhedor e estratégico para a tomada das melhores decisões jurídicas.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {achievements.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#E8E2D8] hover:border-[#B88E5E] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#B88E5E] mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#211C19] mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5C544E] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
