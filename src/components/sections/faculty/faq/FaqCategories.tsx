"use client"

import { cn } from "@/src/lib/utils"
import { FAQ_CATEGORIES } from "./constants"

export function FaqCategories({
  activeCategory,
  setActiveCategory
}: {
  activeCategory: string;
  setActiveCategory: (c: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
      {FAQ_CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0D1B2A]",
            activeCategory === category
              ? "bg-[#0D1B2A] text-white border-[#0D1B2A]"
              : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
