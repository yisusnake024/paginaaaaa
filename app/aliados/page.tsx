"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const aliados = [
  {
    name: "Gobernación de Norte de Santander",
    logo: "/gobernacion.jpg",
    href: "https://www.nortedesantander.gov.co/#/inicio",
    tipo: "Gobierno",

  },
  {
    name: "Alcaldía de San José de Cúcuta",
    logo: "/alcaldia_cucuta.png",
    href: "https://cucuta.gov.co/",
    tipo: "Gobierno",
  },
  {
    name: "Migración Colombia",
    logo: "/migracion_colombiaa.jpg",
    href: "https://www.migracioncolombia.gov.co/",
    tipo: "Gobierno",
  },
  {
    name: "Minciencias",
    logo: "/minciencias.png",
    href: "https://minciencias.gov.co/",
    tipo: "Gobierno",
  },
  {
    name: "ICETEX",
    logo: "/icetex.png",
    href: "https://web.icetex.gov.co/portal",
    tipo: "Gobierno",
  },
  {
    name: "Alcaldía Mayor de Bogotá D.C - IDEP",
    logo: "/alcaldia_mayor_bogota.png",
    href: "https://www.idep.edu.co/",
    tipo: "Gobierno",
  },
  {
    name: "DIAN",
    logo: "/dian.jpg",
    href: "https://www.dian.gov.co/",
    tipo: "Gobierno",
  },
  {
    name: "INPEC",
    logo: "/inpec.png",
    href: "https://www.inpec.gov.co/",
    tipo: "Gobierno",
  },
  {
    name: "Policía Nacional",
    logo: "/policias.jpg",
    href: "https://www.policia.gov.co/",
    tipo: "Gobierno",
  },
  {
    name: "Alcaldía de Sardinata",
    logo: "/sardinatas.jpg",
    href: "http://www.sardinata-nortedesantander.gov.co/",
    tipo: "Gobierno",
  },
  {
    name: "SIES + -educacion por norte de santander",
    logo: "/sies.jpg",
    href: "http://siesmas.co/",
    tipo: "Gobierno",
  },
  {
    name: "Universidad de Pamplona",
    logo: "/unipamplona.png",
    href: "https://www.unipamplona.edu.co/",
    tipo: "Gobierno",
  },
  {
    name: "Univrsidad Francisco de Paula Santander",
    logo: "/fransisco_depaula.jpg",
    href: "https://ww2.ufps.edu.co/",
    tipo: "Gobierno",
  },
  {
    name: "SENA",
    logo: "/sena.png",
    href: "https://www.sena.edu.co/es-co/Paginas/default.aspx",
    tipo: "Gobierno",
  },
  {
    name: "FESC",
    logo: "/fesc.png",
    href: "https://www.fesc.edu.co/portal/component/weblinks/weblink/101-google?catid=87&Itemid=640",
    tipo: "Gobierno",
  },
  {
    name: "Universidad Libre",
    logo: "/universidad_libre.png",
    href: "https://unilibrecucuta.edu.co/portal/",
    tipo: "Gobierno",
  },
  {
    name: "Universidad minuto de Dios",
    logo: "/uniminuto.png",
    href: "https://www.uniminuto.edu/ced-cucuta",
    tipo: "Gobierno",
  },
  {
    name: "Escuela Superior de Administración Pública - ESAP",
    logo: "/administracion_superior.png",
    href: "https://www.esap.edu.co/esap/organigrama/direccion-nacional/direcciones-territoriales/territorial_norte_de_santander_arauca/",
    tipo: "Gobierno",
  },
  {
    name: "Instituto superior de educación rural - ISER",
    logo: "/educacion_rural.png",
    href: "https://www.iser.edu.co/",
    tipo: "Gobierno",
  },
  {
    name: "Universidad de Santander - UDES",
    logo: "/udes.png",
    href: "https://udes.edu.co/",
    tipo: "Gobierno",
  },
  {
    name: "Universidad del Rosario",
    logo: "/universidad_rosario.png",
    href: "https://urosario.edu.co/",
    tipo: "Gobierno",
  },
  {
    name: "Universidad catolica de tachira - UCAT",
    logo: "/ucat.jpeg",
    href: "https://www.ucat.edu.ve/web/",
    tipo: "Gobierno",
  },
  {
    name: "Observatorio de investigaciones sociales en frontera - ODISEF",
    logo: "/odisef.png",
    href: "https://odisef.org/",
    tipo: "Gobierno",
  },
  {
    name: "Universidad catolica andres bello - UCAB",
    logo: "/ucab.png",
    href: "https://www.ucab.edu.ve/",
    tipo: "Gobierno",
  },
  {
    name: "Observatorio venezolano de migraciones - OVM",
    logo: "/ovm.jpg",
    href: "https://www.observatoriovenezolanodemigracion.org/",
    tipo: "Gobierno",
  },
  {
    name: "Universidad nacional de colombia",
    logo: "/universidad_nacional.png",
    href: "https://unal.edu.co/",
    tipo: "Gobierno",
  },
  {
    name: "El colegio de la frontera norte - COLEF",
    logo: "/frontera_norte.jpg",
    href: "https://www.colef.mx/el-colef/",
    tipo: "Gobierno",
  },
   {
    name: "El colegio de la frontera sur - ECOSUR",
    logo: "/ecosur.jpg",
    href: "https://www.ecosur.mx/",
    tipo: "Gobierno",
  },
   {
    name: "Universidad de colima - UDEC",
    logo: "/colima.png",
    href: "https://www.ucol.mx/",
    tipo: "Gobierno",
  },
   {
    name: "Universidade do estado do amapa - UEAP",
    logo: "/UEAP.png",
    href: "https://www.portal.ap.gov.br/estrutura/universidade-do-estado-do-amapa",
    tipo: "Gobierno",
  },
   {
    name: "Universidad de costa rica - UCR",
    logo: "/universidad_costa_rica.png",
    href: "https://www.ucr.ac.cr/",
    tipo: "Gobierno",
  },
   {
    name: "Universidad nacional autonoma de mexico - CIMSUR",
    logo: "/cimsur.jpeg",
    href: "https://uifs.cimsur.unam.mx/uifs/index.php/inicio",
    tipo: "Gobierno",
  },
   {
    name: "Arizona state university - ASU",
    logo: "/arizona.png",
    href: "https://search.asu.edu/",
    tipo: "Gobierno",
  },
    {
    name: "red colombo venezolana de movilidad humana",
    logo: "/red_colombov.jpg",
    href: "https://redcolven.co/",
    tipo: "Gobierno",
  },
    {
    name: "red latinoamericana de estudios fronterizos",
    logo: "/relatef.jpg",
    href: "https://alefestudiosfronterizos.com/",
    tipo: "Gobierno",
  },
    {
    name: "Universidad Loyola Andalucia - ULOYA",
    logo: "/loyola.jpg",
    href: "https://www.uloyola.es/",
    tipo: "Gobierno",
  },
    {
    name: "servicio jesuita a refugiados venezuela - JRS",
    logo: "/jesuita_venezuela.png",
    href: "https://jrs.net/es/pais/venezuela/",
    tipo: "Gobierno",
  },
    {
    name: "servicio jesuita a refugiados latinoamerica y caribe",
    logo: "/jesuita_latinoamerica.jpeg",
    href: "https://lac.jrs.net/es/home-2/",
    tipo: "Gobierno",
  },
     {
    name: "red quynza",
    logo: "/quynza.jpg",
    href: "https://iepri.unal.edu.co/1/formacion-academica/",
    tipo: "Gobierno",
  },
     {
    name: "la opinion",
    logo: "/opinion.jpg",
    href: "https://www.laopinion.co/cucuta",
    tipo: "Gobierno",
  },
     {
    name: "camara de comercio de cucuta",
    logo: "/camara_cucuta.jpeg",
    href: "https://www.cccucuta.org.co/",
    tipo: "Gobierno",
  },
   {
    name: "agrosena",
    logo: "/agrosena.jpg",
    href: "https://www.sena.edu.co/es-co/formacion/Paginas/agro_sena.aspx",
    tipo: "Gobierno",
  },
   {
    name: "niñ@s de papel IPS",
    logo: "/niñospap.png",
    href: "https://ninosdepapel.org/trabaja-con-nosotros/",
    tipo: "Gobierno",
  },
   {
    name: " diocesis de tibu",
    logo: "/diocesis_tibu.jpg",
    href: "https://diocesisdetibu.com/",
    tipo: "Gobierno",
  },
   {
    name: "diocesis de cucuta",
    logo: "/diocesis_cucuta.jpeg",
    href: "https://diocesisdecucuta.com/",
    tipo: "Gobierno",
  },
   {
    name: "Hogares Juveniles Campesinos - HJC",
    logo: "/hogares_juveniles.jpg",
    href: "https://hogaresjuvenilescampesinos.org/",
    tipo: "Gobierno",
  },
    {
    name: "Arroz Gelvez",
    logo: "/arroz_gelvez.png",
    href: "https://www.arrozgelvez.com/",
    tipo: "Gobierno",
    },

    {
    name: "Bienestar Familiar - ICBF",
    logo: "/bienestar_familiar.png",
    href: "https://www.icbf.gov.co/",
    tipo: "Gobierno",
  },
    {
    name: "aguas kpital",
    logo: "/aguas_kpital.jpeg",
    href: "https://akc.com.co/web/",
    tipo: "Gobierno",
  },
   {
    name: "liga contra el cancer seccional cucuta",
    logo: "/liga_cancer.jpeg",
    href: "https://licancercucuta.org/",
    tipo: "Gobierno",
  },
   {
    name: "veolia",
    logo: "/veolia.png",
    href: "https://www.oriente-yopal.veolia.co/servicio-cliente/pps-cucuta/pps-veolia-aseo-norte-santander-sas-esp",
    tipo: "Gobierno",
  },
   {
    name: "Centrales Electricas",
    logo: "/central_electrica.png",
    href: "https://www.cens.com.co/",
    tipo: "Gobierno",
  },

];

