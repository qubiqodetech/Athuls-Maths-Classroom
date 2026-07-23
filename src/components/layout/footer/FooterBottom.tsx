"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SocialLinks } from "./SocialLinks";

export function FooterBottom() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-white/5 py-8 mt-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-center w-full gap-6">
          <span className="text-gray-400 text-sm font-medium tracking-wide shrink-0">Connect with us</span>
          
          <div className="hidden sm:block flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden mx-4">
            <motion.div 
              animate={{ x: ["-100%", "200%"] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-[#E31E24]/80 to-transparent blur-[1px]"
            />
          </div>

          <div className="shrink-0">
            <SocialLinks />
          </div>
        </div>
        
        <div className="h-px w-full bg-white/5" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-400 text-sm font-medium">
              &copy; {currentYear} Athul's Maths Classroom. All rights reserved.
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm font-medium transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
