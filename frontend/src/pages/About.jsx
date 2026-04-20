import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import { ShieldCheck, Sparkles, Building, Target } from "lucide-react";

const principles = [
    { n: "01", t: "Simplify", l: "Be clear. Be concise. Be direct.", d: "Healthcare is complex enough. Our systems remove friction so sponsors, members and providers can focus on care." },
    { n: "02", t: "Give it contrast", l: "Be bold. Be thoughtful. Be tenacious.", d: "We sit at the cross-section of technology and healthcare. Our work pairs engineering discipline with real operational depth." },
    { n: "03", t: "Stay a rebel", l: "Be expressive. Be unapologetic.", d: "We challenge the status-quo of paper workflows and opaque TPAs — and we build the infrastructure to replace them." },
];

const stance = [
    { icon: ShieldCheck, t: "SECP licensed", d: "Operating under a regulated framework for Third Party Administration." },
    { icon: Building, t: "Shariah compliant", d: "Designed to meet the requirements of Shariah-compliant health plans." },
    { icon: Sparkles, t: "AI enabled", d: "Validation, utilization and fraud intelligence baked into every claim." },
    { icon: Target, t: "Built for outcomes", d: "Metrics that matter — improved efficiency, reduced leakage, better visibility." },
];

export default function About() {
    return (
        <>
            <section className="border-b border-mentor-line" data-testid="about-hero">
                <div className="container-edge py-20 md:py-28">
                    <Eyebrow>About Mentor TPA</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">We're building the operating layer for modern healthcare administration.</h1>
                    <p className="lead mt-6 max-w-2xl">Mentor TPA is a technology-enabled Third Party Administrator, engineered to run claims, network, and control for self-funded companies, insurers, and providers across Pakistan.</p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-10 md:grid-cols-2">
                    <div>
                        <Eyebrow>Our position</Eyebrow>
                        <h2 className="display-2 mt-5">Regulated. Compliant. Digital.</h2>
                    </div>
                    <p className="lead">We sit inside regulatory guardrails and on top of a modern technology stack — so sponsors get the assurance of a licensed administrator, with the efficiency of a cloud-native platform.</p>
                </div>
                <div className="container-edge mt-12 grid gap-4 md:grid-cols-4">
                    {stance.map((x, i) => (
                        <div key={i} className="card-hard p-6">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><x.icon className="h-5 w-5" /></div>
                            <div className="mt-5 text-lg font-extrabold tracking-tight">{x.t}</div>
                            <p className="mt-2 text-sm leading-relaxed text-mentor-muted">{x.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="border-t border-mentor-line bg-mentor-surface py-20 md:py-28">
                <div className="container-edge">
                    <div className="max-w-3xl">
                        <Eyebrow>Principles</Eyebrow>
                        <h2 className="display-2 mt-5">The way we design, build, and operate.</h2>
                    </div>
                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {principles.map((p) => (
                            <div key={p.n} className="rounded-2xl border border-mentor-line bg-white p-8">
                                <div className="eyebrow">{p.n}</div>
                                <div className="mt-4 text-3xl font-extrabold tracking-tight text-mentor-blue">{p.t}</div>
                                <div className="mt-2 text-base font-semibold">{p.l}</div>
                                <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{p.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABand eyebrow="Work with us" headline="Serious infrastructure for serious healthcare." subline="Whether you're an insurer, an employer, or a hospital group — we'd like to understand your setup." testId="about-cta" />
        </>
    );
}
