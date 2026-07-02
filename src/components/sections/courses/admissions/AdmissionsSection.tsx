"use client"

import { Section } from "@/src/components/layout/section"
import { Container } from "@/src/components/layout/container"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"
import { motion } from "motion/react"
import { LearningModes } from "./LearningModes"
import { BatchSchedule } from "./BatchSchedule"
import { AdmissionProcess } from "./AdmissionProcess"
import { WhatsIncluded } from "./WhatsIncluded"
import { ImportantInfo } from "./ImportantInfo"
import { AdmissionHelpBanner } from "./AdmissionHelpBanner"

export function AdmissionsSection() {
  return (
    <Section id="admissions" className="bg-white relative overflow-hidden py-24 sm:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-red-50/50 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] opacity-60" />
        </div>
      </div>

      <Container className="relative z-10 max-w-[1320px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-12 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest text-primary-red uppercase mb-4 block">
              Batches & Admissions
            </span>
            <Heading as="h2" size="xl" className="text-navy-900 leading-tight mb-6">
              Flexible Learning, <br className="hidden sm:block" />
              Designed Around <br className="hidden sm:block" />
              <span className="text-primary-red">Your Schedule.</span>
            </Heading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Text variant="large" className="text-gray-600 leading-relaxed mx-auto">
              Whether you prefer classroom learning or online sessions, AMC offers flexible learning options designed to fit every student's academic routine.
            </Text>
          </motion.div>
        </div>

        <LearningModes />
        <BatchSchedule />
        <AdmissionProcess />
        <WhatsIncluded />
        <ImportantInfo />
        <AdmissionHelpBanner />

      </Container>
    </Section>
  )
}
