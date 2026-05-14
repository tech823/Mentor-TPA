import React from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import Reveal from '../../shared/Reveal';
import { Eyebrow } from '../../shared/Eyebrow';

const reasons = [
  "Technology-driven healthcare administration",
  "Nationwide provider network",
  "Structured digital claims workflows",
  "AI-enabled claims control",
  "Transparent and scalable operating model",
  "Better visibility, speed, and patient experience",
];

const comparisonRows = [
  ["manual processing", "digital platform"],
  ["fragmented systems", "integrated ecosystem"],
  ["limited visibility", "transparent processes"],
  ["slow workflows", "scalable infrastructure"],
];

const ComparisonSection = () => {
  return (
    <section className="py-20 md:py-28" data-testid="home-vs" role="region" aria-label="Why Mentor TPA Comparison">
      <div className="container-edge">
        <Reveal className="max-w-3xl">
          <Eyebrow>Why Mentor TPA</Eyebrow>
          <h2 className="display-2 mt-5">
            Why organizations choose Mentor Third-Party Administrator (TPA).
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {reasons.map((x, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="flex items-start gap-3 rounded-xl border border-mentor-line p-5 transition hover:border-mentor-blue hover:bg-mentor-blue/[0.03]">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-mentor-blue" />
                <div className="text-sm font-semibold">{x}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 overflow-hidden rounded-2xl border border-mentor-line relative">
          <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-mentor-black/80 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-sm md:hidden" aria-hidden="true">
            Swipe <ArrowRight className="h-3 w-3" />
          </div>
          <div className="overflow-x-auto px-4 md:px-0">
            <table className="w-full border-collapse min-w-[600px] md:min-w-0" aria-label="Comparison between Traditional TPA and Mentor TPA">
              <thead className="bg-mentor-surface text-xs font-bold uppercase tracking-[0.14em] text-mentor-muted">
                <tr>
                  <th scope="col" className="p-5 text-left font-bold border-b border-mentor-line">Traditional TPA</th>
                  <th scope="col" className="p-5 text-left font-bold border-b border-mentor-line border-l bg-white text-mentor-blue">Mentor TPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-mentor-line">
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="p-5 text-sm text-mentor-muted">
                      <div className="flex items-start gap-3">
                        <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                        {row[0]}
                      </div>
                    </td>
                    <td className="p-5 text-sm font-semibold bg-white border-l border-mentor-line">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-mentor-blue" aria-hidden="true" />
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
