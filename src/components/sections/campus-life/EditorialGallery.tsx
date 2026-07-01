"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GALLERY_IMAGES, HIGHLIGHT_CARDS } from "./constants";
import { GalleryCard } from "./GalleryCard";
import { HighlightCard } from "./HighlightCard";
import { Lightbox } from "./Lightbox";
import { GalleryImageType } from "./types";

export function EditorialGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImageType | null>(null);
  
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  return (
    <>
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:flex flex-col gap-6 lg:gap-8 max-w-7xl mx-auto mb-24 px-4 relative z-10">
        
        {/* Row 1: Large Featured */}
        <div className="w-full h-[500px] lg:h-[600px]">
          <GalleryCard 
            image={GALLERY_IMAGES[0]} 
            onOpenLightbox={setSelectedImage} 
            className="w-full h-full"
            sizes="100vw"
          />
        </div>
        
        {/* Row 2: Two supporting */}
        <div className="grid grid-cols-2 gap-6 lg:gap-8 h-[400px]">
          <GalleryCard 
            image={GALLERY_IMAGES[1]} 
            onOpenLightbox={setSelectedImage} 
            className="h-full" 
          />
          <GalleryCard 
            image={GALLERY_IMAGES[2]} 
            onOpenLightbox={setSelectedImage} 
            className="h-full" 
          />
        </div>
        
        {/* Row 3: Highlight Cards */}
        <div className="grid grid-cols-3 gap-6 lg:gap-8 my-8">
          {HIGHLIGHT_CARDS.map((card, index) => (
            <HighlightCard key={card.id} card={card} index={index} />
          ))}
        </div>
        
        {/* Row 4: Panoramic */}
        <div className="w-full h-[350px] lg:h-[450px]">
          <GalleryCard 
            image={GALLERY_IMAGES[3]} 
            onOpenLightbox={setSelectedImage} 
            className="w-full h-full"
            sizes="100vw"
          />
        </div>
        
        {/* Row 5: Three cards */}
        <div className="grid grid-cols-3 gap-6 lg:gap-8 h-[350px]">
          <GalleryCard 
            image={GALLERY_IMAGES[4]} 
            onOpenLightbox={setSelectedImage} 
            className="h-full"
            sizes="33vw"
          />
          <GalleryCard 
            image={GALLERY_IMAGES[5]} 
            onOpenLightbox={setSelectedImage} 
            className="h-full"
            sizes="33vw"
          />
          <GalleryCard 
            image={GALLERY_IMAGES[6]} 
            onOpenLightbox={setSelectedImage} 
            className="h-full"
            sizes="33vw"
          />
        </div>
      </div>

      {/* Mobile Swipeable Gallery */}
      <div className="md:hidden overflow-hidden mb-16 relative z-10 px-4 -mx-4" ref={emblaRef}>
        <div className="flex gap-4 cursor-grab active:cursor-grabbing">
          {GALLERY_IMAGES.map((img) => (
            <div key={img.id} className="flex-[0_0_85%] min-w-0 h-[400px]">
              <GalleryCard 
                image={img} 
                onOpenLightbox={setSelectedImage} 
                className="w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Highlight Cards */}
      <div className="md:hidden flex flex-col gap-4 px-4 mb-16">
        {HIGHLIGHT_CARDS.map((card, index) => (
          <HighlightCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </>
  );
}
