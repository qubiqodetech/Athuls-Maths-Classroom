import { CheckCircle2 } from "lucide-react"

interface BenefitsGridProps {
  highlights: string[];
}

export function BenefitsGrid({ highlights }: BenefitsGridProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Course Highlights</h2>
          <p className="text-gray-600">Key features designed to maximize student performance.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-[#16A34A] shrink-0 mr-4 mt-0.5" />
              <p className="text-gray-800 font-medium text-lg">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
