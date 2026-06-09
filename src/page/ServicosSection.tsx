import foguete from "../assets/foguete.webp";
import cavalo from "../assets/cavalo.webp";
import computer from "../assets/computer.webp"
import { motion } from "framer-motion";

export function ServicoSection() {
  return (
    <div className="p-4 py-32">
      <div>
        <motion.h2 
         initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
        className="uppercase text-3xl md:text-4xl font-bold font-syne text-center tracking-tight pb-10">
          OPERAÇÃO COMPLETA. DA ATRAÇÃO À <br /> ÚLTIMA LINHA DE LUCRO.
        </motion.h2>
      </div>
      <div className="grid grid-cols-1">
        <div className="md:flex md:flex-row flex-col">
          <motion.div 
           initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.5, ease: "easeOut" }}
          className="flex justify-center">
            <img src={foguete} alt="" className="w-[200px] md:w-[600px]" />
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.5, ease: "easeOut" }}
          className="flex flex-col justify-center gap-4">
            <h3 className="font-syne text-2xl font-bold leading-6">
              TRÁFEGO PAGO & <br /> BUSINESS INTELLIGENCE
            </h3>
            <p>
              Gestão de mídia de performance nas plataformas meta ads, google
              ads e linkedin ads. análise rigorosa de métricas comerciais (cac,
              ltv e roi). compramos mídia exatamente onde o seu cliente final
              está, encurtando o caminho entre o anúncio e o aperto de mão.
            </p>
          </motion.div>
        </div>
        <div className="md:flex md:flex-row flex-col">
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay:0.5, ease: "easeOut" }}
            className="flex justify-center md:hidden">
            <img src={cavalo} alt="" className="w-[200px] md:w-[600px]" />
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.5, ease: "easeOut" }}
          className="flex flex-col justify-center gap-4">
            <h3 className="font-syne text-2xl font-bold leading-6">
              CONTEÚDO E <br /> POSICIONAMENTO DE ELITE
            </h3>
            <p>
              Desenvolvimento de linha editorial corporativa e audiovisual premium. criação de materiais de alto padrão que educão o seu mercado, destroem objeções de compra antecipadamente e elevam o valor percebido do seu serviço antes mesmo do seu comercial entrar em ação.
            </p>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.5, ease: "easeOut" }}
          className="hidden md:flex">
            <img src={cavalo} alt="" className="w-[200px] md:w-[600px]" />
          </motion.div>
        </div>
        <div className="md:flex md:flex-row flex-col">
          <motion.div 
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay:0.5, ease: "easeOut" }}
          className="flex justify-center">
            <img src={computer} alt="" className="w-[200px] md:w-[600px]" />
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay:0.5, ease: "easeOut" }}
          className="flex flex-col justify-center gap-4">
            <h3 className="font-syne text-2xl font-bold leading-6">
              ENGENHARIA DE INTERFACE <br /> E PERFORMANCE WEB
            </h3>
            <p>
              Desenvolvimento de sites institucionais, landing pages e ecossistemas digitais otimizados em código puro. plataformas pensadas desde o primeiro pixel para carregar abaixo de 2 segundos, garantindo experiência fluida (ux) e máxima retenção de leads.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
