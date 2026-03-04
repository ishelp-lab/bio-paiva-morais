"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface FeaturedContentProps {
  title: string
  description: string
  image: string
  url: string
}

export function FeaturedContent({
  title,
  description,
  image,
  url,
}: FeaturedContentProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            {title}
          </p>
          <p className="mt-1 font-serif text-lg font-semibold leading-snug text-foreground">
            {description}
          </p>
        </div>
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </a>
  )
}
