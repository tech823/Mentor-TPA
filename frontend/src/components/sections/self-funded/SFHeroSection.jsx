import React from "react";
import Reveal from "../../shared/Reveal";
import { Eyebrow } from "../../shared/Eyebrow";
import MediaImage from "../../shared/MediaImage";
import { IMG } from "../../shared/images";
import { IpadFrame } from "@/components/ui/LiquidGlassComponents";

const SFHeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-mentor-line mesh-hero">
      <div className="pointer-events-none absolute right-[-120px] top-[-60px] h-96 w-96 rounded-full bg-mentor-blue/10 blur-3xl" />
      <div className="container-fluid grid gap-6 md:gap-10 py-12 sm:py-16 md:grid-cols-[1.15fr,1fr] md:items-center md:py-28">
        <Reveal>
          <Eyebrow>For Self-Funded Companies</Eyebrow>
          <h1 className="display-1 mt-6 max-w-3xl">
            Take control of your healthcare costs.
          </h1>
          <p className="lead mt-6 max-w-2xl text-mentor-muted">
            Mentor TPA turns self-funded healthcare into a structured, digital,
            and controllable system, helping companies reduce cost, improve
            visibility, and create a better employee experience.
          </p>
          <a
            href="/request-proposal"
            data-testid="sf-cta-hero"
            className="btn-shimmer mt-8 inline-flex items-center rounded-full bg-mentor-black px-6 py-3 sm:px-8 sm:py-4 text-sm font-semibold text-white transition hover:bg-mentor-blue"
          >
            Request a Cost Assessment
          </a>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <IpadFrame className="w-full !hover:transform-none">
            <MediaImage
              src={IMG.corporateMeeting}
              alt="Mentor TPA team"
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
  );
};

export default React.memo(SFHeroSection);
