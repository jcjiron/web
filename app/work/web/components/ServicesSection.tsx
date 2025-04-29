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
    description: "Building responsive interfaces with React, Next.js, and TypeScript for optimal user experiences.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frontende_development.jpg-MLquzGoL7E6B9t0haGhr6sl6QXwcuv.jpeg",
    alt: "Frontend development showcase with luxury UI design",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Backend Architecture",
    description: "Creating robust backend solutions with Django, Node.js, and PostgreSQL for scalable applications.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/backend_architecture.jpg-MOSVkXjNDIalM13B5uljEWvuQHlksn.jpeg",
    alt: "Backend architecture visualization",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "E-commerce Solutions",
    description:
      "Developing comprehensive e-commerce platforms with secure payment processing and inventory management.",
  },
  {
    type: "image",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecommerce.jpg-URBYvHfHsTGvK3T716Krt2y0uMGuEQ.jpeg",
    alt: "E-commerce mobile application interface",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Cloud Infrastructure",
    description: "Deploying applications on AWS with Docker and Kubernetes for optimal performance and scalability.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloud_computing.jpg-opou1RqANAscSKlAF7zDQj6f755vQP.jpeg",
    alt: "Cloud infrastructure visualization",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Performance Optimization",
    description: "Enhancing website speed and performance through caching, code splitting, and database optimization.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/performance_optimization.jpg-R0KLCrjfRVVZYMrcpz9pQHIYwKERa0.jpeg",
    alt: "Web performance metrics dashboard",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Internationalization",
    description: "Implementing multi-language support and region-specific features for global accessibility.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/internationalization.jpg-m3WbLhaHleSFWxfBlhcg7cFDUm0fDL.jpeg",
    alt: "Global internationalization map",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">EXPERTISE</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Web Development
            <br />
            Technologies & Services
          </h2>
          <p className="text-gray-300">
            Comprehensive web development solutions leveraging modern technologies and best practices for optimal
            performance and user experience.
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
