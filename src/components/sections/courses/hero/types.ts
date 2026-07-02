import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

export interface CourseCardType {
  id: string
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
}

export interface StatItemType {
  id: string
  value: string
  label: string
}

export interface TrustChipType {
  id: string
  label: string
}
