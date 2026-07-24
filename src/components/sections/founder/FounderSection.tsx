import { FounderImage } from "./FounderImage";
import { FounderStory } from "./FounderStory";
import { FounderStats } from "./FounderStats";
import { FounderCTA } from "./FounderCTA";

export function FounderSection() {
  return (
    <section className="py-24 md:py-32 bg-[#050816] relative overflow-hidden text-white">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0D1B2A] to-transparent opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#E31E24]/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Image Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FounderImage />
          </div>
          
          {/* Content Side */}
          <div className="lg:col-span-7 lg:pl-12 order-1 lg:order-2 flex flex-col justify-center">
            <FounderStory />
          </div>
        </div>
      </div>
    </section>
  );
}
