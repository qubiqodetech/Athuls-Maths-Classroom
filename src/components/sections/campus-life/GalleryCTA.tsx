"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export function GalleryCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center max-w-3xl mx-auto px-4 mt-16 pb-12"
    >
      <h3 className="text-2xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
        Every Picture Tells A Story.
      </h3>
      <p className="text-gray-600 mb-10 text-base md:text-lg">
        Explore moments that reflect the passion, dedication, and community at Athul's Maths Classroom.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/gallery" className="w-full sm:w-auto">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0D1B2A] text-white rounded-xl font-bold text-sm hover:bg-[#E31E24] transition-colors shadow-md group"
          >
            <ImageIcon className="w-4 h-4" />
            View Gallery
          </motion.div>
        </Link>
        
        <Link href="/events" className="w-full sm:w-auto">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0D1B2A] rounded-xl font-bold text-sm border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all shadow-sm group"
          >
            Explore Events
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
