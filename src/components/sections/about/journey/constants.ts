import { Flag, Users, TrendingUp, Award, Laptop, Rocket } from "lucide-react";
import { MilestoneType, AchievementType } from "./types";

export const MILESTONES: MilestoneType[] = [
  {
    id: "m-1",
    year: "2014",
    title: "The Beginning",
    description: "Athul started teaching mathematics with a simple belief: every student can learn if guided correctly.",
    icon: Flag,
    imageUrl: "https://picsum.photos/seed/amc-start/600/400"
  },
  {
    id: "m-2",
    title: "First Batch of Students",
    description: "Building trust through individual attention and a strict focus on concept-based learning rather than memorization.",
    icon: Users,
  },
  {
    id: "m-3",
    title: "Growing Community",
    description: "More students, stronger results, and increasing parent confidence led to a trusted educational community.",
    icon: TrendingUp,
    imageUrl: "https://picsum.photos/seed/amc-grow/600/400"
  },
  {
    id: "m-4",
    title: "Academic Excellence",
    description: "Consistent student achievements and board examination success established AMC as a premier learning center.",
    icon: Award,
  },
  {
    id: "m-5",
    title: "Digital Transformation",
    description: "Expanding beyond traditional classrooms to provide a modern, seamless digital learning experience.",
    icon: Laptop,
    imageUrl: "https://picsum.photos/seed/amc-digital/600/400"
  },
  {
    id: "m-6",
    title: "The Future",
    description: "Continuing to innovate and improve educational methodologies while helping every student succeed.",
    icon: Rocket,
  }
];

export const ACHIEVEMENTS: AchievementType[] = [
  { id: "a-1", value: "10+", label: "Years of Excellence" },
  { id: "a-2", value: "500+", label: "Students Guided" },
  { id: "a-3", value: "100+", label: "Outstanding Results" },
  { id: "a-4", value: "Growing", label: "Learning Community" },
];
