"use client";

import { useState } from "react";

export default function MapWorld() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const handleTouch = (country: string) => {
    setActiveCountry(activeCountry === country ? null : country);
  };

  // Función para renderizar marcador reutilizable
  const Marker = ({
    name,
    left,
    top,
  }: {
    name: string;
    left: string;
    top: string;
  }) => (
    <div
      className="absolute group"
      style={{
        left,
        top,
        transform: "translate(-50%, -50%)",
      }}
      onTouchStart={() => handleTouch(name)}
    >
      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#FFB000] rounded-full shadow-md shadow-[#FFB000]/50 animate-pulse"></div>
      <div
        className={`absolute -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-300 bg-white text-black text-[10px] sm:text-xs font-semibold px-2 py-1 rounded ${
          activeCountry === name
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      >
        {name}
      </div>
    </div>
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-white p-2 sm:p-4">
      <img
        src="/mapamundipolitico.png"
        alt="Mapa del mundo"
        className="w-full h-auto object-contain"
      />

      {/* 🔹 Marcadores (todos tus países originales) */}
      <Marker name="México" left="12%" top="42%" />
      <Marker name="Venezuela" left="22%" top="51%" />
      <Marker name="Brasil" left="26%" top="62%" />
      <Marker name="Argentina" left="23%" top="80%" />
      <Marker name="Chile" left="21%" top="73%" />
      <Marker name="Perú" left="19%" top="63%" />
      <Marker name="Costa Rica" left="15%" top="50%" />
      <Marker name="Panamá" left="18%" top="52%" />
      <Marker name="Uruguay" left="26%" top="77%" />
      <Marker name="Bolivia" left="23%" top="68%" />
      <Marker name="Alemania" left="44%" top="22%" />
      <Marker name="Corea del Sur" left="76%" top="33%" />
      <Marker name="Estados Unidos" left="13%" top="29%" />
      <Marker name="China" left="70%" top="33%" />
      <Marker name="Australia" left="82%" top="75%" />
      <Marker name="Grecia" left="47%" top="29%" />
      <Marker name="India" left="64%" top="42%" />
      <Marker name="Malasia" left="74%" top="55%" />
      <Marker name="España" left="40%" top="30%" />
      <Marker name="Ecuador" left="17%" top="57%" />

      <style jsx>{`
        .animate-pulse {
          animation: pulse 2s infinite ease-in-out;
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.8;
          }
        }

        /* 📱 Ajustes para pantallas pequeñas */
        @media (max-width: 640px) {
          .group div:first-child {
            width: 10px;
            height: 10px;
          }
          .group div:last-child {
            font-size: 10px;
            padding: 1px 4px;
          }
        }
      `}</style>
    </div>
  );
}





