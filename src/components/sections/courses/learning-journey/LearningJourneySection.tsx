"use client"

import { Section } from "@/src/components/layout/section"
import { Container } from "@/src/components/layout/container"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"
import { motion } from "motion/react"
import { InteractiveRoadmap } from "./InteractiveRoadmap"
import { WeeklyCycle } from "./WeeklyCycle"
import { SupportFeatures } from "./SupportFeatures"
import { ParentBanner } from "./ParentBanner"

export function LearningJourneySection() {
  return (
    <Section id="learning-journey" className="bg-gray-50 relative overflow-hidden py-24 sm:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          {/* Subtle grid lines or gradients can go here */}
          <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-red-50/50 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] opacity-60" />
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
              The AMC Learning Journey
            </span>
            <Heading as="h2" size="xl" className="text-navy-900 leading-tight mb-6">
              From Your First Class <br className="hidden sm:block" />
              To <span className="text-primary-red">Examination Success.</span>
            </Heading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Text variant="large" className="text-gray-600 max-w-2xl leading-relaxed mx-auto">
              Every student follows a carefully designed learning path that develops concepts gradually while continuously measuring improvement.
            </Text>
            <Text variant="large" className="text-gray-600 max-w-2xl leading-relaxed mx-auto mt-4 font-medium">
              Our goal isn't simply completing the syllabus. It's ensuring every student truly understands mathematics.
            </Text>
          </motion.div>
        </div>

        {/* Interactive Roadmap */}
        <div className="mb-24">
          <InteractiveRoadmap />
        </div>

        {/* Middle Section: Weekly Cycle + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <WeeklyCycle />
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Heading as="h3" size="m" className="text-navy-900 mb-4">
                Continuous Support
              </Heading>
              <Text className="text-gray-600 max-w-xl text-lg">
                We provide a comprehensive support system designed to ensure no student is left behind.
              </Text>
            </motion.div>
            
            <SupportFeatures />
          </div>
        </div>

        {/* Bottom Banner */}
        <ParentBanner />

      </Container>
    </Section>
  )
}
