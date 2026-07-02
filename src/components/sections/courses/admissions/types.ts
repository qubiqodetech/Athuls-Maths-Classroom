import { LucideIcon } from "lucide-react"

export interface LearningMode {
  id: string
  title: string
  description: string
  icon: LucideIcon
  features: string[]
}

export interface BatchSchedule {
  id: string
  title: string
  icon: LucideIcon
  suitableFor: string
  duration: string
  days: string
  seatsInfo: string
}

export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export interface InfoItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
}
