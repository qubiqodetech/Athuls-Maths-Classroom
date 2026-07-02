import { 
  UserPlus, 
  Lightbulb, 
  NotebookPen, 
  ClipboardCheck, 
  RefreshCcw, 
  Award,
  BookOpen,
  Target,
  MessageCircle,
  FileEdit,
  LineChart,
  UserCheck
} from "lucide-react"
import { JourneyStageType, SupportFeatureType } from "./types"

export const JOURNEY_STAGES: JourneyStageType[] = [
  {
    id: "stage-1",
    number: "01",
    icon: UserPlus,
    title: "Enrollment",
    description: "Choose the right mathematics program and complete your admission."
  },
  {
    id: "stage-2",
    number: "02",
    icon: Lightbulb,
    title: "Concept Building",
    description: "Understand every topic from its fundamentals before solving problems."
  },
  {
    id: "stage-3",
    number: "03",
    icon: NotebookPen,
    title: "Guided Practice",
    description: "Practice carefully selected exercises with continuous faculty support."
  },
  {
    id: "stage-4",
    number: "04",
    icon: ClipboardCheck,
    title: "Assessment",
    description: "Weekly tests and assignments measure progress and identify improvement areas."
  },
  {
    id: "stage-5",
    number: "05",
    icon: RefreshCcw,
    title: "Revision",
    description: "Structured revision sessions strengthen concepts before examinations."
  },
  {
    id: "stage-6",
    number: "06",
    icon: Award,
    title: "Achievement",
    description: "Enter examinations with confidence and achieve your academic goals."
  }
]

export const SUPPORT_FEATURES: SupportFeatureType[] = [
  {
    id: "feat-1",
    title: "Daily Practice",
    icon: BookOpen
  },
  {
    id: "feat-2",
    title: "Regular Tests",
    icon: Target
  },
  {
    id: "feat-3",
    title: "One-to-One Doubt Clearing",
    icon: MessageCircle
  },
  {
    id: "feat-4",
    title: "Weekly Revision",
    icon: FileEdit
  },
  {
    id: "feat-5",
    title: "Performance Tracking",
    icon: LineChart
  },
  {
    id: "feat-6",
    title: "Individual Feedback",
    icon: UserCheck
  }
]
