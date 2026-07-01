import Link from "next/link"

export function FacultyCTA() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="bg-[#0D1B2A] rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#E31E24]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Learn from Experienced Educators.
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Experience a transformative approach to learning mathematics. Connect with our faculty and begin your journey to academic excellence today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/admissions"
                className="px-8 py-4 bg-white text-[#0D1B2A] rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
              >
                Apply for Admission
              </Link>
              <Link 
                href="/courses"
                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
