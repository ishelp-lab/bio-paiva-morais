"use client"

import { MoreVertical } from "lucide-react"

export function MoreOptionsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
      aria-label={`Mais opções para ${label}`}
      onClick={(e) => {
        e.preventDefault()
        // aqui depois você pode abrir um menu/modal
      }}
    >
      <MoreVertical className="w-4 h-4" />
    </button>
  )
}