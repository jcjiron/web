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
      description: "Built with Kotlin, utilizing Coroutines, Retrofit, Hilt, and Room for a robust mobile application.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android_development.jpg-FYbML0fmUzmUJPhSB1BIXHKdFCz3WM.jpeg",
      alt: "Android mobile app development",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Location Services",
      description:
        "Integrated Google Maps API and geolocation services for real-time delivery tracking and navigation.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/location_services.jpg-lrRVqeUGDgM5W6VUOZVJyEP6ubra5q.jpeg",
      alt: "Google Maps location services",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "UI/UX Design",
      description: "Created an intuitive interface with Material Design components and Jetpack Compose.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background%20process.jpg-qpQgz8d6FhvWvNzmrXXtNIgDDDuO54.jpeg",
      alt: "Android UI design on multiple devices",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Background Services",
      description: "Implemented efficient background processes for location updates and delivery notifications.",
    },
    {
      type: "image",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/firebase.jpg-l6bdmOwS5WDsrhFOKa9XQvgSk8e0Vf.jpeg",
      alt: "Firebase services integration",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Testing & QA",
      description: "Comprehensive testing with JUnit and Espresso, including geolocation scenario simulations.",
    },
    {
      type: "image",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testing-vw43d3v3D6A537E7YDkHQf3tMKfWYe.png",
      alt: "Firebase Crashlytics for testing and monitoring",
    },
    {
      type: "text",
      icon: "/placeholder.svg?height=40&width=40",
      title: "Deployment",
      description: "Managed Android releases and APK deployments to Google Play Store with automated workflows.",
    },
    {
      type: "image",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/play_store.jpg-H9RLDXycUbKqsmUQIiDeLA0p8HJsuF.jpeg",
      alt: "Google Play Store deployment",
    },
  ]

  return (
    <section className="py-20 px-4 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">SERVICE</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Technologies & Tools Used In This Project</h2>
          <p className="text-gray-300">
            A comprehensive mobile development stack that enabled us to build a reliable and efficient delivery
            application.
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
