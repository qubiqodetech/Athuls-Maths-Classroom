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
      className="mt-16 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#0D1B2A] mb-2 text-center md:text-left">
          Experience Learning the AMC Way.
        </h3>
        <p className="text-gray-500 text-sm md:text-base text-center md:text-left">
          Join a community dedicated to your academic success.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <Link href="/teachers" className="w-full sm:w-auto">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#0D1B2A] rounded-xl font-bold text-sm border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
          >
            <Users className="w-4 h-4" />
            Meet Our Faculty
          </motion.button>
        </Link>
        <Link href="/courses" className="w-full sm:w-auto">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E31E24] text-white rounded-xl font-bold text-sm hover:bg-red-700 transition-colors shadow-md group"
          >
            Explore Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
