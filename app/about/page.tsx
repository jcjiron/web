import type { Metadata } from "next"
import AboutPageClient from "./client-page"

export const metadata: Metadata = {
  title: "About Juan Carlos | Software Engineer & Developer",
  description:
    "Learn more about Juan Carlos Jirón Juárez - a software engineer who enjoys exploring, learning, and constantly challenging himself in both technology and life.",
  openGraph: {
    title: "About Juan Carlos | Software Engineer & Developer",
    description:
      "Learn more about Juan Carlos Jirón Juárez - a software engineer who enjoys exploring, learning, and constantly challenging himself.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2292-019aWEtaQKO4sx5JgMnU206SpQrOH0.webp",
        width: 1200,
        height: 630,
        alt: "Juan Carlos - Software Engineer",
      },
    ],
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
