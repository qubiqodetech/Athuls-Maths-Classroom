"use client"

import { IMPORTANT_INFO } from "./constants"
import { motion } from "motion/react"

export function ImportantInfo() {
  return (
    <div className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-bold text-navy-900 mb-4">Important Information</h3>
        <p className="text-gray-600">Essential details you should know before joining.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {IMPORTANT_INFO.map((info, index) => {
          const Icon = info.icon
          return (
            <motion.div
              key={info.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-50 text-gray-500 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-900">{info.title}</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-14">
                {info.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
