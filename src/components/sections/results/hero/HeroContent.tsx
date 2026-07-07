"use client";

import { motion } from "motion/react";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { HeroStats } from "./HeroStats";

export function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom easing for premium feel
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start text-left"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <Badge
          variant="outline"
          className="rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase border-[#0D1B2A]/20 text-[#0D1B2A] bg-[#0D1B2A]/5"
        >
          <GraduationCap className="w-3.5 h-3.5 mr-2 inline-block" />
          Academic Excellence
        </Badge>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0D1B2A] leading-[1.1] mb-6"
      >
        Every Result
        <br />
        Has A <span className="text-[#E31E24]">Story</span>
        <br />
        Worth Celebrating.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light"
      >
        Success isn't measured only by marks. It is measured by confidence, consistency, and every student's determination to grow through learning.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 mb-14 w-full">
        <Button
          asChild
          size="lg"
          className="bg-[#0D1B2A] text-white hover:bg-[#0D1B2A]/90 rounded-full px-8 h-12 lg:h-14 text-base group"
        >
          <Link href="#explore">
            Explore Results
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-full px-8 h-12 lg:h-14 text-base border-[#0D1B2A]/20 text-[#0D1B2A] hover:bg-[#0D1B2A]/5 group"
        >
          <Link href="/admissions">
            Admissions
            <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <HeroStats />
      </motion.div>
    </motion.div>
  );
}
