import React from 'react';
import { motion } from 'motion/react';
import { Users, Shield, ArrowDownCircle, Scale } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const pillars = [
    {
      id: 'humanizado',
      line1: 'ATENDIMENTO',
      line2: 'HUMANIZADO',
      icon: Users,
    },
    {
      id: 'seguranca',
      line1: 'SEGURANÇA',
      line2: 'JURÍDICA',
      icon: Shield,
    },
    {
      id: 'solucoes',
      line1: 'SOLUÇÕES',
      line2: 'EFICIENTES',
      icon: ArrowDownCircle,
    },
    {
      id: 'atuacao',
      line1: 'ATUAÇÃO JUDICIAL',
      line2: 'E EXTRAJUDICIAL',
      icon: Scale,
    },
  ];

  return (
    <section className="hidden md:block bg-[#F5F0EC] border-b border-[#E2DAD0]/60 pt-2 pb-8 sm:pb-10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D6CBBF]/70">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-4 sm:py-5 group cursor-default"
              >
                {/* Thin Minimalist Gold Outline Icon */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 mb-2.5 sm:mb-3 flex items-center justify-center text-[#B88E5E] group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.25]" />
                </div>

                {/* Short Centered Uppercase Label in 2 Lines */}
                <h3 className="text-[11px] sm:text-xs md:text-[12.5px] font-bold tracking-[0.14em] uppercase text-[#211C19] leading-snug">
                  <span className="block">{item.line1}</span>
                  <span className="block">{item.line2}</span>
                </h3>

                {/* Subtle Gold Accent Underline */}
                <div className="w-6 h-[1.5px] bg-[#B88E5E] mt-2.5 group-hover:w-10 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


