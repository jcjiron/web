import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProjectDetailsSection() {
  return (
    <section id="details" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/USAA-banner.jpg-IM6dI0oFOCQzD4hyrpZXbutdRPO54Q.jpeg"
              alt="USAA logo with slogan 'We know what it means to serve'"
              fill
              className="object-contain bg-[#003057]"
            />
          </div>
          <div className="space-y-6">
            <div className="text-sm text-amber-500 uppercase tracking-wider">ABOUT THE ROLE</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Technical Leadership & Innovation</h2>
            <p className="text-gray-300">
              As a Software Engineer Manager at TCS, I focus on implementing scalable, maintainable, and efficient code
              while leading and mentoring development teams. My role involves proposing sustainable technical solutions
              and ensuring code quality through thorough reviews.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Responsibilities</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Implement scalable and maintainable code solutions
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Conduct thorough code reviews and technical mentoring
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Propose and implement sustainable technical solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
