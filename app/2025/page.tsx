"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Videos2025Page() {
  const videos = [
    {
      title:
        "Panel 1: El desplazamiento forzado en Colombia. Caso: desplazamiento forzado desde el Catatumbo en 2025\nFecha: 26 de mayo de 2025",
      url: "https://www.youtube.com/embed/ccCoFe0aC7k",
    },
    {
      title:
        "Panel 2: El desplazamiento forzado en América Latina, con perspectivas desde México\nFecha: 27 de mayo de 2025",
      url: "https://www.youtube.com/embed/8u3gDOarlsU",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#68AB6A] text-white">
      {/* 🟢 Header */}
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* 🔹 Título principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
              Eventos 2025
            </h1>

            {/* 🔸 Grid responsive de videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {videos.map((video, i) => (
                <div
                  key={i}
                  className="bg-[#FFB000] rounded-2xl shadow-lg overflow-hidden 
                             hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] 
                             flex flex-col"
                >
                  {/* 🎥 Video embebido */}
                  <div className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px]">
                    <iframe
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>

                  {/* 📝 Descripción */}
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-black whitespace-pre-line">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 🟠 Footer */}
      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </div>
  );
}

