import { StoryChapterType, TimelineItemType, MilestoneType } from "./types";
import { Compass, Lightbulb, TrendingUp, Rocket, Star } from "lucide-react";

export const STORY_CHAPTERS: StoryChapterType[] = [
  {
    id: "chapter-1",
    number: "01",
    title: "The Beginning",
    content: [
      "How the journey started. What inspired Athul to start teaching. What challenges students faced.",
      "The journey started with a clear observation: students weren't failing mathematics because it was inherently difficult. They were struggling because of how it was taught.",
      "Athul realized that fear of the subject came from memorizing formulas instead of understanding logic. The challenge was finding the right guidance, encouragement, and learning environment."
    ]
  },
  {
    id: "chapter-2",
    number: "02",
    title: "The Vision",
    content: [
      "Concept-based learning became the core philosophy. Education should not be about surviving exams, but about building analytical skills.",
      "At AMC, the focus shifted entirely to breaking down complex topics into simple, logical steps. We wanted students to understand 'why' a formula works, not just 'how' to use it."
    ]
  },
  {
    id: "chapter-3",
    number: "03",
    title: "The Growth",
    content: [
      "As students started discovering confidence, results naturally followed. What started as small classroom sessions grew into a trusted learning community.",
      "Word spread not through marketing, but through the genuine success stories of students who transformed their approach to learning."
    ]
  },
  {
    id: "chapter-4",
    number: "04",
    title: "The Future",
    content: [
      "The vision for the coming years is bold. We are expanding our digital learning footprint to reach more students while maintaining our core values.",
      "Continuous innovation, better student experiences, and empowering learners remain at the heart of everything we do."
    ]
  }
];

export const TIMELINE_ITEMS: TimelineItemType[] = [
  {
    id: "t-1",
    year: "2014",
    title: "The Beginning",
    description: "Started teaching with a handful of students and a strong belief in concept-based learning.",
    icon: Compass
  },
  {
    id: "t-2",
    year: "2017",
    title: "The Vision",
    description: "Formalized the AMC methodology, focusing on deep understanding over memorization.",
    icon: Lightbulb
  },
  {
    id: "t-3",
    year: "2020",
    title: "The Growth",
    description: "Expanded to online classes, guiding hundreds of students through digital platforms.",
    icon: TrendingUp
  },
  {
    id: "t-4",
    year: "Today",
    title: "Today",
    description: "A trusted institution recognized for consistent academic excellence and student success.",
    icon: Star
  },
  {
    id: "t-5",
    year: "Future",
    title: "The Future",
    description: "Innovating educational technology to provide even better learning experiences.",
    icon: Rocket
  }
];

export const STORY_QUOTE = {
  text: "Education is not about teaching formulas.\nIt is about helping students discover confidence.",
  author: "Athul"
};

export const MILESTONES: MilestoneType[] = [
  { id: "m-1", value: "2014", title: "Founded", description: "The year the journey began." },
  { id: "m-2", value: "500+", title: "Students Guided", description: "Helping learners achieve their potential." },
  { id: "m-3", value: "100+", title: "Academic Achievements", description: "A+ grades and top percentiles." },
  { id: "m-4", value: "10+", title: "Growing Community", description: "Years of educational excellence." }
];
