import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../contactConfig';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage
  )}`;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT_INFO.address.full
  )}`;

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
          className="relative w-full max-w-xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8E2D8] overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#F5F0EC] border-b border-[#E2DAD0]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#B88E5E]/15 flex items-center justify-center text-[#B88E5E]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#211C19]">Contato & Localização</h3>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88E5E]">
                  Balneário Camboriú / SC
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
          <div className="p-6 overflow-y-auto space-y-4 text-[#4A423D]">
            {/* Address Card */}
            <div className="p-4 rounded-xl bg-white border border-[#E8E2D8] shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#B88E5E] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-1">
                    Endereço do Escritório
                  </h4>
                  <p className="text-sm text-[#5C544E] leading-relaxed mb-3">
                    {CONTACT_INFO.address.street} - {CONTACT_INFO.address.neighborhood}<br />
                    {CONTACT_INFO.address.city} - {CONTACT_INFO.address.state}, CEP {CONTACT_INFO.address.zipCode}
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B88E5E] hover:underline"
                  >
                    <span>Como chegar no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* WhatsApp & Phone */}
              <div className="p-4 rounded-xl bg-white border border-[#E8E2D8] shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#B88E5E] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-1">
                      Telefones
                    </h4>
                    <p className="text-xs text-[#5C544E] mb-1">
                      Fixo: <a href={`tel:${CONTACT_INFO.phone.display}`} className="hover:text-[#B88E5E] font-medium">{CONTACT_INFO.phone.display}</a>
                    </p>
                    <p className="text-xs text-[#5C544E]">
                      WhatsApp: <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#B88E5E] font-semibold hover:underline">{CONTACT_INFO.phone.whatsappDisplay}</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-white border border-[#E8E2D8] shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF7F2] text-[#B88E5E] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#211C19] mb-1">
                      E-mail
                    </h4>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-xs text-[#5C544E] hover:text-[#B88E5E] break-all leading-relaxed"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white text-[#B88E5E] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#5C544E]">
                <strong className="text-[#211C19] block mb-0.5">Horário de Atendimento:</strong>
                Segunda a Sexta das 08h30 às 18h00 (atendimentos presenciais com agendamento prévio).
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
