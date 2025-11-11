"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ObjetivosSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#68AB6A] to-[#68AB6A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 🖼️ Fondo decorativo tenue */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>

      {/* 🔹 Título principal */}
      <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-14 tracking-tight">
        OBJETIVOS
      </h1>

      {/* 📄 Contenedor principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-stretch max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
        {/* 🔹 Izquierda: contenido con texto e imagen */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 p-6 sm:p-10 md:p-14 text-justify text-gray-800 leading-relaxed flex flex-col gap-8 text-base sm:text-lg"
        >
          {/* 🖼️ Imagen superior */}
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/frontera_colombia.jpg"
              alt="Frontera Colombia"
              width={1200}
              height={400}
              className="object-cover w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]"
            />
          </div>

          {/* 📝 Texto principal */}
          <div className="space-y-6">
            <p>
              1. Generar conocimiento científico de los procesos y fenómenos
              sociales, económicos, culturales, demográficos, de salud, de
              género, políticos, gubernamentales, urbanos, rurales y del medio
              ambiente de Colombia y sus regiones limítrofes.
            </p>

            <p>
              2. Transformar el conocimiento en mecanismos para ser utilizados
              en la planeación local, regional y nacional, así como en proyectos
              y programas de políticas públicas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

