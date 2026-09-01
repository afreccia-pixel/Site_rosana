import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, ChevronDown, ChevronRight, HeartHandshake, Scroll, Building2, FileCheck2, User, MapPin, Star } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../contactConfig';
import { AboutModal } from './AboutModal';
import { ContactModal } from './ContactModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [areasExpanded, setAreasExpanded] = useState(true);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`;

  const practiceAreasList = [
    { id: 'area-familia', title: 'Direito de Família', desc: 'Divórcio, guarda, pensão e partilha', icon: HeartHandshake },
    { id: 'area-sucessoes', title: 'Sucessões', desc: 'Inventários, testamentos e herança', icon: Scroll },
    { id: 'area-imobiliario', title: 'Direito Imobiliário', desc: 'Contratos, locações e compra/venda', icon: Building2 },
    { id: 'area-regularizacao', title: 'Regularização de Imóveis', desc: 'Usucapião, escrituras e averbações', icon: FileCheck2 },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F0EC]/95 backdrop-blur-md shadow-sm border-b border-[#E2DAD0] py-3.5'
            : 'bg-[#F5F0EC]/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Monogram Brand Logo */}
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            <a
              href="#"
              className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                activeSection === 'home' ? 'text-[#B88E5E]' : 'text-[#4A423D] hover:text-[#B88E5E]'
              }`}
            >
              Início
              {activeSection === 'home' && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 mx-auto w-6 h-[2px] bg-[#B88E5E]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>

            {/* Desktop Areas Dropdown */}
            <div className="relative group">
              <a
                href="#areas"
                className={`relative py-1 text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1 ${
                  activeSection === 'areas' ? 'text-[#B88E5E]' : 'text-[#4A423D] hover:text-[#B88E5E]'
                }`}
              >
                <span>Áreas de atuação</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                {activeSection === 'areas' && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 mx-auto w-6 h-[2px] bg-[#B88E5E]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>

              {/* Desktop Dropdown Flyout */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#FAF7F2] rounded-xl shadow-xl border border-[#E8E2D8] p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {practiceAreasList.map((area) => {
                  const Icon = area.icon;
                  return (
                    <a
                      key={area.id}
                      href={`#${area.id}`}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white text-[#4A423D] hover:text-[#B88E5E] transition-colors group/item"
                    >
                      <div className="w-7 h-7 rounded-md bg-white border border-[#E8E2D8] flex items-center justify-center text-[#B88E5E] group-hover/item:bg-[#B88E5E] group-hover/item:text-white transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold block leading-tight text-[#211C19] group-hover/item:text-[#B88E5E]">
                          {area.title}
                        </span>
                        <span className="text-[10px] text-[#7A6E65] line-clamp-1">
                          {area.desc}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <a
              href="#avaliacoes"
              className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                activeSection === 'avaliacoes' ? 'text-[#B88E5E]' : 'text-[#4A423D] hover:text-[#B88E5E]'
              }`}
            >
              Avaliações
              {activeSection === 'avaliacoes' && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 mx-auto w-6 h-[2px] bg-[#B88E5E]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>

            <button
              onClick={() => setAboutModalOpen(true)}
              className="py-1 text-sm font-medium text-[#4A423D] hover:text-[#B88E5E] transition-colors duration-200 cursor-pointer"
            >
              Sobre a Dra. Rosana
            </button>

            <button
              onClick={() => setContactModalOpen(true)}
              className="py-1 text-sm font-medium text-[#4A423D] hover:text-[#B88E5E] transition-colors duration-200 cursor-pointer"
            >
              Contato & Localização
            </button>
          </nav>

          {/* Right Action Button (Desktop Only) */}
          <div className="hidden sm:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 py-1.5 border border-[#B88E5E] text-[#211C19] hover:bg-[#B88E5E] hover:text-white rounded-md transition-all duration-300 text-xs font-semibold tracking-wider"
            >
              <span className="text-[#B88E5E] group-hover:text-white transition-colors">
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>{CONTACT_INFO.phone.whatsappDisplay || '(47) 99227-9984'}</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#211C19] hover:text-[#B88E5E] transition-colors"
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
              className="lg:hidden bg-[#FAF7F2] border-b border-[#E8E2D8] px-5 py-5 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                {/* 1. Início */}
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#211C19] hover:text-[#B88E5E] py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors flex items-center justify-between border-b border-[#E8E2D8]/60"
                >
                  <span>Início</span>
                  {activeSection === 'home' && <span className="w-2 h-2 rounded-full bg-[#B88E5E]" />}
                </a>

                {/* 2. Áreas de Atuação (Accordion / List) */}
                <div className="py-2 border-b border-[#E8E2D8]/60">
                  <div className="flex items-center justify-between">
                    <a
                      href="#areas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-medium text-[#211C19] hover:text-[#B88E5E] py-1.5 px-2"
                    >
                      Áreas de atuação
                    </a>
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
                      {practiceAreasList.map((area, idx) => {
                        const Icon = area.icon;
                        return (
                          <a
                            key={area.id}
                            href={`#${area.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-white transition-colors group"
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
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 3. Avaliações */}
                <a
                  href="#avaliacoes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#211C19] hover:text-[#B88E5E] py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors flex items-center justify-between border-b border-[#E8E2D8]/60"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-3.5 h-3.5 text-[#B88E5E] fill-[#B88E5E]" />
                    <span>Avaliações</span>
                  </div>
                  {activeSection === 'avaliacoes' && <span className="w-2 h-2 rounded-full bg-[#B88E5E]" />}
                </a>

                {/* 4. Sobre a Dra. Rosana */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAboutModalOpen(true);
                  }}
                  className="text-left text-sm font-medium text-[#211C19] hover:text-[#B88E5E] py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors flex items-center justify-between border-b border-[#E8E2D8]/60 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#B88E5E]" />
                    <span>Sobre a Dra. Rosana</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#8C7A6B]" />
                </button>

                {/* 5. Contato & Localização */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setContactModalOpen(true);
                  }}
                  className="text-left text-sm font-medium text-[#211C19] hover:text-[#B88E5E] py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#B88E5E]" />
                    <span>Contato & Localização</span>
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

      {/* Modals */}
      <AboutModal isOpen={aboutModalOpen} onClose={() => setAboutModalOpen(false)} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
};

