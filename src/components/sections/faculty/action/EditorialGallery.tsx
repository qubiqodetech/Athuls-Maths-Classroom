"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { GALLERY_MOMENTS } from "./constants"

export function EditorialGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto">
      {/* Large full width */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:col-span-12 group"
      >
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-shadow">
          <Image 
            src={GALLERY_MOMENTS[0].imageSrc} 
            alt={GALLERY_MOMENTS[0].title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-[#0D1B2A]/20 to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">{GALLERY_MOMENTS[0].title}</h3>
            <p className="text-gray-200 text-lg max-w-2xl">{GALLERY_MOMENTS[0].description}</p>
          </div>
        </div>
      </motion.div>
      
      {/* Split Left (Tall) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="md:col-span-5 group"
      >
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-shadow">
          <Image 
            src={GALLERY_MOMENTS[1].imageSrc} 
            alt={GALLERY_MOMENTS[1].title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{GALLERY_MOMENTS[1].title}</h3>
            <p className="text-gray-200 text-sm md:text-base">{GALLERY_MOMENTS[1].description}</p>
          </div>
        </div>
      </motion.div>
      
      {/* Split Right (Wide/Boxy) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:col-span-7 group flex flex-col"
      >
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-shadow h-full">
          <Image 
            src={GALLERY_MOMENTS[2].imageSrc} 
            alt={GALLERY_MOMENTS[2].title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{GALLERY_MOMENTS[2].title}</h3>
            <p className="text-gray-200 text-sm md:text-base">{GALLERY_MOMENTS[2].description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
