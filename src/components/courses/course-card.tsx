import { Course } from "@/src/data/courses"
import { Users, Clock, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={course.imageSrc} 
          alt={course.imageAlt} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {course.featured && (
          <div className="absolute top-4 right-4 bg-[#E31E24] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Featured
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-[#0D1B2A] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {course.targetClass}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {course.shortDescription}
        </p>
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 border-t border-gray-100 pt-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2 text-[#E31E24]" />
            {course.duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2 text-[#E31E24]" />
            {course.mode}
          </div>
        </div>
        
        <Link 
          href={`/courses/${course.slug}`}
          className="inline-flex items-center justify-center w-full py-3 bg-[#F8FAFC] text-[#0D1B2A] rounded-lg font-medium hover:bg-[#0D1B2A] hover:text-white transition-colors duration-300 group-hover:border-transparent"
        >
          Explore Course
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  )
}
