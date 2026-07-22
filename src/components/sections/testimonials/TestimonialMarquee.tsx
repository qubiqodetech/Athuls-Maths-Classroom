"use client";

import { TESTIMONIALS } from "./constants";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialMarquee() {
  // Duplicate testimonials to create a seamless loop (3 sets)
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="relative w-full max-w-[100vw] overflow-hidden mb-24 z-10 py-4 mask-edges -mx-4 md:mx-0 px-4 md:px-0">
      <div className="flex gap-4 md:gap-6 w-max animate-marquee">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={`${testimonial.id}-${index}`} className="w-[320px] md:w-[400px] shrink-0">
            <TestimonialCard testimonial={testimonial} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
