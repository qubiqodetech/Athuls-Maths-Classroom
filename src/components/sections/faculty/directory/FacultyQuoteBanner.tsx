"use client"

import { motion } from "motion/react"
import { Quote } from "lucide-react"

export function FacultyQuoteBanner() {
  return (
    <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] to-gray-900" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote className="w-16 h-16 text-[#E31E24]/40 mx-auto mb-8 rotate-180" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight tracking-tight mb-8">
            "The best teachers don't simply solve problems. <span className="text-[#E31E24]">They help students learn how to think.</span>"
          </h2>
          <div className="w-24 h-1 bg-[#E31E24]/50 mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
