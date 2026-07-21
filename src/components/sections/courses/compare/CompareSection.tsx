"use client"

import { Section } from "@/src/components/layout/section"
import { Container } from "@/src/components/layout/container"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"
import { motion } from "motion/react"
import { COMPARISON_PROGRAMS } from "./constants"
import { ComparisonCard } from "./ComparisonCard"
import { RecommendationAssistant } from "./RecommendationAssistant"
import { SuccessPath } from "./SuccessPath"
import { DecisionBanner } from "./DecisionBanner"

export function CompareSection() {
  return (
    <Section id="compare" className="bg-gray-50/50 relative overflow-hidden py-24 sm:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px] opacity-60" />
        </div>
      </div>

      <Container className="relative z-10 max-w-[1320px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest text-primary-red uppercase mb-4 block">
              Compare Programs
            </span>
            <Heading as="h2" size="xl" className="text-navy-900 leading-tight mb-6">
              Choose The Program <br className="hidden sm:block" />
              That Fits <span className="text-primary-red">Your Academic Goals.</span>
            </Heading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Text variant="large" className="text-gray-600 max-w-2xl leading-relaxed mx-auto">
              Every academic program is carefully designed for a specific academic stage.
              Compare the programs below to identify the one that best matches your learning journey.
            </Text>
          </motion.div>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPARISON_PROGRAMS.map((program, index) => (
            <ComparisonCard 
              key={program.id} 
              program={program} 
              index={index} 
            />
          ))}
        </div>

        {/* Recommendation Assistant */}
        <RecommendationAssistant />

        {/* Success Path Visualization */}
        <SuccessPath />

        {/* Decision Banner */}
        <DecisionBanner />

      </Container>
    </Section>
  )
}
