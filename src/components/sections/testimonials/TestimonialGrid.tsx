"use client";

import { TESTIMONIALS } from "./constants";
import { TestimonialCard } from "./TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";

interface TestimonialGridProps {
  activeFilter: string;
}

export function TestimonialGrid({ activeFilter }: TestimonialGridProps) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });
  
  const filteredTestimonials = TESTIMONIALS.filter(testimonial => {
    if (activeFilter === "all") return true;
    if (activeFilter === "student") return testimonial.role === "Student";
    if (activeFilter === "parent") return testimonial.role === "Parent";
    if (activeFilter === "sslc") return testimonial.course === "SSLC";
    if (activeFilter === "plus-one") return testimonial.course === "Plus One";
    if (activeFilter === "plus-two") return testimonial.course === "Plus Two";
    return true;
  });

  return (
    <>
      {/* Desktop & Tablet: Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24 relative z-10 px-4">
        {filteredTestimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
        {filteredTestimonials.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No reviews found for this filter.
          </div>
        )}
      </div>

      {/* Mobile: Swipe Carousel */}
      <div className="md:hidden overflow-hidden mb-24 relative z-10 px-4 -mx-4" ref={emblaRef}>
        <div className="flex gap-4 cursor-grab active:cursor-grabbing">
          {filteredTestimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="flex-[0_0_85%] min-w-0">
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
          {filteredTestimonials.length === 0 && (
            <div className="w-full text-center py-12 text-gray-500">
              No reviews found for this filter.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
