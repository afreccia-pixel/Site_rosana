import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, MessageCircle, Clock, CheckCircle2, ArrowLeft, ExternalLink, Phone, Navigation } from 'lucide-react';
import { CONTACT_INFO } from '../contactConfig';
import fachadaImg from '../assets/fachada.webp';

interface ContactPageProps {
  onNavigate: (page: string, anchor?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: 'Direito de Família',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Dra. Rosana!\n\nMeu nome: ${formData.name}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\nÁrea de interesse: ${formData.area}\nMensagem: ${formData.message}`;
    const url = `https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT_INFO.address.full
  )}`;

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-[#F5F0EC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb / Back button */}
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

        {/* Header Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-[#B88E5E] tracking-[0.22em] uppercase block mb-2">
            CONTATO
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211C19] font-normal leading-tight mb-4">
            Estamos prontos para defender seus direitos e seu patrimônio.
          </h1>
          <p className="text-sm md:text-base text-[#5C544E] font-light leading-relaxed">
            Atendimento presencial em nosso escritório em Balneário Camboriú / SC ou online para todo o Brasil. Escolha o canal de sua preferência abaixo:
          </p>
        </div>

        {/* Office Photo & Details Highlight Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12">
          {/* Left: Office Fachada/Reception Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8E2D8] bg-white group">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2]">
                <img
                  src={fachadaImg || '/fachada.webp'}
                  alt="Escritório RB Advocacia - Dra. Rosana Beling em Balneário Camboriú"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const step = parseInt(target.dataset.tried || '0', 10);
                    const fallbacks = [
                      '/fachada.webp',
                      './fachada.webp',
                      '/fachada.jpg',
                      './fachada.jpg',
                      '/fachada.jpeg',
                      './fachada.jpeg',
                      '/fachada_escritorio_1788348546844.jpg'
                    ];
                    if (step < fallbacks.length) {
                      target.dataset.tried = String(step + 1);
                      target.src = fallbacks[step];
                    }
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#211C19]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20">
                  Nosso Escritório
                </div>
              </div>
              <div className="p-5 bg-white border-t border-[#E8E2D8] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-medium text-[#211C19]">
                    RB Advocacia • Recepção & Atendimento
                  </h4>
                  <p className="text-xs text-[#5C544E] mt-0.5">
                    Ambiente moderno, privativo e confortável no Centro de Balneário Camboriú
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FAF7F2] text-[#B88E5E] flex items-center justify-center shrink-0 border border-[#B88E5E]/30">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#B88E5E] mb-2.5">
                  <Phone className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-1">
                  Telefone Fixo
                </h4>
                <a
                  href={`tel:${CONTACT_INFO.phone.display}`}
                  className="text-xs font-semibold text-[#5C544E] hover:text-[#B88E5E] transition-colors block"
                >
                  {CONTACT_INFO.phone.display}
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E8E2D8] shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#B88E5E] mb-2.5">
                  <Mail className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-1">
                  E-mail Oficial
                </h4>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-xs text-[#5C544E] hover:text-[#B88E5E] transition-colors break-all leading-tight block"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D8] flex items-start gap-3.5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-white text-[#B88E5E] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#5C544E]">
                <strong className="text-[#211C19] block mb-0.5">Horário de Atendimento:</strong>
                Segunda a Sexta-feira das 08h30 às 18h00. Atendimentos presenciais mediante agendamento prévio.
              </div>
            </div>
          </motion.div>

          {/* Right: Message / Consultation Form & Priority WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Priority WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#B88E5E]/40 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#B88E5E]/20 flex items-center justify-center text-[#B88E5E] shrink-0">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#B88E5E] block">
                    CANAL PRIORITÁRIO
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#211C19] mb-1">
                    WhatsApp Direto do Escritório
                  </h3>
                  <p className="text-xs text-[#5C544E] mb-3 leading-relaxed">
                    Fale diretamente com nossa equipe para agendamento de consultas com a Dra. Rosana Beling.
                  </p>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B88E5E] hover:bg-[#A57C4E] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Falar no WhatsApp: {CONTACT_INFO.phone.whatsappDisplay}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Consultation Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E8E2D8] shadow-md">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B88E5E] block mb-2">
                MENSAGEM DIRETA
              </span>
              <h2 className="font-serif text-2xl text-[#211C19] font-normal mb-2">
                Solicite uma consulta preliminar
              </h2>
              <p className="text-xs text-[#5C544E] mb-6 font-light leading-relaxed">
                Preencha os campos abaixo com o resumo de sua necessidade. Todos os dados são tratados sob estrito sigilo profissional.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-[#FAF7F2] rounded-xl border border-[#E8E2D8]">
                  <div className="w-12 h-12 rounded-full bg-[#B88E5E]/20 text-[#B88E5E] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-[#211C19] mb-2">Mensagem encaminhada!</h4>
                  <p className="text-xs text-[#5C544E] mb-6">
                    Seu contato foi aberto no WhatsApp. Caso prefira novo envio, clique no botão abaixo:
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-wider text-[#B88E5E] hover:underline cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#211C19]">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Maria de Souza"
                      className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-lg px-4 py-2.5 text-xs text-[#211C19] focus:outline-none focus:border-[#B88E5E] transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase font-bold tracking-wider text-[#211C19]">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(47) 99999-9999"
                        className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-lg px-4 py-2.5 text-xs text-[#211C19] focus:outline-none focus:border-[#B88E5E] transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase font-bold tracking-wider text-[#211C19]">
                        E-mail
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@exemplo.com"
                        className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-lg px-4 py-2.5 text-xs text-[#211C19] focus:outline-none focus:border-[#B88E5E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#211C19]">
                      Área de Interesse
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-lg px-4 py-2.5 text-xs text-[#211C19] focus:outline-none focus:border-[#B88E5E] transition-colors cursor-pointer"
                    >
                      <option value="Direito de Família">Direito de Família (Divórcio, guarda, pensão, partilha de bens)</option>
                      <option value="Sucessões">Sucessões (Inventário judicial/extrajudicial, testamento)</option>
                      <option value="Direito Imobiliário">Direito Imobiliário (Contratos, locações, compra e venda)</option>
                      <option value="Regularização de Imóveis">Regularização de Imóveis (Usucapião, adjudicação, escrituras)</option>
                      <option value="Outros Assuntos">Outros Assuntos Jurídicos</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#211C19]">
                      Descreva brevemente sua necessidade *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos os detalhes principais da sua situação para podermos orientar..."
                      className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-lg px-4 py-2.5 text-xs text-[#211C19] focus:outline-none focus:border-[#B88E5E] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#B88E5E] hover:bg-[#A57C4E] text-white py-3.5 rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Enviar Consulta pelo WhatsApp
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Google Maps Interactive Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E2D8] shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B88E5E] block mb-1">
                COMO CHEGAR
              </span>
              <h3 className="font-serif text-2xl text-[#211C19] font-normal">
                Localização no Mapa
              </h3>
              <p className="text-xs text-[#5C544E] mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B88E5E] shrink-0" />
                <span>{CONTACT_INFO.address.street} - {CONTACT_INFO.address.neighborhood}, {CONTACT_INFO.address.city} / {CONTACT_INFO.address.state}</span>
              </p>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#211C19] hover:bg-[#B88E5E] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <Navigation className="w-3.5 h-3.5 text-[#B88E5E] group-hover:text-white" />
              <span>Traçar Rota no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-[#E8E2D8] shadow-inner bg-[#FAF7F2]">
            <iframe
              title="Mapa de Localização do Escritório RB Advocacia"
              src="https://maps.google.com/maps?q=Av.%20Brasil%2C%202816%20-%20Centro%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-058&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

