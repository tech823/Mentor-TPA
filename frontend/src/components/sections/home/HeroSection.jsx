import React, { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Sparkles,
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Search,
  Bell,
  UserCircle,
} from "lucide-react";
import { Eyebrow } from "../../shared/Eyebrow";
import Reveal from "../../shared/Reveal";
import Counter from "../../shared/Counter";
import { MacbookFrame, IphoneFrame } from "../../ui/LiquidGlassComponents";

// Isolated counter that manages its own state and interval to prevent heavy parent re-renders
const LiveClaimsCounter = memo(() => {
  const [count, setCount] = useState(842);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        const next = c + 12;
        return next > 938 ? 842 : next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <span>{count}</span>;
});

// High-performance animation loop for the hero visualization
const HeroAnimationLoop = memo(() => {

  return (
    <div
      className="relative w-full h-[300px] sm:h-[420px] md:h-[600px] flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-mentor-blue/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Mockup Container - Centers mockups and keeps them in proportion */}
      <div className="relative w-full max-w-[900px] flex items-center justify-center">
        {/* Laptop Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative z-10 w-full h-auto"
          style={{ perspective: 1000 }}
        >
          <MacbookFrame className="shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
            <div className="w-full h-full bg-[#050914] overflow-hidden flex flex-col relative">
              {/* Dashboard Header */}
              <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-black/60 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-mentor-blue" />
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-mentor-blue animate-ping" />
                    </div>
                    <span className="text-[9px] text-white font-bold uppercase tracking-[0.2em]">
                      Mentor OS
                    </span>
                  </div>
                  <div className="h-4 w-[1px] bg-white/10" />
                  <div className="flex items-center gap-2 bg-white/5 rounded-md px-2 py-1">
                    <Search className="w-2.5 h-2.5 text-white/30" />
                    <span className="text-[8px] text-white/30">
                      Search system...
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Bell className="w-3 h-3 text-white/40" />
                  <div className="w-5 h-5 rounded-full bg-mentor-blue/20 flex items-center justify-center border border-mentor-blue/30">
                    <UserCircle className="w-3 h-3 text-mentor-blue" />
                  </div>
                </div>
              </div>

              <div className="flex-1 flex overflow-hidden">
                {/* Dashboard Sidebar */}
                <div className="w-11 border-r border-white/5 flex flex-col items-center py-5 gap-5 bg-black/40">
                  {[LayoutDashboard, FileText, Users, Settings].map(
                    (Icon, i) => (
                      <div
                        key={i}
                        className={`p-2 rounded-lg transition-colors ${i === 0 ? "bg-mentor-blue/20 text-mentor-blue" : "text-white/20 hover:text-white/60"}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    ),
                  )}
                  <div className="mt-auto pb-2">
                    <div className="w-6 h-6 rounded-full border border-white/5 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>

                {/* Dashboard Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-b from-transparent to-black/20">
                  <div className="flex-1 p-5 space-y-5 overflow-y-auto">
                    {/* Top Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                      {[
                        {
                          label: "Live Claims",
                          val: <LiveClaimsCounter />,
                          isStatic: true,
                          color: "text-blue-400",
                        },
                        {
                          label: "AI Efficiency",
                          val: "94.2%",
                          isStatic: true,
                          color: "text-emerald-400",
                        },
                        {
                          label: "Active Prov.",
                          val: "1,240",
                          isStatic: true,
                          color: "text-white",
                          hiddenOnMobile: true,
                        },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className={`bg-white/[0.03] border border-white/5 rounded-xl p-2.5 md:p-4 transition-all hover:bg-white/[0.06] hover:border-white/10 ${stat.hiddenOnMobile ? "hidden sm:block" : ""}`}
                        >
                          <p className="text-white/30 text-[6.5px] md:text-[8px] font-bold uppercase tracking-widest truncate">
                            {stat.label}
                          </p>
                          <p
                            className={`text-[11px] md:text-sm font-bold mt-1 md:mt-1.5 ${stat.color}`}
                          >
                            {stat.isStatic ? (
                              stat.val
                            ) : (
                              <Counter value={stat.val} duration={1} />
                            )}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-4 flex-1 min-h-0">
                      {/* Animated Graph Area */}
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 relative overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[8px] text-white/40 font-bold uppercase tracking-widest">
                            Adjudication Velocity
                          </span>
                          <div className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                            <span className="text-[7px] text-emerald-500 font-bold">
                              +12.4%
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between gap-1.5">
                          {[
                            40, 60, 45, 70, 85, 60, 75, 90, 65, 80, 70, 95, 85,
                            75, 90,
                          ].map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{
                                delay: i * 0.05,
                                duration: 1,
                                ease: "easeOut",
                              }}
                              className="flex-1 bg-gradient-to-t from-mentor-blue/5 via-mentor-blue/40 to-mentor-blue/80 rounded-t-[2px] relative group"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Live Activity Feed */}
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hidden md:flex flex-col">
                        <span className="text-[8px] text-white/40 font-bold uppercase tracking-widest mb-4">
                          Live Processing
                        </span>
                        <div className="space-y-3">
                          {[
                            { id: "CL-8201", type: "Approval", time: "2s ago" },
                            { id: "CL-8199", type: "Review", time: "5s ago" },
                            { id: "CL-8195", type: "Payment", time: "12s ago" },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-1 h-1 rounded-full ${i === 0 ? "bg-emerald-400" : "bg-white/20"}`}
                                />
                                <span className="text-[9px] text-white/60">
                                  {item.id}
                                </span>
                              </div>
                              <span className="text-[7px] text-white/20 uppercase font-bold">
                                {item.time}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-auto pt-4 border-t border-white/5">
                          <div className="flex items-center justify-between text-[8px] font-bold">
                            <span className="text-white/40">Queue Status</span>
                            <span className="text-mentor-blue">Optimized</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MacbookFrame>
        </motion.div>

        {/* Floating UI Elements - Re-positioned to balance the new layout */}
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-5%] top-[15%] z-30 hidden xl:block"
        >
          <div className="glass-surface rounded-2xl p-4 shadow-xl border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div>
                <p className="text-white text-[10px] font-bold">
                  Claim Approved
                </p>
                <p className="text-white/40 text-[8px]">AD-942 • Just now</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[10%] top-[40%] z-30 hidden xl:block"
        >
          <div className="glass-surface rounded-2xl p-4 shadow-xl border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-mentor-blue" />
              </div>
              <div>
                <p className="text-white text-[10px] font-bold">
                  AI Validator Active
                </p>
                <p className="text-white/40 text-[8px]">98.2% Accuracy</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Phone Mockup - Now on the left side as per marking */}
        <motion.div
          initial={{ opacity: 0, x: -60, y: 40, rotate: -12 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
            rotate: 8,
          }}
          transition={{
            opacity: { duration: 1, delay: 0.5 },
            x: { duration: 1, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            },
            rotate: { duration: 1, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] },
          }}
          className="absolute left-[-60px] xl:left-[-50px] bottom-[5%] xl:bottom-[8%] z-40 w-[24%] max-w-[180px] min-w-[110px] hidden xl:block"
        >
          <IphoneFrame className="shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            <div className="w-full h-full bg-slate-50 flex flex-col overflow-hidden">
              {/* App Status Bar */}
              <div className="h-6 px-6 mt-4 flex items-center justify-between">
                <span className="text-[9px] font-black tracking-tight text-slate-400">
                  9:41
                </span>
                <div className="flex gap-1">
                  <div className="w-3 h-1.5 rounded-sm border border-slate-300" />
                </div>
              </div>

              <div className="px-5 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-slate-900">
                      Digital Card
                    </p>
                    <p className="text-[8px] text-slate-400 font-medium">
                      Verified Status
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-mentor-blue/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-mentor-blue" />
                  </div>
                </div>
              </div>

              <div className="mt-6 px-5">
                <div className="relative aspect-square rounded-2xl bg-white shadow-sm border border-slate-100 flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-slate-50 opacity-50" />

                  {/* Scanning Animation */}
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 right-0 h-[2px] bg-mentor-blue z-10 shadow-[0_0_15px_rgba(0,72,255,0.8)]"
                  />

                  <div className="relative z-0 grid grid-cols-4 gap-1 p-4 opacity-10">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-slate-900" />
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-mentor-blue/20 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-mentor-blue/40 rounded flex items-center justify-center">
                        <div className="w-8 h-8 bg-mentor-blue rounded-sm animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-[10px] font-bold text-slate-900">
                    QR Patient ID
                  </p>
                  <p className="text-[8px] text-slate-400 mt-1">
                    Scan at provider reception
                  </p>
                </div>
              </div>

              <div className="mt-auto p-5 border-t border-slate-100 bg-white">
                <div className="h-7 w-full bg-mentor-blue rounded-lg flex items-center justify-center">
                  <span className="text-[9px] font-bold text-center text-white uppercase tracking-wider">
                    Authorize Cashless
                  </span>
                </div>
              </div>
            </div>
          </IphoneFrame>
        </motion.div>
      </div>
    </div>
  );
});

