"use client"

import { motion } from "motion/react"
import { ArrowRight, GraduationCap } from "lucide-react"
import { Fragment } from "react"

export function SuccessPath() {
  const path = [
    { label: "SSLC", desc: "Strong Foundation" },
    { label: "Plus One", desc: "Advanced Concepts" },
    { label: "Plus Two", desc: "Board Exam Mastery" },
    { label: "Higher Education", desc: "Future Success", icon: GraduationCap }
  ]

  return (
    <div className="mt-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">
          The Success Pathway
        </span>
        <h4 className="text-2xl font-bold text-navy-900">
          A Continuous Journey of Excellence
        </h4>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-4 md:gap-0 relative">
        
        {/* Desktop Connector Line */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200 -translate-y-1/2 -z-10" />

        {path.map((node, index) => {
          const isLast = index === path.length - 1
          const Icon = node.icon

          return (
            <Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center group bg-white md:bg-transparent px-4 py-2 md:p-0 rounded-xl md:rounded-none z-10 w-full md:w-auto"
              >
                <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-100 shadow-sm flex items-center justify-center mb-4 group-hover:border-primary-red group-hover:shadow-md transition-all duration-300">
                  {Icon ? (
                    <Icon className="w-6 h-6 text-primary-red" />
                  ) : (
                    <span className="text-lg font-bold text-navy-900 group-hover:text-primary-red transition-colors">
                      {index + 1}
                    </span>
                  )}
                </div>
                <h5 className="font-bold text-navy-900 text-base mb-1">{node.label}</h5>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {node.desc}
                </span>
              </motion.div>

              {!isLast && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                  className="hidden md:flex flex-1 justify-center items-center text-gray-300"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              )}
              
              {!isLast && (
                <div className="md:hidden h-8 w-[2px] bg-gray-200" />
              )}
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
