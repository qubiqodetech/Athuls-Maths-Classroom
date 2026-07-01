"use client";

import { FACULTY_MEMBERS } from "./constants";
import { FacultyCard } from "./FacultyCard";
import useEmblaCarousel from "embla-carousel-react";

export function FacultyGrid() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  return (
    <>
      {/* Desktop & Tablet: Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20 relative z-10 px-4">
        {FACULTY_MEMBERS.map((faculty, index) => (
          <FacultyCard key={faculty.id} faculty={faculty} index={index} />
        ))}
      </div>

      {/* Mobile: Swipe Carousel */}
      <div className="md:hidden overflow-hidden mb-16 relative z-10 px-4 -mx-4" ref={emblaRef}>
        <div className="flex gap-4 cursor-grab active:cursor-grabbing">
          {FACULTY_MEMBERS.map((faculty, index) => (
            <div key={faculty.id} className="flex-[0_0_85%] min-w-0">
              <FacultyCard faculty={faculty} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
