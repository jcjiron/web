"use client"

import Link from "next/link"
import { useState } from "react"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-medium">
            Juan.
          </Link>
          <div className="hidden sm:flex items-center gap-4 sm:gap-8">
            <Link href="/work" className="hover:text-gray-300">
              Work
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
          <div className="sm:hidden flex items-center gap-4">
            <button
              className="w-8 h-8 flex flex-col justify-center gap-1.5"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 border-t border-gray-800 py-4 px-4 flex flex-col gap-4 shadow-lg animate-fadeIn">
            <Link href="/work" className="text-lg py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Work
            </Link>
            <Link href="/about" className="text-lg py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-lg py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
