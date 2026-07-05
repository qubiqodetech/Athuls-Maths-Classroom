"use client"

import { motion } from "motion/react"
import { QUALIFICATIONS } from "./constants"

export function QualificationDashboard() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
      {QUALIFICATIONS.map((qual, index) => {
        const Icon = qual.icon
        return (
          <motion.div
            key={qual.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/60 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Hover subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/0 to-[#E31E24]/0 group-hover:from-[#E31E24]/5 group-hover:to-transparent transition-colors duration-500 rounded-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#E31E24] transition-colors duration-300 border border-gray-100">
                <Icon className="w-6 h-6 text-[#0D1B2A] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">{qual.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                {qual.description}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
