import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProjectDetailsSection() {
  return (
    <section id="details" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-20%20at%2016.59.01-ibCB67QY10et58WW1RgWTpbuaUJdTl.jpeg"
              alt="Brand identity showcase"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="text-sm text-amber-500 uppercase tracking-wider">ABOUT THE PROJECT</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Distinctive Brand Identities</h2>
            <p className="text-gray-300">
              Creating memorable and impactful brand identities that help businesses stand out in their markets. Our
              branding projects focus on developing unique visual languages and consistent brand experiences across all
              touchpoints.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Achievements</h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Developed comprehensive brand identity systems",
                  "Created brand guidelines for consistent implementation",
                  "Designed memorable logos and visual elements",
                  "Implemented brand strategies that increased recognition",
                ].map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
