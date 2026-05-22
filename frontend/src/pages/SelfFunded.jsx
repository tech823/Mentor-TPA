import React, { Suspense, lazy } from 'react';

// Lazy load sections below the fold
const SFHeroSection = lazy(() => import('../components/sections/self-funded/SFHeroSection'));
const SFChallengeSection = lazy(() => import('../components/sections/self-funded/SFChallengeSection'));
const SFSolutionSection = lazy(() => import('../components/sections/self-funded/SFSolutionSection'));
const SFNetworkSection = lazy(() => import('../components/sections/self-funded/SFNetworkSection'));
const SFExperienceSection = lazy(() => import('../components/sections/self-funded/SFExperienceSection'));
const SFOutcomeSection = lazy(() => import('../components/sections/self-funded/SFOutcomeSection'));
const CTABand = lazy(() => import('../components/shared/CTABand'));

/**
 * SelfFunded Page - Orchestrates sections for the Self-Funded companies solution.
 */
const SelfFunded = () => {
  return (
    <main className="page-transition">
      <Suspense fallback={<div className="min-h-screen bg-mentor-surface animate-pulse" />}>
        <SFHeroSection />
        <SFChallengeSection />
        <SFSolutionSection />
        <SFNetworkSection />
        <SFExperienceSection />
        <SFOutcomeSection />
        <CTABand
          eyebrow="Get Started"
          headline="Take control of your healthcare costs today."
          subline="Request a personalized cost assessment to see how much your organization can save with Mentor TPA."
          testId="sf-cta"
        />
      </Suspense>
    </main>
  );
};

export default React.memo(SelfFunded);


