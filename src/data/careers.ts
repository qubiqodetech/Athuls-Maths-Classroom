export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  description: string;
  requirements: string[];
}

export const OPEN_POSITIONS: JobPosition[] = [
  {
    id: "1",
    title: "Senior Mathematics Teacher (Plus Two)",
    department: "Academics",
    location: "Karuvanchal, Kannur",
    type: "Full-time",
    description: "We are looking for an experienced and passionate Mathematics teacher to lead our Plus Two curriculum and guide students towards excellent board and entrance exam results.",
    requirements: [
      "Master's Degree in Mathematics (M.Sc)",
      "B.Ed or equivalent teaching certification",
      "Minimum 5 years of teaching experience in Higher Secondary level",
      "Proven track record of producing top results",
      "Excellent communication and mentoring skills"
    ]
  },
  {
    id: "2",
    title: "Academic Tutor (Sciences)",
    department: "Tutoring",
    location: "Karuvanchal, Kannur",
    type: "Part-time",
    description: "Join our tutoring team to assist students in their daily practice, clear doubts, and help them build strong foundational concepts in Physics and Chemistry.",
    requirements: [
      "B.Sc or B.Tech degree",
      "Strong understanding of high school Physics and Chemistry",
      "Patience and ability to explain concepts simply",
      "Previous tutoring experience is a plus",
      "Available for evening and weekend sessions"
    ]
  },
  {
    id: "3",
    title: "Student Counselor",
    department: "Administration",
    location: "Karuvanchal, Kannur",
    type: "Full-time",
    description: "Seeking an empathetic Student Counselor to guide students regarding course selections, career paths, and help them manage academic stress.",
    requirements: [
      "Degree in Psychology, Counseling, or related field",
      "Experience in educational counseling",
      "Excellent interpersonal and communication skills",
      "Ability to connect with teenagers and parents alike"
    ]
  }
];
