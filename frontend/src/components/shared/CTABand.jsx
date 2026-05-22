import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CTABand({
  eyebrow = "Next step",
  headline = "Let's see how Mentor TPA fits your organization.",
  subline = "Book a 30-minute working session with our team — or request a formal proposal tailored to your group.",
  testId = "cta-band",
}) {
  return (
    <section
      data-testid={testId}
      className="relative isolate overflow-hidden bg-white"
    >
      <div className="container-edge py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-mentor-line bg-mentor-black p-8 text-white md:p-16">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-mentor-blue/25 blur-3xl" />
          <div className="absolute right-10 top-10 hidden h-2 w-32 bg-mentor-blue md:block" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-end">
            <div>
              <div className="eyebrow !text-white/70">{eyebrow}</div>
              <h2 className="display-2 mt-4 text-white">{headline}</h2>
              <p className="lead mt-4 text-white">{subline}</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/book-demo"
                data-testid={`${testId}-demo`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-mentor-black"
              >
                Book a Demo
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/request-proposal"
                data-testid={`${testId}-proposal`}
                className="inline-flex items-center gap-2 rounded-full bg-mentor-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-mentor-black"
              >
                Get a Proposal
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
