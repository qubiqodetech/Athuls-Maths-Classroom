"use client";

import { motion } from "motion/react";
import { FeaturedEvent } from "./FeaturedEvent";
import { EventsTimeline } from "./EventsTimeline";

export function EventsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1320px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[#E31E24] font-semibold tracking-widest uppercase text-sm mb-4 block">
            Events
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0D1B2A]">
            Learning Beyond
            <br />
            The Classroom.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16 lg:gap-24">
          <FeaturedEvent />
          <EventsTimeline />
        </div>
      </div>
    </section>
  );
}
