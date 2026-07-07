"use client"

import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { motion } from "motion/react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-gray-50 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 inline-block"
        >
          {/* Decorative background blur behind 404 */}
          <div className="absolute inset-0 bg-[#E31E24]/5 blur-[40px] rounded-full" />
          
          <h1 className="text-8xl md:text-[150px] font-display font-bold text-[#0D1B2A] relative z-10 tracking-tighter leading-none mb-4">
            404
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B2A] mb-4 tracking-tight">
            This equation doesn't balance.
          </h2>
          
          <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto leading-relaxed">
            The page you are looking for has been moved, removed, renamed, or might never have existed in our syllabus.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 bg-[#E31E24] text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 group"
            >
              <Home className="w-5 h-5" />
              Back to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-8 py-4 bg-gray-50 text-[#0D1B2A] border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
