"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            PEOPLE
            <br />
            SAYS ABOUT ME
          </h2>
          <div className="max-w-md lg:text-right">
            <p className="text-gray-400 mb-8 text-lg">
              As a front end developer using modern ideas simplicity design and universal visual identification tailored
              to dedicated and current market.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors rounded-full"
            >
              Let's discuss <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edgar-IGgzpU2NHiT9PMro7lFAivkLvfjmID.webp",
              quote:
                "JC is a developer with a deep product sense. He goes beyond technical specifications and focuses on ensuring that users have the best possible experience, making him an extremely valuable member.",
              name: "Edagr Cabrera",
              role: "Movinglake Co-Founder",
            },
            {
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/julio-8xl63BHqXPzyigapm0EHIcOpptaZle.webp",
              quote: "Great Developer, always on time and with a great attitude. I would recommend him to anyone.",
              name: "Julio cueto",
              role: "TCS Manager",
            },
          ].map((testimonial, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="relative overflow-hidden rounded-lg w-[120px] h-[120px]">
                  <Image
                    width={120}
                    height={120}
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name} portrait`}
                    className="object-cover"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                <div>
                  <div className="text-sm font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
