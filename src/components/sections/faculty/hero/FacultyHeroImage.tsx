"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { FloatingStats } from "./FloatingStats"

export function FacultyHeroImage() {
  return (
    <div className="relative w-full h-[500px] lg:h-[700px] mt-12 lg:mt-0 flex items-center justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#E31E24]/5 via-transparent to-[#0D1B2A]/5 rounded-full blur-3xl -z-10" />
      
      <div className="relative w-full h-full max-w-lg mx-auto">
        <FloatingStats />
        
        {/* Editorial Collage */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4">
          
          {/* Main Portrait (Founder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-8 row-span-8 col-start-3 row-start-2 relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20 group"
          >
            <Image
              src="https://picsum.photos/seed/founder/800/1000"
              alt="Lead Faculty"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-white font-bold text-lg">Athul</p>
              <p className="text-gray-300 text-sm">Founder & Lead Educator</p>
            </div>
          </motion.div>

          {/* Secondary Portrait 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-5 row-span-5 col-start-1 row-start-6 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white z-30 group"
          >
            <Image
              src="https://picsum.photos/seed/teacher1/500/500"
              alt="Faculty Member"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>

          {/* Secondary Portrait 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-4 row-span-5 col-start-9 row-start-1 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10 group"
          >
            <Image
              src="https://picsum.photos/seed/teacher2/400/500"
              alt="Faculty Member"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#E31E24]/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>

          {/* Abstract Shape Overlay */}
          <motion.div
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="col-span-4 row-span-4 col-start-8 row-start-8 relative z-0 opacity-50 mix-blend-multiply"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#0D1B2A]/10">
              <path d="M45.7,-76.4C58.9,-70.5,69.2,-57.1,77.5,-42.6C85.8,-28.1,92.1,-12.6,89.5,1.9C86.9,16.4,75.4,29.9,64.2,41.9C53,53.9,42.1,64.4,29.3,71.4C16.5,78.4,1.8,81.9,-12.1,79.9C-26,77.9,-39.1,70.4,-51.1,60.8C-63.1,51.2,-74,39.5,-79.8,25.3C-85.6,11.1,-86.3,-5.6,-81.1,-20.5C-75.9,-35.4,-64.8,-48.5,-51.8,-54.6C-38.8,-60.7,-23.9,-59.8,-9.7,-64.3C4.5,-68.8,18.9,-78.7,32.6,-82.4C46.3,-86.1,32.5,-82.3,45.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
