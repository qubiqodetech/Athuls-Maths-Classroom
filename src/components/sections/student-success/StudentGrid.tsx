"use client";

import { STUDENTS } from "./constants";
import { StudentCard } from "./StudentCard";
import useEmblaCarousel from "embla-carousel-react";

export function StudentGrid() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  return (
    <>
      {/* Desktop & Tablet: Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1440px] mx-auto mb-20 relative z-10 px-4">
        {STUDENTS.map((student, index) => (
          <StudentCard key={student.id} student={student} index={index} />
        ))}
      </div>

      {/* Mobile: Swipe Carousel */}
      <div className="md:hidden overflow-hidden mb-16 relative z-10 px-4 -mx-4" ref={emblaRef}>
        <div className="flex gap-4 cursor-grab active:cursor-grabbing">
          {STUDENTS.map((student, index) => (
            <div key={student.id} className="flex-[0_0_80%] min-w-0">
              <StudentCard student={student} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
