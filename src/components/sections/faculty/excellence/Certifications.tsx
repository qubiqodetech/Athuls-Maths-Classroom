"use client"

import { motion } from "motion/react"
import { Award, Download } from "lucide-react"
import { CERTIFICATIONS } from "./constants"

export function Certifications() {
  return (
    <div className="py-24 border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B2A] tracking-tight mb-4">Certifications & Achievements</h3>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Recognized excellence in education and mentoring.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white border border-gray-200 rounded-3xl p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 flex items-center justify-center mb-6 text-[#E31E24]">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#0D1B2A] mb-2">{cert.title}</h4>
                <p className="text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-400 font-medium">{cert.year}</p>
              </div>
              
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#0D1B2A] group-hover:text-white transition-colors duration-300 shrink-0" aria-label="Download Certificate">
                <Download className="w-4 h-4" />
              </button>
            </div>
            
            {/* Future PDF Preview Hint */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
