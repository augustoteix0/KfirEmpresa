import { useState } from "react";
import { motion } from "framer-motion";
import Gavioesimg from '../assets/GavioesImg.webp';
import seguros from '../assets/seguros.webp';

export function ClienteGrandeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const casesData = [
    {
      id: "01",
      cliente: <>Academia <br /> Gaviões</>,
      ano: "2026",
      posicionamento: "Premium",
      parceria: "D2xgo",
      tipoParceria: "Terceirização",
      desafio: "Desenvolvido através de uma parceria estratégica de terceirização para a agência D2xgo (especialista no nicho de academias). O desafio foi traduzir a grandiosidade e a energia da rede Gaviões para o ambiente digital, unindo a estratégia de marketing deles com a nossa engenharia de alta performance.",
      entregas: [
        "Direção audiovisual e captação de vídeos em alta resolução.",
        "Estratégia de posicionamento de marca premium nas redes sociais.",
        "Ecossistema digital de alta performance focado em conversão."
      ],
      imagem: Gavioesimg,
      metricas: [
        { valor: "+140%", legenda: "Novos Alunos" },
        { valor: "2.4x", legenda: "Mais Cliques" },
        { valor: "100%", legenda: "Otimizado" }
      ]
    },
    {
      id: "02",
      cliente: <>Cifarelli <br /> Seguros</>,
      ano: "2026",
      posicionamento: "Elite",
      parceria: "Direto",
      tipoParceria: "Contrato Exclusivo",
      desafio: "Consolidar a autoridade digital da marca no mercado de alto padrão, desenhando uma estrutura de conversão impecável e eliminando a guerra por preços.",
      entregas: [
        "Roteirização e direção audiovisual para serviços High-Ticket.",
        "Landing Page de altíssima conversão com design minimalista.",
        "Estratégia de captação de leads qualificados via mídia paga."
      ],
      imagem: seguros,
      metricas: [
        { valor: "+85k", legenda: "Em Contratos" },
        { valor: "Zero", legenda: "Leads Vazios" },
        { valor: "Elite", legenda: "Posicionamento" }
      ]
    }
  ];

  const currentCase = casesData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <section className="py-16 md:py-32 bg-white text-black px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center justify-between border-b border-zinc-100 pb-6 mb-8 md:mb-12">
          <div>
            <span className="text-xs md:text-sm font-montserrat uppercase tracking-wider text-zinc-400 block mb-1">
              Projetos de Alto Impacto
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-syne uppercase tracking-tight">
              {currentCase.cliente}
            </h2>
          </div>

          <div className="flex gap-3 items-center shrink-0">
            <button 
              onClick={handlePrev} 
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center font-bold hover:bg-black hover:text-white transition-all active:scale-95 cursor-pointer"
            >
              ←
            </button>
            <span className="font-syne text-xs font-bold text-zinc-400 min-w-[40px] text-center">
              {currentCase.id} / 02
            </span>
            <button 
              onClick={handleNext} 
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center font-bold hover:bg-black hover:text-white transition-all active:scale-95 cursor-pointer"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          <div className="w-full md:col-span-7 md:order-2">
            <motion.div 
              key={`img-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl overflow-hidden border border-zinc-100 bg-zinc-50"
            >
              <img 
                src={currentCase.imagem} 
                alt={`Projeto ${currentCase.cliente}`} 
                className="w-full h-auto object-cover grayscale md:hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

          <div className="w-full md:col-span-5 md:order-1">
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm border-b border-zinc-100 pb-4">
                <div>
                  <span className="text-zinc-400 font-montserrat text-sm block">Ano</span>
                  <span className="font-syne font-bold text-zinc-800">{currentCase.ano}</span>
                </div>
                <div>
                  <span className="text-zinc-400 font-montserrat text-sm  block">Posicionamento</span>
                  <span className="font-syne font-bold text-zinc-800">{currentCase.posicionamento}</span>
                </div>
                <div>
                  <span className="text-zinc-400 font-montserrat text-sm  block">{currentCase.tipoParceria}</span>
                  <span className="font-syne font-bold text-zinc-800">{currentCase.parceria}</span>
                </div>
              </div>

              <div>
                <h3 className="font-syne text-lg md:text-xl font-bold uppercase tracking-wider text-black mb-2">
                  O Desafio
                </h3>
                <p className="font-montserrat text-black text-sm md:text-base leading-relaxed">
                  {currentCase.desafio}
                </p>
              </div>

              <div>
                <h3 className="font-syne text-lg md:text-xl font-bold uppercase tracking-wider text-black mb-3">
                  O que entregamos
                </h3>
                <ul className="flex flex-col gap-2.5 font-montserrat text-sm text-black">
                  {currentCase.entregas.map((entrega, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0" />
                      <span>{entrega}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className="border-t border-zinc-100 pt-5 grid grid-cols-3 gap-2 mt-2">
                {currentCase.metricas.map((metrica, idx) => (
                  <div key={idx}>
                    <span className="font-syne text-xl md:text-2xl font-bold text-black block tracking-tight">
                      {metrica.valor}
                    </span>
                    <span className="font-montserrat text-[10px] md:text-xs text-zinc-400 uppercase tracking-wider block mt-0.5 leading-tight">
                      {metrica.legenda}
                    </span>
                  </div>
                ))}
              </div> */}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}