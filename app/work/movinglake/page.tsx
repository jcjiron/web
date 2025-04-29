import type { Metadata } from "next"
import MovingLakeProjectClientPage from "./client-page"

export const metadata: Metadata = {
  title: "MovingLake Project | Juan Carlos - Web Platform Development",
  description:
    "Explore how we built a high-performance web platform for MovingLake, delivering scalable solutions and exceptional user experiences.",
  openGraph: {
    title: "MovingLake Project | Juan Carlos - Web Platform Development",
    description:
      "Discover our work on the MovingLake platform, showcasing modern web development and cloud infrastructure solutions.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/movinglake.jpg-DgdR0Rro26b57BB3aKF2FfDzWIS2eg.jpeg",
        width: 1200,
        height: 630,
        alt: "MovingLake Project Showcase",
      },
    ],
  },
}

export default function MovingLakeProjectPage() {
  return <MovingLakeProjectClientPage />
}
