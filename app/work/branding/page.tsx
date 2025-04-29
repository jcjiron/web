import type { Metadata } from "next"
import BrandingProjectClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Branding | Juan Carlos - Identity & Visual Design",
  description:
    "Explore our branding portfolio featuring unique visual identities and brand strategies, showcasing expertise in creating memorable and impactful brand experiences.",
  openGraph: {
    title: "Branding | Juan Carlos - Identity & Visual Design",
    description:
      "Discover our innovative branding solutions that help businesses establish strong identities and connect with their audiences.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-20%20at%2016.59.01-ibCB67QY10et58WW1RgWTpbuaUJdTl.jpeg",
        width: 1200,
        height: 630,
        alt: "Branding Portfolio",
      },
    ],
  },
}

export default function BrandingPage() {
  return <BrandingProjectClientPage />
}
