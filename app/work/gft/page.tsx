import type { Metadata } from "next"
import HeroSection from "./components/HeroSection"
import StatisticsSection from "./components/StatisticsSection"
import ProjectDetailsSection from "./components/ProjectDetailsSection"
import ServicesSection from "./components/ServicesSection"
import CTASection from "../casai/components/CTASection"

export const metadata: Metadata = {
  title: "Banking & Inventory Systems | Juan Carlos - Frontend Development",
  description:
    "Development of critical systems for Apple device inventory and Sabadell Bank's online banking platform.",
  openGraph: {
    title: "Banking & Inventory Systems | Juan Carlos - Frontend Development",
    description: "Explore our work on enterprise-level systems for major tech and banking clients.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/featured-work-NnKV456M3xYtzxAXoDe9yZ1pG0q3oM.webp",
        width: 1200,
        height: 630,
        alt: "GFT Projects Showcase",
      },
    ],
  },
}

export default function GFTProjectPage() {
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
