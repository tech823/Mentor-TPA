import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, ShieldCheck, Stethoscope } from 'lucide-react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';

const audiences = [
  {
    icon: Briefcase,
    title: "For Self-Funded Companies",
    copy: "Take control of healthcare cost with a structured self-funded model that delivers cashless access, provider network rates, digital claims, and real-time cost visibility.",
    cta: "See Self-Funded Solution",
    to: "/solutions/self-funded",
  },
  {
    icon: ShieldCheck,
    title: "For Insurance Companies",
    copy: "Scale claims operations and provider coordination without expanding internal complexity. Mentor TPA provides claims and network infrastructure built for speed, control, and growth.",
    cta: "See Insurance Solution",
    to: "/solutions/insurance",
  },
  {
    icon: Stethoscope,
    title: "For Providers",
    copy: "Join a structured healthcare network that improves coordination, digitizes access, and connects your facility into a broader healthcare ecosystem.",
    cta: "View Provider Network",
    to: "/solutions/providers",
  },
];

const StakeholderSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-28" data-testid="home-audience" role="region" aria-label="Healthcare Stakeholders">
      <div className="container-edge">
        <Reveal className="max-w-xl">
          <Eyebrow>Audience split</Eyebrow>
          <h2 className="display-2 mt-5">
            Built for every major healthcare stakeholder.
          </h2>
        </Reveal>
        <div className="mt-8 md:mt-12 grid gap-4 md:gap-5 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-hard tilt-card flex h-full flex-col justify-between p-5 sm:p-6 md:p-7">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-mentor-line" aria-hidden="true">
                    <a.icon className="h-5 w-5 text-mentor-blue" />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mentor-muted">
                    {a.copy}
                  </p>
                </div>
                <Link
                  to={a.to}
                  data-testid={`audience-${i}`}
                  className="u-expand mt-6 py-3 text-sm font-semibold"
                >
                  {a.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(StakeholderSection);

