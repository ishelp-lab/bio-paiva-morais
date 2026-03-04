import { BackgroundDistortion } from "@/components/link-tree/background-distortion"
import { Header } from "@/components/link-tree/header"
import { Profile } from "@/components/link-tree/profile"
import { LinkButton } from "@/components/link-tree/link-button"
import { Footer } from "@/components/link-tree/footer"
import { TikTokIcon } from "@/components/link-tree/tiktok-icon"
import { Camera } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-background relative">
      <BackgroundDistortion src="/images/pm-logo.jpg" />
      <div className="mx-auto max-w-md min-h-screen flex flex-col items-center px-5 pb-4">
        <Header />
        <Profile />

        <div className="flex flex-col gap-3.5 w-full mt-7">
          <LinkButton
            label="Compre Aqui"
            thumbnail="/images/thumb-compre.jpg"
            href="#"
          />
          <LinkButton
            label="Gerência"
            thumbnail="/images/thumb-gerencia.jpg"
            href="#"
          />
          <LinkButton
            label="Loja"
            thumbnail="/images/thumb-loja.jpg"
            href="#"
          />
          <LinkButton
            label="Seja uma consultora"
            icon={<Camera className="w-5 h-5" />}
            href="#"
          />
          <LinkButton
            label="TikTok"
            icon={<TikTokIcon className="w-5 h-5" />}
            href="#"
          />
        </div>

        <div className="flex-1" />

        <Footer />
      </div>
    </main>
  )
}
