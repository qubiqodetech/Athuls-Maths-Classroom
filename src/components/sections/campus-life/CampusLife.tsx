import { CampusHeading } from "./CampusHeading";
import { EditorialGallery } from "./EditorialGallery";
import { FeaturedEvent } from "./FeaturedEvent";
import { LearningTimeline } from "./LearningTimeline";
import { GalleryCTA } from "./GalleryCTA";

export function CampusLife() {
  return (
    <section className="relative py-12 lg:py-16 bg-white overflow-hidden border-b border-gray-100">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-50 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      {/* Minimal decorative shapes */}
      <div className="absolute top-40 right-10 w-64 h-64 border border-gray-100 rounded-full opacity-50 pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-96 h-96 border border-gray-50 rounded-full opacity-50 pointer-events-none" />

      <div className="container mx-auto relative z-10 w-full max-w-7xl">
        <CampusHeading />
        
        <EditorialGallery />
        
        <div className="px-4">
          <FeaturedEvent />
          <LearningTimeline />
          <GalleryCTA />
        </div>
      </div>
    </section>
  );
}
