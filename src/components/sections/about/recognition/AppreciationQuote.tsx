"use client"

import { motion } from "motion/react"
import { Heading } from "@/src/components/typography/heading"

export function AppreciationQuote() {
  return (
    <div className="mb-32 text-center max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Heading as="h3" size="l" className="text-navy-900 font-medium leading-tight md:leading-tight italic">
          "The trust of every student and parent is the achievement we value the most."
        </Heading>
      </motion.div>
    </div>
  )
}
