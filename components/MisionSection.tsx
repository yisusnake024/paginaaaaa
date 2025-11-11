"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MisionSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#68AB6A] to-[#68AB6A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 🖼️ Fondo decorativo tenue */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>

      {/* 🔹 Título adaptativo */}
      <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-14 tracking-tight">
        MISIÓN
      </h1>

      {/* 📄 Contenedor principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-stretch max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
        {/* 🔸 Texto principal */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 p-6 sm:p-10 md:p-14 text-justify text-gray-800 leading-relaxed text-base sm:text-lg space-y-6"
        >
          <p>
            Somos un Centro de Investigación conformado por especialistas con
            formación científica, dedicado al estudio de las realidades y
            problemáticas en las fronteras terrestres, marítimas, aéreas,
            políticas, naturales y culturales de Colombia, América Latina y el
            mundo.
          </p>

          <p>
            Generamos conocimiento de los procesos y fenómenos sociales,
            económicos, culturales, geopolíticos, jurídicos, gubernamentales,
            demográficos, de género, salud, urbanos, rurales y del medio
            ambiente de Colombia y sus regiones limítrofes, así como de otros
            países.
          </p>

          <p>
            Transformamos el conocimiento en mecanismos para ser utilizados en
            la planeación local, regional y nacional, así como en proyectos y
            programas de políticas públicas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

