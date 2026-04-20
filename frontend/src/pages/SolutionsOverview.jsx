import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, ShieldCheck, Stethoscope } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";

const solutions = [
    { icon: Briefcase, title: "Self-Funded Companies", tag: "Employers · HR · Finance", to: "/solutions/self-funded",
      copy: "Run a modern corporate healthcare program. Replace fragmented vendors, spreadsheets, and paper claims with a single platform that gives HR and finance real visibility and real control.",
      bullets: ["Network advantage & cashless access", "Cost control mechanisms", "HR and finance relief", "Visibility and reporting"] },
    { icon: ShieldCheck, title: "Insurance Companies", tag: "Carriers · MGAs · Re-insurers", to: "/solutions/insurance",
      copy: "A digital claims engine with an AI-based control layer, wrapped in a nationwide provider network — so insurers can scale efficiently, price confidently, and launch products faster.",
      bullets: ["Digital claims engine", "AI-based control layer", "Nationwide provider network", "Efficiency and scalability"] },
    { icon: Stethoscope, title: "Healthcare Providers", tag: "Hospitals · Clinics · Labs", to: "/solutions/providers",
      copy: "Plug into one coordination layer for authorizations, QR-based verification, and claim settlements. Less back-and-forth, clearer contracts, faster revenue cycle.",
      bullets: ["QR-based patient verification","Transparent authorizations","Tracked settlements","Direct digital claim submission"] },
];

export default function SolutionsOverview() {
    return (
        <>
            <section className="border-b border-mentor-line" data-testid="sol-hero">
                <div className="container-edge py-20 md:py-28">
                    <Eyebrow>Solutions</Eyebrow>
                    <h1 className="display-1 mt-6 max-w-4xl">One operating layer, <span className="text-mentor-blue">three</span> audiences.</h1>
                    <p className="lead mt-6 max-w-2xl">Mentor TPA is the connective tissue between employers, insurers, and providers — running claims, network, and control as one system.</p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container-edge grid gap-5 md:grid-cols-3">
                    {solutions.map((s, i) => (
                        <div key={i} className="card-hard flex flex-col justify-between p-8">
                            <div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mentor-black text-white"><s.icon className="h-5 w-5" /></div>
                                <div className="eyebrow mt-6" style={{color:'#6b6b7b'}}>{s.tag}</div>
                                <div className="mt-2 text-2xl font-extrabold tracking-tight">{s.title}</div>
                                <p className="mt-3 text-sm leading-relaxed text-mentor-muted">{s.copy}</p>
                                <ul className="mt-6 space-y-2">
                                    {s.bullets.map((b,j) => (<li key={j} className="flex items-start gap-2 text-sm"><span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-mentor-blue" />{b}</li>))}
                                </ul>
                            </div>
                            <Link to={s.to} data-testid={`sol-card-${i}`} className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold">Explore <ArrowRight className="h-4 w-4" /></Link>
                        </div>
                    ))}
                </div>
            </section>

            <CTABand testId="sol-cta" />
        </>
    );
}
