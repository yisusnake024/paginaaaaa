
"use client"

import { useEffect, useRef } from "react"

export default function InstitutionsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const institutions = [
    { name: "Universidad Tecnológica Nacional", logo: "/utn-university-logo.png" },
    { name: "Instituto de Investigación Científica", logo: "/scientific-research-institute-logo.png" },
    { name: "Centro de Innovación Tecnológica", logo: "/technology-innovation-center-logo.png" },
    { name: "Academia de Ciencias Aplicadas", logo: "/applied-sciences-academy-logo.png" },
    { name: "Laboratorio de IA Avanzada", logo: "/ai-laboratory-logo.png" },
    { name: "Instituto de Ciberseguridad", logo: "/cybersecurity-institute-logo.png" },
    { name: "Centro de Computación Cuántica", logo: "/quantum-computing-center-logo.png" },
    { name: "Universidad de Tecnologías Emergentes", logo: "/emerging-technologies-university-logo.png" },
  ]

  const duplicatedInstitutions = [...institutions, ...institutions]

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let isHovered = false
    let animationId: number

    const animate = () => {
      if (!isHovered && slider) {
        slider.scrollLeft += 1

        // Reset scroll when reaching halfway point (seamless loop)
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const handleMouseEnter = () => {
      isHovered = true
    }

    const handleMouseLeave = () => {
      isHovered = false
    }

    slider.addEventListener("mouseenter", handleMouseEnter)
    slider.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      if (slider) {
        slider.removeEventListener("mouseenter", handleMouseEnter)
        slider.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Instituciones Participantes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Prestigiosas instituciones académicas y centros de investigación que respaldan CIINATIC 2025
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div ref={sliderRef} className="flex space-x-8 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {duplicatedInstitutions.map((institution, index) => (
              <div
                key={index}
                className="flex-shrink-0 group p-6 bg-card rounded-2xl border border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-xl w-64"
              >
                <div className="text-center">
                  <img
                    src={institution.logo || "/placeholder.svg"}
                    alt={institution.name}
                    className="w-24 h-16 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="font-semibold text-card-foreground text-sm text-balance leading-tight">
                    {institution.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
