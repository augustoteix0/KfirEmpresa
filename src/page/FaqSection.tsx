import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como funciona o processo de trabalho da agência?",
    answer: "Nossa metodologia é dividida em etapas estratégicas: primeiro fazemos um mapeamento do seu negócio, depois desenvolvemos a sua estrutura de conversão (site) e, por fim, desenhamos a estratégia de tráfego, conteúdo e posicionamento para atrair clientes qualificados. Você acompanha todo o processo."
  },
  {
    question: "Em quanto tempo os primeiros resultados começam a aparecer?",
    answer: "As estruturas e campanhas de tráfego pago costumam ir ao ar entre 15 a 30 dias úteis. Os resultados de atração através de mídia paga podem aparecer logo nos primeiros dias de anúncios ativos, enquanto o posicionamento de elite e conteúdo constroem autoridade sólida a médio prazo."
  },
  {
    question: "O que está incluso no escopo dos serviços de vocês?",
    answer: "Trabalhamos com o ecossistema completo de crescimento digital: desenvolvimento de sites e landing pages de alta performance, gestão de tráfego pago integrada com Business Intelligence (BI) para análise de dados, além da estratégia de conteúdo e posicionamento de elite para a sua marca."
  },
  {
    question: "Como funciona o suporte pós-entrega do meu site?",
    answer: "Após a finalização e entrega da sua estrutura, você conta com um período de suporte técnico garantido para tirar dúvidas, realizar pequenos ajustes de estabilidade e garantir que toda a operação de vendas continue rodando sem nenhuma falha."
  },
  {
    question: "Eu já tenho um site e faço anúncios, por que deveria contratar vocês?",
    answer: "A maioria das agências entrega apenas um site bonitinho ou cliques vazios nos anúncios. Nós unimos engenharia de conversão, tráfego e inteligência de dados (BI) para garantir que sua empresa não tenha só visitas, mas sim um fluxo previsível de vendas e um posicionamento de elite no mercado."
  },
  {
    question: "Qual o valor do investimento para iniciar com a agência?",
    answer: "Não trabalhamos com pacotes engessados, pois cada negócio exige um esforço diferente em tráfego, estrutura ou conteúdo. O investimento é calculado sob medida com base nos objetivos atuais e no tamanho do desafio da sua empresa, definido logo após a nossa reunião de diagnóstico."
  },
  {
    question: "Os acessos, domínios e contas de anúncios ficam comigo?",
    answer: "Cento por cento seus. Toda a propriedade intelectual do site, contas de anúncios no Facebook/Google, acessos a plataformas de dados e domínios são registrados diretamente no nome ou CNPJ da sua empresa. Você mantém o controle total e transparência absoluta sobre os seus ativos."
  },
  {
    question: "Como faço para dar o próximo passo e contratar a agência?",
    answer: "Basta clicar em qualquer botão de ação desta página e preencher o nosso formulário rápido de aplicação. Nossa equipe fará uma pré-análise dos seus dados e entrará em contato para agendar uma reunião de diagnóstico estratégico com você."
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
            <h2 className="text-3xl md:text-4xl font-extrabold font-syne uppercase tracking-tight">
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
    </section>
  );
}