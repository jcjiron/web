import type { Metadata } from "next"
import HeroSection from "./components/HeroSection"
import StatisticsSection from "./components/StatisticsSection"
import ProjectDetailsSection from "./components/ProjectDetailsSection"
import ServicesSection from "./components/ServicesSection"
import CTASection from "../casai/components/CTASection"

export const metadata: Metadata = {
  title: "Web Development | Juan Carlos - Frontend & Backend Solutions",
  description:
    "Explore our web development portfolio featuring high-traffic websites and e-commerce platforms, showcasing expertise in React, Next.js, and modern web technologies.",
  openGraph: {
    title: "Web Development | Juan Carlos - Frontend & Backend Solutions",
    description:
      "Discover our innovative web solutions that revolutionize digital experiences through cutting-edge technologies.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/movinglake.jpg-DgdR0Rro26b57BB3aKF2FfDzWIS2eg.jpeg",
        width: 1200,
        height: 630,
        alt: "Web Development Portfolio",
      },
    ],
  },
}

export default function WebPage() {
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
