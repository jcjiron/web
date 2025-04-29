import Link from "next/link"
import { routes } from "@/routes/routes"

const links = [
  {
    url: "https://www.linkedin.com/in/juancarlosjiron",
    label: "LinkedIn",
    id: "linkedin",
  },
  {
    url: "https://github.com/jcjiron",
    label: "GitHub",
    id: "github",
  },
  {
    id: "youtube",
    url: "https://www.youtube.com/@jcjiron",
    label: "YouTube",
  },
]

export const navigationLinks = [
  {
    title: "Work",
    number: "01",
    url: "/work",
  },
  {
    title: "About",
    number: "02",
    url: "/about",
  },
]

export const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Navigation Links */}
          <div className="space-y-4 md:space-y-6">
            <div className="text-sm text-gray-400 font-medium">Navigation</div>
            <nav className="flex flex-col space-y-3 md:space-y-4">
              {navigationLinks.map((item) => (
                <Link
                  key={item.number}
                  href={item.url}
                  className="text-sm md:text-base hover:text-gray-300 transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Links */}
          <div className="space-y-4 md:space-y-6">
            <div className="text-sm text-gray-400 font-medium">Services</div>
            <nav className="flex flex-col space-y-3 md:space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.number}
                  href={route.url}
                  className="text-sm md:text-base hover:text-gray-300 transition-colors duration-200"
                >
                  {route.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4 md:space-y-6 lg:col-span-2">
            <div className="text-sm text-gray-400 font-medium">Connect</div>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className="text-sm md:text-base hover:text-gray-300 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 md:mt-16 lg:mt-20 pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs md:text-sm text-gray-400">
              © 2023 Juan Carlos Jirón Juárez. All rights reserved.
            </div>
            <div className="flex gap-4 md:gap-6">
              <Link
                href="/privacy_policy"
                className="text-xs md:text-sm hover:text-gray-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms_and_conditions"
                className="text-xs md:text-sm hover:text-gray-300 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
