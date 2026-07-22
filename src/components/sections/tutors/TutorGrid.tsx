"use client";

import { useState, useMemo } from "react";
import { DUMMY_TUTORS, Tutor } from "@/src/data/tutors";
import { TutorCard } from "./TutorCard";
import { TutorContactModal } from "./TutorContactModal";
import { cn } from "@/src/lib/utils";

const CATEGORIES = ["All", "Mathematics", "Sciences", "Languages", "Computer Science", "Social Sciences"];
const EXPERIENCES = ["All", "1-3 Years", "3-5 Years", "5+ Years", "10+ Years"];

export function TutorGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);

  const filteredTutors = useMemo(() => {
    return DUMMY_TUTORS.filter((tutor) => {
      const matchCategory = selectedCategory === "All" || tutor.category === selectedCategory;
      const matchExperience = selectedExperience === "All" || tutor.experience === selectedExperience;
      return matchCategory && matchExperience;
    });
  }, [selectedCategory, selectedExperience]);

  return (
    <>
      <section className="py-12 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-gray-500 mr-2">Subject:</span>
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    selectedCategory === category
                      ? "bg-[#0D1B2A] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 items-center">
               <span className="text-sm font-medium text-gray-500 mr-2">Experience:</span>
               <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border-none focus:ring-2 focus:ring-[#0D1B2A] outline-none cursor-pointer"
               >
                  {EXPERIENCES.map((exp) => (
                    <option key={exp} value={exp}>
                      {exp}
                    </option>
                  ))}
               </select>
            </div>
          </div>

          {/* Grid */}
          {filteredTutors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
              {filteredTutors.map((tutor, index) => (
                <TutorCard 
                  key={tutor.id} 
                  tutor={tutor} 
                  index={index} 
                  onMessageClick={setSelectedTutor}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No tutors found matching your criteria.</p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSelectedExperience("All"); }}
                className="mt-4 text-[#E31E24] hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <TutorContactModal 
        tutor={selectedTutor} 
        isOpen={!!selectedTutor} 
        onClose={() => setSelectedTutor(null)} 
      />
    </>
  );
}
