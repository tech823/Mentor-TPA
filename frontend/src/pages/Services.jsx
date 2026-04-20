import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import { FileText, Network, Eye, Shield, Headphones, Wallet } from "lucide-react";

const services = [
    { icon: FileText, t: "Claims administration", d: "Intake, validation, adjudication, and settlement — run digitally, auditable end-to-end." },
    { icon: Network, t: "Network management", d: "Contracting, coding, and coordination with a national network of hospitals, doctors, labs and pharmacies." },
    { icon: Shield, t: "Pre-authorization & medical review", d: "Rule-driven authorization workflows with clinical oversight where it matters." },
    { icon: Eye, t: "Dashboards & reporting", d: "Utilization, cost, claim velocity, and leakage reporting for every stakeholder." },
    { icon: Headphones, t: "Member & provider desk", d: "Responsive support for members, HR teams and panel providers." },
    { icon: Wallet, t: "Settlement & reconciliation", d: "Transparent provider settlements with traceability and clean reporting." },
];

export default function Services() {
    return (
        <>
            <section className="border-b border-mentor-line" data-testid="serv-hero">
                <div className="container-edge py-20 md:py-28">
                    <Eyebrow>Services</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">The full administration stack, delivered as one service.</h1>
                    <p className="lead mt-6 max-w-2xl">Mentor TPA runs the operational layer of your health plan — from first submission to last reconciliation.</p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-4 md:grid-cols-3">
                    {services.map((s, i) => (
                        <div key={i} className="card-hard p-7">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><s.icon className="h-5 w-5" /></div>
                            <div className="mt-5 text-lg font-extrabold tracking-tight">{s.t}</div>
                            <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{s.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            <CTABand testId="serv-cta" />
        </>
    );
}
