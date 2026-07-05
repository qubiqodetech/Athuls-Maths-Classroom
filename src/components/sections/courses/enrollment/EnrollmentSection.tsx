"use client"

import { motion } from "motion/react"
import { EnrollmentCTA } from "./EnrollmentCTA"
import { TrustChips } from "./TrustChips"
import { SuccessMetrics } from "./SuccessMetrics"
import { StudentQuote } from "./StudentQuote"
import { DecorativeIllustration } from "./DecorativeIllustration"

export function EnrollmentSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-[#0D1B2A] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E31E24]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          <div className="lg:col-span-7 max-w-2xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-xl">
                ADMISSIONS OPEN
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6">
                Start Your Journey<br />Towards{" "}
                <span className="text-[#E31E24]">Mathematical Excellence.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Join Athul&apos;s Maths Classroom and learn through structured guidance, concept-based teaching, and personalized mentoring.
                <br /><br />
                Your success begins with one simple step.
              </p>
            </motion.div>

            <EnrollmentCTA />
            
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Why choose AMC</p>
              <TrustChips />
            </div>
          </div>

          <div className="lg:col-span-5 relative">
             <DecorativeIllustration />
             <div className="grid gap-6 relative z-10">
               <SuccessMetrics />
               <StudentQuote />
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
