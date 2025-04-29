import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

type ServiceItem = {
  type: "text" | "image"
  icon?: string
  title?: string
  description?: string
  image?: string
  alt?: string
}

export default function ServicesSection() {
  // Services data
  const services = [
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Android Development",
      description:
        "Built with Kotlin and modern Android practices including Jetpack Compose, Coroutines, Room, and Hilt for dependency injection.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android_development.jpg-OyUNtIuYp7kfnQiWqIVzD8TMh3cBwH.jpeg",
      alt: "Android mobile app development",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Location & Notifications",
      description:
        "Integrated GPS, Maps, and Push Notifications for real-time location tracking and user engagement features.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/location_services.jpg-5QSfQas1mKikoZVoCjtJM5Otqzqo8L.jpeg",
      alt: "Location services integration",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Firebase & Analytics",
      description:
        "Implemented Firebase Crashlytics, Analytics, Remote Config, and Google Tag Manager for comprehensive app monitoring.",
    },
    {
      type: "image",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/firebase.jpg-l6bdmOwS5WDsrhFOKa9XQvgSk8e0Vf.jpeg",
      alt: "Firebase services integration",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Web Technologies",
      description:
        "Developed complementary web interfaces using React, TypeScript, and Next.js, styled with SCSS and Bootstrap.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/responsive2.jpg-8coBu7qySCKkesGhybh8CJDSRPvGeT.jpeg",
      alt: "Responsive web design",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "DevOps & Infrastructure",
      description: "Automated deployment with Fastlane, Bitrise, and Docker, utilizing AWS S3 for storage solutions.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloud_infra.jpg-Jm521W0i8aC1U0hQvJA1v7QjFaurjI.jpeg",
      alt: "AWS cloud infrastructure",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Project Management",
      description:
        "Managed workflow with Jira, Confluence, and Slack for efficient team collaboration and project tracking.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brand_strategy.jpg-8RaEjabWkBsktqhkRiWu97oQh3IR9p.jpeg",
      alt: "Brand strategy analytics dashboard",
    },
  ]

  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">SERVICE</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Technologies & Tools Used In This Project</h2>
          <p className="text-gray-300">
            A comprehensive tech stack that enabled us to build a robust, scalable, and user-friendly mobile
            application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) =>
            item.type === "text" ? (
              // Text Card
              <Card
                key={index}
                className="bg-[hsl(var(--surface-elevation-1))] border-0 overflow-hidden hover:bg-[hsl(var(--surface-elevation-2))] transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-800 shrink-0">
                      <Image src={item.icon || "/placeholder.svg"} alt="" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              // Image Card
              <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
