"use client"

import { SectionHeader } from "./SectionHeader"
import { FeaturedReview } from "./FeaturedReview"
import { TestimonialGrid } from "./TestimonialGrid"
import { VideoStoryPreview } from "./VideoStoryPreview"
import { TrustMetrics } from "./TrustMetrics"
import { CommunityWall } from "./CommunityWall"
import { FinalQuote } from "./FinalQuote"

export function ExperiencesSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="experiences">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader />
        <FeaturedReview />
        <TestimonialGrid />
        <VideoStoryPreview />
        <TrustMetrics />
        <CommunityWall />
        <FinalQuote />
      </div>
    </section>
  )
}
