"use client"

import { motion } from "motion/react"
import { BookOpen, PenTool, MessageCircle, FileEdit, TrendingUp, RefreshCw } from "lucide-react"

export function WeeklyCycle() {
  const steps = [
    { title: "Learn", icon: BookOpen },
    { title: "Practice", icon: PenTool },
    { title: "Ask Doubts", icon: MessageCircle },
    { title: "Review", icon: FileEdit },
    { title: "Improve", icon: TrendingUp },
    { title: "Repeat", icon: RefreshCw },
  ]

  return (
    <div className="relative py-12 flex justify-center items-center">
      {/* Circle background */}
      <div className="absolute w-64 h-64 border-[1.5px] border-dashed border-gray-200 rounded-full animate-[spin_40s_linear_infinite]" />
      
      {/* Central label */}
      <div className="absolute w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 z-10">
        <div className="text-center">
          <span className="block text-xs font-bold text-primary-red uppercase tracking-wider">Weekly</span>
          <span className="block text-sm font-semibold text-navy-900">Cycle</span>
        </div>
      </div>

      {/* Cycle nodes */}
      <div className="relative w-[320px] h-[320px]">
        {steps.map((step, index) => {
          const angle = (index * 360) / steps.length - 90
          const radius = 128 // Half of 256
          const x = Math.cos((angle * Math.PI) / 180) * radius
          const y = Math.sin((angle * Math.PI) / 180) * radius

          const Icon = step.icon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="absolute w-16 h-16 -ml-8 -mt-8 flex flex-col items-center justify-center group"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-primary-red group-hover:border-primary-red/30 transition-colors z-20">
                <Icon className="w-5 h-5" />
              </div>
              <span className="absolute -bottom-6 text-xs font-medium text-gray-600 whitespace-nowrap bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm z-30">
                {step.title}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
