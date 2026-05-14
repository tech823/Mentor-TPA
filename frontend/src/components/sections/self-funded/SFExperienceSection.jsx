import React from 'react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';
import BulletList from '../../shared/BulletList';
import MediaImage from '../../shared/MediaImage';
import { IMG } from '../../shared/images';
import { MacbookFrame } from '../../ui/LiquidGlassComponents';

const SFExperienceSection = () => {
  return (
    <>
      <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
        <div className="container-edge grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <Eyebrow>Digital experience</Eyebrow>
            <h2 className="display-2 mt-5">
              No paperwork. No delays. Just digital clarity.
            </h2>
            <p className="lead mt-5 text-mentor-muted">
              Mentor Third-Party Administrator (TPA) digitizes the entire experience for both employers and
              employees, removing the friction from healthcare.
            </p>
            <div className="mt-10">
              <BulletList items={[
                "Fully digital claim submission",
                "Mobile-first member portal",
                "Real-time tracking of every request",
                "Seamless cashless treatment flows",
                "Centralized member health profiles",
                "Executive dashboards for visibility"
              ]} />
            </div>
          </Reveal>
          <Reveal variant="right" delay={200}>
            <MacbookFrame className="max-w-2xl mx-auto">
              <MediaImage
                src={IMG.doctorTablet}
                alt="Digital clinician workflow"
                ratio="16/10"
                overlay="soft"
              />
            </MacbookFrame>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-edge grid gap-12 md:grid-cols-2">
          <Reveal>
            <Eyebrow>HR and finance relief</Eyebrow>
            <h2 className="display-2 mt-5">
              Your HR team should not be running a hospital desk.
            </h2>
            <p className="lead mt-5 text-mentor-muted leading-relaxed">
              We handle the heavy lifting—claims processing, provider coordination, and employee healthcare queries—so your teams can focus on strategic decision-making instead of operational firefighting.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Eyebrow>Employee journey</Eyebrow>
            <h2 className="display-2 mt-5">A superior healthcare journey.</h2>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-mentor-line p-6 glass-surface transition hover:shadow-lg">
                <div className="text-xs font-bold uppercase tracking-widest text-mentor-muted">Before</div>
                <ul className="mt-4 space-y-3">
                  {["Pay upfront", "Submit paperwork", "Weeks of waiting", "High stress"].map((x) => (
                    <li key={x} className="flex items-center gap-2 text-sm text-mentor-muted line-through opacity-50">
                      <span className="h-1 w-1 rounded-full bg-mentor-muted" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-mentor-blue bg-mentor-blue/[0.03] p-6 shadow-sm transition hover:shadow-lg">
                <div className="text-xs font-bold uppercase tracking-widest text-mentor-blue">After Mentor</div>
                <ul className="mt-4 space-y-3">
                  {["Walk in freely", "Get treated", "Track digitally", "Zero friction"].map((x) => (
                    <li key={x} className="flex items-center gap-2 text-sm font-bold text-mentor-black">
                      <span className="h-1.5 w-1.5 rounded-full bg-mentor-blue" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default React.memo(SFExperienceSection);
