import type { Metadata } from "next"
import HeroSection from "./components/HeroSection"
import StatisticsSection from "./components/StatisticsSection"
import ProjectDetailsSection from "./components/ProjectDetailsSection"
import ServicesSection from "./components/ServicesSection"
import CTASection from "../casai/components/CTASection"

export const metadata: Metadata = {
  title: "Design | Juan Carlos - UI/UX & Web Design Solutions",
  description:
    "Explore our design portfolio featuring innovative UI/UX solutions for web, showcasing expertise in modern design practices and user-centered approaches.",
  openGraph: {
    title: "Design | Juan Carlos - UI/UX & Web Design Solutions",
    description:
      "Discover our innovative web design solutions that revolutionize user experiences through cutting-edge UI/UX approaches.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casai-UfUulLmLkNIJpj08jTCGCKJXW1DfIX.webp",
        width: 1200,
        height: 630,
        alt: "Web Design Portfolio",
      },
    ],
  },
}

export default function DesignPage() {
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
