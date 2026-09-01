import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Ricardo Silva',
      role: 'Empresário',
      city: 'Balneário Camboriú / SC',
      comment:
        'A Dra. Rosana conduziu nossa transação imobiliária com um nível de rigor e segurança técnica impressionantes. Transparência do início ao fim.',
    },
    {
      name: 'Ana Beatriz M.',
      role: 'Cliente de Família & Sucessões',
      city: 'Itajaí / SC',
      comment:
        'Extremamente humana, paciente e resolutiva. O processo de inventário que parecia interminável foi resolvido com muita agilidade em cartório.',
    },
    {
      name: 'Julio César F.',
      role: 'Gestor Comercial',
      city: 'Camboriú / SC',
      comment:
        'Melhor assessoria jurídica preventiva que contratamos. Reduziu nossos riscos contratuais e nos deu total tranquilidade para fechar negócios.',
    },
  ];

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-semibold text-[#B88E5E] tracking-[0.22em] uppercase block mb-3">
              AVALIAÇÕES & RECONHECIMENTO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211C19] font-normal leading-tight">
              A confiança de quem conta com nosso trabalho
            </h2>
            <div className="w-12 h-[2px] bg-[#B88E5E] mt-4" />
          </div>

          <div className="bg-white border border-[#E8E2D8] px-6 py-4 rounded-xl shadow-sm flex items-center gap-4 shrink-0">
            <div className="flex text-[#B88E5E]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-[#211C19]">5.0 / 5.0 no Google</p>
              <p className="text-[10px] text-[#5C544E] uppercase tracking-wider">Avaliações Verificadas</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-[#E8E2D8] hover:border-[#B88E5E] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-[#B88E5E] mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#5C544E] leading-relaxed italic mb-8 font-light">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#E8E2D8]/60 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base text-[#211C19] font-normal">{rev.name}</h4>
                  <p className="text-[10px] text-[#5C544E]">{rev.role} • {rev.city}</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#B88E5E]">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
