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
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-4f6cc5db81c94d5f30a8c29510f180f2-9LbbZHuh0oCR2j0tCIRXZcFaqtR4ek.webp"
              alt="The Maker - Artistic Portfolio"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/3] relative bg-gray-900">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-f1f73d18773a444891df8e9fe6b7839a-xeZSsePL14Z7mQ9CrCfMe1vdob66EF.webp"
              alt="Awards and Achievements Showcase"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/3] relative bg-gray-900">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-af751e752193ebab93c44bbb81b917c1-pjnqNg5oOY2FVFBgcUmNfcH4sbimTZ.webp"
              alt="Burned Art Portfolio Website"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-16 sm:mb-32">
          <div className="text-sm mb-4">(HELLO, I'M JUAN CARLOS)</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
            SOFTWARE <span className="font-serif italic font-normal">engineer</span>
            <br className="hidden sm:block" /> MANAGER
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
            <p className="max-w-md text-gray-400">
              Transforming ideas into powerful digital solutions. Specializing in web design, development, and branding
              for businesses that demand excellence.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
            >
              Let's collaborate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16 sm:mb-32">
          <p className="max-w-md mb-8 sm:mb-16">
            With over 7 years of experience, I bring your vision to life with cutting-edge designs and robust
            development, creating waves of innovation and success for your brand.
          </p>

          <div className="space-y-4 sm:space-y-6">
            {["WEB DESIGN", "WEB DEVELOPMENT", "BRANDING", "MOBILE APPS"].map((service, index) => (
              <div key={index} className="flex justify-between items-center py-4 sm:py-6 border-t border-gray-800">
                <h3 className="text-lg sm:text-xl">{service}</h3>
                <Link href="#" className="inline-flex items-center gap-2 text-sm hover:text-gray-300">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Exhibition Image */}
        <div className="aspect-[16/9] relative bg-gray-900 mb-16 sm:mb-32">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Project Showcase" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

