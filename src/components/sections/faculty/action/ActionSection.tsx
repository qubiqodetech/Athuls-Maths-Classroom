"use client"

import { SectionHeader } from "./SectionHeader"
import { ClassroomPrinciples } from "./ClassroomPrinciples"
import { EditorialGallery } from "./EditorialGallery"
import { HotspotImage } from "./HotspotImage"
import { VideoPreview } from "./VideoPreview"

export function ActionSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="in-action">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/4" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader />
        
        <ClassroomPrinciples />
        
        <div className="mb-24">
          <EditorialGallery />
        </div>
        
        <div className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0D1B2A] tracking-tight mb-4">Interactive Learning Environment</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">Explore the key elements of our modern classrooms designed for focus and engagement.</p>
          </div>
          <HotspotImage />
        </div>
        
        <VideoPreview />
      </div>
    </section>
  )
}
