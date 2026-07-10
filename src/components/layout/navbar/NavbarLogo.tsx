"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BrandLogo } from "@/src/components/icons/brand-logo";

interface NavbarLogoProps {
  scrolled: boolean;
}

export function NavbarLogo({ scrolled }: NavbarLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24] rounded-lg">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2"
      >
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100/50">
          <BrandLogo className="w-6 h-6" />
        </div>
        <div className="flex flex-col justify-center hidden sm:flex">
          <span className={`font-bold text-lg leading-tight transition-colors duration-300 ${scrolled ? "text-[#0D1B2A]" : "text-gray-900"}`}>
            Athul's Maths
          </span>
          <span className={`text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${scrolled ? "text-[#E31E24]" : "text-[#E31E24]"}`}>
            Classroom
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
