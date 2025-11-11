"use client";

import { motion } from "framer-motion";

export default function EurekaSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#f8faf8] to-[#e9f3ea] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* 🌿 Fondo decorativo con patrón suave */}
      <div className="absolute inset-0 bg-[url('/images/pattern-green.svg')] opacity-10 bg-repeat bg-center" />

      {/* 📄 Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* 🔸 Título animado */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#68AB6A] px-2"
        >
          Distrito de Conocimiento EUREKA
        </motion.h2>

        {/* Línea decorativa */}
        <div className="w-20 sm:w-24 h-1 bg-[#68AB6A] rounded-full mt-3 sm:mt-4 mb-8 sm:mb-10" />

        {/* 🔹 Contenedor del texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl"
        >
          <p className="mb-6 text-justify">
            El Centro de Investigación en Estudios Fronterizos – <strong>CIEF</strong>, 
            es un centro dependiente de la Universidad Simón Bolívar – <strong>UNISIMON</strong>, 
            creado el <strong>4 de agosto de 2021</strong>, según Resolución Rectoral 21.
          </p>

          <p className="mb-6 text-justify">
            La UNISIMON cuenta con el <strong>Distrito de Conocimiento e Innovación EUREKA</strong>,
            adscrito a la Vicerrectoría de Investigación, Extensión e Innovación, 
            el cual articula proyectos de ciencia, tecnología e innovación al servicio de la sociedad.
          </p>

          <p className="text-justify">
            <strong>EUREKA</strong> es un espacio para impulsar la generación de mecanismos y actividades
            de cooperación y colaboración tecnológica e innovadora con impacto positivo,
            involucrando a todos los agentes de la quíntuple hélice de la Innovación Abierta.
            Está conformado por seis (6) centros de investigación, desarrollo tecnológico e innovación,
            de los cuales el <strong>CIEF</strong> forma parte activa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
