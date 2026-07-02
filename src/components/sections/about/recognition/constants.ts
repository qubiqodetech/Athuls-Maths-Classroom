import { 
  Users, 
  Award, 
  Target,
  GraduationCap,
  Sparkles,
  Trophy,
  History,
  Rocket,
  ShieldCheck
} from "lucide-react"
import { StatItem, RecognitionItem, TimelineMilestone } from "./types"

export const ACHIEVEMENT_STATS: StatItem[] = [
  {
    id: "students-guided",
    value: 500,
    suffix: "+",
    label: "Students Guided",
    description: "Empowered to excel in mathematics"
  },
  {
    id: "outstanding-results",
    value: 100,
    suffix: "+",
    label: "Outstanding Results",
    description: "Consistent academic excellence"
  },
  {
    id: "years-excellence",
    value: 10,
    suffix: "+",
    label: "Years of Excellence",
    description: "Dedicated to educational innovation"
  },
  {
    id: "student-satisfaction",
    value: 98,
    suffix: "%",
    label: "Student Satisfaction",
    description: "Positive learning experiences"
  }
]

export const RECOGNITION_CARDS: RecognitionItem[] = [
  {
    id: "trusted-families",
    title: "Trusted by Families",
    description: "A community built on consistent support and shared educational goals.",
    icon: ShieldCheck
  },
  {
    id: "consistent-results",
    title: "Consistent Academic Results",
    description: "A proven track record of helping students achieve their highest potential.",
    icon: Trophy
  },
  {
    id: "experienced-faculty",
    title: "Experienced Faculty",
    description: "Passionate educators with deep subject expertise and mentoring skills.",
    icon: GraduationCap
  },
  {
    id: "growing-community",
    title: "Growing Student Community",
    description: "An inclusive environment where every learner feels valued and motivated.",
    icon: Users
  },
  {
    id: "personalized-learning",
    title: "Personalized Learning",
    description: "Adaptive teaching methods tailored to individual student needs and pace.",
    icon: Target
  },
  {
    id: "modern-methods",
    title: "Modern Teaching Methods",
    description: "Integrating innovative approaches to make mathematics intuitive and engaging.",
    icon: Sparkles
  }
]

export const AWARDS_TIMELINE: TimelineMilestone[] = [
  {
    id: "founded",
    year: "2014",
    title: "Institution Founded",
    description: "Started with a vision to make mathematics accessible and conceptual.",
    icon: History
  },
  {
    id: "growing",
    year: "2017",
    title: "Growing Community",
    description: "Expanded our facilities and welcomed hundreds of new students.",
    icon: Users
  },
  {
    id: "achievements",
    year: "2020",
    title: "Student Achievements",
    description: "Reached a milestone of 100+ top-tier academic results.",
    icon: Award
  },
  {
    id: "recognition",
    year: "2022",
    title: "Academic Recognition",
    description: "Acknowledged for exceptional contributions to educational excellence.",
    icon: Trophy
  },
  {
    id: "digital",
    year: "2024",
    title: "Digital Transformation",
    description: "Launched modern hybrid learning experiences for our students.",
    icon: Rocket
  },
  {
    id: "future",
    year: "Present",
    title: "Future Vision",
    description: "Continuing our commitment to transforming mathematics education.",
    icon: Target
  }
]
