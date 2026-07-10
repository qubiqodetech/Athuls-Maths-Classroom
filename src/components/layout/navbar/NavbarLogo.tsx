"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface NavbarLogoProps {
  scrolled: boolean;
}

export function NavbarLogo({ scrolled }: NavbarLogoProps) {
  return (
    <Link href="/" className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24] rounded-lg">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-40 sm:w-48 h-10 sm:h-12 flex items-center"
      >
        <Image 
          src="/assets/logos/amc-logo/AMC - Horizontal Logo.png" 
          alt="Athul's Maths Classroom" 
          fill
          className="object-contain object-left"
          priority
        />
      </motion.div>
    </Link>
  );
}
