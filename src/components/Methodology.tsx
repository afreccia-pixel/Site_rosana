import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ShieldCheck, Scale, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../contactConfig';

export const Methodology: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Escuta Ativa & Diagnóstico',
      desc: 'Compreendemos a fundo a sua necessidade, analisando documentos e o contexto fático com total confidencialidade.',
      icon: MessageSquare,
    },
    {
      num: '02',
      title: 'Estratégia Jurídica sob Medida',
      desc: 'Desenhamos o plano de ação mais seguro e eficiente, priorizando quando possível vias extrajudiciais mais céleres.',
      icon: Scale,
    },
    {
      num: '03',
      title: 'Condução Transparente',
      desc: 'Você é mantido informado sobre cada movimentação em linguagem clara, sem jargões desnecessários.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Resolução & Tranquilidade',
      desc: 'Foco incansável na defesa dos seus direitos e na segurança jurídica a longo prazo para você e sua família.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="atuacao" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#B88E5E] tracking-[0.22em] uppercase block mb-3">
            MÉTODO DE TRABALHO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211C19] font-normal leading-tight mb-4">
            Como atuamos na defesa do seu direito
          </h2>
          <div className="w-12 h-[2px] bg-[#B88E5E] mx-auto mb-5" />
          <p className="text-[#5C544E] text-sm md:text-base leading-relaxed font-light">
            Um processo claro, estruturado e humanizado do primeiro atendimento à resolução do caso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-[#E8E2D8] hover:border-[#B88E5E] transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl font-normal text-[#B88E5E]">{step.num}</span>
                    <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#B88E5E] group-hover:bg-[#B88E5E] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.4]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg text-[#211C19] font-normal mb-2.5 group-hover:text-[#B88E5E] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#5C544E] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="w-6 h-[2px] bg-[#B88E5E]/40 mt-6 group-hover:w-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-14 p-8 rounded-2xl bg-white border border-[#E8E2D8] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-serif text-xl text-[#211C19] mb-1">
              Precisa de orientação jurídica especializada?
            </h4>
            <p className="text-xs text-[#5C544E] font-light">
              Agende uma consulta para analisarmos a melhor estratégia para a sua demanda.
            </p>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#B88E5E] hover:bg-[#A57C4E] text-white px-6 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            Falar com a Advogada
          </a>
        </div>
      </div>
    </section>
  );
};
