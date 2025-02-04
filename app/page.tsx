import type { Metadata } from "next"
import MainSection from "@/components/MainSection"
import FeaturedWorkSection from "@/components/FeaturedWorkSection"
import RunningProjectsSection from "@/components/RunningProjectsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import Link from "next/link"
import { Nabvar } from "@/components/Nabvar"

export const metadata: Metadata = {
  title: "Juan Carlos | Web Design & Development Expert",
  description:
    "Expert web designer and developer with 7+ years of experience. Specializing in luxury web design, modern web development, and strategic branding solutions for businesses.",
  keywords: [
    "web design",
    "web development",
    "branding",
    "UI/UX design",
    "React developer",
    "Next.js expert",
    "Juan Carlos Jiron",
    "frontend developer",
    "software engineer",
    "Mexico City developer",
  ],
  openGraph: {
    title: "Juan Carlos | Web Design & Development Expert",
    description:
      "Transform your digital presence with expert web design, development, and branding services. View my portfolio of high-impact digital solutions.",
    type: "website",
    url: "https://juancarlosjiron.com",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2292-019aWEtaQKO4sx5JgMnU206SpQrOH0.webp",
        width: 1200,
        height: 630,
        alt: "Juan Carlos - Web Design & Development Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Carlos | Web Design & Development Expert",
    description:
      "Transform your digital presence with expert web design, development, and branding services. View my portfolio of high-impact digital solutions.",
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
      {/* Navigation */}
      <Nabvar />
      <MainSection />
      <FeaturedWorkSection />
      <RunningProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

