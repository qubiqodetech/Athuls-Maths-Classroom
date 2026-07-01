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
    <div className="hidden md:flex items-center gap-3">
      <motion.a
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/919999999999" // Replace with real number later
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={cn(
          "p-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center",
          scrolled 
            ? "bg-green-50 text-green-600 hover:bg-green-100 border border-green-200" 
            : "bg-green-50 text-green-600 hover:bg-green-100 border border-green-200"
        )}
      >
        <MessageCircle className="w-5 h-5" />
      </motion.a>

      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/admissions"
          className={cn(
            "px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center justify-center",
            "bg-[#0D1B2A] text-white hover:bg-[#E31E24] hover:shadow-md"
          )}
        >
          Admissions Open
        </Link>
      </motion.div>
    </div>
  );
}
