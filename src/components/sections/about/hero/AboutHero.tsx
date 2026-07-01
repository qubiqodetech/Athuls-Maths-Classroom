import { AboutHeroContent } from "./AboutHeroContent";
import { AboutHeroImage } from "./AboutHeroImage";
import { ScrollIndicator } from "./ScrollIndicator";

export function AboutHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#FAFAFA] overflow-hidden pt-20 lg:pt-0">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#0D1B2A]/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E31E24]/[0.02] via-transparent to-transparent opacity-100 pointer-events-none" />
      
      {/* Abstract curved shapes */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      {/* Minimal grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="about-hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#0D1B2A]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-hero-grid)" />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl pb-24 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(85vh-5rem)]">
          <AboutHeroContent />
          <AboutHeroImage />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
