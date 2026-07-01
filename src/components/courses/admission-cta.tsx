import Link from "next/link"

export function AdmissionCTA() {
  return (
    <section className="py-24 bg-[#E31E24] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight max-w-3xl mx-auto">
          Start Your Mathematics Journey Today.
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Join Athul's Maths Classroom and experience a learning environment where understanding comes first. Limited seats available for the upcoming batches.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/admissions"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#E31E24] rounded-xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Apply for Admission
          </Link>
          <Link 
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