HeroAnimationLoop.displayName = "HeroAnimationLoop";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-mentor-line mesh-hero pt-10 pb-16 md:pt-16 md:pb-24 pl-4 xl:pl-8 overflow-x-hidden"
      role="region"
      aria-label="Introduction"
    >
      {/* Ornamental blurs */}
      <div
        className="pointer-events-none absolute -left-12 sm:-left-24 top-10 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-mentor-blue/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 sm:right-[-80px] bottom-[-40px] sm:bottom-[-60px] h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-mentor-blue/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-fluid grid gap-6 md:gap-8 lg:gap-12 md:grid-cols-2 items-center">
        <div className="relative z-10 col-span-1">
          <Reveal>
            <Eyebrow className="text-mentor-blue uppercase tracking-widest font-bold">
              Healthcare Administration, Digitized.
            </Eyebrow>
            <h1 className="display-1 mt-6 font-bold tracking-tight">
              The Digital <span className="text-mentor-blue">Backbone</span> of
              Healthcare Administration
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-mentor-muted font-medium">
              Mentor TPA helps employers, insurers, providers, and patients
              operate through one structured healthcare system, combining claims
              management, provider network access, digital workflows, AI-enabled
              control, and nationwide healthcare coordination.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "SECP Licensed TPA",
                "Shariah Compliant",
                "AI Enabled",
                "Nationwide Network",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-mentor-line bg-mentor-surface/50 px-4 py-1.5 text-[13px] font-semibold text-mentor-black"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-mentor-muted">
              Healthcare administration should not be fragmented, manual, and
              hard to control. Mentor TPA brings claims processing, cashless
              access, reimbursement workflows, provider coordination, reporting,
              and healthcare visibility into one connected system.
            </p>

            <div
              className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4"
              role="group"
              aria-label="Action buttons"
            >
              <Link
                to="/request-proposal"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-mentor-black px-6 py-3 sm:px-8 sm:py-4 text-sm font-bold text-white transition hover:bg-mentor-blue"
              >
                Get a Proposal{" "}
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-mentor-line bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm font-bold text-mentor-black transition hover:bg-mentor-surface"
              >
                Book a Demo
              </Link>
            </div>

            {/* <p className="mt-6 text-xs font-medium text-mentor-muted">
              Talk to our team about self-funded healthcare, claims outsourcing,
              or digital TPA infrastructure.
            </p> */}
          </Reveal>
        </div>

        <div className="relative hidden md:block">
          <HeroAnimationLoop />
        </div>
      </div>
    </section>
  );
}
