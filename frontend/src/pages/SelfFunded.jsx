import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingDown, DollarSign, Users, Clock,
  AlertTriangle, Scale, Copy, Database,
  FileCheck, Network, Brain, BarChart3, Eye,
  Building2, Globe, Zap, ShieldCheck,
  Activity, CheckCircle, XCircle,
  Search, Cpu, FileText, Layers,
} from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import Counter from "../components/shared/Counter";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import { MacbookFrame } from "../components/ui/LiquidGlassComponents";

/* ─── micro-components ─────────────────────────────────────── */
const FeatureRow = ({ icon: Icon, label, dimmed = false }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`flex items-center gap-3 rounded-xl border p-3 ${
      dimmed
        ? "border-white/5 bg-white/[0.03]"
        : "border-mentor-blue/15 bg-mentor-blue/[0.06]"
    }`}
  >
    <Icon className={`h-4 w-4 shrink-0 ${dimmed ? "text-white/40" : "text-mentor-blue"}`} />
    <span className="text-sm text-white/80">{label}</span>
  </motion.div>
);

const CheckRow = ({ text, checked = true }) => (
  <li className="flex items-start gap-3">
    {checked
      ? <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-mentor-blue" />
      : <XCircle     className="mt-0.5 h-4 w-4 shrink-0 text-mentor-muted" />}
    <span className={`text-sm leading-relaxed ${checked ? "text-mentor-black" : "text-mentor-muted"}`}>
      {text}
    </span>
  </li>
);

