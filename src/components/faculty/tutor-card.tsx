import { FacultyMember } from "@/src/data/faculty"
import { Languages, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

interface TutorCardProps {
  member: FacultyMember;
}

export function TutorCard({ member }: TutorCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full sm:flex-row sm:items-center gap-6">
      <div className="shrink-0 relative overflow-hidden rounded-full w-24 h-24 sm:w-32 sm:h-32 border-4 border-gray-50">
        <img 
          src={member.imageSrc} 
          alt={member.imageAlt} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-1">{member.name}</h3>
            <p className="text-[#E31E24] font-medium text-sm">{member.designation}</p>
          </div>
          <Link 
            href={`/faculty/${member.slug}`}
            className="shrink-0 inline-flex items-center justify-center px-4 py-2 bg-gray-50 text-[#0D1B2A] rounded-lg text-sm font-semibold hover:bg-[#0D1B2A] hover:text-white transition-colors"
          >
            View Profile
          </Link>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-2xl">
          {member.shortIntro}
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 mt-auto">
          {member.availability && (
            <div className="flex items-center text-xs text-gray-500 font-medium">
              <Clock className="w-4 h-4 mr-1.5 text-gray-400" />
              {member.availability}
            </div>
          )}
          {member.languages && member.languages.length > 0 && (
            <div className="flex items-center text-xs text-gray-500 font-medium">
              <Languages className="w-4 h-4 mr-1.5 text-gray-400" />
              {member.languages.join(", ")}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
