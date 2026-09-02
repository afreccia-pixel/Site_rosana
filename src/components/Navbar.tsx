import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, ChevronDown, ChevronRight, HeartHandshake, Scroll, Building2, FileCheck2, User, MapPin, Star, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../contactConfig';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, anchor?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [areasExpanded, setAreasExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (currentPage === 'home') {
        const sections = ['avaliacoes', 'areas', 'home'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          if (section === 'home' && window.scrollY < 400) {
            setActiveSection('home');
            break;
          }
          const el = document.getElementById(section);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`;

  const practiceAreasList = [
    { slug: 'familia', id: 'area-familia', title: 'Direito de Família', desc: 'Divórcio, guarda, pensão e partilha', icon: HeartHandshake },
    { slug: 'sucessoes', id: 'area-sucessoes', title: 'Sucessões', desc: 'Inventários, testamentos e herança', icon: Scroll },
    { slug: 'imobiliario', id: 'area-imobiliario', title: 'Direito Imobiliário', desc: 'Contratos, locações e compra/venda', icon: Building2 },
    { slug: 'regularizacao', id: 'area-regularizacao', title: 'Regularização de Imóveis', desc: 'Usucapião, escrituras e averbações', icon: FileCheck2 },
  ];

  const handleNavClick = (page: string, anchor?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, anchor);
  };

  const isAreaPage = ['familia', 'sucessoes', 'imobiliario', 'regularizacao'].includes(currentPage);
  const isHomeActive = currentPage === 'home' && (activeSection === 'home' || activeSection === '');
  const isAreasActive = (currentPage === 'home' && activeSection === 'areas') || isAreaPage;
  const isAvaliacoesActive = currentPage === 'home' && activeSection === 'avaliacoes';
  const isSobreActive = currentPage === 'sobre';
  const isContatoActive = currentPage === 'contato';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F0EC]/95 backdrop-blur-md shadow-sm border-b border-[#E2DAD0] py-3.5'
          : 'bg-[#F5F0EC]/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <Logo onClick={() => handleNavClick('home')} />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {/* Início */}
          <button
            onClick={() => handleNavClick('home')}
            className={`relative py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
              isHomeActive ? 'text-[#B88E5E]' : 'text-[#4A423D] hover:text-[#B88E5E]'
            }`}
          >
            Início
            {isHomeActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute -bottom-1 left-0 right-0 mx-auto w-6 h-[2px] bg-[#B88E5E]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>

          {/* Desktop Areas Dropdown */}
          <div className="relative group">
            <button
              onClick={() => handleNavClick('home', 'areas')}
              className={`relative py-1 text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1 cursor-pointer ${
                isAreasActive ? 'text-[#B88E5E]' : 'text-[#4A423D] hover:text-[#B88E5E]'
              }`}
            >
              <span>Áreas de atuação</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              {isAreasActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 mx-auto w-6 h-[2px] bg-[#B88E5E]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Desktop Dropdown Flyout */}
            <div className="absolute top-full left-0 mt-2 w-72 bg-[#FAF7F2] rounded-xl shadow-xl border border-[#E8E2D8] p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="px-2.5 py-1.5 border-b border-[#E8E2D8] mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C663D]">
                  Páginas das Especialidades
                </span>
              </div>
              {practiceAreasList.map((area) => {
                const Icon = area.icon;
                const isCurrent = currentPage === area.slug;
                return (
                  <button
                    key={area.slug}
                    onClick={() => handleNavClick(area.slug)}
                    className={`w-full text-left flex items-center gap-3 p-2.5 rounded-lg transition-colors group/item cursor-pointer ${
                      isCurrent
                        ? 'bg-white text-[#B88E5E] border border-[#B88E5E]/40'
                        : 'hover:bg-white text-[#4A423D] hover:text-[#B88E5E]'
                    }`}
                  >
                    <div className="w-7 h-7 rounded-md bg-white border border-[#E8E2D8] flex items-center justify-center text-[#B88E5E] group-hover/item:bg-[#B88E5E] group-hover/item:text-white transition-colors shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold block leading-tight text-[#211C19] group-hover/item:text-[#B88E5E]">
                        {area.title}
                      </span>
                      <span className="text-[10px] text-[#7A6E65] line-clamp-1">
                        {area.desc}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-[#B88E5E] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </button>
                );
              })}
              <div className="pt-2 mt-1 border-t border-[#E8E2D8]">
                <button
                  onClick={() => handleNavClick('home', 'areas')}
                  className="w-full text-center text-[11px] font-semibold text-[#8C663D] hover:text-[#B88E5E] py-1 cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>Ver visão geral de todas as áreas</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Avaliações */}
          <button
            onClick={() => handleNavClick('home', 'avaliacoes')}
            className={`relative py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
              isAvaliacoesActive ? 'text-[#B88E5E]' : 'text-[#4A423D] hover:text-[#B88E5E]'
            }`}
          >
            Avaliações
            {isAvaliacoesActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute -bottom-1 left-0 right-0 mx-auto w-6 h-[2px] bg-[#B88E5E]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>

          {/* Sobre a Dra. Rosana (Page View) */}
          <button
            onClick={() => handleNavClick('sobre')}
            className={`relative py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
              isSobreActive ? 'text-[#B88E5E] font-semibold' : 'text-[#4A423D] hover:text-[#B88E5E]'
            }`}
          >
            Sobre a Dra. Rosana
            {isSobreActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute -bottom-1 left-0 right-0 mx-auto w-6 h-[2px] bg-[#B88E5E]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>

          {/* Contato (Page View) */}
          <button
            onClick={() => handleNavClick('contato')}
            className={`relative py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
              isContatoActive ? 'text-[#B88E5E] font-semibold' : 'text-[#4A423D] hover:text-[#B88E5E]'
            }`}
          >
            Contato
            {isContatoActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute -bottom-1 left-0 right-0 mx-auto w-6 h-[2px] bg-[#B88E5E]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </nav>

        {/* Right Action Button (Desktop Only) */}
        <div className="hidden sm:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#B88E5E] text-[#B88E5E] hover:bg-[#B88E5E] hover:text-white rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>{CONTACT_INFO.phone.whatsappDisplay}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#211C19] hover:text-[#B88E5E] focus:outline-none cursor-pointer"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#FAF7F2] border-b border-[#E8E2D8] shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-1">
              {/* 1. Início */}
              <button
                onClick={() => handleNavClick('home')}
                className="text-left text-sm font-medium text-[#211C19] hover:text-[#B88E5E] py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors flex items-center justify-between border-b border-[#E8E2D8]/60 cursor-pointer"
              >
                <span>Início</span>
                {isHomeActive && <span className="w-2 h-2 rounded-full bg-[#B88E5E]" />}
              </button>

              {/* 2. Áreas de Atuação (Accordion / List) */}
              <div className="py-2 border-b border-[#E8E2D8]/60">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavClick('home', 'areas')}
                    className="text-left text-sm font-medium text-[#211C19] hover:text-[#B88E5E] py-1.5 px-2 cursor-pointer"
                  >
                    Áreas de atuação
                  </button>
                  <button
                    type="button"
                    onClick={() => setAreasExpanded(!areasExpanded)}
                    className="p-1.5 text-[#8C7A6B] hover:text-[#B88E5E]"
                    aria-label="Expandir áreas"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${areasExpanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Expanded practice areas breakdown */}
                {areasExpanded && (
                  <div className="mt-2 pl-2 pr-1 space-y-1.5 bg-white/50 rounded-xl p-2.5 border border-[#E8E2D8]/80">
                    {practiceAreasList.map((area) => {
                      const Icon = area.icon;
                      const isCurrent = currentPage === area.slug;
                      return (
                        <button
                          key={area.slug}
                          onClick={() => handleNavClick(area.slug)}
                          className={`w-full text-left flex items-center justify-between p-2 rounded-lg transition-colors group cursor-pointer ${
                            isCurrent ? 'bg-white text-[#B88E5E]' : 'hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 rounded-md bg-[#FAF7F2] flex items-center justify-center text-[#B88E5E] group-hover:scale-105 transition-transform">
                              <Icon className="w-3.5 h-3.5 stroke-[1.75]" />
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-[#211C19] group-hover:text-[#B88E5E] block">
                                {area.title}
                              </span>
                              <span className="text-[10px] text-[#7A6E65] line-clamp-1">
                                {area.desc}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-[#B88E5E] opacity-60 group-hover:opacity-100" />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 3. Avaliações */}
              <button
                onClick={() => handleNavClick('home', 'avaliacoes')}
                className="text-left text-sm font-medium text-[#211C19] hover:text-[#B88E5E] py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors flex items-center justify-between border-b border-[#E8E2D8]/60 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-[#B88E5E] fill-[#B88E5E]" />
                  <span>Avaliações</span>
                </div>
                {isAvaliacoesActive && <span className="w-2 h-2 rounded-full bg-[#B88E5E]" />}
              </button>

              {/* 4. Sobre a Dra. Rosana (Page) */}
              <button
                onClick={() => handleNavClick('sobre')}
                className="text-left text-sm font-medium text-[#211C19] hover:text-[#B88E5E] py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors flex items-center justify-between border-b border-[#E8E2D8]/60 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#B88E5E]" />
                  <span className={isSobreActive ? 'text-[#B88E5E] font-semibold' : ''}>
                    Sobre a Dra. Rosana
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#8C7A6B]" />
              </button>

              {/* 5. Contato (Page) */}
              <button
                onClick={() => handleNavClick('contato')}
                className="text-left text-sm font-medium text-[#211C19] hover:text-[#B88E5E] py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B88E5E]" />
                  <span className={isContatoActive ? 'text-[#B88E5E] font-semibold' : ''}>
                    Contato
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#8C7A6B]" />
              </button>

              {/* Subtle Institutional Footer in Mobile Drawer */}
              <div className="mt-3 pt-3 border-t border-[#E8E2D8] flex items-center justify-between text-[10px] text-[#7A6E65] uppercase tracking-wider">
                <span>{CONTACT_INFO.oab}</span>
                <span>Balneário Camboriú / SC</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
