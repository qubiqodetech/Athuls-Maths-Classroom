"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ClassroomExperience() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-32">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/amc-classroom-exp/1200/900"
              alt="Authentic Classroom Experience"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0D1B2A]/40 to-transparent" />
          </div>
          
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-red-50 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-50 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] leading-tight mb-6">
            A Place Where Questions <br className="hidden sm:block"/> Are Welcomed.
          </h3>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
            <p>
              Step inside our classrooms and you will immediately notice the difference. It's not a place of silent memorization, but an active environment of friendly interaction and concept-focused discussions.
            </p>
            <p>
              We believe students learn best when they are not afraid to make mistakes. Our teaching methodology encourages every student to ask questions, challenge their understanding, and build genuine confidence in their mathematical abilities.
            </p>
          </div>

          <Link href="#admissions" className="inline-flex items-center gap-2 text-[#E31E24] font-bold hover:text-red-700 transition-colors group text-lg">
            Experience it yourself
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
