import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admissions",
  description: "Join Athul's Maths Classroom. Information on admissions and enrollments.",
}

export default function AdmissionsPage() {
  return (
    <div className="container mx-auto py-24 flex items-center justify-center min-h-[50vh]">
      <h1 className="font-display text-4xl font-bold tracking-tight">Admissions</h1>
    </div>
  )
}
