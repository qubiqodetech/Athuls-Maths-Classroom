import { Lightbulb, BookOpen, BarChart3, TrendingUp, Target, Users, BookMarked, BrainCircuit, MessageCircleQuestion, Activity } from "lucide-react";
import { JourneyStepType, FeatureType } from "./types";

export const JOURNEY_STEPS: JourneyStepType[] = [
  {
    id: "understand",
    title: "Understand",
    description: "Every topic begins with clear explanations that simplify even the most challenging mathematical concepts.",
    icon: Lightbulb,
  },
  {
    id: "practice",
    title: "Practice",
    description: "Students solve carefully designed exercises that reinforce understanding through consistent practice.",
    icon: BookOpen,
  },
  {
    id: "analyze",
    title: "Analyze",
    description: "Regular assessments identify strengths and areas that need additional attention.",
    icon: BarChart3,
  },
  {
    id: "improve",
    title: "Improve",
    description: "Personal guidance helps students overcome weaknesses and build lasting confidence.",
    icon: TrendingUp,
  },
  {
    id: "achieve",
    title: "Achieve",
    description: "Students approach examinations with confidence and consistently deliver outstanding results.",
    icon: Target,
  }
];

export const FEATURES: FeatureType[] = [
  {
    id: "concept",
    title: "Concept-Based Learning",
    description: "Focus on building a strong foundation by thoroughly explaining concepts.",
    icon: BrainCircuit,
  },
  {
    id: "attention",
    title: "Personal Attention",
    description: "Small batch sizes and personalized mentoring ensure unique learning needs are met.",
    icon: Users,
  },
  {
    id: "revision",
    title: "Regular Revision",
    description: "Systematic revision schedules to keep previously learned concepts fresh.",
    icon: BookMarked,
  },
  {
    id: "exam",
    title: "Exam-Oriented Preparation",
    description: "Strategic preparation techniques and previous year question discussions.",
    icon: Target,
  },
  {
    id: "doubt",
    title: "Doubt Clearing Support",
    description: "Dedicated sessions to clarify doubts and resolve conceptual roadblocks.",
    icon: MessageCircleQuestion,
  },
  {
    id: "tracking",
    title: "Continuous Progress Tracking",
    description: "Detailed performance analysis to track growth and academic improvement.",
    icon: Activity,
  }
];