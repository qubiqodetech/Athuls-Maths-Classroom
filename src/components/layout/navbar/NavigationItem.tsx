"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { NavItem } from "./types";
import { cn } from "@/src/lib/utils";

interface NavigationItemProps {
  item: NavItem;
  scrolled: boolean;
}

export function NavigationItem({ item, scrolled }: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      className="relative group px-1 py-2 outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24] rounded-md"
    >
      <span
        className={cn(
          "text-sm font-medium transition-colors duration-300",
          isActive 
            ? "text-[#E31E24]" 
            : scrolled ? "text-gray-700 group-hover:text-[#E31E24]" : "text-gray-800 group-hover:text-[#E31E24]"
        )}
      >
        {item.label}
      </span>
      
      {/* Hover Underline */}
      <span
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E31E24] origin-left rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
      />

      {/* Active Underline */}
      {isActive && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E31E24] rounded-full"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
}
