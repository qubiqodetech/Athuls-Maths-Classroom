import { StoryContent } from "./StoryContent";
import { StoryTimeline } from "./StoryTimeline";
import { StoryQuote } from "./StoryQuote";
import { MilestoneGrid } from "./MilestoneGrid";
import { DecorativeDivider } from "./DecorativeDivider";

export function OurStory() {
  return (
    <section id="our-journey" className="py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-16 lg:gap-8 items-start">
          <StoryContent />
          
          <div className="lg:sticky lg:top-32 relative">
            {/* Soft decorative background for timeline */}
            <div className="absolute inset-0 bg-gray-50/50 rounded-[3rem] -z-10 transform -rotate-1 scale-105" />
            <div className="absolute inset-0 bg-white rounded-[3rem] shadow-xl shadow-gray-200/20 border border-gray-100 -z-10" />
            <div className="p-8 lg:p-10">
              <StoryTimeline />
            </div>
          </div>
        </div>

        <DecorativeDivider />
        
        <StoryQuote />
        
        <MilestoneGrid />
      </div>
    </section>
  );
}
