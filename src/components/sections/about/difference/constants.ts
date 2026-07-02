import { BookOpen, LineChart, MessageCircle, Users, Activity, Target } from "lucide-react";
import { ComparisonPointType, FeatureCardType, MetricType, PrincipleType } from "./types";

export const TRADITIONAL_LEARNING: ComparisonPointType[] = [
  { id: "tl-1", text: "Formula memorization" },
  { id: "tl-2", text: "Large batches" },
  { id: "tl-3", text: "Limited interaction" },
  { id: "tl-4", text: "Exam pressure" },
  { id: "tl-5", text: "One-way teaching" },
  { id: "tl-6", text: "Minimal individual feedback" },
];

export const AMC_EXPERIENCE: ComparisonPointType[] = [
  { id: "ae-1", text: "Concept-based learning" },
  { id: "ae-2", text: "Small batch guidance" },
  { id: "ae-3", text: "Personal mentoring" },
  { id: "ae-4", text: "Interactive sessions" },
  { id: "ae-5", text: "Continuous assessments" },
  { id: "ae-6", text: "Confidence building" },
];

export const FEATURE_HIGHLIGHTS: FeatureCardType[] = [
  { id: "fh-1", title: "Understand Before Memorizing", description: "Learn the logic behind every formula before applying it to solve complex problems.", icon: BookOpen },
  { id: "fh-2", title: "Weekly Progress Reviews", description: "Regular assessments to track improvement and identify areas needing more attention.", icon: LineChart },
  { id: "fh-3", title: "One-to-One Doubt Clearing", description: "Dedicated time for each student to ask questions in a supportive environment.", icon: MessageCircle },
  { id: "fh-4", title: "Small Batch Focus", description: "Limited students per batch ensures personalized attention and better interaction.", icon: Users },
  { id: "fh-5", title: "Interactive Classroom Discussions", description: "Engaging learning sessions where students participate actively.", icon: Activity },
  { id: "fh-6", title: "Long-Term Academic Growth", description: "Building a strong foundation that helps students excel beyond examinations.", icon: Target },
];

export const CONFIDENCE_METRICS: MetricType[] = [
  { id: "cm-1", value: "98%", label: "Student Satisfaction" },
  { id: "cm-2", value: "500+", label: "Students Guided" },
  { id: "cm-3", value: "100+", label: "Outstanding Results" },
  { id: "cm-4", value: "10+", label: "Years of Trust" },
];

export const EDUCATIONAL_PRINCIPLES: PrincipleType[] = [
  { id: "ep-1", label: "Concept First" },
  { id: "ep-2", label: "Practice Daily" },
  { id: "ep-3", label: "Ask Freely" },
  { id: "ep-4", label: "Think Logically" },
  { id: "ep-5", label: "Grow Confidently" },
  { id: "ep-6", label: "Achieve Excellence" },
];

export const SIGNATURE_STATEMENT = "We don't simply prepare students for examinations.\nWe prepare them to understand mathematics with confidence.";
