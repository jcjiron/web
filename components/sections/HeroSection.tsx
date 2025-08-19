"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-black">
      <div className="relative z-10 max-w-4xl mx-auto text-center py-20 sm:py-[0]">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
          Has your company outgrown its system?
        </h1>
        

        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <Link
            href="#contacto"
            className="group relative overflow-hidden rounded-full bg-white px-8 py-3 transition-colors hover:bg-gray-100 flex justify-center"
          >
            <span className="relative z-10 flex items-center gap-2 text-black font-medium">
              I want a solution <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <span>7+ years of experience</span>
          <span>•</span>
          <span>Fortune 500 Companies</span>
          <span>•</span>
          <span>Custom Solutions</span>
        </div>
      </div>
    </section>
  )
}
