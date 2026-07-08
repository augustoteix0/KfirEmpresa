import Whatsapp from "../assets/Whatsapp.webp";
import Sheets from "../assets/Sheets.webp";
import n8n from "../assets/n8n.webp";
import Cloude from "../assets/Cloude.webp";
import ClickUp from "../assets/ClickUp.webp";
import GoogleDrive from "../assets/GoogleDrive.webp";
import kommo from "../assets/Kommoo.webp";
import meta from "../assets/Meta.webp";

import { motion } from "framer-motion";

export function LogoCarousel() {
  const logos = [
    Whatsapp,
    Sheets,
    n8n,
    Cloude,
    ClickUp,
    GoogleDrive,
    kommo,
    meta,
  ];

  return (
    <section className="w-full py-10">
  <div className="mb-8 text-center">
    <h2 className="font-syne font-bold text-xl md:text-3xl tracking-tight">
      Somos <span className=" bg-black text-white p-1 py-0 rounded-md">Experts</span> das Maiores Plataformas do Mercado!
    </h2>
  </div>

  <div className="overflow-hidden md:hidden">
    <motion.div
      className="flex w-max gap-6 pt-2 pb-8"
      animate={{
        x: ["0%", "-50%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      }}
    >
      {[...logos, ...logos].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt=""
          className="h-14 w-14 rounded-xl object-contain shadow-xl/30"
        />
      ))}
    </motion.div>
  </div>

  <div className="hidden justify-center md:flex">
    <div className="flex flex-wrap items-center justify-center gap-10 py-6">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt=""
          className="h-16 w-16 rounded-xl object-contain shadow-xl/30 transition-transform duration-300 hover:scale-110"
        />
      ))}
    </div>
  </div>
</section>
  );
}