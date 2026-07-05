"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { COMMUNITY_WALL } from "./constants"

export function CommunityWall() {
  // Duplicate array for infinite scroll effect
  const wallItems = [...COMMUNITY_WALL, ...COMMUNITY_WALL]

  return (
    <div className="py-24 bg-gray-50 relative overflow-hidden -mx-4 md:mx-0 md:rounded-[3rem] mb-24">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none hidden md:block" />

      <div className="text-center mb-16 relative z-10 px-4">
        <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B2A] tracking-tight mb-4">The AMC Community</h3>
        <p className="text-gray-500 text-lg">Celebrating the successes of our students.</p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-6 px-3"
        >
          {wallItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="w-64 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex-shrink-0 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-50">
                <Image 
                  src={item.imageSrc} 
                  alt={item.name} 
                  width={96} 
                  height={96} 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-bold text-[#0D1B2A] text-lg mb-1">{item.name}</h4>
              <p className="text-[#E31E24] font-medium text-sm">{item.achievement}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
