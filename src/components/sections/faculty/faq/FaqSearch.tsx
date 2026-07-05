"use client"

import { Search } from "lucide-react"

export function FaqSearch({ 
  searchQuery, 
  setSearchQuery 
}: { 
  searchQuery: string; 
  setSearchQuery: (q: string) => void;
}) {
  return (
    <div className="relative max-w-xl mx-auto mb-12">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search Faculty Questions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24]/50 transition-all text-gray-700 placeholder:text-gray-400 shadow-sm"
      />
    </div>
  )
}
