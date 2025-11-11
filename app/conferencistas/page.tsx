"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ConferencistasPage() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const items = [
    {
      img: "/grupo_alef.jpg",
      title: "Clasificación: A1 – MINCIENCIAS (Creado en agosto de 2006)",
      grid: [
        { icon: "/1_alef.png", text: "Configuraciones sociales, económicas, ambientales y culturales en dinámicas transfronterizas" },
        { icon: "/2_alef.png", text: "Educación, ciudadanías y contextos transfronterizos" },
        { icon: "/3_alef.png", text: "Estudios jurídicos, políticos y éticos" },
        { icon: "/4_alef.png", text: "Frontera y Derechos Humanos" },
        { icon: "/5_alef.png", text: "Salud y cuidado" },
        { icon: "/6_alef.png", text: "Subjetividades, género y procesos psicosociales" },
        { icon: "/7_alef.png", text: "Tecnologías Inteligentes, Innovación y Desarrollo Territorial" },
      ],
    },
    {
      img: "/GI3A.jpg",
      title: "Clasificación: A1 – MINCIENCIAS (Creado en julio de 2005)",
      grid: [
        { icon: "/1_gi3a.png", text: "Automatización y Robótica" },
        { icon: "/2_gi3a.png", text: "Gestión de Operaciones" },
        { icon: "/3_gi3a.png", text: "Ingeniería de software" },
        { icon: "/4_gi3a.png", text: "Ciencia de Datos" },
        { icon: "/5_gi3a.png", text: "Innovación en Ciencia, Educación y Tecnología" },
        { icon: "/6_gi3a.png", text: "Modelos predictivos mediante técnicas de IA en medicina" },
        { icon: "/7_gi3a.png", text: "Sistemas Inteligentes de Ingeniería" },
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#f9faf9] via-white to-[#eef5ef] py-16 sm:py-24 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* 🔹 Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-[#68AB6A] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10"
      >
        INVESTIGACIÓN
      </motion.h1>

      {/* 🔸 Contenedor principal */}
      <div className="relative z-10 max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden p-6 sm:p-10 md:p-14">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#68AB6A] mb-10 text-center">
          Grupos y líneas de investigación
        </h3>

        {/* 🔹 Tarjetas de grupos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-[#68AB6A]/30 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-sm"
            >
              <div className="flex justify-center items-center bg-gray-100 h-48 sm:h-56 rounded-t-2xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-w-[220px] max-h-[200px] object-contain"
                />
              </div>
              <div className="p-6 flex flex-col justify-between text-center">
                <h3 className="text-base sm:text-lg font-semibold mb-4 text-[#68AB6A]">
                  {item.title}
                </h3>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="bg-[#FFB000] text-white px-6 py-2 rounded-full hover:bg-[#e2a000] transition font-semibold text-sm sm:text-base"
                >
                  Saber más
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔸 Modal responsivo */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl max-w-lg sm:max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#68AB6A] text-xl font-bold"
            >
              ✖
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#68AB6A] mb-6 text-center">
              {selectedItem.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {selectedItem.grid?.map((g: any, i: number) => (
                <div
                  key={i}
                  className="bg-[#68AB6A]/10 rounded-2xl p-5 sm:p-6 shadow-sm flex items-start gap-4 hover:bg-[#68AB6A]/20 transition"
                >
                  <img
                    src={g.icon}
                    alt={`icono-${i}`}
                    className="w-12 sm:w-16 h-12 sm:h-16 object-contain flex-shrink-0"
                  />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {g.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}



