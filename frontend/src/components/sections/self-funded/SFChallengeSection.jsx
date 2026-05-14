import React from 'react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';
import BulletList from '../../shared/BulletList';

const SFChallengeSection = () => {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-edge grid gap-10 md:grid-cols-2">
          <Reveal>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="display-2 mt-5">
              The problem with corporate healthcare today.
            </h2>
            <p className="lead mt-5 text-mentor-muted">
              Most companies are spending more on healthcare every year while
              seeing less control, less visibility, and more employee
              dissatisfaction. Insurance models increase cost over time.
            </p>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div className="rounded-2xl border border-mentor-line p-8 glass-surface">
              <BulletList items={[
                "Rising healthcare costs without clear ROI",
                "Zero visibility into actual claim data",
                "No control over individual provider spending",
                "Heavy administrative burden on HR teams",
                "Weak oversight on fraudulent claims",
                "Poor overall employee satisfaction"
              ]} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
        <div className="container-edge">
          <Reveal className="max-w-3xl">
            <Eyebrow>Why current models fail</Eyebrow>
            <h2 className="display-2 mt-5">
              Legacy healthcare models are fundamentally broken.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-mentor-line bg-white p-8 h-full shadow-sm transition hover:shadow-md">
                <div className="text-xl font-bold text-mentor-black">Insurance Model</div>
                <BulletList className="mt-6" items={[
                  "Fixed premium models regardless of actual usage",
                  "Limited control over provider choices",
                  "Double-digit annual premium increases",
                  "Opaque reporting and data silos"
                ]} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-mentor-line bg-white p-8 h-full shadow-sm transition hover:shadow-md">
                <div className="text-xl font-bold text-mentor-black">Reimbursement Model</div>
                <BulletList className="mt-6" items={[
                  "Employees forced to pay high costs upfront",
                  "Manual, error-prone paper claims",
                  "Slow and frustrating reimbursement cycles",
                  "Immense operational burden on HR/Finance"
                ]} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>Hidden cost problem</Eyebrow>
            <h2 className="display-2 mt-5">
              What you don't see is costing you the most.
            </h2>
            <p className="lead mt-5 text-mentor-muted max-w-3xl">
              The real issue isn't just healthcare spend—it's unmanaged spend. Without structure, leakage occurs at every touchpoint.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Overbilling", d: "Unchecked hospital charges" },
              { t: "No Rates", d: "Lack of negotiated provider fees" },
              { t: "Fraud", d: "Leakage in claim processing" },
              { t: "Over-utilization", d: "Unnecessary medical procedures" },
            ].map((x, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative rounded-2xl border border-mentor-line bg-white p-8 h-full transition hover:border-mentor-blue">
                  <div className="text-sm font-bold text-mentor-blue/40">0{i + 1}</div>
                  <div className="mt-4 text-lg font-bold text-mentor-black">{x.t}</div>
                  <div className="mt-2 text-sm text-mentor-muted">{x.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(SFChallengeSection);
