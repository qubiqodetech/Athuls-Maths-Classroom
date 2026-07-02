"use client"

import { JOURNEY_STAGES } from "./constants"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { useMediaQuery } from "@/src/hooks/useMediaQuery"

export function InteractiveRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Map scroll progress to line drawing
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"])
  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"])

  if (isDesktop) {
    return (
      <div ref={containerRef} className="relative py-12">
        {/* Horizontal Connector Line (Background) */}
        <div className="absolute top-[88px] left-0 right-0 h-1 bg-gray-100 rounded-full" />
        
        {/* Horizontal Connector Line (Animated Progress) */}
        <motion.div 
          className="absolute top-[88px] left-0 h-1 bg-gradient-to-r from-red-200 via-primary-red to-red-500 rounded-full origin-left"
          style={{ width: lineWidth }}
        />

        <div className="grid grid-cols-6 gap-4 relative z-10">
          {JOURNEY_STAGES.map((stage, index) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center group relative"
              >
                {/* Node */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-6 group-hover:border-primary-red group-hover:shadow-lg transition-all duration-300 relative bg-clip-padding z-10 group-hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-full bg-primary-red/0 group-hover:bg-primary-red/5 transition-colors duration-300" />
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-primary-red transition-colors duration-300" />
                  
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-navy-900 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">
                    {stage.number}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-2 group-hover:transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="font-bold text-navy-900 text-sm mb-2">{stage.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[140px] mx-auto">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    )
  }

  // Mobile Vertical Timeline
  return (
    <div ref={containerRef} className="relative py-8 pl-8">
      {/* Vertical Connector Line (Background) */}
      <div className="absolute top-8 bottom-8 left-12 w-1 bg-gray-100 rounded-full" />
      
      {/* Vertical Connector Line (Animated Progress) */}
      <motion.div 
        className="absolute top-8 left-12 w-1 bg-gradient-to-b from-red-200 via-primary-red to-red-500 rounded-full origin-top"
        style={{ height: lineHeight }}
      />

      <div className="space-y-12 relative z-10">
        {JOURNEY_STAGES.map((stage, index) => {
          const Icon = stage.icon
          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 group"
            >
              {/* Node */}
              <div className="w-10 h-10 shrink-0 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center relative bg-clip-padding group-hover:border-primary-red transition-colors duration-300">
                <Icon className="w-4 h-4 text-gray-400 group-hover:text-primary-red transition-colors duration-300" />
                
                {/* Number Badge */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-navy-900 text-white rounded-full flex items-center justify-center text-[8px] font-bold border border-white">
                  {stage.number}
                </div>
              </div>

              {/* Content */}
              <div className="pt-1">
                <h4 className="font-bold text-navy-900 text-base mb-1">{stage.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
