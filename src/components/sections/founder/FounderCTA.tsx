"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export function FounderCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      className="mt-12 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center md:text-left">
          Experience Learning the AMC Way.
        </h3>
        <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
          Join a community dedicated to your academic success.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
        <Link href="/faculty" className="w-full sm:w-auto">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 text-white rounded-xl font-bold text-sm border border-white/10 hover:bg-white/10 transition-all shadow-sm"
          >
            <Users className="w-4 h-4" />
            Meet Our Faculty
          </motion.button>
        </Link>
        <Link href="/courses" className="w-full sm:w-auto">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E31E24] text-white rounded-xl font-bold text-sm hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(227,30,36,0.3)] hover:shadow-[0_0_25px_rgba(227,30,36,0.5)] group"
          >
            Explore Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
