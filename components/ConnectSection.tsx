"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getWhatsappUrl } from "@/utils/social-media"

export default function ConnectSection() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <div className="sticky top-24">
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">Let's Connect</h2>
            </div>
          </div>
          <div className="space-y-8">
            <p className="text-lg text-gray-300">
              If any of this resonated with you, you can find me on LinkedIn, Medium, or in a random conversation about
              any interesting topic. 🚀
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://www.linkedin.com/in/juancarlosjiron"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
              >
                LinkedIn <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://medium.com/@jcjiron4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
              >
                Medium <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={getWhatsappUrl("Hello Juan Carlos, I'd like to connect with you!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
              >
                WhatsApp <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
