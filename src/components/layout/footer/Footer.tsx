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
    <footer className="w-full bg-[#050816] flex flex-col font-sans relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#E31E24]/50 to-transparent absolute top-0 left-0 z-20" />

      {/* Layer 1: Final Call To Action */}
      <FooterCTA />
      
      {/* Layer 2: Quick Information Bar */}
      <FooterInfoBar />
      
      {/* Layer 3: Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <FooterBrand />
          </div>
          <div className="lg:col-span-3">
            <FooterLinks />
          </div>
          <div className="lg:col-span-2">
            <FooterPrograms />
          </div>
          <div className="lg:col-span-3">
            <FooterContact />
          </div>
        </div>
        
        {/* Layer 4: Bottom Legal Section */}
        <FooterBottom />
      </div>
      
      {/* Layer 5: Signature Strip */}
      <FooterSignature />
    </footer>
  );
}
