"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"
import { SectionObserver } from "@/src/components/scroll/SectionObserver"

interface TermsSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  delay?: number;
}

export function TermsSection({ id, title, children, delay = 0 }: TermsSectionProps) {
  return (
    <SectionObserver id={id} delay={delay} className="mb-16 scroll-mt-32">
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#0D1B2A] mb-6 tracking-tight">
        {title}
      </h2>
      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        {children}
      </div>
    </SectionObserver>
  )
}
