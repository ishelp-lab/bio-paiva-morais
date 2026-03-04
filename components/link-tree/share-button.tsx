"use client"

import { Share2 } from "lucide-react"

export function ShareButton() {
  function handleShare() {
    const url = window.location.href

    if (navigator.share) {
      navigator.share({
        title: "Paiva Morais",
        url: url,
      })
    } else {
      navigator.clipboard.writeText(url)
      alert("Link copiado!")
    }
  }

  return (
    <button
      onClick={handleShare}
      className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-accent transition-colors"
      aria-label="Compartilhar"
    >
      <Share2 className="w-4 h-4" />
    </button>
  )
}