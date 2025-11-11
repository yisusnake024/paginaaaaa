"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

const cajas = [
  {
    img: "/documento1.jpg",
    link: "https://hdl.handle.net/20.500.12442/7091",
    title: "Policy Brief 1",
    description:
      "Documento breve que traduce la evidencia científica en recomendaciones para políticas públicas efectivas.",
  },
  {
    img: "/documento2.jpg",
    link: "https://hdl.handle.net/20.500.12442/14356",
    title: "Policy Brief 2",
    description:
      "Análisis estratégico enfocado en el desarrollo sostenible y la gestión territorial.",
  },
  {
    img: "/documento3.jpg",
    link: "https://hdl.handle.net/20.500.12442/14357",
    title: "Policy Brief 3",
    description:
      "Síntesis informativa para la toma de decisiones basada en investigación aplicada.",
  },
  {
    img: "/documento4.jpg",
    link: "https://bonga.unisimon.edu.co/items/73ea071b-25be-4c50-9903-ec709e6e635e",
    title: "Policy Brief 4",
    description:
      "Prevención de la trata de personas: Estrategias comunitarias y políticas públicas para enfrentar un delito en expansión",
  },
];

export default function PolicyLabPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#68AB6A]">
      <Header />

      {/* 🟧 Contenido principal */}
      <section className="flex-1 py-12 sm:py-16 bg-[#68AB6A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* 🔹 Título principal */}
          <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-extrabold">
            POLICY LAB
          </h1>

          {/* 🔹 Descripción introductoria */}
          <p className="text-center text-white text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
            Documentos breves que transforman el conocimiento científico en información
            accesible para tomadores de decisiones y formuladores de políticas públicas,
            facilitando una gestión basada en datos.
          </p>

          {/* 🟧 Cajas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 place-items-center">
            {cajas.map((caja, i) => (
              <a
                key={i}
                href={caja.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFB000] text-black rounded-3xl shadow-lg hover:shadow-2xl 
                           transition-all duration-300 overflow-hidden flex flex-col 
                           items-center text-center p-5 sm:p-6 w-full max-w-xs sm:max-w-sm 
                           hover:scale-[1.03]"
              >
                {/* Imagen */}
                <div className="w-full flex justify-center mb-4">
                  <Image
                    src={caja.img}
                    alt={caja.title}
                    width={220}
                    height={180}
                    className="object-contain rounded-lg"
                  />
                </div>

                {/* Contenido */}
                <h3 className="text-lg sm:text-xl font-bold mb-2">{caja.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4 px-1">
                  {caja.description}
                </p>

                <button className="bg-white text-[#68AB6A] font-semibold px-4 sm:px-5 py-2 rounded-full hover:bg-[#f9f9f9] transition">
                  Saber más
                </button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer opcional si lo usas en otras páginas */}
      {/* <Footer /> */}
    </div>
  );
}
