import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Menu, X, Landmark, GraduationCap, Scale, ShieldCheck, Briefcase, Users, Building2, Gavel, FileText, ChevronRight, Star, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';
import rosanaImg from './assets/rosana.png';
import rosanaJpg from './assets/rosana.jpg';
import { CONTACT_INFO } from './contactConfig';

// --- Shared Components ---

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  ...props 
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  [key: string]: any;
}) => {
  const variants = {
    primary: 'bg-navy text-white hover:bg-navy-light shadow-xl rounded-full',
    secondary: 'bg-gold text-white hover:bg-gold-light shadow-lg rounded-full',
    outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white rounded-xl',
    ghost: 'text-navy hover:bg-slate-100 rounded-lg',
    whatsapp: 'bg-[#25D366] text-white hover:brightness-110 shadow-xl rounded-xl',
  };
  
  return (
    <button 
      className={cn(
        'px-8 py-3.5 font-bold uppercase tracking-wider text-xs transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={cn('mb-12', centered && 'text-center')}>
    {subtitle && (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full mb-6"
      >
        <span className="text-gold uppercase tracking-[0.15em] text-[10px] font-bold block">
          {subtitle}
        </span>
      </motion.div>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif text-navy leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300 h-20 px-6 md:px-12 flex items-center justify-between border-b',
      isScrolled ? 'bg-white/80 backdrop-blur-md border-navy/10 shadow-sm' : 'bg-transparent border-transparent'
    )}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-sm">
          <span className="text-gold font-serif text-xl font-bold">RB</span>
        </div>
        <div className="flex flex-col">
          <span className={cn('font-bold text-lg leading-none tracking-tight', isScrolled ? 'text-navy' : 'text-white')}>
            ROSANA BELING
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold -mt-0.5">
            Advocacia Especializada
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className={cn(
              'text-[11px] font-semibold uppercase tracking-widest transition-colors hover:text-gold',
              isScrolled ? 'text-navy' : 'text-white'
            )}
          >
            {link.name}
          </a>
        ))}
        <a 
          href={`https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" className="px-6 py-2.5">
            Agendar Consulta
          </Button>
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X className={cn(isScrolled ? 'text-navy' : 'text-white')} /> : <Menu className={cn(isScrolled ? 'text-navy' : 'text-white')} />}
      </button>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 bg-white z-[60] flex flex-col p-8 md:hidden"
        >
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif font-bold text-xl text-navy">RB</span>
            <button onClick={() => setMobileMenuOpen(false)}><X className="text-navy" /></button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-serif text-navy border-b border-slate-100 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="secondary" className="mt-4 w-full">
                Agendar Consulta
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-sand">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full mb-6">
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.15em]">Excelência e Rigor Jurídico</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-navy mb-6">
              Compromisso com sua <span className="italic text-gold">Segurança</span> Jurídica.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Atendimento humanizado e especializado focado em soluções ágeis para questões de Direito Imobiliário, Família e Consultoria Empresarial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" className="px-10 py-4 w-full sm:w-auto">
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Falar no WhatsApp
                </Button>
              </a>
              <a href="#sobre">
                <Button variant="outline" className="px-10 py-4 w-full sm:w-auto">
                  Conhecer Dra. Rosana
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="relative w-full max-w-md mx-auto aspect-square md:aspect-[4/5]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gold rounded-[80px_20px_80px_20px] transform rotate-3" />
          <div className="absolute inset-0 bg-navy rounded-[80px_20px_80px_20px] overflow-hidden">
            <img 
              src={rosanaImg} 
              alt="Dra. Rosana Beling" 
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.tried) {
                  target.dataset.tried = '1';
                  target.src = rosanaJpg;
                } else if (target.dataset.tried === '1') {
                  target.dataset.tried = '2';
                  target.src = `${import.meta.env.BASE_URL}rosana.jpg`;
                } else if (target.dataset.tried === '2') {
                  target.dataset.tried = '3';
                  target.src = `${import.meta.env.BASE_URL}rosana.png`;
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-sand">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading title="Dedicação Exclusiva ao seu Caso" subtitle="Sobre a Advogada" />
            <p className="text-gray-600 mb-6 leading-relaxed font-light">
              Com mais de 15 anos de experiência jurídica, a Dra. Rosana Beling consolidou sua carreira através de uma atuação estratégica e humanizada. Graduada pela USP e pós-graduada em Direito Civil e Empresarial, sua missão é oferecer segurança jurídica em momentos críticos.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed font-light">
              Nosso escritório não busca apenas resolver processos, mas construir parcerias sólidas com nossos clientes, garantindo que cada passo seja dado com clareza e transparência.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col gap-3">
                <GraduationCap className="text-gold w-6 h-6" />
                <h4 className="font-bold text-navy text-sm uppercase tracking-wider">Educação</h4>
                <p className="text-[11px] text-gray-500 leading-normal">Mestrado em Direito pela USP e Especialização em Direito Imobiliário.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Landmark className="text-gold w-6 h-6" />
                <h4 className="font-bold text-navy text-sm uppercase tracking-wider">Histórico</h4>
                <p className="text-[11px] text-gray-500 leading-normal">Atuação em grandes corporações e mais de 500 casos de sucesso.</p>
              </div>
            </div>

            <div className="border-l-2 border-gold/50 pl-6 py-1">
              <p className="font-serif italic text-navy/80 text-xl leading-relaxed">
                "A excelência jurídica é fruto da atenção aos detalhes e do compromisso inabalável com a ética."
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="relative grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 pt-12">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1770" 
                  alt="Law Books" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-navy p-8 rounded-2xl text-white shadow-xl">
                <span className="text-4xl font-serif text-gold block mb-1">15+</span>
                <span className="text-[9px] uppercase tracking-[0.2em] opacity-60 font-bold">Anos de Prática Jurídica</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl text-navy shadow-lg border border-navy/5">
                <span className="text-4xl font-serif text-gold block mb-1">98%</span>
                <span className="text-[9px] uppercase tracking-[0.2em] opacity-60 font-bold">Resolução Favorável</span>
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=2070" 
                  alt="Office Meeting" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const areas = [
    { title: 'Direito Imobiliário', desc: 'Contratos, escrituras e regularização de imóveis com total segurança.', icon: <Building2 className="w-6 h-6" /> },
    { title: 'Direito de Família', desc: 'Divórcio, guarda e sucessões tratados com a sensibilidade necessária.', icon: <Users className="w-6 h-6" /> },
    { title: 'Direito Civil', desc: 'Assessoria jurídica completa para contratos e responsabilidade civil corporativa.', icon: <Scale className="w-6 h-6" /> },
    { title: 'Direito Empresarial', desc: 'Constituição de empresas, contratos e gestão de riscos jurídicos corporativos.', icon: <Briefcase className="w-6 h-6" /> },
    { title: 'Consultoria Jurídica', desc: 'Pareceres técnicos e análise estratégica preventiva para pessoas físicas e jurídicas.', icon: <Gavel className="w-6 h-6" /> },
    { title: 'Direito Previdenciário', desc: 'Assessoria em aposentadorias, benefícios e revisões junto ao INSS.', icon: <ShieldCheck className="w-6 h-6" /> },
  ];

  return (
    <section id="areas" className="py-24 bg-white border-t border-navy/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <div className="text-xs font-bold text-gold uppercase [writing-mode:vertical-rl] rotate-180 tracking-[0.3em] opacity-50">Especialidades</div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-serif text-navy">Áreas de <span className="italic text-gold">Atuação</span></h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <motion.div 
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-sand p-8 rounded-2xl border border-navy/5 hover:border-gold/50 transition-all duration-500"
            >
              <div className="text-gold mb-4">
                {area.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{area.title}</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Ricardo Silva', comment: 'Atendimento impecável! A Dra. Rosana resolveu meu problema imobiliário com uma rapidez e precisão que eu não imaginava.', stars: 5 },
    { name: 'Ana Beatriz', comment: 'Extremamente profissional e humana. Me senti segura durante todo o processo de divórcio. Recomendo fortemente.', stars: 5 },
    { name: 'Julio César', comment: 'Melhor consultoria empresarial da região. Estratégias claras e resultados que impactaram positivamente minha empresa.', stars: 5 },
  ];

  return (
    <section id="avaliacoes" className="py-24 bg-[#0B1221] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded-full mb-6">
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.15em]">Voz dos Clientes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Testemunhos de <br /><span className="italic text-gold">Confiança</span></h2>
          </div>
          <div className="w-56 bg-navy/50 p-6 rounded-2xl flex flex-col justify-center items-center text-center border border-white/10 backdrop-blur-sm">
            <div className="text-yellow-400 mb-1 flex">
              <span className="text-xs">★★★★★</span>
            </div>
            <p className="text-white font-bold text-xs uppercase tracking-wider">Avaliações Google</p>
            <p className="text-[10px] text-white/50 mt-1 uppercase tracking-widest">+150 clientes satisfeitos</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-sm group hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex text-yellow-500 mb-6 font-bold text-xs">
                ★★★★★
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed font-light">"{rev.comment}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center font-serif text-gold text-lg border border-gold/20">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{rev.name}</h4>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Cliente Verificado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading title="Entre em Contato" subtitle="Atendimento Especializado" />
            <p className="text-gray-600 mb-10 font-light leading-relaxed">
              Estamos prontos para ouvir sua demanda e oferecer a melhor estratégia jurídica. Preencha o formulário ou utilize um de nossos canais diretos de comunicação.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center text-gold shrink-0 border border-navy/5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-1">Telefone e WhatsApp</h4>
                  <p className="text-gray-500 text-sm">{CONTACT_INFO.phone.display}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center text-gold shrink-0 border border-navy/5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-1">Correio Eletrônico</h4>
                  <p className="text-gray-500 text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center text-gold shrink-0 border border-navy/5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-1">Escritório Central</h4>
                  <p className="text-gray-500 text-sm">{CONTACT_INFO.address.full}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-sand p-10 rounded-[40px_10px_40px_10px] border border-navy/5 shadow-2xl relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso!'); }}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 ml-1">Nome Completo</label>
                <input type="text" placeholder="Ex: Maria Silva" className="w-full bg-white border border-navy/10 rounded-xl p-4 outline-none focus:border-gold/50 transition-all shadow-sm text-sm" required />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 ml-1">E-mail</label>
                  <input type="email" placeholder="maria@exemplo.com" className="w-full bg-white border border-navy/10 rounded-xl p-4 outline-none focus:border-gold/50 transition-all shadow-sm text-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 ml-1">Telefone</label>
                  <input type="tel" placeholder="(47) 99999-9999" className="w-full bg-white border border-navy/10 rounded-xl p-4 outline-none focus:border-gold/50 transition-all shadow-sm text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 ml-1">Área de Interesse</label>
                <select className="w-full bg-white border border-navy/10 rounded-xl p-4 outline-none focus:border-gold/50 transition-all shadow-sm text-sm appearance-none cursor-pointer">
                  <option>Direito Imobiliário</option>
                  <option>Direito de Família</option>
                  <option>Direito Empresarial</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/40 ml-1">Mensagem</label>
                <textarea placeholder="Como podemos auxiliar seu caso?" rows={4} className="w-full bg-white border border-navy/10 rounded-xl p-4 outline-none focus:border-gold/50 transition-all shadow-sm text-sm resize-none" required></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full py-5 rounded-xl">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0B1221] text-white/50 py-16 text-xs uppercase tracking-widest border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-navy flex items-center justify-center rounded-sm border border-gold/30">
                <span className="text-gold font-serif text-sm font-bold">RB</span>
              </div>
              <span className="font-serif font-bold text-lg text-white">ROSANA BELING</span>
            </div>
            <p className="text-[10px] leading-relaxed mb-6 normal-case tracking-normal">
              Advocacia moderna, estratégica e comprometida com a proteção dos seus direitos e patrimônio em {CONTACT_INFO.address.city} - {CONTACT_INFO.address.state}.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors text-[10px]">Facebook</a>
              <a href={`https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors text-[10px]">WhatsApp</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[10px] mb-6 text-gold">Endereço</h4>
            <p className="text-[10px] leading-relaxed normal-case tracking-normal">
              {CONTACT_INFO.address.street} - {CONTACT_INFO.address.neighborhood}<br />
              {CONTACT_INFO.address.city} - {CONTACT_INFO.address.state}, {CONTACT_INFO.address.zipCode}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[10px] mb-6 text-gold">Contato</h4>
            <p className="text-[10px] leading-relaxed normal-case tracking-normal">
              {CONTACT_INFO.phone.display}<br />
              {CONTACT_INFO.email}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[10px] mb-6 text-gold">Credenciais</h4>
            <p className="text-[10px] leading-relaxed uppercase tracking-widest font-bold text-white">
              {CONTACT_INFO.oab}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px]">
          <p>© 2026 Rosana Beling Advocacia. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a 
              href={CONTACT_INFO.social.instagramDev} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gold transition-colors text-slate-400"
            >
              Site desenvolvido por <span className="text-gold font-semibold hover:underline">{CONTACT_INFO.social.devName}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[70] flex items-center gap-3">
      <div className="hidden md:block bg-white px-4 py-2 rounded-lg shadow-xl text-[10px] font-bold text-navy border border-slate-100 animate-pulse uppercase tracking-wider">
        Dra. Rosana está Online
      </div>
      <motion.a 
        href={`https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </motion.a>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
