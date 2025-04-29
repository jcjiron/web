"use client"

import { useEffect } from "react"
import ConnectSection from "@/components/ConnectSection"

export default function ContactPageClient() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-black text-white min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </div>

      <ConnectSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Availability</h2>
            <p className="text-gray-300 mb-4">
              I'm currently available for freelance work and consulting. If you have a project that needs some creative
              direction, technical expertise, or just want to chat about possibilities, feel free to reach out.
            </p>
            <p className="text-gray-300">
              Response time: <span className="text-white font-medium">Within 24-48 hours</span>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Collaboration Interests</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• Web and mobile application development</li>
              <li>• UI/UX design and implementation</li>
              <li>• Technical consulting and architecture</li>
              <li>• Enterprise solutions and digital transformation</li>
              <li>• Mentoring and technical leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
