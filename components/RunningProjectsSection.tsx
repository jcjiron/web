"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getWhatsappUrl } from "@/utils/social-media"

export default function RunningProjectsSection() {
  return (
    <section id="running-project" className="py-16 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            OUR
            <br />
            RUNNING PROJECT
          </h2>
          <div className="max-w-md lg:text-right">
            <p className="text-gray-400 mb-8 text-lg">
              As a front end developer using modern ideas simplicity design and universal visual identification tailored
              to dedicated and current market.
            </p>
            <Link
              href={getWhatsappUrl("Hello, I'd like to discuss a project with you!")}
              target="_blank"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
            >
              Let's discuss <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Project Showcase */}
        <Link href="/work/branding" className="block relative group cursor-pointer">
          <div className="aspect-[16/9] relative overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/branding2-hRdZcwAUOQ79su9YN60RKD9kz1zVe6.webp"
              alt="Luxury bathroom interior with marble finishes - Click to view branding work"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>
      </div>
    </section>
  )
}
