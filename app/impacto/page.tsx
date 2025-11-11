"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Aliadoss from "../aliados/page"
import TabacoPage from "../policy/page"
import CiefCifrasPage from "../cifras/page"

export default function AliadosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
      
        <Aliadoss/>
        <TabacoPage/>
        <CiefCifrasPage/>
      </main>

      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </div>
  );
}
