"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function FooterSignature() {
  return (
    <div className="w-full bg-[#03050D] py-6 border-t border-white/5 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="w-1/2 h-full bg-[#E31E24]/5 blur-[100px] rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <Link 
          href="#" 
          className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 shadow-xl"
        >
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-[#E31E24]/70 group-hover:text-[#E31E24] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>
          
          <span className="text-gray-500 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium flex flex-col sm:flex-row items-center sm:gap-2">
            <span>Designed & Developed by</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white font-bold group-hover:from-white group-hover:to-gray-200 transition-all mt-0.5 sm:mt-0 tracking-[0.25em]">
              QubiQode
            </span>
          </span>

          <motion.div
            animate={{ rotate: -180 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-[#E31E24]/70 group-hover:text-[#E31E24] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
