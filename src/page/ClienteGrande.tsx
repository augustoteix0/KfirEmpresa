import { motion } from "framer-motion";
import  Gavioesimg  from '../assets/GavioesImg.webp'

export function ClienteGrandeSection() {
    return (
        <section className="py-32 bg-white text-black p-4 md:px-10 overflow-hidden ">
      <div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
          initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-md md:text-xl font-normal font-syne text-center tracking-tight pb-10">
              Projetos de Alto Impacto
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-syne uppercase tracking-tight">
              Academia <br /> Gaviões
            </h2>
          </motion.div>
          <div className="flex gap-8 border-l border-zinc-800 pl-6 md:h-12 items-center">
            <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="font-syne text-xl font-bold text-zinc-800">2026</p>
              <p className="font-montserrat text-xs text-zinc-800 uppercase">Ano</p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.2, ease: "easeOut" }}
            >
              <p className="font-syne text-xl font-bold text-zinc-800">Premium</p>
              <p className="font-montserrat text-xs text-zinc-800 uppercase">Posicionamento</p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-5 flex flex-col gap-8"
          >
            <div>
              <h3 className="font-syne text-xl font-bold uppercase tracking-wider text-black mb-2">
                O Desafio
              </h3>
              <p className="font-montserrat text-black text-base leading-relaxed">
                Traduzir a grandiosidade e a energia da rede de Academias Gaviões para o ambiente digital, atraindo o público certo através de uma experiência audiovisual imersiva.
              </p>
            </div>

            <div className="border-t border-zinc-900 pt-6">
              <h3 className="font-syne text-xl font-bold uppercase tracking-wider text-black mb-4">
                O que entregamos
              </h3>
              <ul className="flex flex-col gap-3 font-montserrat text-sm text-black">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Direção audiovisual e captação de vídeos em alta resolução.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Estratégia de posicionamento de marca premium nas redes sociais.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Ecossistema digital de alta performance focado em conversão.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <div className="relative group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-[0_0_50px_rgba(255,255,255,0.03)] cursor-pointer">
              <img 
                src={Gavioesimg} 
                alt="Produção Audiovisual Academia Gaviões" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-300"
              />
              
            </div>
          </motion.div>

        </div>

      </div>
    </section>
    )
}