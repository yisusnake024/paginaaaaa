"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function DivulgacionPage() {
  const redes = [
    {
      nombre: "Instagram",
      icono: <FaInstagram className="text-5xl sm:text-6xl text-black" />,
      enlace: "https://www.instagram.com/cief.unisimon/",
      descripcion:
        "Síguenos para conocer nuestras actividades, eventos y noticias.",
    },
    {
      nombre: "YouTube",
      icono: <FaYoutube className="text-5xl sm:text-6xl text-black" />,
      enlace: "https://www.youtube.com/@CIEFUnisimon",
      descripcion:
        "Explora nuestros videos, entrevistas y cápsulas informativas.",
    },
    {
      nombre: "X (Twitter)",
      icono: <FaTwitter className="text-5xl sm:text-6xl text-black" />,
      enlace: "https://twitter.com/cief_unisimon",
      descripcion:
        "Entérate de las novedades y proyectos del CIEF en tiempo real.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 🟢 Header */}
      <Header />

      {/* 🟩 Contenido principal */}
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* 🔹 Título */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#68AB6A] mb-6">
            Divulgación Pública de la Ciencia
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#68AB6A]/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Conoce nuestros canales oficiales donde compartimos contenido
            científico, educativo y divulgativo para toda la comunidad.
          </p>

          {/* 🔸 Cajas de redes sociales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {redes.map((red, i) => (
              <a
                key={i}
                href={red.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFB000] rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.05] 
                           transition-all duration-300 flex flex-col items-center justify-center 
                           text-center p-6 sm:p-8 w-full max-w-xs sm:max-w-sm"
              >
                <div className="mb-4">{red.icono}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                  {red.nombre}
                </h3>
                <p className="text-sm sm:text-base text-black/80 leading-snug">
                  {red.descripcion}
                </p>
              </a>
            ))}
          </div>

          {/* 🔹 Botón inferior */}
          <div className="mt-16">
            <Link
              href="/capsulas_video"
              className="inline-block bg-[#FFB000] text-black font-semibold px-6 sm:px-8 py-3 
                         rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Cápsulas de video
            </Link>
          </div>
        </div>
      </main>

     
    </div>
  );
}
