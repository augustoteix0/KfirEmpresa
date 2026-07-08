import { useState } from "react";
import { motion } from "framer-motion";
import cifarelli from '../assets/CIFARELLI.webp';
import d2xgo from '../assets/D2XGO.webp';
import kommo from '../assets/KOMMO.webp';
import acreditar from '../assets/ACREDITAR.webp';


export function ClienteGrandeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const casesData = [
    {
      id: "01",
      cliente: <>KOMMO</>,
      ano: "Parceiro Oficial Certificado",
      segmento: "CRM Conversacional",
      entrega: "Interno + Clientes",
      tipoParceria: "Entrega",
      desafio: "A KFIR é Parceiro Oficial Certificado do Kommo, o CRM conversacional número 1 do mundo, presente em mais de 100 países. Isso significa que implementamos, configuramos e treinamos empresas na ferramenta que nós mesmos usamos para gerir nossos próprios clientes e processos. Entregamos uma configuração completa do CRM, pipelines, automações e integração com WhatsApp e Instagram. Além de treinamento da equipe e acompanhamento pós-implantação pela KFIR.",
      entregas: [
        "Captação audiovisual em vídeo — visitas recorrentes às unidades da rede para registrar a energia real do ambiente: treinos, estrutura, equipe e momentos que comunicam a experiência de quem treina ali.",
        "Edição com identidade visual consistente — cada vídeo entregue seguindo um padrão de cor, ritmo e narrativa que reforça o reconhecimento da marca a cada novo conteúdo publicado.",
        "Gestão de múltiplas unidades simultaneamente — operação estruturada para atender diferentes academias da rede sem perder qualidade ou prazo de entrega."
      ],
      imagem: kommo,
      metricas: [
        { valor: "+140%", legenda: "Novos Alunos" },
        { valor: "2.4x", legenda: "Mais Cliques" },
        { valor: "100%", legenda: "Otimizado" }
      ]
    },
    {
      id: "02",
      cliente: <>DX2GO</>,
      ano: "2026",
      segmento: "Fitness e Academias",
      entrega: "Conteúdo Audiovisual",
      tipoParceria: "Entrega",
      desafio: (
  <>
    A D2xgo (especialista no nicho de academias) precisava de um parceiro que entendesse a energia única de cada unidade da rede <span className="font-bold ">Academia Gaviões</span> e transformasse isso em conteúdo consistente para múltiplos perfis no Instagram. O desafio não era só gravar e editar — era captar a identidade de cada espaço, sustentar um ritmo de publicação constante e garantir que o padrão de qualidade se mantivesse o mesmo, independentemente da unidade ou do dia de gravação.
  </>
),
      entregas: [
        "Captação audiovisual em vídeo — visitas recorrentes às unidades da rede para registrar a energia real do ambiente: treinos, estrutura, equipe e momentos que comunicam a experiência de quem treina ali.",
        "Edição com identidade visual consistente — cada vídeo entregue seguindo um padrão de cor, ritmo e narrativa que reforça o reconhecimento da marca a cada novo conteúdo publicado.",
        "Gestão de múltiplas unidades simultaneamente — operação estruturada para atender diferentes academias da rede sem perder qualidade ou prazo de entrega."
      ],
      imagem: d2xgo,
      metricas: [
        { valor: "+140%", legenda: "Novos Alunos" },
        { valor: "2.4x", legenda: "Mais Cliques" },
        { valor: "100%", legenda: "Otimizado" }
      ]
    },
    {
      id: "03",
      cliente: <>Cifarelli <br /> Seguros</>,
      ano: "2026",
      segmento: "Corretora de Seguros",
      entrega: "Conteúdo e Posicionamento",
      tipoParceria: "Entrega",
      desafio: "O mercado de seguros carrega uma imagem burocrática e distante na cabeça do consumidor. A Cifarelli precisava de uma presença no Instagram que quebrasse essa barreira sem perder a credibilidade que o setor exige — comunicando confiança e proximidade ao mesmo tempo, para um público que normalmente só pensa em seguro quando já é tarde demais.",
      entregas: [
        "Estratégia editorial sob medida — definição de pilares de conteúdo que equilibram educação sobre seguros, prova social e humanização da marca, sem soar institucional demais.",
        "Roteiros pensados para o público certo — linguagem acessível que traduz termos técnicos do setor em conteúdo fácil de entender e compartilhar.",
        "Construção de posicionamento digital — consistência visual e de mensagem que aproxima a marca do cliente final, sem abrir mão da seriedade que o setor de seguros exige."
      ],
      imagem: cifarelli,
      metricas: [
        { valor: "+85k", legenda: "Em Contratos" },
        { valor: "Zero", legenda: "Leads Vazios" },
        { valor: "Elite", legenda: "Posicionamento" }
      ]
    },
    {
      id: "04",
      cliente: <>PROJETO ACREDITAR</>,
      ano: "2026",
      segmento: "Projeto Social",
      entrega: "Conteúdo, Estrutura e Redes",
      tipoParceria: "Entrega",
      desafio: "O Projeto Acreditar já transformava vidas — mais de 2.500 crianças e jovens em situação de vulnerabilidade econômica alcançados por aulas de música, dança, futebol e muito mais. Mas uma causa poderosa precisa de uma voz igualmente poderosa para chegar onde pode chegar. O desafio era traduzir em conteúdo digital a força humana do que acontecia dentro do projeto, sem perder a autenticidade e a emoção que fazem uma causa mobilizar pessoas. Entregamos captação e edição de vídeos que registram histórias reais das crianças, professores e voluntários, transformando momentos do projeto em conteúdo que emociona e engaja.",
      entregas: [
        "Captação audiovisual em vídeo — visitas recorrentes às unidades da rede para registrar a energia real do ambiente: treinos, estrutura, equipe e momentos que comunicam a experiência de quem treina ali.",
        "Edição com identidade visual consistente — cada vídeo entregue seguindo um padrão de cor, ritmo e narrativa que reforça o reconhecimento da marca a cada novo conteúdo publicado.",
        "Gestão de múltiplas unidades simultaneamente — operação estruturada para atender diferentes academias da rede sem perder qualidade ou prazo de entrega."
      ],
      imagem: acreditar,
      metricas: [
        { valor: "+140%", legenda: "Novos Alunos" },
        { valor: "2.4x", legenda: "Mais Cliques" },
        { valor: "100%", legenda: "Otimizado" }
      ]
    },
  ];

  const currentCase = casesData[currentIndex];

  const handleNext = () => {
  setCurrentIndex((prev) => (prev === casesData.length - 1 ? 0 : prev + 1));
};

