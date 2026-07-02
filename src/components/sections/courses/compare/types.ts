export interface ComparisonProgram {
  id: string
  name: string
  targetClass: string
  idealFor: string
  duration: string
  learningMode: string
  keyTopics: string[]
  difficultyLevel: 1 | 2 | 3
  assessmentFrequency: string
  revisionSupport: boolean
  personalMentoring: boolean
  bestFor: string
  learningFocus: string[]
}
