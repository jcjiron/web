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
    title: "Technical Leadership",
    description: "Leading development teams and ensuring code quality through thorough reviews and mentoring.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/technical_leadership-kyBn6n13KogGQ48oJdHKbh4V7DtJmM.png",
    alt: "Technical leadership showcase with various programming languages and frameworks",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Solution Architecture",
    description: "Designing and implementing scalable, maintainable solutions for complex business requirements.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/picture%20of%20software%20architecture.jpg-IalivfGom7DXjCb1Xx1CvtWrCl7t00.jpeg",
    alt: "Software architecture visualization",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Team Development",
    description: "Mentoring team members and teaching new technologies and design patterns.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/team_development.jpg-Z0RXJN0bEYiRX635vn3oH2ZAAq23nE.jpeg",
    alt: "Development team collaborating around a table with laptops and digital designs",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Code Quality",
    description: "Implementing best practices and ensuring high-quality code through reviews and standards.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/code_quality.jpg-tYp3JJz1tUYSvEegf0kP4eAFTQBEh5.jpeg",
    alt: "ESLint code quality tool",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">EXPERTISE</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Technical Excellence
            <br />
            Through Leadership
          </h2>
          <p className="text-gray-300">
            Leading development teams and implementing sustainable technical solutions for complex business challenges.
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
