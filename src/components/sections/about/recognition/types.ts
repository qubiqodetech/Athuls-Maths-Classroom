import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

export interface StatItem {
  id: string
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
}

export interface RecognitionItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface TimelineMilestone {
  id: string
  title: string
  description: string
  year?: string
  icon: LucideIcon
}
