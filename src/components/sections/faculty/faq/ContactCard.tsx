"use client"

import { motion } from "motion/react"
import { CONTACT_OPTIONS } from "./constants"

export function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-[#0D1B2A] rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#E31E24]/20 to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300">
            Reach out to our academic counselors. We are here to help.
          </p>
        </div>

        <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_OPTIONS.map((option) => {
            const Icon = option.icon
            return (
              <a
                key={option.id}
                href={option.link}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors group flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#E31E24]/20 group-hover:text-[#E31E24] text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-white font-medium mb-1">{option.label}</h4>
                <p className="text-gray-400 text-sm line-clamp-1">{option.value}</p>
              </a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
