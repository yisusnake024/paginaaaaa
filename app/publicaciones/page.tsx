"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PublicacionesPage() {
  const publicaciones = [
    { img: "/libro-1.jpg", link: "https://bonga.unisimon.edu.co/items/fd454fb3-b0ca-4540-96cb-9cfdbc975d3f" },
    { img: "/libro-2.jpg", link: "https://bonga.unisimon.edu.co/items/b8be5f3b-d353-452e-b944-f6fddabbf664" },
    { img: "/libro-3.jpg", link: "https://books.google.com.mx/books?id=i3DFEAAAQBAJ" },
    { img: "/libro-4.jpg", link: "https://www.researchgate.net/publication/375519723_MIGRACION_Y_SALUD_REFLEXIONES_EN_CONTEXTOS_DE_ALTA_MOVILIDAD_LOS_CASOS_DE_MEXICO_Y_VENEZUELA" },
    { img: "/libro-5.jpg", link: "https://publicaciones.uexternado.edu.co/gpd-sujetos-de-reparacion-colectiva-y-construccion-de-territorios-de-paz-9789587903348.html" },
    { img: "/libro-6.jpg", link: "https://www.uexternado.edu.co/sujetos-de-reparacion-colectiva-y-construccion-de-territorios-de-paz-ii/" },
    { img: "/libro-7.jpg", link: "https://bonga.unisimon.edu.co/items/df5ab2a7-594c-4bc6-a41b-19e114ce59d1" },
    { img: "/libro-8.jpg", link: "https://bonga.unisimon.edu.co/items/8de57865-de89-4665-a89f-f1593382d67c" },
    { img: "/libro-9.jpg", link: "https://bonga.unisimon.edu.co/items/53f99cb0-f3f8-40d2-8b4f-e4d4230b1355" },
    { img: "/libro-10.jpg", link: "https://bonga.unisimon.edu.co/items/9b2fa6a6-a570-4377-803e-5a36a92f2eb2" },
    { img: "/libro-11.jpg", link: "https://bonga.unisimon.edu.co/items/fd7f606b-7be6-472c-b8bc-59cd15f26509" },
    { img: "/libro-12.jpg", link: "https://librosoa.unam.mx/bitstream/handle/123456789/3616/Fronteras.pdf" },
    { img: "/libro-13.jpg", link: "https://odisef.org/wp-content/uploads/2022/07/Salud-sexual-y-reproductiva-de-las-caminantes-venezolanas-que-migran-y-retornan-.pdf" },
    { img: "/libro-14.jpg", link: "https://bonga.unisimon.edu.co/items/8c32e83b-8462-4937-9098-65d8622627e9" },
    { img: "/libro-15.jpg", link: "https://bonga.unisimon.edu.co/items/04db326b-8808-427d-a9a0-2a10bef46379" },
    { img: "/libro-16.jpg", link: "https://bonga.unisimon.edu.co/items/77a1a88f-9007-4e0d-9dab-eba0c2220153" },
    { img: "/libro-17.jpg", link: "https://www.kas.de/documents/287914/0/Fronteras+en+Alerta.pdf" },
    { img: "/libro-18.jpg", link: "https://www.kas.de/documents/287914/0/Ruta+Pais+2-2020-Final.pdf" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#68AB6A] text-white">
      <Header />

      <main className="flex-grow pt-20 pb-16 px-4 sm:px-6 lg:px-10">
        <section className="py-10">
          <div className="max-w-7xl mx-auto">
            {/* 🔹 Título principal */}
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">
              Publicaciones
            </h1>

            {/* 🔸 Grid de publicaciones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {publicaciones.map((pub, i) => (
                <a
                  key={i}
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#FFB000] shadow-lg overflow-hidden 
                             hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 
                             flex flex-col"
                >
                  {/* Imagen */}
                  <div className="h-60 sm:h-72 md:h-80 w-full flex items-center justify-center bg-white/10">
                    <img
                      src={pub.img}
                      alt={`Libro ${i + 1}`}
                      className="h-full w-full object-contain rounded-t-xl p-2"
                    />
                  </div>

                  {/* Texto */}
                  <div className="p-3 sm:p-4 text-center bg-[#FFB000]">
                    <span className="text-black font-semibold text-xs sm:text-sm uppercase tracking-wide">
                      Ver más
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </div>
  );
}
