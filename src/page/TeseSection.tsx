import { motion } from "framer-motion";
import LeaoBannerTese from "../assets/LeaoBannerTese.webp";

export function TeseSection() {
  return (
    <div className="p-4 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-syne font-bold text-4xl md:text-5xl tracking-tight"
          >
            A NOSSA TESE.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg"
          >
            Marketing bonito só faz sentido se der lucro. rejeitamos as
            estratégias genéricas e o conteúdo sem propósito.fundamentamos nossa
            operação em dados reais, modelagem de negócios e design de alta
            conversão. não somos apenas um fornecedor. somos o seu braço de
            crescimento.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <img src={LeaoBannerTese} className="w-full" alt="" />
        </motion.div>
      </div>
    </div>
  );
}
