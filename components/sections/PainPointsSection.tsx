"use client"
import { Database, Workflow, TrendingDown } from "lucide-react"

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Software que ya no escala",
      description: "Tu sistema funcionaba perfecto con 50 empleados, pero ahora con 300 se cuelga constantemente.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Dependencia de Excel y parches",
      description:
        "Procesos críticos que dependen de hojas de cálculo compartidas y soluciones temporales que se volvieron permanentes.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Sistemas que no se comunican",
      description: "Cada área tiene su propia herramienta y nadie sabe qué está pasando en tiempo real.",
    },
  ]

  return (
    <section id="pain-points" className="py-20 px-4 sm:px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">REALIDADES EMPRESARIALES</div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">¿Te suena familiar alguna de estas situaciones?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            He trabajado con empresas que han vivido exactamente estos problemas. La buena noticia es que todos tienen
            solución.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-[hsl(var(--surface-elevation-1))] border border-zinc-800"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-6 text-amber-500">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Transición empática */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Si has asentido con la cabeza leyendo esto, no estás solo.
            <span className="text-white font-semibold"> Y más importante: tiene solución.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
