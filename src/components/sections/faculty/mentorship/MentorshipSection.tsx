"use client"

import { SectionHeading } from "./SectionHeading"
import { MentorshipCards } from "./MentorshipCards"
import { StudentJourney } from "./StudentJourney"
import { FacultyPromise } from "./FacultyPromise"
import { StudentQuote } from "./StudentQuote"

export function MentorshipSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="mentorship">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E31E24]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-[#0D1B2A]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3" />
      
      {/* Abstract geometric lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,25 50,50 T100,50" stroke="#0D1B2A" strokeWidth="0.2" fill="none" />
          <path d="M0,70 Q25,95 50,70 T100,70" stroke="#E31E24" strokeWidth="0.1" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center mb-16 md:mb-24">
          <div className="lg:col-span-5">
            <SectionHeading />
          </div>
          <div className="lg:col-span-7">
            <MentorshipCards />
          </div>
        </div>

        <StudentJourney />
        <FacultyPromise />
        <StudentQuote />
      </div>
    </section>
  )
}
