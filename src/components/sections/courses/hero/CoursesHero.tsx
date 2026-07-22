"use client"

import { motion } from "motion/react"
import { Container } from "@/src/components/layout/container"

export function CoursesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-[#0D1B2A] overflow-hidden border-b border-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="courses-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#courses-hero-grid)" />
      </svg>

      <Container className="relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase border border-white/20">
              Academic Programs
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Discover the Perfect <br className="hidden sm:block" />
            <span className="text-[#E31E24]">Course for You</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Explore our meticulously designed programs tailored for SSLC and Higher Secondary students to ensure deep conceptual understanding and outstanding results.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}

