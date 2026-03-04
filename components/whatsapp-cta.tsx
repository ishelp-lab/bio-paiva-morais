"use client"

import { MessageCircle } from "lucide-react"

interface WhatsAppCTAProps {
  url: string
}

export function WhatsAppCTA({ url }: WhatsAppCTAProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-sans text-sm font-bold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
    >
      <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      <span>Fale conosco no WhatsApp</span>
    </a>
  )
}
