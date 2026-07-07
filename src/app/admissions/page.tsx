import { Metadata } from "next"
import { ContactHero } from "@/src/components/sections/admissions/hero"
import { SmartAdmissionForm } from "@/src/components/forms/smart-admission-form"
import { FinalAdmissionsCTA } from "@/src/components/sections/admissions/cta"

export const metadata: Metadata = {
  title: "Admissions | Athul's Maths Classroom",
  description: "Join Athul's Maths Classroom. Information on admissions and enrollments.",
}

export default function AdmissionsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-light-gray">
      <ContactHero />
      <section className="py-24 px-4 md:px-6 relative z-10 -mt-10" id="process">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-primary-navy mb-4">
              Smart Admission Process
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Complete your admission application in less than 2 minutes. Our smart system will guide you through the process and recommend the best batch for your learning goals.
            </p>
          </div>
          <SmartAdmissionForm />
        </div>
      </section>
      <FinalAdmissionsCTA />
    </main>
  )
}

