"use client"

import { motion } from "motion/react"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function RecommendationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-red-50 to-white border border-red-100 p-8 rounded-3xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="relative z-10 max-w-xl space-y-4">
        <Heading as="h3" size="xl" className="text-navy-900">
          Ready To Join This Program?
        </Heading>
        <Text className="text-gray-600">
          Speak with our academic team to find the perfect batch, schedule, and start your journey to academic excellence.
        </Text>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
          <Link 
            href="/admissions"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary-red px-8 text-sm font-medium text-white shadow-lg shadow-primary-red/20 transition-all hover:bg-primary-red/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Apply Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link 
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-navy-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="mr-2 w-4 h-4" />
            Talk To Us
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
