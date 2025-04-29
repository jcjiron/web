import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  // Services data
  const services = [
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Brand Strategy",
      description:
        "Developing comprehensive brand strategies that align with business goals and resonate with target audiences.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brand_strategy.jpg-fMHFt0FyxEqLjJOkvEGsA7YIDT88nB.jpeg",
      alt: "Brand strategy analytics dashboard",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Visual Identity",
      description:
        "Creating distinctive visual systems including logos, color palettes, typography, and graphic elements.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/visual_identity.jpg-C6lFahhghWx88ZhqntqmbzSVT7pVZE.jpeg",
      alt: "Visual identity design tools",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Brand Guidelines",
      description:
        "Developing comprehensive documentation to ensure consistent brand implementation across all touchpoints.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brand_guidelines.jpg-fpXTxOIuSONcaakm7sbhbyH5lXCDYE.jpeg",
      alt: "Brand guidelines development interface",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Brand Messaging",
      description:
        "Crafting compelling brand stories, taglines, and messaging frameworks that communicate brand values.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brand_messaging.jpg-ATvKnZEGKx5YT78n9KD7gTHVtVH8xB.jpeg",
      alt: "Brand messaging and communication",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Brand Applications",
      description:
        "Implementing brand identity across various media including print, digital, packaging, and environmental design.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brand_application.jpg-unQ9vF25ilD8GmjtWoWTkclMew7S8o.jpeg",
      alt: "Brand application on website",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Brand Audits",
      description:
        "Analyzing existing brand assets and performance to identify opportunities for improvement and refinement.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brand_audit.jpg-3IdDQYKa8KAZ0nTpUkXnNDeIfLU7wd.jpeg",
      alt: "Brand audit examples",
    },
  ]

  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">SERVICE</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Branding Services & Capabilities</h2>
          <p className="text-gray-300">
            Comprehensive branding solutions leveraging strategic thinking and creative excellence to build memorable
            and effective brand identities.
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
