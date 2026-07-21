import { Search, MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export const FAQ_CATEGORIES = [
  "All",
  "Faculty",
  "Teaching",
  "Classes",
  "Assessments",
  "Parent Communication",
  "Learning Support"
]

export const FAQS = [
  {
    id: "f1",
    category: "Faculty",
    question: "Who teaches each course?",
    answer: "Every course is led by experienced subject matter experts. Athul sir personally handles key topics in Plus One and Plus Two (All Subjects), supported by a dedicated team of specialist teachers."
  },
  {
    id: "f2",
    category: "Learning Support",
    question: "Can students ask doubts after class?",
    answer: "Absolutely. We encourage open communication. Students can stay back after sessions or use our dedicated doubt-clearing hours to ensure no question goes unanswered."
  },
  {
    id: "f3",
    category: "Assessments",
    question: "How are assessments conducted?",
    answer: "We conduct regular chapter-wise tests and cumulative revisions. Detailed feedback is provided to help students identify their weak areas and improve strategically."
  },
  {
    id: "f4",
    category: "Parent Communication",
    question: "How do parents receive updates?",
    answer: "Parents receive regular progress reports through our communication channels. We also hold periodic parent-teacher meetings to discuss the student's academic journey and growth."
  },
  {
    id: "f5",
    category: "Learning Support",
    question: "How are weak students supported?",
    answer: "We provide personalized attention, extra practice materials, and foundational concept classes for students who need additional support to build their confidence."
  },
  {
    id: "f6",
    category: "Classes",
    question: "Can students change batches?",
    answer: "Yes, subject to availability. We understand that schedules can be challenging, so we try our best to accommodate batch change requests within the same academic level."
  }
]

export const CONTACT_OPTIONS = [
  { id: "whatsapp", label: "WhatsApp", value: "+91 98765 43210", icon: MessageCircle, link: "#" },
  { id: "call", label: "Call Us", value: "+91 98765 43210", icon: Phone, link: "tel:+919876543210" },
  { id: "email", label: "Email", value: "hello@athulsmaths.com", icon: Mail, link: "mailto:hello@athulsmaths.com" },
  { id: "visit", label: "Visit Us", value: "123 Education Lane, City", icon: MapPin, link: "#" }
]
