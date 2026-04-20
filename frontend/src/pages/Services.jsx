import { useState } from "react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import Reveal from "../components/shared/Reveal";
import MediaImage from "../components/shared/MediaImage";
import { IMG } from "../components/shared/images";
import { FileCheck2, Wallet, RefreshCw, UserCheck, Network, Headphones, Heart, ArrowRight } from "lucide-react";

const services = [
    { id: "claims", icon: FileCheck2, t: "Claims Management", d: "Claims adjudication, structured review, validation workflows, and operational support for faster processing and better control.", cat: "Claims" },
    { id: "cashless", icon: Wallet, t: "Cashless Claim Services", d: "Enable smoother access to treatment through structured cashless workflows and provider-side coordination.", cat: "Claims" },
    { id: "reimbursement", icon: RefreshCw, t: "Reimbursement Processing", d: "Digital reimbursement handling with better tracking, documentation flow, and claim stage visibility.", cat: "Claims" },
    { id: "beneficiary", icon: UserCheck, t: "Beneficiary Management", d: "Enrollment, member record structuring, and centralized beneficiary administration.", cat: "Members" },
    { id: "network", icon: Network, t: "Provider Coordination", d: "Hospital and provider coordination across healthcare journeys, documentation, approvals, and process flow.", cat: "Network" },
    { id: "member", icon: Headphones, t: "Member Support", d: "Operational support for members and patients across claims, access, and healthcare journey questions.", cat: "Members" },
    { id: "wellness", icon: Heart, t: "Wellness and Preventive Care", d: "Corporate wellness programs, preventive health initiatives, and long-term health support models.", cat: "Care" },
];

const CATS = ["All", "Claims", "Network", "Members", "Care"];

export default function Services() {
    const [active, setActive] = useState("All");
    const list = active === "All" ? services : services.filter((s) => s.cat === active);

    return (
        <>
            <section className="relative overflow-hidden border-b border-mentor-line mesh-hero" data-testid="serv-hero">
                <div className="pointer-events-none absolute right-[-100px] top-[-40px] h-80 w-80 rounded-full bg-mentor-blue/10 blur-3xl" />
                <div className="container-edge grid gap-10 py-20 md:grid-cols-[1.2fr,1fr] md:items-end md:py-28">
                    <Reveal>
                        <Eyebrow>Services</Eyebrow>
                        <h1 className="display-1 mt-6 max-w-3xl">Healthcare administration services built for control and scale.</h1>
                        <p className="lead mt-6 max-w-2xl">Mentor TPA combines claims administration, provider network infrastructure, digital healthcare workflows, and member support into one connected operating model.</p>
                    </Reveal>
                    <Reveal variant="right" delay={120}>
                        <MediaImage src={IMG.dashboards} alt="Operational dashboards" ratio="4/3" frame overlay="blue" />
                    </Reveal>
                </div>
            </section>

            {/* Interactive category filter */}
            <section className="border-b border-mentor-line bg-white sticky top-[72px] z-30 backdrop-blur-md bg-white/85" data-testid="serv-filter">
                <div className="container-edge flex flex-wrap gap-2 py-4">
                    {CATS.map((c) => (
                        <button
                            key={c}
                            data-testid={`serv-cat-${c.toLowerCase()}`}
                            onClick={() => setActive(c)}
                            className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${
                                active === c
                                    ? "border-mentor-black bg-mentor-black text-white"
                                    : "border-mentor-line text-mentor-muted hover:border-mentor-black hover:text-mentor-black"
                            }`}
                        >
                            {c}
                        </button>
                    ))}
                    <div className="ml-auto text-xs text-mentor-muted self-center">{list.length} services</div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-4 md:grid-cols-3">
                    {list.map((s, i) => (
                        <Reveal key={s.id} delay={i * 60}>
                            <div id={s.id} className="card-hard tilt-card scroll-mt-24 p-7 h-full">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><s.icon className="h-5 w-5" /></div>
                                    <span className="eyebrow text-[10px]">{s.cat}</span>
                                </div>
                                <div className="mt-5 text-lg font-extrabold tracking-tight">{s.t}</div>
                                <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{s.d}</p>
                                <div className="mt-5 flex items-center gap-1 text-xs font-bold text-mentor-blue opacity-0 transition group-hover:opacity-100"><ArrowRight className="h-3.5 w-3.5" /></div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <CTABand testId="serv-cta" />
        </>
    );
}
