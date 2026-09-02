import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import rosanaImg from '../assets/rosana.jpg';
import { CONTACT_INFO } from '../contactConfig';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`;

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-34 pb-4 sm:pb-6 bg-[#F5F0EC] overflow-hidden min-h-[480px] lg:min-h-[520px] xl:min-h-[560px] flex items-center">
      {/* Background Seamless Photo Layer with Horizontal Fade */}
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[60%] lg:w-[64%] xl:w-[67%] 2xl:w-[70%] h-full pointer-events-none z-0 items-end justify-end">
        <div className="relative h-[94%] lg:h-[98%] xl:h-full max-h-[760px] 2xl:max-h-[840px] w-full flex items-end justify-end pr-0 lg:pr-2 xl:pr-6">
          <img
            src={rosanaImg || '/rosana.jpg'}
            alt="Dra. Rosana Beling - Advocacia com Propósito"
            className="h-full w-auto max-w-full object-contain object-bottom"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.85) 24%, black 38%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.85) 24%, black 38%)',
            }}
            onError={(e) => {
              const target = e.currentTarget;
              const step = parseInt(target.dataset.tried || '0', 10);
              const fallbacks = [
                '/rosana.jpg',
                './rosana.jpg',
                '/rosana_perfil.jpg',
                './rosana_perfil.jpg'
              ];
              if (step < fallbacks.length) {
                target.dataset.tried = String(step + 1);
                target.src = fallbacks[step];
              }
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Mobile Image Display (visible on mobile only, positioned FIRST) */}
          <div className="block md:hidden mb-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8E2D8] bg-[#EBE4D8]/40 max-w-sm mx-auto">
              <img
                src={rosanaImg || '/rosana.jpg'}
                alt="Dra. Rosana Beling"
                className="w-full h-auto object-cover max-h-[380px]"
                onError={(e) => {
                  const target = e.currentTarget;
                  const step = parseInt(target.dataset.tried || '0', 10);
                  const fallbacks = [
                    '/rosana.jpg',
                    './rosana.jpg',
                    '/rosana_perfil.jpg',
                    './rosana_perfil.jpg'
                  ];
                  if (step < fallbacks.length) {
                    target.dataset.tried = String(step + 1);
                    target.src = fallbacks[step];
                  }
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-white/60 flex items-center justify-between text-xs shadow-sm">
                <span className="font-serif font-semibold text-[#211C19]">Dra. Rosana Beling</span>
                <span className="text-[#B88E5E] font-medium tracking-wider uppercase text-[10px]">OAB/SC 24.701</span>
              </div>
            </div>
          </div>

          {/* Left Text Composition Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="md:col-span-7 lg:col-span-6 xl:col-span-6 z-10"
          >
            {/* 1. Small Uppercase Eyebrow in Gold */}
            <p className="text-[11px] sm:text-xs font-semibold text-[#B88E5E] tracking-[0.22em] uppercase mb-4 sm:mb-5">
              ADVOCACIA COM PROPÓSITO
            </p>

            {/* 2. Elegant Serif Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[52px] text-[#211C19] font-normal leading-[1.14] tracking-tight mb-4 sm:mb-5">
              Soluções jurídicas<br />
              com estratégia e<br />
              acolhimento.
            </h1>

            {/* Subtle Gold Accent Divider */}
            <div className="w-12 h-[2px] bg-[#B88E5E] mb-5 sm:mb-6" />

            {/* 3. Descriptive Paragraph */}
            <p className="text-[#4A423D] text-sm sm:text-[15px] md:text-base leading-relaxed max-w-lg mb-7 sm:mb-9 font-normal">
              Atuação especializada em Direito de Família, Sucessões e Imobiliário, com foco em segurança jurídica e resultados eficientes.
            </p>

            {/* 4. Rectangular Solid Gold Button with WhatsApp Icon (hidden on mobile mode) */}
            <div className="hidden md:block">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#B88E5E] hover:bg-[#A57C4E] text-white px-7 py-3.5 rounded-md text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>FALAR COM A ADVOGADA</span>
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


