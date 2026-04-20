import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, UserRound, FlaskConical, Pill } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";
import { HOSPITAL_STATS } from "../data/hospitals";

const types = [
    { icon: Building2, t: "Hospitals", d: "Multi-specialty, tertiary, and teaching hospitals — nationwide." },
    { icon: UserRound, t: "Doctors", d: "Consulting physicians and specialists across all major disciplines." },
    { icon: FlaskConical, t: "Labs", d: "Diagnostic labs and imaging centres with cashless access." },
    { icon: Pill, t: "Pharmacies", d: "Retail pharmacy partners integrated into the benefit stack." },
];

export default function ProviderNetwork() {
    return (
        <>
            <section className="border-b border-mentor-line" data-testid="pn-hero">
                <div className="container-edge py-20 md:py-28">
                    <Eyebrow>Provider Network</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">A national network, run as one coordinated layer.</h1>
                    <p className="lead mt-6 max-w-2xl">Our network covers hospitals, doctors, labs, and pharmacies — coded, contracted, and connected to a single operating layer so members get consistent cashless access.</p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-6 md:grid-cols-4">
                    {[
                        { n: HOSPITAL_STATS.total + "+", t: "Hospitals on panel" },
                        { n: HOSPITAL_STATS.cities, t: "Cities covered" },
                        { n: HOSPITAL_STATS.provinces, t: "Provinces" },
                        { n: HOSPITAL_STATS.cashless, t: "Cashless-ready" },
                    ].map((x, i) => (
                        <div key={i} className="rounded-2xl border border-mentor-line p-7">
                            <div className="stat-num">{x.n}</div>
                            <div className="mt-2 text-sm text-mentor-muted">{x.t}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="border-y border-mentor-line bg-mentor-surface py-20 md:py-28">
                <div className="container-edge">
                    <Eyebrow>What the network includes</Eyebrow>
                    <h2 className="display-2 mt-5 max-w-3xl">Coordinated care across four provider types.</h2>
                    <div className="mt-12 grid gap-4 md:grid-cols-4">
                        {types.map((t, i) => (
                            <div key={i} className="rounded-2xl border border-mentor-line bg-white p-7">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-mentor-black text-white"><t.icon className="h-5 w-5" /></div>
                                <div className="mt-5 text-lg font-extrabold tracking-tight">{t.t}</div>
                                <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{t.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge">
                    <div className="rounded-3xl border border-mentor-line bg-mentor-black p-10 text-white md:p-14">
                        <Eyebrow><span className="text-mentor-blue">Why the network matters</span></Eyebrow>
                        <h2 className="display-2 mt-5 max-w-3xl text-white">National coverage and local consistency.</h2>
                        <p className="lead mt-5 max-w-2xl text-white/70" style={{ color: "rgba(255,255,255,0.75)" }}>A strong network isn't just a list — it's the operating link between a member's benefit card and the care they actually receive.</p>
                        <Link to="/hospital-panel" data-testid="pn-cta-panel" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-mentor-black transition hover:bg-mentor-blue hover:text-white">
                            View the hospital panel list <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <CTABand testId="pn-cta" />
        </>
    );
}
