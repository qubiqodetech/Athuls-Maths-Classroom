"use client"

import { FacultyHeroContent } from "./FacultyHeroContent"
import { FacultyHeroImage } from "./FacultyHeroImage"
import { ScrollIndicator } from "./ScrollIndicator"

export function FacultyHero() {
  return (
    <section className="relative min-h-[90vh] bg-white overflow-hidden flex flex-col pt-20">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[800px] h-[800px] bg-[#E31E24]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[800px] h-[800px] bg-[#0D1B2A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 flex-grow flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full max-w-7xl mx-auto pb-24 lg:pb-16">
          <FacultyHeroContent />
          <FacultyHeroImage />
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  )
}
