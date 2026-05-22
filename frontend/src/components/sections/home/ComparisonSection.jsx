import React from "react";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Cpu,
  Globe,
  Workflow,
  Sparkles,
  BarChart3,
  Activity,
} from "lucide-react";
import Reveal from "../../shared/Reveal";
import { Eyebrow } from "../../shared/Eyebrow";

const reasons = [
  {
    title: "Technology-driven Healthcare Administration",
    icon: "Cpu",
  },
  {
    title: "Nationwide provider network",
    icon: "Globe",
  },
  {
    title: "Structured digital claims workflows",
    icon: "Workflow",
  },
  {
    title: "AI-enabled claims control",
    icon: "Sparkles",
  },
  {
    title: "Transparent and scalable operating model",
    icon: "BarChart3",
  },
  {
    title: "Better visibility, speed, and patient experience",
    icon: "Activity",
  },
];

const comparisonRows = [
  ["manual processing", "digital platform"],
  ["fragmented systems", "integrated ecosystem"],
  ["limited visibility", "transparent processes"],
  ["slow workflows", "scalable infrastructure"],
];

const ComparisonSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-28"
      data-testid="home-vs"
      role="region"
      aria-label="Why Mentor TPA Comparison"
    >
      <div className="container-edge">
        <Reveal className="max-w-3xl">
          <Eyebrow>Why Mentor TPA</Eyebrow>
          <h2 className="display-2 mt-5">
            Why organizations choose Mentor TPA.
          </h2>
        </Reveal>
        <div className="mt-8 md:mt-12 grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((x, i) => {
            const Icon = {
              Cpu,
              Globe,
              Workflow,
              Sparkles,
              BarChart3,
              Activity,
            }[x.icon];
            return (
              <Reveal key={i} delay={i * 80}>
                <div className="group relative flex h-full flex-col gap-4 md:gap-5 overflow-hidden rounded-2xl border border-mentor-line bg-white p-5 sm:p-6 transition-all duration-300 hover:border-mentor-blue/30 hover:shadow-[0_20px_40px_-15px_rgba(0,72,255,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mentor-blue/5 text-mentor-blue transition-colors group-hover:bg-mentor-blue group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="text-[0.95rem] font-bold leading-snug text-mentor-black">
                    {x.title}
                  </div>
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-mentor-blue transition-all duration-300 group-hover:w-full rounded-t-2xl" />
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-8 md:mt-12 overflow-hidden rounded-2xl border border-mentor-line relative">
          <div
            className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-mentor-black/80 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-sm md:hidden"
            aria-hidden="true"
          >
            Swipe <ArrowRight className="h-3 w-3" />
          </div>
          <div className="overflow-x-auto px-0">
            <table
              className="w-full border-collapse min-w-full md:min-w-0"
              aria-label="Comparison between Traditional TPA and Mentor TPA"
            >
              <thead className="bg-mentor-surface text-xs font-bold uppercase tracking-[0.14em] text-mentor-muted">
                <tr>
                  <th
                    scope="col"
                    className="p-5 text-left font-bold border-b border-mentor-line"
                  >
                    Traditional TPA
                  </th>
                  <th
                    scope="col"
                    className="p-5 text-left font-bold border-b border-mentor-line border-l bg-white text-mentor-blue"
                  >
                    Mentor TPA
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mentor-line">
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="p-5 text-sm text-mentor-muted">
                      <div className="flex items-start gap-3">
                        <XCircle
                          className="mt-0.5 h-4 w-4 flex-shrink-0"
                          aria-hidden="true"
                        />
                        {row[0]}
                      </div>
                    </td>
                    <td className="p-5 text-sm font-semibold bg-white border-l border-mentor-line">
                      <div className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-mentor-blue"
                          aria-hidden="true"
                        />
                        {row[1]}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default React.memo(ComparisonSection);
