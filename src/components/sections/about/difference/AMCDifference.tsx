"use client";

import { SectionHeading } from "./SectionHeading";
import { ComparisonPanel } from "./ComparisonPanel";
import { FeatureHighlights } from "./FeatureHighlights";
import { CommitmentBanner } from "./CommitmentBanner";
import { ConfidenceMetrics } from "./ConfidenceMetrics";
import { PrincipleChips } from "./PrincipleChips";
import { SignatureStatement } from "./SignatureStatement";

export function AMCDifference() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-50/20 via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      {/* Subtle abstract lines */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-gray-50 rounded-full -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] border border-gray-50 rounded-full translate-y-1/3 -translate-x-1/4 -z-10" />
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <SectionHeading />
        <ComparisonPanel />
        <FeatureHighlights />
        <CommitmentBanner />
        <ConfidenceMetrics />
        <PrincipleChips />
        <SignatureStatement />
      </div>
    </section>
  );
}
