"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "./constants"
import { cn } from "@/src/lib/utils"

export function FaqList({ searchQuery, activeCategory }: { searchQuery: string, activeCategory: string }) {
  const [openId, setOpenId] = useState<string | null>(null)

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-3xl mx-auto mb-24">
      {filteredFaqs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No questions found matching your search.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-[#0D1B2A] pr-4">{faq.question}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                    isOpen ? "bg-[#E31E24]/10 text-[#E31E24]" : "bg-gray-50 text-gray-400"
                  )}>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}
