"use client"

import { motion } from "motion/react"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"
import { ShieldCheck, Target, Award, Star, Trophy, Users } from "lucide-react"

export function RecognitionGallery() {
  const icons = [ShieldCheck, Award, Target, Trophy, Star, Users]
  
  return (
    <div className="mb-32">
      <div className="text-center mb-16">
        <Heading as="h3" size="s" className="text-navy-900 mb-4">
          Community & Partnerships
        </Heading>
        <Text className="text-gray-600 max-w-2xl mx-auto">
          Proudly associated with academic programs, educational partnerships, and community initiatives.
        </Text>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="aspect-[3/2] rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-gray-200 transition-all duration-300 cursor-default"
          >
            <Icon className="w-8 h-8 text-navy-900 mb-2 opacity-50" strokeWidth={1.5} />
            <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Partner</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
