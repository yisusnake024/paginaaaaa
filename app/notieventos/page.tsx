"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import NoticiasPage from "../noticias/page"
import AniosPage from "../ponencias/page"

export default function NotiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 🔹 Header */}
      <Header />

      <main className="pt-20">
        {/* 🔹 Sección de Publicaciones */}
        <NoticiasPage />
        <AniosPage />
        
      </main>

      {/* 🔸 Footer con fondo naranja vibrante */}
      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </div>
  )
}