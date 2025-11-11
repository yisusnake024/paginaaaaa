"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  transparent?: boolean;
}

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "¿Quiénes Somos?", href: "/quienes_somos" },
  { name: "Investigación", href: "/investigacion" },
  { name: "Impacto y Colaboración", href: "/impacto" },
  { name: "Publicaciones y Recursos", href: "/publirecu" },
  { name: "Noticias y Eventos", href: "/notieventos" },
  { name: "Contacto ", href: "/contactos" },
];

export default function Header({ transparent = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${transparent && !isScrolled ? "bg-transparent" : "bg-white shadow-md"}
  `;

  return (
    <header className={headerClasses}>
      <nav className="max-w-[95%] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-[85px] md:h-[95px]">
          {/* 🔹 Logos (más pequeños y más a la izquierda) */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-[140px] sm:w-[160px] md:w-[180px] h-[45px] sm:h-[55px] md:h-[60px]">
                <Image
                  src="/logosimon.png"
                  alt="Logo UNISIMON"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <Link href="/" className="flex items-center">
              <div className="relative w-[100px] sm:w-[130px] md:w-[150px] h-[45px] sm:h-[55px] md:h-[60px]">
                <Image
                  src="/cief_blanco.png"
                  alt="Logo CIEF"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* 🔸 Navegación escritorio (más flexible y con menor padding) */}
          <div className="hidden lg:flex flex-wrap justify-end gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="bg-[#FFB000] text-black font-semibold px-3 py-2 rounded-full hover:bg-[#68AB6A] hover:text-white transition-all duration-300 text-sm whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 🔸 Menú móvil */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-black hover:bg-[#FFB000]/80 transition-colors"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
              </div>
            </button>
          </div>
        </div>

        {/* 🔹 Menú móvil desplegable */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white shadow-lg rounded-lg mt-2 py-4 px-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-center bg-[#FFB000] text-black font-medium py-2 rounded-full hover:bg-[#68AB6A] hover:text-white transition-all text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}


