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

const services: ServiceItem[] = [
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Kotlin Development",
    description: "Building robust Android applications using modern Kotlin features and best practices.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Kotlin development showcase",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "UI Development",
    description: "Creating intuitive user interfaces using Activities, Fragments, and Material Design.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "UI development",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Bug Resolution",
    description: "Efficiently identifying and resolving application defects and UI issues.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Bug resolution process",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Testing",
    description: "Comprehensive testing using Android simulators to ensure application quality.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Testing process",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Project Management",
    description: "Efficient ticket management and daily status reporting using Jira.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Project management",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Version Control",
    description: "Code management and collaboration using Git and GitHub.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Version control",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">TECH STACK</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Technologies &
            <br />
            Expertise
          </h2>
          <p className="text-gray-300">
            Leveraging modern Android development tools and practices to deliver high-quality solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) =>
            item.type === "text" ? (
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
