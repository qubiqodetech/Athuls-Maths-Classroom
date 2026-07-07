"use client";

import { motion } from "motion/react";
import { CommunicationCards } from "./CommunicationCards";
import { ContactForm } from "./ContactForm";
import { QuickContactStrip } from "./QuickContactStrip";

export function ContactHub() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1320px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-[#E31E24] font-semibold tracking-widest uppercase text-sm mb-4 block">
            Contact AMC
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0D1B2A]">
            Choose
            <br />
            The Best Way
            <br />
            To Reach Us.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <CommunicationCards />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        <div className="mt-20">
          <QuickContactStrip />
        </div>
      </div>
    </section>
  );
}
