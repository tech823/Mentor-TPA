import React from 'react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';

const problems = [
  {
    t: "No visibility",
    d: "Most employers and insurers cannot see where healthcare spend is going until after the money is already spent.",
  },
  {
    t: "Too much manual work",
    d: "Claims processing, provider coordination, authorizations, reimbursements, and employee support often sit on heavy manual workflows.",
  },
  {
    t: "Leakage and inefficiency",
    d: "Overbilling, duplicate claims, weak validation, inconsistent rates, and poor controls quietly increase healthcare cost.",
  },
  {
    t: "Poor member experience",
    d: "Employees and patients face delayed approvals, upfront payments, unclear coverage, and stressful healthcare journeys.",
  },
];

const ProblemSection = () => {
  return (
    <section 
      className="py-20 md:py-28" 
      data-testid="home-problem"
      role="region"
      aria-label="The Problem"
    >
      <div className="container-edge">
        <Reveal className="max-w-3xl">
          <Eyebrow>The market problem</Eyebrow>
          <h2 className="display-2 mt-5">
            Healthcare administration is still broken.
          </h2>
          <p className="lead mt-5">
            Across Pakistan, healthcare administration remains fragmented
            across employers, insurers, providers, and patients. Most systems
            still depend on manual coordination, disconnected providers,
            paperwork-heavy claims, low visibility, and delayed decisions. The
            result is higher cost, operational burden, financial leakage, and
            poor member experience.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((c, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="card-hard tilt-card p-7 h-full">
                <div className="eyebrow">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight">
                  {c.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mentor-muted">
                  {c.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="container-edge mx-auto mt-10 max-w-3xl px-0 text-sm text-mentor-muted">
          Mentor Third-Party Administrator (TPA) exists to replace fragmented legacy systems with one
          integrated healthcare operating layer.
        </p>
      </div>
    </section>
  );
};

export default React.memo(ProblemSection);
