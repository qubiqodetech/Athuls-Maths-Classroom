"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import { NAVIGATION_ITEMS } from "./constants";
import { cn } from "@/src/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setOpenAccordion(null); // Reset accordion on close
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    let mounted = true;
    if (mounted && isOpen) {
      onClose();
    }
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const toggleAccordion = (label: string) => {
    setOpenAccordion(prev => prev === label ? null : label);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#050816]/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 shadow-sm relative z-10">
              <div className="flex items-center">
                <div className="relative w-36 h-8 flex items-center">
                  <Image 
                    src="/assets/logos/amc-logo/AMC - Horizontal Logo.png" 
                    alt="Athul's Maths Classroom" 
                    fill
                    sizes="144px"
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100 outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B2A]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-8 py-8 no-scrollbar">
              <nav className="flex flex-col gap-6">
                {NAVIGATION_ITEMS.map((item) => {
                  const isMainActive = pathname === item.href || (item.children?.some(c => pathname === c.href));
                  const isAccordionOpen = openAccordion === item.label;

                  return (
                    <motion.div key={item.label} variants={itemVariants}>
                      {item.children ? (
                        <div className="flex flex-col group">
                          <button
                            onClick={() => toggleAccordion(item.label)}
                            className="flex items-center justify-between w-full text-left outline-none group"
                          >
                            <span className={cn(
                              "text-[28px] sm:text-[32px] font-bold tracking-tight transition-colors duration-300",
                              isMainActive ? "text-[#E31E24]" : "text-[#0D1B2A] group-hover:text-[#E31E24]"
                            )}>
                              {item.label}
                            </span>
                            <div className={cn(
                              "p-2 rounded-full transition-colors duration-300",
                              isAccordionOpen ? "bg-gray-100" : "group-hover:bg-gray-50"
                            )}>
                              <ChevronDown 
                                className={cn(
                                  "w-6 h-6 transition-transform duration-300",
                                  isAccordionOpen ? "rotate-180 text-[#0D1B2A]" : "text-gray-400"
                                )} 
                              />
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {isAccordionOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-5 pt-6 pb-2 pl-4 border-l-[3px] border-gray-100 ml-2">
                                  {item.children.map((child) => {
                                    const isChildActive = pathname === child.href;
                                    return (
                                      <Link
                                        key={child.label}
                                        href={child.href}
                                        className="group flex items-center gap-3 outline-none"
                                      >
                                        <span className={cn(
                                          "text-lg font-medium transition-colors duration-300",
                                          isChildActive ? "text-[#E31E24]" : "text-gray-600 group-hover:text-[#0D1B2A]"
                                        )}>
                                          {child.label}
                                        </span>
                                        {isChildActive && (
                                          <motion.div layoutId={`active-dot-${item.label}`} className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
                                        )}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-4 group outline-none"
                        >
                          <span className={cn(
                            "text-[28px] sm:text-[32px] font-bold tracking-tight transition-colors duration-300",
                            isMainActive ? "text-[#E31E24]" : "text-[#0D1B2A] group-hover:text-[#E31E24]"
                          )}>
                            {item.label}
                          </span>
                          <ArrowRight className={cn(
                            "w-6 h-6 transition-all duration-300",
                            isMainActive ? "text-[#E31E24] opacity-100 translate-x-0" : "text-gray-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#E31E24]"
                          )} />
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Footer Actions */}
            <motion.div variants={itemVariants} className="p-8 pb-10 bg-gray-50/80 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <Link
                  href="/admissions"
                  className="w-full py-4 bg-[#0D1B2A] text-white rounded-2xl font-bold text-center hover:bg-[#1a2c42] transition-all duration-300 shadow-[0_8px_30px_rgb(13,27,42,0.12)] hover:shadow-[0_8px_30px_rgb(13,27,42,0.2)] flex items-center justify-center gap-2 group"
                >
                  Admissions Open
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-[#16A34A] border border-[#16A34A]/20 rounded-2xl font-bold text-center hover:bg-[#16A34A]/5 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
