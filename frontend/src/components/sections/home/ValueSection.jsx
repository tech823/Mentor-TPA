import React from 'react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';

const values = [
  {
    r: "Employers",
    v: "Better cost control, simplified orchestration, and real-time visibility into healthcare utilization.",
  },
  {
    r: "Insurers",
    v: "Lower operational burden, better claims control, and faster execution without building everything internally.",
  },
  {
    r: "Providers",
    v: "Smoother coordination, less manual management, and stronger integration into a structured healthcare network.",
  },
  {
    r: "Patients and members",
    v: "Easier healthcare access, cashless journeys, faster responses, and a better overall experience.",
  },
];

const ValueSection = () => {
  return (
    <section
      className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"
      data-testid="home-value"
      role="region"
      aria-label="Value to Stakeholders"
    >
      <div className="container-edge">
        <Reveal className="max-w-3xl">
          <Eyebrow>Value to stakeholders</Eyebrow>
          <h2 className="display-2 mt-5">
            Value that reaches every side of the healthcare equation.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((x, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card-hard tilt-card p-6 h-full">
                <h3 className="eyebrow">{x.r}</h3>
                <p className="mt-3 text-[15px] font-semibold leading-snug">
                  {x.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ValueSection);
