import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team at Athul's Maths Classroom.",
}

export default function CareersPage() {
  return (
    <div className="container mx-auto py-24 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-display text-4xl font-bold tracking-tight">Careers</h1>
    </div>
  )
}
