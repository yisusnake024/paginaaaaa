"use client";

import { motion } from "framer-motion";

export default function ValoresSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-white text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 🔹 Fondo con patrón sutil */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-orange.svg')] bg-repeat bg-center" />

      {/* 🔸 Contenedor principal */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-7xl mx-auto">
        {/* 🟢 Círculo central */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#68AB6A] shadow-xl rounded-full w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 flex items-center justify-center text-white text-3xl sm:text-4xl md:text-6xl font-extrabold mb-[-4rem] sm:mb-[-6rem] z-20 border-4 sm:border-6 md:border-8 border-[#68AB6A]"
        >
          VALORES
        </motion.div>

        {/* 🔻 Fondo verde con contenido */}
        <div className="w-full bg-[#68AB6A] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 md:px-10 rounded-t-[100px] sm:rounded-t-[150px] shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 text-left mt-8">
            {/* 🧩 Fila 1 */}
            <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold">Aprendizaje e innovación</h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Promueve una filosofía de mejora continua y creatividad
                científica, que impulsa soluciones transformadoras para los
                territorios.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold">
                Compromiso en el desarrollo sostenible
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Orienta las acciones hacia territorios equitativos y resilientes
                con enfoque en los Objetivos de Desarrollo Sostenible (ODS).
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold">Ética</h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Actúa con integridad profesional y científica, garantizando rigor
                metodológico y respeto por las comunidades en la generación y
                gestión del conocimiento.
              </p>
            </motion.div>

            {/* 🧩 Fila 2 */}
            <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold">Interculturalidad</h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Reconoce y valora la diversidad cultural y ética presente en los
                territorios, promoviendo el diálogo de saberes entre comunidades,
                academia, gobiernos y sector privado.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold">
                Internacionalización y diplomacia científica
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Impulsa la cooperación global, el diálogo científico y la
                confianza entre instituciones, territorios y naciones a través
                de la ciencia, contribuyendo con la integración regional y la
                construcción de conocimiento compartido.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold">Trabajo en red</h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Fortalece la cooperación, colaboración y articulación
                interdisciplinaria e interinstitucional, reconociendo que los
                desafíos en los territorios requieren esfuerzos colectivos.
              </p>
            </motion.div>
          </div>

          {/* 🔹 Valor centrado al final */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-12 sm:mt-16 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-lg sm:text-xl font-bold">
              Responsabilidad social e institucional
            </h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed mt-2">
              Actúa con compromiso, eficiencia y sostenibilidad en las
              decisiones, garantizando impacto positivo y buenas prácticas en
              todos los niveles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

