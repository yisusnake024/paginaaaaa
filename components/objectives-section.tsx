"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ObjetiveSectionProps {
  title: string;
  textLeft: string;
  textRight: string;
  backgroundImage: string;
  logo?: string;
}

export default function ObjetiveSection({
  title,
  textLeft,
  textRight,
  backgroundImage,
  logo,
}: ObjetiveSectionProps) {
  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🖼️ Fondo con visibilidad y adaptación completa */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Fondo de la sección"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 🔹 Degradado suave blanco translúcido */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/70 to-white/50 backdrop-blur-[1px]" />
      </div>

      {/* 📄 Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* 🔹 Columna Izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-[#68AB6A] text-white inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-br-[60px] shadow-lg">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {title}
            </h2>
          </div>

          <p className="text-gray-800 text-justify leading-relaxed whitespace-pre-line text-base sm:text-lg">
            {textLeft}
          </p>
        </motion.div>

        {/* 🔹 Columna Derecha */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-gray-800 text-justify leading-relaxed whitespace-pre-line text-base sm:text-lg">
            {textRight}
          </p>

          {logo && (
            <div className="flex justify-end mt-6">
              <Image
                src={logo}
                alt="Logo decorativo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

