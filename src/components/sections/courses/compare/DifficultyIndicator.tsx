"use client"

import { cn } from "@/src/lib/utils"

interface DifficultyIndicatorProps {
  level: 1 | 2 | 3
}

export function DifficultyIndicator({ level }: DifficultyIndicatorProps) {
  const labels = ["Beginner", "Intermediate", "Advanced"]
  const activeLabel = labels[level - 1]

  return (
    <div className="flex items-center space-x-3">
      <div className="flex space-x-1">
        {[1, 2, 3].map((bar) => (
          <div
            key={bar}
            className={cn(
              "w-1.5 h-3.5 rounded-full transition-colors duration-300",
              bar <= level 
                ? (level === 1 ? "bg-green-500" : level === 2 ? "bg-amber-500" : "bg-primary-red")
                : "bg-gray-200"
            )}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
        {activeLabel}
      </span>
    </div>
  )
}
