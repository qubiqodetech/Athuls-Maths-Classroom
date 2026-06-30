import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tutors",
  description: "Meet our dedicated tutors who help students excel.",
}

export default function TutorsPage() {
  return (
    <div className="container mx-auto py-24 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-display text-4xl font-bold tracking-tight">Tutors</h1>
    </div>
  )
}
