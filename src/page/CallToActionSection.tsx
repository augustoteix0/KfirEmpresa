import { Button } from "../components/Button";
import { motion } from "framer-motion";
import prc1 from "../assets/prc1.webp"

export function CallToActionSection() {
  return (
    <section className="bg-black py-32 w-full">
      <div className="MainContainer   px-4" id="Contato">
        
       
        <div className="text-white flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-3xl md:text-4xl font-bold font-syne text-center"
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

        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center gap-2 mt-16 -mb-4 text-center"
        >
          <span className="text-zinc-600 text-[10px] font-bold tracking-[0.35em] uppercase font-sans">
            Parceiros
          </span>
          <div className="opacity-20 grayscale hover:opacity-40 transition-all duration-300">
            <a href="https://www.kommo.com/br/" target="_blank">
              <img 
              src={prc1}
              alt="Logo do Parceiro" 
              className="h-8 md:h-8 w-auto object-contain"
            />
            </a>
            
          </div>
        </motion.div>
        
        <div className="h-[120px]">
          <div className="flex justify-center">
            <hr className="text-zinc-900 mt-10 w-[40rem]" />
          </div>
          <div className="text-white flex h-full flex-col md:flex-row justify-center md:justify-between text-center gap-6">
            <div className="flex flex-col justify-end ">
              <span>© 2026 KFIR Marketing. Todos os direitos reservados.</span>
            </div>
            <div className="flex items-end">
              <span className="italic">- Servir Sempre.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}