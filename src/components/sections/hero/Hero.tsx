import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-32 pb-16 overflow-hidden bg-[#FAFAFA] flex flex-col items-center">
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#E31E24]/10 rounded-full blur-[120px] opacity-70 pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#0D1B2A]/5 rounded-full blur-[150px] opacity-70 pointer-events-none" />
      
      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
        }} 
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl flex flex-col items-center justify-center mt-4 md:mt-8">
        <HeroContent />
        <HeroImage />
      </div>

      <ScrollIndicator />
    </section>
  );
}
