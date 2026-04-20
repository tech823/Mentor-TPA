import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import { FileCheck2, Wallet, RefreshCw, UserCheck, Network, Headphones, Heart } from "lucide-react";

const services = [
    { id: "claims", icon: FileCheck2, t: "Claims Management", d: "Claims adjudication, structured review, validation workflows, and operational support for faster processing and better control." },
    { id: "cashless", icon: Wallet, t: "Cashless Claim Services", d: "Enable smoother access to treatment through structured cashless workflows and provider-side coordination." },
    { id: "reimbursement", icon: RefreshCw, t: "Reimbursement Processing", d: "Digital reimbursement handling with better tracking, documentation flow, and claim stage visibility." },
    { id: "beneficiary", icon: UserCheck, t: "Beneficiary Management", d: "Enrollment, member record structuring, and centralized beneficiary administration." },
    { id: "network", icon: Network, t: "Provider Coordination", d: "Hospital and provider coordination across healthcare journeys, documentation, approvals, and process flow." },
    { id: "member", icon: Headphones, t: "Member Support", d: "Operational support for members and patients across claims, access, and healthcare journey questions." },
    { id: "wellness", icon: Heart, t: "Wellness and Preventive Care", d: "Corporate wellness programs, preventive health initiatives, and long-term health support models." },
];

export default function Services() {
    return (
        <>
            <section className="border-b border-mentor-line" data-testid="serv-hero">
                <div className="container-edge py-20 md:py-28">
                    <Eyebrow>Services</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">Healthcare administration services built for control and scale.</h1>
                    <p className="lead mt-6 max-w-2xl">Mentor TPA combines claims administration, provider network infrastructure, digital healthcare workflows, and member support into one connected operating model.</p>
                </div>
            </section>
            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-4 md:grid-cols-3">
                    {services.map((s) => (<div key={s.id} id={s.id} className="card-hard scroll-mt-24 p-7"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><s.icon className="h-5 w-5" /></div><div className="mt-5 text-lg font-extrabold tracking-tight">{s.t}</div><p className="mt-3 text-sm leading-relaxed text-mentor-muted">{s.d}</p></div>))}
                </div>
            </section>
            <CTABand testId="serv-cta" />
        </>
    );
}
