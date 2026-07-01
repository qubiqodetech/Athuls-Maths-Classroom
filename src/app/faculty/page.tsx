import { FacultyHero, FacultyGrid, FacultyCTA } from "@/src/components/faculty"
import { getAllFaculty } from "@/src/data/faculty"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Faculty | Athul's Maths Classroom",
  description: "Meet the experienced educators and mentors dedicated to helping students build strong foundations in mathematics.",
}

export default function FacultyPage() {
  const allFaculty = getAllFaculty()
  const teachers = allFaculty.filter(m => m.category === "lead" || m.category === "subject-expert" || m.category === "guest")
  const tutors = allFaculty.filter(m => m.category === "mentor" || m.category === "tutor")

  return (
    <main className="min-h-screen bg-white">
      <FacultyHero 
        title="Meet the Educators Who Inspire Success."
        subtitle="Our Faculty"
        description="Our experienced faculty is committed to helping every student build confidence, strengthen concepts, and achieve academic excellence."
        primaryCta={{ label: "Meet Our Teachers", href: "/teachers" }}
        secondaryCta={{ label: "Explore Courses", href: "/courses" }}
      />
      
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">Expert Teachers</h2>
            <p className="text-gray-600 text-lg">Our core academic team leading the comprehensive mathematics programs.</p>
          </div>
          
          <FacultyGrid members={teachers} variant="teachers" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">Academic Mentors & Tutors</h2>
            <p className="text-gray-600 text-lg">Dedicated support for practice sessions, doubt clearing, and personal mentoring.</p>
          </div>
          
          <FacultyGrid members={tutors} variant="tutors" />
        </div>
      </section>

      <FacultyCTA />
    </main>
  )
}
