"use client"

import HeroSection from "./components/HeroSection"
import StatisticsSection from "./components/StatisticsSection"
import ProjectDetailsSection from "./components/ProjectDetailsSection"
import ServicesSection from "./components/ServicesSection"
import CTASection from "../casai/components/CTASection"

export default function BrandingProjectClientPage() {
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
