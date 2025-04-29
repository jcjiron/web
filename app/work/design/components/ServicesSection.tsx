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
    title: "UI/UX Design",
    description: "Creating intuitive user interfaces and experiences that guide visitors toward conversion goals.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ux_ui_design.jpg-fGEH1WnuUcIu6tASZ7c0AANqNwBqr6.jpeg",
    alt: "Figma UI/UX design interface showing design tools",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Responsive Web Design",
    description:
      "Ensuring perfect functionality and appearance across all devices, from mobile phones to large desktop screens.",
  },
  {
    type: "image",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/responsive.jpg-2NAVaKis8cwWKRyIvGSndeFLrmQQma.jpeg",
    alt: "Tailwind CSS logo with colorful background for responsive design",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Performance Optimization",
    description: "Enhancing website speed and performance for better user experience and search engine rankings.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/performance.jpg-o2N7l13KklXwFpczHTr7PML92HXQt2.jpeg",
    alt: "Lighthouse Chrome Plugin showing website performance metrics",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "E-commerce Solutions",
    description: "Building robust online stores with secure payment processing and inventory management systems.",
  },
  {
    type: "image",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecommerce.jpg-g46lMkoZiZ6GfonVanmsV3r24YB3zR.jpeg",
    alt: "Shopify logo representing e-commerce solutions",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "CMS Implementation",
    description: "Setting up content management systems that empower clients to easily update their website content.",
  },
  {
    type: "image",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cms.jpg-TvHzMD3JyKCKag6K03UQ1DMMXIYL8A.jpeg",
    alt: "Prismic CMS interface on a tablet with colorful design",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "SEO & Analytics Integration",
    description: "Implementing search engine optimization best practices and comprehensive analytics tracking.",
  },
  {
    type: "image",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seo.jpg-eJZhpqRWXztpdoZTaKNx7bQPS0b3GL.jpeg",
    alt: "Google Analytics dashboard on a smartphone showing colorful charts and metrics",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">EXPERTISE</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Web Design
            <br />
            Services & Solutions
          </h2>
          <p className="text-gray-300">
            Comprehensive web design and development solutions leveraging modern technologies and best practices for
            optimal user experience and business results.
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
