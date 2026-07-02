"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FutureVisionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-4"
    >
      <div className="relative bg-[#0D1B2A] rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden shadow-2xl shadow-[#0D1B2A]/20 border border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-80" />
        
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The Journey Continues.
          </h3>
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every new student adds another chapter to the story of Athul's Maths Classroom.
          </p>
          
          <Link 
            href="#admissions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E31E24] hover:bg-red-700 text-white font-bold rounded-full transition-colors group shadow-lg shadow-red-500/25"
          >
            Join Our Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
