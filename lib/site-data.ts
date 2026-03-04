export type IconName =
  | "instagram"
  | "youtube"
  | "message-circle"
  | "shopping-bag"
  | "sparkles"
  | "gift"
  | "star"

export interface SocialLink {
  name: string
  url: string
  icon: IconName
}

export interface ActionLink {
  title: string
  description?: string
  url: string
  icon?: IconName
  image?: string
  featured?: boolean
}

export interface Testimonial {
  name: string
  text: string
  role?: string
}

export interface SiteData {
  profile: {
    name: string
    handle: string
    description: string
    image: string
    verified: boolean
  }
  background: {
    image: string
    overlay: string
  }
  socials: SocialLink[]
  links: ActionLink[]
  testimonials: Testimonial[]
  featured?: {
    title: string
    description: string
    image: string
    url: string
  }
  footer: {
    brand: string
    copyright: string
  }
}

export const siteData: SiteData = {
  profile: {
    name: "Paiva Morais",
    handle: "@paivamorais.semijoias",
    description:
      "Semijoias com banho de ouro 18k e prata 925. Revenda com lucro garantido.",
    image: "/images/profile.jpg",
    verified: true,
  },
  background: {
    image: "/images/background.jpg",
    overlay: "from-[#0d0d1a]/90 via-[#0d0d1a]/70 to-[#0d0d1a]/90",
  },
  socials: [
    {
      name: "Instagram",
      url: "https://instagram.com/paivamorais.semijoias",
      icon: "instagram",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@paivamorais",
      icon: "youtube",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/5500000000000",
      icon: "message-circle",
    },
  ],
  links: [
    {
      title: "Nova Colecao Brilho Delas",
      description: "Pecas exclusivas para o mes das mulheres",
      url: "#",
      icon: "sparkles",
      image: "/images/collection.jpg",
      featured: true,
    },
    {
      title: "Catalogo Completo",
      description: "Veja todas as pecas disponiveis",
      url: "#",
      icon: "shopping-bag",
      image: "/images/catalog.jpg",
    },
    {
      title: "Quero ser Revendedora",
      description: "Comece a lucrar sem investimento",
      url: "#",
      icon: "gift",
    },
    {
      title: "Depoimentos de Revendedoras",
      description: "Veja quem ja esta lucrando",
      url: "#",
      icon: "star",
    },
  ],
  testimonials: [
    {
      name: "Ana Paula",
      text: "Comecei sem investir nada e hoje ja tenho uma renda extra incrivel. As pecas se vendem sozinhas!",
      role: "Revendedora ha 8 meses",
    },
    {
      name: "Carla Souza",
      text: "A qualidade das semijoias e surpreendente. Minhas clientes amam e sempre voltam para comprar mais.",
      role: "Revendedora ha 1 ano",
    },
    {
      name: "Juliana Lima",
      text: "O suporte da equipe Paiva Morais faz toda a diferenca. Me sinto acolhida e motivada todos os dias.",
      role: "Revendedora ha 6 meses",
    },
  ],
  featured: {
    title: "Nova Colecao",
    description: "Brilho Delas - Uma colecao para representar tudo aquilo que voce e.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qjw2PBLupFax29OY4idEPzz8a8Bcvi.png",
    url: "#",
  },
  footer: {
    brand: "© Powered by Is Help",
    copyright: `Publicidade & Interfaces`,
  },
}
