import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import {
  FileCheck2,
  Wallet,
  RefreshCw,
  UserCheck,
  Network,
  Headphones,
  Heart,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
} from "lucide-react";
import { IpadFrame } from "@/components/ui/LiquidGlassComponents";

const services = [
  {
    id: "claims",
    icon: FileCheck2,
    t: "Claims Management",
    d: "Digital claims adjudication, structured review, and automated validation workflows for insurers and TPAs.",
    cat: "Claims",
  },
  {
    id: "cashless",
    icon: Wallet,
    t: "Cashless Claim Services",
    d: "Structured cashless healthcare coordination, enabling seamless treatment at network providers without financial friction.",
    cat: "Claims",
  },
  {
    id: "reimbursement",
    icon: RefreshCw,
    t: "Reimbursement Processing",
    d: "Fast-track digital reimbursement handling with end-to-end tracking and integrated documentation flow.",
    cat: "Claims",
  },
  {
    id: "beneficiary",
    icon: UserCheck,
    t: "Beneficiary Management",
    d: "Intelligent enrollment systems and centralized member data management for large-scale healthcare schemes.",
    cat: "Members",
  },
  {
    id: "network",
    icon: Network,
    t: "Provider Coordination",
    d: "Managing relationships and coordination across a nationwide network of 3,000+ healthcare facilities.",
    cat: "Network",
  },
  {
    id: "member",
    icon: Headphones,
    t: "Member Support",
    d: "24/7 operational support layer for members, assisting with navigation, claims, and healthcare guidance.",
    cat: "Members",
  },
  {
    id: "wellness",
    icon: Activity,
    t: "Wellness & Preventive",
    d: "Proactive health management through corporate wellness programs and data-driven preventive care models.",
    cat: "Care",
  },
];

const CATS = ["All", "Claims", "Network", "Members", "Care"];

