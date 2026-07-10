"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle } from "lucide-react";
import { NAVIGATION_ITEMS } from "./constants";
import { BrandLogo } from "@/src/components/icons/brand-logo";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // easeOutQuint
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/60 backdrop-blur-md z-50 lg:hidden"
            onClick={onClose}
          />

          {/* Full Screen Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl z-50 flex flex-col lg:hidden border-l border-gray-100"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x > 100 || velocity.x > 500) {
                onClose();
              }
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100/50">
                  <BrandLogo className="w-5 h-5" />
                </div>
                <span className="font-bold text-[#0D1B2A]">Menu</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100 outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto py-6 px-6">
              <nav className="flex flex-col gap-6">
                {NAVIGATION_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div key={item.label} variants={itemVariants}>
                      <Link
                        href={item.href}
                        className={`text-2xl font-bold transition-colors block outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24] rounded-md ${
                          isActive ? "text-[#E31E24]" : "text-[#0D1B2A] hover:text-[#E31E24]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Footer */}
            <motion.div variants={itemVariants} className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex flex-col gap-4">
                <Link
                  href="/admissions"
                  className="w-full py-4 bg-[#0D1B2A] text-white rounded-xl font-bold text-center hover:bg-[#E31E24] transition-colors shadow-md"
                >
                  Admissions Open
                </Link>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-green-600 border border-green-200 rounded-xl font-bold text-center hover:bg-green-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
