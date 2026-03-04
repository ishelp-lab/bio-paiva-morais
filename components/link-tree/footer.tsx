export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-5 mt-8 mb-6">
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-full border-2 border-foreground/80 px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors"
      >
        Junte-se a paivamorais no Linktree
      </a>
      <nav className="flex items-center gap-1 text-xs text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors underline">
          Cookie Preferences
        </a>
        <span>{"•"}</span>
        <a href="#" className="hover:text-foreground transition-colors underline">
          Report
        </a>
        <span>{"•"}</span>
        <a href="#" className="hover:text-foreground transition-colors underline">
          Privacy
        </a>
        <span>{"•"}</span>
        <a href="#" className="hover:text-foreground transition-colors underline">
          Explore
        </a>
      </nav>
    </footer>
  )
}
