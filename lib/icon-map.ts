import {
  Instagram,
  Youtube,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Gift,
  Star,
  type LucideIcon,
} from "lucide-react"
import type { IconName } from "./site-data"

const iconMap: Record<IconName, LucideIcon> = {
  instagram: Instagram,
  youtube: Youtube,
  "message-circle": MessageCircle,
  "shopping-bag": ShoppingBag,
  sparkles: Sparkles,
  gift: Gift,
  star: Star,
}

export function resolveIcon(name: IconName): LucideIcon {
  return iconMap[name]
}
