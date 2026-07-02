import { LucideIcon } from "lucide-react"

export interface JourneyStageType {
  id: string
  number: string
  icon: LucideIcon
  title: string
  description: string
}

export interface SupportFeatureType {
  id: string
  title: string
  icon: LucideIcon
}
