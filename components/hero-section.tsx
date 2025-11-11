"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  // Imágenes en /public: hero1.jpg, hero2.jpg, hero3.jpg (ajusta nombres si quieres)
  const backgrounds = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
  ];

  const phrases = [
    "Investigación para la Frontera Viva",
    "Innovación con Impacto Social",
    "Conocimiento Fronterizo",
    "Desarrollo Sostenible",
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // rotación cada 4s (imagen + frase)
    const cycle = () => {
      setIndex((prev) => (prev + 1) % Math.max(backgrounds.length, phrases.length));
    };

    if (!paused) {
      intervalRef.current = window.setInterval(cycle, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused, backgrounds.length, phrases.length]);

  // Handler para cambiar manualmente (si quieres flechas o puntos después)
  const goTo = (i: number) => setIndex(i % Math.max(backgrounds.length, phrases.length));

  return (
    <section
      aria-label="Hero — Frontera Viva"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative h-[85vh] min-h-[520px] flex items-center justify-center overflow-hidden"
    >
      {/* Fondos rotativos (cover) */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={backgrounds[index % backgrounds.length]}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-center bg-cover bg-no-repeat will-change-transform"
            style={{
              backgroundImage: `url(${backgrounds[index % backgrounds.length]})`,
            }}
            aria-hidden
          />
        </AnimatePresence>

        {/* Overlay para contraste — usa la variable --primary que ya tienes */}
        <div className="absolute inset-0" style={{ background: "color-mix(in srgb, var(--primary) 55%, transparent)" }} />
        {/* ligera capa oscura para legibilidad */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-lg"
        >
          <span className="block">Frontera Viva</span>
        </motion.h1>

        {/* Frase animada sincronizada */}
        <div className="mt-6 h-12 md:h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={phrases[index % phrases.length]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-2xl italic text-white/95"
              aria-live="polite"
            >
              “{phrases[index % phrases.length]}”
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          Conocimiento fronterizo para un futuro sostenible. Investigación, innovación y cooperación desde la frontera Colombo-Venezolana.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quienes-somos"
            className="inline-flex items-center px-6 py-3 rounded-lg font-semibold shadow-md transition hover:opacity-95"
            style={{
              backgroundColor: "var(--accent)", // naranja vibrante
              color: "black",
            }}
          >
            Conoce más
          </Link>

          <Link
            href="/observatorio"
            className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border-2"
            style={{
              borderColor: "var(--primary)", // borde verde
              color: "white",
              backgroundColor: "transparent",
            }}
          >
            Observatorio
          </Link>
        </div>

        {/* Puntos de control (indicador de slide) */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {backgrounds.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a fondo ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-transform ${
                i === (index % backgrounds.length) ? "scale-125 ring-2 ring-white" : "opacity-60"
              }`}
              style={{
                backgroundColor: i === (index % backgrounds.length) ? "white" : "rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Decoración sutil */}
      <div className="pointer-events-none absolute -bottom-24 right-0 opacity-10 w-96 h-96 rounded-full bg-gradient-to-br from-white to-transparent blur-3xl" />
    </section>
  );
}

