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
  Activity
} from "lucide-react";

const services = [
  { id: "claims", icon: FileCheck2, t: "Claims Management", d: "Digital claims adjudication, structured review, and automated validation workflows for insurers and TPAs.", cat: "Claims" },
  { id: "cashless", icon: Wallet, t: "Cashless Claim Services", d: "Structured cashless healthcare coordination, enabling seamless treatment at network providers without financial friction.", cat: "Claims" },
  { id: "reimbursement", icon: RefreshCw, t: "Reimbursement Processing", d: "Fast-track digital reimbursement handling with end-to-end tracking and integrated documentation flow.", cat: "Claims" },
  { id: "beneficiary", icon: UserCheck, t: "Beneficiary Management", d: "Intelligent enrollment systems and centralized member data management for large-scale healthcare schemes.", cat: "Members" },
  { id: "network", icon: Network, t: "Provider Coordination", d: "Managing relationships and coordination across a nationwide network of 3,000+ healthcare facilities.", cat: "Network" },
  { id: "member", icon: Headphones, t: "Member Support", d: "24/7 operational support layer for members, assisting with navigation, claims, and healthcare guidance.", cat: "Members" },
  { id: "wellness", icon: Activity, t: "Wellness & Preventive", d: "Proactive health management through corporate wellness programs and data-driven preventive care models.", cat: "Care" },
];

const CATS = ["All", "Claims", "Network", "Members", "Care"];

export default function Services() {
  const [active, setActive] = useState("All");
  const filteredServices = active === "All" ? services : services.filter((s) => s.cat === active);

  return (
    <>
      <section className="relative overflow-hidden border-b border-mentor-line bg-mentor-surface/30 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 mesh-hero opacity-40" />
        <div className="container-fluid relative z-10 grid gap-12 lg:grid-cols-[1.1fr,1fr] items-center">
          <Reveal>
            <Eyebrow>Services & Solutions</Eyebrow>
            <h1 className="display-1 mt-6 font-bold tracking-tight">
              Hyper-efficient <span className="text-mentor-blue">administration</span> layer.
            </h1>
            <p className="lead mt-6 max-w-xl text-mentor-muted">
              We provide the operational and digital infrastructure that transforms healthcare administration from a back-office burden into a strategic asset.
            </p>
          </Reveal>
          <Reveal variant="right" delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-mentor-blue/5 blur-3xl rounded-[3rem]" />
              <MediaImage 
                src={IMG.dashboards} 
                alt="Operational dashboards" 
                ratio="4/3" 
                frame 
                overlay="blue" 
                className="shadow-2xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive category filter */}
      <section className="sticky top-[72px] z-30 border-b border-mentor-line bg-white/80 backdrop-blur-xl" data-testid="serv-filter">
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
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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

      <section className="py-20 md:py-32">
        <div className="container-edge">
          <motion.div 
            layout
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((s, i) => (
                <motion.div
                  key={s.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <div className="group relative flex h-full flex-col rounded-[2.5rem] border border-mentor-line bg-white p-8 transition-all hover:border-mentor-blue/30 hover:shadow-xl hover:shadow-mentor-blue/5">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mentor-surface text-mentor-black transition-colors group-hover:bg-mentor-blue group-hover:text-white" aria-hidden="true">
                        <s.icon className="h-7 w-7" />
                      </div>
                      <span className="rounded-full bg-mentor-surface px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-mentor-muted transition-colors group-hover:bg-mentor-blue/10 group-hover:text-mentor-blue">
                        {s.cat}
                      </span>
                    </div>
                    
                    <h3 className="mt-8 text-xl font-bold tracking-tight text-mentor-black">{s.t}</h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-mentor-muted">{s.d}</p>
                    
                    <div className="mt-8 pt-6 border-t border-mentor-line/50 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-mentor-muted/50 group-hover:text-mentor-blue transition-colors">
                        Ready for deployment
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-mentor-surface text-mentor-black transition-all group-hover:translate-x-1 group-hover:bg-mentor-blue group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </div>
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
              <h2 className="display-2">Integrated Healthcare Administration.</h2>
              <p className="lead mt-6 text-mentor-muted">
                Our services are designed to work as a unified system. Whether you start with claims or network coordination, you gain access to a scalable administrative infrastructure that grows with your organization.
              </p>
              <div className="mt-10 space-y-4">
                {[
                  { t: "Unified Data Layer", d: "One source of truth for all stakeholders." },
                  { t: "AI-Powered Adjudication", d: "Reducing manual review time by up to 80%." },
                  { t: "Scalable Infrastructure", d: "Built to handle millions of transactions." }
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
              <div className="relative rounded-[2.5rem] bg-mentor-black p-12 text-white overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Activity className="h-24 w-24" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Need a custom solution?</h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  We understand that large organizations often have unique legacy workflows. Our innovation team can build custom modules that integrate directly with your existing systems.
                </p>
                <div className="mt-10">
                  <Link 
                    to="/request-proposal" 
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-mentor-black transition hover:bg-mentor-blue hover:text-white"
                  >
                    Discuss Custom Deployment <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand 
        testId="serv-cta" 
        eyebrow="Get Started"
        headline="Ready to modernize your healthcare administration?"
        subline="Talk to our team about how Mentor Third-Party Administrator (TPA) can streamline your administrative workflows."
      />
    </>
  );
}
