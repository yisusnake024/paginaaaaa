"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const anios = [
  { year: 2023, link: "/2023" },
  { year: 2024, link: "/2024" },
  { year: 2025, link: "/2025" },
];

export default function AniosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-20">
        {/* 🔹 Hero Section */}
        <section className="relative py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#68AB6A]/10 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#68AB6A] mb-4 sm:mb-6">
                Eventos internacionales
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Conoce los principales eventos y colaboraciones del CIEF a nivel global.
              </p>
            </div>
          </div>
        </section>

        {/* 🔸 Grid de Años */}
        <section className="py-16 bg-[#68AB6A]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {anios.map((anio, i) => (
                <Link
                  key={i}
                  href={anio.link}
                  className="bg-[#FFB000] rounded-2xl shadow-lg hover:shadow-2xl 
                             transition-all duration-300 transform hover:-translate-y-1 
                             flex flex-col items-center justify-center p-10 text-center 
                             hover:scale-[1.03]"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                    {anio.year}
                  </h2>
                  <span className="text-sm sm:text-base font-medium text-black">
                    Ver Eventos
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

    
      
    </div>
  );
}
