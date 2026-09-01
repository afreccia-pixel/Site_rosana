import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, X, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../contactConfig';

export const Articles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<null | {
    title: string;
    category: string;
    date: string;
    readTime: string;
    summary: string;
    fullText: string[];
  }>(null);

  const articles = [
    {
      title: 'Inventário Extrajudicial em Cartório: Como funciona e quando é possível?',
      category: 'DIREITO DAS SUCESSÕES',
      date: 'Agosto 2026',
      readTime: '4 min de leitura',
      summary: 'Entenda os requisitos legais para realizar o inventário diretamente em cartório com rapidez, menor custo e sem a demora do processo judicial.',
      fullText: [
        'O inventário extrajudicial, instituído pela Lei 11.441/07, é uma alternativa rápida e econômica ao processo judicial de partilha de bens.',
        'Para que seja realizado em cartório de notas, é necessário que todos os herdeiros sejam maiores e capazes, haja consenso quanto à divisão dos bens e a presença obrigatória de um advogado.',
        'A principal vantagem é a celeridade: enquanto um processo judicial pode levar anos, a escritura pública em cartório costuma ser finalizada em semanas ou poucos meses.',
        'Nossa equipe assessora todas as etapas da documentação, certidões negativas e cálculo do ITCMD com total segurança.',
      ],
    },
    {
      title: 'Cuidados Essenciais na Compra e Venda de Imóveis em Santa Catarina',
      category: 'DIREITO IMOBILIÁRIO',
      date: 'Julho 2026',
      readTime: '5 min de leitura',
      summary: 'A importância da Due Diligence imobiliária para blindar seu patrimônio contra dívidas ocultas, fraudes registrais e problemas ambientais.',
      fullText: [
        'O mercado imobiliário do litoral catarinense, especialmente Balneário Camboriú e região, possui alta valorização, exigindo cautela redobrada nas negociações.',
        'Antes de assinar contratos ou efetuar pagamentos, é fundamental realizar a auditoria preventiva (Due Diligence Imobiliária), analisando a matrícula atualizada, certidões cíveis, fiscais e trabalhistas dos vendedores.',
        'Um contrato bem redigido prevê cláusulas resolutivas claras, penalidades por atraso na entrega de obras e garantia de transferência da propriedade perante o Registro de Imóveis.',
      ],
    },
    {
      title: 'Planejamento Sucessório: Como proteger o patrimônio da sua família',
      category: 'DIREITO DE FAMÍLIA & BENS',
      date: 'Junho 2026',
      readTime: '4 min de leitura',
      summary: 'Estratégias jurídicas legais para organizar a transmissão de bens em vida, evitar litígios familiares e reduzir a carga tributária.',
      fullText: [
        'O planejamento sucessório permite que o titular do patrimônio decida em vida como seus bens serão geridos e transmitidos aos herdeiros.',
        'Instrumentos como doações com reserva de usufruto, testamentos, holdings familiares e cláusulas restritivas (incomunicabilidade e impenhorabilidade) trazem estabilidade para os negócios e harmonia para a família.',
        'Além de prevenir disputas futuras, um bom planejamento gera economia tributária expressiva frente aos custos de um inventário tradicional.',
      ],
    },
  ];

  return (
    <section id="artigos" className="py-20 md:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#B88E5E] tracking-[0.22em] uppercase block mb-3">
            CONTEÚDO E ARTIGOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211C19] font-normal leading-tight mb-4">
            Orientações jurídicas e informações práticas
          </h2>
          <div className="w-12 h-[2px] bg-[#B88E5E] mx-auto mb-5" />
          <p className="text-[#5C544E] text-sm md:text-base leading-relaxed font-light">
            Esclareça dúvidas frequentes sobre direitos patrimoniais, familiares e negócios imobiliários.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.article
              key={art.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-[#E8E2D8] hover:border-[#B88E5E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] text-[#8C663D] font-bold tracking-widest uppercase mb-4">
                  <span>{art.category}</span>
                  <div className="flex items-center gap-1 text-[#5C544E]">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl text-[#211C19] font-normal mb-3 group-hover:text-[#B88E5E] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-[#5C544E] leading-relaxed mb-6 font-light">
                  {art.summary}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(art)}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B88E5E] hover:text-[#A57C4E] pt-4 border-t border-[#E8E2D8] transition-colors text-left"
              >
                <span>Ler artigo completo</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal for Article Reading */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-2xl w-full p-8 md:p-10 max-h-[90vh] overflow-y-auto border border-[#E8E2D8] shadow-2xl relative"
            >
              <button
                type="button"
                aria-label="Fechar artigo"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 text-[#5C544E] hover:text-[#211C19] p-2 rounded-full hover:bg-[#F8F5F0] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[10px] font-bold text-[#B88E5E] uppercase tracking-[0.2em] block mb-2">
                {selectedArticle.category} • {selectedArticle.date}
              </span>

              <h3 className="font-serif text-2xl md:text-3xl text-[#211C19] font-normal leading-tight mb-4">
                {selectedArticle.title}
              </h3>

              <div className="w-12 h-[2px] bg-[#B88E5E] mb-6" />

              <div className="space-y-4 text-sm text-[#5C544E] leading-relaxed font-light mb-8">
                {selectedArticle.fullText.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#5C544E]">Dúvidas sobre este tema?</p>
                <a
                  href={`https://wa.me/${CONTACT_INFO.phone.whatsappNumber}?text=${encodeURIComponent(
                    `Olá, Dra. Rosana! Li o artigo "${selectedArticle.title}" e gostaria de tirar uma dúvida.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B88E5E] hover:bg-[#A57C4E] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Consultar sobre este assunto
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
