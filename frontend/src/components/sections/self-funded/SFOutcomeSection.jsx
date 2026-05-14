import React from 'react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';
import BulletList from '../../shared/BulletList';

const SFOutcomeSection = () => {
  return (
    <>
      <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>Real-time visibility</Eyebrow>
            <h2 className="display-2 mt-5 max-w-3xl">
              Finally, see where every healthcare rupee goes.
            </h2>
            <p className="lead mt-5 text-mentor-muted max-w-2xl">
              Gain granular insights into your corporate healthcare spending with data that helps you make better financial decisions.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Departmental spending",
              "Group-level utilization",
              "Major cost drivers",
              "Claim category analysis",
              "Emerging health trends",
            ].map((insight, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative flex flex-col justify-end rounded-2xl border border-mentor-line bg-white p-6 h-full transition hover:border-mentor-blue">
                  <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-mentor-blue opacity-0 transition group-hover:opacity-100" />
                  <span className="text-base font-bold text-mentor-black">{insight}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-edge grid gap-12 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Best fit companies</Eyebrow>
            <h2 className="display-2 mt-5">Is your organization a fit?</h2>
            <div className="mt-8">
              <BulletList items={[
                "Organizations with 200+ employees",
                "Companies facing 15%+ annual cost increases",
                "Employers seeking complete cost visibility",
                "Firms frustrated by reimbursement complexity",
                "Teams ready for a structured healthcare system"
              ]} />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <Eyebrow>Implementation</Eyebrow>
            <h2 className="display-2 mt-5">Fast deployment.</h2>
            <div className="mt-8 space-y-4">
              {[
                { s: "Onboarding", d: "Client requirements and policy setup (Week 1)" },
                { s: "Enrollment", d: "Employee data ingestion and card issuance (Week 2)" },
                { s: "System Go-Live", d: "Platform access and provider activation (Week 3)" },
                { s: "Active Support", d: "Dedicated relationship management (Continuous)" },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-mentor-line bg-mentor-surface/50">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mentor-black text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-mentor-black">{step.s}</div>
                    <div className="text-xs text-mentor-muted">{step.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default React.memo(SFOutcomeSection);
