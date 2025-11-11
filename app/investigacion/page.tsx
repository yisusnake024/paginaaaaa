"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import InscripcionesPage from "../inscripciones/page"
import ConferencistasPage from "../conferencistas/page"

export default function InvestigacionesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <InscripcionesPage />
        <ConferencistasPage />
      </main>

      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </div>
  );
}
