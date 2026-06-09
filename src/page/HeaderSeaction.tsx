import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";

export function HeaderSeaction() {
  return (
    <div className="p-4">
      <div className="pt-10 flex items-center">
        <div>
          <motion.img
          initial={{ opacity:0, x: -50  }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
          src={Logo} className="w-20" alt="" />
        </div>
        <header className="w-full">
          <nav className="flex justify-center gap-8 text-lg">
            <motion.a
              initial={{ opacity:0, y: -50  }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
              href="#Home"
            >
              Home
            </motion.a>
            <motion.a
              initial={{ opacity:0, y: -50  }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6,delay:0.2, ease: "easeOut" }}href="#Sobre">Sobre</motion.a>
            <motion.a
              initial={{ opacity:0, y: -50  }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6,delay:0.3, ease: "easeOut" }}href="#Servicos">Serviços</motion.a>
            <motion.a
              initial={{ opacity:0, y: -50  }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6,delay:0.4, ease: "easeOut" }}href="#Contato">Contato</motion.a>
          </nav>
        </header>
      </div>
    </div>
  );
}
