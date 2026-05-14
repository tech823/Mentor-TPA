import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck2, Network, Activity, Brain } from 'lucide-react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';
import MediaImage from '../../shared/MediaImage';
import { IMG } from '../../shared/images';

const services = [
  {
    i: FileCheck2,
    t: "Claims and orchestration",
    d: "Claims adjudication, cashless claims, reimbursement processing, member support, and structured operational workflows.",
  },
  {
    i: Network,
    t: "Provider network infrastructure",
    d: "Nationwide access to hospitals, doctors, labs, diagnostics, and pharmacies through a standardized healthcare network.",
  },
  {
    i: Activity,
    t: "Digital healthcare operations",
    d: "Digital claims submission, patient verification, dashboard visibility, centralized user profiles, and integrated healthcare coordination.",
  },
  {
    i: Brain,
    t: "AI-enabled intelligence",
    d: "Automated validation, fraud detection, duplication checks, utilization monitoring, and smarter healthcare decision support.",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28"
      data-testid="home-whatwedo"
      role="region"
      aria-label="Our Services"
    >
      <div className="container-edge grid gap-14 md:grid-cols-[1fr,0.9fr] md:items-start">
        <Reveal className="max-w-3xl">
          <Eyebrow>What Mentor Third-Party Administrator (TPA) does</Eyebrow>
          <h2 className="display-2 mt-5">
            One platform. One system. One healthcare experience.
          </h2>
          <p className="lead mt-5">
            Mentor Third-Party Administrator (TPA) provides a structured healthcare administration model
            that unifies provider network access, claims management, digital
            workflows, operational support, and financial control.
          </p>
          <div className="mt-8">
            <Link to="/services" className="u-expand py-3 text-sm font-semibold">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <MediaImage
            src={IMG.medicalTeam}
            alt="Healthcare team reviewing claims on screen"
            ratio="4/3"
            frame
            overlay="soft"
          />
        </Reveal>
      </div>
      <div className="container-edge mt-12 grid gap-5 md:grid-cols-2">
        {services.map((x, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="flex gap-5 rounded-2xl border border-mentor-line bg-white p-7 transition hover:border-mentor-black hover:-translate-y-0.5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-mentor-black text-white" aria-hidden="true">
                <x.i className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight">
                  {x.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mentor-muted">
                  {x.d}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default React.memo(ServicesSection);
