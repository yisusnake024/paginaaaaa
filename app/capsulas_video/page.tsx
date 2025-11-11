"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function VideosPage() {
  const videos = [
    { title: "Contextos y realidades ciudadanas, bases para el desarrollo sostenible", url: "https://www.youtube.com/embed/xTWdHIPrXWI" },
    { title: "Prácticas sociales de paz", url: "https://www.youtube.com/embed/K6bHO8Nelzo" },
    { title: "Estrategias para la Construcción de Paz en Colombia", url: "https://www.youtube.com/embed/5Fyi4TxETiE" },
    { title: "Los procesos sociales en la gestión social universitaria", url: "https://www.youtube.com/embed/1qHAvmYphIo" },
    { title: "Panorama actual de la educación inclusiva", url: "https://www.youtube.com/embed/W7QBWw9FZ-E" },
    { title: "Tendencias de la administración global", url: "https://www.youtube.com/embed/CTd9pfpVgLA" },
    { title: "Perspectivas sociales, jurídicas y económicas desde la frontera", url: "https://www.youtube.com/embed/cQ11XjfxY3k" },
    { title: "Migración, una mirada binacional desde lo humanitario", url: "https://www.youtube.com/embed/NLDpuW3sRL0" },
    { title: "Análisis de coyunturas fronterizas en y desde Colombia", url: "https://www.youtube.com/embed/hB2rffUzulM" },
    { title: "Frontera y Salud Mental", url: "https://www.youtube.com/embed/cDXNi-M6hSo" },
    { title: "Autoconfianza de los Emprendedores Migrantes Venezolanos en Colombia", url: "https://www.youtube.com/embed/8eiQ0SdRiq8" },
    { title: "Investigación en Intervención Regresiva Reconstructiva (TRR) en el Consumo de Tabaco", url: "https://www.youtube.com/embed/yq3lAnp_L1U" },
  ];

  const cajas = [
    { img: "/tabaco1.jpg", link: "https://bonga.unisimon.edu.co/items/6f129b6c-ecce-4933-bf7a-57f9bbfe4d24", title: "Frases informativas sobre el tabaquismo" },
    { img: "/tabaco2.png", link: "https://bonga.unisimon.edu.co/items/e27a9a6b-e1ea-4a69-a7e9-f1ce930e7824", title: "Visualización guiada de tabaquismo" },
  ];

  return (
    <div className="min-h-screen bg-[#68AB6A] flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6">
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            {/* 🔹 Título */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-10">
              Cápsulas de video
            </h1>

            {/* 🔸 Grid de videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto mb-16">
              {videos.map((video, i) => (
                <div
                  key={i}
                  className="bg-[#FFB000] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
                             transition transform hover:scale-[1.03] flex flex-col"
                >
                  {/* Contenedor del iframe */}
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>

                  {/* Título del video */}
                  <div className="p-4 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* 🔹 Cajas inferiores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {cajas.map((caja, i) => (
                <a
                  key={i}
                  href={caja.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFB000] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl 
                             transition transform hover:scale-[1.03] flex flex-col items-center 
                             p-6 text-center"
                >
                  <img
                    src={caja.img}
                    alt={`Caja ${i + 1}`}
                    className="max-h-[200px] sm:max-h-[240px] object-contain mb-4 rounded-lg"
                  />
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {caja.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 🟠 Footer */}
      <footer className="bg-[#FFB000] text-black py-10 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

