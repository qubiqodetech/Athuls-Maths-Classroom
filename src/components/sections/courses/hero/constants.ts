import { 
  Calculator, 
  TrendingUp, 
  Award,
  BookOpen
} from "lucide-react"
import { CourseCardType, StatItemType, TrustChipType } from "./types"

export const TRUST_CHIPS: TrustChipType[] = [
  { id: "concept", label: "Concept-Based Learning" },
  { id: "batch", label: "Small Batch Guidance" },
  { id: "assessment", label: "Regular Assessments" },
  { id: "mentoring", label: "Personal Mentoring" },
  { id: "hybrid", label: "Offline & Online Learning" }
]

export const COURSE_CARDS: CourseCardType[] = [
  {
    id: "sslc",
    title: "SSLC Mathematics",
    subtitle: "Class 10",
    description: "Build a strong foundation for your first major board examination.",
    icon: Calculator
  },
  {
    id: "plus-one",
    title: "Plus One Mathematics",
    subtitle: "Higher Secondary",
    description: "Navigate the transition to higher secondary concepts with confidence.",
    icon: TrendingUp
  },
  {
    id: "plus-two",
    title: "Plus Two Mathematics",
    subtitle: "Board Examination",
    description: "Master advanced topics and prepare for academic excellence.",
    icon: Award
  },
  {
    id: "revision",
    title: "Revision Programs",
    subtitle: "Exam Preparation",
    description: "Intensive exam-focused revision sessions for maximum results.",
    icon: BookOpen
  }
]

export const FLOATING_STATS: StatItemType[] = [
  { id: "results", value: "100+", label: "Outstanding Results" },
  { id: "teaching", value: "10+", label: "Years of Teaching" },
  { id: "students", value: "500+", label: "Students Guided" },
  { id: "success", value: "98%", label: "Success Rate" }
]
