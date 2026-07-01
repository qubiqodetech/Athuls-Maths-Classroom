"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export function CourseCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden z-10 mx-4"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
      
      <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4">
        Not Sure Which Program Is Right For You?
      </h3>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
        Our team will help you choose the most suitable mathematics program based on your academic level and goals.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/courses" className="w-full sm:w-auto">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0D1B2A] text-white rounded-xl font-bold text-sm hover:bg-[#E31E24] transition-colors shadow-md group"
          >
            Explore All Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </Link>
        
        <Link href="/contact" className="w-full sm:w-auto">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#0D1B2A] rounded-xl font-bold text-sm border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
          >
            <Phone className="w-4 h-4" />
            Contact Us
          </motion.div>
        </Link>

        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-50 text-green-700 rounded-xl font-bold text-sm border border-green-200 hover:bg-green-100 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </motion.div>
        </a>
      </div>
    </motion.div>
  );
}
