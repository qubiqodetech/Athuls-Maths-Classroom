"use client";

import { motion } from "motion/react";
import { ClassroomPreview } from "./ClassroomPreview";
import { VisitCards } from "./VisitCards";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, MapPin, Phone } from "lucide-react";

export function VisitSection() {
  return (
    <section id="visit" className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto max-w-[1320px] px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-[#E31E24] font-semibold tracking-widest uppercase text-sm mb-4 block">
            Visit Our Classroom
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0D1B2A]">
            We'd Love
            <br />
            To Welcome You.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-start">
          <div className="space-y-12">
            <ClassroomPreview />
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#0D1B2A] text-white hover:bg-[#0D1B2A]/90 rounded-full h-14 px-8 text-base group"
              >
                Book A Visit
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#E5E7EB] text-[#0D1B2A] hover:bg-white rounded-full h-14 px-8 text-base bg-white shadow-sm"
              >
                <MapPin className="mr-2 w-4 h-4 text-[#E31E24]" />
                Get Directions
              </Button>
            </div>
          </div>
          <div>
            <VisitCards />
          </div>
        </div>
      </div>
    </section>
  );
}
