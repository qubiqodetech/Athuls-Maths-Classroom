import { notFound } from "next/navigation"
import { getCourseBySlug, getAllCourses } from "@/src/data/courses"
import { Metadata } from "next"
import { 
  CourseDetailHero,
  BenefitsGrid,
  OutcomeCards,
  CourseFAQ,
  BatchCard,
  RelatedCourses
} from "@/src/components/courses"
import { EnrollmentSection } from "@/src/components/sections/courses/enrollment"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug)
  
  if (!course) {
    return {
      title: "Course Not Found"
    }
  }

  return {
    title: `${course.title} | Athul's Maths Classroom`,
    description: course.shortDescription,
  }
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug)
  const allCourses = getAllCourses()

  if (!course) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <CourseDetailHero course={course} />
      
      {/* Topics Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-8">What You Will Learn</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {course.topics.map((topic, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#E31E24]/10 text-[#E31E24] flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0D1B2A] mb-2">{topic.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BenefitsGrid highlights={course.highlights} />
      <OutcomeCards outcomes={course.outcomes} />
      <BatchCard />
      <CourseFAQ faqs={course.faqs} />
      <EnrollmentSection />
      <RelatedCourses courses={allCourses} currentCourseId={course.id} />
    </main>
  )
}
