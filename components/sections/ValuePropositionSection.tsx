"use client"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ValuePropositionSection() {
  return (
    <section id="value-proposition" className="px-4 sm:px-6 bg-zinc-900/50 py-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual/Stats */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/movinglake.jpg-DgdR0Rro26b57BB3aKF2FfDzWIS2eg.jpeg"
              alt="Scalable systems"
              fill
              className="object-cover"
            />
          </div>

          {/* Main content */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">The Solution</h2>

            

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-gray-300">Diagnosis in 48 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-gray-300">Without interrupting your operations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-gray-300">Results in 30 days</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-[hsl(var(--surface-elevation-1))] p-6 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">40%</div>
                <div className="text-sm text-gray-400">Less time in operations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">3x</div>
                <div className="text-sm text-gray-400">Growth capacity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
