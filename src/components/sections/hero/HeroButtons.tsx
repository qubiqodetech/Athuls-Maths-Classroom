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
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto"
    >
      <Link href="/admissions" className="w-full sm:w-auto">
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#0D1B2A] text-white rounded-2xl font-semibold text-lg hover:bg-[#1a2c42] transition-all shadow-[0_8px_30px_rgb(13,27,42,0.12)] hover:shadow-[0_8px_30px_rgb(13,27,42,0.2)] group"
        >
          Enroll Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </Link>
      
      <Link href="/courses" className="w-full sm:w-auto">
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0D1B2A] rounded-2xl font-semibold text-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm group"
        >
          Explore Courses
        </motion.div>
      </Link>
    </motion.div>
  );
}