/* ─── page ──────────────────────────────────────────────────── */
export default function SelfFunded() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-mentor-line mesh-hero">
        <div className="pointer-events-none absolute right-[-120px] top-[-60px] h-96 w-96 rounded-full bg-mentor-blue/10 blur-3xl" />
        <div className="container-fluid grid gap-10 py-20 md:grid-cols-[1.15fr,1fr] md:items-end md:py-28">
          <Reveal>
            <Eyebrow>For Self-Funded Companies</Eyebrow>
            <h1 className="display-1 mt-6 max-w-3xl">Take control of your healthcare costs.</h1>
            <p className="lead mt-6 max-w-2xl text-mentor-muted">
              Mentor TPA turns self-funded healthcare into a structured, digital, and controllable
              system — reducing cost, improving visibility, and creating a better employee experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/request-proposal" data-testid="sf-cta-hero"
                className="btn-shimmer rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue">
                Request a Cost Assessment
              </Link>
              <Link to="/book-demo"
                className="rounded-full border border-mentor-black px-6 py-3.5 text-sm font-semibold transition hover:bg-mentor-black hover:text-white">
                Book a Demo
              </Link>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <MediaImage src={IMG.corporateMeeting} alt="Corporate HR and finance meeting" ratio="4/3" frame overlay="soft" />
          </Reveal>
        </div>
      </section>

      {/* ── THE PROBLEM — dark ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-mentor-black py-20 text-white md:py-28">
        <div className="absolute inset-0 grid-dark opacity-40" />
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(900px 420px at 5% 60%, rgba(0,72,255,0.14), transparent 65%)" }} />
        <div className="container-edge relative">
          <Reveal>
            <Eyebrow><span className="text-mentor-blue">The Problem</span></Eyebrow>
            <h2 className="display-2 mt-5 max-w-3xl text-white">
              Why corporate healthcare spend keeps rising — with no return.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-mentor-blue to-transparent" />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mentor-blue/15">
                    <AlertTriangle className="h-5 w-5 text-mentor-blue" />
                  </div>
                  <Eyebrow><span className="text-mentor-blue">The Challenge</span></Eyebrow>
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-snug text-white">The cost keeps rising — with no clarity.</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Most companies spend more on healthcare every year while getting less control, less visibility, and more employee dissatisfaction.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    { icon: TrendingDown, label: "Rising healthcare costs year-on-year"   },
                    { icon: Eye,          label: "Zero visibility into actual claim data" },
                    { icon: DollarSign,   label: "No control over individual spend"       },
                    { icon: Users,        label: "Poor overall employee satisfaction"     },
                  ].map((r, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.45 }} viewport={{ once: true }}>
                      <FeatureRow {...r} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-white/20 to-transparent" />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <XCircle className="h-5 w-5 text-white/60" />
                  </div>
                  <Eyebrow><span className="text-white/60">Why Models Fail</span></Eyebrow>
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-snug text-white">Legacy models were not built for today.</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Insurance and reimbursement models both create cost without creating clarity.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    { icon: Building2, label: "Fixed premiums regardless of actual usage"    },
                    { icon: FileText,  label: "Employees pay upfront — manual paper claims"  },
                    { icon: Activity,  label: "Opaque reporting and siloed data"             },
                    { icon: Clock,     label: "Slow reimbursement cycles, high HR burden"    },
                  ].map((r, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.45 }} viewport={{ once: true }}>
                      <FeatureRow {...r} dimmed />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs leading-relaxed text-white/50">
                    Result: Higher overhead, slower turnaround, and zero financial clarity for your organization.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HIDDEN COSTS ─────────────────────────────────────── */}
      <section className="border-y border-mentor-line py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>Hidden Cost Problem</Eyebrow>
            <h2 className="display-2 mt-5 max-w-2xl">What you don't see is costing you the most.</h2>
            <p className="lead mt-5 max-w-2xl text-mentor-muted">
              Without structured control, financial leakage accumulates silently at every touchpoint.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Scale,    title: "Overbilling",          desc: "Unchecked hospital charges with no tariff structure or validation."   },
              { icon: Database, title: "No Negotiated Rates",  desc: "Lack of pre-agreed provider fees leads to inconsistent billing."      },
              { icon: Copy,     title: "Fraud & Leakage",      desc: "Duplicate claims and inflated procedures go undetected each cycle."   },
              { icon: Activity, title: "Over-utilization",     desc: "Unnecessary medical procedures inflate the total healthcare bill."    },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} delay={i * 80}>
                <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}
                  className="group h-full rounded-2xl border border-mentor-line bg-white p-6 transition hover:border-mentor-blue/40 hover:shadow-lg hover:shadow-mentor-blue/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mentor-blue/10 transition group-hover:bg-mentor-blue">
                    <Icon className="h-5 w-5 text-mentor-blue transition group-hover:text-white" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-mentor-black">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-mentor-muted">{desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENTOR SOLUTION — dark ───────────────────────────── */}
      <section className="relative overflow-hidden bg-mentor-black py-20 text-white md:py-28">
        <div className="absolute inset-0 grid-dark opacity-30" />
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(700px 360px at 80% 30%, rgba(0,72,255,0.18), transparent 65%)" }} />
        <div className="container-edge relative">
          <Reveal>
            <Eyebrow><span className="text-mentor-blue">Mentor Solution</span></Eyebrow>
            <h2 className="display-2 mt-5 max-w-4xl text-white">
              A complete managed healthcare infrastructure for self-funded companies.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
              We provide the digital infrastructure that self-funded healthcare usually lacks — bringing order, control, and visibility to the entire system.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {[
              { icon: Network,   label: "Provider Network"     },
              { icon: FileCheck, label: "Claims Control"       },
              { icon: Zap,       label: "Cashless Access"      },
              { icon: Cpu,       label: "Digital Admin"        },
              { icon: Eye,       label: "Real-time Visibility" },
            ].map(({ icon: Icon, label }, i) => (
              <Reveal key={i} delay={i * 100}>
                <motion.div whileHover={{ y: -4, borderColor: "rgba(0,72,255,0.7)" }}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mentor-blue/15">
                    <Icon className="h-5 w-5 text-mentor-blue" />
                  </div>
                  <div className="text-sm font-bold text-mentor-blue/60">0{i + 1}</div>
                  <div className="text-base font-semibold leading-tight text-white">{label}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>The Process</Eyebrow>
            <h2 className="display-2 mt-5">How it works — end to end.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { icon: Network,    step: 1, title: "Network Access",   desc: "Employees access our verified network of hospitals, clinics, and pharmacies."      },
              { icon: Zap,        step: 2, title: "Cashless Workflow", desc: "Treatment delivered through a structured digital workflow with pre-authorizations." },
              { icon: ShieldCheck,step: 3, title: "Claims Control",    desc: "Mentor validates every claim in real-time, applying cost-control mechanisms."       },
              { icon: BarChart3,  step: 4, title: "Optimized Payment", desc: "Your company pays for actual, verified usage at pre-negotiated rates."             },
            ].map(({ icon: Icon, step, title, desc }, i) => (
              <Reveal key={i} delay={i * 100}>
                <motion.div whileHover={{ y: -5, boxShadow: "0 20px 40px -16px rgba(0,72,255,0.15)" }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="relative flex h-full flex-col rounded-2xl border border-mentor-line bg-white p-7 transition">
                  <div className="absolute right-5 top-5 text-5xl font-black text-mentor-blue/5">{step}</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mentor-blue/10 text-mentor-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-xs font-bold uppercase tracking-widest text-mentor-blue">Step {step}</div>
                  <h3 className="mt-2 text-lg font-bold text-mentor-black">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mentor-muted">{desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full bg-mentor-blue/10 px-6 py-2 text-sm font-bold text-mentor-blue">
              <span className="h-2 w-2 animate-pulse rounded-full bg-mentor-blue" />
              Simple. Controlled. Transparent.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── NETWORK STATS — dark ─────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-mentor-line bg-mentor-black py-20 text-white md:py-28 grid-dark">
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(800px 420px at 15% 40%, rgba(0,72,255,0.22), transparent 60%)" }} />
        <div className="container-edge relative grid gap-14 md:grid-cols-[1fr,1.2fr] md:items-center">
          <Reveal>
            <Eyebrow><span className="text-mentor-blue">Network Advantage</span></Eyebrow>
            <h2 className="display-2 mt-5 text-white">The power of a connected network.</h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60">
              Access to a structured network helps you move away from uncontrolled spending by
              utilising pre-negotiated rates and verified providers.
            </p>
            <p className="mt-6 text-sm font-semibold text-mentor-blue">
              Pre-negotiated pricing across all participating providers.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "300+",    t: "Verified Hospitals", icon: Building2 },
              { n: "15,000+", t: "Qualified Doctors",  icon: Users     },
              { n: "700+",    t: "Diagnostic Labs",    icon: Database  },
              { n: "100+",    t: "Pharmacy Network",   icon: Globe     },
            ].map(({ n, t, icon: Icon }, i) => (
              <Reveal key={i} delay={i * 100}>
                <motion.div whileHover={{ y: -4, borderColor: "rgba(0,72,255,0.7)" }}
                  className="flex h-full min-h-[140px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition">
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

      {/* ── COST CONTROL ─────────────────────────────────────── */}
      <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
        <div className="container-edge grid gap-14 md:grid-cols-[1.1fr,1fr] md:items-center">
          <Reveal>
            <Eyebrow>How We Control Cost</Eyebrow>
            <h2 className="display-2 mt-5 max-w-xl">Strategic cost management — at every layer.</h2>
            <p className="lead mt-5 text-mentor-muted">
              Multiple layers of control to ensure every rupee of your healthcare budget is spent effectively.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Scale,      label: "Negotiated provider tariffs"        },
                { icon: Brain,      label: "AI-driven claim validation"          },
                { icon: ShieldCheck,label: "Advanced fraud & leakage detection"  },
                { icon: Eye,        label: "Real-time utilization tracking"      },
                { icon: FileCheck,  label: "Structured healthcare protocols"     },
                { icon: BarChart3,  label: "End-to-end financial visibility"     },
              ].map(({ icon: Icon, label }, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex items-center gap-3 rounded-xl border border-mentor-line bg-white p-4 transition hover:border-mentor-blue/40 hover:bg-mentor-blue/5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mentor-blue/10">
                      <Icon className="h-4 w-4 text-mentor-blue" />
                    </div>
                    <span className="text-sm font-semibold text-mentor-black">{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <MediaImage src={IMG.analytics} alt="Cost control analytics" ratio="4/3" overlay="soft" />
          </Reveal>
        </div>
      </section>

      {/* ── DIGITAL EXPERIENCE ───────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-edge grid gap-14 md:grid-cols-2 md:items-center">
          <Reveal>
            <Eyebrow>Digital Experience</Eyebrow>
            <h2 className="display-2 mt-5">No paperwork. No delays. Just digital clarity.</h2>
            <p className="lead mt-5 text-mentor-muted">
              Mentor TPA digitizes the entire experience for both employers and employees, removing all friction from healthcare.
            </p>
            <ul className="mt-10 space-y-3">
              {[
                "Fully digital claim submission",
                "Mobile-first member portal",
                "Real-time tracking of every request",
                "Seamless cashless treatment flows",
                "Centralized member health profiles",
                "Executive dashboards for full visibility",
              ].map(x => <CheckRow key={x} text={x} checked={true} />)}
            </ul>
          </Reveal>
          <Reveal variant="right" delay={200}>
            <MacbookFrame className="mx-auto max-w-2xl">
              <MediaImage src={IMG.doctorTablet} alt="Digital clinician workflow" ratio="16/10" overlay="soft" />
            </MacbookFrame>
          </Reveal>
        </div>
      </section>

      {/* ── BEFORE / AFTER ───────────────────────────────────── */}
      <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>Employee Journey</Eyebrow>
            <h2 className="display-2 mt-5 max-w-3xl">A superior healthcare experience for every employee.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-mentor-line bg-mentor-surface p-8">
                <div className="mb-5 flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-mentor-muted" />
                  <span className="text-xs font-bold uppercase tracking-widest text-mentor-muted">Before Mentor TPA</span>
                </div>
                <ul className="space-y-3">
                  {["Pay upfront before treatment", "Fill out paper claim forms", "Wait weeks for reimbursement", "Unclear process, high stress", "HR overwhelmed with queries"].map(x => (
                    <CheckRow key={x} text={x} checked={false} />
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="h-full rounded-2xl border border-mentor-blue/20 bg-mentor-blue/5 p-8">
                <div className="mb-5 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-mentor-blue" />
                  <span className="text-xs font-bold uppercase tracking-widest text-mentor-blue">With Mentor TPA</span>
                </div>
                <ul className="space-y-3">
                  {["Walk into network hospital directly", "Cashless treatment — no payment needed", "Claims processed automatically", "Track status digitally, anytime", "HR freed from operational load"].map(x => (
                    <CheckRow key={x} text={x} checked={true} />
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── REAL-TIME VISIBILITY ─────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-edge grid gap-14 md:grid-cols-[1fr,1.2fr] md:items-center">
          <Reveal>
            <Eyebrow>Real-time Visibility</Eyebrow>
            <h2 className="display-2 mt-5">Finally, see where every healthcare rupee goes.</h2>
            <p className="lead mt-5 text-mentor-muted">
              Gain granular insights into your corporate healthcare spending with data that helps you make better financial decisions.
            </p>
            <div className="mt-10 space-y-3">
              {[
                { icon: BarChart3,    label: "Departmental spending breakdown"         },
                { icon: Users,        label: "Group-level utilization patterns"        },
                { icon: TrendingDown, label: "Major cost driver identification"        },
                { icon: Search,       label: "Claim category analysis"                },
                { icon: Activity,     label: "Emerging health trends in your workforce"},
              ].map(({ icon: Icon, label }, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex items-center gap-3 rounded-xl border border-mentor-line bg-white p-4 transition hover:border-mentor-blue/40">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mentor-blue/10">
                      <Icon className="h-4 w-4 text-mentor-blue" />
                    </div>
                    <span className="text-sm font-semibold text-mentor-black">{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <MediaImage src={IMG.dashboards} alt="Real-time healthcare dashboards" ratio="4/3" overlay="soft" />
          </Reveal>
        </div>
      </section>

      {/* ── BEST FIT + IMPLEMENTATION ────────────────────────── */}
      <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
        <div className="container-edge grid gap-14 md:grid-cols-2">
          <Reveal>
            <Eyebrow>Best Fit</Eyebrow>
            <h2 className="display-2 mt-5">Is your organization ready?</h2>
            <p className="lead mt-5 text-mentor-muted">
              Mentor TPA works best with organizations ready to move beyond legacy healthcare models.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Organizations with 200+ employees",
                "Companies facing 15%+ annual cost increases",
                "Employers seeking complete cost visibility",
                "Firms frustrated by reimbursement complexity",
                "Teams ready for a structured healthcare system",
              ].map(x => <CheckRow key={x} text={x} checked={true} />)}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>Implementation</Eyebrow>
            <h2 className="display-2 mt-5">Fast deployment.</h2>
            <div className="relative mt-10">
              <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-mentor-blue via-mentor-blue/30 to-transparent md:block" />
              <div className="space-y-5">
                {[
                  { step: 1, title: "Onboarding",    desc: "Client requirements and policy setup — Week 1"      },
                  { step: 2, title: "Enrollment",     desc: "Employee data ingestion and card issuance — Week 2" },
                  { step: 3, title: "System Go-Live", desc: "Platform access and provider activation — Week 3"   },
                  { step: 4, title: "Active Support", desc: "Dedicated relationship management — Continuous"     },
                ].map(({ step, title, desc }, i) => (
                  <motion.div key={i} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 280 }} className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mentor-blue text-xs font-bold text-white shadow-lg shadow-mentor-blue/30">
                      {step}
                    </div>
                    <div className="flex-1 rounded-xl border border-mentor-line bg-white p-4 transition hover:border-mentor-blue/40">
                      <div className="text-sm font-bold text-mentor-black">{title}</div>
                      <div className="mt-1 text-xs text-mentor-muted">{desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Get Started"
        headline="Take control of your healthcare costs today."
        subline="Request a personalized cost assessment to see how much your organization can save with Mentor TPA."
        testId="sf-cta"
      />
    </>
  );
}
