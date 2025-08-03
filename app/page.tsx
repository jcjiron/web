import type { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"
import PainPointsSection from "@/components/sections/PainPointsSection"
import ValuePropositionSection from "@/components/sections/ValuePropositionSection"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection"
import FinalCTASection from "@/components/sections/FinalCTASection"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Juan Carlos | Sistemas a Medida para Empresas en Crecimiento",
  description:
    "¿Tu empresa está creciendo más rápido que tu sistema? Diseño software a medida que no solo aguanta el crecimiento... lo potencia. Agenda una llamada sin compromiso.",
  keywords: [
    "sistemas a medida",
    "software empresarial",
    "desarrollo personalizado",
    "escalabilidad empresarial",
    "automatización de procesos",
    "Juan Carlos Jiron",
    "consultor tecnológico",
    "software engineer manager",
    "soluciones empresariales",
    "México",
  ],
  openGraph: {
    title: "Juan Carlos | Sistemas a Medida para Empresas en Crecimiento",
    description:
      "Transformo empresas que han superado las soluciones genéricas. Diseño sistemas centralizados que te permiten escalar sin perder control.",
    type: "website",
    url: "https://juancarlosjiron.com",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2292-019aWEtaQKO4sx5JgMnU206SpQrOH0.webp",
        width: 1200,
        height: 630,
        alt: "Juan Carlos - Sistemas a Medida para Empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Carlos | Sistemas a Medida para Empresas en Crecimiento",
    description:
      "Transformo empresas que han superado las soluciones genéricas. Diseño sistemas centralizados que te permiten escalar sin perder control.",
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
