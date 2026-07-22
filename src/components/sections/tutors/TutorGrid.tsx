"use client";

import { DUMMY_TUTORS } from "@/src/data/tutors";
import { TutorCard } from "./TutorCard";

export function TutorGrid() {
  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
          {DUMMY_TUTORS.map((tutor, index) => (
            <TutorCard key={tutor.id} tutor={tutor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
