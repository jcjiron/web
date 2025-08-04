import type { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"
import PainPointsSection from "@/components/sections/PainPointsSection"
import ValuePropositionSection from "@/components/sections/ValuePropositionSection"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection"
import FinalCTASection from "@/components/sections/FinalCTASection"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Juan Carlos | Custom Systems for Growing Businesses",
  description:
    "Is your company growing faster than your system? I design custom software that not only withstands growth... it powers it. Schedule a no-obligation call.",
  keywords: [
    "custom systems",
    "business software",
    "custom development",
    "business scalability",
    "process automation",
    "Juan Carlos Jiron",
    "technology consultant",
    "software engineer manager",
    "business solutions",
    "Mexico",
  ],
  openGraph: {
    title: "Juan Carlos | Custom Systems for Growing Businesses",
    description:
      "I transform companies that have outgrown generic solutions. I design centralized systems that allow you to scale without losing control.",
    type: "website",
    url: "https://juancarlosjiron.com",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2292-019aWEtaQKO4sx5JgMnU206SpQrOH0.webp",
        width: 1200,
        height: 630,
        alt: "Juan Carlos - Custom Systems for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Carlos | Custom Systems for Growing Businesses",
    description:
      "I transform companies that have outgrown generic solutions. I design centralized systems that allow you to scale without losing control.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2292-019aWEtaQKO4sx5JgMnU206SpQrOH0.webp"],
  },
  alternates: {
    canonical: "https://juancarlosjiron.com",
  },
  authors: [{ name: "Juan Carlos Jiron" }],
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <PainPointsSection />
      <ValuePropositionSection />
      <CaseStudiesSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
