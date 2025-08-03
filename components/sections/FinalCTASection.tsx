"use client"
import { useState } from "react"
import type React from "react"
import { CheckCircle } from "lucide-react"

export default function FinalCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    phone: "", // Add this line
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("Failed to send message:", await response.json())
        // Optionally, set an error state for the user
      }
    } catch (error) {
      console.error("Error processing contact form:", error)
      // Optionally, set an error state for the user
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 bg-zinc-900/50">
      <div className="max-w-2xl mx-auto">
        {!isSubmitted ? (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">¿Hablamos?</h2>
              <p className="text-xl text-gray-300">
                Cuéntame sobre tu empresa y te doy un diagnóstico inicial gratuito
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                    required
                  />
                </div>
              </div>

              {/* Add the phone input field here */}
              <div>
                <input
                  type="tel" // Use type="tel" for phone numbers
                  name="phone"
                  placeholder="Tu número de teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Nombre de tu empresa"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Cuéntame brevemente cuál es tu principal desafío tecnológico..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition-colors rounded-lg disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Quiero mi diagnóstico gratuito"}
              </button>

              <p className="text-xs text-gray-400 text-center">Te respondo en menos de 24 horas • Sin compromiso</p>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">¡Perfecto!</h3>
            <p className="text-xl text-gray-300 mb-6">
              Recibí tu mensaje. Te contacto en las próximas 24 horas para agendar una llamada.
            </p>
            <p className="text-gray-400">Mientras tanto, puedes revisar algunos de mis trabajos anteriores.</p>
          </div>
        )}
      </div>
    </section>
  )
}
