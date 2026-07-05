"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import type { FacultyMember } from "@/src/data/faculty"
import { DirectoryHeader } from "./DirectoryHeader"
import { FacultyCard } from "./FacultyCard"
import { FeaturedFaculty } from "./FeaturedFaculty"
import { FacultyStats } from "./FacultyStats"
import { FacultyQuoteBanner } from "./FacultyQuoteBanner"

interface FacultyDirectorySectionProps {
  allFaculty: FacultyMember[]
}

export function FacultyDirectorySection({ allFaculty }: FacultyDirectorySectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")

  const featuredMember = useMemo(() => allFaculty.find(m => m.featured), [allFaculty])
  
  const filteredFaculty = useMemo(() => {
    return allFaculty
      .filter(m => m.id !== featuredMember?.id) // exclude featured from the general list
      .filter(m => {
        // Handle filter
        if (activeFilter === "All") return true;
        if (activeFilter === "Mathematics") return true; // Assuming all teach math in this context, or refine as needed
        if (activeFilter === "Higher Secondary") return m.subjects.some(s => s.toLowerCase().includes("plus") || s.toLowerCase().includes("secondary"));
        if (activeFilter === "SSLC") return m.subjects.some(s => s.toLowerCase().includes("sslc") || s.toLowerCase().includes("foundation"));
        if (activeFilter === "Guest Faculty") return m.category === "guest";
        if (activeFilter === "Revision") return m.subjects.some(s => s.toLowerCase().includes("crash") || s.toLowerCase().includes("revision"));
        if (activeFilter === "Future Ready") return m.subjects.some(s => s.toLowerCase().includes("entrance"));
        return true;
      })
      .filter(m => {
        // Handle Search
        const q = searchQuery.toLowerCase();
        return (
          m.name.toLowerCase().includes(q) ||
          m.subjects.some(s => s.toLowerCase().includes(q)) ||
          m.yearsOfExperience.toLowerCase().includes(q)
        )
      })
  }, [allFaculty, activeFilter, searchQuery, featuredMember])

  return (
    <>
      <section className="py-24 bg-gray-50 relative overflow-hidden" id="faculty-directory">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0D1B2A]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E31E24]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3" />
        
        <div className="container mx-auto px-4 relative z-10">
          <DirectoryHeader 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          
          {/* Show Featured Faculty only when no search/filters are active, or make it always visible above grid. We'll show it if "All" is active and no search query */}
          <AnimatePresence mode="wait">
            {activeFilter === "All" && !searchQuery && featuredMember && (
              <FeaturedFaculty key="featured" member={featuredMember} />
            )}
          </AnimatePresence>

          <div className="max-w-7xl mx-auto">
            {filteredFaculty.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredFaculty.map((member, index) => (
                    <motion.div
                      layout
                      key={member.id}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <FacultyCard member={member} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32"
              >
                <p className="text-xl text-gray-500 mb-4">No educators found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchQuery("")
                    setActiveFilter("All")
                  }}
                  className="text-[#E31E24] font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <FacultyQuoteBanner />
      <FacultyStats />
    </>
  )
}
