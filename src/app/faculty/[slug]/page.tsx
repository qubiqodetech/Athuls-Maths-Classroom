import { notFound } from "next/navigation"
import { getFacultyBySlug } from "@/src/data/faculty"
import { Metadata } from "next"
import { 
  FacultyDetailHero,
  TeachingPhilosophy,
  ExperienceTimeline,
  QualificationCards,
  StudentTestimonials,
  FacultyCTA
} from "@/src/components/faculty"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const faculty = getFacultyBySlug(slug)
  
  if (!faculty) {
    return {
      title: "Faculty Not Found"
    }
  }

  return {
    title: `${faculty.name} - ${faculty.designation} | Athul's Maths Classroom`,
    description: faculty.shortIntro,
  }
}

export default async function FacultyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const faculty = getFacultyBySlug(slug)

  if (!faculty) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <FacultyDetailHero member={faculty} />
      
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-8">About</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              {faculty.biography}
            </p>
          </div>
        </div>
      </section>

      <TeachingPhilosophy philosophy={faculty.teachingPhilosophy} />
      <QualificationCards qualifications={faculty.qualifications} achievements={faculty.achievements} />
      <ExperienceTimeline timeline={faculty.timeline} />
      <StudentTestimonials testimonials={faculty.testimonials} />
      
      <FacultyCTA />
    </main>
  )
}
