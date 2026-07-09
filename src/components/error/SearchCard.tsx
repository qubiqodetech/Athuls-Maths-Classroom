"use client"

import { Search } from "lucide-react"
import { motion } from "motion/react"

export function SearchCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-2xl mx-auto mt-8 mb-16 px-4 relative z-10"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex items-center bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-2">
          <div className="pl-4 pr-2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search the website..."
            className="flex-1 bg-transparent border-none focus:outline-none text-gray-700 py-3 text-lg placeholder:text-gray-400"
          />
          <button className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors">
            Search
          </button>
        </div>
      </div>
    </motion.div>
  )
}
