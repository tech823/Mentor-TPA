import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import { Heart, Sparkles } from "lucide-react";

const structure = [
    { t: "Mentor Health", d: "Digital healthcare platform" },
    { t: "Mentor TPA", d: "Claims and network infrastructure" },
    { t: "Mentor Innovation", d: "Technology and analytics" },
];
const presence = ["Pakistan", "UAE", "Singapore", "USA"];
const values = ["Customer-centric approach","Transparency and integrity","Innovation through technology","Value creation for stakeholders","Continuous improvement"];

export default function About() {
    return (
        <>
            <section className="relative overflow-hidden border-b border-mentor-line mesh-hero" data-testid="about-hero">
                <div className="pointer-events-none absolute right-[-120px] top-[-60px] h-96 w-96 rounded-full bg-mentor-blue/10 blur-3xl" />
                <div className="container-edge grid gap-10 py-20 md:grid-cols-[1.2fr,1fr] md:items-end md:py-28">
                    <Reveal>
                        <Eyebrow>About Mentor TPA</Eyebrow>
                        <h1 className="display-1 mt-6 max-w-3xl">A technology-enabled healthcare administration company.</h1>
                        <p className="lead mt-6 max-w-2xl">Mentor TPA is part of the broader Mentor ecosystem, built to connect fragmented healthcare systems through technology, infrastructure, and operational coordination. We operate at the intersection of employers, insurers, providers, and patients to simplify healthcare access, claims administration, and care experience.</p>
                    </Reveal>
                    <Reveal variant="right" delay={120}>
                        <MediaImage src={IMG.teamCollab} alt="Mentor TPA team collaborating" ratio="4/3" frame overlay="blue" />
                    </Reveal>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge">
                    <Reveal className="max-w-3xl"><Eyebrow>About Mentor Group</Eyebrow><h2 className="display-2 mt-5">Part of an integrated healthcare ecosystem.</h2><p className="lead mt-5">Mentor operates as an integrated healthcare system, not a standalone service provider.</p></Reveal>
                    <div className="mt-12 grid gap-5 md:grid-cols-3">{structure.map((s,i)=>(
                        <Reveal key={i} delay={i*90}><div className="card-hard tilt-card p-8 h-full"><div className="eyebrow">0{i+1}</div><div className="mt-4 text-2xl font-extrabold tracking-tight">{s.t}</div><p className="mt-3 text-sm text-mentor-muted">{s.d}</p></div></Reveal>
                    ))}</div>
                    <div className="mt-10"><div className="eyebrow">Presence</div><div className="mt-3 flex flex-wrap gap-2">{presence.map(p => <span key={p} className="pill pill-dark transition hover:bg-mentor-blue hover:border-mentor-blue">{p}</span>)}</div></div>
                </div>
            </section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
                <div className="container-edge grid gap-10 md:grid-cols-2 md:items-center">
                    <Reveal>
                        <Eyebrow>Who we are</Eyebrow>
                        <h2 className="display-2 mt-5">Who we are.</h2>
                        <p className="lead mt-5">Mentor TPA is a technology-enabled healthcare administration company built to streamline healthcare access, administration, and experience. Our role is to provide the operational and digital layer that helps employers, insurers, providers, and patients function through one structured healthcare system.</p>
                        <div className="mt-8">
                            <MediaImage src={IMG.hospitalCorridor} alt="Modern hospital corridor" ratio="16/9" rounded="rounded-2xl" overlay="soft" />
                        </div>
                    </Reveal>
                    <div className="space-y-6">
                        <Reveal delay={120}>
                            <div className="card-hard tilt-card p-7"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><Sparkles className="h-5 w-5" /></div><div className="mt-4 text-lg font-extrabold">Our vision</div><p className="mt-2 text-sm text-mentor-muted">To transform healthcare into a transparent, accessible, and digitally managed system, moving the market from fragmented care to an integrated healthcare experience.</p></div>
                        </Reveal>
                        <Reveal delay={220}>
                            <div className="card-hard tilt-card p-7"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><Heart className="h-5 w-5" /></div><div className="mt-4 text-lg font-extrabold">Our mission</div><p className="mt-2 text-sm text-mentor-muted">To deliver efficient healthcare administration, technology-driven workflows, and seamless client and patient experience while creating long-term value across the healthcare ecosystem.</p></div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge">
                    <Reveal><Eyebrow>Our core values</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Our core values.</h2></Reveal>
                    <div className="mt-10 grid gap-3 md:grid-cols-5">{values.map((v,i)=>(
                        <Reveal key={i} delay={i*80}><div className="rounded-2xl border border-mentor-line p-5 text-sm font-semibold h-full transition hover:-translate-y-1 hover:border-mentor-blue hover:bg-mentor-blue/[0.03]"><div className="eyebrow">0{i+1}</div><div className="mt-3">{v}</div></div></Reveal>
                    ))}</div>
                </div>
            </section>

            <section className="relative overflow-hidden border-t border-mentor-line bg-mentor-black py-20 text-white md:py-28 grid-dark">
                <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(700px 400px at 20% 30%, rgba(0,72,255,0.25), transparent 60%)"}} />
                <div className="container-edge relative max-w-4xl">
                    <Reveal>
                        <Eyebrow><span className="text-mentor-blue">What makes us different</span></Eyebrow>
                        <h2 className="display-2 mt-5 text-white">We do not operate like a conventional TPA.</h2>
                        <p className="lead mt-5" style={{color:"rgba(255,255,255,0.75)"}}>Most TPAs still rely heavily on manual administration, disconnected provider relationships, and limited data visibility. Mentor TPA is being built around integrated systems, digital workflows, real-time reporting, and AI-enabled healthcare control. That difference matters because healthcare administration is no longer just a back-office function. It is now an infrastructure problem, a cost problem, and an experience problem.</p>
                    </Reveal>
                </div>
            </section>

            <CTABand eyebrow="Closing" headline="Get to know Mentor TPA in action." testId="about-cta" />
        </>
    );
}
