"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle: string
  image: string
}

export default function Heroo({ title, subtitle, image }: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* 🖼️ Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* 🌤️ Capa de degradado translúcido */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/60 to-white/40 backdrop-blur-[2px]" />
      </div>

      {/* 📄 Contenido principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        
        {/* 🔹 Columna izquierda: título y subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* 🟩 Título con fondo verde */}
          <div className="bg-[#68AB6A] text-white inline-block px-8 py-4 rounded-br-[60px] shadow-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {title}
            </h1>
          </div>

          {/* 🔸 Subtítulo */}
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
            {subtitle}
          </p>
        </motion.div>

      </div>
    </section>
  )
}