const handlePrev = () => {
  setCurrentIndex((prev) => (prev === 0 ? casesData.length - 1 : prev - 1));
};

  return (
    <section className="MainContainer py-12 md:py-12 bg-white text-black px-4 md:px-10">
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
              {currentCase.id} / 04
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
                  <span className="text-zinc-400 font-montserrat text-sm block">{currentCase.id === "01" ? "Status" : "Ano"}</span>
                  <span className="font-syne font-bold text-zinc-800">{currentCase.ano}</span>
                </div>
                <div>
                  <span className="text-zinc-400 font-montserrat text-sm  block">{currentCase.id === "01" ? "Ferramenta" : "Segmento"}</span>
                  <span className="font-syne font-bold text-zinc-800">{currentCase.segmento}</span>
                </div>
                <div>
                  <span className="text-zinc-400 font-montserrat text-sm  block">{currentCase.id === "01" ? "Uso" : "Entrega"}</span>
                  <span className="font-syne font-bold text-zinc-800">{currentCase.entrega}</span>
                </div>
              </div>

              <div>
                <h3 className="font-syne text-lg md:text-xl font-bold uppercase tracking-wider text-black mb-2">
                  {currentCase.id === "01" ? "O Significado" : "O Desafio"}
                </h3>
                <p className="font-montserrat text-black text-sm md:text-base leading-relaxed">
                  {currentCase.desafio}
                </p>
              </div>

              {/* <div>
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
              </div> */}

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