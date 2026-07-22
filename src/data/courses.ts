export type CourseCategory = "sslc" | "higher-secondary" | "revision" | "foundation";

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: CourseCategory;
  shortDescription: string;
  description: string;
  targetClass: string;
  duration: string;
  mode: "Offline" | "Online" | "Hybrid";
  featured: boolean;
  highlights: string[];
  topics: { title: string; description: string }[];
  outcomes: { title: string; description: string }[];
  imageSrc: string;
  imageAlt: string;
  faqs: { question: string; answer: string }[];
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "SSLC (All Subjects) Foundation",
    slug: "sslc-mathematics-foundation",
    category: "sslc",
    shortDescription: "A complete guide to mastering 10th standard syllabus with a focus on board exam excellence.",
    description: "The SSLC (All Subjects) Foundation course is meticulously designed for 10th standard students to ensure they not only understand the core academic concepts but also excel in their board examinations. We bridge the gap between textbook knowledge and practical problem-solving.",
    targetClass: "Class 10",
    duration: "1 Year",
    mode: "Offline",
    featured: true,
    imageSrc: "https://picsum.photos/seed/course-sslc/1200/800",
    imageAlt: "SSLC students in a classroom",
    highlights: [
      "Comprehensive syllabus coverage",
      "Chapter-wise mock tests",
      "Previous year question paper discussions",
      "Special focus on weak areas"
    ],
    topics: [
      { title: "Arithmetic Sequences", description: "Understanding sequences, nth term, and sum of n terms." },
      { title: "Basic Sciences & Mathematics", description: "Core concepts across all SSLC subjects." },
      { title: "Second Degree Equations", description: "Solving quadratic equations and applications." },
      { title: "Geometry", description: "Circles, Tangents, and Solids." },
      { title: "Trigonometry", description: "Trigonometric ratios and heights/distances." },
      { title: "Coordinates", description: "Coordinate geometry and applications." },
      { title: "Polynomials", description: "Understanding and factoring polynomials." },
      { title: "Statistics", description: "Mean, median, and data analysis." }
    ],
    outcomes: [
      { title: "Board Exam Readiness", description: "Fully prepared to score A+ in SSLC (All Subjects)." },
      { title: "Strong Foundation", description: "Solid groundwork for Higher Secondary education." },
      { title: "Problem Solving Speed", description: "Enhanced speed and accuracy in calculations." },
      { title: "Conceptual Clarity", description: "Clear understanding over rote memorization." }
    ],
    faqs: [
      { question: "When do the batches start?", answer: "Batches usually commence in the first week of April." },
      { question: "How many students are in a batch?", answer: "We maintain a maximum of 30 students per batch to ensure personal attention." },
      { question: "Do you provide study materials?", answer: "Yes, comprehensive printed notes and question banks are provided." }
    ]
  },
  {
    id: "2",
    title: "Plus One (All Subjects)",
    slug: "plus-one-mathematics",
    category: "higher-secondary",
    shortDescription: "Bridge the gap between high school and higher secondary with strong conceptual clarity.",
    description: "Plus One (All Subjects) sets the stage for higher education. This course is designed to transition students from high school basics to advanced concepts smoothly, ensuring a deep understanding of core topics like Science, Commerce, and Humanities streams.",
    targetClass: "Class 11",
    duration: "1 Year",
    mode: "Offline",
    featured: true,
    imageSrc: "https://picsum.photos/seed/course-plusone/1200/800",
    imageAlt: "Plus One students studying",
    highlights: [
      "In-depth concept building",
      "Foundation for entrance exams",
      "Regular assignments and tests",
      "Doubt clearing sessions"
    ],
    topics: [
      { title: "Sets and Functions", description: "Sets, relations, and advanced functions." },
      { title: "Algebra", description: "Complex numbers, permutations, combinations, and binomial theorem." },
      { title: "Coordinate Geometry", description: "Straight lines and conic sections." },
      { title: "Calculus Basics", description: "Limits and derivatives." },
      { title: "Statistics and Probability", description: "Advanced statistical measures and probability." }
    ],
    outcomes: [
      { title: "Seamless Transition", description: "Smooth shift from 10th to 11th standard academics." },
      { title: "Analytical Thinking", description: "Developed ability to tackle complex logical problems." },
      { title: "Entrance Foundation", description: "Early preparation for KEAM/JEE basic concepts." },
      { title: "Excellent Scores", description: "Top grades in the Plus One board examinations." }
    ],
    faqs: [
      { question: "Is this course aligned with the state syllabus?", answer: "Yes, it perfectly aligns with the Kerala State Syllabus and CBSE." },
      { question: "Are there regular parent-teacher meetings?", answer: "Yes, we conduct PTA meetings after every major term assessment." }
    ]
  },
  {
    id: "3",
    title: "Plus Two (All Subjects) Intensive",
    slug: "plus-two-mathematics",
    category: "higher-secondary",
    shortDescription: "Intensive board exam preparation ensuring top grades and strong foundation for entrance exams.",
    description: "The decisive year of higher secondary education demands a rigorous and focused approach. Our Plus Two (All Subjects) Intensive program is tailored to maximize board exam scores while reinforcing concepts crucial for competitive entrance examinations.",
    targetClass: "Class 12",
    duration: "1 Year",
    mode: "Offline",
    featured: true,
    imageSrc: "https://picsum.photos/seed/course-plustwo/1200/800",
    imageAlt: "Plus Two students preparing for exams",
    highlights: [
      "Rigorous revision schedules",
      "Weekly mock board exams",
      "Individual performance tracking",
      "Time management strategies"
    ],
    topics: [
      { title: "Relations and Functions", description: "Advanced functions and inverse trigonometric functions." },
      { title: "Algebra", description: "Matrices and determinants." },
      { title: "Calculus", description: "Continuity, differentiability, integrals, and differential equations." },
      { title: "Vectors & 3D Geometry", description: "Vector algebra and three-dimensional geometry." },
      { title: "Linear Programming", description: "LPP formulation and graphical solutions." },
      { title: "Probability", description: "Conditional probability and Bayes' theorem." }
    ],
    outcomes: [
      { title: "Board Excellence", description: "Targeting 100% scores in the final board exams." },
      { title: "Competitive Edge", description: "Strong base for tackling competitive entrance examinations." },
      { title: "Exam Confidence", description: "Reduced anxiety through extensive mock testing." },
      { title: "Perfect Time Management", description: "Ability to complete exams accurately within time limits." }
    ],
    faqs: [
      { question: "Do you offer crash courses before exams?", answer: "Yes, enrolled students get our final revision crash course included." },
      { question: "How often are the tests?", answer: "We conduct chapter-wise tests weekly and full-portion mock exams from December." }
    ]
  },
  {
    id: "4",
    title: "Crash Course (SSLC)",
    slug: "sslc-crash-course",
    category: "revision",
    shortDescription: "A fast-paced, highly effective revision program for SSLC students before the final exams.",
    description: "Designed for students who want a quick but comprehensive review of the entire SSLC syllabus. This course focuses on high-yield topics, frequently asked questions, and exam presentation techniques.",
    targetClass: "Class 10",
    duration: "2 Months",
    mode: "Hybrid",
    featured: false,
    imageSrc: "https://picsum.photos/seed/course-crash/1200/800",
    imageAlt: "Students doing fast revision",
    highlights: [
      "Complete syllabus review",
      "Focus on previous year questions",
      "Time-saving calculation tricks",
      "Exam presentation tips"
    ],
    topics: [
      { title: "Important Formulations", description: "Quick recap of all formulas." },
      { title: "High-Weightage Chapters", description: "Deep dive into chapters with maximum marks." },
      { title: "Model Paper Solving", description: "Solving 10+ model question papers." }
    ],
    outcomes: [
      { title: "Quick Confidence Boost", description: "Rapidly build confidence before the exam." },
      { title: "Score Improvement", description: "Significant improvement in expected grades." }
    ],
    faqs: [
      { question: "When does the crash course start?", answer: "Usually in January, two months prior to the board exams." }
    ]
  },
  {
    id: "5",
    title: "Entrance Coaching (KEAM/JEE/NEET)",
    slug: "entrance-coaching",
    category: "higher-secondary",
    shortDescription: "Comprehensive entrance coaching designed to help you secure admissions in top professional colleges.",
    description: "Our dedicated Entrance Coaching program provides intensive preparation for medical and engineering entrance exams like KEAM, JEE, and NEET. We focus on advanced problem-solving techniques, time management, and deep conceptual clarity.",
    targetClass: "Class 11 & 12",
    duration: "1-2 Years",
    mode: "Offline",
    featured: true,
    imageSrc: "https://picsum.photos/seed/course-entrance/1200/800",
    imageAlt: "Students preparing for entrance exams",
    highlights: [
      "Expert faculty for all subjects",
      "Extensive question banks",
      "Regular mock tests and analysis",
      "Doubt clearance sessions"
    ],
    topics: [
      { title: "Advanced Physics", description: "In-depth mechanics, electromagnetism, and modern physics." },
      { title: "Advanced Chemistry", description: "Physical, organic, and inorganic chemistry for competitive exams." },
      { title: "Mathematics (JEE/KEAM)", description: "Complex problem-solving in calculus, algebra, and coordinate geometry." },
      { title: "Biology (NEET)", description: "Detailed study of botany and zoology." }
    ],
    outcomes: [
      { title: "High Ranks", description: "Targeting top ranks in state and national level entrance exams." },
      { title: "Speed and Accuracy", description: "Mastering the art of solving complex problems quickly." },
      { title: "Exam Strategy", description: "Developing effective strategies for different exam patterns." },
      { title: "Confidence", description: "Building the confidence to face highly competitive exams." }
    ],
    faqs: [
      { question: "Do you provide separate coaching for NEET and JEE?", answer: "Yes, we have specialized batches tailored for medical and engineering aspirants." },
      { question: "Are study materials included?", answer: "Yes, we provide comprehensive, up-to-date study materials and mock test series." }
    ]
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((course) => course.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return coursesData.filter((course) => course.featured);
}

export function getAllCourses(): Course[] {
  return coursesData;
}
