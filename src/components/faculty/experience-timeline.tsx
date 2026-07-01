import { FacultyExperience } from "@/src/data/faculty"
import { Calendar } from "lucide-react"

interface ExperienceTimelineProps {
  timeline: FacultyExperience[];
}

export function ExperienceTimeline({ timeline }: ExperienceTimelineProps) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-12 text-center">Career Journey</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-50 bg-[#0D1B2A] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                  <Calendar className="w-4 h-4" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col mb-2">
                    <span className="text-[#E31E24] font-bold text-sm tracking-wide uppercase mb-1">{item.year}</span>
                    <h3 className="text-xl font-bold text-[#0D1B2A]">{item.title}</h3>
                  </div>
                  <h4 className="text-gray-900 font-medium mb-3">{item.organization}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
