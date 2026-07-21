import { GraduationCap, BookOpen, Calculator, Rocket } from "lucide-react";
import { CourseType } from "./types";

export const COURSES: CourseType[] = [
  {
    id: "sslc",
    title: "SSLC (All Subjects)",
    description: "Build strong concepts and prepare confidently for the SSLC Board Examination through structured lessons, regular practice, and expert guidance.",
    highlights: ["Concept-Based Learning", "Model Examinations", "Revision Sessions"],
    icon: GraduationCap,
    badge: "Most Popular",
    isFeatured: true,
  },
  {
    id: "plus-one",
    title: "Plus One (All Subjects)",
    description: "Strengthen higher secondary mathematics through systematic teaching, problem-solving strategies, and continuous assessments.",
    highlights: ["Foundation Building", "Weekly Assessments", "Individual Guidance"],
    icon: BookOpen,
  },
  {
    id: "plus-two",
    title: "Plus Two (All Subjects)",
    description: "Master advanced mathematical concepts with focused preparation for board examinations and higher education.",
    highlights: ["Advanced Concepts", "Exam Preparation", "Personal Mentoring"],
    icon: Calculator,
  },
  {
    id: "revision",
    title: "Special Revision Programs",
    description: "Intensive revision batches designed to maximize confidence and performance before examinations.",
    highlights: ["Quick Revision", "Practice Tests", "Last Minute Preparation"],
    icon: Rocket,
  }
];

export const HIGHLIGHT_CHIPS = [
  "Offline Classes",
  "Online Support",
  "Small Batch Learning",
  "Doubt Clearing",
  "Exam Preparation",
  "Regular Assessments"
];
