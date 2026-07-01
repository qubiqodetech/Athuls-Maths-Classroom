"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CourseType } from "./types";
import { CourseBadge } from "./CourseBadge";
import { cn } from "@/src/lib/utils";

interface CourseCardProps {
  course: CourseType;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const Icon = course.icon;
  const isFeatured = course.isFeatured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <div
        className={cn(
          "group relative h-full flex flex-col p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden",
          isFeatured
            ? "bg-[#0D1B2A] text-white border-[#0D1B2A] shadow-xl hover:shadow-2xl hover:-translate-y-1"
            : "bg-white text-[#0D1B2A] border-gray-100 hover:border-[#E31E24]/20 shadow-sm hover:shadow-xl hover:shadow-[#E31E24]/5 hover:-translate-y-1"
        )}
      >
        {/* Subtle Background Glow */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0",
            isFeatured ? "bg-gradient-to-br from-white/5 to-transparent" : "bg-gradient-to-br from-[#E31E24]/5 to-transparent"
          )}
        />

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div
              className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm",
                isFeatured ? "bg-white/10 text-white border border-white/10" : "bg-gray-50 text-[#0D1B2A] border border-gray-100 group-hover:text-[#E31E24] group-hover:bg-white"
              )}
            >
              <Icon className="w-7 h-7 transition-colors duration-300" />
            </div>
            
            {course.badge && <CourseBadge text={course.badge} isFeatured={isFeatured} />}
          </div>

          <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
          <p
            className={cn(
              "text-sm leading-relaxed mb-8 flex-1",
              isFeatured ? "text-gray-300" : "text-gray-600"
            )}
          >
            {course.description}
          </p>

          <div className="mb-8 space-y-3">
            {course.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <div className={cn(
                  "mt-0.5 rounded-full p-0.5 shrink-0",
                  isFeatured ? "bg-white/20" : "bg-green-100"
                )}>
                  <Check className={cn(
                    "w-3 h-3",
                    isFeatured ? "text-white" : "text-green-600"
                  )} strokeWidth={3} />
                </div>
                <span className={cn(isFeatured ? "text-gray-300" : "text-gray-700")}>
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <Link href="/courses" className="mt-auto">
            <button
              className={cn(
                "w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all duration-300",
                isFeatured
                  ? "bg-white text-[#0D1B2A] hover:bg-gray-100"
                  : "bg-gray-50 text-[#0D1B2A] hover:bg-[#E31E24] hover:text-white border border-gray-100 group-hover:border-transparent"
              )}
            >
              Explore Program
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
