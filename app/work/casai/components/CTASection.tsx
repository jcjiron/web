import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  // Default CTA content
  const ctaContent = {
    title: "Ready to Build Something Amazing?",
    description: "Let's collaborate on your next project and create innovative solutions that drive real results.",
    cta: "Start a Project",
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{ctaContent.title}</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{ctaContent.description}</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
        >
          {ctaContent.cta} <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
