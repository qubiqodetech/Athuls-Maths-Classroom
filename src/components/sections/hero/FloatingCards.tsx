"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star, TrendingUp, Users, BookOpen } from "lucide-react";

export function FloatingCards() {
  return (
    <>
      {/* Top Left Card - Success Rate */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
        className="absolute top-[10%] -left-[5%] lg:-left-[10%] z-20 hidden md:flex flex-col gap-3 bg-white/90 backdrop-blur-2xl p-5 rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60 min-w-[200px]"
      >
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Pass Rate</div>
              <div className="text-2xl font-black text-[#0D1B2A] tracking-tight">98.5%</div>
            </div>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "98.5%" }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-green-400 to-green-500" 
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Left Card - Students */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        className="absolute bottom-[15%] -left-[2%] lg:-left-[5%] z-20 hidden lg:flex items-center gap-4 bg-white/90 backdrop-blur-2xl p-4 pr-6 rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60"
      >
        <motion.div 
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative bg-gray-200">
                <Image src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Student" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#0D1B2A] flex items-center justify-center relative z-10">
              <span className="text-white text-xs font-bold">+2k</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#0D1B2A]">Active Students</span>
            <span className="text-xs text-gray-500 font-medium">Enrolled this year</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Top Right Card - Reviews */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
        className="absolute top-[20%] -right-[5%] lg:-right-[8%] z-20 hidden md:flex flex-col gap-2 bg-white/90 backdrop-blur-2xl p-4 rounded-[20px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60"
      >
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="flex items-center gap-1 mb-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <div className="text-sm font-bold text-[#0D1B2A]">4.9/5.0 Rating</div>
          <div className="text-xs text-gray-500 font-medium">From 500+ parents</div>
        </motion.div>
      </motion.div>

      {/* Bottom Right Card - Curriculum */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
        className="absolute bottom-[25%] -right-[3%] lg:-right-[6%] z-20 hidden lg:flex items-center gap-4 bg-white/90 backdrop-blur-2xl p-4 pr-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60"
      >
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-xl bg-[#E31E24]/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-[#E31E24]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#0D1B2A]">Kerala Syllabus</span>
            <span className="text-xs text-gray-500 font-medium">SSLC & Plus Two</span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
