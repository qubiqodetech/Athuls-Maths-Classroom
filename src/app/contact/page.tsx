import { Metadata } from "next"
import { ContactHero } from "@/src/components/sections/admissions/hero"

export const metadata: Metadata = {
  title: "Contact Us | Athul's Maths Classroom",
  description: "Get in touch with Athul's Maths Classroom.",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <ContactHero />
    </main>
  )
}
