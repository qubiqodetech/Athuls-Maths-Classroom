interface OutcomeCardsProps {
  outcomes: { title: string; description: string }[];
}

export function OutcomeCards({ outcomes }: OutcomeCardsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">Learning Outcomes</h2>
          <p className="text-gray-600">What you will achieve by the end of this program.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#E31E24]/30 hover:bg-[#E31E24]/5 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#E31E24] font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{outcome.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
