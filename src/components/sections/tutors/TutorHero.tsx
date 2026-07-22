"use client";

import { motion } from "motion/react";

export function TutorHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-white overflow-hidden border-b border-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/80 via-transparent to-transparent opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-50/30 via-transparent to-transparent opacity-70 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase border border-blue-100">
              Our Mentors
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1B2A] leading-tight tracking-tight mb-6"
          >
            Meet Our Exceptional <br className="hidden sm:block" />
            <span className="text-[#E31E24]">Academic Tutors</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            A dedicated team of brilliant minds, ready to guide you through every academic challenge with personalized attention and expert knowledge.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
