import type React from "react"
import { metadata as baseMetadata } from "./metadata"

export const metadata = baseMetadata

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
