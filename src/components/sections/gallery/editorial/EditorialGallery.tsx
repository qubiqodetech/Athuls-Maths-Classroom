"use client";

import { useState } from "react";
import { galleryCategories, galleryData } from "./data";
import { GalleryHeader } from "./GalleryHeader";
import { CategoryFilter } from "./CategoryFilter";
import { MasonryLayout } from "./MasonryLayout";
import { Lightbox } from "./Lightbox";

export function EditorialGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredData = galleryData.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="explore" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto max-w-[1320px] px-4 md:px-6">
        <GalleryHeader />
        <CategoryFilter
          categories={galleryCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <MasonryLayout items={filteredData} onImageClick={openLightbox} />
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredData}
        currentIndex={currentImageIndex}
        onNavigate={setCurrentImageIndex}
      />
    </section>
  );
}
