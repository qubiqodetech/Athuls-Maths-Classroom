import { Calendar, MapPin, Monitor } from "lucide-react"

export function BatchCard() {
  // Static for now, ready to be driven by props/CMS in the future
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0D1B2A] rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Upcoming Batches</h2>
                  <p className="text-gray-400">Secure your seat for the next academic year.</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-[#E31E24]/20 text-[#E31E24] rounded-full font-bold text-sm">
                    Admissions Open
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Offline Batch */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Offline Campus</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E31E24] mr-3" />
                      Morning & Evening batches available
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E31E24] mr-3" />
                      Max 30 students per batch
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E31E24] mr-3" />
                      Direct teacher interaction
                    </li>
                  </ul>
                  <div className="flex items-center text-sm font-medium text-white/50 bg-black/20 p-3 rounded-lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Starts first week of April
                  </div>
                </div>

                {/* Online Batch */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Online Live</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                      Evening weekend batches
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                      Interactive live sessions
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                      Recorded sessions access
                    </li>
                  </ul>
                  <div className="flex items-center text-sm font-medium text-white/50 bg-black/20 p-3 rounded-lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Starts mid April
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
