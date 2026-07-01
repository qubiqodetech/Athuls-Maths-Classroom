import { GraduationCap, Award, Star } from "lucide-react"

interface QualificationCardsProps {
  qualifications: string[];
  achievements: string[];
}

export function QualificationCards({ qualifications, achievements }: QualificationCardsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Qualifications */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-[#0D1B2A]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0D1B2A]">Academic Qualifications</h2>
            </div>
            
            <div className="space-y-4">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-[#E31E24] mr-4 shrink-0" />
                  <span className="text-gray-800 font-medium text-lg">{qual}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-[#0D1B2A]" />
              </div>
              <h2 className="text-3xl font-bold text-[#0D1B2A]">Key Achievements</h2>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <Star className="w-5 h-5 text-[#E31E24] mt-0.5 mr-4 shrink-0" />
                  <span className="text-gray-600 leading-relaxed">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
