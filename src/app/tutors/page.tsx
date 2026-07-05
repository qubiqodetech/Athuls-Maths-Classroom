import { FacultyGrid, FacultyCTA } from "@/src/components/faculty"
import { PageHero } from "@/src/components/shared"
import { getTutors } from "@/src/data/faculty"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tutors & Mentors | Athul's Maths Classroom",
  description: "Get personalized guidance from our academic mentors and tutors. Perfect for doubt clearing and regular practice.",
}

export default function TutorsPage() {
  const tutors = getTutors()

  return (
    <main className="min-h-screen bg-gray-50">
      <PageHero 
        title="Academic Mentors & Tutors"
        subtitle="Personalized Support"
        description="Our mentors ensure you stay on track with regular practice, instant doubt clearing, and personalized guidance."
        primaryCta={{ label: "Explore Courses", href: "/courses" }}
      />
      
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <FacultyGrid members={tutors} variant="tutors" />
        </div>
      </section>

      <FacultyCTA />
    </main>
  )
}
