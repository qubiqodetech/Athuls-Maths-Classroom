"use client"

import { motion } from "motion/react"
import { Search } from "lucide-react"
import { FACULTY_FILTERS } from "./constants"
import { cn } from "@/src/lib/utils"

interface DirectoryHeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export function DirectoryHeader({ searchQuery, setSearchQuery, activeFilter, setActiveFilter }: DirectoryHeaderProps) {
  return (
    <div className="mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-gray-100 text-gray-600 text-sm font-bold tracking-wider uppercase mb-6">
          OUR EDUCATORS
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0D1B2A] tracking-tight mb-6">
          Passionate Educators.<br />
          <span className="text-[#E31E24]">Dedicated Mentors.</span>
        </h2>
        <p className="text-lg text-gray-600">
          Our faculty combines subject expertise with patient guidance, ensuring every student receives the support needed to succeed.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Search */}
        <div className="relative max-w-2xl mx-auto w-full mb-8">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-[#E31E24] focus:border-transparent transition-all duration-300 outline-none text-gray-900 placeholder:text-gray-400"
            placeholder="Search by name, subject, or experience..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {FACULTY_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D1B2A]",
                activeFilter === filter
                  ? "bg-[#0D1B2A] text-white border-[#0D1B2A]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
