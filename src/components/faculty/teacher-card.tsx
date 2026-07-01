import { FacultyMember } from "@/src/data/faculty"
import { BookOpen, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

interface TeacherCardProps {
  member: FacultyMember;
}

export function TeacherCard({ member }: TeacherCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-500 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[4/5]">
        <img 
          src={member.imageSrc} 
          alt={member.imageAlt} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-transparent to-transparent opacity-80" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-[#E31E24] font-medium text-sm tracking-wide">{member.designation}</p>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
          {member.shortIntro}
        </p>
        
        <div className="space-y-4 mb-8 border-t border-gray-100 pt-6">
          <div className="flex items-center text-sm text-gray-600">
            <GraduationCap className="w-5 h-5 mr-3 text-gray-400" />
            <span className="truncate">{member.qualifications.join(", ")}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <BookOpen className="w-5 h-5 mr-3 text-gray-400" />
            <span className="truncate">{member.yearsOfExperience} Years Experience</span>
          </div>
        </div>
        
        <Link 
          href={`/faculty/${member.slug}`}
          className="inline-flex items-center text-[#0D1B2A] font-bold text-sm hover:text-[#E31E24] transition-colors group/link"
        >
          View Full Profile
          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
