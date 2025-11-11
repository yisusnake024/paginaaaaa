"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PublicacionesPagee() {
  const images = [
    { src: "/libro-1.jpg", alt: "Artículo 1" },
    { src: "/libro-2.jpg", alt: "Artículo 2" },
    { src: "/libro-3.jpg", alt: "Artículo 3" },
    { src: "/libro-4.jpg", alt: "Artículo 4" },
    { src: "/libro-5.jpg", alt: "Artículo 5" },
  ];

  const [current, setCurrent] = useState(0);

  // 🔹 Control manual del carrusel
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // 🔹 Auto-desplazamiento cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#68AB6A] text-white">
      <Header />

      <main className="flex-grow pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        {/* 🔹 Título y descripción */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Publicaciones
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            En el CIEF promovemos la difusión del conocimiento científico a través
            de publicaciones que reflejan nuestro compromiso con la innovación,
            la investigación y la transferencia del saber.
          </p>
        </section>

        {/* 🔹 Carrusel principal */}
        <section className="relative w-full overflow-hidden py-10 flex flex-col items-center">
          <div className="flex items-center justify-center w-full relative">
            {/* Flecha izquierda */}
            <button
              onClick={prevSlide}
              className="absolute left-3 sm:left-6 bg-[#F9A826] text-black p-2 sm:p-3 rounded-full shadow-md hover:bg-[#f8b742] transition z-10"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Contenedor de imágenes */}
            <div className="w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%] overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="min-w-full flex justify-center items-center bg-[#F9A826]"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-[220px] sm:h-[320px] md:h-[400px] object-contain rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Flecha derecha */}
            <button
              onClick={nextSlide}
              className="absolute right-3 sm:right-6 bg-[#F9A826] text-black p-2 sm:p-3 rounded-full shadow-md hover:bg-[#f8b742] transition z-10"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Indicadores inferiores */}
          <div className="flex justify-center mt-6 gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index ? "bg-[#F9A826]" : "bg-white/50"
                }`}
              ></button>
            ))}
          </div>
        </section>

        {/* 🔹 Botón inferior */}
        <div className="text-center mt-12">
          <a
            href="/publicaciones"
            className="inline-block bg-[#F9A826] text-black px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg shadow-md hover:bg-[#f8b742] transition"
          >
            Ver todas las publicaciones
          </a>
        </div>
      </main>

   
    </div>
  );
}



