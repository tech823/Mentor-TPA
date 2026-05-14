import React, { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Eyebrow } from "../../shared/Eyebrow";
import Reveal from "../../shared/Reveal";
import Counter from "../../shared/Counter";
import { MacbookFrame, IphoneFrame } from "../../ui/LiquidGlassComponents";

// High-performance animation loop for the hero visualization
const HeroAnimationLoop = memo(() => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t + 100) % 8000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-mentor-blue/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Laptop Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10 w-full max-w-[700px] px-4"
      >
        <MacbookFrame className="shadow-2xl">
          <div className="w-full h-full bg-[#0A1128] overflow-hidden flex flex-col relative">
            {/* Dashboard Header */}
            <div className="h-8 border-b border-white/5 flex items-center justify-between px-4 bg-black/40 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-mentor-blue" />
                <span className="text-[8px] text-white/40 font-bold uppercase tracking-widest">
                  Mentor TPA • Live Operations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-white/5 rounded-full" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-4 space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    label: "Daily Claims",
                    val: 842 + Math.floor(time / 1000) * 12,
                  },
                  { label: "Auto-Approved", val: "94.2%", isStatic: true },
                  { label: "Avg. TAT", val: "2.4m", isStatic: true },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/5 rounded-xl p-3"
                  >
                    <p className="text-white/30 text-[7px] font-bold uppercase tracking-widest">
                      {stat.label}
                    </p>
                    <p className="text-white text-sm font-bold mt-1">
                      {stat.isStatic ? (
                        stat.val
                      ) : (
                        <Counter value={stat.val} duration={1} />
                      )}
                    </p>
                  </div>
                ))}
              </div>

              {/* Animated Graph Area */}
              <div className="h-32 bg-white/[0.02] border border-white/5 rounded-xl p-4 relative overflow-hidden">
                <div className="flex items-end justify-between h-full gap-1">
                  {[40, 60, 45, 70, 85, 60, 75, 90, 65, 80, 70, 95].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="flex-1 bg-gradient-to-t from-mentor-blue/20 to-mentor-blue/60 rounded-t-sm"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </MacbookFrame>
      </motion.div>

      {/* Floating Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute -right-4 md:right-0 bottom-4 md:bottom-20 z-20 w-[140px] md:w-[180px]"
      >
        <IphoneFrame className="shadow-2xl">
          <div className="w-full h-full bg-white p-3 flex flex-col">
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[8px] font-bold text-mentor-blue">
                Patient App
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            </div>
            <div className="mt-4 p-3 bg-mentor-blue/5 rounded-xl border border-mentor-blue/10">
              <div className="text-[10px] font-bold">QR Verification</div>
              <div className="mt-2 aspect-square bg-white border border-mentor-line rounded-lg flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-mentor-blue/20 rounded-sm opacity-50" />
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-full bg-mentor-line rounded-full" />
              <div className="h-2 w-2/3 bg-mentor-line rounded-full opacity-50" />
            </div>
          </div>
        </IphoneFrame>
      </motion.div>
    </div>
  );
});

HeroAnimationLoop.displayName = "HeroAnimationLoop";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-mentor-line mesh-hero pt-20 pb-16 md:pt-32 md:pb-24"
      role="region"
      aria-label="Introduction"
    >
      {/* Ornamental blurs */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mentor-blue/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-80px] bottom-[-60px] h-96 w-96 rounded-full bg-mentor-blue/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-fluid grid gap-12 lg:grid-cols-[1.1fr,1fr] items-center">
        <div className="relative z-10">
          <Reveal>
            <Eyebrow>Healthcare Administration, Digitized.</Eyebrow>
            <h1 className="display-1 mt-6 font-bold tracking-tight">
              The Digital <span className="text-mentor-blue">Backbone</span> of
              Healthcare Administration
            </h1>
            <p className="lead mt-6 max-w-xl text-mentor-muted">
              Mentor Third-Party Administrator (TPA) is a specialized healthcare
              administration platform that helps employers, insurers, providers,
              and patients operate through one structured healthcare
              administration system, combining claims orchestration, digital
              workflows, and nationwide coordination.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4"
              role="group"
              aria-label="Action buttons"
            >
              <Link
                to="/request-proposal"
                className="group btn-shimmer inline-flex items-center gap-2 rounded-full bg-mentor-black px-8 py-4 text-sm font-bold text-white transition hover:bg-mentor-blue focus-visible:ring-2 focus-visible:ring-mentor-blue focus-visible:ring-offset-2"
              >
                Get a Proposal{" "}
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 rounded-full border-2 border-mentor-black px-8 py-4 text-sm font-bold text-mentor-black transition hover:bg-mentor-black hover:text-white focus-visible:ring-2 focus-visible:ring-mentor-blue focus-visible:ring-offset-2"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                Book a Demo
              </Link>
            </div>

            <div
              className="mt-12 flex items-center gap-6"
              aria-label="Over 10,000 members served across Pakistan"
            >
              <div className="flex -space-x-3" aria-hidden="true">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-mentor-surface shadow-sm"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-mentor-black leading-tight">
                  Serving 1,000,000+ Members
                </p>
                <p className="text-xs text-mentor-muted">
                  Nationwide healthcare network since 2021
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <HeroAnimationLoop />
        </div>
      </div>
    </section>
  );
}
