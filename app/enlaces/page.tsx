"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState } from "react";

const categorias = [
  {
    titulo: "Políticas Nacionales y Documentos CONPES",
    enlaces: [
      { label: "Agenda 2030. Objetivos de Desarrollo Sostenible (ODS)", href: "https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/" },
      { label: "CONPES 4069: Nueva política de Ciencia, Tecnología e Innovación (2022-2031)", href: "https://minciencias.gov.co/conpes-4069-nueva-politica-ciencia-tecnologia-e-innovacion-2022-2031" },
      { label: "CONPES 4144: Política Nacional de Inteligencia Artificial", href: "https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4144.pdf" },
      { label: "CONPES 4145: Lineamientos de política para el marco de inversión en I+D", href: "https://sisconpes.dnp.gov.co/SisCONPESWeb/AccesoPublico/Documento/?id=NDE0NSQxNy8wMi8yMDI1JExpbmVhbWllbnRvcyBkZSBQb2zDrXRpY2EgcGFyYSBlbCBNYXJjbyBkZSBJbnZlcnNpw7NuIGVuIEkrRCAkaHR0cHM6Ly9jb2xhYm9yYWNpb24uZG5wLmdvdi5jby9DRFQvQ29ucGVzL0Vjb27Ds21pY29zLzQxNDUucGRmJCQ=" },
      { label: "Convocatoria Nacional de Actualización y Transición para el Reconocimiento y Medición de Grupos de Investigación", href: "https://minciencias.gov.co/convocatorias/investigacion/convocatoria-nacional-actualizacion-y-transicion-para-el-reconocimiento" },
    ],
  },

  {
    titulo: "Políticas de Investigación e Innovación (PIOM)",
    enlaces: [
      { label: "PIOM Misión Bioeconomía y Territorio", href: "https://minciencias.gov.co/sites/default/files/upload/noticias/1._documento_de_politica_bioeconomia_y_territorio.pdf" },
      { label: "PIOM Misión Derecho Humano a la Alimentación", href: "https://minciencias.gov.co/sites/default/files/upload/noticias/2._documento_de_politica_-_dha_hc.pdf" },
      { label: "PIOM Misión Transición Energética", href: "https://minciencias.gov.co/sites/default/files/upload/noticias/3._documento_de_politica_transicion_energetica.pdf" },
      { label: "PIOM Misión Soberanía Sanitaria y Bienestar Social", href: "https://minciencias.gov.co/sites/default/files/upload/noticias/4._documento_de_politica_soberania_sanitaria.pdf" },
      { label: "PIOM Misión Ciencia Para La Paz", href: "https://minciencias.gov.co/sites/default/files/upload/noticias/5._documento_de_politica_ciencia_para_la_paz.pdf" },
    ],
  },

  {
    titulo: "Planes de Desarrollo",
    enlaces: [
      { label: "Plan de Desarrollo Nacional 2022-2026. Colombia potencia mundial de la vida", href: "https://colaboracion.dnp.gov.co/CDT/Prensa/Publicaciones/plan-nacional-de-desarrollo-2022-2026-colombia-potencia-mundial-de-la-vida.pdf" },
      { label: "Plan de Desarrollo para Norte de Santander 2024-2027. Norte, Territorio De Paz", href: "https://administrador.nortedesantander.gov.co/wp-content/uploads/2024/05/5-PDD-2024-2027-PO-016-2024.pdf" },
      { label: "Plan de Desarrollo 2024-2027. Atlántico para el Mundo", href: "https://www.atlantico.gov.co/index.php/listado-general-de-planes/85-plandesarrollo/23795-plan-de-desarrollo-2023-2027" },
    ],
  },

  {
    titulo: "Políticas Migratorias y Sociales",
    enlaces: [
      { label: "Municipios PDET y ZOMAC", href: "https://www.obrasximpuestos.com/municipios-pdet-zomac/" },
      { label: "Política integral migratoria | Cancillería", href: "https://www.cancilleria.gov.co/colombia/migracion/politica" },
      { label: "Población-migrante (Ministerio de Salud)", href: "https://www.minsalud.gov.co/proteccionsocial/promocion-social/Paginas/Poblacion-migrante.aspx" },
    ],
  },

  {
    titulo: "Organismos Internacionales",
    enlaces: [
      { label: "CEPAL", href: "https://www.cepal.org/es" },
      { label: "Banco Mundial", href: "https://www.bancomundial.org/ext/es/home" },
      { label: "BID | Banco Interamericano de Desarrollo", href: "https://www.iadb.org/es" },
      { label: "CAF | Banco de Desarrollo de América Latina y el Caribe", href: "https://www.caf.com/" },
      { label: "ONU-Habitat", href: "https://onu-habitat.org/" },
      { label: "UNESCO", href: "https://www.unesco.org/en" },
      { label: "OPS / OMS", href: "https://www.paho.org/es" },
      { label: "FAO", href: "https://www.fao.org/home/en/" },
      { label: "UNFPA", href: "https://www.unfpa.org/es" },
      { label: "PMA", href: "https://es.wfp.org/" },
      { label: "WHO", href: "https://www.who.int/" },
      { label: "UNICEF", href: "https://www.unicef.org/es" },
      { label: "UN Women Colombia", href: "https://colombia.unwomen.org/es" },
      { label: "UN-OCHA", href: "https://www.unocha.org/" },
      { label: "PNUD", href: "https://www.undp.org/es" },
    ],
  },

  {
    titulo: "Organizaciones Humanitarias y ONG Internacionales",
    enlaces: [
      { label: "ACNUR Colombia", href: "https://help.unhcr.org/colombia/" },
      { label: "OIM Colombia", href: "https://colombia.iom.int/es" },
      { label: "CICR", href: "https://www.icrc.org/es" },
      { label: "Cruz Roja Colombiana", href: "https://www.cruzrojacolombiana.org/" },
      { label: "ILO | Organización Internacional del Trabajo", href: "https://www.ilo.org/" },
      { label: "Amnistía Internacional", href: "https://www.amnesty.org/es/" },
      { label: "Red Jesuita con Migrantes", href: "https://www.redjesuitaconmigranteslac.org/mision-lineas-de-accion" },
      { label: "Cáritas", href: "https://www.caritas.es/" },
      { label: "Pastoral Social Cáritas Colombiana", href: "https://caritascolombiana.org/" },
      { label: "CISP", href: "https://developmentofpeoples.org/es/" },
      { label: "Consejo Noruego para Refugiados", href: "https://nrc.org.co/" },
      { label: "DRC Danish Refugee Council", href: "https://drc.ngo/" },
      { label: "GIZ Colombia", href: "https://www.giz.de/en/es/colombia" },
      { label: "HIAS Colombia", href: "https://hias.org/es/donde/colombia/" },
      { label: "iMMAP Inc.", href: "https://immap.org/" },
      { label: "GIFMM Colombia | R4V", href: "https://www.r4v.info/es/colombia" },
    ],
  },

  {
    titulo: "Redes Regionales y de la Sociedad Civil",
    enlaces: [
      { label: "Red Regional de Organizaciones Civiles para las Migraciones", href: "https://rrocm.net/" },
      { label: "Colectivo Migraciones para las Américas | CECIG", href: "https://cecig.org.mx/colectivo-migraciones-para-las-americas/" },
      { label: "RedLatinas", href: "https://redlatinas.es/" },
      { label: "Alianza Americas", href: "https://www.alianzaamericas.org/?lang=en" },
    ],
  },

  {
    titulo: "Organizaciones Internacionales de Derechos Humanos y Transparencia",
    enlaces: [
      { label: "American Friends Service Committee", href: "https://afsc.org/?rd=false&_ga=2.252758025.1845374593.1606854404-1966480395.1606854404" },
      { label: "Hope Border Institute", href: "https://www.hopeborder.org/" },
      { label: "International Detention Coalition", href: "https://idcoalition.org/es/" },
      { label: "Human Rights Watch", href: "https://www.hrw.org/" },
      { label: "Corte Interamericana de Derechos Humanos", href: "https://corteidh.or.cr/" },
      { label: "Transparencia Internacional", href: "https://www.transparency.org/en/" },
      { label: "Doing Business (Banco Mundial)", href: "https://archive.doingbusiness.org/en/doingbusiness" },
    ],
  },
];

