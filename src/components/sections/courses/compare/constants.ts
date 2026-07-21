import { ComparisonProgram } from "./types"

export const COMPARISON_PROGRAMS: ComparisonProgram[] = [
  {
    id: "sslc",
    name: "SSLC (All Subjects)",
    targetClass: "Class 10",
    idealFor: "First-time board exam takers",
    duration: "1 Academic Year",
    learningMode: "Offline / Hybrid",
    keyTopics: ["Trigonometry", "Circles", "Second Degree Equations", "Statistics"],
    difficultyLevel: 1,
    assessmentFrequency: "Weekly & Monthly",
    revisionSupport: true,
    personalMentoring: true,
    bestFor: "Building strong fundamentals and achieving A+ in SSLC.",
    learningFocus: ["Concept Building", "Board Exam Preparation", "Speed Improvement"]
  },
  {
    id: "plus-one",
    name: "Plus One (All Subjects)",
    targetClass: "Class 11",
    idealFor: "Science & Commerce students",
    duration: "1 Academic Year",
    learningMode: "Offline / Hybrid",
    keyTopics: ["Sets & Functions", "Calculus Foundation", "Conics", "Permutations"],
    difficultyLevel: 2,
    assessmentFrequency: "Chapter-wise",
    revisionSupport: true,
    personalMentoring: true,
    bestFor: "Bridging the gap to higher secondary and competitive exams.",
    learningFocus: ["Concept Building", "Problem Solving", "Analytical Thinking"]
  },
  {
    id: "plus-two",
    name: "Plus Two (All Subjects)",
    targetClass: "Class 12",
    idealFor: "Final board exam takers",
    duration: "1 Academic Year",
    learningMode: "Offline / Hybrid",
    keyTopics: ["Advanced Calculus", "Vectors & 3D", "Probability", "Matrices"],
    difficultyLevel: 3,
    assessmentFrequency: "Weekly & Mock Exams",
    revisionSupport: true,
    personalMentoring: true,
    bestFor: "Maximizing board exam scores and solidifying advanced concepts.",
    learningFocus: ["Board Exam Preparation", "Problem Solving", "Confidence Building"]
  }
]