export default function Aliadoss() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#68AB6A]/10 to-white">
      {/* 🟢 Header */}
      <Header />

      <main className="flex-grow">
        {/* 🟩 HERO igual que en Quiénes Somos */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center md:text-left overflow-hidden px-4 sm:px-6 md:px-12">
          {/* Fondo con imagen */}
          <div className="absolute inset-0">
            <Image
              src="/interaccion_gobierno.jpeg"
              alt="Aliados Quíntuple Hélice"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/40 to-white/10 backdrop-blur-[1px]" />
          </div>

          {/* Contenido principal */}
          <div className="relative z-10 w-full max-w-6xl mx-auto py-16 sm:py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* 🔹 Columna izquierda (texto) */}
            <div className="space-y-6">
              <div className="bg-[#68AB6A] text-white inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-br-[50px] shadow-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                  Aliados Quíntuple Hélice
                </h1>
              </div>
              <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line">
                Colaboraciones institucionales que fortalecen la investigación, innovación y desarrollo territorial a través de alianzas estratégicas con el sector público, privado, académico, social y ambiental.
              </p>
            </div>
          </div>
        </section>

        {/* 🧩 Grilla de aliados */}
        <section className="py-16 sm:py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#68AB6A]">
              Nuestros aliados estratégicos
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 place-items-center">
              {aliados.map((aliado, i) => (
                <Link
                  key={i}
                  href={aliado.href}
                  target="_blank"
                  className="bg-white w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52
                  flex flex-col items-center justify-center rounded-2xl shadow-md 
                  border border-[#68AB6A]/20 hover:shadow-lg hover:scale-[1.05]
                  transition-all duration-300 text-center space-y-2 p-2 sm:p-3"
                >
                  {/* 🖼️ Logo */}
                  <Image
                    src={aliado.logo}
                    alt={aliado.name}
                    width={100}
                    height={100}
                    className="object-contain max-h-12 sm:max-h-16 md:max-h-20"
                  />

                  {/* 🏷️ Nombre */}
                  <p className="text-[10px] sm:text-[12px] md:text-sm font-semibold text-[#68AB6A] leading-tight line-clamp-2">
                    {aliado.name}
                  </p>

                  {/* 🔸 Tipo de alianza */}
                  {aliado.tipo && (
                    <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 italic">
                      {aliado.tipo}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
