"use client"

import { motion } from "motion/react"

export function SectionHeader() {
  return (
    <div className="max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-[#E31E24]/10 text-[#E31E24] text-sm font-bold tracking-wider uppercase mb-8">
          TEACHING EXCELLENCE
        </span>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0D1B2A] tracking-tight mb-8 leading-tight">
          Knowledge,<br />
          Experience,<br />
          And A <span className="text-[#E31E24]">Passion</span><br />
          For Teaching.
        </h2>
        
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed border-l-4 border-gray-200 pl-6 lg:pl-8">
          <p>
            At Athul&apos;s Maths Classroom, we believe that academic brilliance is only half the equation. The true art of education lies in the ability to transfer that knowledge effectively.
          </p>
          <p>
            Our faculty combines profound subject expertise with pedagogical mastery. They don&apos;t just know mathematics; they know how to teach it in a way that builds confidence, clarity, and lifelong curiosity.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
