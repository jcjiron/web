"use client"

import Image from "next/image"
import { Code, Smartphone, Palette, Users } from "lucide-react"
import { Projects } from "./components/Projects"

export default function WorkPageClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Enhanced Responsiveness */}
      <section className="relative min-h-[100svh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casai-UfUulLmLkNIJpj08jTCGCKJXW1DfIX.webp"
            alt="Digital Solutions Showcase"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-6 py-20">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold px-4">
            Crafting Digital Experiences That Drive Results
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base px-4">
            7+ Years Experience • Enterprise Solutions • Award-Winning Designs
          </p>
          {/* Button removed from here */}
        </div>
      </section>

      {/* Experience Section - Enhanced Responsiveness */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6" id="experience">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-8 sm:space-y-12">
              <div className="max-w-2xl">
                <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">ACHIEVEMENTS</div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Delivering Excellence Through Innovation and Expertise
                </h2>
              </div>

              {/* Stats Grid - Responsive for all screens */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    number: "50+",
                    plus: false,
                    label: "Projects",
                    sublabel: "Completed Successfully",
                  },
                  {
                    number: "12",
                    plus: true,
                    label: "Enterprise Clients",
                    sublabel: "Fortune 500 Companies",
                  },
                  {
                    number: "98",
                    plus: false,
                    label: "Satisfaction Rate",
                    sublabel: "Client Retention %",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex sm:block items-center justify-between border-b sm:border-0 pb-4 sm:pb-0"
                  >
                    <div className="space-y-1">
                      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-500">
                        {stat.number}
                        {stat.plus && <span className="text-xl sm:text-2xl">+</span>}
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-sm text-gray-400">{stat.label}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{stat.sublabel}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto mt-4 lg:mt-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about_jc.JPG-t7NH3An3HfZoN8EjQkaOKgrPbs11zk.jpeg"
                alt="Juan Carlos"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Enhanced Responsiveness */}
      <Projects />

      {/* Service Highlights - Enhanced Responsiveness */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
              Comprehensive Digital Solutions for Modern Businesses
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              From concept to deployment, we deliver end-to-end solutions that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Web Development",
                description: "Custom web applications with React, Next.js, and modern frameworks",
              },
              {
                icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Mobile Solutions",
                description: "Native and cross-platform apps for iOS and Android",
              },
              {
                icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "UI/UX Design",
                description: "User-centered design that enhances engagement and conversion",
              },
              {
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Technical Consulting",
                description: "Expert guidance on architecture and technology selection",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg bg-zinc-900/50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-900">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
