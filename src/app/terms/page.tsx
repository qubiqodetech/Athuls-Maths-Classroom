import { Metadata } from "next"
import { LegalHero } from "@/src/components/legal/LegalHero"
import { TableOfContents } from "@/src/components/legal/TableOfContents"
import { LegalSection } from "@/src/components/legal/LegalSection"
import { LegalNotice } from "@/src/components/legal/LegalNotice"
import { RelatedLinks } from "@/src/components/legal/RelatedLinks"
import { Container } from "@/src/components/layout/container"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Athul's Maths Classroom",
  description: "Please read these Terms of Service carefully before using the Athul's Maths Classroom website or enrolling in our educational programs.",
}

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "enrollment", title: "2. Enrollment and Fees" },
  { id: "conduct", title: "3. Attendance and Conduct" },
  { id: "materials", title: "4. Intellectual Property" },
  { id: "refunds", title: "5. Cancellation & Refunds" },
  { id: "privacy", title: "6. Privacy Policy" },
  { id: "modifications", title: "7. Modifications" },
  { id: "contact", title: "8. Contact Us" },
]

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen relative pb-24">
      <Container>
        <div className="max-w-[900px] mx-auto">
          <LegalHero 
            title="Terms of Service"
            description="Please read these terms carefully before using our services or enrolling in any programs at Athul's Maths Classroom."
            lastUpdated="July 1, 2024"
          />
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Sidebar with Table of Contents */}
            <aside className="w-full lg:w-64 shrink-0 hidden lg:block">
              <TableOfContents sections={sections} />
            </aside>
            
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              
              <LegalSection id="introduction" title="1. Introduction">
                <p>
                  Welcome to Athul's Maths Classroom ("AMC", "we", "our", or "us"). These Terms of Service govern your use of our website, services, and enrollment in our educational programs.
                </p>
                <p>
                  By accessing our website or enrolling in our courses, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                </p>
              </LegalSection>

              <LegalSection id="enrollment" title="2. Enrollment and Fees">
                <p>
                  Enrollment in any AMC course is subject to availability and our acceptance of the student's application. We reserve the right to decline admission without providing a reason.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-[#E31E24]">
                  <li>Fee structures are subject to change before the beginning of a new academic session.</li>
                  <li>All fees must be paid according to the schedule provided at the time of admission.</li>
                  <li>Late payments may result in the suspension of access to classes and study materials.</li>
                </ul>
              </LegalSection>

              <LegalSection id="conduct" title="3. Attendance and Conduct">
                <p>
                  Students are expected to maintain regular attendance and punctuality. Consistent absenteeism without valid reason or prior notification may affect the student's academic progress and standing at AMC.
                </p>
                <p>
                  We maintain a strict code of conduct. Any behavior deemed disruptive, disrespectful, or damaging to the learning environment, staff, or property may result in disciplinary action, including potential dismissal without refund.
                </p>
              </LegalSection>

              <LegalSection id="materials" title="4. Intellectual Property and Study Materials">
                <p>
                  All study materials, worksheets, mock tests, and digital content provided by AMC are the exclusive intellectual property of Athul's Maths Classroom.
                </p>
                <p>
                  These materials are provided solely for the enrolled student's personal educational use. Copying, distributing, sharing, or selling our proprietary materials, whether physically or digitally, is strictly prohibited.
                </p>
              </LegalSection>

              <LegalNotice title="Important Notice Regarding Refunds">
                Our refund policy is outlined at the time of admission. Generally, registration or admission fees are non-refundable. Refunds for tuition fees, if applicable due to cancellation of enrollment before the start of the course, will be processed according to our standard administrative procedures minus any applicable processing charges.
              </LegalNotice>
              
              <LegalSection id="refunds" title="5. Cancellation and Refund Policy">
                <p>
                  Please review the specific refund terms provided to you during the admission process. If a student is dismissed due to a violation of our code of conduct, no refunds will be issued.
                </p>
              </LegalSection>

              <LegalSection id="privacy" title="6. Privacy Policy">
                <p>
                  Your privacy is important to us. Our collection and use of personal information in connection with our services are governed by our <Link href="/privacy-policy" className="text-[#E31E24] hover:underline font-medium">Privacy Policy</Link>. By using our services, you consent to the collection and use of information as detailed therein.
                </p>
              </LegalSection>

              <LegalSection id="modifications" title="7. Modifications to Terms">
                <p>
                  We reserve the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services following any such changes constitutes your acceptance of the revised terms.
                </p>
              </LegalSection>

              <LegalSection id="contact" title="8. Contact Us">
                <p>
                  If you have any questions or concerns regarding these Terms of Service, please reach out to our administrative team.
                </p>
                
                <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#0D1B2A] mb-4">Athul's Maths Classroom</h4>
                  <address className="not-italic text-gray-600 space-y-2">
                    <p>123 Education Hub, Knowledge Park</p>
                    <p>Kerala, India 682001</p>
                    <p className="pt-4">
                      <strong>Email:</strong> <a href="mailto:info@athulsmaths.com" className="text-[#E31E24] hover:underline">info@athulsmaths.com</a>
                    </p>
                    <p>
                      <strong>Phone:</strong> <a href="tel:+919876543210" className="text-[#E31E24] hover:underline">+91 98765 43210</a>
                    </p>
                  </address>
                </div>
              </LegalSection>

              <RelatedLinks />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
