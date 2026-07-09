import { Metadata } from "next"
import { Shield, Phone, GraduationCap, FileQuestion } from "lucide-react"
import { ReadingProgress } from "@/src/components/legal/ReadingProgress"
import { LegalHero } from "@/src/components/legal/LegalHero"
import { TableOfContents } from "@/src/components/legal/TableOfContents"
import { TermsSection } from "@/src/components/legal/TermsSection"
import { LegalNotice } from "@/src/components/legal/LegalNotice"
import { RelatedLinks } from "@/src/components/legal/RelatedLinks"
import { Container } from "@/src/components/layout/container"

export const metadata: Metadata = {
  title: "Terms & Conditions | Athul's Maths Classroom",
  description: "Please read these Terms & Conditions carefully before using the Athul's Maths Classroom website or enrolling in our educational programs.",
}

const sections = [
  { id: "acceptance-of-terms", title: "Acceptance of Terms" },
  { id: "use-of-website", title: "Use of Website" },
  { id: "admissions", title: "Admissions" },
  { id: "courses", title: "Courses" },
  { id: "payments", title: "Payments" },
  { id: "student-responsibilities", title: "Student Responsibilities" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "website-content", title: "Website Content" },
  { id: "disclaimer", title: "Disclaimer" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "privacy", title: "Privacy" },
  { id: "changes-to-terms", title: "Changes to Terms" },
  { id: "contact-information", title: "Contact Information" },
]

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white min-h-screen relative pb-24">
      <ReadingProgress />
      
      <Container>
        <div className="max-w-[900px] mx-auto">
          <LegalHero 
            title="Terms & Conditions"
            description="Please read these Terms & Conditions carefully before using the Athul's Maths Classroom website or enrolling in our educational programs."
            lastUpdated="October 15, 2023"
          />
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Sidebar with Table of Contents */}
            <aside className="w-full lg:w-64 shrink-0 hidden lg:block">
              <TableOfContents sections={sections} />
            </aside>
            
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              
              <TermsSection id="acceptance-of-terms" title="Acceptance of Terms">
                <p>
                  By accessing and using the Athul's Maths Classroom website (athulsmathsclassroom.com) and our educational services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </TermsSection>

              <TermsSection id="use-of-website" title="Use of Website">
                <p>
                  You agree to use this website only for lawful purposes, and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content or disrupting the normal flow of dialogue within this website.
                </p>
              </TermsSection>
              
              <TermsSection id="admissions" title="Admissions">
                <p>
                  Admission to Athul's Maths Classroom programs is subject to availability and our admission criteria. We reserve the right to accept or reject any application for admission without providing a reason.
                </p>
                <p>
                  Providing false or misleading information during the admission process may result in immediate cancellation of enrollment without refund.
                </p>
              </TermsSection>

              <TermsSection id="courses" title="Courses">
                <p>
                  We strive to ensure that all course information is accurate and up to date. However, we reserve the right to modify course structures, timings, and faculty assignments as deemed necessary for academic or operational reasons.
                </p>
              </TermsSection>
              
              <LegalNotice title="Important Notice Regarding Payments">
                All fees must be paid in full by the due dates specified during the admission process. Late payments may attract a penalty fee. Fees once paid are non-refundable unless specifically stated in our refund policy.
              </LegalNotice>

              <TermsSection id="payments" title="Payments">
                <p>
                  We accept various forms of payment. By providing a payment method, you represent and warrant that you are authorized to use the designated payment method and that you authorize us (or our third-party payment processor) to charge your payment method for the total amount of your purchase (including any applicable taxes and other charges).
                </p>
              </TermsSection>

              <TermsSection id="student-responsibilities" title="Student Responsibilities">
                <p>
                  Students are expected to maintain a high standard of conduct and discipline. Any behavior that disrupts the learning environment, including harassment, cheating, or disrespect towards faculty or peers, will not be tolerated and may lead to disciplinary action, including suspension or expulsion.
                </p>
              </TermsSection>

              <TermsSection id="intellectual-property" title="Intellectual Property">
                <p>
                  All study materials, notes, assignments, and digital content provided by Athul's Maths Classroom are the exclusive property of AMC and are protected by copyright laws. These materials are provided for personal, non-commercial use only and may not be reproduced, distributed, or shared without explicit written permission.
                </p>
              </TermsSection>
              
              <TermsSection id="website-content" title="Website Content">
                <p>
                  The content on this website is for your general information and use only. It is subject to change without notice. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.
                </p>
              </TermsSection>
              
              <TermsSection id="disclaimer" title="Disclaimer">
                <p>
                  The materials on Athul's Maths Classroom's website are provided on an 'as is' basis. Athul's Maths Classroom makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </TermsSection>

              <TermsSection id="limitation-of-liability" title="Limitation of Liability">
                <p>
                  In no event shall Athul's Maths Classroom or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Athul's Maths Classroom's website, even if Athul's Maths Classroom or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </TermsSection>
              
              <TermsSection id="privacy" title="Privacy">
                <p>
                  Your use of our website and services is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.
                </p>
              </TermsSection>
              
              <TermsSection id="changes-to-terms" title="Changes to Terms">
                <p>
                  Athul's Maths Classroom reserves the right, in its sole discretion, to change the Terms under which the website and services are offered. The most current version of the Terms will supersede all previous versions. We encourage you to periodically review the Terms to stay informed of our updates.
                </p>
              </TermsSection>
              
              <TermsSection id="contact-information" title="Contact Information">
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                
                <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#0D1B2A] mb-4">Athul's Maths Classroom</h4>
                  <address className="not-italic text-gray-600 space-y-2">
                    <p>123 Education Hub, Knowledge Park</p>
                    <p>Kerala, India 682001</p>
                    <p className="pt-4">
                      <strong>Email:</strong> <a href="mailto:info@athulsmathsclassroom.com" className="text-[#E31E24] hover:underline">info@athulsmathsclassroom.com</a>
                    </p>
                    <p>
                      <strong>Phone:</strong> <a href="tel:+919876543210" className="text-[#E31E24] hover:underline">+91 98765 43210</a>
                    </p>
                  </address>
                </div>
              </TermsSection>

              <RelatedLinks page="terms" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
