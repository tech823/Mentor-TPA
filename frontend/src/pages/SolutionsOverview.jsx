import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, ShieldCheck, Stethoscope } from "lucide-react";
import { Eyebrow } from "../components/shared/Eyebrow";
import CTABand from "../components/shared/CTABand";

const items = [
    { icon: Briefcase, title: "For Self-Funded Companies", to: "/solutions/self-funded", cta: "See Self-Funded Solution" },
    { icon: ShieldCheck, title: "For Insurance Companies", to: "/solutions/insurance", cta: "See Insurance Solution" },
    { icon: Stethoscope, title: "For Providers", to: "/solutions/providers", cta: "View Provider Network" },
];

export default function SolutionsOverview() {
    return (
        <>
            <section className="border-b border-mentor-line"><div className="container-edge py-20 md:py-28"><Eyebrow>Solutions</Eyebrow><h1 className="display-1 mt-6 max-w-4xl">Healthcare solutions built for control, scale, and experience.</h1><p className="lead mt-6 max-w-2xl">Mentor TPA supports different healthcare stakeholders through tailored infrastructure and administration models, whether you are managing employee healthcare, insurance claims operations, or healthcare delivery access.</p></div></section>
            <section className="py-20 md:py-28"><div className="container-edge grid gap-5 md:grid-cols-3">{items.map((s,i)=>(<Link key={i} to={s.to} data-testid={`sol-card-${i}`} className="card-hard flex flex-col justify-between p-8"><div><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mentor-black text-white"><s.icon className="h-5 w-5" /></div><div className="mt-6 text-2xl font-extrabold tracking-tight">{s.title}</div></div><div className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold">{s.cta} <ArrowRight className="h-4 w-4" /></div></Link>))}</div></section>
            <CTABand testId="sol-cta" />
        </>
    );
}
