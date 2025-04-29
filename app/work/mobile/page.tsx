import type { Metadata } from "next"
import HeroSection from "./components/HeroSection"
import StatisticsSection from "./components/StatisticsSection"
import ProjectDetailsSection from "./components/ProjectDetailsSection"
import ServicesSection from "./components/ServicesSection"
import CTASection from "../casai/components/CTASection"

export const metadata: Metadata = {
  title: "Mobile Development | Juan Carlos - Android & Mobile Solutions",
  description:
    "Explore our mobile development portfolio featuring nationwide apps for Casai and FESA, showcasing expertise in Android development with Kotlin and modern practices.",
  openGraph: {
    title: "Mobile Development | Juan Carlos - Android & Mobile Solutions",
    description:
      "Discover our innovative mobile solutions that revolutionize industries through cutting-edge Android development.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casai-UfUulLmLkNIJpj08jTCGCKJXW1DfIX.webp",
        width: 1200,
        height: 630,
        alt: "Mobile Development Portfolio",
      },
    ],
  },
}

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <StatisticsSection />
      <ProjectDetailsSection />
      <ServicesSection />
      <CTASection />
    </div>
  )
}
