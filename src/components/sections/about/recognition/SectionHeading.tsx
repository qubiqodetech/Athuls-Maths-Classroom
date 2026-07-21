"use client"

import { motion } from "motion/react"
import { Text } from "@/src/components/typography/text"
import { Heading } from "@/src/components/typography/heading"

export function SectionHeading() {
  return (
    <div className="flex flex-col items-center text-center space-y-6 max-w-[700px] mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Text variant="small" className="font-semibold tracking-wider uppercase text-gray-500 mb-4 block">
          OUR ACHIEVEMENTS
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Heading as="h2" size="l" className="text-navy-900 leading-tight">
          Recognition Earned <br className="hidden md:block" />
          Through <span className="text-primary-red">Dedication</span>,<br className="hidden md:block" />
          Not Promises.
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Text variant="large" className="text-gray-600">
          Every milestone reflects the confidence placed in us by students and parents. Our greatest achievement has always been helping learners discover confidence in their studies.
        </Text>
      </motion.div>
    </div>
  )
}
