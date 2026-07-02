"use client"

import { motion } from "motion/react"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FutureCommitment() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <Heading as="h2" size="l" className="text-navy-900">
          Our Journey Has <br /> Only Begun.
        </Heading>
        
        <Text variant="large" className="text-gray-600 max-w-md">
          We remain committed to continuously improving our teaching methods, embracing innovation, and supporting every student's academic journey.
        </Text>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button asChild size="lg" className="bg-navy-900 hover:bg-navy-800 text-white rounded-full px-8">
            <Link href="/courses">
              Explore Courses
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8">
            <Link href="/admissions">
              Join AMC
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Right Illustration/Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center"
      >
        {/* Placeholder for illustration/image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50" />
        
        {/* Abstract geometric shapes for illustration feel */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
          <div className="w-full h-full border border-gray-200 rounded-full flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
            <div className="absolute -top-4 w-8 h-8 rounded-full bg-primary-red/20 blur-sm" />
            <div className="w-3/4 h-3/4 border border-gray-200 rounded-full flex items-center justify-center relative animate-[spin_40s_linear_infinite_reverse]">
              <div className="absolute -right-4 w-6 h-6 rounded-full bg-navy-900/10 blur-sm" />
              <div className="w-1/2 h-1/2 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
                <div className="w-1/2 h-1/2 bg-gray-50 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
