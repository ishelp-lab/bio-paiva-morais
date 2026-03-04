import Image from "next/image"
import { MoreOptionsButton } from "@/components/link-tree/more-options-button"

interface LinkButtonProps {
  label: string
  thumbnail?: string
  icon?: React.ReactNode
  href?: string
}

export function LinkButton({ label, thumbnail, icon, href = "#" }: LinkButtonProps) {
  return (
    <a
      href={href}
      className="group relative flex items-center w-full rounded-2xl bg-card hover:bg-card/80 border border-border/40 transition-all duration-200 hover:scale-[1.02] min-h-[56px]"
    >
      <div className="flex items-center justify-center w-12 h-12 ml-2 shrink-0">
        {thumbnail ? (
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <Image
              src={thumbnail}
              alt={label}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
        ) : icon ? (
          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground">
            {icon}
          </div>
        ) : null}
      </div>

      <span className="flex-1 text-center text-sm font-semibold text-foreground pr-10">
        {label}
      </span>

      <MoreOptionsButton label={label} />
    </a>
  )
}