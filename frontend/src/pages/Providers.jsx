import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import { QrCode, FileCheck2, CreditCard, Headphones } from "lucide-react";

const benefits = [
    { icon: QrCode, t: "QR-based patient verification", d: "Identity, eligibility, and benefit scope verified at the counter — no phone calls, no paperwork." },
    { icon: FileCheck2, t: "Direct digital claim submission", d: "Submit claims through a single portal with automated validations and status tracking." },
    { icon: CreditCard, t: "Tracked settlements", d: "Transparent, reconcilable payouts with clear SLAs and visible cycle times." },
    { icon: Headphones, t: "Responsive coordination", d: "A dedicated provider desk for escalations, onboarding, and commercial conversations." },
];

export default function Providers() {
    return (
        <>
            <section className="border-b border-mentor-line" data-testid="prov-hero">
                <div className="container-edge py-20 md:py-28">
                    <Eyebrow>For Healthcare Providers</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">Less friction at the front desk. Cleaner revenue at the back.</h1>
                    <p className="lead mt-6 max-w-2xl">Mentor TPA gives hospitals, clinics, labs, and pharmacies a single digital interface for eligibility, authorization, claims, and settlement.</p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-4 md:grid-cols-2">
                    {benefits.map((b, i) => (
                        <div key={i} className="card-hard p-7">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><b.icon className="h-5 w-5" /></div>
                            <div className="mt-5 text-xl font-extrabold tracking-tight">{b.t}</div>
                            <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{b.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            <CTABand eyebrow="Providers" headline="Join the Mentor panel." subline="We'd like to understand your facility and how we can work together." testId="prov-cta" />
        </>
    );
}
