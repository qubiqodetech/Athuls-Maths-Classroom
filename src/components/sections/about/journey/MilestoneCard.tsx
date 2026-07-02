"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { MilestoneType } from "./types";

interface MilestoneCardProps {
  milestone: MilestoneType;
}

export function MilestoneCard({ milestone }: MilestoneCardProps) {
  const Icon = milestone.icon;

  return (
    <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-red-50 group-hover:border-red-100 transition-all duration-300 shrink-0">
          <Icon className="w-5 h-5 text-gray-500 group-hover:text-[#E31E24] transition-colors" />
        </div>
        <div>
          {milestone.year && (
            <span className="block text-xs font-bold text-gray-400 tracking-wider mb-1 uppercase">
              {milestone.year}
            </span>
          )}
          <h4 className="text-xl font-bold text-[#0D1B2A] group-hover:text-[#E31E24] transition-colors">
            {milestone.title}
          </h4>
        </div>
      </div>
      
      <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
        {milestone.description}
      </p>

      {milestone.imageUrl && (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <Image
            src={milestone.imageUrl}
            alt={milestone.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
    </div>
  );
}
