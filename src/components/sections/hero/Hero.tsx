import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-white flex flex-col lg:justify-center">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E31E24]/5 via-transparent to-transparent opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0D1B2A]/5 via-transparent to-transparent opacity-70" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-16 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
