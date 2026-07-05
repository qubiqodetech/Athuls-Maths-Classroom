"use client"

import { motion } from "motion/react"

export function SectionHeading() {
  return (
    <div className="max-w-2xl lg:max-w-[720px] mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-gray-100 text-gray-600 text-sm font-bold tracking-wider uppercase mb-6">
          BEYOND THE CLASSROOM
        </span>
        
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0D1B2A] tracking-tight mb-8 leading-tight">
          Teaching Beyond Lessons.<br />
          <span className="text-[#E31E24]">Mentoring</span> Beyond Examinations.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          At Athul&apos;s Maths Classroom, education extends beyond completing the syllabus.
          <br /><br />
          Our educators become mentors who guide students through challenges, encourage curiosity, build confidence, and celebrate every milestone of their academic journey.
        </p>
      </motion.div>
    </div>
  )
}
