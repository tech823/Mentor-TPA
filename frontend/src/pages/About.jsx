import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import { 
  Heart, 
  Sparkles, 
  Target, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Users2,
  Globe2
} from "lucide-react";

const structure = [
  { 
    t: "Mentor Health", 
    d: "Our comprehensive digital healthcare platform designed for patient-centric care coordination and member wellness.",
    icon: Heart
  },
  { 
    t: "Mentor Third-Party Administrator (TPA)", 
    d: "The core administrative backbone providing claims infrastructure, provider networks, and insurer coordination.",
    icon: ShieldCheck
  },
  { 
    t: "Mentor Innovation", 
    d: "Dedicated R&D focused on AI-driven analytics, predictive healthcare costs, and digital health tech.",
    icon: Zap
  },
];

const presence = ["Pakistan", "UAE", "Singapore", "USA", "UK"];

const values = [
  { t: "Customer Centric", d: "Putting member experience and patient outcomes at the core of every decision.", icon: Users2 },
  { t: "Digital First", d: "Solving healthcare administration through technology, not manual paperwork.", icon: Zap },
  { t: "Radical Transparency", d: "Providing real-time visibility into claims, costs, and network utilization.", icon: Sparkles },
  { t: "Operational Integrity", d: "Operating with the highest standards of compliance, security, and ethics.", icon: ShieldCheck },
  { t: "Ecosystem Innovation", d: "Building bridges between fragmented healthcare stakeholders.", icon: Layers },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-mentor-line mesh-hero" data-testid="about-hero">
        <div className="pointer-events-none absolute right-[-120px] top-[-60px] h-96 w-96 rounded-full bg-mentor-blue/10 blur-3xl" />
        <div className="container-fluid grid gap-10 py-20 md:grid-cols-[1.2fr,1fr] md:items-end md:py-28 lg:py-36">
          <Reveal>
            <Eyebrow>About Mentor Third-Party Administrator (TPA)</Eyebrow>
            <h1 className="display-1 mt-6 max-w-3xl">
              Building the <span className="text-mentor-blue">Digital Backbone</span> of Healthcare Administration.
            </h1>
            <p className="lead mt-6 max-w-2xl text-mentor-muted">
              Mentor Third-Party Administrator (TPA) is part of an integrated healthcare administration ecosystem built to solve the complexities of modern medical claims and network management. We connect employers, insurers, providers, and patients through a single, intelligent infrastructure layer.
            </p>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div className="relative">
              <div className="absolute -inset-4 bg-mentor-blue/5 blur-3xl rounded-[3rem]" />
              <MediaImage 
                src={IMG.teamCollab} 
                alt="Mentor TPA team collaborating" 
                ratio="4/3" 
                frame 
                overlay="blue" 
                className="shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 md:py-32">
        <div className="container-edge">
          <Reveal className="max-w-3xl">
            <Eyebrow>The Mentor Ecosystem</Eyebrow>
            <h2 className="display-2 mt-5">Part of an integrated healthcare system.</h2>
            <p className="lead mt-5 text-mentor-muted">
              Mentor TPA doesn't operate in a vacuum. We leverage the power of our broader ecosystem to provide end-to-end healthcare coordination.
            </p>
          </Reveal>
          
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {structure.map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative h-full rounded-[2.5rem] border border-mentor-line bg-white p-10 transition-all hover:border-mentor-blue/30 hover:shadow-xl hover:shadow-mentor-blue/5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mentor-surface text-mentor-black transition-colors group-hover:bg-mentor-blue group-hover:text-white">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold tracking-tight text-mentor-black">{s.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-mentor-muted">{s.d}</p>
                  <div className="mt-8 text-[11px] font-bold uppercase tracking-widest text-mentor-muted/40">Division 0{i + 1}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="rounded-[2.5rem] bg-mentor-surface/50 border border-mentor-line p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-mentor-muted mb-2 flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-mentor-blue" />
                    Global Footprint
                  </h4>
                  <p className="text-xl font-bold text-mentor-black">Operating across key strategic markets.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {presence.map(p => (
                    <span key={p} className="pill pill-dark bg-mentor-black text-white hover:bg-mentor-blue border-none px-6 py-2.5 transition-colors cursor-default">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-y border-mentor-line bg-mentor-surface/30 py-20 md:py-32">
        <div className="container-edge grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Strategic Intent</Eyebrow>
            <h2 className="display-2 mt-5">Who we are.</h2>
            <p className="lead mt-5 text-mentor-muted">
              We are a technology-first company solving human-scale healthcare problems. By bridging the gap between clinical care and healthcare administration, we create a more fluid journey for everyone involved.
            </p>
            <div className="mt-12 overflow-hidden rounded-[2rem] border border-mentor-line shadow-lg">
              <MediaImage 
                src={IMG.hospitalCorridor} 
                alt="Modern healthcare facility" 
                ratio="16/9" 
                rounded="none"
                overlay="soft" 
              />
            </div>
          </Reveal>
          
          <div className="space-y-6">
            <Reveal delay={200}>
              <div className="rounded-[2.5rem] border border-mentor-line bg-white p-8 md:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                  <Target className="h-32 w-32" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mentor-blue/10 text-mentor-blue">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-mentor-black tracking-tight">Our Vision</h3>
                <p className="mt-4 text-sm leading-relaxed text-mentor-muted">
                  To transform healthcare into a transparent, accessible, and digitally managed system, moving the global market from fragmented care to an integrated, data-driven healthcare experience.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="rounded-[2.5rem] border border-mentor-line bg-white p-8 md:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                  <Heart className="h-32 w-32" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mentor-blue/10 text-mentor-blue">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-mentor-black tracking-tight">Our Mission</h3>
                <p className="mt-4 text-sm leading-relaxed text-mentor-muted">
                  To deliver hyper-efficient healthcare administration through technology-driven workflows, ensuring seamless coordination while creating long-term value for every stakeholder in the ecosystem.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32">
        <div className="container-edge">
          <Reveal className="max-w-3xl">
            <Eyebrow>Our Foundation</Eyebrow>
            <h2 className="display-2 mt-5">Values that drive us.</h2>
          </Reveal>
          
          <div className="mt-16 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group h-full rounded-[2rem] border border-mentor-line p-8 transition-all hover:-translate-y-2 hover:border-mentor-blue hover:bg-mentor-blue/[0.02]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mentor-surface text-mentor-black transition-colors group-hover:bg-mentor-blue/10 group-hover:text-mentor-blue">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-bold text-mentor-black tracking-tight">{v.t}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-mentor-muted">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="relative overflow-hidden bg-mentor-black py-24 text-white md:py-36 grid-dark">
        <div className="pointer-events-none absolute inset-0" style={{background: "radial-gradient(800px 500px at 0% 0%, rgba(0,72,255,0.2), transparent 70%)"}} />
        <div className="container-edge relative">
          <div className="max-w-4xl">
            <Reveal>
              <Eyebrow><span className="text-mentor-blue">The Mentor Advantage</span></Eyebrow>
              <h2 className="display-2 mt-6 text-white leading-tight">
                Healthcare administration is no longer just a back-office function.
              </h2>
              <p className="lead mt-8 text-white/70">
                Conventional TPAs rely on manual paperwork and disconnected systems. Mentor TPA is built around integrated infrastructure, real-time data visibility, and AI-enabled control. We solve the cost, infrastructure, and experience problems that define modern healthcare administration.
              </p>
              
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
                {[
                  { label: "Automation", val: "94%" },
                  { label: "Claims Processing", val: "Instant" },
                  { label: "Transparency", val: "Total" }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.val}</div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest text-mentor-blue font-bold mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand 
        eyebrow="Next Steps" 
        headline="Experience the digital backbone in action." 
        subline="Ready to transform your healthcare administration? Let's talk about your requirements."
        testId="about-cta" 
      />
    </>
  );
}
