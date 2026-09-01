import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, GraduationCap, Scale, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../contactConfig';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#211C19]/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8E2D8] overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#F5F0EC] border-b border-[#E2DAD0]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#B88E5E]/15 flex items-center justify-center text-[#B88E5E]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#211C19]">Sobre a Dra. Rosana Beling</h3>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88E5E]">
                  {CONTACT_INFO.oab} • Balneário Camboriú / SC
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#5C544E] hover:text-[#211C19] hover:bg-[#E8E2D8]/50 rounded-full transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-[#4A423D]">
            {/* Short Bio Block */}
            <div className="bg-white p-5 rounded-xl border border-[#E8E2D8] shadow-sm">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B88E5E] block mb-1.5">
                ADVOCACIA COM PROPÓSITO
              </span>
              <h4 className="font-serif text-xl text-[#211C19] mb-3">
                Trajetória, Ética e Soluções Jurídicas Estratégicas
              </h4>
              <p className="text-sm leading-relaxed text-[#5C544E] font-light mb-3">
                Com mais de 15 anos de dedicação ao Direito, a <strong>Dra. Rosana Beling</strong> construiu uma prática consolidada pela excelência técnica, postura ética inabalável e sensibilidade no trato com as pessoas.
              </p>
              <p className="text-sm leading-relaxed text-[#5C544E] font-light">
                O escritório oferece atendimento personalizado nas áreas de <strong>Direito de Família</strong>, <strong>Sucessões</strong>, <strong>Direito Imobiliário</strong> e <strong>Regularização de Imóveis</strong>, sempre priorizando a segurança patrimonial e o bem-estar dos clientes.
              </p>
            </div>

            {/* Badges / Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8E2D8]">
                <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#B88E5E] shrink-0">
                  <Award className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-0.5">15+ Anos de Atuação</h5>
                  <p className="text-xs text-[#5C544E] leading-relaxed">Experiência comprovada em casos judiciais e extrajudiciais complexos.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8E2D8]">
                <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#B88E5E] shrink-0">
                  <GraduationCap className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-0.5">Aprimoramento Contínuo</h5>
                  <p className="text-xs text-[#5C544E] leading-relaxed">Especializações constantes em Direito das Famílias e Negócios Imobiliários.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8E2D8]">
                <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#B88E5E] shrink-0">
                  <Scale className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-0.5">Segurança & Estratégia</h5>
                  <p className="text-xs text-[#5C544E] leading-relaxed">Análise preventiva minuciosa e busca por resoluções céleres.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8E2D8]">
                <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#B88E5E] shrink-0">
                  <CheckCircle2 className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-0.5">Atendimento Acolhedor</h5>
                  <p className="text-xs text-[#5C544E] leading-relaxed">Escuta ativa, clareza nas orientações e disponibilidade permanente.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-[#F5F0EC] border-t border-[#E2DAD0] flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#211C19] hover:bg-[#3D352E] text-white text-xs font-bold tracking-wider uppercase rounded-lg transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
