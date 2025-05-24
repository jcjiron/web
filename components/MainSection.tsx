"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function MainSection() {
  return (
    <section id="main" className="pt-24 sm:pt-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Project Images Grid */}
        <div id="picture-slider" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 sm:mb-16">
          <div className="aspect-[4/3] relative bg-gray-900">
            <Link href="/work/tcs">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web_development2-Chg5RxdHoL5nyluF5UOyPJanYtuyjx.webp"
                alt="Portfolio services showcase"
                fill
                className="object-cover hover:cursor-pointer"
              />
            </Link>
          </div>
          <div className="aspect-[4/3] relative bg-gray-900">
            <Link href="/work/casai">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web_design2-mYE0jvbNxH40DT6RbRs7X4FR3FAMFr.webp"
                alt="Modern apartment booking interface design"
                fill
                className="object-cover hover:cursor-pointer"
              />
            </Link>
          </div>
          <div className="aspect-[4/3] relative bg-gray-900">
            <Link href="/work/branding">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/branding2-hRdZcwAUOQ79su9YN60RKD9kz1zVe6.webp"
                alt="Luxury branding example - Marmor del Valle"
                fill
                className="object-cover hover:cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-16 sm:mb-32">
          <div className="text-sm mb-4">(HELLO, I'M JUAN CARLOS)</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
            SOFTWARE <span className="font-serif italic font-normal">engineer</span> MANAGER
            <br className="hidden sm:block" />
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
            <p className="max-w-md text-gray-400">
              Transforming ideas into powerful digital solutions. Specializing in web design, development, and branding
              for businesses that demand excellence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
            >
              Let's collaborate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
