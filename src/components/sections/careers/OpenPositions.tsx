"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { OPEN_POSITIONS, JobPosition } from "@/src/data/careers";
import { MapPin, Briefcase, ChevronRight } from "lucide-react";
import { JobApplicationModal } from "./JobApplicationModal";

export function OpenPositions() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  return (
    <section className="py-20 lg:py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4"
          >
            Open Positions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg text-gray-600"
          >
            Find a role that fits your passion and expertise.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6 max-w-4xl">
          {OPEN_POSITIONS.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-[#E31E24]/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E31E24] bg-red-50 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D1B2A] mb-3 group-hover:text-[#E31E24] transition-colors">
                    {job.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 line-clamp-2">
                    {job.description}
                  </p>
                </div>
                
                <div className="shrink-0 md:pl-6 md:border-l border-gray-100 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full md:w-auto px-6 py-3 bg-[#0D1B2A] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#1a365d] transition-colors"
                  >
                    Apply Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <JobApplicationModal 
        job={selectedJob} 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)} 
      />
    </section>
  );
}
