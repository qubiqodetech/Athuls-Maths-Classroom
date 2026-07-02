import { Lightbulb, Notebook, MessageCircle, ClipboardCheck, Target, Brain, User, Users, FileText, HelpCircle, Shield } from "lucide-react";
import { LearningStageType, PhilosophyCardType, PrincipleType } from "./types";

export const LEARNING_STAGES: LearningStageType[] = [
  { id: "s-1", title: "Understand", description: "Every concept is introduced with simple explanations and practical examples.", icon: Lightbulb },
  { id: "s-2", title: "Practice", description: "Students solve carefully structured exercises to strengthen understanding.", icon: Notebook },
  { id: "s-3", title: "Discuss", description: "Questions and doubts are encouraged until every concept becomes clear.", icon: MessageCircle },
  { id: "s-4", title: "Evaluate", description: "Regular assessments help identify strengths and areas for improvement.", icon: ClipboardCheck },
  { id: "s-5", title: "Excel", description: "Students approach examinations with confidence, accuracy, and strong conceptual knowledge.", icon: Target },
];

export const PHILOSOPHY_CARDS: PhilosophyCardType[] = [
  { id: "pc-1", title: "Concept-Based Learning", description: "Focusing on the 'why' and 'how' rather than just memorizing formulas.", icon: Brain },
  { id: "pc-2", title: "Individual Attention", description: "Understanding that every student has a unique pace and learning style.", icon: User },
  { id: "pc-3", title: "Small Batch Guidance", description: "Maintaining optimal student-teacher ratios for better interaction.", icon: Users },
  { id: "pc-4", title: "Continuous Assessment", description: "Tracking progress regularly to ensure steady academic improvement.", icon: FileText },
  { id: "pc-5", title: "Personal Doubt Clearing", description: "Dedicated sessions to address specific questions and strengthen concepts.", icon: HelpCircle },
  { id: "pc-6", title: "Confidence Building", description: "Creating an environment where students feel empowered to tackle complex problems.", icon: Shield },
];

export const LEARNING_PRINCIPLES: PrincipleType[] = [
  { id: "p-1", label: "Learn by Understanding" },
  { id: "p-2", label: "Ask Without Fear" },
  { id: "p-3", label: "Practice with Purpose" },
  { id: "p-4", label: "Improve Every Week" },
  { id: "p-5", label: "Build Confidence" },
  { id: "p-6", label: "Achieve Excellence" },
];

export const SIGNATURE_QUOTE = "When students understand why a formula works, they never have to memorize it.";
