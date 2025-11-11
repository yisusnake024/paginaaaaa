"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import PublicacionesPagee from "../programacion/page"  // ✅ Import del apartado de publicaciones
import DivulgacionPage from "../divulgacion/page"
import EnlacesInteres from "../enlaces/page"

export default function InvestigacionesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 🔹 Header */}
      <Header />

      <main className="pt-20">
        {/* 🔹 Sección de Publicaciones */}
        <PublicacionesPagee />
        <DivulgacionPage />
        <EnlacesInteres />
        
      </main>

      {/* 🔸 Footer con fondo naranja vibrante */}
      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </div>
  )
}
