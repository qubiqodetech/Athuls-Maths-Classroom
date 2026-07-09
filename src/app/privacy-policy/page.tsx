import { Metadata } from "next"
import { ReadingProgress } from "@/src/components/legal/ReadingProgress"
import { LegalHero } from "@/src/components/legal/LegalHero"
import { TableOfContents } from "@/src/components/legal/TableOfContents"
import { LegalSection } from "@/src/components/legal/LegalSection"
import { LegalNotice } from "@/src/components/legal/LegalNotice"
import { RelatedLinks } from "@/src/components/legal/RelatedLinks"
import { Container } from "@/src/components/layout/container"

export const metadata: Metadata = {
  title: "Privacy Policy | Athul's Maths Classroom",
  description: "Learn how Athul's Maths Classroom collects, uses, stores, and protects your information while you use our website and services.",
}

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "third-party", title: "Third-Party Services" },
  { id: "data-security", title: "Data Security" },
  { id: "children-privacy", title: "Children's Privacy" },
  { id: "your-rights", title: "Your Rights" },
  { id: "contact", title: "Contact Information" },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen relative pb-24">
      <ReadingProgress />
      
      <Container>
        <div className="max-w-[900px] mx-auto">
          <LegalHero 
            title="Privacy Policy"
            description="Learn how Athul's Maths Classroom collects, uses, stores, and protects your information while you use our website and services."
            lastUpdated="October 15, 2023"
          />
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Sidebar with Table of Contents */}
            <aside className="w-full lg:w-64 shrink-0 hidden lg:block">
              <TableOfContents sections={sections} />
            </aside>
            
            {/* Mobile TOC - Optional, simplified for mobile if needed, or just let them scroll */}
            
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              
              <LegalSection id="introduction" title="Introduction">
                <p>
                  At Athul's Maths Classroom ("AMC", "we", "our", or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (athulsmathsclassroom.com) or use our educational services.
                </p>
                <p>
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </LegalSection>
              
              <LegalSection id="information-we-collect" title="Information We Collect">
                <p>
                  We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                </p>
                
                <h3 className="text-xl font-semibold text-[#0D1B2A] mt-8 mb-4">Personal Data</h3>
                <p>
                  Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
                </p>
                
                <h3 className="text-xl font-semibold text-[#0D1B2A] mt-8 mb-4">Derivative Data</h3>
                <p>
                  Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                </p>
              </LegalSection>
              
              <LegalSection id="how-we-use" title="How We Use Information">
                <p>
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-[#E31E24]">
                  <li>Create and manage your account.</li>
                  <li>Email you regarding your account or order.</li>
                  <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                  <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                  <li>Increase the efficiency and operation of the Site.</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                  <li>Notify you of updates to the Site.</li>
                  <li>Offer new products, services, and/or recommendations to you.</li>
                  <li>Perform other business activities as needed.</li>
                </ul>
              </LegalSection>

              <LegalNotice title="Important Note on Data Sharing">
                We do not sell, trade, or rent your personally identifiable information to others. We may share generic aggregated demographic information not linked to any personally identifiable information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
              </LegalNotice>
              
              <LegalSection id="cookies" title="Cookies & Tracking">
                <p>
                  We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology.
                </p>
                <p>
                  Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
                </p>
              </LegalSection>
              
              <LegalSection id="third-party" title="Third-Party Services">
                <p>
                  The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.
                </p>
                <p>
                  Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website.
                </p>
              </LegalSection>
              
              <LegalSection id="data-security" title="Data Security">
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </LegalSection>
              
              <LegalSection id="children-privacy" title="Children's Privacy">
                <p>
                  We are especially committed to protecting the privacy of children. Our services are directed towards students, but we do not knowingly collect personal information from children under the age of 13 without the consent of a parent or guardian. 
                </p>
                <p>
                  If you become aware of any data we have collected from children under age 13 without parental consent, please contact us using the contact information provided below.
                </p>
              </LegalSection>
              
              <LegalSection id="your-rights" title="Your Rights">
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-[#E31E24]">
                  <li>The right to access the personal information we hold about you.</li>
                  <li>The right to request that we correct any inaccurate personal information.</li>
                  <li>The right to request that we delete your personal information.</li>
                  <li>The right to object to our processing of your personal information.</li>
                  <li>The right to request the restriction of our processing of your personal information.</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the information provided in the Contact Information section.
                </p>
              </LegalSection>
              
              <LegalSection id="contact" title="Contact Information">
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                
                <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#0D1B2A] mb-4">Athul's Maths Classroom</h4>
                  <address className="not-italic text-gray-600 space-y-2">
                    <p>123 Education Hub, Knowledge Park</p>
                    <p>Kerala, India 682001</p>
                    <p className="pt-4">
                      <strong>Email:</strong> <a href="mailto:privacy@athulsmathsclassroom.com" className="text-[#E31E24] hover:underline">privacy@athulsmathsclassroom.com</a>
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
