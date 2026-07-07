"use client";

import { motion } from "motion/react";
import { ProcessTimeline } from "./ProcessTimeline";
import { AdmissionCards } from "./AdmissionCards";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1320px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-[#E31E24] font-semibold tracking-widest uppercase text-sm mb-4 block">
            Admission Process
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0D1B2A]">
            Joining AMC
            <br />
            Is Simple.
          </h2>
        </motion.div>

        <ProcessTimeline />
        
        <div className="mt-24 lg:mt-32">
          <AdmissionCards />
        </div>
      </div>
    </section>
  );
}
