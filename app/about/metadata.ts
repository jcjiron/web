import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Juan Carlos | Software Engineering & Design Excellence",
  description:
    "Learn about Juan Carlos's 7+ years of experience in software engineering, web development, and digital innovation. Discover our proven track record of delivering exceptional results for clients worldwide.",
  keywords: [
    "about Juan Carlos",
    "software engineer background",
    "web development experience",
    "technical expertise",
    "development skills",
    "software engineering career",
    "professional background",
    "tech leadership",
    "development portfolio",
    "Mexico City developer",
  ],
  openGraph: {
    title: "About Juan Carlos | Software Engineering & Design Excellence",
    description:
      "Discover the expertise and innovation behind our software engineering and design services. Learn about our journey, skills, and commitment to excellence.",
    type: "website",
    url: "https://juancarlosjiron.com/about",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2292-019aWEtaQKO4sx5JgMnU206SpQrOH0.webp",
        width: 1200,
        height: 630,
        alt: "Juan Carlos - Software Engineering & Design Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Juan Carlos | Software Engineering & Design Excellence",
    description:
      "Discover the expertise and innovation behind our software engineering and design services. Learn about our journey, skills, and commitment to excellence.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2292-019aWEtaQKO4sx5JgMnU206SpQrOH0.webp"],
  },
  alternates: {
    canonical: "https://juancarlosjiron.com/about",
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
