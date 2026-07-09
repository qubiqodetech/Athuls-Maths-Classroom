"use client"

import { motion } from "motion/react"
import { Printer, Share2, Download } from "lucide-react"

interface LegalHeroProps {
  title: string;
  description: string;
  lastUpdated: string;
}

export function LegalHero({ title, description, lastUpdated }: LegalHeroProps) {
  const handlePrint = () => {
    window.print();
  }

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      // Optional: Add a toast notification here
    }
  }

  return (
    <div className="pt-24 pb-12 border-b border-gray-100 mb-12 relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-gray-50 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold uppercase tracking-wider mb-6">
          Legal
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0D1B2A] mb-6 tracking-tight">
          {title}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-gray-100">
          <div className="text-sm font-medium text-gray-400">
            Last Updated: <span className="text-[#0D1B2A]">{lastUpdated}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-[#0D1B2A] rounded-lg text-sm font-medium transition-colors"
              aria-label="Print Document"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-[#0D1B2A] rounded-lg text-sm font-medium transition-colors"
              aria-label="Copy Link"
            >
              <Share2 className="w-4 h-4" />
              <span>Copy Link</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-[#0D1B2A] rounded-lg text-sm font-medium transition-colors"
              aria-label="Download PDF"
            >
              <Download className="w-4 h-4" />
              <span>PDF</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
