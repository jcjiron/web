import type { Metadata } from "next"
import HeroSection from "./components/HeroSection"
import StatisticsSection from "./components/StatisticsSection"
import ProjectDetailsSection from "./components/ProjectDetailsSection"
import ServicesSection from "./components/ServicesSection"
import CTASection from "../casai/components/CTASection"

export const metadata: Metadata = {
  title: "Beyserin Consulting | Juan Carlos - Android Development",
  description:
    "Android development for Girl Scouts USA cookie selling application, focusing on UI improvements and bug resolution.",
  openGraph: {
    title: "Beyserin Consulting | Juan Carlos - Android Development",
    description: "Specialized Android development and bug resolution for Girl Scouts USA application.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/featured-work-NnKV456M3xYtzxAXoDe9yZ1pG0q3oM.webp",
        width: 1200,
        height: 630,
        alt: "Beyserin Consulting Android Development Showcase",
      },
    ],
  },
}

export default function BeyserinProjectPage() {
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
