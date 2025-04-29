import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProjectDetailsSection() {
  return (
    <section id="details" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casai-UfUulLmLkNIJpj08jTCGCKJXW1DfIX.webp"
              alt="Casai mobile app screens"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="text-sm text-amber-500 uppercase tracking-wider">ABOUT THE PROJECT</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Innovative Solutions for Modern Hospitality</h2>
            <p className="text-gray-300">
              As Tech Lead at Casai, I spearheaded the development of two Android applications that revolutionized
              property management and guest experiences. The project involved implementing cutting-edge technologies and
              best practices to create a seamless, user-friendly platform.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Achievements</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Migrated Android application from RxJava to Kotlin Coroutines
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Reduced app bundle size by 50%
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 mt-1 text-amber-500 shrink-0" />
                  Successfully migrated to Jetpack Compose
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
