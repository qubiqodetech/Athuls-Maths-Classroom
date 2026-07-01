import { FacultyType, StatType } from "./types";

export const FEATURED_FACULTY: FacultyType = {
  id: "athul",
  name: "Athul",
  role: "Founder & Mathematics Educator",
  subjects: ["SSLC", "Plus One", "Plus Two"],
  experience: "10+ Years Experience",
  bio: "Dedicated to transforming mathematics from a feared subject into a logical and enjoyable learning experience for every student.",
  image: "https://picsum.photos/seed/athul-faculty/800/1000",
  isFeatured: true,
};

export const FACULTY_MEMBERS: FacultyType[] = [
  {
    id: "faculty-1",
    name: "Sneha Nair",
    role: "Senior Faculty",
    subjects: ["Plus One", "Plus Two"],
    experience: "8+ Years",
    bio: "Specializes in higher secondary mathematics, helping students build strong foundations for competitive exams.",
    image: "https://picsum.photos/seed/faculty1/600/800",
  },
  {
    id: "faculty-2",
    name: "Rahul Krishnan",
    role: "Faculty Member",
    subjects: ["SSLC Mathematics"],
    experience: "5+ Years",
    bio: "Focuses on board exam preparation with structured practice and personalized doubt-clearing sessions.",
    image: "https://picsum.photos/seed/faculty2/600/800",
  },
  {
    id: "faculty-3",
    name: "Meera Menon",
    role: "Tutor & Mentor",
    subjects: ["Foundation", "Revision"],
    experience: "3+ Years",
    bio: "Provides dedicated support and mentoring to students during intensive revision programs.",
    image: "https://picsum.photos/seed/faculty3/600/800",
  },
];

export const FACULTY_HIGHLIGHTS = [
  "Experienced Educators",
  "Personal Mentoring",
  "Concept-Based Teaching",
  "Regular Assessments",
  "Student-Focused Learning",
  "Board Exam Preparation",
];

export const FACULTY_STATS: StatType[] = [
  { value: "10+", label: "Years of Teaching" },
  { value: "500+", label: "Students Mentored" },
  { value: "100+", label: "A+ Achievers" },
  { value: "100%", label: "Commitment to Student Growth" },
];

export const FACULTY_QUOTE = "Great teaching begins by understanding every student's learning journey.";
