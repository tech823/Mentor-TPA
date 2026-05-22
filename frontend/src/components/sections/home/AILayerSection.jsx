import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "../../shared/Reveal";
import { Eyebrow } from "../../shared/Eyebrow";

const features = [
  "Digital claims submission and tracking",
  "QR-based patient verification",
  "Centralized member profiles",
  "Real-time dashboards",
  "Secure cloud infrastructure",
  "Automated claim validation",
  "Fraud detection mechanisms",
  "Utilization insights and reporting",
];

const AILayerSection = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-28"
      data-testid="home-ai"
      role="region"
      aria-label="Digital and AI Layer"
    >
      <div className="container-edge grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <Eyebrow>Digital & AI layer</Eyebrow>
          <h2 className="display-2 mt-5">
            Healthcare Administration, digitized.
          </h2>
          <p className="lead mt-5">
            Mentor TPA is not a traditional TPA wrapped in nice branding. It is
            being built as a digital Healthcare Administration layer with
            automation, data intelligence, and scalable workflows at its core.
          </p>
          <div className="mt-8">
            <Link to="/technology" className="u-expand text-sm font-semibold">
              See Technology Infrastructure <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <ul
          className="grid grid-cols-2 gap-2 md:gap-3"
          aria-label="Key features of our digital and AI layer"
        >
          {features.map((x, i) => (
            <Reveal key={i} delay={i * 40} as="li" className="h-full">
              <div className="flex items-center gap-2 rounded-xl border border-mentor-line p-3 sm:p-4 text-sm font-semibold transition hover:border-mentor-blue hover:bg-mentor-blue/5 h-full min-h-[92px]">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-mentor-blue"
                  aria-hidden="true"
                />
                {x}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default React.memo(AILayerSection);
