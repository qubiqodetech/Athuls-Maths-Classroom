import { FounderImage } from "./FounderImage";
import { FounderStory } from "./FounderStory";
import { FounderCTA } from "./FounderCTA";

export function FounderSection() {
  return (
    <section className="relative py-12 lg:py-16 bg-white overflow-hidden border-b border-gray-100">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#E31E24]/5 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0D1B2A 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-[1440px]">
        <div className="grid lg:grid-cols-[42%_50%] gap-12 lg:gap-24 items-center justify-between mb-16 lg:mb-0">
          <div className="order-2 lg:order-1">
            <FounderImage />
          </div>
          <div className="order-1 lg:order-2">
            <FounderStory />
          </div>
        </div>
        
        <FounderCTA />
      </div>
    </section>
  );
}
