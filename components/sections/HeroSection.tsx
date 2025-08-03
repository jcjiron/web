"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-black">
      <div className="relative z-10 max-w-4xl mx-auto text-center py-20 sm:py-32">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
          ¿Tu empresa creció más rápido que tu sistema?
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
          Diseño software que <span className="text-white font-semibold">potencia tu crecimiento</span> en lugar de
          limitarlo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <Link
            href="#contacto"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-3 transition-colors hover:bg-gray-100 flex justify-center"
          >
            <span className="relative z-10 flex items-center gap-2 text-black font-medium">
              Quiero una solución <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <span>7+ años de experiencia</span>
          <span>•</span>
          <span>Empresas Fortune 500</span>
          <span>•</span>
          <span>Soluciones a medida</span>
        </div>
      </div>
    </section>
  )
}
