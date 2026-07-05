"use client"

import { motion } from "motion/react"
import { Quote } from "lucide-react"

export function PhilosophyQuote() {
  return (
    <div className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote className="w-16 h-16 text-[#0D1B2A]/10 mx-auto mb-8 rotate-180" />
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-[#0D1B2A] leading-tight tracking-tight mb-8">
            "Great teachers <span className="text-[#E31E24] italic">never stop learning.</span>"
          </h3>
          <div className="w-16 h-1 bg-[#E31E24] mx-auto rounded-full" />
        </motion.div>
      </div>
    </div>
  )
}
