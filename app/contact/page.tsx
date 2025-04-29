import type { Metadata } from "next"
import ContactPageClient from "./client-page"

export const metadata: Metadata = {
  title: "Contact | Juan Carlos Jiron",
  description:
    "Get in touch with Juan Carlos Jiron. Connect via LinkedIn, Medium, or WhatsApp to discuss collaboration opportunities.",
  openGraph: {
    title: "Contact | Juan Carlos Jiron",
    description:
      "Get in touch with Juan Carlos Jiron. Connect via LinkedIn, Medium, or WhatsApp to discuss collaboration opportunities.",
    url: "https://juancarlosjiron.com/contact",
    siteName: "Juan Carlos Jiron Portfolio",
    locale: "en_US",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
