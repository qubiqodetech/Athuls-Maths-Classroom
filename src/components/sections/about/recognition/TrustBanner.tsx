"use client"

import { motion } from "motion/react"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"

export function TrustBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative rounded-3xl overflow-hidden bg-navy-900 text-white p-12 md:p-20 text-center mb-32"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-red rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 flex flex-col items-center">
        <Heading as="h2" size="l" className="text-white leading-tight">
          Our Greatest Recognition Is The Success Of Our Students.
        </Heading>
        
        <Text variant="large" className="text-gray-300 max-w-2xl mx-auto">
          Every recommendation, every returning student, and every parent who places their trust in AMC inspires us to continue improving.
        </Text>
      </div>
    </motion.div>
  )
}
