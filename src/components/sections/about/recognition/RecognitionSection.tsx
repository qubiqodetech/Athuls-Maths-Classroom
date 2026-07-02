import { Container } from "@/src/components/layout/container"
import { SectionHeading } from "./SectionHeading"
import { AchievementStats } from "./AchievementStats"
import { RecognitionGrid } from "./RecognitionGrid"
import { AwardsTimeline } from "./AwardsTimeline"
import { TrustBanner } from "./TrustBanner"
import { RecognitionGallery } from "./RecognitionGallery"
import { AppreciationQuote } from "./AppreciationQuote"
import { FutureCommitment } from "./FutureCommitment"

export function RecognitionSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-64 w-[500px] h-[500px] bg-gray-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="absolute bottom-[20%] -right-64 w-[600px] h-[600px] bg-red-50/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <Container className="relative z-10">
        <SectionHeading />
        <AchievementStats />
        <RecognitionGrid />
        <TrustBanner />
        <AwardsTimeline />
        <RecognitionGallery />
        <AppreciationQuote />
        <FutureCommitment />
      </Container>
    </section>
  )
}
