"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Download, ChevronRight, Trophy } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

interface YearContentProps {
  yearData: {
    id: string;
    year: string;
    title: string;
    stats: { label: string; value: number; suffix: string }[];
    highlights: string[];
    topStudents: { name: string; achievement: string; image: string }[];
    pdfUrl: string;
  };
}

export function YearContent({ yearData }: YearContentProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [yearData.id]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={yearData.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col gap-12"
      >
        {/* Header & Stats */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-[#E5E7EB] pb-8">
            <div>
              <h3 className="font-display text-3xl font-bold text-[#0D1B2A] mb-2">
                {yearData.title}
              </h3>
              <p className="text-muted-foreground">Comprehensive academic achievements.</p>
            </div>
            <Button variant="outline" className="rounded-full gap-2 text-[#0D1B2A] border-[#0D1B2A]/20">
              <Download className="w-4 h-4" />
              Download Report
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {yearData.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold font-display text-[#0D1B2A] mb-1">
                  {isMounted ? (
                    <CountUp start={0} end={stat.value} duration={2} />
                  ) : (
                    stat.value
                  )}
                  <span className="text-[#E31E24]">{stat.suffix}</span>
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights & Top Students */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#E5E7EB]">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-5 h-5 text-[#E31E24]" />
              <h4 className="font-display text-xl font-bold text-[#0D1B2A]">Key Highlights</h4>
            </div>
            <ul className="space-y-4">
              {yearData.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E31E24] shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E5E7EB]">
            <h4 className="font-display text-xl font-bold text-[#0D1B2A] mb-6">Top Achievers</h4>
            <div className="flex flex-col gap-4">
              {yearData.topStudents.map((student, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F8FAFC] transition-colors border border-transparent hover:border-[#E5E7EB]/50 group">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-[#0D1B2A] text-sm">{student.name}</h5>
                    <p className="text-xs text-[#E31E24] font-medium">{student.achievement}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
