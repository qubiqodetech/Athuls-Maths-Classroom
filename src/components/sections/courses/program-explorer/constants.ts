import { 
  Calculator, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Target, 
  Brain, 
  CheckCircle, 
  Zap,
  Users,
  MessageCircle,
  FileEdit,
  ClipboardList,
  GraduationCap,
  Sparkles,
  BarChart,
  Lightbulb,
  Crosshair,
  TrendingUp as TrendingUpIcon,
  Search,
  PenTool,
  Clock,
  Compass,
  Star,
  Activity
} from "lucide-react"
import { ProgramType } from "./types"

export const PROGRAMS: ProgramType[] = [
  {
    id: "sslc",
    name: "SSLC Mathematics",
    targetClass: "Class 10",
    icon: Calculator,
    shortDescription: "Build a strong foundation for your first major board examination with our comprehensive Class 10 program.",
    audience: [
      "Class 10 Students",
      "Kerala State Syllabus",
      "Board Exam Preparation",
      "Concept Strengthening"
    ],
    objectives: [
      {
        id: "obj-1",
        icon: Brain,
        title: "Understand Core Concepts",
        description: "Develop a deep understanding of mathematical principles rather than rote memorization."
      },
      {
        id: "obj-2",
        icon: Crosshair,
        title: "Master Problem-Solving",
        description: "Learn effective strategies to tackle complex mathematical problems with confidence."
      },
      {
        id: "obj-3",
        icon: Target,
        title: "Board Exam Patterns",
        description: "Familiarize yourself with question patterns and scoring schemes of the SSLC examination."
      },
      {
        id: "obj-4",
        icon: Zap,
        title: "Speed & Accuracy",
        description: "Improve calculation speed and minimize errors through targeted practice."
      }
    ],
    topics: [
      { id: "t-1", title: "Arithmetic Sequences", subtopics: ["Nth term", "Sum of n terms", "Properties"] },
      { id: "t-2", title: "Circles", subtopics: ["Chords", "Arcs", "Angles", "Tangents"] },
      { id: "t-3", title: "Mathematics of Chance", subtopics: ["Probability", "Favorable outcomes"] },
      { id: "t-4", title: "Second Degree Equations", subtopics: ["Solving equations", "Applications"] },
      { id: "t-5", title: "Trigonometry", subtopics: ["Ratios", "Heights and Distances"] },
      { id: "t-6", title: "Coordinates", subtopics: ["Distance", "Midpoint", "Slope"] },
      { id: "t-7", title: "Polynomials", subtopics: ["Division", "Factors", "Remainder theorem"] },
      { id: "t-8", title: "Statistics", subtopics: ["Mean", "Median", "Histograms"] }
    ],
    benefits: [
      { id: "b-1", icon: Lightbulb, title: "Concept-Based Teaching" },
      { id: "b-2", icon: Users, title: "Small Batch Sizes" },
      { id: "b-3", icon: ClipboardList, title: "Regular Assessments" },
      { id: "b-4", icon: MessageCircle, title: "Personal Doubt Support" },
      { id: "b-5", icon: FileEdit, title: "Weekly Practice Sheets" },
      { id: "b-6", icon: Clock, title: "Exam Strategy Sessions" }
    ],
    teachingMethod: [
      { id: "m-1", title: "Understand", icon: Brain },
      { id: "m-2", title: "Practice", icon: PenTool },
      { id: "m-3", title: "Discuss", icon: MessageCircle },
      { id: "m-4", title: "Evaluate", icon: FileEdit },
      { id: "m-5", title: "Improve", icon: TrendingUpIcon },
      { id: "m-6", title: "Excel", icon: Star }
    ],
    outcomes: [
      { id: "o-1", icon: CheckCircle, title: "Improved Confidence" },
      { id: "o-2", icon: Target, title: "Better Accuracy" },
      { id: "o-3", icon: GraduationCap, title: "Exam Readiness" },
      { id: "o-4", icon: Sparkles, title: "Higher Scores" }
    ]
  },
  {
    id: "plus-one",
    name: "Plus One Mathematics",
    targetClass: "Higher Secondary",
    icon: TrendingUp,
    shortDescription: "Navigate the transition to higher secondary concepts with confidence and build a robust foundation.",
    audience: [
      "Class 11 Students",
      "Science & Commerce Streams",
      "Foundation for Competitive Exams",
      "Concept Strengthening"
    ],
    objectives: [
      {
        id: "obj-1",
        icon: Brain,
        title: "Advanced Concept Clarity",
        description: "Grasp abstract higher secondary mathematical concepts with clear, logical explanations."
      },
      {
        id: "obj-2",
        icon: Crosshair,
        title: "Analytical Thinking",
        description: "Develop the analytical skills required for advanced problem-solving."
      },
      {
        id: "obj-3",
        icon: Target,
        title: "Strong Foundation",
        description: "Build a rock-solid foundation for Plus Two and future competitive examinations."
      },
      {
        id: "obj-4",
        icon: Zap,
        title: "Application Skills",
        description: "Learn to apply theoretical concepts to practical and complex problems."
      }
    ],
    topics: [
      { id: "t-1", title: "Sets & Functions", subtopics: ["Relations", "Functions", "Domain & Range"] },
      { id: "t-2", title: "Trigonometric Functions", subtopics: ["Angles", "Identities", "Equations"] },
      { id: "t-3", title: "Complex Numbers", subtopics: ["Algebra", "Polar form", "Quadratic equations"] },
      { id: "t-4", title: "Permutations & Combinations", subtopics: ["Fundamental principle", "Formulae"] },
      { id: "t-5", title: "Binomial Theorem", subtopics: ["Expansion", "General term"] },
      { id: "t-6", title: "Sequence & Series", subtopics: ["A.P.", "G.P.", "Sum to n terms"] },
      { id: "t-7", title: "Straight Lines & Conics", subtopics: ["Equations", "Circles", "Parabola"] },
      { id: "t-8", title: "Calculus Foundation", subtopics: ["Limits", "Derivatives"] }
    ],
    benefits: [
      { id: "b-1", icon: Lightbulb, title: "In-depth Concept Coverage" },
      { id: "b-2", icon: Users, title: "Interactive Sessions" },
      { id: "b-3", icon: ClipboardList, title: "Chapter-wise Tests" },
      { id: "b-4", icon: MessageCircle, title: "Doubt Clearing Sessions" },
      { id: "b-5", icon: FileEdit, title: "Extensive Problem Solving" },
      { id: "b-6", icon: Clock, title: "Time Management Skills" }
    ],
    teachingMethod: [
      { id: "m-1", title: "Understand", icon: Brain },
      { id: "m-2", title: "Practice", icon: PenTool },
      { id: "m-3", title: "Discuss", icon: MessageCircle },
      { id: "m-4", title: "Evaluate", icon: FileEdit },
      { id: "m-5", title: "Improve", icon: TrendingUpIcon },
      { id: "m-6", title: "Excel", icon: Star }
    ],
    outcomes: [
      { id: "o-1", icon: Brain, title: "Strong Logical Foundation" },
      { id: "o-2", icon: Activity, title: "Enhanced Problem Solving" },
      { id: "o-3", icon: Compass, title: "Prepared for Plus Two" },
      { id: "o-4", icon: Sparkles, title: "Academic Excellence" }
    ]
  },
  {
    id: "plus-two",
    name: "Plus Two Mathematics",
    targetClass: "Board Examination",
    icon: Award,
    shortDescription: "Master advanced topics and prepare meticulously for your final board examination.",
    audience: [
      "Class 12 Students",
      "Board Exam Focus",
      "Higher Score Target",
      "Concept Mastery"
    ],
    objectives: [
      {
        id: "obj-1",
        icon: Brain,
        title: "Master Advanced Topics",
        description: "Gain complete mastery over complex topics like Calculus and Vectors."
      },
      {
        id: "obj-2",
        icon: Crosshair,
        title: "Intensive Practice",
        description: "Engage in rigorous problem-solving sessions to solidify understanding."
      },
      {
        id: "obj-3",
        icon: Target,
        title: "Exam Strategy",
        description: "Learn how to approach the board exam paper for maximum efficiency and marks."
      },
      {
        id: "obj-4",
        icon: Zap,
        title: "Consistent Performance",
        description: "Maintain a high level of performance through regular mock tests."
      }
    ],
    topics: [
      { id: "t-1", title: "Relations & Functions", subtopics: ["Types of relations", "Inverse functions"] },
      { id: "t-2", title: "Matrices & Determinants", subtopics: ["Algebra", "Inverses", "Applications"] },
      { id: "t-3", title: "Continuity & Differentiability", subtopics: ["Limits", "Derivatives", "Applications"] },
      { id: "t-4", title: "Integrals", subtopics: ["Indefinite", "Definite", "Applications"] },
      { id: "t-5", title: "Differential Equations", subtopics: ["Formation", "Solving techniques"] },
      { id: "t-6", title: "Vectors & 3D Geometry", subtopics: ["Algebra", "Lines", "Planes"] },
      { id: "t-7", title: "Linear Programming", subtopics: ["Optimization", "Graphical method"] },
      { id: "t-8", title: "Probability", subtopics: ["Conditional", "Bayes' theorem", "Distributions"] }
    ],
    benefits: [
      { id: "b-1", icon: Lightbulb, title: "Advanced Concept Focus" },
      { id: "b-2", icon: Users, title: "Personalized Attention" },
      { id: "b-3", icon: ClipboardList, title: "Mock Board Exams" },
      { id: "b-4", icon: MessageCircle, title: "1-on-1 Mentoring" },
      { id: "b-5", icon: FileEdit, title: "Previous Year Papers" },
      { id: "b-6", icon: Clock, title: "Scoring Strategies" }
    ],
    teachingMethod: [
      { id: "m-1", title: "Understand", icon: Brain },
      { id: "m-2", title: "Practice", icon: PenTool },
      { id: "m-3", title: "Discuss", icon: MessageCircle },
      { id: "m-4", title: "Evaluate", icon: FileEdit },
      { id: "m-5", title: "Improve", icon: TrendingUpIcon },
      { id: "m-6", title: "Excel", icon: Star }
    ],
    outcomes: [
      { id: "o-1", icon: CheckCircle, title: "Board Exam Readiness" },
      { id: "o-2", icon: BarChart, title: "Consistent High Scores" },
      { id: "o-3", icon: Clock, title: "Excellent Time Management" },
      { id: "o-4", icon: Sparkles, title: "Outstanding Results" }
    ]
  },
  {
    id: "revision",
    name: "Revision Programs",
    targetClass: "Exam Preparation",
    icon: BookOpen,
    shortDescription: "Intensive exam-focused revision sessions designed to maximize your final results.",
    audience: [
      "SSLC & Plus Two Students",
      "Last-Minute Preparation",
      "Score Boosting",
      "Confidence Building"
    ],
    objectives: [
      {
        id: "obj-1",
        icon: Brain,
        title: "Rapid Concept Review",
        description: "Quickly and effectively review all critical concepts before the exam."
      },
      {
        id: "obj-2",
        icon: Crosshair,
        title: "Important Questions",
        description: "Focus on high-probability questions and frequently asked topics."
      },
      {
        id: "obj-3",
        icon: Target,
        title: "Mock Examinations",
        description: "Simulate the real exam environment to build stamina and confidence."
      },
      {
        id: "obj-4",
        icon: Zap,
        title: "Doubt Clearance",
        description: "Resolve any lingering doubts to enter the exam hall with a clear mind."
      }
    ],
    topics: [
      { id: "t-1", title: "Complete Syllabus Review", subtopics: ["Key formulas", "Theorems", "Concepts"] },
      { id: "t-2", title: "Previous Year Papers", subtopics: ["Analysis", "Solving sessions"] },
      { id: "t-3", title: "Model Question Papers", subtopics: ["Practice", "Discussion"] },
      { id: "t-4", title: "Important Derivations", subtopics: ["Step-by-step review"] },
      { id: "t-5", title: "Scoring Strategies", subtopics: ["Time management", "Presentation"] }
    ],
    benefits: [
      { id: "b-1", icon: Lightbulb, title: "Intensive Sessions" },
      { id: "b-2", icon: Search, title: "Focused Material" },
      { id: "b-3", icon: ClipboardList, title: "Daily Practice Tests" },
      { id: "b-4", icon: MessageCircle, title: "Instant Doubt Resolution" },
      { id: "b-5", icon: Clock, title: "Time Optimization" },
      { id: "b-6", icon: Star, title: "Confidence Boosting" }
    ],
    teachingMethod: [
      { id: "m-1", title: "Review", icon: Brain },
      { id: "m-2", title: "Practice", icon: PenTool },
      { id: "m-3", title: "Test", icon: FileEdit },
      { id: "m-4", title: "Analyze", icon: Search },
      { id: "m-5", title: "Correct", icon: CheckCircle },
      { id: "m-6", title: "Succeed", icon: Award }
    ],
    outcomes: [
      { id: "o-1", icon: Zap, title: "Rapid Recall Ability" },
      { id: "o-2", icon: CheckCircle, title: "Reduced Exam Anxiety" },
      { id: "o-3", icon: Target, title: "Maximized Potential" },
      { id: "o-4", icon: Sparkles, title: "Optimal Exam Score" }
    ]
  }
]
