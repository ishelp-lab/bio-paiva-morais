interface BioFooterProps {
  brand: string
  copyright: string
}

export function BioFooter({ brand, copyright }: BioFooterProps) {
  return (
    <footer className="flex flex-col items-center gap-1 py-6 text-center">
      <p className="font-serif text-xs font-semibold tracking-wider text-foreground/50">
        {brand}
      </p>
      <p className="text-[10px] text-foreground/30">{copyright}</p>
    </footer>
  )
}
