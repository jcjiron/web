export function getWhatsappUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/5583679908?text=${encodedMessage}`
}
