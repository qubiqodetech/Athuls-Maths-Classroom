import { BookOpen, PenTool, Target, Award, ArrowDown } from "lucide-react"

export function LearningJourney() {
  const steps = [
    {
      title: "Concept Learning",
      description: "We break down complex topics into simple, understandable concepts.",
      icon: BookOpen,
      delay: 0
    },
    {
      title: "Guided Practice",
      description: "Students solve problems with step-by-step guidance from tutors.",
      icon: PenTool,
      delay: 100
    },
    {
      title: "Regular Assessment",
      description: "Frequent tests to evaluate understanding and identify weak areas.",
      icon: Target,
      delay: 200
    },
    {
      title: "Academic Success",
      description: "Achieving top grades and developing long-term mathematical confidence.",
      icon: Award,
      delay: 300
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#E31E24] font-semibold tracking-wider uppercase text-sm mb-2 block">Methodology</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">The Learning Journey</h2>
          <p className="text-gray-600 text-lg">
            Our proven approach takes students from basic understanding to complete mastery.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-100 via-[#E31E24]/30 to-gray-100 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center text-[#0D1B2A] shadow-lg mb-6 group-hover:-translate-y-2 group-hover:border-[#E31E24] group-hover:text-[#E31E24] transition-all duration-300 relative z-10">
                  <step.icon className="w-8 h-8" />
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0D1B2A] text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                
                {/* Mobile connecting arrow */}
                {index < steps.length - 1 && (
                  <ArrowDown className="w-6 h-6 text-gray-300 md:hidden mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
