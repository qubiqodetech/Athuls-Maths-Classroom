import { SuccessHeading } from "./SuccessHeading";
import { FeaturedStudent } from "./FeaturedStudent";
import { StudentGrid } from "./StudentGrid";
import { AchievementStats } from "./AchievementStats";
import { AchievementTimeline } from "./AchievementTimeline";
import { RecognitionWall } from "./RecognitionWall";
import { ParentQuote } from "./ParentQuote";
import { SuccessCTA } from "./SuccessCTA";

export function StudentSuccess() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-100">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-50/40 via-transparent to-transparent opacity-60 pointer-events-none" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="success-lines" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 60 M 0 0 L 60 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#0D1B2A]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#success-lines)" />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <SuccessHeading />
        <FeaturedStudent />
        <StudentGrid />
        <AchievementStats />
        <AchievementTimeline />
      </div>
      
      <RecognitionWall />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-7xl">
        <ParentQuote />
        <SuccessCTA />
      </div>
    </section>
  );
}
