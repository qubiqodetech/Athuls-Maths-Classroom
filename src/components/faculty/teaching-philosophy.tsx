import { Lightbulb, Target, Users, BookOpen } from "lucide-react"

interface TeachingPhilosophyProps {
  philosophy: string;
}

export function TeachingPhilosophy({ philosophy }: TeachingPhilosophyProps) {
  const principles = [
    {
      title: "Concept-Based Learning",
      description: "Focusing on the 'why' behind the formulas, ensuring deep understanding rather than rote memorization.",
      icon: Lightbulb
    },
    {
      title: "Practical Problem Solving",
      description: "Applying theoretical concepts to real-world scenarios and past exam questions.",
      icon: Target
    },
    {
      title: "Individual Attention",
      description: "Adapting teaching methods to suit the unique learning pace of each student.",
      icon: Users
    },
    {
      title: "Confidence Building",
      description: "Creating a supportive environment where students feel encouraged to ask questions and make mistakes.",
      icon: BookOpen
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">Teaching Philosophy</h2>
            <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-[#E31E24] pl-6 text-left bg-gray-50 p-8 rounded-r-2xl">
              "{philosophy}"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#E31E24]/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#0D1B2A] mb-6 group-hover:text-[#E31E24] transition-colors">
                  <principle.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
