import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';
import Counter from '../../shared/Counter';
import { Globe as CobeGlobe } from '../../ui/CobeGlobe';

const stats = [
  { n: "300+", t: "Hospitals" },
  { n: "15,000+", t: "Doctors" },
  { n: "700+", t: "Labs & Diagnostics" },
  { n: "100+", t: "Pharmacy network" },
];

const NetworkStrengthSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-mentor-black py-20 text-white md:py-28 grid-dark"
      data-testid="home-network"
      role="region"
      aria-label="Network Strength"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(600px 300px at 85% 15%, rgba(0,72,255,0.35), transparent 60%)",
        }}
      />
      <div className="container-edge relative grid gap-12 md:grid-cols-[1fr,1.2fr] md:items-center">
        <Reveal>
          <Eyebrow>
            <span className="text-mentor-blue">Network strength</span>
          </Eyebrow>
          <h2 className="display-2 mt-5 text-white">
            Nationwide healthcare access through one connected network.
          </h2>
          <p className="lead mt-5 text-white/75">
            Mentor Third-Party Administrator (TPA) enables structured access to a nationwide network of
            healthcare providers, helping clients reduce fragmentation and
            improve access consistency across locations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/provider-network"
              data-testid="home-network-cta"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-mentor-black transition hover:bg-mentor-blue hover:text-white"
            >
              Explore Provider Network <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((x, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="glow-pill rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 transition hover:-translate-y-1 hover:border-mentor-blue/60">
                  <h3 className="stat-num text-white">
                    <Counter value={x.n} />
                  </h3>
                  <div className="mt-2 text-sm text-white/70">{x.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        
        <div className="relative h-[400px] w-full md:h-[600px]" role="img" aria-label="Interactive 3D globe visualization showing nationwide healthcare network coverage">
          <div className="absolute inset-0 flex items-center justify-center">
            <CobeGlobe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(NetworkStrengthSection);
