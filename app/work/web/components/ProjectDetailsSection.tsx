import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProjectDetailsSection() {
  return (
    <section id="details" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/movinglake.jpg-DgdR0Rro26b57BB3aKF2FfDzWIS2eg.jpeg"
              alt="Web interfaces"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="text-sm text-amber-500 uppercase tracking-wider">FEATURED PROJECTS</div>
            <h2 className="text-3xl sm:text-4xl font-bold">High-Impact Web Solutions</h2>
            <p className="text-gray-300">
              Leading the development of transformative web applications that serve thousands of users. Our projects
              include MovingLake's e-commerce platform generating $500,000 in monthly revenue and high-traffic websites
              receiving over 100,000 monthly visitors.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Achievements</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Developed scalable e-commerce platforms with React and Next.js
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Implemented CI/CD pipelines for automated deployments
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Created comprehensive design systems with Tailwind CSS
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Added internationalization support for global accessibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
