import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import { Heart, Shield, Sparkles } from "lucide-react";

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
            <section className="border-b border-mentor-line" data-testid="about-hero">
                <div className="container-edge py-20 md:py-28">
                    <Eyebrow>About Mentor TPA</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">A technology-enabled healthcare administration company.</h1>
                    <p className="lead mt-6 max-w-2xl">Mentor TPA is part of the broader Mentor ecosystem, built to connect fragmented healthcare systems through technology, infrastructure, and operational coordination. We operate at the intersection of employers, insurers, providers, and patients to simplify healthcare access, claims administration, and care experience.</p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge">
                    <div className="max-w-3xl"><Eyebrow>About Mentor Group</Eyebrow><h2 className="display-2 mt-5">Part of an integrated healthcare ecosystem.</h2><p className="lead mt-5">Mentor operates as an integrated healthcare system, not a standalone service provider.</p></div>
                    <div className="mt-12 grid gap-5 md:grid-cols-3">{structure.map((s,i)=>(<div key={i} className="card-hard p-8"><div className="eyebrow">0{i+1}</div><div className="mt-4 text-2xl font-extrabold tracking-tight">{s.t}</div><p className="mt-3 text-sm text-mentor-muted">{s.d}</p></div>))}</div>
                    <div className="mt-8"><div className="eyebrow">Presence</div><div className="mt-3 flex flex-wrap gap-2">{presence.map(p => <span key={p} className="pill pill-dark">{p}</span>)}</div></div>
                </div>
            </section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
                <div className="container-edge grid gap-10 md:grid-cols-2">
                    <div><Eyebrow>Who we are</Eyebrow><h2 className="display-2 mt-5">Who we are.</h2><p className="lead mt-5">Mentor TPA is a technology-enabled healthcare administration company built to streamline healthcare access, administration, and experience. Our role is to provide the operational and digital layer that helps employers, insurers, providers, and patients function through one structured healthcare system.</p></div>
                    <div className="space-y-6">
                        <div className="card-hard p-7"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><Sparkles className="h-5 w-5" /></div><div className="mt-4 text-lg font-extrabold">Our vision</div><p className="mt-2 text-sm text-mentor-muted">To transform healthcare into a transparent, accessible, and digitally managed system, moving the market from fragmented care to an integrated healthcare experience.</p></div>
                        <div className="card-hard p-7"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><Heart className="h-5 w-5" /></div><div className="mt-4 text-lg font-extrabold">Our mission</div><p className="mt-2 text-sm text-mentor-muted">To deliver efficient healthcare administration, technology-driven workflows, and seamless client and patient experience while creating long-term value across the healthcare ecosystem.</p></div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge">
                    <Eyebrow>Our core values</Eyebrow><h2 className="display-2 mt-5 max-w-3xl">Our core values.</h2>
                    <div className="mt-10 grid gap-3 md:grid-cols-5">{values.map((v,i)=>(<div key={i} className="rounded-2xl border border-mentor-line p-5 text-sm font-semibold"><div className="eyebrow">0{i+1}</div><div className="mt-3">{v}</div></div>))}</div>
                </div>
            </section>

            <section className="border-t border-mentor-line bg-mentor-black py-20 text-white md:py-28">
                <div className="container-edge max-w-4xl">
                    <Eyebrow><span className="text-mentor-blue">What makes us different</span></Eyebrow>
                    <h2 className="display-2 mt-5 text-white">We do not operate like a conventional TPA.</h2>
                    <p className="lead mt-5 text-white/75" style={{color:"rgba(255,255,255,0.75)"}}>Most TPAs still rely heavily on manual administration, disconnected provider relationships, and limited data visibility. Mentor TPA is being built around integrated systems, digital workflows, real-time reporting, and AI-enabled healthcare control. That difference matters because healthcare administration is no longer just a back-office function. It is now an infrastructure problem, a cost problem, and an experience problem.</p>
                </div>
            </section>

            <CTABand eyebrow="Closing" headline="Get to know Mentor TPA in action." testId="about-cta" />
        </>
    );
}
