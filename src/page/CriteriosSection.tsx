import { CalendarCheckIcon, XSquareIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function CriteriosSections() {
  return (
    <div className="flex flex-col gap-10 py-32 p-4">
      <div>
        <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-syne text-3xl md:text-4xl font-bold text-center">
          CRITÉRIOS DE SELEÇÃO.
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
        <div className="flex flex-col gap-4 rounded-2xl p-8 border border-zinc-200 shadow-xl">
          <motion.h3 
          initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
          className="upercase text-center font-syne font-bold text-2xl">
            Quem buscamos
          </motion.h3>
          <ul className="flex flex-col gap-2">
            <motion.li 
            initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.2, ease: "easeOut" }}
            className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-0.5">
                <CalendarCheckIcon size={25} color="green" />
              </span>
              Empresas que buscam expansão de mercado
            </motion.li>

            <motion.li 
            initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.3, ease: "easeOut" }}
            className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-0.5">
                <CalendarCheckIcon size={25} color="green" />
              </span>
              Negócios que precisam de processo previsível de vendas
            </motion.li>

            <motion.li 
            initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.4, ease: "easeOut" }}
            className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-0.5">
                <CalendarCheckIcon size={25} color="green" />
              </span>
              Empresários com sangue no olho para escalar a operação
            </motion.li>

            <motion.li 
            initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.5, ease: "easeOut" }}
            className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-0.5">
                <CalendarCheckIcon size={25} color="green" />
              </span>
              Quem entende que marketing é o combustível para o crescimento
            </motion.li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-2xl p-8">
          <motion.h3 
          initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
          className="upercase text-center font-syne font-bold text-2xl">
            Quem Rejeitamos
          </motion.h3>
          <ul className="flex flex-col gap-2">
            <motion.li 
            initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.2, ease: "easeOut" }}
            className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-0.5">
                <XSquareIcon size={25} color="red" />
              </span>
              Amadores em busca de fórmulas mágicas
            </motion.li>

            <motion.li 
            initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.3, ease: "easeOut" }}
            className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-0.5">
                <XSquareIcon size={25} color="red" />
              </span>
              Quem está acomodado com o faturamento atual
            </motion.li>

            <motion.li 
            initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.4, ease: "easeOut" }}
            className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-0.5">
                <XSquareIcon size={25} color="red" />
              </span>
              Empresas que enxergam marketing como um gasto adicional
            </motion.li>

            <motion.li 
            initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.5, ease: "easeOut" }}
            className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-0.5">
                <XSquareIcon size={25} color="red" />
              </span>
              Negócios que não suportam receber mais clientes
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}
