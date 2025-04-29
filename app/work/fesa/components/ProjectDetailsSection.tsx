import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProjectDetailsSection() {
  // Hardcoded project details
  const achievements = [
    "Designed and developed the complete delivery app UI",
    "Integrated Google Maps and real-time geolocation",
    "Optimized app performance for battery efficiency",
  ]

  return (
    <section id="details" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/onest-logistics-ol.jpg-CoZr8c9wCLBRxIdH75c2IdrWc8gKhg.jpeg"
              alt="FESA pharmaceutical warehouse with worker operating equipment between high shelving racks of medical supplies"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="text-sm text-amber-500 uppercase tracking-wider">ABOUT THE PROJECT</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Innovative Healthcare Logistics</h2>
            <p className="text-gray-300">
              As an Android Developer at SPS, I designed and developed a comprehensive delivery application for
              Farmacias Especializadas that streamlined medicine delivery across Mexico. The project focused on creating
              an intuitive interface while ensuring reliable delivery tracking and efficient logistics.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Achievements</h3>
              <ul className="space-y-2 text-gray-300">
                {achievements.map((achievement, index) => (
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
