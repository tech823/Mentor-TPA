import React from 'react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';
import Counter from '../../shared/Counter';
import { CheckIcon } from '../../shared/Icons';

const SFNetworkSection = () => {
  return (
    <>
      <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
        <div className="container-edge grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <Eyebrow>Network advantage</Eyebrow>
            <h2 className="display-2 mt-5">The power of a connected network.</h2>
            <p className="lead mt-5 text-mentor-muted">
              Access to a structured network helps you move away from
              uncontrolled healthcare spending by utilizing pre-negotiated rates and verified providers.
            </p>
            <p className="mt-6 text-sm font-semibold text-mentor-blue">
              Pre-negotiated pricing across all participating providers.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "300+", t: "Verified Hospitals" },
              { n: "15,000+", t: "Qualified Doctors" },
              { n: "700+", t: "Diagnostic Labs" },
              { n: "100+", t: "Pharmacy Network" },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl border border-mentor-line bg-white p-8 h-full shadow-sm transition hover:-translate-y-1 hover:border-mentor-blue hover:shadow-md">
                  <div className="stat-num text-mentor-blue leading-none">
                    <Counter value={stat.n} />
                  </div>
                  <div className="mt-3 text-sm font-medium text-mentor-muted">{stat.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>How we control cost</Eyebrow>
            <h2 className="display-2 mt-5 max-w-3xl">Strategic cost management.</h2>
            <p className="lead mt-5 text-mentor-muted max-w-2xl">
              We apply multiple layers of control to ensure every rupee of your healthcare budget is spent effectively.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Negotiated provider tariffs",
              "AI-driven claim validation",
              "Advanced fraud & leakage detection",
              "Real-time utilization tracking",
              "Structured healthcare protocols",
              "End-to-end financial visibility",
            ].map((feature, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex items-center gap-4 rounded-xl border border-mentor-line p-6 transition hover:border-mentor-blue hover:bg-mentor-blue/[0.02]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mentor-blue/10 text-mentor-blue">
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <span className="text-base font-bold text-mentor-black">{feature}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(SFNetworkSection);
