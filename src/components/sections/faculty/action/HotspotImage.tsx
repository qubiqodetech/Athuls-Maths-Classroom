"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { Plus } from "lucide-react"
import { HOTSPOTS } from "./constants"

export function HotspotImage() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-video bg-gray-100 shadow-xl border border-gray-100">
        <Image 
          src="https://picsum.photos/seed/amc-classroom-hotspot/1920/1080" 
          alt="Classroom layout" 
          fill 
          className="object-cover" 
          referrerPolicy="no-referrer" 
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-[#0D1B2A]/10 pointer-events-none" />
        
        {HOTSPOTS.map((hotspot) => (
          <div 
            key={hotspot.id} 
            className="absolute z-20" 
            style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
          >
            <button 
              onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
              className="relative w-8 h-8 md:w-10 md:h-10 -translate-x-1/2 -translate-y-1/2 bg-[#E31E24] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none"
              aria-label={`View ${hotspot.label} details`}
            >
              <Plus className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${activeHotspot === hotspot.id ? 'rotate-45' : ''}`} />
              
              {/* Pulse effect */}
              {activeHotspot !== hotspot.id && (
                <span className="absolute inset-0 rounded-full border-2 border-[#E31E24] animate-ping opacity-75" />
              )}
            </button>
            
            <AnimatePresence>
              {activeHotspot === hotspot.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 md:w-56 bg-white p-4 rounded-xl shadow-2xl z-30 border border-gray-100"
                >
                  <h4 className="text-sm font-bold text-[#0D1B2A] mb-1">{hotspot.label}</h4>
                  <p className="text-xs text-gray-600">{hotspot.description}</p>
                  
                  {/* Arrow pointing up */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white border-l border-t border-gray-100" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
