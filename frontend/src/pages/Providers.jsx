import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Network, Users, Heart,
  Building2, Activity, FlaskConical, Pill, Stethoscope,
  Globe, Database, BarChart3, ShieldCheck, Zap,
  CheckCircle, FileCheck, Clock,
} from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import Counter from "../components/shared/Counter";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";

/* ─── micro-component ──────────────────────────────────────── */
const CheckRow = ({ text }) => (
  <li className="flex items-start gap-3">
    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
    <span className="text-sm leading-relaxed text-mentor-black">{text}</span>
  </li>
);

/* ─── main page ─────────────────────────────────────────────── */
export default function Providers() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-mentor-line mesh-hero">
        <div className="pointer-events-none absolute right-[-100px] top-[-40px] h-80 w-80 rounded-full bg-mentor-blue/10 blur-3xl" />
        <div className="container-fluid grid gap-10 py-20 md:grid-cols-[1.15fr,1fr] md:items-end md:py-28">
          <Reveal>
            <Eyebrow>For Healthcare Providers</Eyebrow>
            <h1 className="display-1 mt-6 max-w-3xl">Join a structured healthcare network.</h1>
            <p className="lead mt-6 max-w-2xl">
              Partner with Mentor TPA to become part of a growing healthcare ecosystem connected
              to employers, insurers, and digitally enabled healthcare workflows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-shimmer rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue"
                data-testid="prov-cta-join"
              >
                Become a Network Partner
              </Link>
              <Link
                to="/book-demo"
                className="rounded-full border border-mentor-black px-6 py-3.5 text-sm font-semibold transition hover:bg-mentor-black hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <MediaImage src={IMG.nursePatient} alt="Healthcare provider with patient" ratio="4/3" frame overlay="blue" />
          </Reveal>
        </div>
      </section>

      {/* ── WHY PARTNER — dark ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-mentor-black py-20 text-white md:py-28">
        <div className="absolute inset-0 grid-dark opacity-40" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(900px 420px at 5% 50%, rgba(0,72,255,0.14), transparent 65%)" }}
        />
        <div className="container-edge relative">
          <Reveal>
            <Eyebrow><span className="text-mentor-blue">Why Partner</span></Eyebrow>
            <h2 className="display-2 mt-5 max-w-3xl text-white">Why healthcare providers choose Mentor TPA.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
              Joining the Mentor TPA network gives providers structured access to a growing patient base, digital workflows, and operational clarity.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Network,
                accentFrom: "from-mentor-blue/80",
                accentBg: "bg-mentor-blue/15",
                iconColor: "text-mentor-blue",
                dotBg: "bg-mentor-blue",
                title: "Why partner with Mentor TPA",
                items: ["Access to a wider patient ecosystem", "Stronger administrative coordination", "Digital workflow integration", "Structured claims and access systems", "Participation in a growing network"],
              },
              {
                icon: Users,
                accentFrom: "from-violet-500/80",
                accentBg: "bg-violet-500/15",
                iconColor: "text-violet-400",
                dotBg: "bg-violet-400",
                title: "Who can join",
                items: ["Hospitals", "Clinics", "Diagnostics & labs", "Pharmacies", "Healthcare facilities aligned with our standards"],
              },
              {
                icon: Heart,
                accentFrom: "from-emerald-500/80",
                accentBg: "bg-emerald-500/15",
                iconColor: "text-emerald-400",
                dotBg: "bg-emerald-400",
                title: "What providers gain",
                items: ["Better visibility across the network", "Operational coordination support", "Structured cashless access pathways", "Participation in digitized healthcare", "Dedicated partner relationship"],
              },
            ].map(({ icon: Icon, accentFrom, accentBg, iconColor, dotBg, title, items }, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                  <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${accentFrom} to-transparent`} />
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accentBg}`}>
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
                  <ul className="mt-5 space-y-3">
                    {items.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.08, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotBg}`} />
                        <span className="text-sm text-white/75">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN — colorful cards ────────────────────── */}
      <section className="border-y border-mentor-line py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>Eligible Providers</Eyebrow>
            <h2 className="display-2 mt-5 max-w-2xl">Who can become a network partner?</h2>
            <p className="lead mt-5 max-w-2xl text-mentor-muted">
              We welcome all healthcare facilities and professionals aligned with our quality and operational standards.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Building2,   title: "Hospitals",          desc: "Secondary and tertiary care hospitals across the network.",               color: "text-blue-500",    bg: "bg-blue-50",    border: "border-blue-100"    },
              { icon: Activity,    title: "Clinics",             desc: "GP clinics, specialist outpatient, and day-care facilities.",             color: "text-violet-500",  bg: "bg-violet-50",  border: "border-violet-100"  },
              { icon: FlaskConical,title: "Labs & Diagnostics",  desc: "Diagnostic labs, imaging centers, and pathology services.",              color: "text-amber-500",   bg: "bg-amber-50",   border: "border-amber-100"   },
              { icon: Pill,        title: "Pharmacies",          desc: "Retail pharmacies and hospital-linked dispensing units.",                color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
              { icon: Stethoscope, title: "Specialists",         desc: "Specialist practitioners operating within registered facilities.",        color: "text-red-500",     bg: "bg-red-50",     border: "border-red-100"     },
            ].map(({ icon: Icon, title, desc, color, bg, border }, i) => (
              <Reveal key={i} delay={i * 70}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`h-full rounded-2xl border ${border} ${bg} p-6`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-mentor-black">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-mentor-muted">{desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT PROVIDERS GAIN ──────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-edge grid gap-14 md:grid-cols-[1.1fr,1fr] md:items-center">
          <Reveal>
            <Eyebrow>Provider Benefits</Eyebrow>
            <h2 className="display-2 mt-5">What being in the network means for your practice.</h2>
            <p className="lead mt-5 text-mentor-muted">
              Network membership gives providers operational, financial, and growth-oriented advantages.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                { icon: Users,      bg: "bg-mentor-blue/10", color: "text-mentor-blue",   title: "Patient Access",     desc: "Connect to a structured pool of employer and insurer-backed patients."     },
                { icon: Zap,        bg: "bg-amber-50",       color: "text-amber-600",      title: "Cashless Pathways",  desc: "Structured pre-auth flows for fast, frictionless care delivery."           },
                { icon: FileCheck,  bg: "bg-emerald-50",     color: "text-emerald-600",    title: "Claims Processing",  desc: "Digital claim submissions with structured, fast settlement timelines."     },
                { icon: BarChart3,  bg: "bg-purple-50",      color: "text-purple-600",     title: "Operational Data",   desc: "Access to utilization and patient flow analytics for your facility."       },
              ].map(({ icon: Icon, bg, color, title, desc }, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex gap-4 rounded-2xl border border-mentor-line p-5 transition hover:border-mentor-blue/40 hover:shadow-sm">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg}`}>
                      <Icon className={`h-5 w-5 ${color}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-mentor-black">{title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-mentor-muted">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <MediaImage src={IMG.medicalTeam} alt="Healthcare professionals" ratio="4/3" overlay="soft" />
          </Reveal>
        </div>
      </section>

      {/* ── NETWORK SCALE — dark ─────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-mentor-line bg-mentor-black py-20 text-white md:py-28 grid-dark">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(800px 420px at 15% 40%, rgba(0,72,255,0.22), transparent 60%)" }}
        />
        <div className="container-edge relative">
          <Reveal>
            <Eyebrow><span className="text-mentor-blue">Network Scale</span></Eyebrow>
            <h2 className="display-2 mt-5 max-w-3xl text-white">Join a network that is already scaling.</h2>
            <p className="mt-4 max-w-2xl text-sm text-white/60">
              Mentor TPA brings structured demand, administrative clarity, and digital coordination into every provider relationship.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { n: "300+",    t: "Hospitals",          icon: Building2 },
              { n: "15,000+", t: "Doctors",            icon: Users     },
              { n: "700+",    t: "Labs & Diagnostics", icon: Database  },
              { n: "100+",    t: "Pharmacy Network",   icon: Globe     },
            ].map(({ n, t, icon: Icon }, i) => (
              <Reveal key={i} delay={i * 100}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(0,72,255,0.7)" }}
                  className="flex h-full min-h-[140px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition"
                >
                  <Icon className="h-6 w-6 text-mentor-blue/70" />
                  <div>
                    <div className="stat-num text-white"><Counter value={n} /></div>
                    <div className="mt-1 text-sm text-white/60">{t}</div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP PROCESS ──────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>Onboarding</Eyebrow>
            <h2 className="display-2 mt-5 max-w-2xl">Simple, structured provider onboarding.</h2>
            <p className="lead mt-5 max-w-2xl text-mentor-muted">
              Joining the Mentor TPA network is a straightforward process with dedicated support at every stage.
            </p>
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute left-[22px] top-0 hidden h-full w-px bg-gradient-to-b from-mentor-blue via-mentor-blue/30 to-transparent md:block" />
            <div className="grid gap-6 md:gap-8">
              {[
                { icon: FileCheck,  step: 1, title: "Application & Review",  desc: "Submit facility credentials and pass our provider standards review process." },
                { icon: ShieldCheck,step: 2, title: "Network Agreement",      desc: "Sign the provider network agreement with defined tariff and service terms." },
                { icon: Zap,        step: 3, title: "System Integration",     desc: "Connect to Mentor TPA's digital pre-auth and claims workflow platform."     },
                { icon: Users,      step: 4, title: "Active Partnership",      desc: "Begin receiving structured patient flow with ongoing coordination support." },
              ].map(({ icon: Icon, step, title, desc }, i) => (
                <Reveal key={i} delay={i * 100}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 280 }}
                    className="flex gap-6 md:gap-8"
                  >
                    <div className="flex shrink-0 items-start">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-mentor-blue text-sm font-bold text-white shadow-lg shadow-mentor-blue/30">
                        {step}
                      </div>
                    </div>
                    <div className="flex-1 rounded-2xl border border-mentor-line bg-mentor-surface p-6 transition hover:border-mentor-blue/40">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-mentor-blue" />
                        <h3 className="font-bold text-mentor-black">{title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{desc}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Providers"
        headline="Apply to Join Network."
        subline="Contact Provider Relations to begin onboarding and join the Mentor TPA healthcare ecosystem."
        testId="prov-cta"
      />
    </>
  );
}
