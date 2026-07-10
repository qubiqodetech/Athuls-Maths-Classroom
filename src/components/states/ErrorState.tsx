"use client"

import { motion } from "motion/react"
import { AlertCircle, RefreshCw } from "lucide-react"
import { cn } from "@/src/lib/utils"

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({ 
  title = "Something went wrong", 
  message = "We're having trouble loading this content right now. Please try again.", 
  onRetry,
  className 
}: ErrorStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "flex flex-col items-center justify-center text-center p-12 bg-red-50/50 rounded-3xl border border-red-100 max-w-2xl mx-auto",
        className
      )}
    >
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-500 mb-6">
        <AlertCircle className="w-8 h-8" />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm md:text-base">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1F2937] hover:bg-gray-50 border border-gray-200 rounded-full font-medium transition-all hover:shadow-sm active:scale-95"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try again</span>
        </button>
      )}
    </motion.div>
  )
}
