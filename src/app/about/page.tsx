import { Metadata } from "next"
import { AboutHero } from "@/src/components/sections/about/hero"
import { OurStory } from "@/src/components/sections/about/story"
import { TeachingPhilosophy } from "@/src/components/sections/about/teaching-philosophy"
import { PurposeSection } from "@/src/components/sections/about/purpose"

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
    </main>
  )
}



