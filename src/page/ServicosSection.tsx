import trafego from "../assets/trafego.webp";
import conteudo from "../assets/conteudo.webp";
import Sites from "../assets/Sites.webp";
import operacional from "../assets/operacional.webp";

import { motion } from "framer-motion";

export function ServicoSection() {
  return (
    <div className="MainContainer p-4 md:px-10 py-32" id="Servicos">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="uppercase text-3xl md:text-4xl font-bold font-syne text-center tracking-tight pb-10"
        >
          OPERAÇÃO COMPLETA. DA ATRAÇÃO À <br /> ÚLTIMA LINHA DE LUCRO.
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 gap-10 ">
        <div className="md:flex md:flex-row flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img src={trafego} alt="" className="w-[200px] md:w-[600px]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center gap-4"
          >
            <h3 className="font-syne text-2xl font-bold leading-6">
              CONTEÚDOS ESTRATÉGICOS E <br /> POSICIONAMENTO
            </h3>
            <p>
              Oferecemos desde a estratégia editorial ao roteiro, da captação
              audiovisual à edição, da copy à gestão das redes — a KFIR cuida de
              tudo. Para que sua marca pare de competir por atenção e comece a
              ser lembrada por autoridade.
            </p>
          </motion.div>
        </div>
        <div className="md:flex md:flex-row flex-col">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center md:hidden"
          >
            <img src={conteudo} alt="" className="w-[200px] md:w-[600px]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center gap-4"
          >
            <h3 className="font-syne text-2xl font-bold leading-6">
              TRÁFEGO PAGO
            </h3>
            <p>
              Trabalhamos com Meta Ads e Google Ads orientados por dados reais —
              CAC, LTV e ROI — para que cada real investido vá direto para onde
              seu cliente está. Sem achismo, sempre encurtando o caminho entre o
              anúncio e o aperto de mão.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="hidden md:flex"
          >
            <img src={conteudo} alt="" className="w-[200px] md:w-[600px]" />
          </motion.div>
        </div>
        <div className="md:flex md:flex-row flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img src={Sites} alt="" className="w-[200px] md:w-[600px]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center gap-4"
          >
            <h3 className="font-syne text-2xl font-bold leading-6 uppercase">
              Sites e Ecossistemas Digitais
            </h3>
            <p>
              Desenvolvemos sites institucionais e landing pages pensados desde
              o primeiro píxel para carregar rápido, reter o visitante e
              transformar interesse em oportunidade real de negócio. Estrutura
              sólida, experiência fluida, resultado mensurável.
            </p>
          </motion.div>
        </div>
        <div className="md:flex md:flex-row flex-col">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center md:hidden"
          >
            <img src={operacional} alt="" className="w-[200px] md:w-[600px]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center gap-4"
          >
            <h3 className="font-syne text-2xl font-bold leading-6 uppercase">
              fluxo de automação <br /> com ia <br />
              <span className="text-sm font-bold">
                (Automações Operacionais):
              </span>
            </h3>
            <p>
              A KFIR organiza o funcionamento interno da sua empresa com as
              ferramentas certas. Integrando um CRM, automações com N8N,
              integrações de API e agentes de Inteligência Artificial — tudo
              conectado para que você gaste seu tempo com o que importa, não em
              tarefas repetitivas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="hidden md:flex"
          >
            <img src={operacional} alt="" className="w-[200px] md:w-[600px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
