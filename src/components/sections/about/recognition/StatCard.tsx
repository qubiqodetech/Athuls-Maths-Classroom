"use client"

import { motion } from "motion/react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { StatItem } from "./types"
import { Text } from "@/src/components/typography/text"
import { Heading } from "@/src/components/typography/heading"

interface StatCardProps {
  stat: StatItem
  index: number
}

export function StatCard({ stat, index }: StatCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Decorative gradient blur on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div className="flex items-baseline space-x-1">
          {stat.prefix && (
            <span className="text-4xl font-bold text-navy-900">{stat.prefix}</span>
          )}
          <Heading as="h3" size="xl" className="text-navy-900 font-bold tabular-nums">
            {inView ? (
              <CountUp 
                end={stat.value} 
                duration={2.5} 
                separator="," 
                useEasing={true}
              />
            ) : (
              "0"
            )}
          </Heading>
          {stat.suffix && (
            <span className="text-4xl font-bold text-navy-900">{stat.suffix}</span>
          )}
        </div>
        
        <div>
          <Heading as="h4" size="xs" className="text-navy-900 font-semibold mb-2">
            {stat.label}
          </Heading>
          {stat.description && (
            <Text variant="small" className="text-gray-500">
              {stat.description}
            </Text>
          )}
        </div>
      </div>
    </motion.div>
  )
}
