import { FacultyHero, FacultyGrid, FacultyCTA } from "@/src/components/faculty"
import { getTeachers } from "@/src/data/faculty"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teachers | Athul's Maths Classroom",
  description: "Learn from the best mathematics teachers in Kerala. Expert faculty dedicated to academic excellence.",
}

export default function TeachersPage() {
  const teachers = getTeachers()

  return (
    <main className="min-h-screen bg-gray-50">
      <FacultyHero 
        title="Expert Mathematics Teachers"
        subtitle="Core Faculty"
        description="Learn from highly qualified educators with a proven track record of helping students achieve 100% success in board and competitive exams."
        primaryCta={{ label: "Apply for Admission", href: "/admissions" }}
      />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FacultyGrid members={teachers} variant="teachers" />
        </div>
      </section>

      <FacultyCTA />
    </main>
  )
}
