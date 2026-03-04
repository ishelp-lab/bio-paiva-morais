import { Sparkles, Share2 } from "lucide-react"

export function Header() {
  return (
    <div className="flex items-center justify-between w-full px-4 pt-4">
      <button
        className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-accent transition-colors"
        aria-label="Configurações"
      >
        <Sparkles className="w-4 h-4" />
      </button>
      <button
        className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-accent transition-colors"
        aria-label="Compartilhar"
      >
        <Share2 className="w-4 h-4" />
      </button>
    </div>
  )
}
