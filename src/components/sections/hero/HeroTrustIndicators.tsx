"use client";

import { motion } from "motion/react";
import { Star, MapPin, Award } from "lucide-react";

export function HeroTrustIndicators() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4 mb-10 sm:mb-16 text-xs sm:text-sm font-medium text-gray-600"
    >
      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
        <span>Trusted by 500+ Students</span>
      </div>
      <div className="flex items-center gap-2 hidden sm:flex">
        <MapPin className="w-4 h-4 text-gray-400" />
        <span>Karuvanchal, Kannur</span>
      </div>
      <div className="flex items-center gap-2">
        <Award className="w-4 h-4 text-gray-400" />
        <span>10+ Years of Excellence</span>
      </div>
    </motion.div>
  );
}
