import type { Metadata } from "next"
import TermsAndConditionsClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Terms and Conditions | Juan Carlos Jirón",
  description: "Terms and conditions for software engineering consulting services provided by Juan Carlos Jirón.",
}

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsClientPage />
}
