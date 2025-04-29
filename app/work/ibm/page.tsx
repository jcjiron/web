import type { Metadata } from "next"
import HeroSection from "./components/HeroSection"
import StatisticsSection from "./components/StatisticsSection"
import ProjectDetailsSection from "./components/ProjectDetailsSection"
import ServicesSection from "./components/ServicesSection"
import CTASection from "../casai/components/CTASection"

export const metadata: Metadata = {
  title: "IBM Technical Support System | Juan Carlos - Full Stack Development",
  description:
    "Development of a comprehensive technical support system for IBM clients, featuring web and mobile interfaces.",
  openGraph: {
    title: "IBM Technical Support System | Juan Carlos - Full Stack Development",
    description: "Explore our work on IBM's technical support system solution.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/featured-work-NnKV456M3xYtzxAXoDe9yZ1pG0q3oM.webp",
        width: 1200,
        height: 630,
        alt: "IBM Project Showcase",
      },
    ],
  },
}

export default function IBMProjectPage() {
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
