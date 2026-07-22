import { Metadata } from "next"
import { CareersHero } from "@/src/components/sections/careers/CareersHero"
import { WhyJoinUs } from "@/src/components/sections/careers/WhyJoinUs"
import { OpenPositions } from "@/src/components/sections/careers/OpenPositions"

export const metadata: Metadata = {
  title: "Careers | Athul's Maths Classroom",
  description: "Join our team at Athul's Maths Classroom. Shape the future of education with us.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <CareersHero />
      <WhyJoinUs />
      <OpenPositions />
    </main>
  )
}
