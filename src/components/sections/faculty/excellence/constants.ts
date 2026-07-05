import { GraduationCap, BookOpen, Briefcase, Target, Library, Lightbulb } from "lucide-react"

export const QUALIFICATIONS = [
  { id: "bachelors", title: "Bachelor's Degree", description: "Strong foundation in theoretical and applied mathematics.", icon: GraduationCap },
  { id: "masters", title: "Master's Degree", description: "Advanced specialization in mathematical sciences and pedagogy.", icon: BookOpen },
  { id: "experience", title: "Teaching Experience", description: "Years of practical classroom and mentoring experience.", icon: Briefcase },
  { id: "board-exams", title: "Board Exam Expertise", description: "Proven track record of preparing students for state and national boards.", icon: Target },
  { id: "curriculum", title: "Curriculum Knowledge", description: "Deep understanding of the evolving academic syllabus.", icon: Library },
  { id: "cpl", title: "Continuous Learning", description: "Ongoing professional development to stay updated with modern teaching methods.", icon: Lightbulb }
]

export const EXPERTISE_AREAS = [
  "SSLC Mathematics",
  "Plus One",
  "Plus Two",
  "Board Exams",
  "Problem Solving",
  "Concept Learning",
  "Exam Strategy",
  "Revision"
]

export const TIMELINE_EVENTS = [
  { id: "education", title: "Education & Foundations", description: "Building a strong academic background in mathematics and pedagogy." },
  { id: "teaching", title: "Teaching Career", description: "Gaining practical experience and developing effective teaching methodologies." },
  { id: "success", title: "Student Success", description: "Guiding hundreds of students to academic excellence and board exam success." },
  { id: "growth", title: "Continuous Growth", description: "Evolving as educators through continuous professional development and learning." }
]

export const EXCELLENCE_STATS = [
  { value: 15, suffix: "+", label: "Years Teaching" },
  { value: 10, suffix: "K+", label: "Students Guided" },
  { value: 100, suffix: "%", label: "Success Rate" },
  { value: 12, suffix: "+", label: "Academic Programs" }
]

export const CERTIFICATIONS = [
  { id: "cert-1", title: "Advanced Mathematics Pedagogy", issuer: "National Board of Education", year: "2022" },
  { id: "cert-2", title: "Certified Student Mentor", issuer: "Educational Leadership Institute", year: "2021" }
]
