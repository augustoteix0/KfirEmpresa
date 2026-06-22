import { CalendarCheckIcon, XSquareIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";

export function CriteriosSections() {
  return (
    <section className="bg-black py-32 w-full">
      <div className="MainContainer flex flex-col gap-10 px-4 md:px-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-syne text-3xl md:text-4xl font-bold text-center text-white"
          >
            CRITÉRIOS DE SELEÇÃO.
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
          <div className="flex flex-col gap-4 rounded-2xl p-8 border border-zinc-800 shadow-xl">
            <motion.h3
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="upercase text-center font-syne font-bold text-2xl text-white"
            >
              Quem buscamos
            </motion.h3>
            <ul className="flex flex-col gap-2 text-white">
              <motion.li
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex items-start gap-2"
              >
                <span className="flex-shrink-0 mt-0.5">
                  <CalendarCheckIcon size={25} color="#22c55e" />
                </span>
                Empresas que enxergam o marketing como investimento, não como
gasto
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex items-start gap-2"
              >
                <span className="flex-shrink-0 mt-0.5">
                  <CalendarCheckIcon size={25} color="#22c55e" />
                </span>
                Líderes comprometidos com crescimento sustentável e de longo
prazo
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex items-start gap-2"
              >
                <span className="flex-shrink-0 mt-0.5">
                  <CalendarCheckIcon size={25} color="#22c55e" />
                </span>
                Negócios prontos para receber mais clientes e escalar com
estrutura
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="flex items-start gap-2"
              >
                <span className="flex-shrink-0 mt-0.5">
                  <CalendarCheckIcon size={25} color="#22c55e" />
                </span>
                Quem valoriza verdade, método e processo acima de promessas
rápidas
              </motion.li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-2xl p-8">
            <motion.h3
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="upercase text-center font-syne font-bold text-2xl"
            >
              Quem Rejeitamos
            </motion.h3>
            <ul className="flex flex-col gap-2">
              <motion.li
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex items-start gap-2"
              >
                <span className="flex-shrink-0 mt-0.5">
                  <XSquareIcon size={25} color="red" />
                </span>
                Quem busca resultado imediato sem comprometimento com o
processo
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex items-start gap-2"
              >
                <span className="flex-shrink-0 mt-0.5">
                  <XSquareIcon size={25} color="red" />
                </span>
                Empresas que não estão dispostas a mudar processos internos
para crescer
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex items-start gap-2"
              >
                <span className="flex-shrink-0 mt-0.5">
                  <XSquareIcon size={25} color="red" />
                </span>
                Quem está acomodado com o faturamento atual e não quer crescer
de verdade
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="flex items-start gap-2"
              >
                <span className="flex-shrink-0 mt-0.5">
                  <XSquareIcon size={25} color="red" />
                </span>
                Negócios que esperam fórmulas mágicas no lugar de estratégia real
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Button estilo="bg-white text-black"/>
      </div>
    </section>
  );
}
