"use client";

import { motion } from "motion/react";
import { FACILITIES } from "./constants";

export function FacilitiesGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-32">
      <div className="text-center mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A] mb-4">Supporting Your Success</h3>
        <p className="text-gray-500 max-w-2xl mx-auto">Everything you need to focus on what matters most: your learning.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {FACILITIES.map((facility, index) => {
          const Icon = facility.icon;
          return (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300 group flex items-start gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-red-50 group-hover:border-red-100 group-hover:shadow-sm transition-all duration-300">
                <Icon className="w-6 h-6 text-gray-400 group-hover:text-[#E31E24] transition-colors" />
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-[#0D1B2A] mb-2 group-hover:text-[#E31E24] transition-colors">
                  {facility.title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
