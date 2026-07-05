"use client"

import { motion } from "motion/react"
import { CLASSROOM_PRINCIPLES } from "./constants"
import { ArrowRight } from "lucide-react"

export function ClassroomPrinciples() {
  return (
    <div className="mb-24 py-16 border-y border-gray-100 overflow-x-auto no-scrollbar relative">
      {/* Fade edges for scroll indication */}
      <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      <div className="flex items-start min-w-max gap-8 px-8 max-w-7xl mx-auto">
        {CLASSROOM_PRINCIPLES.map((principle, index) => (
          <div key={principle.id} className="flex items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-48 group cursor-default"
            >
              <div className="text-4xl font-display font-bold text-gray-100 group-hover:text-[#E31E24]/20 transition-colors mb-4">
                0{index + 1}
              </div>
              <h4 className="text-lg font-bold text-[#0D1B2A] mb-2 group-hover:text-[#E31E24] transition-colors">{principle.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{principle.description}</p>
            </motion.div>
            
            {index < CLASSROOM_PRINCIPLES.length - 1 && (
              <div className="text-gray-200 mt-12">
                <ArrowRight className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
