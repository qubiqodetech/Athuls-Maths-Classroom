import { BookOpen, Users, Target, Award } from "lucide-react";
import { TrustStat, RecognitionItem, TrustChipItem } from "./types";

export const TRUST_STATS: TrustStat[] = [
  { value: "500+", label: "Students Mentored" },
  { value: "98%", label: "Student Satisfaction" },
  { value: "100+", label: "A+ Achievers" },
  { value: "10+", label: "Years of Excellence" },
];

export const RECOGNITION_CARDS: RecognitionItem[] = [
  {
    id: "faculty",
    title: "Experienced Faculty",
    description: "Experienced educators focused on conceptual understanding.",
    icon: Users,
  },
  {
    id: "attention",
    title: "Personal Attention",
    description: "Individual guidance to support every student's learning journey.",
    icon: Target,
  },
  {
    id: "assessments",
    title: "Regular Assessments",
    description: "Continuous evaluation to improve confidence and exam performance.",
    icon: BookOpen,
  },
  {
    id: "results",
    title: "Result-Oriented Learning",
    description: "Structured teaching methods designed to help students excel.",
    icon: Award,
  },
];

export const TRUST_CHIPS: TrustChipItem[] = [
  { id: "chip-1", label: "Offline & Online Learning" },
  { id: "chip-2", label: "Individual Mentoring" },
  { id: "chip-3", label: "Experienced Teachers" },
  { id: "chip-4", label: "Concept-Based Learning" },
  { id: "chip-5", label: "Exam-Oriented Preparation" },
];
