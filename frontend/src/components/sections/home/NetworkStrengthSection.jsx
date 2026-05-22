import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../../shared/Reveal";
import { Eyebrow } from "../../shared/Eyebrow";
import Counter from "../../shared/Counter";
import { motion } from "framer-motion";
import { IMG } from "../../shared/images";

const stats = [
  { n: "300+", t: "Hospitals" },
  { n: "15,000+", t: "Doctors" },
  { n: "700+", t: "Labs & Diagnostics" },
  { n: "100+", t: "Pharmacy network" },
];

const cities = [
  { name: "", x: "42%", y: "79%" },
  { name: "", x: "71%", y: "42%" },
  { name: "", x: "66%", y: "35%" },
  { name: "", x: "65%", y: "47%" },
  { name: "", x: "57%", y: "33%" },
  { name: "", x: "75%", y: "18%" },
  { name: "", x: "38%", y: "52%" },
  { name: "", x: "78%", y: "32%" },
  { name: "", x: "48%", y: "72%" },
];

const NetworkStrengthSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-mentor-black py-12 sm:py-16 md:py-28 text-white grid-dark"
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
      <div className="container-edge relative grid gap-8 md:gap-12 md:grid-cols-[1fr,1.2fr] md:items-center">
        <Reveal>
          <Eyebrow>
            <span className="text-mentor-blue">Network strength</span>
          </Eyebrow>
          <h2 className="display-2 mt-5 text-white">
            Nationwide healthcare access through one connected network.
          </h2>
          <p className="lead mt-5 text-white/75">
            Mentor TPA enables structured access to a nationwide network of
            healthcare providers, helping clients reduce fragmentation and
            improve access consistency across locations.
          </p>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {stats.map((x, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="glow-pill text-white rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 md:p-6 transition hover:-translate-y-1 hover:border-mentor-blue/60">
                  <h3 className="stat-num text-white break-words">
                    <Counter value={x.n} />
                  </h3>
                  <div className="mt-2 text-xs sm:text-sm text-white/70">{x.t}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4">
            <Link
              to="/provider-network"
              data-testid="home-network-cta"
              className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 sm:px-7 sm:py-4 text-sm font-semibold text-mentor-black transition hover:bg-mentor-blue hover:text-white"
            >
              Explore Provider Network <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[800px] lg:scale-110 origin-center">
            {/* Subtle Glow Behind Map */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 bg-mentor-blue/10 blur-[80px] rounded-full pointer-events-none"
              aria-hidden="true"
            />

            {/* Pakistan Map Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              src={IMG.pakistan}
              alt="Pakistan Map"
              className="relative h-auto w-full brightness-105 contrast-110 saturate-[1.1] drop-shadow-[0_0_40px_rgba(0,72,255,0.1)]"
            />

            {/* City Pointers */}
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="absolute"
                style={{ left: city.x, top: city.y }}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    mass: 1,
                    delay: 1.2 + idx * 0.15, // Staggered entry
                  }}
                  className="relative flex items-center justify-center"
                >
                  {/* Animated Pulse Ring */}
                  <motion.div
                    animate={{
                      scale: [1, 3],
                      opacity: [0.6, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: idx * 0.2, // Offset the pulses
                    }}
                    className="absolute h-5 w-5 rounded-full bg-mentor-blue/40"
                  />
                  {/* Solid Center Dot */}
                  <div className="h-2.5 w-2.5 rounded-full bg-mentor-blue shadow-[0_0_15px_rgba(0,72,255,1)]" />

                  {/* City Name Label - More readable */}
                  <div className="absolute top-5 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                    {city.name}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(NetworkStrengthSection);
