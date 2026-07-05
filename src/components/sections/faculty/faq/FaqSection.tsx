"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { FaqSearch } from "./FaqSearch"
import { FaqCategories } from "./FaqCategories"
import { FaqList } from "./FaqList"
import { ContactCard } from "./ContactCard"

export function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden" id="faq">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0D1B2A] tracking-tight mb-4">
              Commonly Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to know about our faculty and teaching methodologies.
            </p>
          </motion.div>
        </div>

        <FaqSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <FaqCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        
        <FaqList searchQuery={searchQuery} activeCategory={activeCategory} />
        
        <ContactCard />
      </div>
    </section>
  )
}
