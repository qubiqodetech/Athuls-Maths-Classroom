import { FacultyCTA } from "@/src/components/faculty"
import { FacultyHero } from "@/src/components/sections/faculty/hero"
import { MentorshipSection } from "@/src/components/sections/faculty/mentorship"
import { ExcellenceSection } from "@/src/components/sections/faculty/excellence"
import { ActionSection } from "@/src/components/sections/faculty/action"
import { ExperiencesSection } from "@/src/components/sections/faculty/experiences"
import { FaqSection } from "@/src/components/sections/faculty/faq"
import { FacultyDirectorySection } from "@/src/components/sections/faculty/directory"
import { getAllFaculty } from "@/src/data/faculty"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Faculty | Athul's Maths Classroom",
  description: "Meet the experienced educators and mentors dedicated to helping students build strong foundations in mathematics.",
}

export default function FacultyPage() {
  const allFaculty = getAllFaculty()

  return (
    <main className="min-h-screen bg-white">
      <FacultyHero />
      <MentorshipSection />
      <ExcellenceSection />
      <ActionSection />
      <ExperiencesSection />
      <FaqSection />
      <FacultyDirectorySection allFaculty={allFaculty} />
      <FacultyCTA />
    </main>
  )
}
