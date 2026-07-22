"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export function AboutHeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-center gap-4 mb-8"
    >
      <Link href="#our-journey" className="w-full sm:w-auto">
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] text-white rounded-xl font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-900/10 group"
        >
          Explore Our Journey
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </Link>
      
      <Link href="/faculty" className="w-full sm:w-auto">
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0D1B2A] rounded-xl font-bold text-sm border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
        >
          <Users className="w-4 h-4" />
          Meet Our Faculty
        </motion.div>
      </Link>
    </motion.div>
  );
}
