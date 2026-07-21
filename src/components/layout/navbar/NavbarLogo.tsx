"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface NavbarLogoProps {
  scrolled: boolean;
}

export function NavbarLogo({ scrolled }: NavbarLogoProps) {
  return (
    <Link href="/" className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B2A] rounded-lg">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-36 sm:w-44 h-8 sm:h-9 flex items-center"
      >
        <Image 
          src="/assets/logos/amc-logo/AMC - Horizontal Logo.png" 
          alt="Athul's Maths Classroom" 
          fill
          sizes="(max-width: 640px) 144px, 176px"
          className="object-contain object-left"
          priority
        />
      </motion.div>
    </Link>
  );
}