export default function Services() {
  const [active, setActive] = useState("All");
  const filteredServices =
    active === "All" ? services : services.filter((s) => s.cat === active);

  return (
    <>
      <section className="relative overflow-hidden border-b border-mentor-line bg-mentor-surface/30 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 mesh-hero opacity-40" />
        <div className="container-fluid relative z-10 grid gap-12 lg:grid-cols-[1.1fr,1fr] items-center">
          <Reveal>
            <Eyebrow>Services & Solutions</Eyebrow>
            <h1 className="display-1 mt-6 font-bold tracking-tight">
              Hyper-efficient{" "}
              <span className="text-mentor-blue"> Administration</span> Layer.
            </h1>
            <p className="lead mt-6 max-w-xl text-mentor-muted">
              We provide the operational and digital infrastructure that
              transforms Healthcare Administration from a back-office burden
              into a strategic asset.
            </p>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <IpadFrame className="w-full !hover:transform-none">
              <MediaImage
                src={IMG.serviceSolutions}
                alt="Mentor Digital Experience"
                ratio="auto"
                hover={false}
                overlay="none"
                className="h-full w-full !border-0 rounded-none bg-black"
                imgClass="object-cover"
              />
            </IpadFrame>
          </Reveal>
        </div>
      </section>

      {/* Interactive category filter */}
      <section
        className="sticky top-[72px] z-40 border-b border-mentor-line bg-white/80 backdrop-blur-xl"
        data-testid="serv-filter"
      >
        <div className="container-edge py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {CATS.map((c) => (
                <button
                  key={c}
                  data-testid={`serv-cat-${c.toLowerCase()}`}
                  onClick={() => setActive(c)}
                  aria-pressed={active === c}
                  className={`relative rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-all ${
                    active === c
                      ? "text-white"
                      : "text-mentor-muted hover:text-mentor-black"
                  }`}
                >
                  <span className="relative z-10">{c}</span>
                  {active === c && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 z-0 rounded-full bg-mentor-black"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-mentor-muted bg-mentor-surface px-4 py-2 rounded-full">
              {filteredServices.length} Services Available
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-mentor-blue/5 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-mentor-blue/5 blur-[120px]" />
        </div>

        <div className="container-edge relative z-10">
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((s, i) => (
                <motion.div
                  key={s.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.21, 0.45, 0.32, 0.9],
                  }}
                  className="h-full"
                >
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-mentor-line bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-mentor-blue/20 hover:shadow-[0_32px_64px_-16px_rgba(0,72,255,0.08)]">
                    {/* Card hover glow */}
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-mentor-blue/5 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />

                    <div className="relative z-10 flex items-start justify-between">
                      <div
                        className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-mentor-surface text-mentor-blue transition-all duration-500 group-hover:bg-mentor-blue group-hover:text-white group-hover:shadow-lg group-hover:shadow-mentor-blue/20"
                        aria-hidden="true"
                      >
                        <s.icon className="h-8 w-8 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <span className="rounded-full border border-mentor-line bg-white px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-mentor-muted transition-all duration-500 group-hover:border-mentor-blue/20 group-hover:bg-mentor-blue/5 group-hover:text-mentor-blue">
                        {s.cat}
                      </span>
                    </div>

                    <div className="relative z-10 mt-10">
                      <h3 className="text-2xl font-bold tracking-tight text-mentor-black transition-colors group-hover:text-mentor-blue">
                        {s.t}
                      </h3>
                      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-mentor-muted/90 line-clamp-3">
                        {s.d}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto pt-8">
                      <div className="flex items-center justify-between border-t border-mentor-line/60 pt-6">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-mentor-blue animate-pulse" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-mentor-muted group-hover:text-mentor-black transition-colors">
                            Operational
                          </span>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mentor-surface text-mentor-black transition-all duration-500 group-hover:translate-x-1 group-hover:bg-mentor-black group-hover:text-white">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* Decorative pattern on hover */}
                    <div className="absolute bottom-0 right-0 p-4 opacity-5 transition-opacity group-hover:opacity-10">
                      <s.icon className="h-24 w-24 translate-x-8 translate-y-8" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="bg-mentor-surface/50 py-20 md:py-32 border-t border-mentor-line">
        <div className="container-edge">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <h2 className="display-2">
                Integrated Healthcare Administration.
              </h2>
              <p className="lead mt-6 text-mentor-muted">
                Our services are designed to work as a unified system. Whether
                you start with claims or network coordination, you gain access
                to a scalable administrative infrastructure that grows with your
                organization.
              </p>
              <div className="mt-10 space-y-4">
                {[
                  {
                    t: "Unified Data Layer",
                    d: "One source of truth for all stakeholders.",
                  },
                  {
                    t: "AI-Powered Adjudication",
                    d: "Reducing manual review time by up to 80%.",
                  },
                  {
                    t: "Scalable Infrastructure",
                    d: "Built to handle millions of transactions.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mentor-blue text-white">
                      <ShieldCheck className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-bold text-mentor-black">{item.t}</h4>
                      <p className="text-sm text-mentor-muted">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="right" delay={200}>
              <div className="group relative overflow-hidden rounded-[3rem] bg-mentor-black p-10 md:p-14 text-white shadow-2xl border border-white/5">
                {/* Background ambient light */}
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-mentor-blue/20 blur-[100px] transition-all duration-1000 group-hover:bg-mentor-blue/40" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-mentor-blue/10 blur-[80px]" />

                <div className="relative z-10">
                  {/* <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6" />
                  </div> */}

                  <h3 className="text-3xl font-bold tracking-tight text-white">
                    Need a custom{" "}
                    <span className="text-mentor-blue"> Solution?</span>
                  </h3>
                  <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-md">
                    We understand that large organizations often have unique
                    legacy workflows. Our innovation team can build custom
                    modules that integrate directly with your existing systems.
                  </p>

                  <div className="mt-12">
                    <Link
                      to="/request-proposal"
                      className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-5 text-sm font-bold text-mentor-black transition-all hover:bg-mentor-blue hover:text-white"
                    >
                      <span className="relative z-10">
                        Discuss Custom Deployment
                      </span>
                      <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      <div className="absolute inset-0 z-0 bg-gradient-to-r from-mentor-blue to-blue-600 opacity-0 transition-opacity group-hover/btn:opacity-100" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        testId="serv-cta"
        eyebrow="Get Started"
        headline="Ready to modernize your Healthcare Administration?"
        subline="Talk to our team about how Mentor TPA can streamline your administrative workflows."
      />
    </>
  );
}