export default function EnlacesInteres() {
  const [activo, setActivo] = useState<number | null>(null);
  const [busqueda, setBusqueda] = useState("");

  const categoriasFiltradas = categorias.map(cat => ({
    ...cat,
    enlaces: cat.enlaces.filter(e =>
      e.label.toLowerCase().includes(busqueda.toLowerCase())
    ),
  })).filter(cat => cat.enlaces.length > 0);

  return (
    <>
      <Header />

      <main className="pt-20 bg-[#68AB6A] min-h-screen">
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enlaces de interés
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Documentos, políticas y recursos clave para el fortalecimiento de la investigación y la innovación en Colombia.
          </p>

          {/* Barra de búsqueda */}
          <input
            type="text"
            placeholder="Buscar enlace..."
            className="px-5 py-3 w-80 rounded-lg shadow-md bg-white  text-gray-800 focus:ring-4 focus:ring-[#FFB000] outline-none"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </section>

        {/* Listado filtrado */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {categoriasFiltradas.length > 0 ? (
              categoriasFiltradas.map((cat, index) => (
                <div key={index} className="bg-[#FFB000] rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setActivo(activo === index ? null : index)}
                    className="w-full text-left p-5 text-black font-bold text-xl flex justify-between items-center"
                  >
                    {cat.titulo}
                    <span>{activo === index ? "▲" : "▼"}</span>
                  </button>

                  {activo === index && (
                    <div className="bg-white/20 backdrop-blur-md px-6 pb-5 space-y-3">
                      {cat.enlaces.map((enlace, i) => (
                        <Link
                          key={i}
                          href={enlace.href}
                          target="_blank"
                          className="block bg-white text-black p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-[#FFB000]/60 transition"
                        >
                          {enlace.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-white text-xl mt-10">
                No se encontraron resultados para “{busqueda}”.
              </p>
            )}
          </div>
        </section>
      </main>

    </>
  );
}
