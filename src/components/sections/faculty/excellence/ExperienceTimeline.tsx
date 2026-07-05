"use client"

import { motion } from "motion/react"
import { TIMELINE_EVENTS } from "./constants"

export function ExperienceTimeline() {
  return (
    <div className="py-24 bg-[#0D1B2A] rounded-[3rem] px-8 md:px-16 lg:px-24 text-white relative overflow-hidden shadow-2xl">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#E31E24]/20 to-transparent rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">The Journey of Excellence</h3>
          <p className="text-gray-400 text-lg">A commitment to academic growth and student success.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2" />
          <motion.div 
            className="absolute left-[27px] md:left-1/2 top-0 w-0.5 bg-[#E31E24] md:-translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={event.id} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-[#0D1B2A] border-2 border-[#E31E24] -translate-x-1/2 mt-1.5 md:mt-0 z-10 group-hover:bg-[#E31E24] transition-colors duration-300 shadow-[0_0_15px_rgba(227,30,36,0.5)]" />
                  
                  {/* Content Container (Left or Right) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className={`w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:bg-white/10 transition-colors duration-300">
                      <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
