import { FacultyMember } from "@/src/data/faculty"
import { BookOpen, MapPin, Award } from "lucide-react"

interface FacultyDetailHeroProps {
  member: FacultyMember;
}

export function FacultyDetailHero({ member }: FacultyDetailHeroProps) {
  return (
    <section className="bg-[#0D1B2A] pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] to-gray-900" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full max-w-sm lg:max-w-md shrink-0">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src={member.imageSrc} 
                alt={member.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-grow text-white text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#E31E24]/20 border border-[#E31E24]/30 text-[#E31E24] font-bold text-sm rounded-full mb-6 tracking-wider uppercase">
              {member.category.replace("-", " ")}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
              {member.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              {member.designation}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-start lg:justify-start justify-center">
                <BookOpen className="w-6 h-6 text-[#E31E24] mr-4 shrink-0 mt-1" />
                <div className="text-left">
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Subjects</p>
                  <p className="font-medium text-gray-100">{member.subjects.join(", ")}</p>
                </div>
              </div>
              <div className="flex items-start lg:justify-start justify-center">
                <Award className="w-6 h-6 text-[#E31E24] mr-4 shrink-0 mt-1" />
                <div className="text-left">
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Experience</p>
                  <p className="font-medium text-gray-100">{member.yearsOfExperience} Years</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                "{member.shortIntro}"
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
