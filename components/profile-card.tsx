"use client"

import Image from "next/image"
import { BadgeCheck } from "lucide-react"

interface ProfileCardProps {
  name: string
  handle: string
  description: string
  image: string
  verified?: boolean
}

export function ProfileCard({
  name,
  handle,
  description,
  image,
  verified,
}: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative">
        <div className="h-24 w-24 overflow-hidden rounded-full ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        {verified && (
          <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <BadgeCheck className="h-4 w-4" />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground">
          {name}
        </h1>
        <p className="text-sm text-muted-foreground">{handle}</p>
        <p className="mt-1 max-w-xs text-sm leading-relaxed text-foreground/80">
          {description}
        </p>
      </div>
    </div>
  )
}
