import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../contactConfig';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: 'Direito de Família',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-semibold text-[#B88E5E] tracking-[0.22em] uppercase block mb-3">
              FALE CONOSCO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211C19] font-normal leading-tight mb-4">
              Agende seu atendimento jurídico
            </h2>
            <div className="w-12 h-[2px] bg-[#B88E5E] mb-6" />

            <p className="text-[#5C544E] text-sm md:text-base leading-relaxed mb-8 font-light">
              Estamos à disposição para entender o seu caso e traçar a melhor estratégia. Entre em contato por WhatsApp, telefone ou preencha o formulário ao lado.
            </p>

            <div className="space-y-6">
              {/* WhatsApp & Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E8E2D8]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#B88E5E] shrink-0">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-1">
                    WhatsApp & Atendimento Direto
                  </h4>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#B88E5E] hover:underline"
                  >
                    {CONTACT_INFO.phone.whatsappDisplay}
                  </a>
                  <span className="text-xs text-[#5C544E] block mt-0.5">
                    Fixo: {CONTACT_INFO.phone.display}
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E8E2D8]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#B88E5E] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-1">
                    E-mail Oficial
                  </h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm text-[#5C544E] hover:text-[#B88E5E] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E8E2D8]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#B88E5E] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-1">
                    Endereço
                  </h4>
                  <p className="text-xs text-[#5C544E] leading-relaxed">
                    {CONTACT_INFO.address.street} - {CONTACT_INFO.address.neighborhood}
                    <br />
                    {CONTACT_INFO.address.city} - {CONTACT_INFO.address.state}, CEP {CONTACT_INFO.address.zipCode}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E8E2D8]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#B88E5E] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-1">
                    Horário de Atendimento
                  </h4>
                  <p className="text-xs text-[#5C544E]">
                    Segunda a Sexta: 08h30 às 18h00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-[#E8E2D8] shadow-xl relative"
          >
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#B88E5E] block mb-2">
              MENSAGEM DIRETA
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#211C19] font-normal mb-2">
              Envie sua consulta
            </h3>
            <p className="text-xs text-[#5C544E] mb-8 font-light">
              Preencha os campos abaixo. Retornaremos com discrição e agilidade.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-[#FAF7F2] rounded-xl border border-[#E8E2D8]">
                <div className="w-12 h-12 rounded-full bg-[#B88E5E]/20 text-[#B88E5E] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[#211C19] mb-2">Mensagem encaminhada!</h4>
                <p className="text-xs text-[#5C544E] mb-6">
                  Seu contato foi aberto no WhatsApp. Caso prefira novo envio, clique abaixo:
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold uppercase tracking-wider text-[#B88E5E] hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-lg px-4 py-3 text-xs text-[#211C19] focus:outline-none focus:border-[#B88E5E] transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
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
                      className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-lg px-4 py-3 text-xs text-[#211C19] focus:outline-none focus:border-[#B88E5E] transition-colors"
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
                      className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-lg px-4 py-3 text-xs text-[#211C19] focus:outline-none focus:border-[#B88E5E] transition-colors"
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
                    className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-lg px-4 py-3 text-xs text-[#211C19] focus:outline-none focus:border-[#B88E5E] transition-colors cursor-pointer"
                  >
                    <option value="Família">Família (Divórcio, guarda, pensão, união estável, partilha...)</option>
                    <option value="Sucessões">Sucessões (Inventário, testamento e planejamento sucessório)</option>
                    <option value="Imobiliário">Imobiliário (Contratos, compra e venda, locações...)</option>
                    <option value="Regularização de Imóveis">Regularização de Imóveis (Usucapião, adjudicação, escrituras...)</option>
                    <option value="Outros Assuntos">Outros Assuntos</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold tracking-wider text-[#211C19]">
                    Descreva brevemente sua necessidade *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos como podemos ajudar..."
                    className="w-full bg-[#FAF7F2] border border-[#E8E2D8] rounded-lg px-4 py-3 text-xs text-[#211C19] focus:outline-none focus:border-[#B88E5E] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B88E5E] hover:bg-[#A57C4E] text-white py-4 rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Enviar Consulta pelo WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
