import { Metadata } from "next"
import { ContactHero } from "@/src/components/sections/admissions/hero"
import { ContactHub } from "@/src/components/sections/contact/hub"
import { VisitSection } from "@/src/components/sections/contact/visit"
import { FinalAdmissionsCTA } from "@/src/components/sections/admissions/cta"

export const metadata: Metadata = {
  title: "Contact Us | Athul's Maths Classroom",
  description: "Get in touch with Athul's Maths Classroom.",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <ContactHero />
      <ContactHub />
      <VisitSection />
      <FinalAdmissionsCTA />
    </main>
  )
}

