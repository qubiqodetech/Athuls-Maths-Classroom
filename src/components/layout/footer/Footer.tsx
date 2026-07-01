import { FooterCTA } from "./FooterCTA";
import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterPrograms } from "./FooterPrograms";
import { FooterContact } from "./FooterContact";
import { FooterInfoBar } from "./FooterInfoBar";
import { FooterBottom } from "./FooterBottom";
import { FooterSignature } from "./FooterSignature";

export function Footer() {
  return (
    <footer className="w-full bg-[#0D1B2A] flex flex-col font-sans">
      {/* Layer 1: Final Call To Action */}
      <FooterCTA />
      
      {/* Layer 2: Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-24 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <FooterBrand />
          <FooterLinks />
          <FooterPrograms />
          <FooterContact />
        </div>
      </div>
      
      {/* Layer 3: Quick Information Bar */}
      <FooterInfoBar />
      
      {/* Layer 4: Bottom Legal Section */}
      <FooterBottom />
      
      {/* Layer 5: Signature Strip */}
      <FooterSignature />
    </footer>
  );
}
