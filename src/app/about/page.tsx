import { Metadata } from "next"
import { AboutHero } from "@/src/components/sections/about/hero"
import { OurStory } from "@/src/components/sections/about/story"
import { TeachingPhilosophy } from "@/src/components/sections/about/teaching-philosophy"
import { PurposeSection } from "@/src/components/sections/about/purpose"
import { JourneySection } from "@/src/components/sections/about/journey"
import { AMCDifference } from "@/src/components/sections/about/difference"
import { LearningEnvironment } from "@/src/components/sections/about/learning-environment"
import { RecognitionSection } from "@/src/components/sections/about/recognition"

export const metadata: Metadata = {
  title: "About Us | Athul's Maths Classroom",
  description: "Learn more about Athul's Maths Classroom, our mission, and the philosophy behind our concept-based mathematics teaching.",
}

export default function AboutPage() {
  return (
    <main className="flex-1 w-full bg-white">
      <AboutHero />
      <OurStory />
      <TeachingPhilosophy />
      <PurposeSection />
      <JourneySection />
      <AMCDifference />
      <LearningEnvironment />
      <RecognitionSection />
    </main>
  )
}




