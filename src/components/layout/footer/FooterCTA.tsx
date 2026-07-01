"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FooterCTA() {
  return (
    <div className="w-full bg-[#0D1B2A] py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E31E24]/20 via-[#0D1B2A] to-[#0D1B2A] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          Ready to Begin Your <br className="hidden sm:block" />
          <span className="text-gray-400">Mathematics Journey?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-lg text-gray-300 leading-relaxed max-w-[700px] mx-auto mb-12"
        >
          Join Athul's Maths Classroom and learn with confidence through structured guidance, expert teaching, and a supportive learning environment.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/admissions" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] text-white rounded-xl font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 group border border-transparent"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
          
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-sm border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Contact Us
            </motion.div>
          </Link>

          <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
             <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-gray-300 rounded-xl font-bold text-sm hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
