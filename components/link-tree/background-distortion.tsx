import Image from "next/image"
import { useId } from "react"

type BackgroundDistortionProps = {
  src: string
  alt?: string
}

export function BackgroundDistortion({
  src,
  alt = "Background",
}: BackgroundDistortionProps) {
  const filterId = useId().replace(/:/g, "")

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      {/* Camada: imagem ampliada + blur */}
      <div className="absolute inset-0 scale-125 blur-3xl">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover opacity-80"
          style={{
            filter: `url(#${filterId})`,
          }}
        />
      </div>

      {/* Overlay pra “puxar” pro seu tom de fundo e melhorar contraste */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Vinheta suave (opcional, fica bem “premium”) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.12)_70%,rgba(0,0,0,0.22)_100%)]" />

      {/* SVG filter: ruído + deslocamento (a tal “distorção”) */}
      <svg className="absolute h-0 w-0" aria-hidden>
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  )
}