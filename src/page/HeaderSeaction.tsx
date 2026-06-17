import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import Logo from "../assets/Logo.png";

export function HeaderSeaction() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="MainContainer p-4 md:px-10">
      <div className="pt-10 flex items-center justify-between">
        <div>
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={Logo}
            className="w-20"
            alt="Logo"
          />
        </div>

        <header className="hidden md:block w-full">
          <nav className="flex justify-center gap-8 text-lg text-black font-montserrat">
            <motion.a
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              href="#Home"
            >
              Home
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              href="#Sobre"
            >
              Sobre
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              href="#Servicos"
            >
              Serviços
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              href="#Contato"
            >
              Contato
            </motion.a>
          </nav>
        </header>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black cursor-pointer z-50 relative">
            {isOpen ? <X size={32} /> : <List size={32} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-30 left-0 w-full rounded-lg bg-white/90 flex flex-col items-center gap-6 py-8 text-xl text-black font-montserrat z-40 md:hidden shadow-2xl"
          >
            <a href="#Home" onClick={() => setIsOpen(false)}>Home</a>
            
            <a href="#Sobre" onClick={() => setIsOpen(false)}>Sobre</a>
            <a href="#Servicos" onClick={() => setIsOpen(false)}>Serviços</a>
            <a href="#Contato" onClick={() => setIsOpen(false)}>Contato</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}