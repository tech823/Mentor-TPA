import React, { Suspense, lazy } from "react";
import HeroSection from "../components/sections/home/HeroSection";
import TrustBar from "../components/sections/home/TrustBar";

// Lazy load sections below the fold
const ProblemSection = lazy(() => import("../components/sections/home/ProblemSection"));
const ServicesSection = lazy(() => import("../components/sections/home/ServicesSection"));
const StakeholderSection = lazy(() => import("../components/sections/home/StakeholderSection"));
const NetworkStrengthSection = lazy(() => import("../components/sections/home/NetworkStrengthSection"));
const AILayerSection = lazy(() => import("../components/sections/home/AILayerSection"));
const ValueSection = lazy(() => import("../components/sections/home/ValueSection"));
const ComparisonSection = lazy(() => import("../components/sections/home/ComparisonSection"));
const CTABand = lazy(() => import("../components/shared/CTABand"));

const SectionLoader = () => <div className="h-[400px] bg-mentor-surface/30 animate-pulse" />;

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      
      <Suspense fallback={<SectionLoader />}>
        <ProblemSection />
        <ServicesSection />
        <StakeholderSection />
        <NetworkStrengthSection />
        <AILayerSection />
        <ValueSection />
        <ComparisonSection />
        <CTABand
          eyebrow="Final CTA"
          headline="Start your healthcare transformation."
          subline="Whether you are evaluating self-funded healthcare, insurance-side claims infrastructure, or a better healthcare access model for your members, Mentor Third-Party Administrator (TPA) can help you move from fragmented legacy systems to a connected orchestration layer."
          testId="home-cta"
        />
      </Suspense>
    </>
  );
}
