import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * NoiseOverlay - A subtle grain texture to enhance the premium feel of glass
 */
const NoiseOverlay = () => (
  <div 
    className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay"
    aria-hidden="true"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

/**
 * LiquidGlassBg - Animated background blobs for depth
 * Pauses animation when scrolled out of view to save GPU/CPU.
 */
export function LiquidGlassBg({ opacity = "opacity-10", className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const state = entry.isIntersecting ? "running" : "paused";
        el.querySelectorAll(".blob").forEach((b) => {
          b.style.animationPlayState = state;
        });
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`blob-container pointer-events-none ${className}`} aria-hidden="true">
      <div className={`blob w-[500px] h-[500px] -top-20 -left-20 bg-mentor-blue/30 blur-[100px] ${opacity}`} />
      <div
        className={`blob w-[400px] h-[400px] top-1/2 -right-20 bg-blue-400/20 blur-[120px] ${opacity}`}
        style={{ animationDelay: "2s" }}
      />
      <div
        className={`blob w-[300px] h-[300px] bottom-0 left-1/3 bg-indigo-500/10 blur-[80px] ${opacity}`}
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}

/**
 * MacbookFrame - High-fidelity MacBook Pro mockup with 3D Tilt
 */
export function MacbookFrame({ children, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`macbook-frame group ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="macbook-screen overflow-hidden">
        {/* Webcam Area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-[#0A0A0B] rounded-b-2xl z-20 flex items-center justify-center border-x border-b border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#111] shadow-inner" />
        </div>
        <div className="relative h-full w-full bg-white overflow-hidden shadow-inner">
          {children}
          <NoiseOverlay />
          {/* Dynamic reflection overlay */}
          <motion.div 
            className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-white/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-40"
            style={{
              x: useTransform(mouseXSpring, [-0.5, 0.5], ["-10%", "10%"]),
              y: useTransform(mouseYSpring, [-0.5, 0.5], ["-10%", "10%"]),
            }}
          />
        </div>
      </div>
      <div className="macbook-base relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-black/20 rounded-b-md" />
      </div>
    </motion.div>
  );
}

/**
 * IphoneFrame - High-fidelity iPhone 15 Pro mockup with 3D Tilt
 */
export function IphoneFrame({ children, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`iphone-frame group ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="iphone-dynamic-island">
        <div className="w-12 h-1 bg-white/5 rounded-full" />
        <div className="iphone-island-dot" />
      </div>
      <div className="iphone-screen">
        <div className="relative h-full w-full bg-white overflow-hidden">
          {children}
          <NoiseOverlay />
          {/* Reflection */}
          <motion.div 
            className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/20 via-transparent to-white/30 opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-40"
            style={{
              x: useTransform(mouseXSpring, [-0.5, 0.5], ["-20%", "20%"]),
            }}
          />
        </div>
      </div>
      
      {/* Physical Buttons */}
      <div className="absolute -left-[2px] top-24 w-[2px] h-12 bg-gradient-to-b from-[#222] to-[#444] rounded-l-sm" />
      <div className="absolute -left-[2px] top-40 w-[2px] h-16 bg-gradient-to-b from-[#222] to-[#444] rounded-l-sm" />
      <div className="absolute -left-[2px] top-60 w-[2px] h-16 bg-gradient-to-b from-[#222] to-[#444] rounded-l-sm" />
      <div className="absolute -right-[2px] top-48 w-[2px] h-24 bg-gradient-to-b from-[#222] to-[#444] rounded-r-sm" />
    </motion.div>
  );
}
