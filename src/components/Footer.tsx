import React from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../contactConfig';
import { MessageCircle, MapPin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`;

  return (
    <footer className="bg-[#1C1815] text-[#D8CEBE] pt-16 pb-12 border-t border-[#332B25]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#332B25]">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Logo variant="light" size="lg" />
            </div>
            <p className="text-xs text-[#A89C8F] leading-relaxed mb-6 font-light max-w-sm">
              Escritório de advocacia especializado em Direito de Família, Sucessões e Imobiliário em Balneário Camboriú / SC. Atuação estratégica, humanizada e ética.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-widest text-[#B88E5E] font-bold">
                {CONTACT_INFO.oab}
              </span>
              <span className="text-[#A89C8F] text-xs">•</span>
              <span className="text-[10px] uppercase tracking-widest text-[#A89C8F]">
                Balneário Camboriú / SC
              </span>
            </div>
          </div>

          {/* Quick Links (Hidden on Mobile) */}
          <div className="hidden md:block lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-[0.16em] text-[#B88E5E] mb-5">
              Navegação
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações</a>
              </li>
            </ul>
          </div>

          {/* Specialties (Hidden on Mobile) */}
          <div className="hidden md:block lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-[0.16em] text-[#B88E5E] mb-5">
              Especialidades
            </h4>
            <ul className="space-y-3 text-xs text-[#A89C8F]">
              <li>Família (Divórcio, Guarda, Pensão e Partilha)</li>
              <li>Sucessões (Inventário, Testamento e Planejamento)</li>
              <li>Imobiliário (Contratos, Compra e Venda, Locações)</li>
              <li>Regularização de Imóveis (Usucapião e Registros)</li>
            </ul>
          </div>

          {/* Contact Details (Atendimento - Visible on both Mobile and Desktop) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-[0.16em] text-[#B88E5E] mb-5">
              Atendimento
            </h4>
            <div className="space-y-3.5 text-xs text-[#A89C8F]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B88E5E] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#B88E5E] shrink-0" />
                <span>WhatsApp: {CONTACT_INFO.phone.whatsappDisplay || '(47) 99227-9984'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B88E5E] shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#B88E5E] hover:bg-[#A57C4E] text-white rounded text-[11px] font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#A89C8F]">
          <p>
            © {new Date().getFullYear()} {CONTACT_INFO.title}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={CONTACT_INFO.social.instagramDev}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A89C8F] hover:text-[#B88E5E] transition-colors"
            >
              Desenvolvido por <span className="text-[#B88E5E] font-medium underline">{CONTACT_INFO.social.devName}</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="p-2 rounded bg-[#28221D] hover:bg-[#B88E5E] text-white transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
