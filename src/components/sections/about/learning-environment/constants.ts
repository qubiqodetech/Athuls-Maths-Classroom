import { Users, Focus, PenTool, CheckCircle, Target, Lightbulb, UserCheck, ShieldCheck, PenSquare, MessageCircle, FileText, Monitor, BookOpen } from "lucide-react";
import { GalleryImageType, FeatureType, JourneyStepType, FacilityType } from "./types";

export const GALLERY_IMAGES: GalleryImageType[] = [
  { id: "img-1", src: "https://picsum.photos/seed/amc-classroom-1/1200/800", alt: "Modern Classroom", category: "Modern Classroom", layout: "large" },
  { id: "img-2", src: "https://picsum.photos/seed/amc-teaching-1/600/600", alt: "Interactive Learning", category: "Interactive Learning", layout: "half" },
  { id: "img-3", src: "https://picsum.photos/seed/amc-students-1/600/600", alt: "Student Discussion", category: "Student Discussion", layout: "half" },
  { id: "img-4", src: "https://picsum.photos/seed/amc-pan-1/1200/400", alt: "Teaching Session", category: "Teaching Session", layout: "wide" },
  { id: "img-5", src: "https://picsum.photos/seed/amc-exam-1/400/400", alt: "Model Examination", category: "Model Examination", layout: "third" },
  { id: "img-6", src: "https://picsum.photos/seed/amc-award-1/400/400", alt: "Award Ceremony", category: "Award Ceremony", layout: "third" },
  { id: "img-7", src: "https://picsum.photos/seed/amc-seminar-1/400/400", alt: "Seminars", category: "Seminars", layout: "third" },
];

export const ENVIRONMENT_FEATURES: FeatureType[] = [
  { id: "ef-1", title: "Comfortable Learning Spaces", description: "Classrooms designed to minimize distractions and maximize focus.", icon: Focus },
  { id: "ef-2", title: "Focused Classroom Environment", description: "A disciplined yet friendly atmosphere that encourages learning.", icon: Users },
  { id: "ef-3", title: "Small Batch Sessions", description: "Ensuring every student receives the individual attention they deserve.", icon: UserCheck },
  { id: "ef-4", title: "Interactive Whiteboard Teaching", description: "Visual and engaging explanations for complex mathematical concepts.", icon: Monitor },
  { id: "ef-5", title: "Regular Practice Sessions", description: "Dedicated time for students to solve problems under supervision.", icon: PenSquare },
  { id: "ef-6", title: "Continuous Assessment", description: "Tracking academic progress through regular tests and evaluations.", icon: CheckCircle },
];

export const LEARNING_JOURNEY: JourneyStepType[] = [
  { id: "lj-1", label: "Enter Classroom", icon: Target },
  { id: "lj-2", label: "Learn Concepts", icon: Lightbulb },
  { id: "lj-3", label: "Practice", icon: PenTool },
  { id: "lj-4", label: "Clarify Doubts", icon: MessageCircle },
  { id: "lj-5", label: "Weekly Review", icon: FileText },
  { id: "lj-6", label: "Exam Confidence", icon: ShieldCheck },
];

export const FACILITIES: FacilityType[] = [
  { id: "f-1", title: "Comfortable Seating", description: "Ergonomic furniture ensuring students can focus for extended periods.", icon: Users },
  { id: "f-2", title: "Well-Lit Classrooms", description: "Bright and welcoming spaces optimized for reading and concentration.", icon: Lightbulb },
  { id: "f-3", title: "Learning Resources", description: "Access to comprehensive study materials and practice question banks.", icon: BookOpen },
  { id: "f-4", title: "Personal Doubt Support", description: "Dedicated spaces and time slots for resolving individual queries.", icon: MessageCircle },
  { id: "f-5", title: "Small Batch Learning", description: "Intentionally limited class sizes to maintain high interaction quality.", icon: UserCheck },
  { id: "f-6", title: "Technology-Assisted", description: "Modern teaching aids to visualize complex mathematical theories.", icon: Monitor },
];
