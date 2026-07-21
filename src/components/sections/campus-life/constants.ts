import { GalleryImageType, HighlightCardType, EventType, TimelineStepType } from "./types";
import { Monitor, Users, FileText, Laptop, BookOpen, PenTool, Award } from "lucide-react";

export const GALLERY_IMAGES: GalleryImageType[] = [
  { id: "img-1", src: "https://picsum.photos/seed/amc1/1200/800", title: "Interactive Learning", category: "Classroom Learning", size: "large" },
  { id: "img-2", src: "https://picsum.photos/seed/amc2/800/800", title: "Doubt Clearing", category: "Teaching Sessions", size: "medium" },
  { id: "img-3", src: "https://picsum.photos/seed/amc3/800/800", title: "Group Discussions", category: "Student Activities", size: "medium" },
  { id: "img-4", src: "https://picsum.photos/seed/amc4/1600/600", title: "Annual Award Ceremony", category: "Celebrations", size: "panoramic" },
  { id: "img-5", src: "https://picsum.photos/seed/amc5/600/600", title: "Revision Classes", category: "Revision Classes", size: "small" },
  { id: "img-6", src: "https://picsum.photos/seed/amc6/600/600", title: "Special Seminars", category: "Seminars", size: "small" },
  { id: "img-7", src: "https://picsum.photos/seed/amc7/600/600", title: "Future Events", category: "Future Events", size: "small" },
];

export const HIGHLIGHT_CARDS: HighlightCardType[] = [
  { id: "hc-1", title: "Interactive Classrooms", description: "Modern teaching aids for better visualization.", icon: Monitor },
  { id: "hc-2", title: "Small Batch Learning", description: "Personalized attention for every student.", icon: Users },
  { id: "hc-3", title: "Regular Assessments", description: "Tracking progress to ensure continuous improvement.", icon: FileText },
];

export const FEATURED_EVENT: EventType = {
  id: "event-1",
  title: "Academic Excellence Awards 2024",
  description: "Celebrating the outstanding achievements of our students in the recent board examinations.",
  date: "August 15, 2024",
  image: "https://picsum.photos/seed/event1/1200/800",
};

export const LEARNING_TIMELINE: TimelineStepType[] = [
  { id: "lt-1", title: "Daily Classes", icon: BookOpen },
  { id: "lt-2", title: "Practice Sessions", icon: Laptop },
  { id: "lt-3", title: "Revision", icon: PenTool },
  { id: "lt-4", title: "Model Exams", icon: FileText },
  { id: "lt-5", title: "Achievement", icon: Award },
];
