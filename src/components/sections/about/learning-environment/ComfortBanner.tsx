"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export function ComfortBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4 mb-32"
    >
      <div className="relative bg-[#0D1B2A] rounded-[3rem] p-10 md:p-16 lg:p-20 text-center overflow-hidden shadow-2xl shadow-[#0D1B2A]/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-80" />
        
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Every Student Deserves <br className="hidden sm:block"/>
            A Comfortable Place To Learn.
          </h3>
          
          <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed mb-10">
            We believe students learn best when they feel welcomed, respected, and encouraged to ask questions without hesitation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E31E24] hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 group shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={() => {
                const gallery = document.getElementById("gallery-section");
                gallery?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 group"
            >
              <ImageIcon className="w-5 h-5" />
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
