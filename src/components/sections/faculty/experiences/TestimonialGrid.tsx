"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { TESTIMONIALS, TESTIMONIAL_FILTERS } from "./constants"
import { cn } from "@/src/lib/utils"
import { Quote } from "lucide-react"

export function TestimonialGrid() {
  const [activeFilter, setActiveFilter] = useState("All")
  
  const filteredTestimonials = TESTIMONIALS.filter(t => 
    activeFilter === "All" ? true : t.type === activeFilter
  )

  return (
    <div className="mb-24">
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {TESTIMONIAL_FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D1B2A]",
              activeFilter === filter
                ? "bg-[#0D1B2A] text-white border-[#0D1B2A]"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              layout
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <Quote className="w-8 h-8 text-gray-200 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-[#0D1B2A] mb-1">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.context}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
