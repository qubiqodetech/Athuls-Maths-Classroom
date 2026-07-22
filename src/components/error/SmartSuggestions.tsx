"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, Star, FileText, Sparkles, BookMarked } from "lucide-react"

const suggestions = [
  {
    title: "Popular Courses",
    description: "Explore our most sought-after academic programs.",
    href: "/courses",
    icon: Star,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Admissions Open",
    description: "Join the upcoming academic batch at AMC.",
    href: "/admissions",
    icon: Sparkles,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Latest Results",
    description: "View our students' outstanding academic achievements.",
    href: "/results",
    icon: FileText,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team for any queries.",
    href: "/contact",
    icon: BookMarked,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
]

export function SmartSuggestions() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-20 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-6"
      >
        Smart Suggestions
      </motion.p>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {suggestions.map((suggestion) => (
          <motion.div key={suggestion.title} variants={item}>
            <Link
              href={suggestion.href}
              className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-md transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${suggestion.bg} ${suggestion.color}`}>
                <suggestion.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#0D1B2A] mb-1 flex items-center justify-between">
                  {suggestion.title}
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#E31E24] group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {suggestion.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
