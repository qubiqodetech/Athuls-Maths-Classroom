import { Metadata } from "next"
import { ContactHero } from "@/src/components/sections/admissions/hero"
import { ProcessSection } from "@/src/components/sections/admissions/process"

export const metadata: Metadata = {
  title: "Admissions | Athul's Maths Classroom",
  description: "Join Athul's Maths Classroom. Information on admissions and enrollments.",
}

export default function AdmissionsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <ContactHero />
      <ProcessSection />
    </main>
  )
}
