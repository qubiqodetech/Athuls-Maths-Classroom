"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function TestimonialsCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center max-w-3xl mx-auto px-4 mt-16 pb-12"
    >
      <h3 className="text-2xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
        Become Part of the AMC Family.
      </h3>
      <p className="text-gray-600 mb-10 text-base md:text-lg">
        Join hundreds of students who have transformed their learning experience through personalized guidance and expert teaching.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/admissions" className="w-full sm:w-auto">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] text-white rounded-xl font-bold text-sm hover:bg-red-700 transition-colors shadow-md group"
          >
            Apply for Admission
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </Link>
        
        <Link href="/contact" className="w-full sm:w-auto">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0D1B2A] rounded-xl font-bold text-sm border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Us
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
