import { motion } from "framer-motion";

export function Button({ 
  texto = "Fazer um Orçamento", 
  estilo = "bg-black text-white" 
}) {
  return (
    <motion.a
      href="https://wa.me/5511985149353?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20uma%20reunião%20de%20diagnóstico%20estratégico." 
      target="_blank"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className={`px-4 py-1 rounded-full mt-4 cursor-pointer inline-block tracking-widest font-medium font-syne uppercase ${estilo}`}
    >
      {texto}
    </motion.a>
  );
}