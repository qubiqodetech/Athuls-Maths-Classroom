export type FacultyCategory = "lead" | "subject-expert" | "guest" | "mentor" | "tutor";

export interface FacultyTestimonial {
  studentName: string;
  course: string;
  content: string;
  achievement: string;
}

export interface FacultyExperience {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  slug: string;
  designation: string;
  category: FacultyCategory;
  subjects: string[];
  yearsOfExperience: string;
  qualifications: string[];
  shortIntro: string;
  biography: string;
  teachingPhilosophy: string;
  achievements: string[];
  imageSrc: string;
  imageAlt: string;
  featured: boolean;
  timeline: FacultyExperience[];
  testimonials: FacultyTestimonial[];
  availability?: string; // especially for tutors
  languages?: string[]; // especially for tutors
}

export const facultyData: FacultyMember[] = [
  {
    id: "1",
    name: "Athul Krishna",
    slug: "athul-krishna",
    designation: "Founder & Lead Educator",
    category: "lead",
    subjects: ["SSLC Mathematics", "Plus One Mathematics", "Plus Two Mathematics"],
    yearsOfExperience: "10+",
    qualifications: ["M.Sc Mathematics", "B.Ed"],
    shortIntro: "Passionate educator dedicated to making mathematics intuitive and enjoyable for every student.",
    biography: "Athul Krishna is the visionary founder of Athul's Maths Classroom. With over a decade of teaching experience, he has transformed the way students approach mathematics. He believes that math is not about rote memorization, but about understanding the underlying concepts and logical patterns. Under his guidance, hundreds of students have achieved top grades in their board examinations and built a strong foundation for competitive entrance exams.",
    teachingPhilosophy: "I believe in breaking down complex mathematical concepts into simple, relatable ideas. My goal is to eliminate math anxiety and foster a deep, genuine interest in the subject through logical reasoning and consistent practice.",
    achievements: [
      "Mentored 1000+ students across Kerala",
      "Consistent 100% success rate in board exams",
      "Developed unique concept-based teaching modules"
    ],
    imageSrc: "https://picsum.photos/seed/faculty-athul/800/1000",
    imageAlt: "Athul Krishna",
    featured: true,
    timeline: [
      {
        title: "Founded AMC",
        organization: "Athul's Maths Classroom",
        year: "2015 - Present",
        description: "Established the premier mathematics institute."
      },
      {
        title: "Senior Mathematics Teacher",
        organization: "Leading Higher Secondary School",
        year: "2010 - 2015",
        description: "Led the mathematics department and produced top district ranks."
      }
    ],
    testimonials: [
      {
        studentName: "Rahul M.",
        course: "Plus Two Mathematics",
        content: "Athul sir completely changed my perspective on math. His classes are engaging and concept-focused.",
        achievement: "Scored 100% in Board Exams"
      },
      {
        studentName: "Sneha P.",
        course: "SSLC Foundation",
        content: "The best math teacher I've ever had. He makes sure no student is left behind.",
        achievement: "A+ in all subjects"
      }
    ]
  },
  {
    id: "2",
    name: "Dr. Anjali Nair",
    slug: "anjali-nair",
    designation: "Senior Subject Expert",
    category: "subject-expert",
    subjects: ["Calculus", "Trigonometry", "Entrance Preparation"],
    yearsOfExperience: "8",
    qualifications: ["Ph.D in Applied Mathematics", "M.Sc Mathematics"],
    shortIntro: "Specializes in advanced calculus and competitive exam preparation with a focus on analytical thinking.",
    biography: "Dr. Anjali Nair brings a wealth of academic rigor to AMC. Her doctoral research in Applied Mathematics allows her to explain abstract concepts with real-world applications. She specializes in guiding Plus Two students through the intricacies of Calculus and preparing them for competitive entrance examinations like KEAM and JEE.",
    teachingPhilosophy: "Mathematics is the language of nature. By connecting theoretical formulas to real-world phenomena, I help students appreciate the beauty of mathematics and develop strong analytical skills.",
    achievements: [
      "Published 5 research papers in international journals",
      "Guided 50+ students to top engineering colleges",
      "Expert in entrance exam strategies"
    ],
    imageSrc: "https://picsum.photos/seed/faculty-anjali/800/1000",
    imageAlt: "Dr. Anjali Nair",
    featured: true,
    timeline: [
      {
        title: "Senior Subject Expert",
        organization: "Athul's Maths Classroom",
        year: "2020 - Present",
        description: "Leading the Plus Two intensive and entrance prep modules."
      },
      {
        title: "Assistant Professor",
        organization: "Reputed Engineering College",
        year: "2016 - 2020",
        description: "Taught advanced engineering mathematics."
      }
    ],
    testimonials: [
      {
        studentName: "Vishnu K.",
        course: "Plus Two Intensive",
        content: "Anjali ma'am's calculus classes are brilliant. She simplifies the toughest integration problems.",
        achievement: "Secured admission in NIT"
      }
    ]
  },
  {
    id: "3",
    name: "Rohan Kumar",
    slug: "rohan-kumar",
    designation: "Academic Mentor & Tutor",
    category: "tutor",
    subjects: ["SSLC Mathematics", "Algebra Fundamentals"],
    yearsOfExperience: "3",
    qualifications: ["B.Tech Computer Science", "Mathematics Enthusiast"],
    shortIntro: "Friendly and approachable mentor who excels at helping students with daily practice and doubt clearing.",
    biography: "Rohan is an energetic academic mentor known for his interactive doubt-clearing sessions. He bridges the gap between classroom teaching and home practice, ensuring students stay on track with their assignments and understand their mistakes.",
    teachingPhilosophy: "Practice makes perfect, but only when practiced correctly. My role is to guide students through their practice sessions, correcting mistakes instantly and building their confidence.",
    achievements: [
      "Conducted 200+ hours of doubt-clearing sessions",
      "Voted 'Most Approachable Tutor' by students"
    ],
    imageSrc: "https://picsum.photos/seed/faculty-rohan/800/1000",
    imageAlt: "Rohan Kumar",
    featured: false,
    availability: "Evenings & Weekends",
    languages: ["English", "Malayalam"],
    timeline: [
      {
        title: "Academic Mentor",
        organization: "Athul's Maths Classroom",
        year: "2022 - Present",
        description: "Assisting SSLC and Plus One students with practice modules."
      }
    ],
    testimonials: [
      {
        studentName: "Abhirami S.",
        course: "SSLC Crash Course",
        content: "Rohan chettan helped me clear all my doubts before the exams. Very patient and helpful.",
        achievement: "Scored A+ in Math"
      }
    ]
  }
];

export function getFacultyBySlug(slug: string): FacultyMember | undefined {
  return facultyData.find((member) => member.slug === slug);
}

export function getAllFaculty(): FacultyMember[] {
  return facultyData;
}

export function getFeaturedFaculty(): FacultyMember[] {
  return facultyData.filter((member) => member.featured);
}

export function getTeachers(): FacultyMember[] {
  return facultyData.filter((member) => member.category === "lead" || member.category === "subject-expert" || member.category === "guest");
}

export function getTutors(): FacultyMember[] {
  return facultyData.filter((member) => member.category === "tutor" || member.category === "mentor");
}
