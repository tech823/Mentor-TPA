import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import Counter from "../components/shared/Counter";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import { Heart, Users, Network } from "lucide-react";
import { IpadFrame } from "@/components/ui/LiquidGlassComponents";

export default function Providers() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-mentor-line mesh-hero">
        <div className="pointer-events-none absolute right-[-100px] top-[-40px] h-80 w-80 rounded-full bg-mentor-blue/10 blur-3xl" />
        <div className="container-fluid grid gap-10 py-20 md:grid-cols-[1.15fr,1fr] md:items-center md:py-28">
          <Reveal>
            <Eyebrow>For Healthcare Providers</Eyebrow>
            <h1 className="display-1 mt-6 max-w-3xl">
              Join a structured healthcare network.
            </h1>
            <p className="lead mt-6 max-w-2xl">
              Partner with Mentor TPA to become part of a growing healthcare
              ecosystem connected to employers, insurers, and digitally enabled
              healthcare workflows.
            </p>
            <a
              href="/contact"
              className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-full bg-mentor-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-mentor-blue"
              data-testid="prov-cta-join"
            >
              Become a Network Partner
            </a>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <IpadFrame className="w-full !hover:transform-none">
              <MediaImage
                src={IMG.HealthcareProviders}
                alt="Mentor Providers"
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
      <section className="py-20 md:py-28 border-t border-mentor-line bg-white overflow-hidden">
        <div className="container-edge">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <Eyebrow>Partner Ecosystem</Eyebrow>
              <h2 className="display-2 mt-4">Built for a growing network.</h2>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr] lg:items-center">
            {/* Vertical Cards Stack */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Network,
                  t: "Why partner with Mentor TPA",
                  items: [
                    "access to a wider patient ecosystem",
                    "stronger administrative coordination",
                    "digital workflow integration",
                    "structured claims and access systems",
                    "participation in a growing healthcare network",
                  ],
                },
                {
                  icon: Users,
                  t: "Who can join",
                  items: [
                    "hospitals",
                    "clinics",
                    "diagnostics and labs",
                    "pharmacies",
                    "healthcare facilities aligned with network standards",
                  ],
                },
                {
                  icon: Heart,
                  t: "What providers gain",
                  items: [
                    "better visibility in the network",
                    "operational coordination",
                    "structured cashless access pathways",
                    "participation in a more digitized healthcare flow",
                  ],
                },
              ].map((col, i) => (
                <Reveal key={i} delay={i * 100} variant="left">
                  <div className="card-hard tilt-card group flex gap-6 p-7 transition-all hover:border-mentor-blue">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-mentor-black text-white transition-transform group-hover:scale-110">
                      <col.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-extrabold tracking-tight">
                        {col.t}
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-mentor-muted">
                        {col.items.map((x, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 rounded-full bg-mentor-blue flex-shrink-0" />
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right Side Image */}
            <Reveal variant="right" delay={120}>
              <IpadFrame className="w-full !hover:transform-none">
                <MediaImage
                  src={IMG.PartnerEcosystem}
                  alt="Mentor Providers"
                  ratio="auto"
                  hover={false}
                  overlay="none"
                  className="h-full w-full !border-0 rounded-none bg-black"
                  imgClass="object-fit"
                />
              </IpadFrame>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
        <div className="container-edge grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <Eyebrow>Network scale</Eyebrow>
            <h2 className="display-2 mt-5">
              Join a network that is already scaling.
            </h2>
            <p className="lead mt-5">
              Mentor TPA brings structured demand, administrative clarity, and
              digital coordination into every provider relationship.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["300+", "hospitals"],
              ["15,000+", "doctors"],
              ["700+", "labs & diagnostics"],
              ["100+", "pharmacy network"],
            ].map(([n, t], i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl border border-mentor-line bg-white p-6 h-full transition hover:-translate-y-1 hover:border-mentor-blue">
                  <div className="stat-num text-mentor-blue">
                    <Counter value={n} />
                  </div>
                  <div className="mt-2 text-sm text-mentor-muted">{t}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Providers"
        headline="Apply to Join Network."
        subline="Contact Provider Relations to begin onboarding."
        testId="prov-cta"
      />
    </>
  );
}
