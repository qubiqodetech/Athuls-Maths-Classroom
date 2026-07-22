"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Tutor } from "@/src/data/tutors";
import { MessageCircle } from "lucide-react";

interface TutorCardProps {
  tutor: Tutor;
  index: number;
  onMessageClick: (tutor: Tutor) => void;
}

export function TutorCard({ tutor, index, onMessageClick }: TutorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col h-full"
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
        <Image
          src={tutor.image}
          alt={tutor.name}
          fill
          referrerPolicy="no-referrer"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Elegant overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Action button inside overlay */}
        <div className="absolute bottom-6 left-0 right-0 px-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <button
            onClick={() => onMessageClick(tutor)}
            className="w-full bg-[#E31E24] hover:bg-red-700 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Message Tutor
          </button>
        </div>
      </div>

      <div className="text-center flex-grow">
        <h3 className="text-xl font-bold text-[#0D1B2A] mb-1 group-hover:text-[#E31E24] transition-colors">
          {tutor.name}
        </h3>
        <p className="text-sm text-gray-500 font-medium">
          {tutor.subject}
        </p>
      </div>
    </motion.div>
  );
}
