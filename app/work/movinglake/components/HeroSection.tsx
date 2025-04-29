import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="pt-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Upper Content Area */}
        <div className="relative">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">
              Modern Solutions for Digital Platforms
            </h1>
            <p className="text-gray-400 max-w-2xl text-center mb-8">
              A comprehensive web platform that revolutionized online sales and user engagement, generating $500,000 in
              monthly revenue through innovative digital solutions.
            </p>
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-white px-6 py-2 transition-colors hover:bg-gray-100"
            >
              <span className="relative z-10 flex items-center gap-2 text-black">
                Let's Collaborate <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Hero Image Area */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/warehouse.jpg-zVuMKM3FjcAQ89DoJLCg7Y2ECzbpKG.jpeg"
            alt="MovingLake warehouse and logistics facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
            <div className="space-y-2">
              <h2 className="text-xl font-light">MovingLake Platform</h2>
              <p className="text-sm text-gray-300 max-w-md">
                A modern logistics platform connecting warehouses and distribution centers for efficient supply chain
                management.
              </p>
            </div>
            <div className="text-sm">
              <span className="opacity-50">01</span> / <span>03</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
