"use client";

import { motion } from "motion/react";
import { Star, MapPin, Target } from "lucide-react";

export function HeroTrustIndicators() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-12 text-sm font-medium text-gray-600"
    >
      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
        <span>Trusted by Hundreds of Students</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-[#E31E24]" />
        <span>Karuvanchal, Kannur</span>
      </div>
      <div className="flex items-center gap-2">
        <Target className="w-4 h-4 text-[#16A34A]" />
        <span>Offline & Online Learning</span>
      </div>
    </motion.div>
  );
}
