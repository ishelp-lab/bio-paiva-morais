"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { ActionLink } from "@/lib/site-data"
import { resolveIcon } from "@/lib/icon-map"

interface LinkCardProps {
  link: ActionLink
}

export function LinkCard({ link }: LinkCardProps) {
  const Icon = link.icon ? resolveIcon(link.icon) : null

  if (link.featured && link.image) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl border border-border/50 transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
      >
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={link.image}
            alt={link.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/90 via-[#0d0d1a]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-2">
              {Icon && <Icon className="h-4 w-4 text-primary" />}
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {link.title}
              </h3>
            </div>
            {link.description && (
              <p className="mt-1 text-xs text-foreground/70">
                {link.description}
              </p>
            )}
          </div>
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </a>
    )
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/40 p-4 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-secondary/50">
        {link.image ? (
          <Image
            src={link.image}
            alt={link.title}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        ) : Icon ? (
          <Icon className="h-5 w-5 text-primary" />
        ) : null}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-sans text-sm font-semibold text-foreground">
          {link.title}
        </h3>
        {link.description && (
          <p className="mt-0.5 text-xs text-muted-foreground truncate">
            {link.description}
          </p>
        )}
      </div>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary">
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </a>
  )
}
