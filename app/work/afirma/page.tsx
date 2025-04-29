import type { Metadata } from "next"
import HeroSection from "./components/HeroSection"
import StatisticsSection from "./components/StatisticsSection"
import ProjectDetailsSection from "./components/ProjectDetailsSection"
import ServicesSection from "./components/ServicesSection"
import CTASection from "../casai/components/CTASection"

export const metadata: Metadata = {
  title: "Santander Loyalty Program | Juan Carlos - Frontend Development",
  description:
    "Development of Santander Mexico's bank loyalty program website, implementing Redux patterns and optimizing performance.",
  openGraph: {
    title: "Santander Loyalty Program | Juan Carlos - Frontend Development",
    description: "Explore our work on Santander Mexico's loyalty program, showcasing modern web development solutions.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/featured-work-NnKV456M3xYtzxAXoDe9yZ1pG0q3oM.webp",
        width: 1200,
        height: 630,
        alt: "Afirma Solutions Project Showcase",
      },
    ],
  },
}

export default function AfirmaProjectPage() {
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
