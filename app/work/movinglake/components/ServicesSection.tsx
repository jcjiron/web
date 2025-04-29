import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  // Services data
  const services = [
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Frontend Development",
      description: "Built with React, TypeScript, and Next.js, creating responsive and performant user interfaces.",
    },
    {
      type: "image",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frontend-d9FiR5y9I6a1AMI1gVP1olWGi2T5Fk.webp",
      alt: "Next.js frontend development",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Backend Architecture",
      description: "Powered by Django and PostgreSQL, with Python microservices for scalable backend operations.",
    },
    {
      type: "image",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/backend.jpg-a2cVtqzV9PzvMET1ACco8LleBVbWiR.jpeg",
      alt: "Django backend architecture",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Cloud Infrastructure",
      description: "Deployed on AWS with Docker and Kubernetes for container orchestration and scalability.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloud_infra.jpg-8WSNCKYGP5YNbPa2QukHIc8JJnwQmf.jpeg",
      alt: "AWS cloud infrastructure",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Design Systems",
      description: "Created with Tailwind CSS and custom components, ensuring consistent UI across the platform.",
    },
    {
      type: "image",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design_system-eyXf9W5MNNIyOKCm9QcAnmr3UnM7Fv.png",
      alt: "Tailwind CSS design system",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Performance Optimization",
      description: "Implemented caching strategies and optimized database queries for maximum performance.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/performance.jpg-o2N7l13KklXwFpczHTr7PML92HXQt2.jpeg",
      alt: "Performance metrics",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Internationalization",
      description: "Added multi-language support and region-specific features for global accessibility.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/international-626BN6cFTY0Mocgx3SZDdSxg7Rjsms.jpeg",
      alt: "Internationalization and global reach",
    },
  ]

  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">SERVICE</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Technologies & Tools Used In This Project</h2>
          <p className="text-gray-300">
            A modern tech stack that enabled us to build a scalable, high-performance web platform with exceptional user
            experiences.
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
