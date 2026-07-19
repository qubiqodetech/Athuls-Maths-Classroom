"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface NavbarCTAProps {
  scrolled: boolean;
}

export function NavbarCTA({ scrolled }: NavbarCTAProps) {
  return (
    <div className="hidden md:flex items-center gap-2">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href="/admissions"
          className={cn(
            "px-6 py-2.5 rounded-full font-medium text-[13px] transition-all flex items-center justify-center tracking-wide",
            "bg-[#0D1B2A] text-white hover:bg-[#1a2c42]"
          )}
        >
          Admissions Open
        </Link>
      </motion.div>
    </div>
  );
}
