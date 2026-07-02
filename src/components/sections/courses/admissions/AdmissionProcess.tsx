"use client"

import { ADMISSION_STEPS } from "./constants"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { useMediaQuery } from "@/src/hooks/useMediaQuery"

export function AdmissionProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"])
  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"])

  return (
    <div className="mt-24 pt-24 border-t border-gray-100" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-2xl font-bold text-navy-900 mb-4">How To Join AMC</h3>
        <p className="text-gray-600">A simple and transparent admission process.</p>
      </motion.div>

      {isDesktop ? (
        <div className="relative py-8 max-w-5xl mx-auto">
          {/* Horizontal Connector Line (Background) */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gray-100" />
          
          {/* Horizontal Connector Line (Animated Progress) */}
          <motion.div 
            className="absolute top-[52px] left-[10%] h-0.5 bg-gradient-to-r from-red-200 via-primary-red to-red-500 origin-left"
            style={{ width: lineWidth, maxWidth: '80%' }}
          />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {ADMISSION_STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-100 shadow-sm flex items-center justify-center mb-6 group-hover:border-primary-red group-hover:shadow-md group-hover:-translate-y-2 transition-all duration-300 relative">
                    <Icon className="w-6 h-6 text-navy-900 group-hover:text-primary-red transition-colors" />
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-navy-900 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-sm">
                      {step.number}
                    </div>
                  </div>
                  <h4 className="font-bold text-navy-900 text-base mb-2 group-hover:text-primary-red transition-colors">{step.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed px-2">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      ) : (
        <div className="relative py-8 pl-8 max-w-md mx-auto">
          {/* Vertical Connector Line (Background) */}
          <div className="absolute top-8 bottom-8 left-12 w-0.5 bg-gray-100" />
          
          {/* Vertical Connector Line (Animated Progress) */}
          <motion.div 
            className="absolute top-8 left-12 w-0.5 bg-gradient-to-b from-red-200 via-primary-red to-red-500 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 relative z-10">
            {ADMISSION_STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center relative group-hover:border-primary-red transition-colors duration-300">
                    <Icon className="w-5 h-5 text-navy-900 group-hover:text-primary-red transition-colors" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-navy-900 text-white rounded-full flex items-center justify-center text-[9px] font-bold border-2 border-white">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-navy-900 text-base mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
