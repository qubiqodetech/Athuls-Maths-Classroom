import { BookOpen, Users, Target, Lightbulb, TrendingUp, Award } from "lucide-react"
import { Hero } from "@/src/components/sections/hero"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />


      {/* Stats Section */}
      <section className="border-b bg-[#F8FAFC]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#0D1B2A] mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Students Mentored</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0D1B2A] mb-2">500+</div>
              <div className="text-gray-600 font-medium">A+ Achievers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0D1B2A] mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0D1B2A] mb-2">100%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">A Better Way to Learn Mathematics</h2>
            <p className="text-gray-600 text-lg">We go beyond traditional teaching methods to ensure every student understands, practices, and excels in mathematics.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Concept-Based Learning", desc: "Focus on building a strong foundation by thoroughly explaining concepts.", icon: Lightbulb },
              { title: "Personal Attention", desc: "Small batch sizes and personalized mentoring ensure unique learning needs are met.", icon: Users },
              { title: "Regular Assessments", desc: "Frequent tests and detailed performance analysis help track progress.", icon: Target },
              { title: "Experienced Faculty", desc: "Learn from passionate and highly qualified educators.", icon: Award },
              { title: "Interactive Sessions", desc: "Engaging classroom environments that encourage questions.", icon: BookOpen },
              { title: "Exam-Oriented Prep", desc: "Strategic preparation techniques and previous year question discussions.", icon: TrendingUp }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-[#0D1B2A] rounded-xl flex items-center justify-center text-white mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
