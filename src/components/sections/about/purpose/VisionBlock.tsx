"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Illustration } from "./Illustration";

export function VisionBlock() {
  return (
    <div className="mb-24 md:mb-32">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:pl-8"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-6">
            Our Vision
          </h3>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
            <p>
              To be the most trusted and innovative mathematics learning community, empowering students across regions to achieve their highest potential.
            </p>
            <p>
              We envision a future where quality education seamlessly blends with modern technology, creating learning experiences that are highly personalized, engaging, and effective.
            </p>
            <p>
              As we grow, our commitment remains the same: ensuring that no student is left behind, and every learner discovers their true capability.
            </p>
          </div>
          
          <Link 
            href="#our-journey"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D1B2A] hover:bg-gray-800 text-white font-semibold rounded-full transition-colors group"
          >
            Explore Our Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Illustration type="vision" />
        </motion.div>
      </div>
    </div>
  );
}
