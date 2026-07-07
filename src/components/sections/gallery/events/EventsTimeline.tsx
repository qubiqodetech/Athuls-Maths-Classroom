"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { timelineEvents } from "./data";
import { ArrowRight } from "lucide-react";

export function EventsTimeline() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {timelineEvents.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-3xl overflow-hidden bg-[#F8FAFC] border border-[#E5E7EB] hover:shadow-xl transition-all duration-500 cursor-pointer"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-[#0D1B2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-xs font-semibold text-[#0D1B2A] tracking-wide uppercase">
                {event.category}
              </span>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-center z-10">
              <span className="text-white text-sm font-medium">View Album</span>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 text-white">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
              <span className="text-sm font-medium text-muted-foreground">{event.date}</span>
            </div>
            <h4 className="font-display text-2xl font-bold text-[#0D1B2A] group-hover:text-[#E31E24] transition-colors">
              {event.title}
            </h4>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
