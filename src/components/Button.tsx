import { motion } from "framer-motion";

export function Button({ variantClass = "bg-black text-white" }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay:0.6, ease: "easeOut" }}
      className={`px-4 py-1 rounded-full mt-4 cursor-pointer inline-block tracking-widest font-medium font-syne ${variantClass}`}
    >
      Fazer um Orçamento
    </motion.a>
  );
}
