import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProjectDetailsSection() {
  return (
    <section id="details" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Android development process"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="text-sm text-amber-500 uppercase tracking-wider">ABOUT THE WORK</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Android Development Excellence</h2>
            <p className="text-gray-300">
              At Beyserin Consulting, I specialized in Android development for the Girl Scouts USA cookie selling
              application, focusing on UI improvements and bug resolution to enhance user experience.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Achievements</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Resolved critical UI bugs in the application
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Conducted thorough testing in simulators
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Managed and closed defect tickets efficiently
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
