"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Heroo from "@/components/heroo";

export default function InscripcionesPage() {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const items = [
    {
      img: "/Desarrollo_terriotial.jpg",
      title: "Desarrollo territorial",
      description: `Ámbitos de la Agenda Global para el Desarrollo\n
- Social: reducción de la pobreza y desigualdades, educación, igualdad de género, salud y bienestar.\n
- Económico: crecimiento económico inclusivo, trabajo decente, industria sostenible, innovación y acceso a infraestructuras resilientes.\n
- Ambiental: acción climática, protección de la biodiversidad, gestión sostenible del agua y ecosistemas, energía asequible y limpia.\n
- Institucional y gobernanza: Cultura de Paz, justicia, fortalecimiento de instituciones democráticas, cooperación para el desarrollo.\n
- Tecnológico y científico: promoción de la innovación, acceso a tecnología, digitalización e investigación para el desarrollo sostenible.`,
    },
    {
      img: "/migracionn.jpg",
      title: "Fenómenos migratorios, fronteras, lo transfronterizo y lo transnacional",
      description:
        "Ofrece nuevo conocimiento para la toma de decisiones de gobiernos y organismos internacionales, así como insumos para la intervención con impacto social transformativa, en la población nativa, migrante interna y migrante internacional en Colombia y América Latina.",
    },
    {
      img: "/Innovacion_social.jpg",
      title: "Innovación social para la transformación territorial",
      description:
        "Proceso sociotécnico en el que la dimensión social impulsa la creatividad, fortalece la competitividad, promueve una cultura de innovación y empodera a los actores responsables de gestionar y materializar las transformaciones esperadas.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#68AB6A]/20 via-[#68AB6A]/10 to-[#68AB6A]/20">
      {/* 🟢 Header */}
      <Header />

      <main className="flex-grow">
        {/* 🟩 Hero institucional */}
        <Heroo
          title="Dimensiones de trabajo"
          subtitle="El Centro de Investigación en Estudios Fronterizos contribuye con los desafíos de la gobernanza, gobernabilidad y desarrollo fronterizo en torno a tres dimensiones."
          image="/cucuta_aereo.jpg"
        />

        {/* 🔹 Cards */}
        <section className="py-16 sm:py-24 bg-[#68AB6A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-[#FFB000] rounded-2xl shadow-lg border border-[#68AB6A]/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
                >
                  <div className="h-48 sm:h-52 overflow-hidden rounded-t-2xl">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col flex-grow p-6 text-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="bg-[#68AB6A] text-white px-6 py-2 rounded-full hover:bg-[#57995c] hover:shadow-md transition-all duration-300 font-semibold text-sm sm:text-base"
                    >
                      Saber más
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 🟧 Modal responsive */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg sm:max-w-2xl w-full p-6 sm:p-8 relative text-gray-800 overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#68AB6A] text-xl font-bold"
              >
                ✖
              </button>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#68AB6A] mb-4 text-center sm:text-left">
                {selectedItem.title}
              </h2>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm sm:text-base">
                {selectedItem.description}
              </p>
            </motion.div>
          </div>
        )}
      </main>

     
    </div>
  );
}
