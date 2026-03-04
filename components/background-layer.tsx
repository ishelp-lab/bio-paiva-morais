import Image from "next/image"

interface BackgroundLayerProps {
  image: string
  overlay?: string
}

export function BackgroundLayer({ image, overlay }: BackgroundLayerProps) {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b ${overlay ?? "from-[#0d0d1a]/90 via-[#0d0d1a]/70 to-[#0d0d1a]/90"}`}
      />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  )
}
