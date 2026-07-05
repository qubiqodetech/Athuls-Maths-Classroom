"use client"

import { Plus } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/src/lib/utils"
import type { FAQItem } from "./types"

interface FAQCardProps {
  faq: FAQItem
  isOpen: boolean
  onToggle: () => void
}

export function FAQCard({ faq, isOpen, onToggle }: FAQCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group bg-white rounded-2xl transition-all duration-300 overflow-hidden border",
        isOpen ? "border-[#0D1B2A]/20 shadow-md" : "border-gray-100 shadow-sm hover:border-gray-300 hover:shadow-md"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-6 md:px-8 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E31E24]"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between gap-6">
          <h3 className={cn(
            "text-lg font-medium tracking-tight transition-colors duration-300",
            isOpen ? "text-[#E31E24]" : "text-[#0D1B2A] group-hover:text-[#E31E24]"
          )}>
            {faq.question}
          </h3>
          <div className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
            isOpen ? "bg-[#0D1B2A] text-white rotate-45" : "bg-gray-50 text-gray-400 group-hover:bg-[#E31E24] group-hover:text-white"
          )}>
            <Plus className="w-5 h-5 transition-transform duration-300" />
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
              <div className="w-full h-px bg-gray-100 mb-6" />
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
