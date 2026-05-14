import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingDown, AlertTriangle, AlertOctagon, Copy, Scale, Eye,
  Network, Brain, Cpu, Globe, Layers, Shield, ShieldCheck,
  FileCheck, Zap, DollarSign, Users, Clock, CheckCircle,
  XCircle, Building2, Activity, BarChart3, ArrowRight,
  ChevronRight, Database, Workflow, Search
} from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import Counter from "../components/shared/Counter";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";

/* ─── reusable micro-components ────────────────────────────── */
const IconBox = ({ icon: Icon, color = "text-mentor-blue", bg = "bg-mentor-blue/10" }) => (
  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg}`}>
    <Icon className={`h-5 w-5 ${color}`} />
  </div>
);

const FeatureRow = ({ icon: Icon, label, variant = "default" }) => {
  const styles = {
    default: { wrap: "bg-white/[0.04] border-white/5", iconColor: "text-mentor-blue" },
    danger:  { wrap: "bg-red-500/[0.07] border-red-500/10", iconColor: "text-red-400" },
    warning: { wrap: "bg-amber-500/[0.07] border-amber-500/10", iconColor: "text-amber-400" },
    success: { wrap: "bg-emerald-500/[0.07] border-emerald-500/10", iconColor: "text-emerald-400" },
  };
  const s = styles[variant];
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`flex items-center gap-3 rounded-xl border p-3 ${s.wrap}`}
    >
      <Icon className={`h-4 w-4 shrink-0 ${s.iconColor}`} />
      <span className="text-sm text-white/80">{label}</span>
    </motion.div>
  );
};

const CheckRow = ({ text, checked = true }) => (
  <li className="flex items-start gap-3">
    {checked
      ? <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
      : <XCircle    className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />}
    <span className={`text-sm leading-relaxed ${checked ? "text-mentor-black" : "text-mentor-muted"}`}>{text}</span>
  </li>
);

/* ─── main page ─────────────────────────────────────────────── */
export default function Insurance() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-mentor-line mesh-hero">
        <div className="pointer-events-none absolute right-[-100px] top-[-60px] h-96 w-96 rounded-full bg-mentor-blue/10 blur-3xl" />
        <div className="container-fluid grid gap-10 py-20 md:grid-cols-[1.15fr,1fr] md:items-end md:py-28">
          <Reveal>
            <Eyebrow>For Insurance Companies</Eyebrow>
            <h1 className="display-1 mt-6 max-w-3xl">
              Claims and network infrastructure for insurers.
            </h1>
            <p className="lead mt-6 max-w-2xl">
              Scale faster, reduce operational burden, and improve claims
              control through Mentor TPA's digital claims and provider
              network infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/request-proposal"
                className="btn-shimmer rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue"
              >
                Explore Integration
              </Link>
              <Link
                to="/book-demo"
                className="rounded-full border border-mentor-black px-6 py-3.5 text-sm font-semibold transition hover:bg-mentor-black hover:text-white"
              >
                Run a Pilot
              </Link>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <MediaImage src={IMG.handshake} alt="Insurance partnership" ratio="4/3" frame overlay="blue" />
          </Reveal>
        </div>
      </section>

      {/* ── CHALLENGE — redesigned dark section ──────────────── */}
      <section className="relative overflow-hidden bg-mentor-black py-20 text-white md:py-28">
        <div className="absolute inset-0 grid-dark opacity-40" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(900px 420px at 5% 60%, rgba(0,72,255,0.14), transparent 65%)" }}
        />
        <div className="container-edge relative">
          <Reveal>
            <Eyebrow><span className="text-mentor-blue">The Problem Space</span></Eyebrow>
            <h2 className="display-2 mt-5 max-w-3xl text-white">
              Why insurance operations struggle to scale.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* ── Left: challenge card ── */}
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-amber-400/80 to-transparent" />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15">
                    <AlertTriangle className="h-5 w-5 text-amber-400" />
                  </div>
                  <Eyebrow><span className="text-amber-400">The Challenge</span></Eyebrow>
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-snug text-white">
                  The insurance industry is under pressure.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Insurance companies face compounding operational challenges that
                  traditional systems were never designed to handle.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    { icon: TrendingDown, label: "Rising claims volumes year-over-year",     variant: "warning" },
                    { icon: DollarSign,   label: "Increasing operational costs",              variant: "danger"  },
                    { icon: Users,        label: "Customer dissatisfaction with slow service", variant: "warning" },
                    { icon: Clock,        label: "Demand for faster claim resolution",         variant: "danger"  },
                  ].map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.45 }}
                      viewport={{ once: true }}
                    >
                      <FeatureRow {...r} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* ── Right: core problem card ── */}
            <Reveal delay={140}>
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500/80 to-transparent" />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15">
                    <XCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <Eyebrow><span className="text-red-400">The Core Problem</span></Eyebrow>
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-snug text-white">
                  Traditional claims operations do not scale well.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  The conventional model was built for a different era — and it shows in every KPI.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    { icon: Building2, label: "Large internal teams required for basic ops", variant: "danger" },
                    { icon: Activity,  label: "Heavy manual review at every stage",           variant: "danger" },
                    { icon: Network,   label: "Fragmented, unstructured provider relationships", variant: "danger" },
                    { icon: Clock,     label: "Slow coordination cycles across departments",  variant: "danger" },
                  ].map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.45 }}
                      viewport={{ once: true }}
                    >
                      <FeatureRow {...r} />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4">
                  <p className="text-xs leading-relaxed text-red-300/80">
                    Result: Higher overhead, slower turnaround, and limited scalability across all lines of business.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HIDDEN RISKS ─────────────────────────────────────── */}
      <section className="border-y border-mentor-line py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>Hidden Risks</Eyebrow>
            <h2 className="display-2 mt-5 max-w-2xl">The leakage is real.</h2>
            <p className="lead mt-5 max-w-2xl text-mentor-muted">
              Financial leakage does not always announce itself. It quietly
              accumulates in the background — across every unchecked claim.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Copy,         title: "Duplicate Claims",          desc: "Same claim submitted multiple times across channels.",           color: "text-red-500",    bg: "bg-red-50",       border: "border-red-100" },
              { icon: AlertOctagon, title: "Fraud Patterns",            desc: "Inflated billing and fabricated procedures go undetected.",      color: "text-orange-500", bg: "bg-orange-50",    border: "border-orange-100" },
              { icon: Scale,        title: "Inconsistent Billing",      desc: "Variable pricing with no structured validation layer.",          color: "text-amber-500",  bg: "bg-amber-50",     border: "border-amber-100" },
              { icon: Eye,          title: "Low Visibility",            desc: "No real-time view into claim status or adjudication progress.",  color: "text-purple-500", bg: "bg-purple-50",    border: "border-purple-100" },
              { icon: Network,      title: "Weak Coordination",         desc: "Providers and insurers operating in disconnected systems.",      color: "text-blue-500",   bg: "bg-blue-50",      border: "border-blue-100" },
            ].map(({ icon: Icon, title, desc, color, bg, border }, i) => (
              <Reveal key={i} delay={i * 70}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`h-full rounded-2xl border ${border} ${bg} p-6`}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm`}>
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

      {/* ── MENTOR SOLUTION ──────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-edge grid gap-14 md:grid-cols-[1.1fr,1fr] md:items-center">
          <Reveal>
            <Eyebrow>Mentor Solution</Eyebrow>
            <h2 className="display-2 mt-5">A complete claims and network infrastructure layer.</h2>
            <p className="lead mt-5 text-mentor-muted">
              Mentor TPA enables insurers with end-to-end claims management
              support, provider network access, digital workflows, and
              real-time operational visibility.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: FileCheck,   label: "End-to-end claims management"    },
                { icon: Network,     label: "Pre-integrated provider network"  },
                { icon: BarChart3,   label: "Real-time operational dashboards" },
                { icon: Brain,       label: "AI-powered validation engine"     },
              ].map(({ icon: Icon, label }, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex items-center gap-3 rounded-xl border border-mentor-line bg-mentor-surface p-4 transition hover:border-mentor-blue/40 hover:bg-mentor-blue/5">
                    <IconBox icon={Icon} />
                    <span className="text-sm font-semibold text-mentor-black">{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <MediaImage src={IMG.analytics} alt="Claims and network analytics" ratio="4/3" overlay="soft" />
          </Reveal>
        </div>
      </section>

      {/* ── WHAT WE MANAGE ───────────────────────────────────── */}
      <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>What We Manage</Eyebrow>
            <h2 className="display-2 mt-5 max-w-2xl">Every critical operational layer — covered.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: FileCheck,  title: "Claims Adjudication",        desc: "Structured digital review and approval workflows." },
              { icon: Zap,        title: "Cashless Authorizations",     desc: "Instant pre-auth at network hospitals and clinics." },
              { icon: DollarSign, title: "Reimbursement Processing",    desc: "Fast-track digital reimbursement with full tracking." },
              { icon: Network,    title: "Provider Coordination",       desc: "Structured relationships across 300+ facilities." },
              { icon: Users,      title: "Member Support",              desc: "24/7 operational layer for all member needs." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} delay={i * 70}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -16px rgba(0,72,255,0.18)" }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="group flex h-full flex-col rounded-2xl border border-mentor-line bg-white p-6 transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mentor-blue/10 transition group-hover:bg-mentor-blue group-hover:text-white">
                    <Icon className="h-5 w-5 text-mentor-blue transition group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold text-mentor-black">{title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-mentor-muted">{desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLAIMS ENGINE + AI CONTROL ───────────────────────── */}
      <section className="relative overflow-hidden bg-mentor-black py-20 text-white md:py-28">
        <div className="absolute inset-0 grid-dark opacity-30" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(700px 360px at 80% 30%, rgba(0,72,255,0.18), transparent 65%)" }}
        />
        <div className="container-edge relative">
          <Reveal>
            <Eyebrow><span className="text-mentor-blue">Technology Core</span></Eyebrow>
            <h2 className="display-2 mt-5 max-w-3xl text-white">
              Digital intelligence at every claims touchpoint.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Claims Engine */}
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-mentor-blue to-transparent" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mentor-blue/15">
                  <FileCheck className="h-6 w-6 text-mentor-blue" />
                </div>
                <Eyebrow className="mt-5"><span className="text-mentor-blue">Claims Processing Engine</span></Eyebrow>
                <h3 className="mt-3 text-xl font-bold text-white">Digital claims processing engine.</h3>
                <div className="mt-6 space-y-3">
                  {[
                    { icon: Database,   label: "Digital claim submission portal"       },
                    { icon: Workflow,   label: "Structured validation workflows"        },
                    { icon: Clock,      label: "Faster review and approval cycles"      },
                    { icon: BarChart3,  label: "Reduced turnaround time end-to-end"     },
                    { icon: Search,     label: "Better traceability across all stages"  },
                  ].map(({ icon: Icon, label }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.04] p-3"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-mentor-blue" />
                      <span className="text-sm text-white/80">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* AI Control */}
            <Reveal delay={140}>
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-violet-500 to-transparent" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15">
                  <Brain className="h-6 w-6 text-violet-400" />
                </div>
                <Eyebrow className="mt-5"><span className="text-violet-400">AI-Based Control Layer</span></Eyebrow>
                <h3 className="mt-3 text-xl font-bold text-white">AI-enabled control and validation.</h3>
                <div className="mt-6 space-y-3">
                  {[
                    { icon: Copy,       label: "Duplicate claim identification"       },
                    { icon: ShieldCheck,label: "Fraud detection mechanisms"           },
                    { icon: Eye,        label: "Image modification checks"            },
                    { icon: Cpu,        label: "OCR-based document extraction"        },
                    { icon: Scale,      label: "Pricing comparison algorithms"        },
                    { icon: Activity,   label: "Utilization pattern monitoring"       },
                  ].map(({ icon: Icon, label }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 rounded-xl border border-violet-500/10 bg-violet-500/[0.06] p-3"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-violet-400" />
                      <span className="text-sm text-white/80">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── NETWORK STATS (existing, kept) ───────────────────── */}
      <section className="relative overflow-hidden border-y border-mentor-line bg-mentor-black py-20 text-white md:py-28 grid-dark">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(800px 420px at 15% 40%, rgba(0,72,255,0.22), transparent 60%)" }}
        />
        <div className="container-edge relative">
          <Reveal>
            <Eyebrow><span className="text-mentor-blue">Nationwide Network</span></Eyebrow>
            <h2 className="display-2 mt-5 max-w-3xl text-white">Pre-integrated provider ecosystem.</h2>
            <p className="mt-4 max-w-2xl text-sm text-white/60">
              Mentor TPA gives insurers a ready network layer instead of requiring them to rebuild provider coordination site by site.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { n: "300+",    t: "hospitals",        icon: Building2 },
              { n: "15,000+", t: "doctors",          icon: Users     },
              { n: "700+",    t: "labs & diagnostics",icon: Database  },
              { n: "100+",    t: "pharmacy network",  icon: Globe     },
            ].map(({ n, t, icon: Icon }, i) => (
              <Reveal key={i} delay={i * 100}>
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(0,72,255,0.7)" }}
                  className="glow-pill flex h-full min-h-[140px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition"
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

      {/* ── EFFICIENCY COMPARISON ────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-edge grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal>
            <Eyebrow>Efficiency</Eyebrow>
            <h2 className="display-2 mt-5">Lower operational burden.</h2>
            <p className="lead mt-5 text-mentor-muted">See the difference a structured TPA infrastructure makes.</p>
            <div className="mt-8 space-y-4">
              {/* Without */}
              <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">Without a strong TPA</span>
                </div>
                <ul className="space-y-2">
                  {["Larger internal claims teams", "More manual coordination", "Higher overhead", "Slower turnaround"].map(x => (
                    <CheckRow key={x} text={x} checked={false} />
                  ))}
                </ul>
              </div>
              {/* With */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">With Mentor TPA</span>
                </div>
                <ul className="space-y-2">
                  {["Automated workflows", "Centralized systems", "Lower administrative burden", "More scalable operations"].map(x => (
                    <CheckRow key={x} text={x} checked={true} />
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-mentor-line bg-mentor-surface p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mentor-blue/10">
                  <Layers className="h-6 w-6 text-mentor-blue" />
                </div>
                <Eyebrow className="mt-5">Scalability</Eyebrow>
                <h3 className="mt-3 text-xl font-bold text-mentor-black">Scale operations without scaling cost at the same pace.</h3>
                <p className="mt-3 text-sm leading-relaxed text-mentor-muted">
                  Mentor TPA helps insurers handle growing claim volumes, enter new segments, and launch healthcare products faster — without proportionally expanding internal operations.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-[2rem] border border-mentor-line bg-mentor-surface p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mentor-blue/10">
                  <Zap className="h-6 w-6 text-mentor-blue" />
                </div>
                <Eyebrow className="mt-5">Speed to Market</Eyebrow>
                <h3 className="mt-3 text-xl font-bold text-mentor-black">Move faster with ready infrastructure.</h3>
                <p className="mt-3 text-sm leading-relaxed text-mentor-muted">
                  Instead of building every workflow from scratch, insurers use Mentor TPA infrastructure to reduce implementation time and accelerate operational readiness.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CUSTOMER EXP + COST ──────────────────────────────── */}
      <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>Business Impact</Eyebrow>
            <h2 className="display-2 mt-5 max-w-3xl">Better outcomes at every level.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Users, color: "text-mentor-blue", bg: "bg-mentor-blue/10",
                eyebrow: "Customer Experience", title: "A better policyholder experience.",
                points: ["Faster claim approvals", "Smoother cashless access", "Structured communication", "Higher trust and satisfaction"],
              },
              {
                icon: BarChart3, color: "text-emerald-600", bg: "bg-emerald-50",
                eyebrow: "Cost Optimization", title: "Better claims control supports better profitability.",
                points: ["Lower administrative cost", "Reduced financial leakage", "Improved billing control", "Better visibility into claims patterns"],
              },
            ].map(({ icon: Icon, color, bg, eyebrow, title, points }, idx) => (
              <Reveal key={idx} delay={idx * 120}>
                <div className="h-full rounded-[2rem] border border-mentor-line bg-white p-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${bg}`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>
                  <Eyebrow className="mt-5">{eyebrow}</Eyebrow>
                  <h3 className="mt-3 text-xl font-bold text-mentor-black">{title}</h3>
                  <ul className="mt-6 space-y-3">
                    {points.map(p => <CheckRow key={p} text={p} checked={true} />)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOSS RATIO + GLOBAL ──────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-edge grid gap-6 md:grid-cols-2">
          {[
            {
              icon: BarChart3, iconBg: "bg-mentor-blue/10", iconColor: "text-mentor-blue",
              eyebrow: "Loss Ratio Improvement",
              title: "Better data. Better control. Better decisions.",
              body: "Better claims control improves operational accuracy and supports better underwriting intelligence over time.",
            },
            {
              icon: Globe, iconBg: "bg-mentor-blue/10", iconColor: "text-mentor-blue",
              eyebrow: "Global Insurers Entering Pakistan",
              title: "Ready infrastructure for insurers entering Pakistan.",
              body: "For international insurers evaluating Pakistan, Mentor TPA provides local provider network infrastructure, claims handling capability, and market-grounded operational support — without a full buildout from zero.",
            },
          ].map(({ icon: Icon, iconBg, iconColor, eyebrow, title, body }, idx) => (
            <Reveal key={idx} delay={idx * 120}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="h-full rounded-[2rem] border border-mentor-line p-8 transition"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}>
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>
                <Eyebrow className="mt-5">{eyebrow}</Eyebrow>
                <h3 className="mt-3 text-xl font-bold text-mentor-black">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mentor-muted">{body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── WHY MENTOR TPA ───────────────────────────────────── */}
      <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>Why Mentor TPA</Eyebrow>
            <h2 className="display-2 mt-5 max-w-3xl">Why insurers choose Mentor TPA.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: Cpu,        title: "Technology-First",         desc: "Built digital from day one — no legacy systems." },
              { icon: Globe,      title: "Nationwide Network",        desc: "300+ hospitals, 15,000+ doctors, 700+ labs."     },
              { icon: Brain,      title: "AI-Enabled Control",        desc: "Smart validation at every claims touchpoint."    },
              { icon: Layers,     title: "Scalable Model",            desc: "Grows with your volume without growing your team."},
              { icon: Shield,     title: "Regulated Readiness",       desc: "SECP-licensed, Shariah-compliant infrastructure." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} delay={i * 70}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group flex h-full flex-col rounded-2xl border border-mentor-line bg-white p-6 transition hover:border-mentor-blue/40 hover:shadow-lg hover:shadow-mentor-blue/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mentor-blue/10 transition group-hover:bg-mentor-blue">
                    <Icon className="h-5 w-5 text-mentor-blue transition group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold text-mentor-black">{title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-mentor-muted">{desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION TIMELINE ──────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <Eyebrow>Implementation</Eyebrow>
            <h2 className="display-2 mt-5 max-w-2xl">Structured implementation model.</h2>
            <p className="lead mt-5 max-w-2xl text-mentor-muted">
              From onboarding to full deployment — a clear, phased process designed to minimise disruption.
            </p>
          </Reveal>

          <div className="relative mt-14">
            {/* Connector line */}
            <div className="absolute left-[22px] top-0 hidden h-full w-px bg-gradient-to-b from-mentor-blue via-mentor-blue/30 to-transparent md:block" />

            <div className="grid gap-6 md:gap-8">
              {[
                { icon: Database,   step: 1, title: "Integration & Onboarding",  desc: "System APIs connected, data migration completed, team orientation done." },
                { icon: Cpu,        step: 2, title: "System Configuration",       desc: "Claims rules, provider networks, and workflows configured to your requirements." },
                { icon: Activity,   step: 3, title: "Pilot Phase",               desc: "Controlled rollout with a selected group — performance benchmarked and validated." },
                { icon: CheckCircle,step: 4, title: "Full Deployment",            desc: "Complete go-live with operational handoff, reporting, and continuous support." },
              ].map(({ icon: Icon, step, title, desc }, i) => (
                <Reveal key={i} delay={i * 100}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 280 }}
                    className="flex gap-6 md:gap-8"
                  >
                    <div className="relative flex shrink-0 flex-col items-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-mentor-blue text-white shadow-lg shadow-mentor-blue/30 text-sm font-bold">
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
        eyebrow="Get Started"
        headline="Transform your claims operations."
        subline="Explore integration or run a pilot with Mentor TPA."
        testId="ins-cta"
      />
    </>
  );
}
