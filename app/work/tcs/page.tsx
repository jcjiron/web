import type { Metadata } from "next"
import HeroSection from "./components/HeroSection"
import StatisticsSection from "./components/StatisticsSection"
import ProjectDetailsSection from "./components/ProjectDetailsSection"
import ServicesSection from "./components/ServicesSection"
import CTASection from "../casai/components/CTASection"

export const metadata: Metadata = {
  title: "TCS Projects | Juan Carlos - Software Engineering Manager",
  description:
    "Leading software engineering initiatives at TCS, implementing scalable solutions and mentoring development teams.",
  openGraph: {
    title: "TCS Projects | Juan Carlos - Software Engineering Manager",
    description: "Discover our innovative software engineering solutions and team leadership at TCS.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/featured-work-NnKV456M3xYtzxAXoDe9yZ1pG0q3oM.webp",
        width: 1200,
        height: 630,
        alt: "TCS Project Showcase",
      },
    ],
  },
}

export default function TCSProjectPage() {
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
