import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ComiteOrganizadorPage() {
  const organizers = [
    {
      name: "Dr. Patricia Hernández",
      role: "Presidenta del Comité",
      institution: "Universidad Tecnológica Nacional",
      email: "patricia.hernandez@utn.edu.ar",
      image: "/professional-woman-committee-president.png",
    },
    {
      name: "Ing. Miguel Rodríguez",
      role: "Coordinador General",
      institution: "Instituto de Investigación Científica",
      email: "miguel.rodriguez@iic.org",
      image: "/professional-man-coordinator.png",
    },
    {
      name: "Dra. Carmen Vásquez",
      role: "Coordinadora Académica",
      institution: "Centro de Innovación Tecnológica",
      email: "carmen.vasquez@cit.edu",
      image: "/professional-woman-academic-coordinator.png",
    },
    {
      name: "Prof. Alejandro Torres",
      role: "Coordinador de Logística",
      institution: "Academia de Ciencias Aplicadas",
      email: "alejandro.torres@aca.edu",
      image: "/professional-man-logistics-coordinator.png",
    },
    {
      name: "Dra. Isabel Morales",
      role: "Coordinadora de Comunicaciones",
      institution: "Laboratorio de IA",
      email: "isabel.morales@lab-ia.org",
      image: "/professional-woman-communications-coordinator.png",
    },
    {
      name: "Ing. Fernando Castro",
      role: "Coordinador Técnico",
      institution: "Instituto de Ciberseguridad",
      email: "fernando.castro@cybersec.edu",
      image: "/professional-man-technical-coordinator.png",
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
                Comité Organizador
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                El equipo de profesionales que hace posible CIINATIC 2025
              </p>
            </div>
          </div>
        </section>

        {/* Committee Members */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {organizers.map((member, index) => (
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
                    <p className="text-sm text-muted-foreground mb-3">{member.institution}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-8 rounded-2xl border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Nuestra Misión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Facilitar el intercambio de conocimientos y experiencias entre académicos, investigadores y
                    profesionales del sector tecnológico, promoviendo la innovación y el desarrollo científico en el
                    ámbito de las tecnologías de la información y comunicación.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-2xl border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Nuestra Visión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser el congreso de referencia en tecnología e innovación académica en la región, creando un espacio
                    de colaboración que impulse el avance científico y tecnológico, y contribuya al desarrollo
                    sostenible de la sociedad digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-primary">Contacto del Comité</h2>
              <div className="bg-card p-8 rounded-2xl border border-border/50">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">Email General</h4>
                    <p className="text-sm text-muted-foreground">organizacion@ciinatic2025.org</p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">Teléfono</h4>
                    <p className="text-sm text-muted-foreground">+54 11 4567-8900</p>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-2">Ubicación</h4>
                    <p className="text-sm text-muted-foreground">Buenos Aires, Argentina</p>
                  </div>
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
