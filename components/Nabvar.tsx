import Link from 'next/link'
import React from 'react'

export const Nabvar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl sm:text-2xl font-medium">
                    Juan.
                </Link>
                <div className="hidden sm:flex items-center gap-4 sm:gap-8">
                    <Link href="#work" className="hover:text-gray-300">
                        Work
                    </Link>
                    <Link href="#about" className="hover:text-gray-300">
                        About
                    </Link>
                    <Link href="#contact" className="hover:text-gray-300">
                        Contact
                    </Link>
                </div>
                <button className="sm:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
                    <span className="w-full h-0.5 bg-white"></span>
                    <span className="w-full h-0.5 bg-white"></span>
                </button>
            </div>
        </nav>
    )
}
