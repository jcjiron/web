import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Moving Lake",
    category: "Web Platform",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/movinglake.jpg-DgdR0Rro26b57BB3aKF2FfDzWIS2eg.jpeg",
    link: "/work/movinglake",
  },
  {
    title: "Casai",
    category: "Mobile App",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casai-UfUulLmLkNIJpj08jTCGCKJXW1DfIX.webp",
    link: "/work/casai",
  },
  {
    title: "FESA",
    category: "Delivery App",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fesa-N4ChbTd8kgRmw4s62eW64l1KHdB8cK.webp",
    link: "/work/fesa",
  },
  {
    title: "TCS",
    category: "Software Engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/featured-work-NnKV456M3xYtzxAXoDe9yZ1pG0q3oM.webp",
    link: "/work/tcs",
  },
]

export const Projects = () => {
  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 rounded-lg"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <div className="text-sm text-gray-400 mb-1 sm:mb-2">{project.category}</div>
              <div className="text-lg sm:text-xl font-bold">{project.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
