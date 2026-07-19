"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { NavItem } from "./types";
import { cn } from "@/src/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface NavigationItemProps {
  item: NavItem;
  scrolled: boolean;
}

export function NavigationItem({ item, scrolled }: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href || (item.children?.some(child => pathname === child.href));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className="relative group px-3 py-1.5 outline-none rounded-full transition-colors flex items-center gap-1"
      >
        <span
          className={cn(
            "relative z-10 text-[14px] font-medium transition-colors duration-300",
            isActive 
              ? "text-gray-900" 
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          {item.label}
        </span>
        
        {item.children && (
          <ChevronDown 
            className={cn(
              "w-3.5 h-3.5 transition-transform duration-300",
              isOpen ? "rotate-180 text-gray-900" : "text-gray-400"
            )} 
          />
        )}
        
        {/* Active Dot indicator */}
        {isActive && (
          <motion.span
            layoutId="activeNavIndicator"
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0D1B2A] rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>

      {/* Dropdown Menu */}
      {item.children && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48"
            >
              <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col p-2 relative before:absolute before:inset-0 before:ring-1 before:ring-black/5 before:rounded-2xl before:pointer-events-none">
                {item.children.map((child, idx) => (
                  <Link
                    key={idx}
                    href={child.href}
                    className="px-4 py-2.5 text-[13px] font-medium text-gray-600 hover:text-[#0D1B2A] hover:bg-gray-50 rounded-xl transition-colors text-center"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
