"use client"

import { motion } from "motion/react"
import { BookOpen } from "lucide-react"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"
import { HeroButtons } from "./HeroButtons"
import { TrustChips } from "./TrustChips"

export function HeroContent() {
  return (
    <div className="flex flex-col items-start space-y-8 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-full px-4 py-2 shadow-sm"
      >
        <BookOpen className="w-4 h-4 text-primary-red" />
        <span className="text-xs font-semibold tracking-widest text-navy-900 uppercase">
          academic programs
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Heading as="h1" size="xl" className="text-navy-900 leading-tight">
          Choose The Right <br className="hidden md:block" />
          academic program <br className="hidden md:block" />
          For <span className="text-primary-red relative inline-block">
            Your Journey.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-red/20" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Text variant="large" className="text-gray-600 max-w-xl leading-relaxed">
          Whether you're preparing for SSLC, Plus One, or Plus Two, every program at Athul's Maths Classroom is carefully designed to strengthen concepts, improve confidence, and prepare students for academic success.
        </Text>
      </motion.div>

      <div className="w-full space-y-8 pt-4">
        <HeroButtons />
        <TrustChips />
      </div>
    </div>
  )
}
