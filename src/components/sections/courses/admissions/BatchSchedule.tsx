"use client"

import { BATCH_SCHEDULES } from "./constants"
import { motion } from "motion/react"
import { Clock, Calendar, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BatchSchedule() {
  return (
    <div className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-bold text-navy-900 mb-4">Available Batches</h3>
        <p className="text-gray-600">Choose a timing that works best for your schedule.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BATCH_SCHEDULES.map((batch, index) => {
          const Icon = batch.icon
          return (
            <motion.div
              key={batch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon className="w-24 h-24" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-primary-red flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-navy-900">{batch.title}</h4>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-1 rounded-md">
                    {batch.seatsInfo}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Users className="w-4 h-4 text-gray-400 mt-1 mr-3 shrink-0" />
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase">Ideal For</span>
                      <span className="text-sm text-navy-900">{batch.suitableFor}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 text-gray-400 mt-1 mr-3 shrink-0" />
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase">Duration</span>
                      <span className="text-sm text-navy-900">{batch.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="w-4 h-4 text-gray-400 mt-1 mr-3 shrink-0" />
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase">Days</span>
                      <span className="text-sm text-navy-900">{batch.days}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full h-10 rounded-xl bg-gray-50 text-navy-900 font-medium text-sm hover:bg-primary-red hover:text-white transition-colors duration-300 group/btn"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
