"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function ClassroomExperience() {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-24">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50"
        >
          <Image
            src="https://picsum.photos/seed/amc-classroom-exp/800/1000"
            alt="Inside Athul's Maths Classroom"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase mb-3 border border-white/20">
              Inside The Classroom
            </span>
            <h4 className="text-xl md:text-2xl font-bold">Interactive & Engaging</h4>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:pr-8"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-6 leading-tight">
            A Space Where <br />
            Questions Are Welcomed.
          </h3>
          
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Step inside an AMC classroom, and you will not find students silently copying from a whiteboard. You will find active discussions, problem-solving groups, and a continuous exchange of ideas.
            </p>
            <p>
              We believe that mathematics is best learned through interaction. By keeping our batch sizes small, we ensure that no student feels lost in the crowd. Every doubt is addressed, and every concept is clarified.
            </p>
            <p>
              Our learning environment is designed to be positive and supportive, allowing students to learn without the fear of making mistakes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
