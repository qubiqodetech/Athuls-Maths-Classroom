"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { archiveYears } from "./data";
import { YearSelector } from "./YearSelector";
import { YearContent } from "./YearContent";

export function ResultsArchive() {
  const [activeYear, setActiveYear] = useState(archiveYears[0].id);
  const activeData = archiveYears.find((y) => y.id === activeYear) || archiveYears[0];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#E31E24] font-semibold tracking-widest uppercase text-sm mb-4 block">
            Results Archive
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0D1B2A] leading-[1.1]">
            A Legacy<br />
            Of Consistent<br />
            Academic Success.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-3 lg:sticky lg:top-32">
            <YearSelector
              years={archiveYears}
              activeYear={activeYear}
              onSelectYear={setActiveYear}
            />
          </div>
          <div className="lg:col-span-9">
            <YearContent yearData={activeData} />
          </div>
        </div>
      </div>
    </section>
  );
}
