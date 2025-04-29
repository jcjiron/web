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

const servicesPictures = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ci_and_cd.jpg-BXo3cvx2ta7NcAdEGIF8EWdCVxR2GF.jpeg",
    alt: "Continuous Integration and Deployment with GitHub Actions",
    title: "CI/CD Pipeline",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android_development.jpg-ADLYFba6cMhG1bTzQf1pQECBIMLwhC.jpeg",
    alt: "Android Mobile Application Development",
    title: "Android Development",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/performance_optimization.jpg-JbWvbLK5Cdq2F7MPuTGOEcz3BrB9K2.jpeg",
    alt: "Mobile Performance Optimization",
    title: "Performance Optimization",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/location_services.jpg-CUDKs1F9DRbrzqOs5pOkCIObLP2dMa.jpeg",
    alt: "Location Services Integration",
    title: "Location Services",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/firebase.jpg-h9o82O5HtrcgItDZ0kn2rhJEv9dD8y.jpeg",
    alt: "Firebase Services Integration",
    title: "Firebase Integration",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/play_store.jpg-w9bBmf1P2jwYH3keFs1oCNJ97g8mVs.jpeg",
    alt: "Google Play Store Publication",
    title: "Play Store Publishing",
  },
]

const services: ServiceItem[] = [
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Modern Android Development",
    description: "Building with Kotlin, Coroutines, and Jetpack Compose for optimal performance and maintainability.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android_development.jpg-ADLYFba6cMhG1bTzQf1pQECBIMLwhC.jpeg",
    alt: "Android Mobile Application Development",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Location Services",
    description:
      "Implementing real-time tracking and navigation with Google Maps integration and geolocation services.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/location_services.jpg-CUDKs1F9DRbrzqOs5pOkCIObLP2dMa.jpeg",
    alt: "Location Services Integration",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Performance Optimization",
    description: "Enhancing app performance through bundle size reduction and efficient background processes.",
  },
  {
    type: "image",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/performance_optimization.jpg-JbWvbLK5Cdq2F7MPuTGOEcz3BrB9K2.jpeg",
    alt: "Mobile Performance Optimization",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Firebase Integration",
    description: "Utilizing Firebase services for analytics, crash reporting, and remote configuration management.",
  },
  {
    type: "image",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/firebase.jpg-h9o82O5HtrcgItDZ0kn2rhJEv9dD8y.jpeg",
    alt: "Firebase Services Integration",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "CI/CD Implementation",
    description: "Automating deployment processes with Fastlane and Bitrise for efficient release management.",
  },
  {
    type: "image",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ci_and_cd.jpg-BXo3cvx2ta7NcAdEGIF8EWdCVxR2GF.jpeg",
    alt: "Continuous Integration and Deployment with GitHub Actions",
  },
  {
    type: "text",
    icon: "/placeholder.svg?height=40&width=40",
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing with JUnit and Espresso, ensuring reliable app performance.",
  },
  {
    type: "image",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/play_store.jpg-w9bBmf1P2jwYH3keFs1oCNJ97g8mVs.jpeg",
    alt: "Google Play Store Publication",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">EXPERTISE</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Mobile Development
            <br />
            Technologies & Services
          </h2>
          <p className="text-gray-300">
            Comprehensive mobile development solutions leveraging modern technologies and best practices for optimal
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
