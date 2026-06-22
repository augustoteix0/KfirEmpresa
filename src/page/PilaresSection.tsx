import pilares1 from "../assets/pilares1.webp";
import pilar2 from "../assets/pilar2.webp";
import pilar3 from "../assets/pilar3.webp";
import { Button } from "../components/Button";
import { motion } from "framer-motion";

export function PilaresSection() {
  return (
    <section className="py-32 bg-black w-full">
      <div className="MainContainer px-4 md:px-10">
        <div className="max-w-[1120px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="uppercase text-3xl md:text-4xl font-bold font-syne text-center text-white mb-20 tracking-tight"
          >
            Os Pilares de Crescimento
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl md:scale-95 flex flex-col justify-between h-full min-h-[420px]"
            >
              <div>
                <span className="text-xl font-syne font-bold text-white block mb-3 tracking-wider uppercase">
                  Performance
                </span>
                <p className="font-montserrat text-zinc-400 text-md leading-relaxed">
                  Sua verba vai exatamente para onde seu cliente está
                </p>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-black">
                <img
                  src={pilares1}
                  alt="Mídia Paga"
                  className="w-full h-auto object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-white border-4 border-white p-6 rounded-2xl md:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.25)] flex flex-col justify-between h-full min-h-[420px]"
            >
              <div>
                <span className="text-xl font-syne font-bold text-black block mb-3 tracking-wider">
                  POSICIONAMENTO
                </span>
                <p className="font-montserrat text-zinc-900 text-base font-medium leading-relaxed">
                  Construção de autoridade corporativa e produção audiovisual
                  premium.
                </p>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white">
                <img
                  src={pilar2}
                  alt="Posicionamento"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl md:scale-95 flex flex-col justify-between h-full min-h-[420px]"
            >
              <div>
                <span className="text-xl font-syne font-bold text-white block mb-3 tracking-wider uppercase">
                  Ecossistemas Digitais
                </span>
                <p className="font-montserrat text-zinc-400 text-md leading-relaxed">
                  Desenvolvimento focado em conversão e experiência.
                </p>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-black">
                <img
                  src={pilar3}
                  alt="Engenharia Web"
                  className="w-full h-auto object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <Button texto="Fazer um Orçamento" estilo="bg-white text-black" />
        </div>
      </div>
    </section>
  );
}
