import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProjectDetailsSection() {
  return (
    <section id="details" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/images/hero-bg.jpg"
              alt="Team using MovingLake's digital platform in a warehouse environment"
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="text-sm text-amber-500 uppercase tracking-wider">ABOUT THE PROJECT</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Building the Future of Digital Sales</h2>
            <p className="text-gray-300">
              As a Software Engineer at MovingLake, I led the development of a sales platform that transformed the way
              businesses connect with their customers. The project combined modern frontend technologies with robust
              backend solutions to create a scalable and efficient platform.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Achievements</h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Developed a high-performance sales platform",
                  "Implemented CI/CD pipelines for automated deployments",
                  "Created comprehensive design systems",
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
