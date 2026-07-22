import { FacultyHero } from "@/src/components/sections/faculty/hero"
import { CtaSection } from "@/src/components/sections/faculty/cta"
import { FacultyDirectorySection } from "@/src/components/sections/faculty/directory"
import { getAllFaculty } from "@/src/data/faculty"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Faculty | Athul's Maths Classroom",
  description: "Meet the experienced educators and mentors dedicated to helping students build strong foundations in their studies.",
}

export default function FacultyPage() {
  const allFaculty = getAllFaculty()

  return (
    <main className="min-h-screen bg-white">
      <FacultyHero />
      <FacultyDirectorySection allFaculty={allFaculty} />
      <CtaSection />
    </main>
  )
}
