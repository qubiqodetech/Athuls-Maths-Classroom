"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export function CourseCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#0D1B2A] rounded-[2rem] p-8 md:p-12 lg:p-16 max-w-6xl mx-auto shadow-2xl relative overflow-hidden z-10 border border-white/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E31E24]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 relative z-10">
        <div className="text-center lg:text-left flex-1">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Not sure which program<br className="hidden lg:block" /> is right for you?
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-base md:text-lg mb-8 leading-relaxed">
            Our academic counselors are here to help you choose the most suitable program based on your current level and future goals.
          </p>
          
          <div className="flex items-center justify-center lg:justify-start gap-4">
             <Link href="/courses" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-medium text-sm group">
               <span>Explore all programs</span>
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] text-white rounded-xl font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 group"
            >
              <Phone className="w-4 h-4" />
              Talk to an Advisor
            </motion.div>
          </Link>
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-sm border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </motion.div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
