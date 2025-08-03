"use client"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ValuePropositionSection() {
  return (
    <section id="value-proposition" className="py-20 px-4 sm:px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual/Stats */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/movinglake.jpg-DgdR0Rro26b57BB3aKF2FfDzWIS2eg.jpeg"
              alt="Sistemas que escalan"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido principal */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">La solución</h2>

            <p className="text-xl text-gray-300 mb-8">
              Un sistema diseñado específicamente para tu empresa que{" "}
              <span className="text-white font-semibold">crece contigo.</span>
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-gray-300">Diagnóstico en 48 horas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-gray-300">Sin interrumpir tus operaciones</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-gray-300">Resultados  trimestrales   </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-[hsl(var(--surface-elevation-1))] p-6 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">40%</div>
                <div className="text-sm text-gray-400">Menos tiempo en operaciones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">3x</div>
                <div className="text-sm text-gray-400">Capacidad de crecimiento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
