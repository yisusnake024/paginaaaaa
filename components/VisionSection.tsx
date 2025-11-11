"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-white to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 🖼️ Fondo decorativo (imagen sutil) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10"></div>

      {/* 🔹 Título principal adaptativo */}
      <h1 className="text-center text-[#68AB6A] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-14 tracking-tight">
        VISIÓN
      </h1>

      {/* 📄 Contenedor principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-stretch max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
        {/* 🔹 Contenido con imagen y texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 p-6 sm:p-10 md:p-14 text-justify text-gray-800 leading-relaxed text-base sm:text-lg flex flex-col gap-6"
        >
          {/* 🖼️ Imagen superior */}
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/cucuta_aereo.jpg"
              alt="Vista aérea de Cúcuta"
              width={1200}
              height={400}
              className="object-cover w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]"
            />
          </div>

          {/* 📝 Texto principal */}
          <div className="space-y-6">
            <p>
              Nuestra visión para el 2030: ser un centro de investigación
              transdisciplinario que interactúe con otros centros de investigación,
              impactando positivamente en el desarrollo territorial a través de la
              generación de conocimiento y su apropiación social.
            </p>

            <p>
              Buscamos aportar a innovaciones transformativas en comunidades
              fronterizas, en concordancia con los Objetivos de Desarrollo
              Sostenible (ODS), fomentando una cultura de cooperación científica
              entre Colombia y América Latina.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

