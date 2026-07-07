"use client";

import { motion } from "motion/react";
import { FeaturedVideo } from "./FeaturedVideo";
import { VideoGrid } from "./VideoGrid";
import { PlaylistSidebar } from "./PlaylistSidebar";

export function VideoStories() {
  return (
    <section className="py-24 bg-[#050816] text-white">
      <div className="container mx-auto max-w-[1320px] px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#E31E24] font-semibold tracking-widest uppercase text-sm mb-4 block">
              Video Stories
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              See AMC
              <br />
              In Motion.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#" className="inline-flex items-center text-sm font-semibold tracking-wider uppercase text-white/80 hover:text-white transition-colors group">
              Visit YouTube Channel
              <span className="ml-2 w-6 h-0.5 bg-[#E31E24] group-hover:w-8 transition-all" />
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16">
          <FeaturedVideo />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <PlaylistSidebar />
            </div>
            <div className="lg:col-span-9">
              <VideoGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
