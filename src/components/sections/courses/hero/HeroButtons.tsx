"use client"

import { motion } from "motion/react"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
    >
      <Button asChild size="lg" className="bg-navy-900 hover:bg-navy-800 text-white rounded-full px-8 group w-full sm:w-auto">
        <Link href="#programs">
          Explore Programs
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
      
      <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-white/50 backdrop-blur-sm hover:bg-white w-full sm:w-auto">
        <Link href="/contact">
          <Phone className="mr-2 w-4 h-4" />
          Talk To An Advisor
        </Link>
      </Button>
    </motion.div>
  )
}
