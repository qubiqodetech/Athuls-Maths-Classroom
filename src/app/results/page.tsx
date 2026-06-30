import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Results",
  description: "Discover the academic success stories and results of our students.",
}

export default function ResultsPage() {
  return (
    <div className="container mx-auto py-24 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-display text-4xl font-bold tracking-tight">Results Showcase</h1>
    </div>
  )
}
