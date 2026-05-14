import React from 'react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';

const SFSolutionSection = () => {
  return (
    <>
      <section className="relative overflow-hidden border-y border-mentor-line bg-mentor-black py-20 text-white md:py-28 grid-dark">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(700px 400px at 90% 50%, rgba(0,72,255,0.22), transparent 60%)",
          }}
        />
        <div className="container-edge relative">
          <Reveal>
            <Eyebrow>
              <span className="text-mentor-blue">Mentor solution</span>
            </Eyebrow>
            <h2 className="display-2 mt-5 text-white max-w-4xl">
              Mentor Third-Party Administrator (TPA) converts self-funded healthcare into a managed system.
            </h2>
            <p className="lead mt-5 text-white/70 max-w-2xl">
              We provide the digital infrastructure that self-funded healthcare usually lacks, bringing order to the chaos.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
              {[
                "Provider Network",
                "Claims Control",
                "Cashless Access",
                "Digital Admin",
                "Real-time Visibility",
              ].map((x, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-6 h-full transition hover:border-mentor-blue hover:bg-white/[0.08]">
                    <div className="text-sm font-bold text-mentor-blue">0{i+1}</div>
                    <div className="mt-4 text-base font-semibold leading-tight">{x}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>The process</Eyebrow>
            <h2 className="display-2 mt-5">How it works.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                s: "Network Access",
                t: "Employees access our verified network of hospitals, clinics, and pharmacies."
              },
              {
                s: "Cashless Workflow",
                t: "Treatment is delivered through a structured digital workflow with pre-authorizations."
              },
              {
                s: "Claims Control",
                t: "Mentor validates every claim in real-time, applying cost-control mechanisms."
              },
              {
                s: "Optimized Payment",
                t: "Your company pays for actual, verified usage at pre-negotiated rates."
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative rounded-2xl border border-mentor-line p-8 h-full glass-surface transition hover:border-mentor-blue group">
                  <div className="absolute top-0 right-0 p-4 text-4xl font-black text-mentor-blue/5 transition group-hover:text-mentor-blue/10">
                    {i + 1}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-mentor-blue">Step {i + 1}</div>
                  <h3 className="mt-4 text-xl font-bold text-mentor-black">{item.s}</h3>
                  <p className="mt-3 text-sm text-mentor-muted leading-relaxed">{item.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full bg-mentor-blue/10 px-6 py-2 text-sm font-bold text-mentor-blue">
              <span className="h-2 w-2 rounded-full bg-mentor-blue animate-pulse" />
              Simple. Controlled. Transparent.
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default React.memo(SFSolutionSection);
