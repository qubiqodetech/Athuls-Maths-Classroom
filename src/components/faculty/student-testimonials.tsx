import { FacultyTestimonial } from "@/src/data/faculty"
import { Quote } from "lucide-react"

interface StudentTestimonialsProps {
  testimonials: FacultyTestimonial[];
}

export function StudentTestimonials({ testimonials }: StudentTestimonialsProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">Student Success Stories</h2>
          <p className="text-gray-600">Hear directly from students who have learned and succeeded.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-100" />
              <div className="relative z-10">
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div>
                    <h4 className="font-bold text-[#0D1B2A]">{testimonial.studentName}</h4>
                    <p className="text-sm text-gray-500">{testimonial.course}</p>
                  </div>
                  <div className="bg-green-50 text-green-700 font-bold text-xs px-3 py-1.5 rounded-full border border-green-200">
                    {testimonial.achievement}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
