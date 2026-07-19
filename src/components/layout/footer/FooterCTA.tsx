"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FooterCTA() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0D1B2A] to-[#050816] py-20 lg:py-28 border-b border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-[#E31E24]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
          <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Admissions Open</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-8"
        >
          Start learning with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Confidence & Clarity.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-[600px] mb-12"
        >
          Join Athul's Maths Classroom and experience a premium, concept-based approach to mastering mathematics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link href="/admissions" className="w-full sm:w-auto block">
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0D1B2A] rounded-2xl font-bold text-base hover:bg-gray-100 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] group"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>

          <Link href="/contact" className="w-full sm:w-auto block">
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-2xl font-bold text-base border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Contact Us
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
