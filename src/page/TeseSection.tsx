import { motion } from "framer-motion";
import Banner from "../assets/Banner.webp";

export function TeseSection() {
  return (
    <div id="Sobre" className="MainContainer px-4 md:px-10 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-syne font-bold text-3xl md:text-4xl tracking-tight"
          >
            A NOSSA TESE.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg"
          >
            Rejeitamos as métricas vazias e o conteúdo sem substância. O que
            entregamos é estratégia com rigor, conteúdo com propósito e uma
            relação onde servir não é fraqueza. A Kfir não é uma fornecedora de
            serviços. É uma parceira de crescimento que acredita que marcas
            fortes não são construídas com barulho. São construídas com pesquisa
            profunda, consistência e um propósito que vai além do próximo mês de
            faturamento.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <img src={Banner} className="w-full rounded-lg" alt="" />
        </motion.div>
      </div>
    </div>
  );
}
