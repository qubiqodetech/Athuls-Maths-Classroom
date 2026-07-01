import { Course } from "@/src/data/courses"
import { Clock, Users, ArrowRight } from "lucide-react"

interface CourseDetailHeroProps {
  course: Course;
}

export function CourseDetailHero({ course }: CourseDetailHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0D1B2A] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={course.imageSrc} 
          alt={course.imageAlt} 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-[#E31E24] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {course.targetClass}
            </span>
            {course.featured && (
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Featured Program
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {course.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
            {course.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <div className="flex items-center text-white/80">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <Clock className="w-5 h-5 text-[#E31E24]" />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider">Duration</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center text-white/80">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <Users className="w-5 h-5 text-[#E31E24]" />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider">Learning Mode</p>
                <p className="font-semibold">{course.mode}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-4 bg-[#E31E24] text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 flex items-center">
              Apply for Admission
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
