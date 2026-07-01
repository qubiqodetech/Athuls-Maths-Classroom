import { Course } from "@/src/data/courses"
import { CourseGrid } from "./course-grid"

interface RelatedCoursesProps {
  courses: Course[];
  currentCourseId: string;
}

export function RelatedCourses({ courses, currentCourseId }: RelatedCoursesProps) {
  // Filter out the current course and take up to 3
  const relatedCourses = courses
    .filter(course => course.id !== currentCourseId)
    .slice(0, 3)

  if (relatedCourses.length === 0) return null;

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Other Programs</h2>
            <p className="text-gray-600">Explore other courses we offer.</p>
          </div>
        </div>
        
        <CourseGrid courses={relatedCourses} />
      </div>
    </section>
  )
}
