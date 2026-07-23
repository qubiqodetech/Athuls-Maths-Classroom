import { Metadata } from "next"
import { ContactHero } from "@/src/components/sections/admissions/hero"
import { ContactHub } from "@/src/components/sections/contact/hub"
import { ContactLocation } from "@/src/components/sections/contact/location"
import { ContactFaq } from "@/src/components/sections/contact/faq"
import { ContactSocial } from "@/src/components/sections/contact/social"
import { FinalAdmissionsCTA } from "@/src/components/sections/admissions/cta"

export const metadata: Metadata = {
  title: "Contact Us | Athul's Maths Classroom",
  description: "Get in touch with Athul's Maths Classroom.",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <ContactHero />
      <ContactLocation />
      <ContactHub />
      <ContactFaq />
      <ContactSocial />
      <FinalAdmissionsCTA />
    </main>
  )
}

