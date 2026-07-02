"use client";

import { motion } from "motion/react";
import { LearningJourney } from "./LearningJourney";
import { PhilosophyCards } from "./PhilosophyCards";
import { ClassroomExperience } from "./ClassroomExperience";
import { SignatureQuote } from "./SignatureQuote";
import { LearningPrinciples } from "./LearningPrinciples";
import { SectionDivider } from "./SectionDivider";

export function TeachingPhilosophy() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-50 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      {/* Abstract mathematical grid (low opacity) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="philosophy-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#0D1B2A]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#philosophy-grid)" />
      </svg>

      <div className="container mx-auto relative z-10 w-full max-w-7xl">
        <div className="max-w-3xl mx-auto text-center px-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase border border-blue-100">
              OUR TEACHING PHILOSOPHY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0D1B2A] leading-tight tracking-tight mb-8"
          >
            Teaching Mathematics <br className="hidden sm:block" />
            <span className="text-[#E31E24]">Beyond Memorization.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[650px] mx-auto"
          >
            Mathematics becomes enjoyable when students truly understand concepts instead of memorizing solutions.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            At Athul's Maths Classroom, every lesson is designed to build confidence, strengthen problem-solving ability, and encourage logical thinking.
          </motion.p>
        </div>

        <LearningJourney />
        <PhilosophyCards />
        <ClassroomExperience />
        <SignatureQuote />
        <LearningPrinciples />
        <SectionDivider />
      </div>
    </section>
  );
}
