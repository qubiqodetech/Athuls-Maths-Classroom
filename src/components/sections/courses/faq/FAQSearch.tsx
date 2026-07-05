"use client"

import { Search } from "lucide-react"

interface FAQSearchProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function FAQSearch({ searchQuery, setSearchQuery }: FAQSearchProps) {
  return (
    <div className="relative max-w-2xl mx-auto w-full mb-12">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-[#E31E24] focus:border-transparent transition-all duration-300 outline-none text-gray-900 placeholder:text-gray-400"
        placeholder="Search a question..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}
