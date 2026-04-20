import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import { CheckCircle2, Network, Eye, Coins, Users, Activity } from "lucide-react";

const sections = [
    { eyebrow: "The problem", title: "Current corporate healthcare is broken.", copy: "Most self-funded plans are run through disconnected vendors, delayed paper claims, and spreadsheets that can't keep up. HR becomes a helpdesk. Finance sees the bill only after it's too late to act." },
    { eyebrow: "The hidden cost", title: "You can't control what you can't see.", copy: "Leakage, duplicate claims, over-utilization, and weak provider discipline don't show up on a summary report — but they show up on the renewal." },
];

const how = [
    { n: "01", t: "Onboard the plan", d: "Members, eligibility, benefit design and rules configured on the Mentor platform." },
    { n: "02", t: "Access the network", d: "Cashless, QR-verified visits across our contracted national provider network." },
    { n: "03", t: "Run the claims engine", d: "Digital submission, automated validation, and auditable adjudication — end-to-end." },
    { n: "04", t: "See and steer", d: "HR and finance dashboards with real utilization, cost and leakage signals." },
];

const levers = [
    { icon: Network, t: "Network advantage", d: "Contracted hospitals, doctors, and pharmacies with negotiated structures and cashless access." },
    { icon: Coins, t: "Cost control mechanisms", d: "Benefit rules, pre-authorization logic, and AI-based validation working together — before payout, not after." },
    { icon: Activity, t: "Digital experience", d: "QR-verified visits, digital cards, and member-friendly access with no paper in the loop." },
    { icon: Users, t: "HR and finance relief", d: "No more chasing paperwork or reconciling vendor statements — one dashboard, one source of truth." },
    { icon: Eye, t: "Employee experience", d: "Clear benefits, faster approvals, and consistent service across the network." },
    { icon: CheckCircle2, t: "Visibility and reporting", d: "Utilization, claim velocity, leakage indicators and renewal-ready data on demand." },
];

const steps = [
    { t: "Discovery & design", d: "We understand your headcount, benefit intent, and current pain points." },
    { t: "Plan configuration", d: "Eligibility, benefit rules, co-pays, and provider access configured on the platform." },
    { t: "Member onboarding", d: "Digital cards issued, communication rolled out, providers informed." },
    { t: "Go-live & steady state", d: "Cashless claims, dashboards, and ongoing account management." },
];

export default function SelfFunded() {
    return (
        <>
            <section className="border-b border-mentor-line" data-testid="sf-hero">
                <div className="container-edge py-20 md:py-28">
                    <Eyebrow>For Self-Funded Companies</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">A modern corporate health plan — finally under control.</h1>
                    <p className="lead mt-6 max-w-2xl">One platform for your network, your claims, and your reporting. Improve cost efficiency, reduce leakage, strengthen visibility, and give your people a cleaner healthcare experience.</p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-10 md:grid-cols-2">
                    {sections.map((s, i) => (
                        <div key={i} className="card-hard p-8">
                            <Eyebrow>{s.eyebrow}</Eyebrow>
                            <div className="mt-4 text-3xl font-extrabold tracking-tight">{s.title}</div>
                            <p className="mt-4 text-sm leading-relaxed text-mentor-muted">{s.copy}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
                <div className="container-edge">
                    <Eyebrow>How it works</Eyebrow>
                    <h2 className="display-2 mt-5 max-w-3xl">From onboarding to insight — one continuous loop.</h2>
                    <div className="mt-12 grid gap-4 md:grid-cols-4">
                        {how.map((h) => (
                            <div key={h.n} className="relative rounded-2xl border border-mentor-line bg-white p-6">
                                <div className="eyebrow">{h.n}</div>
                                <div className="mt-4 text-lg font-extrabold tracking-tight">{h.t}</div>
                                <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{h.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge">
                    <Eyebrow>What you get</Eyebrow>
                    <h2 className="display-2 mt-5 max-w-3xl">Six levers pulling in the same direction.</h2>
                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {levers.map((l, i) => (
                            <div key={i} className="card-hard p-7">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mentor-black text-white"><l.icon className="h-5 w-5" /></div>
                                <div className="mt-5 text-lg font-extrabold tracking-tight">{l.t}</div>
                                <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{l.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-mentor-line bg-mentor-black py-20 text-white md:py-28">
                <div className="container-edge">
                    <Eyebrow><span className="text-mentor-blue">Implementation</span></Eyebrow>
                    <h2 className="display-2 mt-5 max-w-3xl text-white">A predictable four-step rollout.</h2>
                    <div className="mt-12 grid gap-4 md:grid-cols-4">
                        {steps.map((s, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <div className="text-xs font-bold uppercase tracking-[0.14em] text-mentor-blue">Step {i + 1}</div>
                                <div className="mt-3 text-lg font-extrabold tracking-tight">{s.t}</div>
                                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABand eyebrow="Self-Funded" headline="Let's put your plan on a real operating layer." testId="sf-cta" />
        </>
    );
}
