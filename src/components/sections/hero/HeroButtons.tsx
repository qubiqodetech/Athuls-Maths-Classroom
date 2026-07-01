"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className="flex flex-col sm:flex-row items-center gap-4 mb-12"
    >
      <Link href="/admissions" className="w-full sm:w-auto">
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20 group"
        >
          Enroll Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </Link>
      
      <Link href="/courses" className="w-full sm:w-auto">
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0D1B2A] rounded-xl font-bold text-lg border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
        >
          Explore Courses
        </motion.div>
      </Link>

      <Link href="/about" className="w-full sm:w-auto sm:ml-2">
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 text-gray-600 hover:text-[#E31E24] font-medium transition-colors"
        >
          <PlayCircle className="w-5 h-5" />
          <span>Watch Our Journey</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
