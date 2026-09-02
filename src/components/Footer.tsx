import React from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../contactConfig';
import { MessageCircle, MapPin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string, anchor?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`;

  const handleLinkClick = (page: string, anchor?: string) => {
    if (onNavigate) {
      onNavigate(page, anchor);
    } else if (anchor) {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1C1815] text-[#D8CEBE] pt-16 pb-12 border-t border-[#332B25]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#332B25]">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Logo
                variant="light"
                size="lg"
                onClick={() => handleLinkClick('home')}
              />
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
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('home', 'areas')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Áreas de Atuação
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('home', 'avaliacoes')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Avaliações
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('sobre')}
                  className="hover:text-[#B88E5E] transition-colors cursor-pointer text-left"
                >
                  Sobre a Dra. Rosana
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contato')}
                  className="hover:text-[#B88E5E] transition-colors cursor-pointer text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Specialties (Hidden on Mobile) */}
          <div className="hidden md:block lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-[0.16em] text-[#B88E5E] mb-5">
              Especialidades
            </h4>
            <ul className="space-y-3 text-xs text-[#A89C8F]">
              <li>
                <button
                  onClick={() => handleLinkClick('home', 'area-familia')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Família (Divórcio, Guarda, Pensão e Partilha)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('home', 'area-sucessoes')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sucessões (Inventário, Testamento e Herança)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('home', 'area-imobiliario')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Imobiliário (Contratos, Compra e Venda, Locações)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('home', 'area-regularizacao')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Regularização de Imóveis (Usucapião e Registros)
                </button>
              </li>
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
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#B88E5E] hover:bg-[#A57C4E] text-white rounded text-[11px] font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  Agendar Consulta
                </a>

                <button
                  onClick={() => handleLinkClick('contato')}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Ver Mapa & Fixo
                </button>
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
              className="p-2 rounded bg-[#28221D] hover:bg-[#B88E5E] text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
