"use client"
import { Download, CheckCircle } from "lucide-react"
import type React from "react"
import { useState } from "react"

export default function LeadMagnetSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el email
    setIsSubmitted(true)
  }

  const signals = [
    "Tu equipo pasa más tiempo 'haciendo que funcione' que innovando",
    "Los reportes toman días en lugar de minutos",
    "Cada nuevo empleado necesita acceso a 5+ sistemas diferentes",
    "Los errores se descubren semanas después de que ocurren",
    "Tu competencia está lanzando features más rápido que tú",
  ]

  return (
    <section id="lead-magnet" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[hsl(var(--surface-elevation-1))] p-8 sm:p-12 rounded-2xl border-0">
          <div className="text-center mb-8">
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">RECURSO GRATUITO</div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              🎁 Las 5 señales de que tu sistema ya no es suficiente
            </h2>

            <p className="text-xl text-gray-300 mb-8">(Y qué hacer al respecto antes de que afecte tu crecimiento)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Lista de señales */}
            <div>
              <h3 className="text-xl font-bold mb-6">¿Reconoces alguna de estas señales?</h3>

              <div className="space-y-4">
                {signals.map((signal, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[hsl(var(--surface-elevation-2))] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-300">{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-[hsl(var(--surface-elevation-2))] p-6 rounded-xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-lg font-bold mb-4">Descarga la guía completa gratis:</h4>

                  <div>
                    <input
                      type="email"
                      placeholder="tu@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black px-6 py-3 font-semibold hover:bg-gray-100 transition-colors rounded-lg flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Descargar guía gratuita
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    No spam. Solo contenido valioso para hacer crecer tu empresa.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">¡Perfecto!</h4>
                  <p className="text-gray-300">Revisa tu email. La guía llegará en los próximos minutos.</p>
                </div>
              )}
            </div>
          </div>

          {/* Beneficios adicionales */}
          <div className="mt-8 pt-8 border-t border-zinc-700">
            <h4 className="text-center font-bold mb-4">Además de la guía, también recibirás:</h4>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-white" />
                Checklist de evaluación
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-white" />
                Casos de estudio exclusivos
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-white" />
                Invitación a consulta gratuita
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
