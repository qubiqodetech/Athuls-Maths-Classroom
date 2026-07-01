"use client";

import { COURSES } from "./constants";
import { CourseCard } from "./CourseCard";
import useEmblaCarousel from "embla-carousel-react";

export function CourseGrid() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  return (
    <>
      {/* Desktop & Tablet: Grid */}
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1440px] mx-auto mb-16 relative z-10 px-4">
        {COURSES.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>

      {/* Mobile: Swipe Carousel */}
      <div className="md:hidden overflow-hidden mb-16 relative z-10" ref={emblaRef}>
        <div className="flex gap-4 cursor-grab active:cursor-grabbing">
          {COURSES.map((course, index) => (
            <div key={course.id} className="flex-[0_0_85%] min-w-0">
              <CourseCard course={course} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
