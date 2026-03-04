import Image from "next/image"

export function Profile() {
  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 bg-card">
        <Image
          src="/images/pm-logo.jpg"
          alt="Paiva Morais Semijoias logo"
          width={96}
          height={96}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="text-center mt-1">
        <h1 className="text-lg font-bold text-foreground">
          Paiva Morais Semijoias
        </h1>
        <p className="text-sm text-muted-foreground">
          Aumentando sua autoestima e beleza!
        </p>
      </div>
    </div>
  )
}
