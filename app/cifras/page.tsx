"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CiefCifrasPage() {
  const cifras = [
    { label: "Proyectos", value: 24 },
    { label: "Artículos científicos", value: 125 },
    { label: "Libros de investigación", value: 10 },
    { label: "Capítulos de libro", value: 22 },
    { label: "Eventos científicos", value: 68 },
    { label: "Redes de conocimiento", value: 20 },
    { label: "Innovaciones", value: 6 },
    { label: "Policy Briefs", value: 4 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#68AB6A]">
      <Header />

      <main className="flex-grow">
        {/* 🔹 Título principal */}
        <section className="text-center py-12 sm:py-16 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
          >
            CIEF en Cifras
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl mx-auto text-base sm:text-lg text-black/90 leading-relaxed"
          >
            Producción científica, innovación y formación articuladas entre los grupos de investigación{" "}
            <strong>ALEF</strong> y <strong>GI3A</strong>.
          </motion.p>
        </section>

        {/* 🔸 Cifras principales */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {cifras.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#F9A826] rounded-xl shadow-lg p-6 sm:p-8 w-48 sm:w-56 md:w-60 text-center cursor-default 
                           hover:scale-[1.05] hover:shadow-2xl transition-all duration-300"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white">{item.value}</h2>
                <p className="text-sm sm:text-base font-semibold text-black">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔹 Enlaces a los grupos */}
        <section className="bg-white text-center py-12 sm:py-16 px-4 rounded-t-[40px] shadow-inner">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-[#68AB6A] mb-8"
          >
            Ver cifras por grupo de investigación
          </motion.h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <Link
              href="/galeria"
              className="bg-[#F9A826] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold 
                         hover:bg-[#fdbf4a] hover:scale-[1.05] shadow-md transition-all duration-300"
            >
              Grupo ALEF
            </Link>

            <Link
              href="/cifras_gi3a"
              className="bg-[#F9A826] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold 
                         hover:bg-[#fdbf4a] hover:scale-[1.05] shadow-md transition-all duration-300"
            >
              Grupo GI3A
            </Link>
          </div>
        </section>
      </main>

      {/* Opcional si deseas incluir el pie de página */}
      {/* <Footer /> */}
    </div>
  );
}
