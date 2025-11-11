"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"

const proyectos = [
  {
    title: "Efecto de la terapia regresiva reconstructiva en el consumo de tabaco",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Síndrome metabólico y desempeño neuropsicológico en personas activas laboralmente",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Programa de resiliencia y autocontrol emocional en hombres y mujeres para la resolución de conflictos en violencia de género intrafamiliar",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Análisis de la relación entre características socioeconómicas e institucionales con el desempeño en las pruebas Saber 11 en la pandemia por Covid-19 en Cúcuta",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Análisis de las condiciones del servicio público de transporte por parte de estudiantes en el Área Metropolitana de Cúcuta",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Barreras para la inclusión de Personas en Condición de Discapacidad (PcD) en universidades del nororiente colombiano",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Características del Espectro Autista, Bienestar psicológico, y Apoyo Social en adultos con TEA y sin TEA",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Desarrollo de la red de maestros investigadores para el fortalecimiento de las capacidades de investigación e innovación de los docentes y directivos docentes del departamento Norte de Santander",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Diálogos académicos de estudiantes víctimas y/o migrantes de la Unisimón-Cúcuta, en alianza con agentes externos, desde el Informe Final de la Comisión de la Verdad, la justicia restaurativa y la No-Repetición",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Gestión del capital en la productividad de las economías domesticas en las ciudades de Cúcuta y Tuluá",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Involucramiento parental en la formación integral de adolescentes escolarizados del Departamento Norte de Santander",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "La reparación de las mujeres víctimas de violencia sexual del conflicto armado: su perspectiva",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Migración venezolana en ciudades fronterizas suramericanas. Realidades y subjetividades de los inmigrantes",
    dimension: "Dimensión del CIEF: Fenómenos migratorios, fronteras, lo transfronterizo, lo transnacional",
  },
  {
    title: "Parámetros normativos de la prueba inventario de evaluación de la personalidad PAI para la población colombiana a través de tablas percentiles",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Realidades sociales en el contexto de la frontera colombo-venezolana...",
    dimension: "Dimensiones del CIEF: Desarrollo territorial / Fenómenos migratorios, fronteras, lo transfronterizo, lo transnacional",
  },
  {
    title: "Tendencias del derecho penal en el marco del régimen de la libertad personal",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Propuestas académicas, multidisciplinares y alternas, en pro de superar el estado de cosas inconstitucional, en Colombia",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Análisis bibliométrico de la producción científica en la Universidad Simón Bolívar sede Cúcuta",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Expresiones del contagio emocional y cognición social en las interacciones políticas...",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Fortalecimiento de las Capacidades Organizacionales para las empresas del Norte de Santander...",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Fortalecimiento de las vocaciones científicas en niños, adolescentes y jóvenes...",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Propuesta de valor de las unidades productivas de cacao de mujeres rurales...",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Propuesta de valor de las unidades de negocio del sistema productivo de café...",
    dimension: "Dimensión del CIEF: Fenómenos migratorios, fronteras, lo transfronterizo, lo transnacional",
  },
  {
    title: "La violencia en la ciudad de Cúcuta y su área metropolitana. Una mirada desde el conocimiento científico",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Mujeres empoderadas y autosostenibles: evaluación de impacto",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Identificación del cáncer de piel implementando redes neuronales convolucionales",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Modelo de conocimiento basado en inteligencia artificial para el análisis del envejecimiento humano...",
    dimension: "Dimensiones del CIEF: Desarrollo territorial / Innovación social para la transformación territorial",
  },
  {
    title: "Resolución de problemas: un marco heurístico para el desarrollo del pensamiento matemático...",
    dimension: "Dimensión del CIEF: Desarrollo territorial",
  },
  {
    title: "Modelo basado en salud inteligente para el control de la obesidad aplicado en San José de Cúcuta...",
    dimension: "Dimensiones del CIEF: Desarrollo territorial / Innovación social para la transformación territorial",
  },
]

export default function ProyectosPage() {
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
                Proyectos
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                
              </p>
            </div>
          </div>
        </section>

        {/* Grid de proyectos */}
        <section className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {proyectos.map((proyecto, i) => (
              <div
                key={i}
                className="flex flex-col justify-between bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-lg font-medium text-gray-800 mb-6 text-center">
                  {proyecto.title}
                </h3>
                <div className="bg-primary text-primary-foreground rounded-lg p-4 text-center font-semibold">
                  {proyecto.dimension}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

