import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '../contactConfig';
import rosanaPerfilImg from '../assets/rosana_perfil.jpg';

interface AboutPageProps {
  onNavigate: (page: string, anchor?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-[#F5F0EC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs / Back button */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#8C7A6B] hover:text-[#B88E5E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </button>

          <span className="text-[11px] uppercase tracking-widest font-bold text-[#B88E5E]">
            {CONTACT_INFO.oab} • Balneário Camboriú / SC
          </span>
        </div>

        {/* Hero Section of About Page */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Photo & Clear Institutional Text Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Portrait Image Container */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#B88E5E]/40 bg-white">
              <img
                src={rosanaPerfilImg || '/rosana_perfil.jpg'}
                alt="Dra. Rosana Beling - Advogada OAB/SC 24.701"
                className="w-full h-auto object-cover object-top max-h-[580px]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  const step = parseInt(target.dataset.tried || '0', 10);
                  const fallbacks = [
                    '/rosana_perfil.jpg',
                    './rosana_perfil.jpg',
                    '/rosana.jpg',
                    './rosana.jpg'
                  ];
                  if (step < fallbacks.length) {
                    target.dataset.tried = String(step + 1);
                    target.src = fallbacks[step];
                  }
                }}
              />

              {/* Dedicated clearly visible text panel under photo */}
              <div className="p-6 bg-gradient-to-b from-white to-[#FAF7F2] border-t border-[#E8E2D8] text-left">
                <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#B88E5E] block mb-1">
                  ADVOGADA TITULAR
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl text-[#211C19] font-normal leading-tight">
                  Dra. Rosana Beling
                </h1>
                <p className="text-xs uppercase tracking-widest text-[#7A6E65] font-semibold mt-1">
                  {CONTACT_INFO.oab} • Balneário Camboriú / SC
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Complete Bio & Narrative (Pure Clean Text, No Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            {/* Header / Intro - Clean Text Without Card Container */}
            <div className="py-2">
              <span className="text-xs font-bold text-[#B88E5E] tracking-[0.22em] uppercase block mb-2">
                PERFIL & TRAJETÓRIA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#211C19] font-normal leading-tight mb-6">
                Advocacia estratégica, ética e focada em resultados concretos.
              </h2>
              <div className="w-12 h-[2px] bg-[#B88E5E] mb-6" />

              <div className="space-y-4 text-sm md:text-base text-[#4A423D] leading-relaxed font-light">
                <p>
                  Com mais de <strong>15 anos de atuação dedicada ao Direito</strong>, a <strong>Dra. Rosana Beling</strong> construiu uma prática consolidada pela excelência técnica, postura ética inabalável e sensibilidade no trato com as pessoas.
                </p>
                <p>
                  Sua atuação é voltada para a defesa dos interesses de famílias e pessoas físicas e jurídicas nas áreas de <strong>Direito de Família, Sucessões, Direito Imobiliário e Regularização de Imóveis</strong>, sempre com o objetivo de resguardar o patrimônio, pacificar conflitos e garantir a segurança jurídica de cada cliente.
                </p>
                <p>
                  O escritório alia o conhecimento aprofundado da legislação e jurisprudência atualizada a uma abordagem moderna e resolutiva, priorizando sempre que possível soluções ágeis na esfera extrajudicial (em cartório), além de uma representação firme e estratégica no contencioso judicial.
                </p>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#E8E2D8]">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#B88E5E] block">15+</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#5C544E] font-bold">
                    Anos de Experiência
                  </span>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#B88E5E] block">5.0 ★</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#5C544E] font-bold">
                    Avaliações Google
                  </span>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#B88E5E] block">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#5C544E] font-bold">
                    Compromisso Ético
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

