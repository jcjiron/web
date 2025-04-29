import type { Metadata } from "next"
import FesaProjectClientPage from "./client-page"

export const metadata: Metadata = {
  title: "FESA Project | Juan Carlos - Mobile App Development",
  description:
    "Discover how we developed a nationwide medicine delivery application for Farmacias Especializadas, revolutionizing healthcare accessibility in Mexico.",
  openGraph: {
    title: "FESA Project | Juan Carlos - Mobile App Development",
    description:
      "Explore our work on the Farmacias Especializadas delivery app, showcasing innovative solutions in healthcare logistics.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fesa-N4ChbTd8kgRmw4s62eW64l1KHdB8cK.webp",
        width: 1200,
        height: 630,
        alt: "FESA Project Showcase",
      },
    ],
  },
}

export default function FesaProjectPage() {
  return <FesaProjectClientPage />
}
