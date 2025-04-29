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
    title: "Frontend Development",
    description: "Building responsive interfaces with Angular and implementing Redux patterns.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Frontend development showcase",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Server Configuration",
    description: "Setting up and optimizing NGINX web server for optimal performance.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Server configuration",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "State Management",
    description: "Implementing Redux design patterns for efficient state management.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "State management",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Analytics Integration",
    description: "Implementing Google Analytics for tracking user activity and behavior.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Analytics dashboard",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Bug Tracking",
    description: "Daily monitoring and resolution of reported issues using Jira.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Bug tracking system",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Browser Support",
    description: "Implementing polyfills to ensure cross-browser compatibility.",
  },
  {
    type: "image",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Browser compatibility",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">EXPERTISE</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Technologies & Tools Used
            <br />
            In This Project
          </h2>
          <p className="text-gray-300">
            A comprehensive tech stack that enabled us to build a robust and efficient loyalty program platform.
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
