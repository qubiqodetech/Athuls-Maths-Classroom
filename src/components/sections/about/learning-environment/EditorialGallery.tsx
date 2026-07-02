"use client";

import { useState } from "react";
import { GALLERY_IMAGES } from "./constants";
import { GalleryImage } from "./GalleryImage";
import { Lightbox } from "./Lightbox";
import { GalleryImageType } from "./types";

export function EditorialGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleImageClick = (image: GalleryImageType) => {
    const index = GALLERY_IMAGES.findIndex((img) => img.id === image.id);
    setLightboxIndex(index);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryImage 
              key={image.id} 
              image={image} 
              index={index} 
              onClick={handleImageClick} 
            />
          ))}
        </div>
      </div>

      <Lightbox 
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
