import { Metadata } from "next"
import { FAQSection } from "@/src/components/sections/courses/faq/FAQSection"
import { BreadcrumbSchema } from "@/src/components/seo/BreadcrumbSchema"

export const metadata: Metadata = {
  title: "FAQ | Athul's Maths Classroom",
  description: "Frequently asked questions about Athul's Maths Classroom. Find answers to common queries about courses, admissions, and more.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col w-full overflow-hidden">
      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "https://athulsmathsclassroom.com" },
          { name: "FAQ", item: "https://athulsmathsclassroom.com/faq" }
        ]} 
      />
      <FAQSection />
    </main>
  )
}

