"use client"

import { useState } from "react"
import { PROGRAMS } from "./constants"
import { ProgramNavigator } from "./ProgramNavigator"
import { ProgramContent } from "./ProgramContent"
import { ComparisonBanner } from "./ComparisonBanner"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"
import { Section } from "@/src/components/layout/section"
import { Container } from "@/src/components/layout/container"
import { motion } from "motion/react"

export function ProgramExplorer() {
  const [activeProgramId, setActiveProgramId] = useState(PROGRAMS[0].id)
  
  const activeProgram = PROGRAMS.find(p => p.id === activeProgramId) || PROGRAMS[0]

  return (
    <Section id="programs" className="bg-white relative overflow-hidden py-24 sm:py-32">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -left-40 w-[300px] h-[300px] bg-gray-50 rounded-full blur-3xl opacity-50" />
      </div>

      <Container className="relative z-10 max-w-[1320px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest text-primary-red uppercase mb-4 block">
              Program Explorer
            </span>
            <Heading as="h2" size="xl" className="text-navy-900 leading-tight">
              Find The Right Program <br />
              For Your <span className="text-primary-red">Academic Journey.</span>
            </Heading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Text variant="large" className="text-gray-600 max-w-[700px] leading-relaxed">
              Every mathematics program at Athul's Maths Classroom is carefully designed to match your academic level, strengthen conceptual understanding, and prepare you for examination success.
            </Text>
          </motion.div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Navigator */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-32">
              <ProgramNavigator 
                activeProgramId={activeProgramId}
                onSelect={setActiveProgramId}
              />
            </div>
          </div>

          {/* Right Column: Dynamic Content */}
          <div className="lg:col-span-8">
            <ProgramContent program={activeProgram} />
          </div>

        </div>

        {/* Bottom Banner */}
        <ComparisonBanner />

      </Container>
    </Section>
  )
}
