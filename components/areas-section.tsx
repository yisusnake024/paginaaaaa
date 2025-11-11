export default function ObjectivesSection() {
  const objectives = [
    {
      number: "01",
      title: "",
      description:
        "Métodos de investigación cualitativos y/o cuantitativos para sustentar diagnósticos de realidades que requieren una solución o intervención",
    },
    {
      number: "02",
      title: "",
      description:
        "Diseño de Policy´s  brief que contienen lineamientos y recomendaciones para políticas públicas",
    },
    {
      number: "03",
      title: "",
      description:
        "Transferencia de conocimiento con herramientas digitales para la innovación social\n" +
    "- Tecnologías de software e Inteligencia Artificial para la innovación social\n" +
    "- Tecnologías de hardware para el abordaje fisiológico de los fenómenos sociales."
    },
    {
      number: "04",
      title: "",
      description:
        "Relacionamiento con actores del modelo de la Quíntuple Hélice nacionales e internacionales (universidades, empresas, estados, sociedad civil, medio ambiente)",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-muted/20 via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Capacidades para hacer alianzas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-2xl border border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {objective.number}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-4 text-balance">{objective.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{objective.description}</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
