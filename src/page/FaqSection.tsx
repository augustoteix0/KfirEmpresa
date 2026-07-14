import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import prc1 from "../assets/prc1.webp"

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como funciona o processo de trabalho da KFIR?",
    answer: "Tudo começa com um diagnóstico estratégico do seu negócio. A partir daí, construímos uma operação personalizada que pode envolver conteúdo, posicionamento, anúncios, site e ecossistemas digitais, ou estruturação operacional com automações — conforme o que sua empresa realmente precisa. Você acompanha cada etapa com transparência total."
  },
  {
    question: "Em quanto tempo os primeiros resultados aparecem?",
    answer: "Depende do serviço — e ser honesto sobre isso é parte do nosso compromisso. Anúncios geram dados desde os primeiros dias. Conteúdo e posicionamento constroem autoridade entre 1 e 3 meses. Automações e estrutura operacional têm impacto imediato na produtividade da equipe. Sites são entregues entre 30 e 45 dias."
  },
  {
    question: "Preciso aparecer em vídeos para construir posicionamento de marca?",
    answer: "Não necessariamente. Se preferir não aparecer, desenvolvemos produções institucionais de alto padrão — bastidores da operação, narrativas corporativas e conteúdo educativo da sua área. Se quiser aparecer, construímos uma presença que comunica autoridade. Em ambos os casos, o objetivo é o mesmo: sua marca é lembrada pelo valor que entrega, não pelo preço que cobra."
  },
  {
    question: "Como funciona o serviço de Inteligência Artificial e Automações?",
    answer: "Mapeamos como sua empresa funciona por dentro e implantamos um ecossistema de ferramentas integradas — CRM, Automações com N8N, integrações via API e agentes de IA — para que sua operação trabalhe de forma inteligente e previsível. O resultado é sua equipe foca no que gera valor, e as tarefas repetitivas acontecem de forma automática."
  },
  {
    question: "Os acessos, ferramentas e contas ficam comigo ao final do contrato?",
    answer: "Sim. Tudo é seu. Contas de anúncios, domínio, site, ferramentas de gestão, automações e qualquer ativo digital desenvolvido pela Kfir — tudo registrado no nome ou CNPJ da sua empresa. Transparência não é um diferencial para nós. É uma obrigação."
  },
  {
    question: "A KFIR trabalha com contratos? Como funciona o compromisso?",
    answer: "Sim, trabalhamos com contrato — e isso protege os dois lados. Oferecemos projetos pontuais para entregas específicas e planos mensais para serviços contínuos. O modelo ideal é definido na reunião de diagnóstico, após entendermos seus objetivos. Não existe pacote engessado — existe a solução certa para cada empresa."
  },
  {
    question: "Como a KFIR acompanha e reporta os resultados do meu negócio?",
    answer: "Você nunca fica no escuro. Cada serviço tem seus indicadores acompanhados de perto — e compartilhamos relatórios claros e diretos, sem encher de números que não significam nada. Nosso compromisso é com resultado real, não com relatório bonito. Qualquer dúvida ou ajuste necessário, nossa equipe está acessível e age rápido."
  },
  {
    question: "Como dou o próximo passo para trabalhar com a KFIR?",
    answer: "Simples: clique em qualquer botão desta página e inicie uma conversa no nosso WhatsApp. Nossa equipe fará uma pré-análise do seu negócio e agendará a reunião de diagnóstico estratégico. Se identificarmos que a KFIR é a parceira adequada para o seu momento, seguimos juntos. Se não for, te dizemos isso com honestidade."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="MainContainer py-32 bg-white text-black px-4 md:px-10 overflow-hidden border-t border-zinc-100">
      <div className="max-w-[1120px] mx-auto">
        
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-md md:text-xl font-normal font-syne text-center tracking-tight pb-10">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-syne uppercase tracking-tight">
              Perguntas <br /> Respondidas.
            </h2>
          </motion.div>
        </div>

        
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-zinc-200 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left py-4 cursor-pointer group"
                >
                  <span className="font-syne text-lg md:text-xl font-bold text-black transition-colors duration-200 group-hover:text-zinc-600">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-black flex-shrink-0 ml-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-montserrat text-zinc-700 text-base leading-relaxed pt-2 pb-4 pr-6">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center gap-2 mt-16 -mb-4 text-center"
        >
          <span className="text-zinc-600 text-[20px] font-bold tracking-[0.35em] uppercase font-syne">
            Parceira
          </span>
          <div className="opacity-20 grayscale hover:opacity-40 transition-all duration-300">
            <a href="https://www.kommo.com/br/" target="_blank">
              <img 
              src={prc1}
              alt="Logo do Parceiro" 
              className="h-20 md:h-20 w-auto object-contain"
            />
            </a>
            
          </div>
        </motion.div>
    </section>
  );
}