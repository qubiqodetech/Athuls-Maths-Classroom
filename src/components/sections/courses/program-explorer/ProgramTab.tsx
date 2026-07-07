"use client"

import { cn } from "@/src/lib/utils"
import { LucideIcon } from "lucide-react"
import { motion } from "motion/react"

interface ProgramTabProps {
  id: string
  name: string
  targetClass: string
  icon: LucideIcon
  isActive: boolean
  onClick: () => void
}

export function ProgramTab({
  id,
  name,
  targetClass,
  icon: Icon,
  isActive,
  onClick
}: ProgramTabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full text-left px-5 py-4 rounded-xl transition-all duration-300",
        "flex items-center space-x-4 group overflow-hidden",
        isActive 
          ? "bg-white shadow-sm ring-1 ring-gray-200" 
          : "hover:bg-gray-50 text-gray-600"
      )}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
    >
      {/* Active Indicator Glow */}
      {isActive && (
        <motion.div
          layoutId="activeTabGlow"
          className="absolute inset-0 bg-gradient-to-r from-primary-red/5 to-transparent opacity-50"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}

      {/* Active Indicator Line */}
      {isActive && (
        <motion.div
          layoutId="activeTabLine"
          className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary-red rounded-r-full"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}

      <div className={cn(
        "p-2 rounded-lg transition-colors duration-300 relative z-10",
        isActive ? "bg-red-50 text-primary-red" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-700"
      )}>
        <Icon className="w-5 h-5" />
      </div>

      <div className="flex-1 relative z-10">
        <h3 className={cn(
          "font-semibold text-sm transition-colors duration-300",
          isActive ? "text-navy-900" : "text-gray-700 group-hover:text-navy-900"
        )}>
          {name}
        </h3>
        <p className={cn(
          "text-xs mt-0.5 transition-colors duration-300",
          isActive ? "text-gray-600" : "text-gray-500"
        )}>
          {targetClass}
        </p>
      </div>
    </button>
  )
}
