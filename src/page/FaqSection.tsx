import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Trabalhamos em etapas claras: imersão no seu negócio, direção audiovisual e posicionamento premium, seguido pela engenharia web focado em alta conversão. Você acompanha cada passo do projeto."
  },
  {
    question: "Em quanto tempo meu ecossistema digital estará pronto?",
    answer: "O prazo médio varia entre 15 a 30 dias úteis, dependendo da complexidade do projeto e da velocidade na aprovação do material audiovisual e estratégico."
  },
  {
    question: "O escopo inclui tráfego pago e produção de vídeos?",
    answer: "Sim, desenhamos uma operação completa que vai desde a atração qualificada de clientes por mídia paga até a construção da autoridade corporativa com audiovisual premium."
  },
  {
    question: "Como funciona o suporte pós-entrega?",
    answer: "Entregamos o projeto pronto e validado, e você conta com um período de suporte técnico garantido para tirar dúvidas, fazer pequenos ajustes e garantir estabilidade total na sua operação."
  },
  {
    question: "Eu já tenho um site, por que deveria refazer com vocês?",
    answer: "A maioria dos sites por aí são apenas cartões de visita bonitos que não vendem nada. Nós não criamos só um site: nós construímos um ecossistema focado em conversão automática, posicionamento de elite e atração de clientes com sangue no olho para comprar."
  },
  {
    question: "Eu preciso aparecer ou gravar os vídeos para o posicionamento?",
    answer: "Não necessariamente. Nossa equipe desenha estratégias personalizadas para o seu modelo de negócio. Podemos focar em produções institucionais, transições cinematográficas e narrativas premium da sua empresa sem que você precise ser um blogueiro."
  },
  {
    question: "Vocês atendem qualquer nicho ou tipo de empresa?",
    answer: "Não. Nós jogamos o jogo do high-ticket. Selecionamos a dedo os projetos através da nossa reunião de diagnóstico para garantir que trabalhamos apenas com empresas reais, validadas e que têm estrutura para suportar uma escala massiva de clientes."
  },
  {
    question: "Qual o valor do investimento para iniciar o projeto?",
    answer: "Não trabalhamos com pacotes prontos ou receitas de bolo. O investimento é calculado com base no tamanho do seu desafio, escopo audiovisual e complexidade da engenharia web necessária. O valor exato é passado após a nossa análise estratégica."
  },
  {
    question: "O domínio e a hospedagem ficam no meu nome?",
    answer: "Cento por cento seu. Toda a propriedade intelectual, contas de anúncios, acessos ao ecossistema e domínios são registrados no nome da sua empresa. Você tem controle total e transparência absoluta de tudo."
  },
  {
    question: "Como faço para dar o próximo passo e garantir minha vaga?",
    answer: "Basta clicar em qualquer botão de CTA desta página e preencher o nosso formulário de aplicação. Se o seu perfil for aprovado, nossa equipe vai entrar em contato para agendar uma reunião estratégica de diagnóstico."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-white text-black p-4 md:px-10 overflow-hidden border-t border-zinc-100">
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