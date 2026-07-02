"use client"

import { motion } from "motion/react"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function RecommendationAssistant() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 bg-white border border-gray-100 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
        <div className="max-w-2xl space-y-4">
          <span className="inline-block px-3 py-1 bg-red-50 text-primary-red text-xs font-bold uppercase tracking-wider rounded-full">
            Featured Recommendation
          </span>
          <Heading as="h3" size="xl" className="text-navy-900">
            Not Sure Which Program Is Right For You?
          </Heading>
          <Text className="text-gray-600 max-w-xl">
            Answer a few simple questions or speak with our academic team, and we'll help you choose the best mathematics program for your goals.
          </Text>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link 
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary-red px-8 text-sm font-medium text-white shadow-lg shadow-primary-red/20 transition-all hover:bg-primary-red/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Talk To An Advisor
          </Link>
          <Link 
            href="https://wa.me/yourwhatsappnumber" // Placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-navy-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="mr-2 w-4 h-4 text-[#25D366]" />
            WhatsApp
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
