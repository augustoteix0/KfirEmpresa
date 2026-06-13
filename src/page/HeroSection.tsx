import { Button } from "../components/Button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="MainContainer px-4 md:px-10">
      <div className="flex flex-col items-center justify-center h-[500px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-syne font-bold text-lg md:text-4xl text-center leading-7 pb-2"
        >
          CONSTRUÍMOS O FUTURO DIGITAL DA SUA MARCA.
        </motion.h1>
        <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay:0.2, ease: "easeOut" }}
        className="lowercase text-center leading-4 text-xs md:text-lg pt-2">
          ESTRATÉGIA, TRÁFEGO PAGO E POSICIONAMENTO PARA EMPRESAS <br className="md:block hidden"/>
          QUE BUSCAM LIDERANÇA DE MERCADO.
        </motion.p>
        <Button />
      </div>
    </div>
  );
}
