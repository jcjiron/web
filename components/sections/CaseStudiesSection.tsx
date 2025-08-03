"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function CaseStudiesSection() {
  return (
    <section id="casos-exito" className="py-20 px-4 sm:px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">CASOS DE ÉXITO</div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Empresas que ya lo lograron</h2>
          <p className="text-xl text-gray-300">Resultados reales de empresas como la tuya</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casai-UfUulLmLkNIJpj08jTCGCKJXW1DfIX.webp"
                alt="Caso de éxito logística"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2 países </div>
            <div className="text-gray-400">Crecimiento internacional </div>
            <div className="text-sm text-gray-500 mt-2">Desarrollo de aplicaciones propias </div>
          </div>

          <div className="text-center">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fesa-N4ChbTd8kgRmw4s62eW64l1KHdB8cK.webp"
                alt="Caso de éxito multinacional"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-400">Entregas Diarias</div>
            <div className="text-sm text-gray-500 mt-2">Nacional +15 estados </div>
          </div>

          <div className="text-center">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-20%20at%2016.59.01-ibCB67QY10et58WW1RgWTpbuaUJdTl.jpeg"
                alt="Caso de éxito fintech"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-400">Menos errores</div>
            <div className="text-sm text-gray-500 mt-2">Más conversiones y ventas </div>
          </div>
        </div>

        {/* CTA */}
        
      </div>
    </section>
  )
}
