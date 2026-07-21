import { 
  Users, Laptop, Repeat, 
  Sun, Moon, Calendar, 
  MousePointerClick, PhoneCall, FileText, Play,
  Clock, CheckCircle, MapPin, 
  CreditCard, Award, FileCheck
} from "lucide-react"
import { LearningMode, BatchSchedule, ProcessStep, InfoItem } from "./types"

export const LEARNING_MODES: LearningMode[] = [
  {
    id: "offline",
    title: "Offline Classroom",
    description: "Traditional face-to-face learning in our modern classrooms.",
    icon: Users,
    features: ["Personal interaction", "Focused environment", "Printed materials"]
  },
  {
    id: "online",
    title: "Online Learning",
    description: "Live interactive classes from the comfort of your home.",
    icon: Laptop,
    features: ["Live sessions", "Digital resources", "Flexible location"]
  },
  {
    id: "hybrid",
    title: "Hybrid Learning",
    description: "The perfect balance of classroom and digital learning.",
    icon: Repeat,
    features: ["Offline + Online", "Revision support", "Maximum flexibility"]
  }
]

export const BATCH_SCHEDULES: BatchSchedule[] = [
  {
    id: "morning",
    title: "Morning Batch",
    icon: Sun,
    suitableFor: "Early risers and weekend students",
    duration: "2 Hours / Session",
    days: "Weekends / Selected Days",
    seatsInfo: "Filling Fast"
  },
  {
    id: "evening",
    title: "Evening Batch",
    icon: Moon,
    suitableFor: "Regular school-going students",
    duration: "1.5 Hours / Session",
    days: "Weekdays (After School)",
    seatsInfo: "Available"
  },
  {
    id: "weekend",
    title: "Weekend Batch",
    icon: Calendar,
    suitableFor: "Students from distant locations",
    duration: "3 Hours / Session",
    days: "Saturday & Sunday",
    seatsInfo: "Limited Seats"
  }
]

export const ADMISSION_STEPS: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Choose Program",
    description: "Select the academic program that fits your academic goals.",
    icon: MousePointerClick
  },
  {
    id: "step-2",
    number: "02",
    title: "Speak With AMC",
    description: "Consult with our academic advisors for personalized guidance.",
    icon: PhoneCall
  },
  {
    id: "step-3",
    number: "03",
    title: "Complete Registration",
    description: "Fill out the admission form and submit required documents.",
    icon: FileText
  },
  {
    id: "step-4",
    number: "04",
    title: "Start Learning",
    description: "Join your batch and begin your journey to mathematical excellence.",
    icon: Play
  }
]

export const WHATS_INCLUDED: string[] = [
  "Concept-Based Classes",
  "Printed Notes",
  "Practice Worksheets",
  "Weekly Assessments",
  "Revision Sessions",
  "Personal Doubt Clearing",
  "Progress Feedback",
  "Course Certificates"
]

export const IMPORTANT_INFO: InfoItem[] = [
  {
    id: "info-1",
    title: "Course Duration",
    description: "Typically 1 academic year (10 months) aligned with school terms.",
    icon: Clock
  },
  {
    id: "info-2",
    title: "Eligibility",
    description: "Open to students currently enrolled in the respective classes.",
    icon: CheckCircle
  },
  {
    id: "info-3",
    title: "Required Materials",
    description: "Notebooks, stationery, and AMC provided study materials.",
    icon: FileCheck
  },
  {
    id: "info-4",
    title: "Attendance",
    description: "Minimum 85% attendance required for optimal learning outcomes.",
    icon: Users
  },
  {
    id: "info-5",
    title: "Fee Information",
    description: "Contact our admission desk for detailed fee structure and payment plans.",
    icon: CreditCard
  },
  {
    id: "info-6",
    title: "Scholarship",
    description: "Merit-based scholarships available for outstanding students.",
    icon: Award
  }
]
