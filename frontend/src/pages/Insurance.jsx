import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import { Cpu, Shield, TrendingUp, Rocket, Network, Activity } from "lucide-react";

const capabilities = [
    { icon: Cpu, t: "Digital claims engine", d: "Submission, adjudication, and settlement on a single auditable pipeline — configurable to each product and benefit rule." },
    { icon: Shield, t: "AI-based control layer", d: "Automated validation, anomaly detection and fraud signals — working before payout, not after." },
    { icon: Network, t: "Nationwide provider network", d: "A managed hospital, doctor, and pharmacy network — coded, contracted, and cashless-ready." },
    { icon: TrendingUp, t: "Efficiency and scalability", d: "Architected to absorb growth in lives covered without linear growth in operating cost." },
    { icon: Rocket, t: "Speed to market", d: "Launch new products and benefit structures without rebuilding your operating stack." },
    { icon: Activity, t: "Customer experience", d: "Cleaner member journeys, faster approvals, and transparent communication." },
];

const manage = [
    "Claims intake and adjudication",
    "Network contracting and coordination",
    "Pre-authorization workflows",
    "Member eligibility and onboarding",
    "Fraud, waste and abuse signals",
    "Utilization and cost reporting",
    "Call centre and query resolution",
    "Provider settlement and reconciliation",
];

export default function Insurance() {
    return (
        <>
            <section className="border-b border-mentor-line" data-testid="ins-hero">
                <div className="container-edge py-20 md:py-28">
                    <Eyebrow>For Insurance Companies</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">The claims, network, and control layer your carrier deserves.</h1>
                    <p className="lead mt-6 max-w-2xl">Plug Mentor TPA into your health portfolio and operate with the efficiency of a cloud-native platform — without rebuilding your core.</p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-10 md:grid-cols-2">
                    <div className="card-hard p-8">
                        <Eyebrow>The challenge</Eyebrow>
                        <div className="mt-4 text-3xl font-extrabold tracking-tight">Traditional models don't scale.</div>
                        <p className="mt-4 text-sm leading-relaxed text-mentor-muted">Legacy TPAs lean on manual workflows, fragmented systems, and opaque provider relationships. That makes it hard to control cost, hard to spot fraud, and hard to launch new products quickly.</p>
                    </div>
                    <div className="card-hard p-8">
                        <Eyebrow>The hidden risk</Eyebrow>
                        <div className="mt-4 text-3xl font-extrabold tracking-tight">Leakage is the silent line item.</div>
                        <p className="mt-4 text-sm leading-relaxed text-mentor-muted">Without real-time validation and data-led oversight, small inefficiencies compound across thousands of claims — eroding loss ratios quietly until renewal.</p>
                    </div>
                </div>
            </section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
                <div className="container-edge">
                    <Eyebrow>Mentor TPA for insurers</Eyebrow>
                    <h2 className="display-2 mt-5 max-w-3xl">Six capabilities, one coordinated operating layer.</h2>
                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {capabilities.map((c, i) => (
                            <div key={i} className="rounded-2xl border border-mentor-line bg-white p-7">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mentor-black text-white"><c.icon className="h-5 w-5" /></div>
                                <div className="mt-5 text-lg font-extrabold tracking-tight">{c.t}</div>
                                <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{c.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-12 md:grid-cols-[1fr,1.2fr] md:items-center">
                    <div>
                        <Eyebrow>What we manage</Eyebrow>
                        <h2 className="display-2 mt-5">The end-to-end admin stack — so you can focus on underwriting and growth.</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        {manage.map((m, i) => (
                            <div key={i} className="flex items-start gap-3 rounded-xl border border-mentor-line p-4">
                                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-mentor-blue" />
                                <div className="text-sm font-semibold">{m}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-mentor-line bg-mentor-black py-20 text-white md:py-28">
                <div className="container-edge">
                    <Eyebrow><span className="text-mentor-blue">Implementation</span></Eyebrow>
                    <h2 className="display-2 mt-5 max-w-3xl text-white">Integration-first. Carrier-friendly.</h2>
                    <p className="lead mt-5 max-w-2xl text-white/70" style={{ color: "rgba(255,255,255,0.75)" }}>We integrate with your core systems and reporting structures — keeping the carrier in control while Mentor TPA handles the operational lift.</p>
                </div>
            </section>

            <CTABand eyebrow="Insurance" headline="Let's talk portfolio economics." subline="Request a proposal or book a deep-dive with our team." testId="ins-cta" />
        </>
    );
}
