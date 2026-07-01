import { BookOpen, Users, Target, Lightbulb, TrendingUp, Award } from "lucide-react"
import { Hero } from "@/src/components/sections/hero"
import { TrustSection } from "@/src/components/sections/trust"
import { LearningExperience } from "@/src/components/sections/learning-experience"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustSection />
      <LearningExperience />

      {/* Courses Section */}
      <section className="py-24 bg-[#050816] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-gray-400 text-lg">Comprehensive mathematics programs designed for different academic levels.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "SSLC Mathematics Foundation", desc: "A complete guide to mastering 10th standard mathematics.", img: "https://picsum.photos/seed/sslc/800/600", tag: "Class 10" },
              { title: "Plus One Mathematics", desc: "Bridge the gap between high school and higher secondary.", img: "https://picsum.photos/seed/plusone/800/600", tag: "Class 11" },
              { title: "Plus Two Mathematics", desc: "Intensive board exam preparation ensuring top grades.", img: "https://picsum.photos/seed/plustwo/800/600", tag: "Class 12" }
            ].map((course, i) => (
              <div key={i} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                <img src={course.img} alt={course.title} className="w-full aspect-video object-cover" />
                <div className="p-6">
                  <span className="text-sm font-semibold text-[#E31E24] mb-2 block">{course.tag}</span>
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <p className="text-gray-400 mb-6">{course.desc}</p>
                  <button className="w-full py-3 bg-white text-[#0D1B2A] rounded-lg font-medium hover:bg-gray-200 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E31E24] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Begin Your Learning Journey Today.</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join hundreds of students who trust Athul's Maths Classroom to achieve academic success.
          </p>
          <button className="px-8 py-4 bg-white text-[#E31E24] rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl">
            Apply for Admission
          </button>
        </div>
      </section>
    </main>
  )
}
