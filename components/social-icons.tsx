"use client"

import type { SocialLink } from "@/lib/site-data"
import { resolveIcon } from "@/lib/icon-map"

interface SocialIconsProps {
  socials: SocialLink[]
}

export function SocialIcons({ socials }: SocialIconsProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {socials.map((social) => {
        const Icon = resolveIcon(social.icon)
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground/70 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:bg-primary/20 hover:text-primary"
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
    </div>
  )
}
