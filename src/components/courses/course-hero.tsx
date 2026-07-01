import { Search } from "lucide-react"

export function CourseHero() {
  return (
    <section className="bg-[#0D1B2A] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-[#E31E24]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wide mb-6">
          Programs & Courses
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Find the Perfect Program for Your Success.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Explore our comprehensive mathematics courses designed to build strong foundations, enhance problem-solving skills, and achieve outstanding board exam results.
        </p>
        
        {/* Search input (Visual only for now, ready for future CMS integration) */}
        <div className="relative max-w-xl mx-auto group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#E31E24] transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search for courses, classes, or topics..." 
            className="block w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E31E24]/50 focus:bg-white/15 transition-all"
          />
        </div>
      </div>
    </section>
  )
}
