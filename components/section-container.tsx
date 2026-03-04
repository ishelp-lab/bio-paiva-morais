interface SectionContainerProps {
  children: React.ReactNode
  className?: string
}

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <section className={`flex flex-col gap-3 ${className ?? ""}`}>
      {children}
    </section>
  )
}
