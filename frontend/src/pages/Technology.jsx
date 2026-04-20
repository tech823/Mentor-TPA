import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import { FileText, QrCode, Users, BarChart3, Cloud, Lock, Brain, Shield, Gauge, Server } from "lucide-react";

const items = [
    { icon: FileText, t: "Digital claims submission & tracking", d: "No paper forms. Real-time status on every claim, from intake to payout." },
    { icon: QrCode, t: "QR-based patient verification", d: "Fast, secure identity and eligibility checks at point of service." },
    { icon: Users, t: "Centralized user profiles", d: "One record per member — history, eligibility, and claims in one place." },
    { icon: BarChart3, t: "Dashboard reporting", d: "Role-based dashboards for HR, finance, carriers, and panel managers." },
    { icon: Cloud, t: "Cloud-based architecture", d: "Engineered for scale, reliability, and continuous delivery." },
    { icon: Lock, t: "Encrypted communications", d: "End-to-end encryption for data in transit and at rest." },
    { icon: Brain, t: "AI validation", d: "Policy-aware checks on every claim — before payout, not after." },
    { icon: Shield, t: "Fraud detection", d: "Anomaly models that surface suspicious patterns across providers and members." },
    { icon: Gauge, t: "Utilization insights", d: "Cohort-level patterns and trend lines — so decisions are data-led." },
    { icon: Server, t: "Scalable infrastructure", d: "Architected to grow with your lives covered, without linear cost growth." },
];

export default function Technology() {
    return (
        <>
            <section className="border-b border-mentor-line" data-testid="tech-hero">
                <div className="container-edge py-20 md:py-28">
                    <Eyebrow>Technology</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">A cloud-native platform with <span className="text-mentor-blue">AI</span> at the core.</h1>
                    <p className="lead mt-6 max-w-2xl">Every piece of the Mentor stack is engineered for visibility, efficiency, and scale — with security and compliance built in from day one.</p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((x, i) => (
                        <div key={i} className="card-hard p-7">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><x.icon className="h-5 w-5" /></div>
                            <div className="mt-5 text-lg font-extrabold tracking-tight">{x.t}</div>
                            <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{x.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            <CTABand eyebrow="Technology" headline="See the platform in action." subline="A 30-minute walkthrough — claims, network, dashboards, and AI." testId="tech-cta" />
        </>
    );
}
