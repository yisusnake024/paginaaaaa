import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ComiteCientificoPage() {
  const scientificCommittee = [
    {
      name: "Dr. Eduardo Martínez",
      role: "Presidente del Comité Científico",
      institution: "Universidad Nacional de Tecnología",
      specialization: "Inteligencia Artificial y Machine Learning",
      publications: "120+ publicaciones internacionales",
      image: "/senior-professor-ai-researcher.png",
    },
    {
      name: "Dra. Lucía Fernández",
      role: "Vicepresidenta",
      institution: "Instituto de Investigación en Ciberseguridad",
      specialization: "Ciberseguridad y Criptografía",
      publications: "85+ artículos en revistas indexadas",
      image: "/senior-professor-cybersecurity-expert.png",
    },
    {
      name: "Prof. Dr. Roberto Sánchez",
      role: "Coordinador de Evaluación",
      institution: "Centro de Excelencia en Ciencia de Datos",
      specialization: "Big Data y Analytics",
      publications: "95+ publicaciones científicas",
      image: "/senior-professor-data-science-expert.png",
    },
    {
      name: "Dra. Ana Belén García",
      role: "Evaluadora Senior",
      institution: "Laboratorio de Realidad Virtual",
      specialization: "Realidad Virtual y Aumentada",
      publications: "70+ papers en conferencias internacionales",
      image: "/senior-professor-vr-researcher.png",
    },
    {
      name: "Dr. Carlos Alberto Ruiz",
      role: "Evaluador Senior",
      institution: "Instituto de Desarrollo de Software",
      specialization: "Ingeniería de Software y DevOps",
      publications: "60+ contribuciones académicas",
      image: "/senior-professor-software-engineering.png",
    },
    {
      name: "Dra. María Elena López",
      role: "Evaluadora Senior",
      institution: "Centro de IoT y Sistemas Embebidos",
      specialization: "Internet de las Cosas y Sistemas Embebidos",
      publications: "80+ publicaciones especializadas",
      image: "/senior-professor-iot-researcher.png",
    },
  ]

  const evaluationCriteria = [
    {
      title: "Originalidad e Innovación",
      description: "Contribución novedosa al campo de estudio",
      weight: "25%",
    },
    {
      title: "Rigor Metodológico",
      description: "Solidez en el diseño y metodología de investigación",
      weight: "25%",
    },
    {
      title: "Relevancia Científica",
      description: "Impacto potencial en la comunidad académica",
      weight: "20%",
    },
    {
      title: "Claridad y Presentación",
      description: "Calidad en la comunicación de resultados",
      weight: "15%",
    },
    {
      title: "Aplicabilidad Práctica",
      description: "Potencial de aplicación en el mundo real",
      weight: "15%",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Comité Científico
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expertos académicos que garantizan la calidad científica del congreso
              </p>
            </div>
          </div>
        </section>

        {/* Committee Members */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {scientificCommittee.map((member, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">{member.name}</h3>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                      {member.role}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{member.institution}</p>
                    <p className="text-sm font-medium mb-2">{member.specialization}</p>
                    <p className="text-xs text-muted-foreground">{member.publications}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evaluation Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-primary">Proceso de Evaluación</h2>
                <p className="text-lg text-muted-foreground">
                  Criterios rigurosos para garantizar la calidad académica
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {evaluationCriteria.map((criteria, index) => (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-primary">{criteria.title}</h3>
                      <span className="text-sm font-bold bg-primary/10 text-primary px-2 py-1 rounded">
                        {criteria.weight}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{criteria.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Review Process Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-primary">Cronograma de Revisión</h2>
                <p className="text-lg text-muted-foreground">Fechas importantes del proceso de evaluación científica</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-card rounded-2xl border border-border/50">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Recepción de Propuestas</h3>
                    <p className="text-muted-foreground">Hasta el 28 de Febrero, 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-card rounded-2xl border border-border/50">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Evaluación por Pares</h3>
                    <p className="text-muted-foreground">1 - 7 de Marzo, 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-card rounded-2xl border border-border/50">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Notificación de Resultados</h3>
                    <p className="text-muted-foreground">10 de Marzo, 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-card rounded-2xl border border-border/50">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Presentaciones Finales</h3>
                    <p className="text-muted-foreground">15 de Marzo, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Scientific Committee */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-primary">Contacto Científico</h2>
              <div className="bg-card p-8 rounded-2xl border border-border/50">
                <p className="text-lg text-muted-foreground mb-6">
                  Para consultas sobre el proceso de evaluación científica
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:comite.cientifico@ciinatic2025.org"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    comite.cientifico@ciinatic2025.org
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">+54 11 4567-8901</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
