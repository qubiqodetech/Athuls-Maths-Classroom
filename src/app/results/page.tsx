import { Metadata } from "next"
import { ResultsHero } from "@/src/components/sections/results/hero"
import { ResultsShowcase } from "@/src/components/sections/results/showcase"

export const metadata: Metadata = {
  title: "Results",
  description: "Discover the academic success stories and results of our students.",
}

export default function ResultsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <ResultsHero />
      <ResultsShowcase />
    </main>
  )
}
