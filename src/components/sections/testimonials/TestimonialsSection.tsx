"use client";


import { TestimonialsHeading } from "./TestimonialsHeading";
import { FeaturedTestimonial } from "./FeaturedTestimonial";
import { TestimonialMarquee } from "./TestimonialMarquee";

import { TestimonialsCTA } from "./TestimonialsCTA";

export function TestimonialsSection() {
  

  return (
    <section className="relative py-12 lg:py-16 bg-[#FAFAFA] overflow-hidden border-b border-gray-100">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#0D1B2A]/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <TestimonialsHeading />
        <FeaturedTestimonial />
        
        
        <TestimonialMarquee />
        
        <TestimonialsCTA />
      </div>
    </section>
  );
}
