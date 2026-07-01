import { Sparkles } from "lucide-react";
import { FloatingCardType } from "./types";

export const ABOUT_HERO_BADGE = {
  text: "ABOUT ATHUL'S MATHS CLASSROOM",
  icon: Sparkles
};

export const ABOUT_HERO_HEADING = {
  line1: "Building More Than",
  line2: "Mathematics Skills.",
  line3: "Building ",
  highlight: "Confidence.",
};

export const ABOUT_HERO_TEXT = [
  "Athul's Maths Classroom was founded with a simple belief:",
  "Every student can excel in mathematics when concepts are taught with clarity, patience, and personal attention.",
  "Our mission is to make mathematics understandable, enjoyable, and achievable for every learner."
];

export const TRUST_CHIPS: string[] = [
  "Concept-Based Teaching",
  "Personal Mentoring",
  "Offline & Online Learning",
  "Student-Centered Approach"
];

export const FLOATING_CARDS: FloatingCardType[] = [
  { value: "10+", label: "Years\nTeaching Experience", position: "top" },
  { value: "500+", label: "Students\nGuided", position: "bottom" },
  { value: "100+", label: "Academic\nAchievements", position: "middle" }
];

export const ABOUT_HERO_IMAGE = "https://picsum.photos/seed/about-hero-athul/800/1000";
