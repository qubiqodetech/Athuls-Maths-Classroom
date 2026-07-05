"use client"

import { useState, useMemo } from "react"
import { motion } from "motion/react"
import { FAQCategories } from "./FAQCategories"
import { FAQSearch } from "./FAQSearch"
import { FAQCard } from "./FAQCard"
import { FAQAskCard } from "./FAQAskCard"
import { FAQ_CATEGORIES, FAQ_DATA } from "./constants"

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [openId, setOpenId] = useState<string | null>(null)

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section className="py-24 md:py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative subtle gradients */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E31E24]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#0D1B2A]/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#E31E24]/10 text-[#E31E24] text-sm font-semibold tracking-wider uppercase mb-4">
              QUESTIONS ANSWERED
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0D1B2A] tracking-tight mb-6">
              Everything You Need<br />Before Joining AMC.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions asked by students and parents. 
              Search below or browse by category.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FAQSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <FAQCategories 
            categories={FAQ_CATEGORIES} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4 min-h-[400px]">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <FAQCard 
                  faq={faq} 
                  isOpen={openId === faq.id} 
                  onToggle={() => handleToggle(faq.id)} 
                />
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No questions found matching your search.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("All")
                }}
                className="mt-4 text-[#E31E24] hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        <FAQAskCard />
      </div>
    </section>
  )
}
