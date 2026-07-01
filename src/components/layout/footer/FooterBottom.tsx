"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function FooterBottom() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="container mx-auto max-w-7xl px-4 lg:px-8 py-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-500 text-sm font-medium">
          &copy; {currentYear} Athul's Maths Classroom. All rights reserved.
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-white/5 text-center">
        <span className="text-gray-600 text-xs font-medium">
          Designed & Developed by{" "}
          <Link href="#" className="text-gray-400 hover:text-white transition-colors font-semibold">
            QubiQode
          </Link>
        </span>
      </div>
    </motion.div>
  );
}
