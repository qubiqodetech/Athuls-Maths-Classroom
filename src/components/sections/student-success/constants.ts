import { StudentType, StatType, TimelineStepType } from "./types";
import { UserPlus, BookOpen, PenTool, FileText, Award } from "lucide-react";

export const FEATURED_STUDENT: StudentType = {
  id: "featured-1",
  name: "Aiswarya S",
  class: "Plus Two Mathematics",
  year: "2023-24",
  achievement: "100% Score",
  highlight: "Outstanding Board Examination Performance",
  image: "https://picsum.photos/seed/student-feat/800/800",
  story: "Consistent practice and concept clarity helped Aiswarya achieve a perfect score in her board examinations.",
  isFeatured: true,
};

export const STUDENTS: StudentType[] = [
  {
    id: "student-1",
    name: "Rahul M",
    class: "SSLC",
    year: "2023-24",
    achievement: "A+",
    highlight: "Top Scorer",
    image: "https://picsum.photos/seed/student-1/600/600",
  },
  {
    id: "student-2",
    name: "Sneha P",
    class: "Plus One",
    year: "2023-24",
    achievement: "98%",
    highlight: "Outstanding Improvement",
    image: "https://picsum.photos/seed/student-2/600/600",
  },
  {
    id: "student-3",
    name: "Arjun K",
    class: "Plus Two",
    year: "2023-24",
    achievement: "95%",
    highlight: "Consistent Performer",
    image: "https://picsum.photos/seed/student-3/600/600",
  },
  {
    id: "student-4",
    name: "Meenakshi R",
    class: "SSLC",
    year: "2023-24",
    achievement: "A+",
    highlight: "Perfect Score",
    image: "https://picsum.photos/seed/student-4/600/600",
  },
  {
    id: "student-5",
    name: "Vishnu T",
    class: "Plus Two",
    year: "2023-24",
    achievement: "96%",
    highlight: "Top Scorer",
    image: "https://picsum.photos/seed/student-5/600/600",
  },
  {
    id: "student-6",
    name: "Anjali D",
    class: "Plus One",
    year: "2023-24",
    achievement: "99%",
    highlight: "Exceptional Talent",
    image: "https://picsum.photos/seed/student-6/600/600",
  }
];

export const ACHIEVEMENT_STATS: StatType[] = [
  { value: "500+", label: "Students Mentored" },
  { value: "100+", label: "A+ Achievers" },
  { value: "98%", label: "Success Rate" },
  { value: "10+", label: "Years of Excellence" },
];

export const TIMELINE_STEPS: TimelineStepType[] = [
  { id: "step-1", title: "Admission", icon: UserPlus },
  { id: "step-2", title: "Learning", icon: BookOpen },
  { id: "step-3", title: "Practice", icon: PenTool },
  { id: "step-4", title: "Examinations", icon: FileText },
  { id: "step-5", title: "Achievement", icon: Award },
];

export const PARENT_QUOTE = "The greatest reward is watching our students grow in confidence and achieve their goals.";

export const RECOGNITION_WALL_ITEMS = [
  "Abhinav S - SSLC - A+",
  "Kavya M - Plus Two - 98%",
  "Rohan K - Plus One - 95%",
  "Devika R - SSLC - A+",
  "Siddharth T - Plus Two - 99%",
  "Neha P - Plus One - 97%",
  "Gautham V - SSLC - A+",
  "Aswathi N - Plus Two - 96%",
];
