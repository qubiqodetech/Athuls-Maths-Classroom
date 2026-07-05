"use client"

import { motion } from "motion/react"
import { LucideIcon } from "lucide-react"

interface MentorshipCardProps {
  title: string
  description: string
  icon: LucideIcon
  index: number
}

export function MentorshipCard({ title, description, icon: Icon, index }: MentorshipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#E31E24]/10 transition-colors duration-300">
        <Icon className="w-6 h-6 text-[#0D1B2A] group-hover:text-[#E31E24] transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}
