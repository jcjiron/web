import type { Metadata } from "next"
import CasaiProjectClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Casai Project | Juan Carlos - Mobile App Development",
  description:
    "Discover how we developed a nationwide mobile application for Casai, revolutionizing the property management and hospitality industry in Mexico.",
  openGraph: {
    title: "Casai Project | Juan Carlos - Mobile App Development",
    description:
      "Explore our work on the Casai mobile app, showcasing innovative solutions in property management and hospitality.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casai-UfUulLmLkNIJpj08jTCGCKJXW1DfIX.webp",
        width: 1200,
        height: 630,
        alt: "Casai Project Showcase",
      },
    ],
  },
}

export default function CasaiProjectPage() {
  return <CasaiProjectClientPage />
}
