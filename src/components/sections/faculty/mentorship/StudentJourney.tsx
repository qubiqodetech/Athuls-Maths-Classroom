"use client"

import { motion } from "motion/react"
import { STUDENT_JOURNEY_STEPS } from "./constants"

export function StudentJourney() {
  return (
    <div className="py-20 mt-12 border-t border-gray-100 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0D1B2A] tracking-tight">
          The Student Journey
        </h3>
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Desktop Horizontal Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2" />
        <motion.div 
          className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#E31E24] to-[#0D1B2A] -translate-y-1/2 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Mobile Vertical Line */}
        <div className="md:hidden absolute top-0 bottom-0 left-[27px] w-0.5 bg-gray-100" />
        <motion.div 
          className="md:hidden absolute top-0 left-[27px] w-0.5 bg-gradient-to-b from-[#E31E24] to-[#0D1B2A] origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          {STUDENT_JOURNEY_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
              className="flex md:flex-col items-center gap-6 md:gap-4 text-center md:flex-1 relative"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-white border-4 border-gray-50 shadow-md flex items-center justify-center relative z-10">
                <div className="w-4 h-4 rounded-full bg-[#0D1B2A]" />
              </div>
              <div className="md:mt-4 flex-1 text-left md:text-center">
                <p className="font-semibold text-[#0D1B2A] text-lg leading-tight">
                  {step.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
