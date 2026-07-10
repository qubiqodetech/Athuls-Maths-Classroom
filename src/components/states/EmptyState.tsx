"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"
import { cn } from "@/src/lib/utils"

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto",
        className
      )}
    >
      {icon && (
        <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-6">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl md:text-2xl font-semibold text-[#0D1B2A] mb-3">
        {title}
      </h3>
      
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        {description}
      </p>

      {action && (
        <div className="flex items-center justify-center">
          {action}
        </div>
      )}
    </motion.div>
  )
}
