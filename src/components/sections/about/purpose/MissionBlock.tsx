"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Illustration } from "./Illustration";

export function MissionBlock() {
  return (
    <div className="mb-24 md:mb-32">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <Illustration type="mission" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 md:order-2 lg:pr-8"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-6">
            Our Mission
          </h3>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
            <p>
              To make education accessible, enjoyable, and understandable for every student, regardless of their past academic performance.
            </p>
            <p>
              We aim to replace the fear of numbers with the joy of problem-solving by providing individual attention, concept-based teaching, and a supportive environment where students feel confident to ask questions and explore ideas.
            </p>
            <p>
              Our ultimate goal is to build a foundation of academic excellence that serves students far beyond their school years.
            </p>
          </div>
          
          <Link 
            href="#our-journey"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 text-[#0D1B2A] font-semibold rounded-full transition-colors group border border-gray-200"
          >
            Learn Our Method
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
