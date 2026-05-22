import React from 'react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';

const trustItems = [
  "SECP registered TPA infrastructure",
  "Secure and scalable digital systems",
  "Structured provider network across Pakistan",
  "AI-assisted claims control and fraud detection",
  "Corporate and insurer-ready workflows",
];

const TrustBar = () => {
  return (
    <section
      className="relative border-b border-mentor-line mesh-dark text-white py-12 sm:py-16 md:py-20 grid-dark"
      data-testid="home-trust"
      role="region"
      aria-label="Compliance and Trust"
    >
      <div className="container-edge relative">
        <h2 className="text-mentor-blue text-xs font-bold uppercase tracking-[0.2em]">
          Built for regulated healthcare environments
        </h2>
        <div className="mt-6 grid gap-3 sm:gap-4 md:gap-5 md:grid-cols-5">
          {trustItems.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 transition hover:border-mentor-blue/60 hover:bg-white/[0.05]"
            >
              <div className="h-1 w-8 bg-mentor-blue" />
              <div className="mt-3 text-sm font-semibold leading-snug">
                {t}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-white/70">
          Mentor TPA is built to serve healthcare payers and healthcare users
          through structured processes, digital reporting, and high-trust
          operational systems.
        </p>
      </div>
    </section>
  );
};

export default React.memo(TrustBar);

