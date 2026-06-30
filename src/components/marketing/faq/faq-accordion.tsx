"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/src/lib/utils"

export interface FAQItem {
  question: string
  answer: React.ReactNode | string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <div className={cn("w-full max-w-3xl mx-auto space-y-4", className)}>
      {items.map((item, index) => (
        <FAQAccordionItem key={index} item={item} />
      ))}
    </div>
  )
}

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="border border-border/50 rounded-xl overflow-hidden bg-card hover:border-border transition-colors">
      <button
        className="flex w-full items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-foreground pr-8">{item.question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300",
            isOpen && "transform rotate-180 text-primary"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-muted-foreground prose prose-sm max-w-none">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
