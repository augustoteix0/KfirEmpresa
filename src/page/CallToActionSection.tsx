import { Button } from "../components/Button";
import { motion } from "framer-motion";

export function CallToActionSection() {
  return (
    <section className="bg-black py-32 w-full">
      <div className="MainContainer  px-4" id="Contato">
        <div className="text-white flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white font-syne text-3xl md:text-4xl font-bold text-center"
          >
            O PRÓXIMO CICLO DE CRESCIMENTO DO SEU NEGÓCIO COMEÇA AGORA.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center text-md leading-5"
          >
            Se a sua empresa está pronta para atrair mais clientes, <br />{" "}
            passar mais profissionalismo e vender em escala, nós temos a
            estratégia.
          </motion.p>
          <div className="flex justify-center pt-4">
            <Button texto="Fazer um Orçamento" estilo="bg-white text-black" />
          </div>
        </div>
        <div className="h-[200px]">
          <div className="flex justify-center">
            <hr className="text-zinc-900 mt-10 w-[40rem]" />
          </div>
          <div className="text-white flex h-full flex-col md:flex-row justify-center md:justify-between text-center gap-6">
            <div className="flex flex-col justify-end ">
              <span>contato@suaagencia.com</span>
              <span>segunda a sexta — 09h às 18h</span>
            </div>
            <div className="flex items-end">
              <span>© 2026 sua agência. todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
