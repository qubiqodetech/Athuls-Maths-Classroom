"use client"

import { CourseCategory } from "@/src/data/courses"
import { cn } from "@/src/lib/utils"

interface CategoryFilterProps {
  activeCategory: CourseCategory | "all";
  onSelectCategory: (category: CourseCategory | "all") => void;
}

const categories: { label: string; value: CourseCategory | "all" }[] = [
  { label: "All Courses", value: "all" },
  { label: "SSLC", value: "sslc" },
  { label: "Higher Secondary", value: "higher-secondary" },
  { label: "Revision", value: "revision" },
  { label: "Foundation", value: "foundation" },
]

export function CategoryFilter({ activeCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onSelectCategory(category.value)}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
            activeCategory === category.value
              ? "bg-[#0D1B2A] text-white shadow-md"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-[#0D1B2A]"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
