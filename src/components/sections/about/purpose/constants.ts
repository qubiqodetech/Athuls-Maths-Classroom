import { ShieldCheck, Award, Heart, RefreshCw, Search, TrendingUp } from "lucide-react";
import { ValueType, TimelineStepType } from "./types";

export const CORE_VALUES: ValueType[] = [
  { id: "v-1", title: "Integrity", description: "Honesty and transparency in every interaction and assessment.", icon: ShieldCheck },
  { id: "v-2", title: "Excellence", description: "Striving for the highest quality in teaching and learning.", icon: Award },
  { id: "v-3", title: "Empathy", description: "Understanding each student's unique challenges and pace.", icon: Heart },
  { id: "v-4", title: "Consistency", description: "Building habits that lead to long-term academic success.", icon: RefreshCw },
  { id: "v-5", title: "Curiosity", description: "Encouraging questions and a genuine desire to understand.", icon: Search },
  { id: "v-6", title: "Growth", description: "Focusing on continuous improvement, not just immediate results.", icon: TrendingUp },
];

export const TIMELINE_STEPS: TimelineStepType[] = [
  { id: "ts-1", label: "Learn" },
  { id: "ts-2", label: "Practice" },
  { id: "ts-3", label: "Believe" },
  { id: "ts-4", label: "Grow" },
  { id: "ts-5", label: "Achieve" },
];

export const BRAND_MANIFESTO = "We believe every student deserves the confidence to understand mathematics—not the pressure to memorize it.";
