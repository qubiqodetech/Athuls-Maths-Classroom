import { LucideIcon } from "lucide-react"

export interface ObjectiveType {
  id: string
  icon: LucideIcon
  title: string
  description: string
}

export interface TopicType {
  id: string
  title: string
  description?: string
  subtopics?: string[]
}

export interface BenefitType {
  id: string
  icon: LucideIcon
  title: string
}

export interface TeachingStepType {
  id: string
  title: string
  icon?: LucideIcon
}

export interface OutcomeType {
  id: string
  icon: LucideIcon
  title: string
}

export interface ProgramType {
  id: string
  name: string
  targetClass: string
  icon: LucideIcon
  shortDescription: string
  audience: string[]
  objectives: ObjectiveType[]
  topics: TopicType[]
  benefits: BenefitType[]
  teachingMethod: TeachingStepType[]
  outcomes: OutcomeType[]
}
